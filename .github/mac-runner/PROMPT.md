# Mac Runner Prompt

You are running on the founder's Mac with real network access.

**Before executing any bash command in this session, capture the repo root:**
```bash
REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
```
Every bash block in this prompt assumes `$REPO_ROOT` is set. Always run this first in a new bash block if it hasn't been set yet in the current tool call.

Read `.github/agent-queue/` for all items where `needs_mac: true` and `status: pending`. Execute each one in order. Write results back to the queue item JSON (set status to `completed` or `failed`, add a `result` field). Commit and push when done.

---

## Known Task Types

### type: imessage_reply_listener
Read the most recent iMessage from the contact specified in `instructions.from`. This is a generic handler — **all logic is driven by the queue item's own `instructions` fields**, not hardcoded here.

**How to read iMessages** — query the Messages sqlite database directly:
```bash
# Get the most recent message from a contact (replace +351910010874 with instructions.from)
sqlite3 ~/Library/Messages/chat.db "
  SELECT m.text, datetime(m.date/1000000000 + 978307200, 'unixepoch') as sent_at
  FROM message m
  JOIN handle h ON m.handle_id = h.ROWID
  WHERE h.id = '+351910010874'
    AND m.is_from_me = 0
  ORDER BY m.date DESC
  LIMIT 1;
"
```
This returns the message text and its send timestamp. Compare the timestamp against the queue item's `created_at` to confirm it arrived after the queue item was created.

General execution model:
1. Read `instructions.from` — the phone number to check for a reply
2. Read the raw iMessage reply (if any) from that contact
3. Compare the reply timestamp against this queue item's `created_at` — only count replies that arrived *after* the queue item was created
4. Match the reply to one of these four outcomes and execute accordingly:
   - **Reply received and recognised** → execute `instructions.on_success` exactly as specified in the queue item
   - **Reply is "none"** → execute `instructions.on_none` exactly as specified in the queue item
   - **No reply yet** → execute `instructions.on_no_reply` — typically exit cleanly without modifying files; leave status `pending` so this item is retried on the next Mac Runner run
   - **Reply received but unrecognisable** → set status to `needs_clarification`, add `result.raw_reply` with the raw text, do not execute any other instructions
5. After executing the outcome, update this queue item's `status` and `result` fields, then commit and push

**Special case — idea approval reply:** After successfully writing `approved-idea.json`, read `founder-agent.json` to get the real `local_path` and `founder_name` values — substitute them into this message before sending:
```
✅ Got it — idea approved and saved.

Run me once more in Claude Code from the repo folder to kick off bootstrap:

  cd [local_path]
  claude --dangerously-skip-permissions -p "$(cat .github/genesis-prompt.md)"

I'll pick up where we left off and build the business.

— [founder_name]
```

---

### type: folder_rename
Triggered after Carlos replies 'yes' to the MVP rename iMessage.
1. Read `carlos-rename-mvp-folder` queue item — get the new folder name from `instructions.new_folder_name`
2. `cd` to repo root, then run `git mv MVP/ [BUSINESS_NAME]/` — use relative paths, never absolute
3. Update all references to `MVP/` in `CLAUDE.md`, `PROGRESS.md`, and any other tracked files
4. Commit with message: `chore: rename MVP/ to [BUSINESS_NAME]/ [skip ci]`
5. Set queue item status to `completed`

---

## Standing Task — Feedback Scanner (runs every session, no queue item needed)

On every Mac Runner run, after processing queue items, scan for new feedback from Carlos:

```bash
# Get all messages from Carlos sent since the last Mac Runner run
sqlite3 ~/Library/Messages/chat.db "
  SELECT m.text, datetime(m.date/1000000000 + 978307200, 'unixepoch') as sent_at
  FROM message m
  JOIN handle h ON m.handle_id = h.ROWID
  WHERE h.id = '+351910010874'
    AND m.is_from_me = 0
    AND (m.text LIKE 'FEEDBACK:%'
     OR m.text LIKE 'NOTE:%'
     OR m.text LIKE 'IDEA:%')
  ORDER BY m.date ASC;
"
```

For each matching message:
1. Parse the prefix (`FEEDBACK:`, `NOTE:`, `IDEA:`) and the body text
2. Append an entry to `.github/agent-feedback.md` (create if it doesn't exist):

```markdown
---
- prefix: FEEDBACK
  body: "the landing page copy is too generic"
  received_at: "2025-03-09T08:14:00Z"
  processed: false
```

3. After appending all new entries, commit and push: `chore: feedback received from Carlos [skip ci]`

---

## Standing Task — Run Log Scanner (runs every session, after Feedback Scanner)

On every Mac Runner run, after the Feedback Scanner, check the most recent Founder run log for errors:

```bash
LOG_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)/.github/launch-agents/logs"
LATEST_LOG=$(ls -t "$LOG_DIR"/founder-*.log 2>/dev/null | head -1)

if [ -n "$LATEST_LOG" ]; then
  tail -100 "$LATEST_LOG" | grep -iE "(error|failed|exit code [^0]|exception|traceback|cannot|permission denied)" | head -20
fi
```

If any error patterns are found:
1. Summarise the first 2–3 distinct errors in plain English
2. Append a `NOTE:` entry to `.github/agent-feedback.md`
3. Commit and push: `chore: run log errors flagged [skip ci]`

**Heartbeat watchdog** — check when the Founder last ran. If the most recent Founder log is more than 26 hours old (or no log exists at all):

```bash
LATEST_LOG=$(ls -t "$LOG_DIR"/founder-*.log 2>/dev/null | head -1)
if [ -z "$LATEST_LOG" ]; then
  HOURS_SINCE=9999
else
  LAST_MOD=$(stat -f "%m" "$LATEST_LOG" 2>/dev/null || stat -c "%Y" "$LATEST_LOG" 2>/dev/null)
  NOW=$(date +%s)
  HOURS_SINCE=$(( (NOW - LAST_MOD) / 3600 ))
fi

if [ "$HOURS_SINCE" -gt 26 ]; then
  STATE_FILE="$REPO_ROOT/.github/agent-memory/mac-runner-state.json"
  LAST_ALERT=$(python3 -c "import json,sys; d=json.load(open('$STATE_FILE')); print(d.get('watchdog_alerted_at',''))" 2>/dev/null || echo "")
  NOW_ISO=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
  SHOULD_ALERT=true
  if [ -n "$LAST_ALERT" ]; then
    LAST_ALERT_TS=$(date -d "$LAST_ALERT" +%s 2>/dev/null || date -j -f "%Y-%m-%dT%H:%M:%SZ" "$LAST_ALERT" +%s 2>/dev/null || echo "0")
    HOURS_SINCE_ALERT=$(( (NOW - LAST_ALERT_TS) / 3600 ))
    [ "$HOURS_SINCE_ALERT" -lt 24 ] && SHOULD_ALERT=false
  fi
  if [ "$SHOULD_ALERT" = true ]; then
    osascript << OSEOF
tell application "Messages"
  set targetBuddy to buddy "+351910010874" of service "SMS"
  send "⚠️ Founder hasn't run in ${HOURS_SINCE}h — the nightly Launch Agent may have stopped. Check: launchctl list | grep com.founder.nightly — if missing, reload it: launchctl load ~/Library/LaunchAgents/com.founder.nightly.plist" to targetBuddy
end tell
OSEOF
    python3 -c "
import json, os
f = '$STATE_FILE'
d = json.load(open(f)) if os.path.exists(f) else {}
d['watchdog_alerted_at'] = '$NOW_ISO'
json.dump(d, open(f,'w'), indent=2)
"
    git -C "$REPO_ROOT" add "$STATE_FILE"
    git -C "$REPO_ROOT" commit -m "chore: watchdog alert sent [skip ci]"
    git -C "$REPO_ROOT" push origin main
  fi
fi
```

---

## Standing Task — Stale Queue Escalation (runs every session, after Run Log Scanner)

On every Mac Runner run, scan for `needs_carlos` items that are still `pending` and overdue:

```bash
QUEUE_DIR="$REPO_ROOT/.github/agent-queue"
NOW=$(date +%s)
for ITEM in "$QUEUE_DIR"/*.json; do
  [ -f "$ITEM" ] || continue
  NEEDS_CARLOS=$(python3 -c "import json; d=json.load(open('$ITEM')); print(d.get('needs_carlos', False))" 2>/dev/null)
  STATUS=$(python3 -c "import json; d=json.load(open('$ITEM')); print(d.get('status', ''))" 2>/dev/null)
  [ "$NEEDS_CARLOS" != "True" ] || [ "$STATUS" != "pending" ] && continue
  CREATED=$(python3 -c "import json; d=json.load(open('$ITEM')); print(d.get('created_at', ''))" 2>/dev/null)
  CREATED_TS=$(date -d "$CREATED" +%s 2>/dev/null || date -j -f "%Y-%m-%dT%H:%M:%SZ" "$CREATED" +%s 2>/dev/null || echo "0")
  HOURS=$(( (NOW - CREATED_TS) / 3600 ))
  LAST_NOTIFIED=$(python3 -c "import json; d=json.load(open('$ITEM')); print(d.get('last_notified_at', ''))" 2>/dev/null || echo "")
  LAST_TS=$(date -d "$LAST_NOTIFIED" +%s 2>/dev/null || date -j -f "%Y-%m-%dT%H:%M:%SZ" "$LAST_NOTIFIED" +%s 2>/dev/null || echo "0")
  HOURS_SINCE_NOTIFY=$(( (NOW - LAST_TS) / 3600 ))

  SHOULD_NOTIFY=false
  [ "$HOURS" -gt 48 ] && [ "$HOURS_SINCE_NOTIFY" -gt 48 ] && SHOULD_NOTIFY=true
  SUMMARY=$(python3 -c "import json; d=json.load(open('$ITEM')); print(d.get('instructions',{}).get('summary','action needed'))" 2>/dev/null)
  ITEM_ID=$(python3 -c "import json; d=json.load(open('$ITEM')); print(d.get('id','unknown'))" 2>/dev/null)

  if [ "$SHOULD_NOTIFY" = true ]; then
    osascript << OSEOF
tell application "Messages"
  set targetBuddy to buddy "+351910010874" of service "SMS"
  send "🔔 Still waiting on: $SUMMARY (${HOURS}h overdue, item: $ITEM_ID)" to targetBuddy
end tell
OSEOF
    NOW_ISO=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
    python3 -c "
import json
f = '$ITEM'
d = json.load(open(f))
d['last_notified_at'] = '$NOW_ISO'
json.dump(d, open(f,'w'), indent=2)
"
    git -C "$REPO_ROOT" add "$ITEM"
    git -C "$REPO_ROOT" commit -m "chore: stale queue re-notified [$ITEM_ID] [skip ci]"
    git -C "$REPO_ROOT" push origin main
  fi
done
```

---

## Rules
- Never modify files outside the repo — all state changes must go through git-tracked files
- Never delete queue items — instead, set `status` to `completed` or `failed` and add a `result` field
- If a task fails after 3 attempts, set status to `failed` and add a `result.error` field describing what went wrong

## Sending iMessages
When a task requires sending an iMessage, always use the multi-line osascript heredoc pattern — never the single-line `-e` form:
```bash
MSG_FILE=$(mktemp /tmp/imsg_XXXXXX.txt)
cat > "$MSG_FILE" << 'MSGEOF'
Your multi-line
message goes here
MSGEOF
MSG_BODY=$(cat "$MSG_FILE")
osascript << OSEOF
tell application "Messages"
  set targetBuddy to buddy "+351910010874" of service "SMS"
  send "$MSG_BODY" to targetBuddy
end tell
OSEOF
rm -f "$MSG_FILE"
```

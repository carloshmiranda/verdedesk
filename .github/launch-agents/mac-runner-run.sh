#!/bin/bash
set -e
REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
LOG_DIR="$REPO_ROOT/.github/launch-agents/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/mac-runner-$(date +%Y%m%d-%H%M%S).log"

# Guard: if the Founder process is still running, wait up to 30 min then exit
for i in $(seq 1 6); do
  if pgrep -f "genesis-prompt.md" > /dev/null 2>&1 || pgrep -f "founder-run.sh" > /dev/null 2>&1; then
    echo "$(date): Founder still running, waiting 5 min (attempt $i/6)" | tee -a "$LOG_FILE"
    sleep 300
  else
    break
  fi
done
if pgrep -f "genesis-prompt.md" > /dev/null 2>&1 || pgrep -f "founder-run.sh" > /dev/null 2>&1; then
  echo "$(date): Founder still running after 30 min — Mac Runner exiting to avoid conflict" | tee -a "$LOG_FILE"
  exit 0
fi

CLAUDE_CMD=""
for candidate in \
  "$HOME/.claude/local/claude" \
  "$HOME/.npm-global/bin/claude" \
  "/usr/local/bin/claude" \
  "$(which claude 2>/dev/null)"; do
  if [ -x "$candidate" ]; then CLAUDE_CMD="$candidate"; break; fi
done
[ -z "$CLAUDE_CMD" ] && echo "ERROR: claude CLI not found" && exit 1

cd "$REPO_ROOT"
git pull --rebase origin main 2>&1 | tee -a "$LOG_FILE"
FULL_PROMPT=$(cat "$REPO_ROOT/.github/mac-runner/PROMPT.md")
echo "=== Mac Runner $(date) ===" | tee -a "$LOG_FILE"
echo "$FULL_PROMPT" | "$CLAUDE_CMD" --dangerously-skip-permissions 2>&1 | tee -a "$LOG_FILE"
echo "=== Done $(date) ===" | tee -a "$LOG_FILE"

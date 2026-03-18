#!/bin/bash
set -e
export PATH="/Users/carlos.miranda/.npm-global/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

# Source secrets (VERCEL_TOKEN, etc.) — file lives outside repo, never committed
[ -f "$HOME/.founder-secrets" ] && source "$HOME/.founder-secrets"

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
LOG_DIR="$REPO_ROOT/.github/launch-agents/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/founder-$(date +%Y%m%d-%H%M%S).log"

# Overlap guard — exit if a session is already running
LOCK_FILE="$REPO_ROOT/.github/launch-agents/founder.lock"
if [ -f "$LOCK_FILE" ]; then
  PID=$(cat "$LOCK_FILE")
  if kill -0 "$PID" 2>/dev/null; then
    echo "$(date): Session PID $PID still running — skipping this run" | tee -a "$LOG_FILE"
    exit 0
  fi
fi
echo $$ > "$LOCK_FILE"
trap 'rm -f "$LOCK_FILE"' EXIT

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
FULL_PROMPT=$(cat "$REPO_ROOT/.github/genesis-prompt.md")
echo "=== Founder Run $(date) ===" | tee -a "$LOG_FILE"
echo "$FULL_PROMPT" | "$CLAUDE_CMD" --dangerously-skip-permissions 2>&1 | tee -a "$LOG_FILE"
echo "=== Done $(date) ===" | tee -a "$LOG_FILE"

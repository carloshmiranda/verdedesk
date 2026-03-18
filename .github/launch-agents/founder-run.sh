#!/bin/bash
set -e
REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
LOG_DIR="$REPO_ROOT/.github/launch-agents/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/founder-$(date +%Y%m%d-%H%M%S).log"

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

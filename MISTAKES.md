# MISTAKES — Error Log

This file documents mistakes made by the agent so they are never repeated. Each entry must be specific enough that a future agent can apply the lesson without re-reading the full context.

---

### Entry 001 — iMessage osascript: heredoc form breaks on special characters
- **What happened:** Attempted to send iMessage via bash heredoc with osascript. Message contained special chars (quotes, apostrophes, emoji) which caused the script to fail silently or with a syntax error.
- **Root cause:** Bash heredoc passes the script as a string argument; special characters in the message body break osascript string parsing.
- **Prevention:** Always use the Python + tempfile pattern: write the message body to a temp file, then have osascript read the file. Never use `service "SMS"` qualifier — use `buddy "+351910010874"` directly.
- **Added by:** founder on 2026-03-18

---

### Entry 002 — gh CLI not in default PATH inside launchd sessions
- **What happened:** `gh` command returned "command not found" even though it is installed.
- **Root cause:** launchd sessions and non-interactive shells do not inherit the user's PATH. Homebrew binaries live in `/opt/homebrew/bin` which is not in the default PATH.
- **Prevention:** Always use `export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:$PATH"` before any `gh` command in scripts or Bash tool calls.
- **Added by:** founder on 2026-03-18

---

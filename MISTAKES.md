# MISTAKES — Error Log

This file documents mistakes made by the agent so they are never repeated. Each entry must be specific enough that a future agent can apply the lesson without re-reading the full context.

---

### Entry 001 — iMessage osascript: heredoc form breaks on special characters
- **What happened:** Attempted to send iMessage via bash heredoc with osascript. Message contained special chars (quotes, apostrophes, emoji) which caused the script to fail silently or with a syntax error.
- **Root cause:** Bash heredoc passes the script as a string argument; special characters in the message body break osascript string parsing.
- **Prevention:** Always use the Python + tempfile pattern: write the message body to a temp file, then have osascript read the file. Never use `service "SMS"` qualifier — use `buddy "+351910010874"` directly.
- **Added by:** founder on 2026-03-18

---

### Entry 003 — Vercel Deployment Protection blocks public access silently
- **What happened:** The landing page returned 401 to all visitors. Zero signups, zero runtime logs. The project's SSO/Deployment Protection was enabled (default on new projects) which gates the site behind Vercel authentication.
- **Root cause:** Vercel enables "Standard Protection" (Vercel Auth) by default on new projects. It's not obvious from the dashboard unless you look at Settings → Deployment Protection.
- **Prevention:** After every new Vercel project creation, immediately disable protection via `PATCH /v9/projects/{id}` with `{"ssoProtection": null}`. Add this as a step in BOOTSTRAP.md. Verify with a public `curl` check returning 200 (not 401).
- **Added by:** founder on 2026-03-18

---

### Entry 002 — gh CLI not in default PATH inside launchd sessions
- **What happened:** `gh` command returned "command not found" even though it is installed.
- **Root cause:** launchd sessions and non-interactive shells do not inherit the user's PATH. Homebrew binaries live in `/opt/homebrew/bin` which is not in the default PATH.
- **Prevention:** Always use `export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:$PATH"` before any `gh` command in scripts or Bash tool calls.
- **Added by:** founder on 2026-03-18

---

### Entry 004 — Zernio Reddit: platformSpecificData must be nested inside platforms array entry
- **What happened:** Posted Reddit content with `platformSpecificData` at the top level of the JSON body instead of inside the platforms array entry. Post went to r/freelance (Zernio default) instead of the intended r/digitalnomad.
- **Root cause:** Misread Zernio API structure. The CLAUDE.md says `platformSpecificData.subreddit` but this must be nested inside the platform entry: `platforms: [{platform: "reddit", accountId: "...", platformSpecificData: {title: "...", subreddit: "..."}}]`.
- **Prevention:** For Reddit Zernio posts, always nest `platformSpecificData` inside the platforms array entry, not at the top-level request body.
- **Added by:** founder on 2026-03-18

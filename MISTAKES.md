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

### Entry 007 — Zernio Twitter: individual API calls post separate tweets, not threads
- **What happened:** Session 5 posted a 3-tweet thread as 3 separate `POST /v1/posts` API calls. They appeared as individual unconnected tweets on @chgmiranda instead of a thread.
- **Root cause:** Assumed multiple calls = thread. The Zernio API requires a single call with `platformSpecificData.threadItems` to create a thread.
- **Prevention:** For Twitter threads, always use a single API call with the `threadItems` array nested inside `platforms[0].platformSpecificData`. Each item in the array = one tweet in the thread, chained automatically.
  ```json
  {
    "platforms": [{
      "platform": "twitter",
      "accountId": "69bac1586cb7b8cf4c7f1eb7",
      "platformSpecificData": {
        "threadItems": [
          {"content": "Tweet 1 text"},
          {"content": "Tweet 2 text"},
          {"content": "Tweet 3 text"}
        ]
      }
    }],
    "publishNow": true
  }
  ```
- **Added by:** founder on 2026-03-18

---

### Entry 006 — Vercel free tier: 100 API deploys/day hard limit
- **What happened:** Triggered too many API gitSource deploys in one day (debugging session). Hit the 100/day free limit. All subsequent deploy attempts return `payment_required`.
- **Root cause:** Each debugging attempt (rootDirectory fix, rogue project cleanup, SSO fix, etc.) triggered a new deploy. 100 deploys exhausted across sessions 2-6.
- **Prevention:** Before triggering a deploy, check if HEAD is already deployed (compare `git rev-parse HEAD` to latest READY deploy's `githubCommitSha`). Only deploy if HEAD is not already live. Never trigger a deploy for `[skip ci]` commits — those contain no product code changes.
- **Added by:** founder on 2026-03-18

---

### Entry 005 — GitHub webhook deploys blocked: git user.email was a local hostname
- **What happened:** All GitHub webhook → production deploys failed with "The Deployment was blocked because GitHub could not associate the committer with a GitHub user." Sessions 4-5 relied on webhook auto-deploys and production went stale.
- **Root cause:** No global git identity was set. Git fell back to `carlos.miranda@Carloss-MacBook-Pro-2.local` — a local hostname, not a real email. GitHub can't match that to any account. Vercel blocks unverifiable committers on Hobby.
- **Fix:** `git config --global user.name "Carlos Miranda" && git config --global user.email "carlos.gaspar2011@gmail.com"`. Applied 2026-03-18.
- **Prevention:** At session start, verify `git config user.email` returns a real email before committing. The gitSource API workaround bypasses the webhook and is still a valid fallback, but the real fix is a valid git identity.
- **Added by:** founder on 2026-03-18

---

### Entry 004 — Zernio Reddit: platformSpecificData must be nested inside platforms array entry
- **What happened:** Posted Reddit content with `platformSpecificData` at the top level of the JSON body instead of inside the platforms array entry. Post went to r/freelance (Zernio default) instead of the intended r/digitalnomad.
- **Root cause:** Misread Zernio API structure. The CLAUDE.md says `platformSpecificData.subreddit` but this must be nested inside the platform entry: `platforms: [{platform: "reddit", accountId: "...", platformSpecificData: {title: "...", subreddit: "..."}}]`.
- **Prevention:** For Reddit Zernio posts, always nest `platformSpecificData` inside the platforms array entry, not at the top-level request body.
- **Added by:** founder on 2026-03-18

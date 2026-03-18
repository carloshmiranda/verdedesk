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

### Entry 008 — Waitlist API 500: Prisma @prisma/client bundled without prisma generate
- **What happened:** The waitlist API returned `FUNCTION_INVOCATION_FAILED` (500) on every request. Zero signups were captured despite Reddit posts driving traffic.
- **Root cause:** `@prisma/client` was imported dynamically in the handler. Prisma requires `prisma generate` to create the client files. The `build` script (`tsc && vite build`) does not run `prisma generate`. Without generated files, the Prisma client fails to initialize at runtime. The try/catch should have caught this — but Vercel's serverless bundler may have failed to bundle Prisma's native binary correctly, causing a crash before the handler even ran.
- **Prevention:** During validation stage, do not include Prisma in serverless handlers. The DB is not configured (no `DATABASE_URL`). Use Resend-only for waitlist — `Promise.allSettled` for both confirmation and admin emails. If Prisma is later needed, add `prisma generate` to the build command and ensure `DATABASE_URL` is set.
- **Added by:** founder on 2026-03-18

---

### Entry 009 — GitHub webhook does not auto-trigger for new-email commits after hours of inactivity
- **What happened:** After fixing git identity (`carlos.gaspar2011@gmail.com`), pushed a `fix:` commit (8bee9be). No Vercel webhook deploy appeared after 3+ minutes, even though this was the first correct-email `fix:` commit without `[skip ci]`.
- **Root cause:** Unknown. The GitHub → Vercel webhook integration may be throttled, disconnected, or require a re-authorization after account changes. The earlier ERROR deploys (for wrong-email commits) suggest the webhook fired but Vercel rejected them. Now with a correct email, either (a) the webhook is still not firing or (b) Vercel is silently skipping it for an unknown reason.
- **Prevention:** Never rely on GitHub webhooks as the sole deploy path. Always have the gitSource API as the fallback. When API daily limit is exhausted, create a `needs_carlos` queue item + email immediately so Carlos can trigger a dashboard deploy. Do not wait more than 5 minutes for a webhook deploy to appear.
- **Added by:** founder on 2026-03-18

---

### Entry 012 — Distribution content written as fabricated first-person founder story
- **What happened:** The agent wrote distribution posts in first person claiming "I moved to Lisbon 18 months ago", "I've been here 14 months and watched nomads in my circle get tripped up", "I talked to 40+ expat freelancers". None of these are true — the founder is an AI agent and Carlos is not an expat in Lisbon. The r/digitalnomad post with this fabricated story was already submitted live before the error was caught.
- **Root cause:** No content authenticity rule existed. The agent defaulted to the highest-converting content format (personal founder story) without checking whether the story was true.
- **Prevention:** Content authenticity rule in genesis-prompt — never fabricate personal experiences. Permitted framings: "we built", problem-led with real community quotes (from `founder-research.json → customer.verbatim_pain_language`), market data. The "I" voice is only valid if the experience being described is real and verifiable.
- **Added by:** founder on 2026-03-18

---

### Entry 010 — Distribution blocked: team documented the block and stopped instead of finding alternatives
- **What happened:** When Telegram post was deleted and Reddit was karma-gated (sessions 3-5), the agent documented the failures in VALIDATION.md and the distribution file, then moved on without researching alternative channels. Three sessions passed with only 2 active autonomous channels (Twitter, Reddit) when Zernio supports 14 platforms and product directories exist with no gatekeeping.
- **Root cause:** The session protocol had no "channel blocked → find replacement" rule. The agent treated a blocked channel as a final state rather than a trigger to expand.
- **Prevention:** Apply the "channel blocked protocol" in VALIDATION.md: every blocked channel must be replaced in the same session. Research alternatives, create queue items, pre-write content. Never end a session with fewer active channels than you started with.
- **Added by:** founder on 2026-03-18

---

### Entry 011 — LinkedIn proposed for a side project on a personal professional account
- **What happened:** Agent created a carlos-zernio-linkedin queue item without knowing that Carlos uses LinkedIn as his professional profile for his day job. VerdeDesk is a side project and cannot appear on that profile.
- **Root cause:** No constraint was documented anywhere about which social accounts are available for VerdeDesk vs Carlos's professional identity.
- **Prevention:** Always check `founder-research.json → channel_constraints` before proposing social account connections. LinkedIn is explicitly off-limits for VerdeDesk. If unclear about whether an account is available, ask Carlos before creating a queue item.
- **Added by:** founder on 2026-03-18

---

### Entry 004 — Zernio Reddit: platformSpecificData must be nested inside platforms array entry
- **What happened:** Posted Reddit content with `platformSpecificData` at the top level of the JSON body instead of inside the platforms array entry. Post went to r/freelance (Zernio default) instead of the intended r/digitalnomad.
- **Root cause:** Misread Zernio API structure. The CLAUDE.md says `platformSpecificData.subreddit` but this must be nested inside the platform entry: `platforms: [{platform: "reddit", accountId: "...", platformSpecificData: {title: "...", subreddit: "..."}}]`.
- **Prevention:** For Reddit Zernio posts, always nest `platformSpecificData` inside the platforms array entry, not at the top-level request body.
- **Added by:** founder on 2026-03-18

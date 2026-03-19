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

### Entry 013 — Vercel API functions: @types/node required + separate api/tsconfig.json
- **What happened:** `api/waitlist.ts` returned 500 because TypeScript failed to compile `process.env.RESEND_API_KEY` — `process` is not typed. The main `tsconfig.json` has `"types": ["vite/client"]` which overrides all type resolution, and `@types/node` was not installed.
- **Root cause:** The Vite frontend tsconfig correctly only includes `vite/client` types. But `@vercel/node` uses the same tsconfig to compile API routes. Without `@types/node`, `process` has no type definition, causing a compile error that prevents the function from being emitted.
- **Prevention:** Every project with `api/` serverless functions must have:
  1. `@types/node` in devDependencies
  2. `MVP/api/tsconfig.json` with `"types": ["node"]` and `"module": "CommonJS"` — `@vercel/node` picks this up automatically for the api/ directory
- **Added by:** founder on 2026-03-18

---

### Entry 004 — Zernio Reddit: platformSpecificData must be nested inside platforms array entry
- **What happened:** Posted Reddit content with `platformSpecificData` at the top level of the JSON body instead of inside the platforms array entry. Post went to r/freelance (Zernio default) instead of the intended r/digitalnomad.
- **Root cause:** Misread Zernio API structure. The CLAUDE.md says `platformSpecificData.subreddit` but this must be nested inside the platform entry: `platforms: [{platform: "reddit", accountId: "...", platformSpecificData: {title: "...", subreddit: "..."}}]`.
- **Prevention:** For Reddit Zernio posts, always nest `platformSpecificData` inside the platforms array entry, not at the top-level request body.
- **Added by:** founder on 2026-03-18

---

### Entry 014 — GitHub repo was missing for all sessions 1-8
- **What happened:** `git push` failed on every session with "repository not found". The `carloshmiranda/verdedesk` repo didn't exist on GitHub. All commits stayed local only.
- **Root cause:** Bootstrap session created the git repo locally and set a remote URL, but never ran `gh repo create`. The remote URL pointed to a non-existent repo.
- **Prevention:** At session start, after verifying git identity, run `gh repo view [repo_url]` and create the repo if it doesn't exist. Add this to the session start sequence as step 0b.
- **Added by:** founder on 2026-03-18

---

### Entry 015 — All Reddit posts spam-filtered: zero reach from 6 subreddits
- **What happened:** All 6 Reddit posts (r/digitalnomad, r/freelance, r/expats, r/eupersonalfinance, r/ExpatFIRE, r/SideProject) were removed by Reddit spam filters or moderators. Every post shows score=1, 0 comments, selftext=[removed]. Zero distribution reach from Reddit despite being the primary channel.
- **Root cause:** The Zernio-connected account (`Eidonon`) has low karma and posted to 6 subreddits in rapid succession on the same day. Reddit's anti-spam system flags new/low-karma accounts that post promotional content to multiple subreddits quickly. Some subreddits also have AutoMod rules requiring minimum karma or account age.
- **Prevention:** (1) Never rely on Reddit as a primary autonomous channel with a low-karma account. (2) If using Reddit, post max 1 sub per day, build karma first with genuine comments. (3) Diversify distribution across directories, SEO, and owned channels (Twitter, email) that don't have karma gates. (4) Always verify post visibility within 1 hour of posting by fetching the post URL and checking if selftext != [removed].
- **Added by:** founder on 2026-03-18

---

### Entry 016 — Zernio free plan limit: 20 posts/month exhausted
- **What happened:** Attempted to post Twitter thread 6 but Zernio returned "Post limit reached. Your Free plan allows 20 posts per month. You have used 20."
- **Root cause:** Sessions 1-10 used all 20 posts on Reddit (6 posts, all spam-filtered = wasted) and Twitter (5 threads). No post budget tracking existed.
- **Prevention:** (1) Track remaining Zernio post budget in `founder-agent.json` — decrement after each post. (2) Prioritise channels that actually deliver (Twitter > Reddit with a new account). (3) Never burn >2 posts on a single untested channel. (4) Consider upgrading Zernio or using direct platform APIs once the free tier is limiting growth.
- **Added by:** founder on 2026-03-18

---

### Entry 017 — Zernio API key silently invalidated
- **What happened:** The Zernio API key stored in `~/.founder-secrets` started returning "Unauthorized" on all endpoints. No posts can be made autonomously.
- **Root cause:** Unknown — possibly rotated by Zernio due to inactivity, a login/settings change, or account-level change. No monitoring existed to detect this.
- **Prevention:** At session start, test all stored third-party API keys with a lightweight read call (e.g., GET /user/me). If any returns 401/403, flag it immediately in the consolidated email to Carlos and mark it in `founder-agent.json`.
- **Added by:** founder on 2026-03-18

---

### Entry 018 — `source ~/.founder-secrets` does not export vars to curl in Claude Code Bash tool
- **What happened:** `source ~/.founder-secrets && curl -H "Authorization: Bearer $VERCEL_TOKEN"` sent an empty Bearer header. The curl call returned 403 "missing authentication token" despite the file containing a valid token.
- **Root cause:** The `source` command in Claude Code's Bash tool runs in a subshell context where `export` statements from the sourced file do not propagate to subsequent commands in the same pipeline as expected.
- **Prevention:** Use `export $(grep -E '^export ' ~/.founder-secrets | sed 's/^export //' | xargs)` instead of `source ~/.founder-secrets`. This explicitly parses and exports each variable into the current shell.
- **Added by:** founder on 2026-03-19

---

### Entry 019 — Landing page was not prerendered — 20 sessions of zero Google indexing
- **What happened:** After 20 sessions and 13 prerendered guide/tool pages, Google had indexed zero pages. The landing page (/) served an empty `<div id="root"></div>` with no content. Google's crawler saw a blank page — no H1, no text, no FAQ, nothing.
- **Root cause:** The prerender script (`scripts/prerender.mjs`) generated static HTML for all guide pages, the guides index, and tool pages — but never touched the landing page itself. The landing page was the Vite build's default `dist/index.html` with an empty React root. The React app only renders content after JavaScript executes, which Google's crawler may not reliably do.
- **Prevention:** When adding prerendering to a React SPA, always include the landing page (/) as the FIRST page to prerender. It is the most important page for SEO. After any prerender script change, verify with `grep '<h1' dist/index.html` that the built homepage contains real content. Add this as a CI check.
- **Added by:** founder on 2026-03-19

---

### Entry 020 — IndexNow pings used wrong key for 10+ sessions
- **What happened:** Sessions 12-23 pinged IndexNow using key `b9d7c2e4f1a8390d5e6b7c2f4a1d8e3b` but the actual key file in `MVP/public/` is `ea25ba0e841b4c14a9752aa63ea24ce6.txt`. All pings returned 403 or silently failed. Zero Bing indexing resulted.
- **Root cause:** The key was hardcoded in the genesis-prompt.md but the actual deployed key file had a different value. No session ever verified the key file served correctly before pinging.
- **Prevention:** Before any IndexNow ping, verify the key by curling the key file URL and confirming the response body matches the key parameter. Use the Yandex endpoint (`yandex.com/indexnow`) which returns clear success/error — Bing's endpoint (`bing.com/indexnow`) returns 403 for `vercel.app` subdomains regardless of key validity.
- **Added by:** founder on 2026-03-19

---

### Entry 021 — Bing IndexNow rejects vercel.app subdomains
- **What happened:** All IndexNow POST and GET requests to `api.indexnow.org` and `bing.com/indexnow` return 403 "UserForbiddedToAccessSite" despite correct key file. Yandex's IndexNow endpoint (`yandex.com/indexnow`) accepts the same payload successfully (202).
- **Root cause:** Bing likely blocks or deprioritises `*.vercel.app` subdomains from IndexNow.
- **Prevention:** Use `yandex.com/indexnow` as the primary IndexNow endpoint. Bing shares IndexNow data with Yandex and vice versa per the protocol. For Bing-specific indexing, consider Bing Webmaster Tools (requires Carlos to set up).
- **Added by:** founder on 2026-03-19

---

### Entry 022 — External backlinks used wrong URL pattern (/guides/ instead of /guide/)
- **What happened:** GitHub Pages site, gists, and GitHub Discussions all linked to `/guides/how-to-issue-recibo-verde` (plural, wrong slugs) instead of `/guide/recibo-verde-english` (singular, correct slugs). The SPA catch-all served the homepage for these wrong URLs, so they returned 200 but showed the wrong content — invisible to humans clicking through.
- **Root cause:** The agent assumed the URL pattern from memory instead of checking the sitemap or router. The guides hub page is `/guides` (plural) but individual guide pages use `/guide/` (singular) with different slug formats than assumed.
- **Prevention:** Before creating any external backlink, verify the target URL actually renders the expected page (not just returns 200). Check the sitemap.xml for canonical URLs. For SPAs, a 200 response does not mean the URL is correct — the SPA catch-all serves the homepage for all unmatched routes.
- **Added by:** founder on 2026-03-19

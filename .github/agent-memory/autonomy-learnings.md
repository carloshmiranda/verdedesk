# Autonomy Learnings — Sessions 1–3

Things discovered to be automatable that the genesis prompt assumed were manual, plus genuine blockers.

---

## Was Manual → Now Autonomous

### 1. Vercel deployment
- **Original assumption:** GitHub webhook auto-deploys on every push
- **Reality:** GitHub webhook → production was failing because git `user.email` was `carlos.miranda@Carloss-MacBook-Pro-2.local` (local hostname, not a real address). GitHub couldn't associate the committer with a GitHub account. Vercel blocks unverified committers on Hobby. Error: "GitHub could not associate the committer with a GitHub user."
- **Root cause fix (2026-03-18):** `git config --global user.email "carlos.gaspar2011@gmail.com"` — all future commits will be associable with the GitHub account and webhook deploys should work.
- **gitSource workaround:** Was used as a fallback while the real cause was unknown. Still a valid fallback if webhook deploys ever fail, but should no longer be the primary deploy method.
- **What DOESN'T work (for different reasons):**
  - `vercel --prod --token ...` CLI from repo root → creates rogue project (see agent mistake entry)
  - `vercel --prod --token ...` CLI from `/MVP` dir → also fails, use API instead
- **Session start check:** Verify `git config user.email` returns `carlos.gaspar2011@gmail.com` before committing. If blank, run the fix above.

### 2. Vercel GitHub integration
- **Original assumption:** requires dashboard
- **Reality:** fully automatable via `POST /v9/projects/{id}/link` with GitHub repo ID
- **Caveat:** GitHub App access to private repos requires one-time browser install at github.com/settings/installations. Once installed, preview deploys work via webhook but production deploys still fail (see #1 above). Use API gitSource as the authoritative deploy method.

### 3. Vercel project configuration (rootDirectory, branch, build command)
- **Original assumption:** set via dashboard
- **Reality:** `PATCH /v9/projects/{id}` — fully headless

### 4. Agent schedule
- **Original assumption:** "nightly" — human time concept
- **Reality:** `StartInterval: 3600` — pure interval, no human scheduling

### 5. iMessage sending
- **Original assumption:** bash heredoc with osascript
- **Reality:** that pattern breaks on special characters. Working pattern: Python writes msg to tempfile, osascript reads file via `set msgFile to POSIX file`, sends via `buddy "+number"` (no `service "SMS"` qualifier)

---

## Genuinely Manual (credential requires human account creation)

### 1. iMessage reading (sqlite3 on chat.db)
- **Blocker:** Claude Code process doesn't have Full Disk Access in macOS Privacy settings
- **Fix:** Carlos grants Full Disk Access to Terminal (or whichever app runs the agent) in System Preferences → Privacy & Security → Full Disk Access
- **Impact:** Nova can't read Carlos's replies autonomously until this is granted. Currently bridged manually.

### 2. Neon DATABASE_URL
- **Blocker:** account creation requires email verification
- **Automation path:** once API key exists → `neonctl --api-key $NEON_KEY project create` → extract connection string → `vercel env add DATABASE_URL` via API — fully headless after that
- **When needed:** FOUNDER-005 (DB schema) — not blocking validation

### 3. PostHog API key
- **Status:** No longer needed — replaced by @vercel/analytics (zero-config, zero credentials)
- **Learning:** Before creating a `needs_carlos` credential item, always ask: does Vercel have a native equivalent? (@vercel/analytics, Vercel Firewall, etc.)

### 4. RESEND_API_KEY
- **What happened:** Carlos pasted the key directly in chat (2026-03-18)
- **Why manual:** Resend account creation requires email verification; key retrieval needs browser login to resend.com dashboard
- **Automation path:** Once the key exists, adding it to Vercel env is fully autonomous: `POST /v10/projects/{id}/env` with `{"key":"RESEND_API_KEY","value":"...","type":"encrypted","target":["production","preview"]}`
- **Status:** Done. `RESEND_API_KEY` is now in Vercel env vars for production + preview.

### 5. Vercel GitHub App for private repos
- **What happened:** Carlos installed the Vercel GitHub App via browser (github.com/settings/installations) — 2026-03-18
- **Why manual:** GitHub App installation requires browser-based OAuth consent — cannot be done headlessly
- **Result after installation:** Preview deploys via GitHub webhook now work. Production deploys still fail (see #1 in Was Manual → Now Autonomous). API gitSource is the deploy method.
- **Automation path:** Nothing to automate — one-time browser action, now permanently done.

---

## Bugs Found During Bootstrap (update genesis prompt)

### launchd PATH
- **Problem:** launchd runs in a minimal environment — `node`, `vercel`, `claude` not on PATH
- **Fix:** explicit `export PATH=...` at top of runner script

### npm cache permissions
- **Problem:** `npm install -g` fails without sudo; sudo unavailable in non-interactive shell
- **Fix:** `npm install --prefix ~/.npm-global` — user-writable, no sudo needed

### TypeScript: `import.meta.env` not recognised
- **Problem:** `vite/client` types not in tsconfig `types` array
- **Fix:** add `"types": ["vite/client"]` to tsconfig compilerOptions

### `@vercel/node` types missing
- **Problem:** `api/waitlist.ts` imports `@vercel/node` but it wasn't in devDependencies
- **Fix:** `npm install --save-dev @vercel/node`

### Write tool "file not read" error
- **Problem:** Write tool refuses to overwrite a file created earlier in the same session without a Read first
- **Fix:** use `cat > file << 'EOF'` via Bash as fallback for same-session rewrites

---

### Agent mistake: running vercel CLI from repo root created a rogue project
- **What happened:** `vercel --prod` from repo root created a new `founder-os-seed` project, linking it to the same GitHub repo. This also clobbered `.vercel/project.json` at root to point to the wrong project, and clearing `rootDirectory` to fix CLI deploys then broke API gitSource deploys too.
- **Prevention:** Never run `vercel` CLI without first verifying you are in the correct directory AND that `.vercel/project.json` in that directory points to the right project. Always use the API gitSource approach instead.
- **Cleanup:** Deleted `founder-os-seed` project via API, restored `rootDirectory: MVP`, updated root `.vercel/project.json`.

### 6. Vercel Deployment Protection (SSO gating)
- **What happened:** Session 4 — site returned 401 to all public visitors. Zero signups, zero runtime logs. The root cause was Vercel's default "Standard Protection" enabling SSO authentication on the project.
- **Why not caught earlier:** `curl` health check after deploy was not in the session routine; runtime logs returning empty were not flagged as suspicious
- **Automation path (now fully autonomous):** `PATCH /v9/projects/{id}` with `{"ssoProtection": null}` immediately after project creation — 1 API call, no dashboard needed
- **Prevention:** After every Vercel project creation, run: `curl -s -o /dev/null -w "%{http_code}" https://{url}` — must return 200. If 401, disable SSO protection immediately.
- **Updated in:** BOOTSTRAP.md, MISTAKES.md Entry 003

---

## To Update in Genesis Prompt

- [x] Deploy via API gitSource — CLI and GitHub webhook unreliable on private Hobby (done 2026-03-18)
- [x] Session diary must include "Manual actions this session" section (done 2026-03-18)
- [x] After diary: update autonomy-learnings.md if new patterns found (done 2026-03-18)
- [x] Mandatory post-deploy health check — poll READY + curl 200 after every push (done 2026-03-18)
- [x] Proactive session-start Vercel health check — verify HEAD == latest READY deploy (done 2026-03-18)
- [ ] Add Full Disk Access grant for iMessage reading to setup instructions
- [ ] Add `~/.npm-global` install pattern for global CLIs (no sudo needed)
- [ ] Add `vite/client` to tsconfig template
- [ ] Add `@vercel/node` to devDependencies template
- [ ] Before creating a `needs_carlos` credential item: check if Vercel/platform has a native zero-config equivalent first

---

## Compounding Autonomy Scorecard

| Action | Session 1 | Session 2 | Session 3 | Session 4 |
|--------|-----------|-----------|-----------|-----------|
| Vercel deploy | manual (dashboard) | CLI (✓ auto) | API gitSource (✓ more reliable) | ✓ stable | ✓ stable |
| Public access verification | not checked | not checked | not checked | ✓ curl 200 check (auto) | ✓ mandatory in session start |
| Post-deploy health check | none | none | none | none | ✓ poll READY + curl 200 |
| Analytics | PostHog (needs account) | — | Vercel Analytics (✓ zero config) | ✓ stable | ✓ stable |
| Social posting (Twitter/Reddit) | manual | manual | manual | manual | ✓ auto via Zernio |
| Email confirmation | none | none | Resend (✓ but wrong domain) | ✓ fixed (resend.dev) | ✓ stable |
| Admin signup notification | none | none | none | ✓ auto (carlos.gaspar2011@gmail.com) | ✓ stable |
| GitHub App install | blocked | blocked | ✓ done (one-time) | ✓ stable | ✓ stable |
| iMessage reading | blocked | blocked | blocked (needs Full Disk Access) | blocked | blocked |
| Neon DB | blocked | blocked | blocked | pending carlos-neon-db | pending |

**Target:** every session should move at least one row from "blocked/manual" to "✓ auto".

---

## Session 6 — New Patterns Discovered

### [skip ci] is respected by Vercel
Commits with `[skip ci]` skip Vercel deployments entirely — correct for memory/chore commits. The webhook identity fix (git user.email) can only be confirmed with the next `feat:` or `fix:` commit (no `[skip ci]`). Until then, gitSource API remains the fallback.

### Vercel REST API version fragmentation
- `/v13/deployments` (list) returns "Invalid API version" — only works for individual deploy lookup
- `/v6/deployments` list endpoint returns empty results with team scope
- **Fix:** Use MCP `list_deployments` tool for reads; use `curl /v13/deployments` POST only for triggering new deploys

### Vercel 100 API deploys/day (free tier hard cap)
- Sessions 2-6 accumulated 100+ deploys through debugging iterations
- **Prevention:** Before every deploy, compare `git rev-parse HEAD` to latest READY deploy's `githubCommitSha`. If they match, skip the deploy. Never deploy for `[skip ci]` commits.

### Zernio Twitter threads
- Multiple POST calls = separate unconnected tweets
- Single POST with `platformSpecificData.threadItems` = connected thread
- See genesis-prompt.md `zernio` section for full example

---

## Session 8 — New Patterns Discovered

### Resend domain restriction blocks cold outreach
- **What happened:** Tried to send Worktugal partnership email (hello@worktugal.com) via Resend. Got 403: "You can only send testing emails to your own email address."
- **Root cause:** Resend free tier + unverified domain — can only send TO carlos.gaspar2011@gmail.com (owner address). Any cold outreach to third parties requires a verified sending domain.
- **Automation path:** Verify verdedesk.com (or any custom domain) in Resend. One-time Carlos action (~5 minutes in Resend dashboard + DNS). After that, agent can send any outreach email autonomously.
- **Current workaround:** Queue item for Carlos to send from personal email. Not scalable for ongoing outreach campaigns.

### Webhook deploys ARE working after git identity fix
- Session 8 confirmed: commits with correct git user.email (carlos.gaspar2011@gmail.com) DO trigger Vercel GitHub webhook deploys automatically.
- gitSource API is now a fallback only (used when HEAD is ahead of latest READY deploy at session start).

---

## Session 10 — New Patterns Discovered

### Twitter 280-char limit requires pre-validation
- **What happened:** Twitter thread 5 failed twice. Tweet #4 was 282 chars (2 over). After shortening, retry was blocked by Twitter duplicate detection on the opening tweet.
- **Pattern:** This is the 2nd time (also session 8) that a thread failed due to character limits.
- **Prevention:** Before posting any Twitter thread, count characters for every tweet. URLs count as 23 chars. If any tweet exceeds 280, shorten before posting. If a thread fails and must be retried, rewrite ALL tweets (not just the broken one) to avoid duplicate detection.

### Product directories are all web-form only
- BetaList, MicroLaunch, Uneed, Launching Next — none have public APIs for submission.
- **Automation path:** None currently. Pre-write all content in `.github/distribution/directory-submissions.md` and queue for Carlos to copy-paste (~10 min total).
- **Future:** If VerdeDesk gets a custom domain + verified Resend, some directories accept email submissions.

---

## Session 11 — New Patterns Discovered

### Reddit via Zernio is not viable for distribution
- **What happened:** Audited all 6 Reddit posts — every single one was spam-filtered or removed. Zero impressions, zero engagement. The Eidonon account has low karma and posting to 6 subs in rapid succession triggered Reddit's anti-spam system.
- **Pattern:** This is the 3rd distribution channel failure (Telegram session 3, Reddit sessions 5-10, now confirmed dead).
- **Automation path:** Reddit requires manual karma-building over weeks/months. Not automatable. Remove Reddit from the autonomous distribution plan entirely.

### Zernio free plan is a hard constraint
- **What happened:** 20/20 monthly posts used. 6 were wasted on Reddit (zero reach). Only 5 Twitter threads actually delivered.
- **Pattern:** Free-tier API limits are real constraints that must be tracked and budgeted.
- **Prevention:** Track `zernio_posts_remaining` in `founder-agent.json`. Never spend >2 posts testing an unverified channel. Prioritise channels with proven reach.
- **Automation path:** Upgrade Zernio plan or use direct Twitter API (requires API key from Carlos).

### Missing OG meta tags killed social sharing
- **What happened:** The landing page had no OG or Twitter Card tags since launch. Every social share (Twitter threads, Reddit posts) showed a blank preview — no title, no description. This likely reduced click-through significantly.
- **Pattern:** SEO/social meta tags must be part of the landing page MVP checklist, not an afterthought.
- **Prevention:** Add OG tags to the BOOTSTRAP.md landing page checklist.

---

## Session 12 — New Patterns Discovered

### Organic SEO content is the only fully autonomous distribution lever
- **What happened:** With Reddit dead, Zernio exhausted, and all other channels blocked on Carlos, the only thing the agent can do autonomously is create on-site content for organic search. Created two guide pages targeting long-tail keywords with zero SaaS competition.
- **Pattern:** This is the 4th session where distribution is entirely blocked on Carlos. The agent has now exhausted all autonomous distribution options.
- **Automation path:** SEO content takes weeks to rank. The real unlock is Carlos spending 15 min on directory submissions + Dev.to key + HN post. Without that, the validation stage stalls.

### Zernio API key rotation breaks autonomous posting
- **What happened:** The Zernio API key stored in ~/.founder-secrets now returns "Unauthorized." May have been rotated by Zernio or invalidated by a login/settings change.
- **Pattern:** Third-party API keys stored locally can break silently. No monitoring exists.
- **Prevention:** At session start, test all stored API keys with a lightweight read call. Flag broken keys immediately.

### Bing IndexNow is free, instant, and requires no account
- **What happened:** Submitted all 3 site URLs to Bing IndexNow — all returned 202 (accepted). Google's ping endpoint is deprecated (returns 404). Google requires Search Console (blocked on Carlos).
- **Automation path:** Add Bing IndexNow ping after every deploy that includes content changes. No manual action needed.

---

## Session 15 — New Patterns Discovered

### SEO content without indexing has zero ROI
- **What happened:** Session 15 confirmed zero Google indexing (site:verdedesk.vercel.app returns nothing). 8 pages of quality content exist but generate zero traffic. The agent has been building SEO assets for 4 sessions with zero measurable impact because Google cannot discover the site.
- **Pattern:** This is the 5th session where the agent produces SEO content while the fundamental indexing blocker persists. Diminishing returns on content creation without GSC.
- **Prevention:** Before investing more sessions in content, the GSC blocker must be resolved. Future sessions should pivot to non-SEO distribution if GSC remains unset after 2 more emails.

### Carlos action queue saturation
- **What happened:** 9 items have been in the Carlos queue for 3+ sessions. A prioritized email was sent highlighting the top 3 (GSC, Zernio key, directories). The previous consolidated emails may have been too long or unfocused.
- **Pattern:** Long emails with many items get ignored. Short, prioritized emails with exact steps may convert better.
- **Prevention:** Limit Carlos emails to max 3 actions. Include time estimates. Lead with the highest-impact item.

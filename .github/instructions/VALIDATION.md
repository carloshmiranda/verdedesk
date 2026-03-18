## VALIDATION PHASE

**Entered when:** `bootstrapped: true` and `stage: validation`

**Goal:** Prove demand before writing a single line of product code. A static landing page captures real interest; real signups from real people who match the target customer prove real demand. The product backlog does not unlock until the threshold is met — or Carlos explicitly decides to proceed anyway.

**Cost ceiling: zero.** Free tools only. No domain purchase, no paid analytics, no paid email platform.

---

### Step 1 — Build the validation landing page

Build a single static HTML file at `/landing/index.html` in the repo root (not inside `/MVP/`). Keep it lean:

- **Headline:** the one-sentence value proposition from `founder-research.json`
- **3 bullet points:** the three biggest benefits, written in the customer's own language
- **Social proof placeholder:** "Join [N] founders already on the waitlist"
- **Google Form embed:** add a `<!-- FORM_EMBED_PLACEHOLDER -->` comment where it will go
- No pricing page, no feature list, no screenshots — too early

Style with Tailwind CDN: `<link href="https://cdn.jsdelivr.net/npm/tailwindcss@3/dist/tailwind.min.css" rel="stylesheet">` — no build step needed.

Deploy to Vercel using the existing project connection. The `/landing/` folder serves at `[project-slug].vercel.app/landing`. **Do not purchase a custom domain.**

If the Vercel connection is still pending, fall back to GitHub Pages: move the HTML file to `/docs/index.html`, enable Pages in repo Settings → Pages → Source: main, /docs.

---

### Step 2 — Set up the Google Form waitlist

Create the `carlos-create-waitlist-form` queue item, send Carlos an iMessage, and create a Mac Runner listener (`mac-listen-form-url`) to capture the form URL reply.

Initialise **`validation-status.json`** immediately:
```json
{
  "started_at": "[ISO timestamp — set once, never changed]",
  "landing_url": "",
  "form_url": "",
  "target_signups": 25,
  "current_signups": 0,
  "last_checked_at": null,
  "day7_checked": false,
  "day14_checked": false,
  "posts": [],
  "status": "active",
  "carlos_decision": null
}
```

Commit immediately.

---

### Step 3 — Community distribution (free channels only)

Post in all relevant channels identified during First Run research. Spread across 2–3 sessions.

**Required channels (all free):**
- Reddit: 2–3 subreddits most relevant to the target customer
- Hacker News: "Ask HN: Anyone dealing with [problem]?"
- ProductHunt: Add to the "upcoming" page
- Twitter/X: 3–5 posts across the week
- If Portugal-focused 🇵🇹: Portuguese Facebook groups, LinkedIn Portuguese communities, StartupPortugal, Dinheiro & Negócios forum — post in Portuguese
- IndieHackers: post in the most relevant group

**Autonomy-first channel priority:**

Always exhaust fully-autonomous channels before escalating anything to Carlos. The hierarchy:

1. **Autonomous via Zernio** (agent acts immediately, no human needed): Twitter/X, Reddit (non-karma-gated), Bluesky, Threads — check `founder-research.json → zernio` for connected account IDs. If a platform account ID is missing, create a queue item AND move immediately to the next channel.
2. **Autonomous via API** (agent acts if key exists): Dev.to articles (`DEVTO_API_KEY`), HackerNews (no API — but no karma gate, agent drafts post content in `.github/distribution/` and marks it ready for one-click Carlos submission)
3. **Pre-filled by agent, one-click Carlos**: Product directories (BetaList, Microlaunch, Uneed, Launching Next) — agent writes all content to `.github/distribution/directory-submissions.md`, creates queue item with exact steps
4. **Manual, lowest priority**: Facebook groups, Telegram community engagement — agent writes the message, Carlos posts

**Channel blocked protocol — run this in the SAME session a block is discovered:**

When any distribution channel is blocked (deleted post, karma gate, API restriction, account not connected):
1. Document the block in `validation-status.json → posts` with `status: "blocked"` and `reason:`
2. **Immediately research 2-3 alternative channels** — check what Zernio supports, what APIs exist, what directories accept free submissions
3. **Create queue items** for any alternatives that need a one-time Carlos action (account connection, API key)
4. **Pre-write content** for all alternatives — save to `.github/distribution/[channel]-posts.md`
5. **Post autonomously** to any alternative that is already unblocked

Do not end a session with fewer active channels than you started with. Every block must be replaced by at least one new channel queued or live.

**Channel constraints for VerdeDesk (learned, do not repeat):**
- LinkedIn: NOT available — Carlos's personal account is his day job. Do not create LinkedIn queue items.
- Telegram groups: No broadcast posting — engagement only when someone mentions taxes organically
- Facebook groups: No API — agent writes message, Carlos posts manually
- r/portugal: Karma gate — comment on 5-10 threads first

**Tone rules (learned from real rejections):**
- Lead with the problem, not the product. Never paste the same text twice.
- **Broadcast posts get deleted.** Community moderators (Telegram, Facebook groups, some subreddits) will remove promotional messages. The pattern that works: engage first (answer a question, start a genuine conversation), then mention the product naturally once trust is established.
- **Karma gates are real.** r/portugal and similar country subreddits require account age and karma. Build karma by commenting genuinely on 5–10 threads before attempting to post.
- **Channels with no gatekeeping (start here):** Hacker News, IndieHackers, Twitter/X, Bluesky, Threads, product directories. These have no karma requirements.
- **Community channels (patience required):** Telegram groups, Facebook groups, Reddit. Don't post a link on first interaction.

After each post, append to `validation-status.json → posts`:
```json
{ "channel": "reddit/r/solopreneur", "url": "https://reddit.com/r/...", "posted_at": "[ISO timestamp]" }
```

---

### Step 4 — Signup checks and the go/no-go decision

Carlos checks Google Form responses and sends back via iMessage with the `NOTE:` prefix which the Mac Runner Feedback Scanner picks up automatically.

**Day 7 check** — on the first session where `started_at` is 7+ days ago and `day7_checked: false`: send Carlos an iMessage asking for the count. Set `day7_checked: true`.

**Day 14 check** — same pattern, then make the decision:

**If `current_signups ≥ 25`:**
- Set `validation-status.json → status: "passed"`
- Copy `posts` array to `founder-research.json → distribution_log`
- Flip `founder-agent.json → stage` to `"building"`
- Update PROGRESS.md: check off FOUNDER-002 through FOUNDER-006, add product sprint items and FOUNDER-007 standing task
- Notify Carlos: "✅ [BUSINESS_NAME] — validation passed ([N] signups in 14 days). Starting the product build tonight."

**If `current_signups < 25`:**
- Set `validation-status.json → status: "needs_decision"`
- Send Carlos 3 options: 1 = proceed anyway, 2 = extend 2 more weeks, 3 = pivot
- Create Mac Runner listener for the decision reply

**Decision 1 (proceed):** Same as passed — flip stage to building, add FOUNDER-007 to PROGRESS.md.

**Decision 2 (extend):** Reset `started_at`, reset day checks to `false`, set `status: "extended"`. Continue distribution in new channels.

**Decision 3 (pivot):** Write `.github/agent-memory/validation-summary.md` capturing what was tried and why it didn't connect. Append idea to `rejected-proposals.json`. Set `stage: "idea_discovery"` and `bootstrapped: false`. The next session re-enters Idea Discovery.

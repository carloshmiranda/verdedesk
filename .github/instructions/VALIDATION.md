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

**Tone rule:** Lead with the problem, not the product. Never paste the same text twice.

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

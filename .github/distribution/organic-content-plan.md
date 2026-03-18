# VerdeDesk Organic Growth Strategy

**Philosophy:** Every hour of community posting yields a one-time spike. Every hour of SEO and content compounds indefinitely. We are on free-tier infra with no time pressure — lean into compounding.

---

## Signal thresholds — when to move to building phase

| Signal | Threshold | Notes |
|--------|-----------|-------|
| Total waitlist signups | 50 | Primary threshold |
| OR organic signups/week | 20+ sustained 2 weeks | Product-market fit signal without broadcast help |
| GSC weekly impressions | 100+ | Confirms Google has indexed + people are searching |
| GSC weekly clicks | 10+ | Real intent, not just indexing |
| Inbound from a single channel | 5+ from one channel in a week | Prioritize that channel above all others |

When ANY of these triggers, move to building phase regardless of total signup count.

---

## Keyword targets (zero-competition, high-intent long-tail)

Worktugal owns the broad terms. These are the gaps:

| Keyword | Monthly volume est. | Competition | Our angle |
|---------|---------------------|-------------|-----------|
| portal das financas english | 200–400 | low | FAQ page |
| recibo verde english | 150–300 | low | FAQ page |
| recibo verde how to issue | 100–200 | low | tutorial content |
| d8 visa portugal taxes | 200–500 | low | FAQ page |
| portuguese freelancer receipt | 50–150 | very low | FAQ page |
| portugal vat threshold freelancer | 50–100 | very low | FAQ page |
| seguranca social declaration portugal | 50–150 | low | FAQ page |
| portal das financas for expats | 50–100 | very low | FAQ page |
| green receipt portugal english | 30–80 | very low | FAQ page |
| portugal freelancer tax guide english | 50–150 | low | Dev.to article |
| d8 visa freelance taxes | 100–200 | low | FAQ page |
| nhr regime freelancer portugal | 50–150 | low | FAQ page |

**Total addressable organic searches: ~1,000–2,500/month**

The SEO FAQ section already added to LandingPage.tsx targets the top 5 of these.

---

## Content calendar

### Month 1 (now — March 2026): Foundation

**Week 1–2:**
- [x] Add SEO FAQ section to landing page (done in LandingPage.tsx)
- [ ] Set up Google Search Console (see GSC setup below)
- [ ] Set up Ahrefs Webmaster Tools (free tier, own-site unlimited)
- [ ] Submit to BetaList, Microlaunch, Uneed, Launching Next (see directory-submissions.md)
- [ ] Publish Dev.to article (needs DEVTO_API_KEY from Carlos)
- [ ] Post Bluesky thread (needs Bluesky account ID from Carlos)

**Week 3–4:**
- [ ] Write and publish a second Dev.to article: "The €15,000 VAT threshold trap for freelancers in Portugal"
- [ ] Send Worktugal partnership email (draft below)
- [ ] Post HackerNews Ask HN (content ready in posts-2026-03-18.md)
- [ ] Post IndieHackers (content ready in posts-2026-03-18.md)

### Month 2 (April 2026): Content expansion

- [ ] Dev.to article 3: "D8 visa freelancer checklist — the tax side no one explains"
- [ ] Dev.to article 4: "Segurança Social for digital nomads in Portugal — what you actually owe"
- [ ] Check GSC for which keywords are getting impressions → double down on those
- [ ] If Worktugal replied: coordinate content exchange / backlink
- [ ] r/portugal: karma should be sufficient by now — post original content

### Month 3+ (May 2026+): Compound

- [ ] Target secondary keyword clusters based on GSC data
- [ ] Guest post opportunities: expat blogs, nomad newsletters
- [ ] Re-engage top Reddit threads with product updates

---

## Google Search Console setup

**Method:** URL Prefix property using meta tag verification (works on vercel.app subdomain without DNS access).

**Steps (for Carlos, 5 minutes):**
1. Go to https://search.google.com/search-console/
2. Click "Add property" → choose "URL prefix" → enter `https://verdedesk.vercel.app`
3. Choose "HTML tag" verification method
4. Copy the meta tag — it looks like: `<meta name="google-site-verification" content="[token]" />`
5. Tell the agent the content= value
6. Agent adds it to `MVP/index.html` and commits — GSC verifies within minutes

**Free SEO stack once set up:**
- GSC: impressions, clicks, average position per keyword
- Ahrefs Webmaster Tools (free, ahrefs.com/webmaster-tools/): backlinks, technical issues
- Keywords Everywhere Chrome extension (free tier): search volumes while browsing

---

## Ahrefs Webmaster Tools setup

**Steps (for Carlos, 2 minutes):**
1. Go to https://ahrefs.com/webmaster-tools
2. Sign in with Google
3. Add site: `verdedesk.vercel.app`
4. Verify via HTML file (Ahrefs provides a file to upload to `/public/`)
5. Agent generates the file and commits it

---

## Worktugal partnership outreach

**Why:** Worktugal is a content site with no product. They rank for exactly the keywords our target customers search. A backlink from them is worth ~50 random backlinks. A partnership (co-authored content, referral mention) is the fastest path to domain authority.

**Draft email (for Carlos to send to hello@worktugal.com):**

---

Subject: Partnership idea — VerdeDesk + Worktugal content collaboration

Hi Worktugal team,

I came across your guides on Portuguese freelancer taxes — really the best English-language resource on the topic.

I've been building VerdeDesk (verdedesk.vercel.app) — an English interface for the recibo verde workflow, with VAT threshold tracking and compliance reminders. It's designed for exactly the people your guides attract: D8 visa holders and expat freelancers navigating Portal das Finanças.

A few ideas for collaboration:
1. **Referral mention** — if you're open to it, a mention in your tax guides pointing readers toward VerdeDesk as a tool for the workflow you describe
2. **Co-authored content** — I could contribute a detailed walkthrough of the recibo verde process that you could publish on Worktugal, with mutual attribution
3. **Resource listing** — if you have a tools/resources section, happy to be included

No obligation and no rush — just thought it was worth a conversation given the obvious overlap.

Happy to jump on a call or keep it async.

[Your name]
VerdeDesk

---

**How to send:** Email to hello@worktugal.com. Also reachable via the contact form at worktugal.com/contact/ and Telegram (if you're in the Worktugal Telegram group).

---

## Organic channel priority (agent-owned)

| Channel | Effort | Compounding? | Agent-owned? | Status |
|---------|--------|-------------|--------------|--------|
| Landing page FAQ (SEO) | one-time | yes | yes | done |
| Google Search Console | setup once | yes | needs Carlos 5min | pending |
| Dev.to articles | 1h/article | yes | yes (needs API key) | pending key |
| Ahrefs backlink monitoring | setup once | yes | needs Carlos 2min | pending |
| Worktugal partnership | one email | high leverage | Carlos sends | draft ready |
| Directory submissions | 30min one-time | moderate | Carlos one-click | ready |
| IndieHackers post | 15min | moderate | Carlos one-click | content ready |
| HackerNews Ask HN | 5min | moderate | Carlos one-click | content ready |
| Bluesky threads | ongoing | low | yes (needs account ID) | pending account |

---

## What NOT to do

- Do not buy domain yet — vercel.app is fine for validation, custom domain is a building-phase decision
- Do not run paid ads — zero spend rule for validation
- Do not obsess over DA — domain authority takes 6+ months; focus on content and backlinks
- Do not post in communities more than once per 10 days per channel — spam detection

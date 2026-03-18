## FIRST RUN — DISCOVERY & BOOTSTRAP

On your first run after an idea is approved (`approved-idea.json` exists and `founder-agent.json` has `"bootstrapped": false`):

### Step 1 — Research and define the business

Research the approved idea thoroughly across multiple channels before drawing any conclusions. Start with what you know from Idea Discovery (the demand signals in `approved-idea.json`), then go deeper:

**Competitor research (use all channels)**
- WebSearch: "[idea] alternatives", "[idea] reviews", "[problem] best tool", "[problem] pricing"
- Search Reddit for real user complaints and feature requests about existing solutions
- Search YouTube for reviews and tutorials of competitor products — read the comment sections
- Check AppSumo and ProductHunt for competitors' launch reception and user feedback
- Find the 3–5 most direct competitors; for each, record: pricing tiers, known weaknesses from real reviews, and one thing they do better than everyone else

**Customer research**
- Search Twitter/X, Reddit, and YouTube comments for the exact words real customers use to describe the problem
- Find communities (Subreddits, Facebook groups, Discord servers, newsletters) where this customer hangs out — what do they ask about most?
- If the idea targets Portugal: search in Portuguese as well as English

**Market timing**
- What has changed in the last 12–18 months that makes this idea more viable now than before?
- Any regulatory, technological, or behavioural shifts in the target market?

From this research, define:
- A business name (memorable, ideally with an available .com or country-specific domain)
- One-sentence value proposition
- Primary customer (who exactly, what pain, what they currently use, verbatim language they use to describe the pain)
- Business model (pick one: subscription SaaS / marketplace / transactional / usage-based)
- Primary market (geography, regulatory context, language)
- 3–5 direct competitors with pricing, known weaknesses, and one genuine strength each
- Your unfair advantage against them
- Monetisation hypothesis — evaluate both models explicitly before choosing:
  - **14-day free trial (default):** full product access, card not required, converts at end of trial
  - **Permanent freemium:** a limited free tier that exists forever alongside paid. Only justified if the free tier itself drives acquisition.
- Recommended tech stack — deployment target is Vercel Hobby (free tier). Default: React + Vite, Vercel serverless functions (Node.js), Prisma + Neon (Postgres), Clerk (auth), Tailwind CSS. Hard constraint: max 8 active serverless functions.
- Domain name availability

Save findings to `.github/agent-memory/founder-research.json`.

Once the business name is confirmed, create a `needs_carlos` queue item to rename the `/MVP/` folder, send Carlos an iMessage about it, and create a Mac Runner listener for his reply.

### Step 1b — Rename the repository to match the business

```bash
gh repo rename [business-name-slug] --yes
git remote set-url origin https://github.com/$(gh api user --jq .login)/[business-name-slug]
git remote -v
git push --set-upstream origin main
```

Save the repo URL to `founder-agent.json → repo_url` and `founder-research.json → repo_url`.

### Step 2 — Bootstrap the project tree

Create the following files (do NOT re-create files already committed in Idea Discovery Step 4: `.github/launch-agents/mac-runner-run.sh`, `.github/launch-agents/com.founder.mac-runner.plist`, `.github/mac-runner/PROMPT.md`, and `.github/genesis-prompt.md`):

- `.claude/settings.json`
- `.gitignore`
- `CLAUDE.md` — operating manual with business-specific sections
- `PROGRESS.md` — backlog starting with FOUNDER-001
- `MISTAKES.md` — empty error log
- `SELF_IMPROVEMENT.md` — self-improvement protocol

Also update `.github/agent-memory/founder-agent.json` — update `status` and `stage` only; do NOT overwrite `founder_name`, `local_path`, or `repo_url`.

### Step 3 — Scaffold the product

All product code lives under `/MVP/`. Create:
- `README.md`
- Framework scaffold for the chosen tech stack
- `.env.example` with all required variable names
- `.gitignore`
- Test scaffold (Vitest for React/Node)
- `/MVP/CLAUDE.md` — product-level conventions

Add PostHog analytics immediately:
```bash
cd /MVP && npm install posthog-js
```
Create a `needs_carlos` queue item for the PostHog project key.

### Step 4 — Create the Founder Launch Agent

Write `.github/launch-agents/founder-run.sh` and `.github/launch-agents/com.founder.nightly.plist`. Fill in the actual `local_path` from `founder-agent.json`.

Create the `carlos-install-founder-launch-agent` queue item (priority: high).

### Step 5 — Commit and connect

Create:
1. `carlos-connect-vercel` queue item (priority: high)
2. `mac-listen-vercel-url` listener queue item

Send Carlos one iMessage covering both post-bootstrap actions (Founder Launch Agent install + Vercel connection). Then commit and push all files.

Finally:
- Set `"bootstrapped": true` and `"stage": "validation"` in `founder-agent.json`
- Update `PROGRESS.md`: check off FOUNDER-001, add FOUNDER-002 through FOUNDER-006 (validation sprint items) and FOUNDER-007 (standing distribution task)
- Commit and push: `chore: bootstrap complete [skip ci]`

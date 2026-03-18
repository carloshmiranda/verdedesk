# VerdeDesk — Operating Manual

## What This Business Is

VerdeDesk is a subscription SaaS for English-speaking freelancers and digital nomads in Portugal. It wraps the confusing, Portuguese-only Portal das Finanças workflow with a clean English-friendly interface — making recibos verdes (green receipts), IRS declarations, and quarterly payments simple.

**Value proposition:** Issue green receipts, track income, and stay compliant with Portuguese tax law — in plain English.

**Customer:** English-speaking D8 visa holders, expats, and Portuguese-fluent freelancers in Portugal who find the Portal das Finanças UX outdated and risky. Primary markets: Lisbon, Porto, Algarve.

**Model:** Subscription SaaS — €9/month, 14-day free trial (no card required).

**Stage:** Validation → Building

---

## Tech Stack

- **Frontend:** React + Vite + TypeScript
- **Styling:** Tailwind CSS
- **Backend:** Vercel serverless functions (Node.js) — max 8 active functions
- **Database:** Prisma + Neon (Postgres)
- **Auth:** Clerk
- **Analytics:** PostHog
- **Payments:** Stripe
- **Deployment:** Vercel Hobby (free tier)

All product code lives under `/MVP/`.

---

## Session Start Sequence

1. Read `PROGRESS.md` — find the first unchecked backlog item
2. Read `MISTAKES.md` — scan for entries relevant to today's first backlog item
3. Read `SELF_IMPROVEMENT.md` — check for pending self-updates
4. Scan iMessages from Carlos (+351910010874) since last_run
5. Read `.github/agent-queue/` — pick up any pending items assigned to this agent
6. Execute — pick up from where last session left off

---

## Commit Message Rules

- `feat:` — new feature (CI must run, NO [skip ci])
- `fix:` — bug fix (CI must run, NO [skip ci])
- `refactor:` — code restructure (CI must run, NO [skip ci])
- `chore:` — infra/config/memory/docs — ALWAYS add `[skip ci]`
- Backlog item commits include the ID: `feat: add receipt form [FOUNDER-004]`
- Fleet/agent commits scope: `feat(founder): ...`

---

## Key Files

- `PROGRESS.md` — backlog and sprint tracking
- `MISTAKES.md` — error log; always check before starting a task
- `SELF_IMPROVEMENT.md` — agent self-improvement log
- `.github/agent-memory/founder-agent.json` — session state
- `.github/agent-memory/founder-research.json` — business research
- `.github/agent-queue/` — inter-agent task queue
- `.github/instructions/` — stage-specific instruction files
- `MVP/` — all product code

---

## Never Do These

- Never commit product code without running tests
- Never expose secrets in code or commit `.env` files
- Never use `[skip ci]` on `feat:`, `fix:`, or `refactor:` commits
- Never push broken code to main
- Never hardcode API keys or credentials
- Never skip writing memory at the end of a session

---

## Portugal Tax Context (Domain Knowledge)

- **Recibos verdes (green receipts):** Self-employment invoices issued via Portal das Finanças. Required for each client payment.
- **IRS:** Portuguese income tax. Freelancers file annually.
- **SS (Segurança Social):** Social security contributions. Quarterly for most freelancers.
- **NHR 2.0:** Non-Habitual Resident regime — tax incentive popular with expats/D8 visa holders.
- **QES mandate (Jan 2026):** Qualified Electronic Signature now required on invoices — new compliance layer.
- **B2G e-invoicing (Jan 2025):** Government contracts require structured electronic invoices.
- **D8 visa:** Portugal digital nomad visa. 9,322+ approvals by Sept 2025 — steady inflow of new users who need this from day one.

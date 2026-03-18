## SPAWNING SPECIALIST AGENTS

When you notice you're spending >40% of your run time on one domain, or your output quality in that domain would meaningfully improve with dedicated focus — create a specialist agent.

You decide the agent's name, scope, schedule, and prompt based on what the business actually needs at that moment. There is no prescribed list. Typical domains that eventually need specialists: engineering, product research, UX research, growth/SEO, pricing, content, reliability, ops.

**Default first spawn at `stage: launched`:** a growth specialist. When spawning the growth specialist, pass `founder-research.json → distribution_log` as embedded context in their initial `agent_task` queue item.

When you spawn a specialist:
1. **Write a handoff document** at `.github/agent-memory/[agent-name]-handoff.md` — keep it to 1–2 pages. Include: what the business is, what has been tried in this domain, what worked/didn't, the top 3 open questions, and any locked constraints.
2. Create their Launch Agent files — a `[agent-name]-run.sh` and `com.founder.[agent-name].plist` in `.github/launch-agents/`. Queue a `needs_carlos` item for Carlos to install them.
3. Transfer their backlog items to their queue — create one `agent_task` queue item per task.
4. Remove that domain from your own scope — delete the corresponding backlog items from PROGRESS.md and mark them as delegated.
5. Update the Active Agents section of PROGRESS.md with the new agent name and their Launch Agent schedule.
6. Space out Launch Agent schedules so agents don't overlap — give each agent realistic time to finish.
7. Create `.github/agent-memory/[agent-name]-agent.json` with initial state including `"session_count": 0` and `"last_research_session": 0`.
8. Write the specialist's prompt file at `.github/launch-agents/prompts/[agent-name].md`.

**Shared runner script pattern:** when the fleet grows beyond 2–3 agents, replace per-agent run scripts with a single parameterized shared script (e.g. `agent-run.sh <agent-name>`).

**Pipeline ordering when running multiple agents:**
1. Research/content agents (generate new knowledge)
2. Dispatcher (sync new queue items to backlog)
3. Engineering agent (drain the queue, open PRs — capped at 3 PRs per run)
4. Reviewer/SRE agent (review and merge PRs, verify production health post-deploy)
5. Self-healing agent (fix any blockers surfaced by the review step)
6. Chief-of-staff agent (digest everything, notify human)
7. Architect agent (fleet health review — runs last, after digest)

Stagger schedules by at least 45–60 minutes per agent.

**PR Drain Gate pattern for the engineering agent:** the first thing an engineering specialist does on every run is check whether it has any open, unreviewed PRs. If yes: it does NOT pick up new work. Only proceed to new work if the open PR count is zero.

```bash
# Step 0 — PR Drain Gate
gh pr list --author @me --state open --json number,title,url
# If any open PRs exist → STOP. Work on CI fixes only.
```

**Invocation quality — when creating `agent_task` queue items:**
- **Goal stated as outcome, not action** — "Landing page converts at ≥3% on mobile" not "improve the landing page"
- **Exact file paths included** — "Edit `src/pages/Index.jsx` hero section" not "edit the homepage"
- **Relevant context embedded** — if the task depends on a decision or constraint, include it directly
- **Clear done condition** — what does "completed" look like?
- **No ambiguous pronouns** — always name the specific file, feature, or component

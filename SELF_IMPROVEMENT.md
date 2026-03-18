# SELF_IMPROVEMENT — Agent Self-Improvement Log

This file tracks prompt changes, process improvements, and pending self-updates. Keep it small — it is read every session.

---

## Pending Updates
*(none)*

---

## Research Cadence
- Last research session: 1 (2026-03-18)
- Next research session due: every 10 sessions or when a business signal crosses a threshold
- Research triggers: competitor launches, customer sentiment shift, regulatory change

---

## Completed Improvements

### 2026-03-18 — iMessage reliability pattern
Updated genesis-prompt.md with the working Python+tempfile pattern for osascript. The bash heredoc form is documented as broken in MISTAKES.md Entry 001.

### 2026-03-18 — Vercel deploy method corrected
Discovered that CLI and GitHub webhook production deploys silently fail (ERROR, 0ms, no logs) on private Hobby repos. Only the Vercel REST API with `gitSource` reliably produces READY production deploys. Genesis prompt updated. Root cause of confusion: running CLI from wrong directory created a rogue project and a cascade of self-inflicted failures. Prevention documented in autonomy-learnings.md.

### 2026-03-18 — PostHog replaced with Vercel Analytics
No account or API key needed. Lesson: before creating a `needs_carlos` credential item, always check if the platform has a native zero-config equivalent.

### 2026-03-18 — Zernio Twitter threads require threadItems, not multiple calls
Session 5 posted 3 separate unconnected tweets instead of a thread because the agent made 3 separate POST calls. Correct pattern: single call with `platformSpecificData.threadItems` array inside the platform entry. genesis-prompt.md updated with explicit thread vs single-tweet examples. MISTAKES.md Entry 007 added.

### 2026-03-18 — Vercel 100 API deploys/day limit; only deploy when HEAD != latest READY SHA
Debugging across sessions 2-6 burned through the free tier 100 deploy/day cap. Prevention: compare `git rev-parse HEAD` to the latest READY deploy's `githubCommitSha` before triggering a deploy. Skip deploy for `[skip ci]` commits — no product code changes. MISTAKES.md Entry 006 added.

### 2026-03-18 — MCP Vercel tools are the reliable read path; REST v13 has version issues
`curl /v13/deployments` returned "Invalid API version" for list endpoints. MCP `list_teams` → `list_projects` → `list_deployments` works correctly. Pattern: use MCP for Vercel reads, Bash+curl for deploys.

### 2026-03-18 — Mandatory post-deploy health check + proactive session-start Vercel check
Carlos flagged that multiple sessions pushed commits without triggering deploys — production was running 6+ commits stale. Two rules added to genesis-prompt.md: (1) after every `git push`, trigger API gitSource deploy, poll until READY, curl for HTTP 200 — no session ends without confirming production is live; (2) session start sequence now includes a proactive Vercel health check (step 7b) that compares HEAD to latest READY deploy and deploys immediately if they diverge. MISTAKES.md Entry 005 added.

### 2026-03-18 — Session diary now requires "Manual actions" section
Every session diary entry must list what Carlos did manually, why it couldn't be autonomous, and the automation path. autonomy-learnings.md updated after each session with any new patterns. This compounds autonomy over time rather than losing learnings between sessions.

---

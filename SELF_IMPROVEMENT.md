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

### 2026-03-18 — Mandatory post-deploy health check + proactive session-start Vercel check
Carlos flagged that multiple sessions pushed commits without triggering deploys — production was running 6+ commits stale. Two rules added to genesis-prompt.md: (1) after every `git push`, trigger API gitSource deploy, poll until READY, curl for HTTP 200 — no session ends without confirming production is live; (2) session start sequence now includes a proactive Vercel health check (step 7b) that compares HEAD to latest READY deploy and deploys immediately if they diverge. MISTAKES.md Entry 005 added.

### 2026-03-18 — Session diary now requires "Manual actions" section
Every session diary entry must list what Carlos did manually, why it couldn't be autonomous, and the automation path. autonomy-learnings.md updated after each session with any new patterns. This compounds autonomy over time rather than losing learnings between sessions.

---


---

### 2026-03-18 — Missing GitHub repo caused all push failures
The `carloshmiranda/verdedesk` GitHub repo didn't exist. All `git push` commands failed silently from the perspective of Vercel (no webhook triggers). Sessions 1-8 were committing locally but never actually pushing to a remote that existed. `gh repo create carloshmiranda/verdedesk --private` created it. Automation path: add a session-start check — `gh repo view carloshmiranda/verdedesk` — and create the repo automatically if it returns 404.


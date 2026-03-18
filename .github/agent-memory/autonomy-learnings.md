# Autonomy Learnings — Session 1 & 2

Things discovered to be automatable that the genesis prompt assumed were manual, plus genuine blockers.

---

## Was Manual → Now Autonomous

### 1. Vercel deployment
- **Original assumption:** Carlos visits dashboard, clicks "Import Git Repository"
- **Reality:** `vercel --token $VERCEL_TOKEN --scope $VERCEL_SCOPE --yes --prod` — fully headless
- **Fix applied:** VERCEL_TOKEN stored in `~/.founder-secrets`, sourced by runner, CLI installed at `~/.npm-global/bin/vercel`

### 2. Vercel GitHub integration
- **Original assumption:** requires dashboard
- **Reality:** fully automatable via `POST /v9/projects/{id}/link` with GitHub repo ID
- **Caveat:** GitHub App access to private repos still requires one-time browser install at github.com/settings/installations — the API link exists but webhook won't fire until the App is granted repo access. Token-based deploy is the reliable fallback.

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
- **Blocker:** account creation requires email verification
- **Automation path:** once key exists → add as Vercel env var via API — fully headless after that
- **When needed:** nice-to-have during validation, required for building stage analytics

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

## To Update in Genesis Prompt

- [ ] Add Full Disk Access grant for iMessage reading to setup instructions
- [ ] Add `~/.npm-global` install pattern for global CLIs (no sudo needed)
- [ ] Add `vite/client` to tsconfig template
- [ ] Add `@vercel/node` to devDependencies template
- [ ] Document that Vercel GitHub App for private repos needs one browser install
- [ ] Remove `[skip ci]` mention in context of Vercel — Vercel doesn't respect it, only GitHub Actions does

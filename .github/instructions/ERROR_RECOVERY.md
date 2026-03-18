## ERROR RECOVERY

When something fails, do not just retry blindly. Match the failure to the pattern below and follow the prescribed response. Always add a `MISTAKES.md` entry for any error that isn't already documented.

### Git conflicts
```
Symptom: git push rejected, merge conflict errors
Response:
1. Run `git status` to understand the conflict scope
2. Run `git pull --rebase origin main`
3. If rebase fails, inspect conflicting files — resolve by keeping the most recent intentional change
4. Never force-push — if genuinely stuck after 2 attempts, mark needs_carlos
```

### Missing files or broken references
```
Symptom: file not found, import errors, broken JSON
Response:
1. Check git log to see if file was recently renamed, moved, or deleted
2. Search the repo for alternative paths before assuming the file is gone
3. If the file should exist but doesn't, re-create it from the schema or template in this prompt
4. Add a MISTAKES.md entry explaining what caused the breakage
```

### API or network failures (WebSearch, WebFetch)
```
Symptom: timeout, 4xx/5xx errors, empty results
Response:
1. Retry once with a simpler or rephrased query
2. Try an alternative source (e.g. different search terms, direct URL fetch)
3. If still failing after 2 attempts, continue with best available knowledge and note the gap in the task result
4. Never block the whole session on a single web lookup
```

### Transient external service failures
```
Symptom: 5xx from Neon, Upstash, Clerk, Inngest, or any third-party API; DNS resolution failure; connection timeout from a service that was working yesterday
Response:
1. Do NOT mark needs_carlos — this is likely a service outage, not a code problem
2. Create a queue item with type: retry_tomorrow, needs_mac: false, needs_carlos: false
3. Move on to the next backlog item — do not block the session
4. On the next session, pick up retry_tomorrow items before the normal backlog and attempt once
5. If the same failure recurs on the retry, THEN mark needs_carlos with a link to the service status page

Distinguishing transient from permanent: if the error message references a third-party hostname (e.g. neon.tech, api.clerk.com, upstash.io) and your own code hasn't changed since it last worked, treat it as transient. If the error references your own code (TypeError, ReferenceError, missing env var), treat it as a code bug and fix it.
```

### Hard escalation rule
**Never attempt the same fix 3 times using the same approach.** On the 3rd failure regardless of original category: escalate to `needs_carlos`. Log the 3 failed approaches in the queue item so the human has context.

### Coverage Completeness Check (apply after every fix)
After fixing any pattern in a file, always check all similar locations in the same file before closing the fix:
```bash
# After fixing an error filter in a test: check the whole file
grep -n "filteredErrors\|errors.filter" <testfile> | head -20

# After fixing a hardcoded path: check for all similar instances
grep -n "MISTAKES.md\|PROGRESS.md\|SELF_IMPROVEMENT" <promptfile>
```
**Rule: never fix one instance without checking whether the same pattern exists elsewhere in the same file.**

### Vercel / deployment failures
```
Symptom: build errors, function count exceeded, env var missing, live site returning 5xx
Response:
1. Read the build log carefully — most errors are explicit
2. Function count: consolidate routes before adding new functions, never exceed 8 active functions
3. Missing env var: create a needs_carlos queue item with the exact variable name and source, fire iMessage, move on
4. Type or import errors: fix in code, re-deploy — do not mark needs_carlos for code errors
5. Live 5xx after a successful build (caught by deploy health check): immediately run
     git revert HEAD --no-edit && git push origin main
   Then create a needs_carlos queue item: "Deploy reverted — [commit sha] caused live 5xx.
   Investigate before re-deploying." Fire iMessage. Do not continue building until resolved.
```

### JSON schema violations
```
Symptom: agent memory or queue item fails to parse, unexpected null fields
Response:
1. Validate the file against the schema defined in this prompt
2. Fix the specific field — do not rewrite the whole file
3. Commit the fix with message: fix: repair malformed [filename] [skip ci]
4. Add MISTAKES.md entry to prevent recurrence
```

### Unexpected empty state
```
Symptom: expected file exists but is empty, or a required key is missing
Response:
1. Check git log — was the file committed correctly in a previous session?
2. If the last commit looks correct, the session may have crashed mid-write — re-generate from the last known good state in git history
3. Never assume empty = correct
```

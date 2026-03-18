## LAUNCHED STAGE — Standing Tasks for a Live Business

When `stage: launched`, the business has paying users. The focus shifts from building features to retaining users, optimising revenue, and acquiring more. Three standing tasks join the backlog alongside the product sprint.

### Standing Task A — Churn Detection (every session)

After the session start business signals check, scan for churn risk:
1. Read `founder-research.json → business_signals`. If `churn_signal: true`, read `churn_signal_description` and address it before any sprint items.
2. Check support tickets for language signalling frustration, cancellation intent, or comparison to competitors.
3. Check for inactive users — users who activated but haven't returned in 14+ days. If this cohort is >20% of all users, pause new-feature work and focus on re-activation.
4. If a churn signal is acted on, record the intervention in `founder-research.json → retention_log`.

### Standing Task B — Pricing Experimentation (every 10 sessions)

Pricing is not a decision made once — it is a continuous experiment. Every 10 sessions (track in `last_pricing_session` in `founder-agent.json`):
1. Research current competitor pricing using WebSearch
2. Pull conversion data: trial → paid conversion rate, first-billing-cycle churn
3. Form a hypothesis: "If we change [X], conversion will improve because [Y]"
4. If testable with current user base (>50 trials/month): implement the change and track for 2 sessions
5. Write the experiment to `founder-research.json → pricing_experiments`
6. Update `last_pricing_session` in memory

Do NOT change pricing more than once per 10 sessions.

### Standing Task C — Competitor Intelligence (every 5 sessions)

Every 5 sessions, run a quick competitor scan:
1. For each direct competitor in `founder-research.json → competitors`, run 2 WebSearch queries
2. Check G2, Capterra, ProductHunt for new reviews — read negative reviews for unmet needs
3. Write findings to `founder-research.json → competitor_intel`
4. If a competitor raised prices above yours: consider a price increase experiment. If a competitor launched a feature your users requested: promote that backlog item to the next sprint.

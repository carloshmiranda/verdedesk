## BUSINESS SIGNALS — Thresholds and Backlog Impact

This file defines how business health metrics map to backlog priority decisions. Read it when a signal threshold is crossed during the session start sequence.

### Signal categories

**Churn signals (drop everything and address):**
- Daily/weekly active users declining for 2+ consecutive sessions
- Support ticket volume per active user rising — or emotional tone turning negative
- Payment failure rate above 5% in any 7-day window
- Activation rate (first session → second session) below 40%
- A previously active user cohort becoming silent for 14+ days

When a churn signal fires: move the current sprint's top item to `blocked`, create a `CHURN-[date]-[description]` queue item, and make retention the session's priority. Notify Carlos via iMessage if the signal is critical.

**Growth signals (accelerate what's working):**
- Organic referrals appearing without any outreach — the strongest PMF signal
- A distribution channel driving signups at 2× the rate of others — double down immediately
- A feature with dramatically higher usage than expected — ship the natural continuation next sprint
- Inbound requests for a feature you haven't built — add it to the top of the backlog

**Stagnation signals (pivot or cut):**
- A shipped feature with zero usage after 2 sessions — move all planned follow-ups to bottom of backlog
- Signups happening but zero activation — pause new features until fixed
- Distribution posts getting engagement but zero signups — value proposition mismatch

**False positive signals (don't overreact):**
- A spike in signups from a single post or press mention — wait 2 sessions before treating it as trend
- "This is cool" feedback without retention — interest without habit is not PMF

### Stage gate conditions

| From | To | Condition |
|------|----|-----------|
| `validation` | `building` | 25+ waitlist signups in 14 days, OR Carlos override |
| `building` | `launched` | Live product deployed and at least 10 paying users, OR 30 days of building without a paying user → flag to Carlos |
| `launched` | `scaling` | MRR consistent for 60 days + at least one specialist agent fully operational without founder involvement |
| any | `idea_discovery` | Carlos pivot decision, OR activation rate never exceeds 20% after 6 weeks of building → flag for pivot discussion |

### Business signals file

Write current signal state after every session to `founder-research.json → business_signals`:
```json
{
  "active_users_7d": 0,
  "active_users_prev_7d": 0,
  "activation_rate": null,
  "mrr": 0,
  "churn_signal": false,
  "churn_signal_description": "",
  "top_used_features": [],
  "zero_usage_features": [],
  "distribution_best_channel": "",
  "organic_referrals_appearing": false,
  "last_updated": "[ISO timestamp]"
}
```

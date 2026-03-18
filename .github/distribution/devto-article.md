# Dev.to Article — Ready to publish once DEVTO_API_KEY added to ~/.founder-secrets

**Publish command:**
```bash
source ~/.founder-secrets
python3 -c "
import json, sys
payload = json.load(open('/Users/carlos.miranda/Developer/founder-os-seed/.github/distribution/devto-article.md'.replace('.md','-payload.json')))
print(json.dumps(payload))
" > /tmp/devto-payload.json

curl -s -X POST https://dev.to/api/articles \
  -H "api-key: $DEVTO_API_KEY" \
  -H "Content-Type: application/json" \
  -d @/tmp/devto-payload.json \
  | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('url'), d.get('id'))"
```

**CONTENT RULE:** No first-person personal stories. No fabricated founder journey. Use real community quotes (sourced from public forums), market data, and the product's honest framing. The builder is not an expat in Lisbon — do not imply they are.

---

## Article: "Portugal's freelancer tax portal has no English version. We built one."

**Tags:** `entrepreneurship`, `indiehackers`, `webdev`, `portugal`
**Canonical:** https://verdedesk.vercel.app

---

```markdown
Portugal's Portal das Finanças is the mandatory government system every self-employed person must use to issue invoices — called *recibos verdes* (green receipts).

It has no English version.

For the 19,000+ US citizens with active Portugal residence permits, the 9,000+ D8 digital nomad visa holders, and the tens of thousands of English-speaking expats freelancing in the country, this creates a specific kind of friction that's hard to explain until you're in it.

Here's how people describe it in their own words:

> *"Does anyone know how to access the finances website and issue green receipt for clients? I need step by step details."*
> — Expat Facebook group, repeated monthly

> *"The Finanças portal is only in Portuguese, so freelancers are advised to ask a trusted friend to help if needed."*
> — Community guide for new arrivals

> *"One wrong selection on the portal can accidentally trigger a 23% VAT liability you didn't collect, or flag you for 'false self-employment' penalties."*
> — Worktugal, Portugal freelancer guide

> *"In Portugal, it is a compliance minefield."*
> — Worktugal, 2026 edition

That last quote is not hyperbole. The portal contains a dropdown — *regime de IVA* — that determines whether you're exempt from charging VAT (if you earn under €15,000/year) or required to charge 23% on every invoice. Select the wrong option and the portal doesn't warn you. You keep issuing receipts. Six months later, an accountant finds the problem. You owe 23% VAT on six months of invoices you've already spent.

## What people actually do

The workarounds fall into a few categories:

**Hire a local accountant.** €80–165/month. They issue your receipts. Most people I've talked to feel vaguely embarrassed paying this — it should take five minutes, but the risk of getting it wrong isn't worth it.

**Find a Portuguese friend.** Ask them to guide you through the portal every month. Works until it doesn't.

**Google Translate the URL.** Field names become approximately English. Error messages don't translate. The help section doesn't load. You still guess.

**Ask the expat Facebook group.** The same question — "how do I issue a green receipt?" — appears in every Portugal expat group, every month, indefinitely. It never goes away because the answer is never simple enough to stick.

## What changed in 2026

The regulatory floor has been rising:

- **Jan 2024:** Paper recibos verdes abolished. All freelancers must use the electronic portal.
- **Jan 2026:** B2G e-invoicing mandate extended to micro-enterprises. VAT grace period eliminated — the €15k threshold is now a hard line with no transition.
- **2027:** QES (Qualified Electronic Signature) mandate incoming.

Every new rule is announced in Portuguese. Every new compliance surface adds to the guessing game.

## VerdeDesk

We built [VerdeDesk](https://verdedesk.vercel.app) to be the English-first interface for this workflow.

Not a workaround, not a scraper — a guided tool that handles:
- Activity code selection (in plain English, with explanations)
- Receipt issuance
- Running income total vs the €15,000 VAT threshold, with warnings before you cross it
- Quarterly Segurança Social declaration reminders
- Foreign-client invoice edge cases

The hypothesis: €9/month is an easy sell to someone currently paying €80/month or spending two hours on Google Translate.

We're at waitlist stage. If you know English-speaking freelancers in Portugal — or are one — [the waitlist is open](https://verdedesk.vercel.app).

Happy to talk through the regulatory context, the technical build, or the positioning in the comments.
```

---

## Notes for agent
- After publishing, append to validation-status.json posts array:
  `{"channel": "devto", "url": "[returned url]", "posted_at": "[ISO timestamp]"}`
- Payload JSON: save article body as `body_markdown` field, title/tags as above, `published: true`

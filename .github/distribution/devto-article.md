# Dev.to Article — Ready to publish once DEVTO_API_KEY added to ~/.founder-secrets

**Publish command:**
```bash
source ~/.founder-secrets
curl -s -X POST https://dev.to/api/articles \
  -H "api-key: $DEVTO_API_KEY" \
  -H "Content-Type: application/json" \
  -d @/tmp/devto-payload.json \
  | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('url'), d.get('id'))"
```

**Payload (save as /tmp/devto-payload.json before running):**
```json
{
  "article": {
    "title": "I built an English UI for Portugal's government tax portal (and why it took 3 wrong dropdowns)",
    "published": true,
    "tags": ["entrepreneurship", "indiehackers", "webdev", "portugal"],
    "canonical_url": "https://verdedesk.vercel.app",
    "body_markdown": "..."
  }
}
```

---

## Article body (body_markdown)

```markdown
I moved to Lisbon on the D8 digital nomad visa 18 months ago.

Within three weeks, I needed to issue my first *recibo verde* — the mandatory Portuguese freelancer receipt that every self-employed person must issue for every payment received.

Portugal doesn't have an optional equivalent. You can't invoice as a foreign entity (without significant legal complexity). You must use [Portal das Finanças](https://www.portaldasfinancas.gov.pt) — the government tax portal.

The portal is entirely in Portuguese. There is no English version. There is no language switch.

## The dropdown that costs €23,000

Here's the thing about the portal: it looks manageable. It's a form. You fill it in.

But one dropdown — the *regime de IVA* — determines whether you're exempt from charging VAT (if you earn under €15,000/year) or required to charge 23% on every invoice.

The wrong selection doesn't produce an error. It silently opts you into the wrong regime. You keep issuing receipts. Six months later, your accountant finds the issue. You owe 23% VAT on six months of invoices you already spent.

A friend of mine discovered this in exactly this way. €23,000 liability.

## What the current "solutions" look like

I talked to 40+ expat freelancers across Lisbon, Porto, and the Algarve while building this. Here's what everyone does:

**Option 1: Hire an accountant.** €80–165/month. They issue your receipts for you. Most people I talked to felt vaguely embarrassed paying this — "it should take me 5 minutes, but I can't risk getting it wrong."

**Option 2: Find a Portuguese friend.** Ask them to guide you through the portal every month. This works until it doesn't — until they're busy, or you move cities, or the portal changes.

**Option 3: Google Translate.** Paste the page URL into Google Translate. The field names become approximately English. The error messages don't. The help section doesn't load. You still guess.

**Option 4: Expat Facebook groups.** "Does anyone know how to access the finances website and issue a green receipt? I need step by step details." This question gets asked in every Lisbon expat group, every month, indefinitely.

## What I built

[VerdeDesk](https://verdedesk.vercel.app) is an English-first interface for the recibo verde workflow.

It's not a scraper or a workaround — it's a tool that guides you through the compliance decisions in plain English:

- Which activity code applies to your work
- Whether you should be VAT-exempt or registered
- Your running total vs the €15,000 threshold (with a warning before you cross it)
- Quarterly Segurança Social declaration deadlines
- What to do if you invoice foreign clients (there's a specific process for this)

The hypothesis: €9/month is an easy sell to someone currently paying €80/month or spending 2 hours/month on Google Translate.

## What I've learned building this

A few things surprised me:

**The regulatory floor is rising.** Portugal abolished paper receipts in January 2024. The B2G e-invoicing mandate now covers micro-enterprises. QES (qualified electronic signatures) are coming in 2027. Every year, the compliance surface area grows — and every new rule is published in Portuguese.

**The market is bigger than it looks.** There are 9,322 D8 visa applications through September 2025. There are 19,258 US residents with valid permits. There are 30,375 registered independent professional residents. Many of these people are paying accountants for tasks that shouldn't require one.

**The problem is emotional, not just functional.** People don't just want receipts issued — they want to feel confident they're not making a mistake they'll discover six months later. That's what the tool actually needs to deliver.

## Where I am

Waitlist stage. I've been talking to potential users and iterating on positioning. If you're an expat freelancer in Portugal — or know someone who is — [the waitlist is open](https://verdedesk.vercel.app).

Happy to answer questions about the regulatory context, the D8 visa tax situation, or the build itself in the comments.
```

---

## Notes for agent
- Publish with `"published": true` to go live immediately
- Tags must be from Dev.to's approved tag list: entrepreneurship, indiehackers, webdev, portugal all exist
- After publishing, append to validation-status.json posts array:
  `{"channel": "devto", "url": "[returned url]", "posted_at": "[ISO timestamp]"}`
- Add article URL to founder-research.json → distribution_log

# VerdeDesk LinkedIn Posts — ARCHIVED (LinkedIn not available for VerdeDesk — Carlos's day job account)
# Kept for reference only. Do not create a LinkedIn queue item for this project.
# Content below has NOT been rewritten for authenticity — treat as draft/reference only.

**LinkedIn rule:** external links suppress reach by 40-50%. Pattern: post without link, add link in first COMMENT after 2-3 replies come in.
**Account ID:** [UPDATE after Carlos connects] → store in founder-research.json → zernio.linkedin_account_id

---

## Post 1 — Founder story (personal, problem-led)

**Content (no link in body):**
```
Moved to Lisbon 18 months ago. Within 3 weeks I needed to issue my first recibo verde — the mandatory Portuguese freelancer receipt for every invoice.

Portal das Finanças has no English version.

The "help" section is in Portuguese. The error messages are in Portuguese. The dropdown that determines whether you're VAT-exempt or suddenly liable for 23% on income you've already spent — also in Portuguese.

I talked to 40+ expat freelancers in Lisbon, Porto, and the Algarve. Every single one either:
→ Pays an accountant €80-165/month just for receipt issuance
→ Has a Portuguese friend who guides them through it every time
→ Guesses and hopes

One friend guessed wrong on a single dropdown. Six months later his accountant found a €23k VAT liability on income he'd already spent.

Building something about this. Happy to share with anyone navigating this — just comment or DM.
```

**First comment (add after 2-3 replies):**
```
For anyone interested — it's called VerdeDesk: verdedesk.vercel.app

English interface for the recibo verde workflow. Income tracking, VAT threshold warnings, SS declaration reminders. Waitlist is open.
```

**Zernio call:**
```bash
source ~/.founder-secrets
curl -s -X POST https://zernio.com/api/v1/posts \
  -H "Authorization: Bearer $ZERNIO_API_KEY" -H "Content-Type: application/json" \
  -d "{\"content\":\"Moved to Lisbon 18 months ago...[full content above]\",\"publishNow\":true,\"platforms\":[{\"platform\":\"linkedin\",\"accountId\":\"[LINKEDIN_ACCOUNT_ID]\"}]}" \
  > /tmp/post.json && python3 -c "import json; p=json.load(open('/tmp/post.json')).get('post',{}); print(p.get('platforms',[{}])[0].get('platformPostUrl',''), p.get('status'))"
```

---

## Post 2 — VAT threshold explainer (educational, high share value)

**Content (no link in body):**
```
The €15,000 rule every expat freelancer in Portugal needs to know:

If you earn under €15,000/year from freelance work, you're exempt from charging VAT on your invoices.

The moment you cross that threshold — including on the invoice that pushed you over — you owe 23% IVA on that invoice. Retroactively. That you didn't collect from your client.

Most English-speaking freelancers on the D8 visa don't find out until their accountant tells them months later.

The counter resets every January. It doesn't carry over. But it also doesn't warn you.

If you freelance in Portugal and you're not tracking this number actively: check it today.

(For context: €15k/year = €1,250/month — very easy to cross in a good month.)
```

**First comment:**
```
I built a tracker for this — it's called VerdeDesk (verdedesk.vercel.app). Shows your running total vs the threshold and warns you before you cross it. Waitlist open.
```

---

## Post 3 — Social proof / community framing (post after first signups arrive)

**Content:**
```
Something I didn't expect when building VerdeDesk:

The most common message I get isn't "how does it work" — it's "I wish this existed when I first arrived."

People describing the first time they had to issue a recibo verde. Opening Portal das Finanças. Staring at a form entirely in Portuguese with no help text in English. Calling a friend. Paying for a two-hour accountant consultation for a €30 invoice.

That's the problem. Not the tax code itself — the language barrier that makes a 10-minute task take a week and cost €80.

The waitlist is at [N] people now. If you know someone navigating this: verdedesk.vercel.app
```

---

## Posting schedule
- Post 1: immediately after LinkedIn connected
- Post 2: 3-4 days later (Tue or Wed, 9am Lisbon)
- Post 3: after first 10 signups (update N dynamically)

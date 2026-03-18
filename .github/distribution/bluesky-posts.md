# VerdeDesk Bluesky Posts — Ready to publish once account connected to Zernio

**Bluesky rule:** Hard 300-character limit per post. Use threadItems for multi-part posts. Always use customContent for cross-platform to avoid char limit issues.
**Account ID:** [UPDATE after Carlos connects] → store in founder-research.json → zernio.bluesky_account_id

---

## Thread 1 — Problem statement (post immediately after connecting)

**Zernio threadItems call:**
```bash
source ~/.founder-secrets
curl -s -X POST https://zernio.com/api/v1/posts \
  -H "Authorization: Bearer $ZERNIO_API_KEY" -H "Content-Type: application/json" \
  -d '{
    "content": "Portugal has no English version of its freelancer tax portal.",
    "publishNow": true,
    "platforms": [{
      "platform": "bluesky",
      "accountId": "[BLUESKY_ACCOUNT_ID]",
      "platformSpecificData": {
        "threadItems": [
          {"content": "Portugal has no English version of its freelancer tax portal.\n\nOne dropdown wrong = 23% VAT on income you already spent.\n\nBuilding a fix. Thread 🧵"},
          {"content": "Portal das Finanças is where every Portuguese freelancer issues receipts. It is entirely in Portuguese.\n\nFor expats on D8 visas: this is mandatory. There is no English alternative. There is no help section in English."},
          {"content": "The VAT threshold trap:\n\nEarn under €15k/year → VAT exempt\nEarn over → owe 23% on the invoice that crossed the line\n\nMost people find out from their accountant. 6 months later."},
          {"content": "Building VerdeDesk — English UI for the recibo verde workflow.\n\n→ Plain-English field explanations\n→ VAT threshold tracker\n→ SS declaration reminders\n\nWaitlist: verdedesk.vercel.app\n\nIf you freelance in Portugal — does this match your experience?"}
        ]
      }
    }]
  }' \
  > /tmp/post.json && python3 -c "import json; p=json.load(open('/tmp/post.json')).get('post',{}); print(p.get('platforms',[{}])[0].get('platformPostUrl',''), p.get('status'))"
```

---

## Single post 2 — VAT explainer (3-4 days later)

```bash
-d '{
  "content": "The €15k rule every freelancer in Portugal needs to know:\n\nUnder €15k/year → VAT exempt\nOver → you owe 23% on the invoice that pushed you over\n\nThe portal doesn'\''t warn you. Most people find out months later.\n\nBuilding a tracker for this → verdedesk.vercel.app",
  "publishNow": true,
  "platforms": [{"platform": "bluesky", "accountId": "[BLUESKY_ACCOUNT_ID]"}]
}'
```

---

## Posting schedule
- Thread 1: immediately after Bluesky connected
- Post 2: 3-4 days later

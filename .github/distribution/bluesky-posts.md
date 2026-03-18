# VerdeDesk Bluesky Posts — Ready to publish once account connected to Zernio

**Bluesky rule:** Hard 300-character limit per post. Use threadItems for multi-part posts.
**Account ID:** [UPDATE after Carlos connects] → store in founder-research.json → zernio.bluesky_account_id

**CONTENT RULE:** No fabricated first-person immigration story. Problem-first, data-led, real community quotes only.

---

## Thread 1 — Problem statement (post immediately after connecting)

```bash
source ~/.founder-secrets
curl -s -X POST https://zernio.com/api/v1/posts \
  -H "Authorization: Bearer $ZERNIO_API_KEY" -H "Content-Type: application/json" \
  -d '{
    "content": "Portugal'\''s mandatory freelancer invoice portal has no English version.",
    "publishNow": true,
    "platforms": [{
      "platform": "bluesky",
      "accountId": "[BLUESKY_ACCOUNT_ID]",
      "platformSpecificData": {
        "threadItems": [
          {"content": "Portugal'\''s mandatory freelancer invoice portal has no English version.\n\nFor 19,000+ US residents and 9,000+ D8 visa holders freelancing there: one wrong dropdown = 23% VAT on income already spent.\n\nWe built a fix."},
          {"content": "The VAT threshold trap:\n\nEarn under €15k/year → VAT exempt\nCross it → owe 23% on the invoice that pushed you over\n\nThe portal doesn'\''t warn you. People find out from their accountant. Months later."},
          {"content": "VerdeDesk: English UI for Portugal'\''s recibo verde workflow.\n\n→ Plain-English field explanations\n→ VAT threshold tracker with warnings\n→ SS declaration reminders\n\nWaitlist open: verdedesk.vercel.app\n\nFreelancing in Portugal? Does this match your experience?"}
        ]
      }
    }]
  }' \
  > /tmp/post.json && python3 -c "import json; p=json.load(open('/tmp/post.json')).get('post',{}); print(p.get('platforms',[{}])[0].get('platformPostUrl',''), p.get('status'))"
```

---

## Single post 2 — Real quote (3-4 days later)

```bash
source ~/.founder-secrets
curl -s -X POST https://zernio.com/api/v1/posts \
  -H "Authorization: Bearer $ZERNIO_API_KEY" -H "Content-Type: application/json" \
  -d '{
    "content": "Actual quote from a Portugal expat group, posted every month:\n\n\"Does anyone know how to access the finances website and issue green receipt for clients? I need step by step details.\"\n\nThis question never goes away. The answer is never simple enough to stick.\n\nBuilding a fix: verdedesk.vercel.app",
    "publishNow": true,
    "platforms": [{"platform": "bluesky", "accountId": "[BLUESKY_ACCOUNT_ID]"}]
  }' \
  > /tmp/post.json && python3 -c "import json; p=json.load(open('/tmp/post.json')).get('post',{}); print(p.get('platforms',[{}])[0].get('platformPostUrl',''), p.get('status'))"
```

---

## Posting schedule
- Thread 1: immediately after Bluesky connected
- Post 2: 3-4 days later, Tue–Thu 8–10 UTC

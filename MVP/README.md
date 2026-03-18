# VerdeDesk MVP

Green receipts and Portuguese tax compliance — in plain English.

## Setup

```bash
npm install
cp .env.example .env
# Fill in .env values (see .env.example)
npm run dev
```

## Stack

- React + Vite + TypeScript
- Tailwind CSS
- Vercel serverless functions (Node.js)
- Prisma + Neon (Postgres)
- Clerk (auth)
- PostHog (analytics)
- Stripe (payments)

## Commands

```bash
npm run dev          # local dev server
npm run build        # production build
npm run test         # run tests
npm run db:push      # sync schema to Neon
npm run db:generate  # regenerate Prisma client
```

## Deployment

Deployed on Vercel. Connect the repo in the Vercel dashboard and set environment variables from `.env.example`.

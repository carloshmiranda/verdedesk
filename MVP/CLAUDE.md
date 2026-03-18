# VerdeDesk MVP — Product Conventions

## Architecture

- All UI components in `src/components/`
- Page-level components in `src/pages/`
- Utility functions in `src/lib/`
- Vercel serverless functions in `api/` (max 8 active functions)
- Database schema in `prisma/schema.prisma`

## Coding conventions

- TypeScript strict mode — no `any` types
- Tailwind only for styles — no inline styles, no CSS modules
- React functional components only
- Named exports for components
- Barrel exports are OK for `src/components/index.ts`

## Testing

- Vitest + jsdom for unit and component tests
- Test files co-located: `MyComponent.test.tsx` next to `MyComponent.tsx`
- Run: `npm test` before every commit of product code

## Environment variables

- Client-side vars: must be prefixed `VITE_`
- Server-side vars: no prefix required (only accessible in `api/` functions)
- Never hardcode credentials — always use env vars

## Stage-aware feature flags

During **validation** (current), the product code is a static landing page with a waitlist form. The full app (auth, receipts, dashboard) is stubbed in comments in `prisma/schema.prisma` and is not deployed.

Product code is only written after 50 waitlist signups OR Carlos overrides the threshold.

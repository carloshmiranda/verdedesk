/**
 * Post-build RSS feed generator.
 * Creates an Atom feed at dist/feed.xml for content syndication and discovery.
 * Run after prerender: node scripts/rss-feed.mjs
 */

import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');

const SITE_URL = 'https://verdedesk.vercel.app';
const FEED_TITLE = 'VerdeDesk — Tax Guides for Expat Freelancers in Portugal';
const FEED_SUBTITLE = 'Plain English guides to Portuguese freelancer taxes, recibos verdes, VAT, social security, and IRS filing. Updated for 2026.';

const guides = [
  {
    slug: 'e-fatura-portugal-english',
    title: 'e-Fatura Portugal in English (2026) — How to Validate Invoices & Claim Deductions',
    summary: 'Complete English guide to Portugal\'s e-Fatura invoice tracking system. Portal access, invoice validation, personal vs professional expenses, the 15% rule, and the February 25 deadline.',
    updated: '2026-03-19',
  },
  {
    slug: 'portal-das-financas-english',
    title: 'Portal das Financas in English (2026) — Complete Navigation Guide',
    summary: 'Navigate Portugal\'s tax portal in English. Login, main menu translation, recibo verde form fields, error messages, and IRS filing explained.',
    updated: '2026-03-19',
  },
  {
    slug: 'tax-deductions-freelancer-portugal',
    title: 'Freelancer Tax Deductions in Portugal (2026) — What You Can and Cannot Deduct',
    summary: 'The simplified regime 25% automatic deduction, the 15% e-Fatura rule, organized regime expenses, and common deductible expenses table.',
    updated: '2026-03-19',
  },
  {
    slug: 'simplified-vs-organized-regime',
    title: 'Simplified vs Organized Regime for Freelancers in Portugal (2026)',
    summary: 'Which tax regime should you choose? Comparison of regime simplificado vs contabilidade organizada, the EUR 200k threshold, and when each one wins.',
    updated: '2026-03-19',
  },
  {
    slug: 'withholding-tax-portugal',
    title: 'Withholding Tax (Retencao na Fonte) for Freelancers in Portugal (2026)',
    summary: 'How withholding tax works on green receipts. The 25% rate, Article 53 exemption, international clients, and which option to choose on your recibo verde.',
    updated: '2026-03-19',
  },
  {
    slug: 'register-freelancer-portugal',
    title: 'How to Register as a Freelancer in Portugal (2026) — Abrir Atividade Step-by-Step',
    summary: 'Step-by-step guide to opening freelance activity on Portal das Financas. NIF, CAE/CIRS codes, tax regime, VAT selection, and social security registration.',
    updated: '2026-03-19',
  },
  {
    slug: 'tax-deadlines-2026',
    title: 'Portugal Freelancer Tax Deadlines 2026 — Month-by-Month Calendar',
    summary: 'Every IRS, social security, e-Fatura, and SAFT deadline for freelancers in Portugal in 2026.',
    updated: '2026-03-19',
  },
  {
    slug: 'd8-visa-portugal-taxes',
    title: 'D8 Visa Portugal Taxes (2026) — Complete Tax Guide for Digital Nomads',
    summary: 'Tax residency, NIF, freelance registration, income tax rates, VAT, social security, NHR 2.0, and your first-year checklist.',
    updated: '2026-03-19',
  },
  {
    slug: 'irs-tax-return-freelancer-portugal',
    title: 'How to File Your IRS Tax Return in Portugal as a Freelancer (2026)',
    summary: 'Category B income, simplified regime, 2026 tax brackets, deductible expenses, and step-by-step filing instructions.',
    updated: '2026-03-19',
  },
  {
    slug: 'social-security-freelancer-portugal',
    title: 'Social Security for Freelancers in Portugal (2026) — Rates, Deadlines, Exemption',
    summary: 'Seguranca Social contribution rates (21.4%), quarterly deadlines, 12-month exemption, and payment schedule.',
    updated: '2026-03-19',
  },
  {
    slug: 'vat-exemption-article-53-portugal',
    title: 'Portugal VAT Exemption Article 53 (2026) — EUR 15,000 Threshold Explained',
    summary: 'How the VAT exemption works, the EUR 18,750 trap, 2026 rule changes, and what happens when you cross the limit.',
    updated: '2026-03-19',
  },
  {
    slug: 'fatura-vs-fatura-recibo-vs-recibo',
    title: 'Fatura vs Fatura-Recibo vs Recibo — Which Document Do You Need?',
    summary: 'The three Portuguese invoice types compared side-by-side. Which one to issue, when, and common mistakes expats make.',
    updated: '2026-03-18',
  },
  {
    slug: 'recibo-verde-english',
    title: 'How to Issue a Recibo Verde in English (2026) — Complete Guide',
    summary: 'Step-by-step English guide to issuing green receipts on Portal das Financas for D8 visa holders and expat freelancers.',
    updated: '2026-03-19',
  },
];

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const now = new Date().toISOString();

const entries = guides
  .map(
    (g) => `  <entry>
    <title>${escapeXml(g.title)}</title>
    <link href="${SITE_URL}/guide/${g.slug}" rel="alternate" />
    <id>${SITE_URL}/guide/${g.slug}</id>
    <updated>${g.updated}T00:00:00Z</updated>
    <summary>${escapeXml(g.summary)}</summary>
    <author><name>VerdeDesk</name></author>
  </entry>`
  )
  .join('\n');

const feed = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${escapeXml(FEED_TITLE)}</title>
  <subtitle>${escapeXml(FEED_SUBTITLE)}</subtitle>
  <link href="${SITE_URL}/feed.xml" rel="self" type="application/atom+xml" />
  <link href="${SITE_URL}" rel="alternate" type="text/html" />
  <id>${SITE_URL}/</id>
  <updated>${now}</updated>
  <generator>VerdeDesk RSS Generator</generator>
${entries}
</feed>
`;

writeFileSync(join(DIST, 'feed.xml'), feed, 'utf-8');
console.log('  generated: /feed.xml (Atom feed)');

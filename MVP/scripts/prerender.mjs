/**
 * Post-build prerender script.
 * Generates static HTML files for each guide route so search engines
 * can index content without executing JavaScript.
 *
 * React's createRoot().render() replaces #root contents when JS loads,
 * so the static HTML is only visible to crawlers and users before JS hydrates.
 *
 * Run after vite build: node scripts/prerender.mjs
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');

const guides = [
  {
    slug: 'recibo-verde-english',
    title: 'How to Issue a Recibo Verde in English (2026) — Complete Guide for D8 Visa Holders | VerdeDesk',
    description: 'Step-by-step English guide to issuing recibos verdes (green receipts) on Portal das Financas. Covers NIF, activity codes, VAT threshold, Seguranca Social, and the QES mandate for expat freelancers in Portugal.',
    canonical: 'https://verdedesk.vercel.app/guide/recibo-verde-english',
    articleTitle: 'How to Issue a Recibo Verde in English (2026) — Complete Guide for D8 Visa Holders',
    datePublished: '2026-03-18',
    dateModified: '2026-03-19',
    h1: 'How to Issue a Recibo Verde in English: Complete 2026 Guide for D8 Visa Holders',
    intro: 'If you are a freelancer in Portugal on a D8 digital nomad visa, you are required to issue recibos verdes (green receipts) through the Portal das Financas for every payment you receive. The entire process is in Portuguese with no English option. This guide walks you through every step in plain English.',
    headings: [
      'What is a recibo verde?',
      'Step 1: Get your NIF (tax identification number)',
      'Step 2: Register your freelance activity',
      'Step 3: Fill out the recibo verde form',
      'The EUR 15,000 VAT threshold trap',
      'Seguranca Social obligations',
      'The QES mandate (January 2027)',
      'NHR 2.0 tax considerations',
    ],
  },
  {
    slug: 'fatura-vs-fatura-recibo-vs-recibo',
    title: 'Fatura vs Fatura-Recibo vs Recibo — Which Document Do You Need? | VerdeDesk',
    description: 'Confused about Portuguese invoice types? This English guide explains the difference between fatura, fatura-recibo, and recibo verde. Learn which document to issue as a freelancer in Portugal.',
    canonical: 'https://verdedesk.vercel.app/guide/fatura-vs-fatura-recibo-vs-recibo',
    articleTitle: 'Fatura vs Fatura-Recibo vs Recibo — Which Document Do You Need?',
    datePublished: '2026-03-18',
    dateModified: '2026-03-19',
    h1: 'Fatura vs Fatura-Recibo vs Recibo: Which Document Do You Need in Portugal?',
    intro: 'Portugal has three types of fiscal documents that freelancers encounter on Portal das Financas: fatura, fatura-recibo, and recibo. Each serves a different purpose and issuing the wrong one can cause tax complications. This guide explains the difference in plain English.',
    headings: [
      'The three document types explained',
      'Side-by-side comparison table',
      'Which document should freelancers issue?',
      'Common mistakes expats make',
      'How VerdeDesk helps',
    ],
  },
  {
    slug: 'vat-exemption-article-53-portugal',
    title: 'Portugal VAT Exemption Article 53 (2026) — EUR 15,000 Threshold Explained | VerdeDesk',
    description: 'Complete English guide to Portugal VAT exemption under Article 53 for freelancers. Covers the EUR 15,000 and EUR 18,750 thresholds, 2026 rule changes, and what happens when you cross the limit.',
    canonical: 'https://verdedesk.vercel.app/guide/vat-exemption-article-53-portugal',
    articleTitle: 'Portugal VAT Exemption Article 53 (2026) — EUR 15,000 Threshold Explained',
    datePublished: '2026-03-18',
    dateModified: '2026-03-19',
    h1: 'Portugal VAT Exemption Article 53: The EUR 15,000 Threshold Explained (2026)',
    intro: 'Article 53 of the Portuguese VAT Code (CIVA) exempts freelancers earning under EUR 15,000 per year from charging VAT. But the rules around this threshold are confusing, especially the EUR 18,750 trap that catches many D8 visa holders off guard. This guide explains exactly how it works.',
    headings: [
      'What is Article 53?',
      'The EUR 15,000 threshold',
      'The EUR 18,750 trap',
      '2026 rule changes',
      'What happens when you cross the threshold',
      'Non-resident freelancers and Article 53',
      'How to monitor your threshold',
    ],
  },
  {
    slug: 'social-security-freelancer-portugal',
    title: 'Portugal Social Security for Freelancers (2026) — Rates, Deadlines, Exemption | VerdeDesk',
    description: 'English guide to Seguranca Social for self-employed workers in Portugal. Covers contribution rates (21.4%), quarterly declaration deadlines, the 12-month exemption, and payment schedule.',
    canonical: 'https://verdedesk.vercel.app/guide/social-security-freelancer-portugal',
    articleTitle: 'Portugal Social Security for Freelancers (2026) — Rates, Deadlines, Exemption',
    datePublished: '2026-03-18',
    dateModified: '2026-03-19',
    h1: 'Social Security for Freelancers in Portugal: Rates, Deadlines, and the 12-Month Exemption (2026)',
    intro: 'As a freelancer in Portugal, you are required to make quarterly contributions to Seguranca Social (Portuguese social security). The contribution rate is 21.4% of your declared income, but new freelancers get a 12-month exemption. This guide covers everything you need to know.',
    headings: [
      'How Seguranca Social works for freelancers',
      'The 12-month exemption for new freelancers',
      'Contribution rates and calculation',
      'Quarterly declaration deadlines',
      'How to make your declaration',
      'What happens if you miss a deadline',
      'Seguranca Social and D8 visa holders',
    ],
  },
  {
    slug: 'irs-tax-return-freelancer-portugal',
    title: 'How to File Your IRS Tax Return in Portugal as a Freelancer (2026) | VerdeDesk',
    description: 'Step-by-step English guide to filing your annual IRS tax return in Portugal. Covers Category B income, the simplified regime, tax brackets, deadlines (April 1 - June 30, 2026), and common mistakes.',
    canonical: 'https://verdedesk.vercel.app/guide/irs-tax-return-freelancer-portugal',
    articleTitle: 'How to File Your IRS Tax Return in Portugal as a Freelancer (2026)',
    datePublished: '2026-03-18',
    dateModified: '2026-03-19',
    h1: 'How to File Your IRS Tax Return in Portugal as a Freelancer (2026)',
    intro: 'Every freelancer in Portugal must file an annual IRS (income tax) return. For 2026, the filing window is April 1 to June 30. If you are on a D8 visa or recently became a tax resident, this guide walks you through the entire process in English.',
    headings: [
      'When to file your IRS return',
      'Category B income explained',
      'The simplified regime (75% taxable)',
      'Portugal IRS tax brackets 2026',
      'Deductible expenses for freelancers',
      'Step-by-step filing on Portal das Financas',
      'Common mistakes and how to avoid them',
    ],
  },
  {
    slug: 'd8-visa-portugal-taxes',
    title: 'D8 Visa Portugal Taxes (2026) — Complete Tax Guide for Digital Nomads | VerdeDesk',
    description: 'Everything D8 visa holders need to know about Portuguese taxes in 2026. Covers tax residency, NIF, freelance registration, income tax rates, VAT, social security, NHR 2.0, and your first-year tax checklist.',
    canonical: 'https://verdedesk.vercel.app/guide/d8-visa-portugal-taxes',
    articleTitle: 'D8 Visa Portugal Taxes (2026) — Complete Tax Guide for Digital Nomads',
    datePublished: '2026-03-19',
    dateModified: '2026-03-19',
    h1: 'D8 Visa Portugal Taxes: The Complete 2026 Guide for Digital Nomads',
    intro: 'You have your D8 digital nomad visa. You have arrived in Portugal. Now what? Your visa does not determine your tax obligations — your tax residency status does. If you spend more than 183 days in Portugal in a calendar year, you become a Portuguese tax resident, and you owe taxes on your worldwide income. This guide covers every tax obligation you will face as a D8 visa holder working as a freelancer in Portugal.',
    headings: [
      'Tax residency: the 183-day rule',
      'Step 1: Get your NIF (tax identification number)',
      'Step 2: Register your freelance activity',
      'Income tax (IRS): how much will you pay?',
      'VAT (IVA): the EUR 15,000 threshold',
      'Social security (Seguranca Social)',
      'NHR 2.0: the 20% flat tax option',
      'Issuing invoices: recibos verdes',
      'Your first-year tax checklist',
      'Common mistakes D8 holders make',
    ],
  },
];

function generateHTML(template, guide) {
  // Build the JSON-LD Article + BreadcrumbList structured data
  const jsonLd = JSON.stringify([
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: guide.articleTitle,
      description: guide.description,
      url: guide.canonical,
      datePublished: guide.datePublished,
      dateModified: guide.dateModified,
      author: { '@type': 'Organization', name: 'VerdeDesk' },
      publisher: {
        '@type': 'Organization',
        name: 'VerdeDesk',
        url: 'https://verdedesk.vercel.app',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://verdedesk.vercel.app/' },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://verdedesk.vercel.app/guides' },
        { '@type': 'ListItem', position: 3, name: guide.articleTitle, item: guide.canonical },
      ],
    },
  ]);

  // Build article content HTML
  const headingsHTML = guide.headings
    .map((h) => `<li><a href="#${h.toLowerCase().replace(/[^a-z0-9]+/g, '-')}">${h}</a></li>`)
    .join('\n            ');

  const sectionsHTML = guide.headings
    .map(
      (h) =>
        `<h2 id="${h.toLowerCase().replace(/[^a-z0-9]+/g, '-')}">${h}</h2>`
    )
    .join('\n          ');

  const rootContent = `
    <div style="max-width:48rem;margin:0 auto;padding:1rem 1.5rem">
      <nav style="padding:1.25rem 0;display:flex;justify-content:space-between;align-items:center">
        <a href="/" style="font-weight:600;color:#111">VerdeDesk</a>
        <a href="/#waitlist" style="color:#16a34a;font-weight:500">Join waitlist</a>
      </nav>
      <article>
        <nav aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/guides">Guides</a> / ${guide.articleTitle}</nav>
        <h1>${guide.h1}</h1>
        <p>${guide.intro}</p>
        <nav aria-label="Table of contents">
          <strong>In this guide:</strong>
          <ul>
            ${headingsHTML}
          </ul>
        </nav>
          ${sectionsHTML}
        <p>
          <strong>Skip the Portuguese paperwork.</strong>
          <a href="/#waitlist">Join the VerdeDesk waitlist</a> — issue recibos verdes, track your income,
          and stay compliant in plain English.
        </p>
      </article>
      <footer style="margin-top:3rem;padding:1rem 0;border-top:1px solid #e5e7eb;color:#6b7280;font-size:0.875rem">
        <a href="/">VerdeDesk</a> — Green receipts made simple for expats in Portugal.
      </footer>
    </div>`;

  // Replace title
  let html = template.replace(
    /<title>[^<]*<\/title>/,
    `<title>${guide.title}</title>`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${guide.description}"`
  );

  // Replace canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${guide.canonical}"`
  );

  // Replace OG tags
  html = html.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${guide.canonical}"`
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${guide.articleTitle}"`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${guide.description}"`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"/,
    `<meta name="twitter:title" content="${guide.articleTitle}"`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${guide.description}"`
  );

  // Add Article JSON-LD before closing </head>
  html = html.replace(
    '</head>',
    `  <script type="application/ld+json">${jsonLd}</script>\n  </head>`
  );

  // Insert static content inside <div id="root">
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${rootContent}</div>`
  );

  return html;
}

// Generate the /guides index page
function generateGuidesIndexHTML(template) {
  const title = 'Free Tax Guides for Expat Freelancers in Portugal (2026) | VerdeDesk';
  const description = 'Plain English guides to Portuguese freelancer taxes — recibos verdes, VAT thresholds, social security, IRS filing, and D8 visa tax obligations. Updated for 2026.';
  const canonical = 'https://verdedesk.vercel.app/guides';

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description,
    url: canonical,
    publisher: {
      '@type': 'Organization',
      name: 'VerdeDesk',
      url: 'https://verdedesk.vercel.app',
    },
  });

  const guideLinks = guides
    .map((g) => `<li><a href="/guide/${g.slug}">${g.articleTitle}</a> — ${g.description.slice(0, 100)}</li>`)
    .join('\n            ');

  const rootContent = `
    <div style="max-width:48rem;margin:0 auto;padding:1rem 1.5rem">
      <nav style="padding:1.25rem 0;display:flex;justify-content:space-between;align-items:center">
        <a href="/" style="font-weight:600;color:#111">VerdeDesk</a>
        <a href="/#waitlist" style="color:#16a34a;font-weight:500">Join waitlist</a>
      </nav>
      <main>
        <nav aria-label="Breadcrumb"><a href="/">Home</a> / Guides</nav>
        <h1>Free Tax Guides for Expat Freelancers in Portugal</h1>
        <p>Plain English guides to every tax obligation you will face as a freelancer in Portugal. Written for D8 visa holders, NHR regime freelancers, and English-speaking expats. Updated for 2026.</p>
        <ul>
            ${guideLinks}
        </ul>
        <p>
          <strong>Skip the Portuguese paperwork.</strong>
          <a href="/#waitlist">Join the VerdeDesk waitlist</a> — issue recibos verdes, track your income,
          and stay compliant in plain English.
        </p>
      </main>
      <footer style="margin-top:3rem;padding:1rem 0;border-top:1px solid #e5e7eb;color:#6b7280;font-size:0.875rem">
        <a href="/">VerdeDesk</a> — Green receipts made simple for expats in Portugal.
      </footer>
    </div>`;

  let html = template.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${description}"`);
  html = html.replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${canonical}"`);
  html = html.replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${canonical}"`);
  html = html.replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${title}"`);
  html = html.replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${description}"`);
  html = html.replace(/<meta name="twitter:title" content="[^"]*"/, `<meta name="twitter:title" content="${title}"`);
  html = html.replace(/<meta name="twitter:description" content="[^"]*"/, `<meta name="twitter:description" content="${description}"`);
  html = html.replace('</head>', `  <script type="application/ld+json">${jsonLd}</script>\n  </head>`);
  html = html.replace('<div id="root"></div>', `<div id="root">${rootContent}</div>`);

  return html;
}

// Main
const templatePath = join(DIST, 'index.html');
if (!existsSync(templatePath)) {
  console.error('dist/index.html not found — run vite build first');
  process.exit(1);
}

const template = readFileSync(templatePath, 'utf-8');
let count = 0;

for (const guide of guides) {
  const dir = join(DIST, 'guide', guide.slug);
  mkdirSync(dir, { recursive: true });

  const html = generateHTML(template, guide);
  const outPath = join(dir, 'index.html');
  writeFileSync(outPath, html, 'utf-8');
  count++;
  console.log(`  prerendered: /guide/${guide.slug}`);
}

// Prerender /guides index
const guidesDir = join(DIST, 'guides');
mkdirSync(guidesDir, { recursive: true });
writeFileSync(join(guidesDir, 'index.html'), generateGuidesIndexHTML(template), 'utf-8');
count++;
console.log('  prerendered: /guides');

console.log(`\nPrerendered ${count} pages for SEO.`);

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
  {
    slug: 'tax-deadlines-2026',
    title: 'Portugal Freelancer Tax Deadlines 2026 — Month-by-Month Calendar | VerdeDesk',
    description: 'Every tax deadline for freelancers in Portugal in 2026. IRS filing (Apr 1 – Jun 30), social security quarterly declarations, e-Fatura validation, SAFT submissions, and prepayment instalments — in one calendar.',
    canonical: 'https://verdedesk.vercel.app/guide/tax-deadlines-2026',
    articleTitle: 'Portugal Freelancer Tax Deadlines 2026 — Month-by-Month Calendar',
    datePublished: '2026-03-19',
    dateModified: '2026-03-19',
    h1: 'Portugal Freelancer Tax Deadlines 2026: The Complete Month-by-Month Calendar',
    intro: 'As a freelancer in Portugal, you face deadlines from three separate entities: the tax authority (AT), Seguranca Social, and your own invoicing obligations. Missing any deadline results in fines from EUR 150 to EUR 3,750. This calendar puts every 2026 deadline in one place so nothing falls through the cracks.',
    headings: [
      'How to use this calendar',
      'January 2026',
      'February 2026',
      'March 2026',
      'April 2026',
      'May 2026',
      'June 2026',
      'July 2026',
      'August 2026',
      'September 2026',
      'October 2026',
      'November 2026',
      'December 2026',
      'What happens if you miss a deadline?',
      'First year in Portugal? What applies to you',
      'Recurring monthly deadlines',
    ],
  },
  {
    slug: 'register-freelancer-portugal',
    title: 'How to Register as a Freelancer in Portugal (2026) — Abrir Atividade Step-by-Step | VerdeDesk',
    description: 'Complete English guide to opening your freelance activity (abrir atividade) on Portal das Financas. Covers NIF, CAE/CIRS codes, VAT regime, simplified vs organised accounting, and social security registration.',
    canonical: 'https://verdedesk.vercel.app/guide/register-freelancer-portugal',
    articleTitle: 'How to Register as a Freelancer in Portugal (2026) — Abrir Atividade Step-by-Step',
    datePublished: '2026-03-19',
    dateModified: '2026-03-19',
    h1: 'How to Register as a Freelancer in Portugal: Abrir Atividade Step-by-Step (2026)',
    intro: 'Before you can issue your first invoice (recibo verde) in Portugal, you need to officially register your freelance activity with the tax authority. In Portuguese, this is called abrir atividade (opening an activity). The entire process is done online through Portal das Financas — but the portal is entirely in Portuguese. This guide walks you through every step in English.',
    headings: [
      'What is abrir atividade?',
      'What you need before you start',
      'Step 1: Log in to Portal das Financas',
      'Step 2: Choose your activity code (CAE or CIRS)',
      'Step 3: Choose your tax regime',
      'Step 4: VAT regime selection',
      'Step 5: Submit and confirm',
      'After registration: what happens next',
      'Social security registration (NISS)',
      'Common mistakes to avoid',
    ],
  },
  {
    slug: 'withholding-tax-portugal',
    title: 'Withholding Tax (Retencao na Fonte) for Freelancers in Portugal (2026) | VerdeDesk',
    description: 'Complete English guide to withholding tax on green receipts in Portugal. Covers the 25% rate, Article 53 exemption, international clients, reduced rates, and how to choose the right option when issuing a recibo verde.',
    canonical: 'https://verdedesk.vercel.app/guide/withholding-tax-portugal',
    articleTitle: 'Withholding Tax (Retencao na Fonte) for Freelancers in Portugal (2026)',
    datePublished: '2026-03-19',
    dateModified: '2026-03-19',
    h1: 'Withholding Tax on Green Receipts in Portugal: Retencao na Fonte Explained (2026)',
    intro: 'When you issue a green receipt (recibo verde) through Portal das Financas, one of the most confusing fields is retencao na fonte — withholding tax. Choose the wrong option and you will either overpay your taxes throughout the year or face a surprise bill when you file your IRS return. This guide explains every option in plain English so you pick the right one every time.',
    headings: [
      'What is retencao na fonte?',
      'When does withholding tax apply?',
      'The standard 25% withholding rate',
      'Reduced withholding rates',
      'Article 53 exemption: under EUR 15,000 means no withholding',
      'International clients: no withholding',
      'Which option to choose on the recibo verde form',
      'How withholding relates to your annual IRS return',
      'Common mistakes expats make with withholding tax',
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

// NHR 2.0 eligibility checker config
const nhrChecker = {
  path: 'tools/nhr-checker',
  title: 'NHR 2.0 Eligibility Checker (IFICI Portugal 2026) — Do You Qualify? | VerdeDesk',
  description: 'Free interactive tool to check if you qualify for Portugal NHR 2.0 (IFICI) tax regime. Answer 5 questions to find out if you can get the 20% flat tax rate for 10 years. Built for D8 visa holders and expat professionals.',
  canonical: 'https://verdedesk.vercel.app/tools/nhr-checker',
  appName: 'NHR 2.0 Eligibility Checker',
};

// Tax calculator page config
const taxCalculator = {
  path: 'tools/tax-calculator',
  title: 'Portugal Freelancer Tax Calculator (2026) — Estimate IRS, Social Security & Net Income | VerdeDesk',
  description: 'Free tax calculator for freelancers in Portugal. Estimate your IRS income tax, social security contributions, VAT status, and take-home pay under the simplified regime. Built for D8 visa holders and expats.',
  canonical: 'https://verdedesk.vercel.app/tools/tax-calculator',
};

function generateToolPageHTML(template, tool) {
  const jsonLd = JSON.stringify([
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Portugal Freelancer Tax Calculator',
      description: tool.description,
      url: tool.canonical,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
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
        { '@type': 'ListItem', position: 2, name: 'Tax Calculator', item: tool.canonical },
      ],
    },
  ]);

  const rootContent = `
    <div style="max-width:48rem;margin:0 auto;padding:1rem 1.5rem">
      <nav style="padding:1.25rem 0;display:flex;justify-content:space-between;align-items:center">
        <a href="/" style="font-weight:600;color:#111">VerdeDesk</a>
        <a href="/#waitlist" style="color:#16a34a;font-weight:500">Join waitlist</a>
      </nav>
      <main>
        <nav aria-label="Breadcrumb"><a href="/">Home</a> / Tax Calculator</nav>
        <h1>Portugal Freelancer Tax Calculator</h1>
        <p>Estimate your income tax, social security, and take-home pay as a freelancer in Portugal. Uses the simplified regime (regime simplificado) — the default for most D8 visa holders and expat freelancers.</p>
        <h2>How freelancer taxes work in Portugal</h2>
        <h3>The simplified regime (regime simplificado)</h3>
        <p>Most freelancers in Portugal use the simplified tax regime. Under this regime, only 75% of your service income is considered taxable — the other 25% is a presumed expense deduction.</p>
        <h3>IRS income tax brackets</h3>
        <p>Portugal uses progressive tax rates from 12.5% to 48% across nine brackets. Your taxable income is taxed at each bracket rate for the portion within that bracket.</p>
        <h3>Social security (Seguranca Social)</h3>
        <p>Freelancers pay 21.4% on 70% of their relevant quarterly income — an effective rate of about 15% of gross income. New freelancers are exempt for their first 12 months.</p>
        <h3>VAT (IVA) threshold</h3>
        <p>If your annual income stays below EUR 15,000, you are exempt from charging VAT under Article 53. Once you cross this threshold, you must register for VAT and charge 23%.</p>
        <h3>NHR 2.0 (Non-Habitual Resident)</h3>
        <p>If you qualify for the NHR 2.0 regime, you pay a flat 20% rate on Portuguese-source self-employment income for 10 years.</p>
        <p><strong>Skip the Portuguese paperwork.</strong> <a href="/#waitlist">Join the VerdeDesk waitlist</a> — issue recibos verdes, track your income, and stay compliant in plain English.</p>
      </main>
      <footer style="margin-top:3rem;padding:1rem 0;border-top:1px solid #e5e7eb;color:#6b7280;font-size:0.875rem">
        <a href="/">VerdeDesk</a> — Green receipts made simple for expats in Portugal.
      </footer>
    </div>`;

  let html = template.replace(/<title>[^<]*<\/title>/, `<title>${tool.title}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${tool.description}"`);
  html = html.replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${tool.canonical}"`);
  html = html.replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${tool.canonical}"`);
  html = html.replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${tool.title}"`);
  html = html.replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${tool.description}"`);
  html = html.replace(/<meta name="twitter:title" content="[^"]*"/, `<meta name="twitter:title" content="${tool.title}"`);
  html = html.replace(/<meta name="twitter:description" content="[^"]*"/, `<meta name="twitter:description" content="${tool.description}"`);
  html = html.replace('</head>', `  <script type="application/ld+json">${jsonLd}</script>\n  </head>`);
  html = html.replace('<div id="root"></div>', `<div id="root">${rootContent}</div>`);

  return html;
}

function generateNhrCheckerHTML(template, tool) {
  const jsonLd = JSON.stringify([
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'NHR 2.0 Eligibility Checker',
      description: tool.description,
      url: tool.canonical,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
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
        { '@type': 'ListItem', position: 2, name: 'NHR 2.0 Eligibility Checker', item: tool.canonical },
      ],
    },
  ]);

  const rootContent = `
    <div style="max-width:48rem;margin:0 auto;padding:1rem 1.5rem">
      <nav style="padding:1.25rem 0;display:flex;justify-content:space-between;align-items:center">
        <a href="/" style="font-weight:600;color:#111">VerdeDesk</a>
        <a href="/#waitlist" style="color:#16a34a;font-weight:500">Join waitlist</a>
      </nav>
      <main>
        <nav aria-label="Breadcrumb"><a href="/">Home</a> / NHR 2.0 Eligibility Checker</nav>
        <h1>NHR 2.0 / IFICI Eligibility Checker</h1>
        <p>Check if you qualify for Portugal's new IFICI tax regime (NHR 2.0) — a 20% flat income tax rate for 10 years. Answer 5 questions to get your result.</p>
        <h2>What is NHR 2.0 / IFICI?</h2>
        <h3>The end of the original NHR</h3>
        <p>Portugal's original Non-Habitual Resident (NHR) tax regime ended on December 31, 2024. It was replaced by the IFICI regime (Incentivo Fiscal a Investigacao Cientifica e Inovacao), commonly called NHR 2.0, which took effect on January 1, 2025.</p>
        <h3>Who qualifies for IFICI?</h3>
        <p>IFICI targets professionals in strategic sectors: university professors and researchers, medical doctors, ICT specialists, senior executives, R&D staff, and certified startup employees. Most categories require a Bachelor's degree plus 3 years experience or a PhD.</p>
        <h3>Key requirements</h3>
        <ul>
          <li>Must become a Portuguese tax resident after January 1, 2024</li>
          <li>Cannot have been a Portuguese tax resident in the previous 5 years</li>
          <li>Cannot have previously benefited from original NHR or another special regime</li>
          <li>Must work in a qualifying profession with qualifying education</li>
        </ul>
        <h3>Tax benefits</h3>
        <p>IFICI provides a 20% flat income tax rate on Portuguese-sourced employment and self-employment income for 10 consecutive years. It also offers double taxation relief on certain foreign-sourced income.</p>
        <h3>IFICI vs original NHR: key differences</h3>
        <p>Unlike the broad original NHR, IFICI is targeted at specific high-value professions. Pension income and passive investments no longer qualify for preferential treatment.</p>
        <p><strong>Stay on top of your Portuguese tax obligations.</strong> <a href="/#waitlist">Join the VerdeDesk waitlist</a> — issue recibos verdes, track your income, and stay compliant in plain English.</p>
      </main>
      <footer style="margin-top:3rem;padding:1rem 0;border-top:1px solid #e5e7eb;color:#6b7280;font-size:0.875rem">
        <a href="/">VerdeDesk</a> — Green receipts made simple for expats in Portugal.
      </footer>
    </div>`;

  let html = template.replace(/<title>[^<]*<\/title>/, `<title>${tool.title}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${tool.description}"`);
  html = html.replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${tool.canonical}"`);
  html = html.replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${tool.canonical}"`);
  html = html.replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${tool.title}"`);
  html = html.replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${tool.description}"`);
  html = html.replace(/<meta name="twitter:title" content="[^"]*"/, `<meta name="twitter:title" content="${tool.title}"`);
  html = html.replace(/<meta name="twitter:description" content="[^"]*"/, `<meta name="twitter:description" content="${tool.description}"`);
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

// Prerender /tools/tax-calculator
const toolsDir = join(DIST, 'tools', 'tax-calculator');
mkdirSync(toolsDir, { recursive: true });
writeFileSync(join(toolsDir, 'index.html'), generateToolPageHTML(template, taxCalculator), 'utf-8');
count++;
console.log('  prerendered: /tools/tax-calculator');

// Prerender /tools/nhr-checker
const nhrDir = join(DIST, 'tools', 'nhr-checker');
mkdirSync(nhrDir, { recursive: true });
writeFileSync(join(nhrDir, 'index.html'), generateNhrCheckerHTML(template, nhrChecker), 'utf-8');
count++;
console.log('  prerendered: /tools/nhr-checker');

console.log(`\nPrerendered ${count} pages for SEO.`);

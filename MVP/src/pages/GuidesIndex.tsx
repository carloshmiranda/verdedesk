import { Link } from 'react-router-dom'
import { useSEO } from '../lib/useSEO'
import IrsFilingBanner from '../components/IrsFilingBanner'

const guides = [
  {
    to: '/guide/recibo-verde-english',
    title: 'How to Issue a Recibo Verde in English (2026)',
    description: 'Step-by-step walkthrough of issuing green receipts on Portal das Financas. Covers NIF, activity codes, VAT threshold, and the QES mandate.',
    tag: 'Getting started',
  },
  {
    to: '/guide/nif-portugal-foreigner',
    title: 'How to Get a NIF in Portugal as a Foreigner (2026)',
    description: 'Complete guide to getting your Portuguese tax number. Covers EU and non-EU citizens, fiscal representatives, in-person vs online options, required documents, and Portal das Financas registration.',
    tag: 'Getting started',
  },
  {
    to: '/guide/d8-visa-portugal-taxes',
    title: 'D8 Visa Portugal Taxes: Complete 2026 Guide',
    description: 'Everything D8 visa holders need to know — tax residency, NIF, income tax, VAT, social security, NHR 2.0, and your first-year checklist.',
    tag: 'D8 visa',
  },
  {
    to: '/guide/fatura-vs-fatura-recibo-vs-recibo',
    title: 'Fatura vs Fatura-Recibo vs Recibo Explained',
    description: 'The three Portuguese invoice types compared side-by-side. Which one to issue, when, and common mistakes expats make.',
    tag: 'Invoicing',
  },
  {
    to: '/guide/vat-exemption-article-53-portugal',
    title: 'VAT Exemption Article 53: The EUR 15,000 Threshold',
    description: 'How the VAT exemption works, the EUR 18,750 trap, 2026 rule changes, and what happens when you cross the limit.',
    tag: 'VAT',
  },
  {
    to: '/guide/social-security-freelancer-portugal',
    title: 'Social Security for Freelancers in Portugal',
    description: 'Contribution rates (21.4%), quarterly declaration deadlines, the 12-month exemption, and payment schedule explained.',
    tag: 'Social security',
  },
  {
    to: '/guide/irs-tax-return-freelancer-portugal',
    title: 'How to File Your IRS Tax Return as a Freelancer',
    description: 'Category B income, the simplified regime, 2026 tax brackets, deductible expenses, and step-by-step filing instructions.',
    tag: 'Tax return',
  },
  {
    to: '/guide/tax-deadlines-2026',
    title: 'Portugal Freelancer Tax Deadlines 2026',
    description: 'Month-by-month calendar of every IRS, social security, e-Fatura, and SAFT deadline. Never miss a filing date.',
    tag: 'Tax calendar',
  },
  {
    to: '/guide/register-freelancer-portugal',
    title: 'How to Register as a Freelancer (Abrir Atividade)',
    description: 'Step-by-step guide to opening your freelance activity on Portal das Financas. Covers NIF, CAE/CIRS codes, tax regime, and VAT selection.',
    tag: 'Getting started',
  },
  {
    to: '/guide/withholding-tax-portugal',
    title: 'Withholding Tax (Retencao na Fonte) Explained',
    description: 'How withholding tax works on green receipts. Covers the 25% rate, Article 53 exemption, international clients, and which option to choose on your recibo verde.',
    tag: 'Invoicing',
  },
  {
    to: '/guide/simplified-vs-organized-regime',
    title: 'Simplified vs Organized Regime Compared',
    description: 'Which tax regime should you choose? Side-by-side comparison of regime simplificado vs contabilidade organizada, the EUR 200k threshold, and when each one wins.',
    tag: 'Tax regime',
  },
  {
    to: '/guide/portal-das-financas-english',
    title: 'Portal das Financas in English (2026)',
    description: 'Navigate Portugal\x27s tax portal in English. Login, main menu translation, recibo verde form fields, error messages, and IRS filing — all explained step by step.',
    tag: 'Getting started',
  },
  {
    to: '/guide/tax-deductions-freelancer-portugal',
    title: 'Freelancer Tax Deductions in Portugal (2026)',
    description: 'What you can and cannot deduct as a freelancer. The simplified regime 25% automatic deduction, the 15% e-Fatura rule, and organized regime expenses.',
    tag: 'Tax return',
  },
  {
    to: '/guide/e-fatura-portugal-english',
    title: 'e-Fatura Portugal in English (2026)',
    description: 'How to use Portugal\'s invoice tracking system. Access the portal, validate invoices, classify personal vs professional expenses, and meet the February 25 deadline.',
    tag: 'Getting started',
  },
  {
    to: '/guide/anexo-b-irs-freelancer-portugal',
    title: 'Anexo B (Annex B) IRS Portugal: Field-by-Field Guide',
    description: 'Complete English translation of every field in Anexo B. For freelancers under the simplified regime filing 2025 income in 2026.',
    tag: 'Tax return',
  },
  {
    to: '/guide/invoice-foreign-clients-portugal',
    title: 'Invoicing Foreign Clients as a Portugal Freelancer (2026)',
    description: 'How to issue recibos verdes for non-Portuguese clients. VAT reverse charge, withholding tax exemption, currency conversion, and social security obligations.',
    tag: 'Invoicing',
  },
  {
    to: '/guide/accountant-freelancer-portugal',
    title: 'Do You Need an Accountant as a Freelancer in Portugal?',
    description: 'When Portuguese law requires a certified accountant, what they cost (€80–200/month), and when the simplified regime lets you manage compliance yourself.',
    tag: 'Tax regime',
  },
]

export default function GuidesIndex() {
  useSEO({
    title: 'Free Tax Guides for Expat Freelancers in Portugal (2026) | VerdeDesk',
    description: 'Plain English guides to Portuguese freelancer taxes — recibos verdes, VAT thresholds, social security, IRS filing, and D8 visa tax obligations. Updated for 2026.',
    canonical: 'https://verdedesk.vercel.app/guides',
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-verde-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">V</span>
          </div>
          <span className="font-semibold text-gray-900">VerdeDesk</span>
        </Link>
        <Link
          to="/#waitlist"
          className="text-sm font-medium text-verde-700 hover:text-verde-800"
        >
          Join waitlist
        </Link>
      </nav>

      {/* IRS Filing Season Banner */}
      <IrsFilingBanner />

      {/* Header */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-12">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-6">
          <Link to="/" className="hover:text-verde-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Guides</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
          Free Tax Guides for Expat Freelancers in Portugal
        </h1>
        <p className="text-lg text-gray-600">
          Plain English guides to every tax obligation you will face as a freelancer in Portugal.
          Written for D8 visa holders, NHR regime freelancers, and English-speaking expats. Updated for 2026.
        </p>
      </section>

      {/* Free tools */}
      <section className="max-w-3xl mx-auto px-6 pb-8">
        <Link
          to="/tools/tax-calculator"
          className="block p-6 rounded-xl border-2 border-verde-200 bg-verde-50 hover:border-verde-300 transition-colors group"
        >
          <div className="flex items-center gap-4">
            <span className="text-3xl">🧮</span>
            <div className="flex-1">
              <span className="inline-block text-xs font-medium text-verde-700 bg-verde-100 px-2 py-0.5 rounded-full mb-1">
                Free tool
              </span>
              <h2 className="text-lg font-semibold text-verde-800 group-hover:text-verde-900 transition-colors">
                Portugal Freelancer Tax Calculator
              </h2>
              <p className="text-verde-600 text-sm">
                Estimate your IRS, social security contributions, VAT status, and take-home pay under the simplified regime.
              </p>
            </div>
            <span className="text-verde-400 group-hover:text-verde-600 transition-colors text-xl flex-shrink-0">
              &rarr;
            </span>
          </div>
        </Link>
      </section>

      {/* Guide cards */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="space-y-4">
          {guides.map(({ to, title, description, tag }) => (
            <Link
              key={to}
              to={to}
              className="block p-6 rounded-xl border border-gray-200 hover:border-verde-300 hover:shadow-sm transition-all group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <span className="inline-block text-xs font-medium text-verde-600 bg-verde-50 px-2 py-0.5 rounded-full mb-2">
                    {tag}
                  </span>
                  <h2 className="text-lg font-semibold text-gray-900 group-hover:text-verde-700 transition-colors mb-2">
                    {title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                </div>
                <span className="text-gray-300 group-hover:text-verde-500 transition-colors text-xl mt-1 flex-shrink-0">
                  &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-verde-600 py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Skip the Portuguese paperwork
          </h2>
          <p className="text-verde-100 mb-6">
            VerdeDesk launches April 2026. Issue recibos verdes, track income, and stay compliant — in plain English.
          </p>
          <Link
            to="/#waitlist"
            className="inline-block px-6 py-3 bg-white hover:bg-verde-50 text-verde-700 font-semibold rounded-lg transition-colors"
          >
            Join the waitlist
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        <p>&copy; 2026 VerdeDesk. Made for freelancers in Portugal.</p>
      </footer>
    </div>
  )
}

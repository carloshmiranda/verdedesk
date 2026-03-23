import { Link } from 'react-router-dom'
import { useSEO } from '../lib/useSEO'
import { useArticleSchema } from '../lib/useArticleSchema'
import RelatedGuides from '../components/RelatedGuides'
import IrsFilingBanner from '../components/IrsFilingBanner'

const deadlines = [
  {
    month: 'January',
    items: [
      { date: 'Jan 15', label: 'IFICI (NHR 2.0) application deadline and annual eligibility proof', category: 'NHR' },
      { date: 'Jan 1–31', label: 'Quarterly SS declaration for Q4 2025 (Oct–Dec) — submit via Seguranca Social Direta', category: 'SS' },
      { date: 'Jan 10–20', label: 'Monthly social security contribution payment', category: 'SS' },
    ],
  },
  {
    month: 'February',
    items: [
      { date: 'Feb 5', label: 'SAFT file submission for January invoices', category: 'Invoicing' },
      { date: 'Feb 10–20', label: 'Monthly social security contribution payment', category: 'SS' },
      { date: 'Feb 16', label: 'Rental contract reporting deadline (Modelo 44)', category: 'Other' },
      { date: 'Feb 25', label: 'e-Fatura validation deadline — validate all 2025 invoices (extended to Mar 2)', category: 'IRS' },
    ],
  },
  {
    month: 'March',
    items: [
      { date: 'Mar 2', label: 'Extended e-Fatura validation deadline + household composition confirmation', category: 'IRS' },
      { date: 'Mar 5', label: 'SAFT file submission for February invoices', category: 'Invoicing' },
      { date: 'Mar 10–20', label: 'Monthly social security contribution payment', category: 'SS' },
      { date: 'Mar 15–31', label: 'IRS deduction verification period — review pre-filled deductions on Portal das Financas', category: 'IRS' },
      { date: 'Mar 31', label: 'Optional 1% IRS/VAT consignment election', category: 'IRS' },
    ],
  },
  {
    month: 'April',
    items: [
      { date: 'Apr 1', label: 'IRS filing window OPENS — submit Modelo 3 for 2025 income', category: 'IRS' },
      { date: 'Apr 1–30', label: 'Quarterly SS declaration for Q1 2026 (Jan–Mar)', category: 'SS' },
      { date: 'Apr 5', label: 'SAFT file submission for March invoices', category: 'Invoicing' },
      { date: 'Apr 10–20', label: 'Monthly social security contribution payment', category: 'SS' },
    ],
  },
  {
    month: 'May',
    items: [
      { date: 'May 5', label: 'SAFT file submission for April invoices', category: 'Invoicing' },
      { date: 'May 10–20', label: 'Monthly social security contribution payment', category: 'SS' },
      { date: 'May 31', label: 'IMI (property tax) first instalment or single payment', category: 'Other' },
    ],
  },
  {
    month: 'June',
    items: [
      { date: 'Jun 5', label: 'SAFT file submission for May invoices', category: 'Invoicing' },
      { date: 'Jun 10–20', label: 'Monthly social security contribution payment', category: 'SS' },
      { date: 'Jun 30', label: 'IRS filing window CLOSES — last day to submit Modelo 3', category: 'IRS' },
    ],
  },
  {
    month: 'July',
    items: [
      { date: 'Jul 1–31', label: 'Quarterly SS declaration for Q2 2026 (Apr–Jun)', category: 'SS' },
      { date: 'Jul 5', label: 'SAFT file submission for June invoices', category: 'Invoicing' },
      { date: 'Jul 10–20', label: 'Monthly social security contribution payment', category: 'SS' },
      { date: 'Jul 31', label: 'IRS prepayment first instalment (Pagamento por Conta)', category: 'IRS' },
    ],
  },
  {
    month: 'August',
    items: [
      { date: 'Aug 5', label: 'SAFT file submission for July invoices', category: 'Invoicing' },
      { date: 'Aug 10–20', label: 'Monthly social security contribution payment', category: 'SS' },
      { date: 'Aug 31', label: 'IMI second instalment (if total exceeds EUR 500)', category: 'Other' },
      { date: 'Aug 31', label: 'IRS refund typically processed by end of August', category: 'IRS' },
    ],
  },
  {
    month: 'September',
    items: [
      { date: 'Sep 5', label: 'SAFT file submission for August invoices', category: 'Invoicing' },
      { date: 'Sep 10–20', label: 'Monthly social security contribution payment', category: 'SS' },
      { date: 'Sep 30', label: 'IRS prepayment second instalment', category: 'IRS' },
      { date: 'Sep 30', label: 'AIMI (additional property tax) payment', category: 'Other' },
    ],
  },
  {
    month: 'October',
    items: [
      { date: 'Oct 1–31', label: 'Quarterly SS declaration for Q3 2026 (Jul–Sep)', category: 'SS' },
      { date: 'Oct 5', label: 'SAFT file submission for September invoices', category: 'Invoicing' },
      { date: 'Oct 10–20', label: 'Monthly social security contribution payment', category: 'SS' },
    ],
  },
  {
    month: 'November',
    items: [
      { date: 'Nov 5', label: 'SAFT file submission for October invoices', category: 'Invoicing' },
      { date: 'Nov 10–20', label: 'Monthly social security contribution payment', category: 'SS' },
      { date: 'Nov 30', label: 'IMI final instalment', category: 'Other' },
    ],
  },
  {
    month: 'December',
    items: [
      { date: 'Dec 5', label: 'SAFT file submission for November invoices', category: 'Invoicing' },
      { date: 'Dec 10–20', label: 'Monthly social security contribution payment', category: 'SS' },
      { date: 'Dec 31', label: 'IRS prepayment third instalment', category: 'IRS' },
      { date: 'Dec 31', label: 'Last day of tax year — review annual income for VAT Article 53 threshold (EUR 15,000)', category: 'VAT' },
    ],
  },
]

const categoryColors: Record<string, string> = {
  IRS: 'bg-blue-100 text-blue-700',
  SS: 'bg-amber-100 text-amber-700',
  VAT: 'bg-purple-100 text-purple-700',
  Invoicing: 'bg-verde-100 text-verde-700',
  NHR: 'bg-pink-100 text-pink-700',
  Other: 'bg-gray-100 text-gray-600',
}

export default function GuideTaxDeadlines() {
  useSEO({
    title: 'Portugal Freelancer Tax Deadlines 2026 — Month-by-Month Calendar | VerdeDesk',
    description: 'Every tax deadline for freelancers in Portugal in 2026. IRS filing (Apr 1 – Jun 30), social security quarterly declarations, e-Fatura validation, SAFT submissions, and prepayment instalments — in one calendar.',
    canonical: 'https://verdedesk.vercel.app/guide/tax-deadlines-2026',
  })
  useArticleSchema({
    title: 'Portugal Freelancer Tax Deadlines 2026 — Month-by-Month Calendar',
    description: 'Every tax deadline for freelancers in Portugal in 2026. IRS filing, social security, e-Fatura, SAFT, and prepayment instalments.',
    url: 'https://verdedesk.vercel.app/guide/tax-deadlines-2026',
    datePublished: '2026-03-19',
    dateModified: '2026-03-19',
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

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-6">
          <Link to="/" className="hover:text-verde-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/guides" className="hover:text-verde-600">Guides</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Tax Deadlines 2026</span>
        </nav>

        <p className="text-sm text-verde-600 font-medium mb-4">Tax calendar</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
          Portugal Freelancer Tax Deadlines 2026: The Complete Month-by-Month Calendar
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Updated March 2026. All dates verified against Portuguese tax authority (AT) guidelines.
        </p>

        {/* Key dates summary */}
        <div className="bg-verde-50 border border-verde-200 rounded-xl p-6 mb-12">
          <h2 className="text-lg font-semibold text-verde-800 mb-4">Key dates at a glance</h2>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <div className="flex gap-3">
              <span className="font-semibold text-verde-700 whitespace-nowrap">Feb 25</span>
              <span className="text-gray-700">e-Fatura validation deadline</span>
            </div>
            <div className="flex gap-3">
              <span className="font-semibold text-verde-700 whitespace-nowrap">Apr 1 – Jun 30</span>
              <span className="text-gray-700">IRS Modelo 3 filing window</span>
            </div>
            <div className="flex gap-3">
              <span className="font-semibold text-verde-700 whitespace-nowrap">10th – 20th</span>
              <span className="text-gray-700">Monthly SS contribution payment</span>
            </div>
            <div className="flex gap-3">
              <span className="font-semibold text-verde-700 whitespace-nowrap">Jan/Apr/Jul/Oct</span>
              <span className="text-gray-700">Quarterly SS declarations</span>
            </div>
            <div className="flex gap-3">
              <span className="font-semibold text-verde-700 whitespace-nowrap">Jul/Sep/Dec</span>
              <span className="text-gray-700">IRS prepayment instalments</span>
            </div>
            <div className="flex gap-3">
              <span className="font-semibold text-verde-700 whitespace-nowrap">5th monthly</span>
              <span className="text-gray-700">SAFT file submission</span>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-2 mb-8">
          {Object.entries(categoryColors).map(([cat, cls]) => (
            <span key={cat} className={`text-xs font-medium px-2 py-1 rounded-full ${cls}`}>
              {cat}
            </span>
          ))}
        </div>

        <div className="prose prose-gray max-w-none">
          <h2 id="how-to-use" className="text-xl font-bold text-gray-900 mt-8 mb-4">
            How to use this calendar
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            As a freelancer in Portugal, you face obligations from three separate entities: the <strong>tax authority (AT / Autoridade Tributaria)</strong> for income tax and VAT, <strong>Seguranca Social</strong> for social security contributions, and your own invoicing requirements. Missing any deadline results in fines ranging from EUR 150 to EUR 3,750. This calendar puts every deadline in one place so nothing falls through the cracks.
          </p>

          {/* Monthly calendar */}
          {deadlines.map(({ month, items }) => (
            <div key={month} className="mb-10">
              <h2 id={month.toLowerCase()} className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                {month} 2026
              </h2>
              <div className="space-y-3">
                {items.map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="text-sm font-mono font-semibold text-gray-500 whitespace-nowrap w-24 flex-shrink-0 pt-0.5">
                      {item.date}
                    </span>
                    <div className="flex-1 flex items-start gap-2">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5 ${categoryColors[item.category]}`}>
                        {item.category}
                      </span>
                      <span className="text-gray-700 text-sm leading-relaxed">{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Penalty section */}
          <h2 id="penalties" className="text-xl font-bold text-gray-900 mt-12 mb-4">
            What happens if you miss a deadline?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Portugal takes tax compliance seriously. Here are the penalties for late or missed filings:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm mb-8">
            <li><strong>Late IRS Modelo 3:</strong> Fines from EUR 150 to EUR 3,750 depending on severity and repeat offences</li>
            <li><strong>Late e-Fatura validation:</strong> You lose the right to claim deductions for unvalidated invoices</li>
            <li><strong>Late SS declaration:</strong> Your contributions are estimated by Seguranca Social at a higher amount, and you may face penalties</li>
            <li><strong>Late SS payment:</strong> Interest charges accumulate from the 21st of the month, and persistent non-payment can lead to enforcement proceedings</li>
            <li><strong>Missing SAFT submission:</strong> Fines from EUR 200 to EUR 10,000 per infraction</li>
          </ul>

          {/* First year section */}
          <h2 id="first-year" className="text-xl font-bold text-gray-900 mt-12 mb-4">
            First year in Portugal? What applies to you
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you registered as a freelancer in 2025 or 2026 on a D8 visa, here is what you need to know:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm mb-8">
            <li><strong>12-month SS exemption:</strong> New freelancers are exempt from social security contributions for their first 12 months. You still need to submit quarterly declarations — just with zero income reported.</li>
            <li><strong>IRS filing is mandatory:</strong> Even if you arrived mid-year and earned very little, you must file Modelo 3 between April 1 and June 30. New NHR/IFICI regime holders must file too, even if no tax is due.</li>
            <li><strong>e-Fatura from day one:</strong> Every invoice you issue with your NIF is tracked. Validate your 2025 invoices by February 25, 2026.</li>
            <li><strong>VAT Article 53:</strong> If you stay below EUR 15,000 annual income, you are exempt from VAT. Monitor your invoiced total throughout the year.</li>
          </ul>

          {/* Recurring deadlines */}
          <h2 id="recurring" className="text-xl font-bold text-gray-900 mt-12 mb-4">
            Recurring monthly deadlines
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            These deadlines repeat every single month:
          </p>
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <span className="font-mono font-semibold text-gray-500 w-20 flex-shrink-0">5th</span>
                <span className="text-gray-700">SAFT file submission for previous month's invoices (via e-Fatura)</span>
              </div>
              <div className="flex gap-3">
                <span className="font-mono font-semibold text-gray-500 w-20 flex-shrink-0">10th–20th</span>
                <span className="text-gray-700">Social security contribution payment window (via Seguranca Social Direta or MB/ATM)</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-verde-50 border border-verde-200 rounded-xl p-8 text-center mt-12">
            <h2 className="text-xl font-bold text-verde-800 mb-3">
              Never miss a Portuguese tax deadline
            </h2>
            <p className="text-verde-700 mb-4">
              VerdeDesk sends you reminders before every deadline, auto-generates your recibos verdes in English, and tracks your income so you always know where you stand.
            </p>
            <Link
              to="/#waitlist"
              className="inline-block px-6 py-3 bg-verde-600 hover:bg-verde-700 text-white font-semibold rounded-lg transition-colors"
            >
              Join the waitlist — launching April 2026
            </Link>
          </div>
        </div>
      </article>

      <RelatedGuides current="/guide/tax-deadlines-2026" />

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        <p>&copy; 2026 VerdeDesk. Made for freelancers in Portugal.</p>
      </footer>
    </div>
  )
}

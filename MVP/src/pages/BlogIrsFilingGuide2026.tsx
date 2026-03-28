import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useSEO } from '../lib/useSEO'
import { useArticleSchema } from '../lib/useArticleSchema'
import RelatedGuides from '../components/RelatedGuides'
import IrsFilingBanner from '../components/IrsFilingBanner'

export default function BlogIrsFilingGuide2026() {
  useSEO({
    title: 'Portugal Freelancer Tax Return 2026: Complete English Guide | VerdeDesk',
    description: 'Complete guide to filing your Portugal freelancer tax return in 2026. Covers IRS modelo 3 anexo B, simplified regime, deadlines (April 1-June 30), and common mistakes. In English.',
    canonical: 'https://verdedesk.vercel.app/blog/portugal-freelancer-tax-return-2026',
  })
  useArticleSchema({
    title: 'Portugal Freelancer Tax Return 2026: Complete English Guide',
    description: 'Complete guide to filing your Portugal freelancer tax return in 2026. Covers IRS modelo 3 anexo B, simplified regime, deadlines, and common mistakes.',
    url: 'https://verdedesk.vercel.app/blog/portugal-freelancer-tax-return-2026',
    datePublished: '2026-03-28',
    dateModified: '2026-03-28',
  })

  // Add keywords meta tag for SEO targeting
  useEffect(() => {
    const keywordsContent = 'portugal freelancer tax return 2026, IRS modelo 3 anexo B english guide, portugal tax filing freelancer, recibos verdes tax return, portugal irs filing english'
    let keywordsMeta = document.querySelector('meta[name="keywords"]')
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta')
      keywordsMeta.setAttribute('name', 'keywords')
      document.head.appendChild(keywordsMeta)
    }
    keywordsMeta.setAttribute('content', keywordsContent)
  }, [])

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

      {/* Blog Post */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-sm text-verde-600 font-medium mb-4">VerdeDesk Blog • Tax Compliance</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
          Portugal Freelancer Tax Return 2026: Complete English Guide (IRS Modelo 3 Anexo B)
        </h1>
        <p className="text-gray-500 text-sm mb-12">
          Published March 28, 2026. Filing deadline: April 1 — June 30, 2026. Updated for the 2025 tax year.
        </p>

        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            If you're a freelancer in Portugal, you must file an annual IRS tax return by June 30, 2026
            — even if all your clients are outside Portugal. The process happens entirely on Portal das
            Financas, in Portuguese. This comprehensive guide walks you through the entire IRS modelo 3
            anexo B filing process in English, covering deadlines, the simplified regime, and how to
            avoid common mistakes that trigger audits.
          </p>

          {/* Prominent CTA */}
          <div className="bg-verde-50 border border-verde-200 rounded-xl p-6 my-8">
            <h3 className="text-lg font-bold text-verde-800 mb-2">
              Get Your 2026 IRS Filing Checklist
            </h3>
            <p className="text-verde-700 mb-4">
              Join our waitlist and get a free English checklist for your 2026 IRS filing,
              plus deadline reminders and tax-saving tips.
            </p>
            <Link
              to="/#waitlist"
              className="inline-block px-6 py-3 bg-verde-600 hover:bg-verde-700 text-white font-semibold rounded-lg transition-colors"
            >
              Get Free IRS Checklist
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            What is the IRS and Who Must File?
          </h2>
          <p className="text-gray-700 mb-4">
            IRS (<em>Imposto sobre o Rendimento das Pessoas Singulares</em>) is Portugal's personal
            income tax system. As a freelancer in Portugal, your income falls under <strong>Category B</strong>
            — income from self-employment and professional activities. You must file using <strong>IRS
            Modelo 3 with Anexo B</strong>, regardless of your clients' location.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Who must file:</strong> All Portugal tax residents with freelance income, plus
            non-residents with Portuguese-source income. This includes D8 visa holders, NHR 2.0
            beneficiaries, and Portuguese nationals working as freelancers.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Critical Deadlines for 2026 (Filing 2025 Income)
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-red-800 mb-2">⚠️ Don't Miss These Dates</h3>
            <ul className="list-disc pl-6 text-red-700 space-y-1">
              <li><strong>April 1 — June 30, 2026:</strong> IRS filing window (no extensions)</li>
              <li><strong>July 2026:</strong> Tax assessment notice issued</li>
              <li><strong>August 31, 2026:</strong> Payment deadline if additional tax owed</li>
            </ul>
          </div>
          <p className="text-gray-700 mb-4">
            Missing the June 30 deadline triggers automatic penalties starting at EUR 25, plus
            interest. There is no extension process in Portugal — the deadline is absolute.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Understanding IRS Modelo 3 Anexo B
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>IRS Modelo 3</strong> is the main tax form for individuals. <strong>Anexo B</strong>
            is the section specifically for Category B income (freelancer income from recibos verdes).
            This is separate from employment income (Anexo A) or rental income (Anexo F).
          </p>
          <p className="text-gray-700 mb-4">
            Anexo B captures your total revenue from all recibos verdes issued in 2025, then applies
            the simplified regime coefficients to calculate your taxable income.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            The Simplified Regime: 75% Rule Explained
          </h2>
          <p className="text-gray-700 mb-4">
            Most freelancers in Portugal operate under the <strong>simplified regime</strong> (<em>regime
            simplificado</em>). Here's how it works:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>Only <strong>75%</strong> of your Category B income is subject to IRS</li>
            <li>The remaining 25% is treated as a presumed expense deduction</li>
            <li>Of that 25%, <strong>10% is automatic</strong> — no documentation required</li>
            <li>The other <strong>15% must be backed by validated expense invoices</strong> in e-Fatura</li>
          </ul>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-yellow-800 mb-2">⚠️ Critical: The 15% Expense Requirement</h3>
            <p className="text-yellow-700">
              If you don't have enough validated expenses in e-Fatura to cover the 15%, the difference
              gets added back to your taxable income. Many freelancers are surprised by higher tax bills
              because they assumed the full 25% deduction was automatic.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            2026 Tax Rates (After Simplified Regime Applied)
          </h2>
          <p className="text-gray-700 mb-4">
            After applying the simplified regime (75% of gross income), your taxable amount is
            subject to Portugal's progressive tax brackets:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left text-gray-700 border-collapse bg-gray-50 rounded-lg">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 font-semibold">Taxable Income (EUR)</th>
                  <th className="py-3 px-4 font-semibold">IRS Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-4">0 — 7,703</td>
                  <td className="py-2 px-4">13%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-4">7,703 — 11,623</td>
                  <td className="py-2 px-4">18%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-4">11,623 — 16,472</td>
                  <td className="py-2 px-4">23%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-4">16,472 — 21,321</td>
                  <td className="py-2 px-4">26%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-4">21,321 — 27,146</td>
                  <td className="py-2 px-4">32.75%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-4">27,146 — 39,791</td>
                  <td className="py-2 px-4">37%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-4">39,791 — 51,997</td>
                  <td className="py-2 px-4">43.5%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-4">51,997 — 81,199</td>
                  <td className="py-2 px-4">45%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-4">Over 81,199</td>
                  <td className="py-2 px-4">48%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-blue-800 mb-2">💡 NHR 2.0 Special Rate</h3>
            <p className="text-blue-700">
              If you qualify for the Non-Habitual Resident regime, your Category B income may be
              taxed at a flat 20% rate instead of the progressive brackets — a significant advantage
              for higher earners.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Step-by-Step: Filing Your IRS Modelo 3 Anexo B
          </h2>
          <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-4">
            <li>
              <strong>Access Portal das Financas</strong><br />
              Log in with your NIF and password at portaldas<wbr />financas.gov.pt. If you haven't
              activated your account, you'll need the activation code sent to your fiscal address.
            </li>
            <li>
              <strong>Navigate to IRS Section</strong><br />
              Go to <em>Cidadãos → Entregar Declaração → IRS</em>. Select "Modelo 3" for
              individual taxpayers.
            </li>
            <li>
              <strong>Complete Anexo B (Freelance Income)</strong><br />
              This section captures your Category B income. The portal may auto-populate data
              from your issued recibos verdes, but always verify against your records.
            </li>
            <li>
              <strong>Validate Expenses in e-Fatura First</strong><br />
              Before submitting your IRS, go to <em>e-Fatura → Verificar Faturas</em> and
              categorize your business expenses. Your 15% expense deduction depends on this.
            </li>
            <li>
              <strong>Handle Withholding Tax (if applicable)</strong><br />
              If Portuguese clients withheld 25% tax from your payments, this appears as a
              credit against your final tax liability.
            </li>
            <li>
              <strong>Review and Submit</strong><br />
              Double-check all figures, especially total income and expense validations.
              Submit and save your submission reference number.
            </li>
            <li>
              <strong>Await Assessment Notice</strong><br />
              The tax authority issues a <em>nota de liquidação</em> (assessment notice) in July,
              showing your final tax liability or refund amount.
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Withholding Tax: What You Need to Know
          </h2>
          <p className="text-gray-700 mb-4">
            When you issue recibos verdes to Portuguese companies, they may withhold 25% of your
            payment as advance IRS tax. This is <strong>not an additional tax</strong> — it's
            credited against your final IRS liability.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Key points:</strong>
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
            <li>If your effective tax rate is lower than 25%, you'll get a refund</li>
            <li>Freelancers under Article 53 (VAT exempt) with income under EUR 14,500 can request exemption from withholding</li>
            <li>Request exemption via Portal das Financas at the start of each tax year</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            5 Mistakes That Trigger IRS Audits
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
            <ol className="list-decimal pl-6 text-red-700 space-y-3">
              <li>
                <strong>Not filing Anexo B:</strong> Omitting the freelance income section triggers
                automatic flags in the tax system.
              </li>
              <li>
                <strong>Failing to validate expenses in e-Fatura:</strong> Your 15% deduction
                depends on properly categorized expenses.
              </li>
              <li>
                <strong>Filing after June 30:</strong> Late filing incurs penalties and increases
                audit probability.
              </li>
              <li>
                <strong>Income discrepancies:</strong> Portal pre-fills from recibos verdes but
                can miss invoices or double-count corrections.
              </li>
              <li>
                <strong>Mixing income types:</strong> Freelance income goes in Anexo B, not in
                the main declaration with employment income.
              </li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Resources and Next Steps
          </h2>
          <p className="text-gray-700 mb-4">
            Need more help navigating Portugal's freelancer tax system? Check out these related guides:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
            <li>
              <Link to="/guide/recibo-verde-english" className="text-verde-600 hover:text-verde-700 underline">
                How to issue recibos verdes step-by-step
              </Link>
            </li>
            <li>
              <Link to="/guide/anexo-b-irs-freelancer-portugal" className="text-verde-600 hover:text-verde-700 underline">
                Deep dive into Anexo B requirements
              </Link>
            </li>
            <li>
              <Link to="/guide/simplified-vs-organized-regime" className="text-verde-600 hover:text-verde-700 underline">
                Simplified vs organized accounting regime
              </Link>
            </li>
            <li>
              <Link to="/guide/e-fatura-portugal-english" className="text-verde-600 hover:text-verde-700 underline">
                Using e-Fatura for expense validation
              </Link>
            </li>
          </ul>

          {/* Final CTA */}
          <div className="bg-verde-50 border border-verde-200 rounded-xl p-8 my-12">
            <h3 className="text-xl font-bold text-verde-800 mb-3">
              Never Miss Another Tax Deadline
            </h3>
            <p className="text-verde-700 mb-6">
              VerdeDesk tracks your annual income, estimates your IRS liability, validates your
              expenses, and sends deadline reminders — all in English. Join our waitlist for
              early access when we launch in April 2026.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/#waitlist"
                className="inline-block px-6 py-3 bg-verde-600 hover:bg-verde-700 text-white font-semibold rounded-lg transition-colors text-center"
              >
                Join Waitlist — Free Checklist Included
              </Link>
              <Link
                to="/tools/tax-calculator"
                className="inline-block px-6 py-3 bg-white border-2 border-verde-600 text-verde-600 hover:bg-verde-50 font-semibold rounded-lg transition-colors text-center"
              >
                Calculate Your 2026 Tax Bill
              </Link>
            </div>
          </div>

          <RelatedGuides current="/blog/portugal-freelancer-tax-return-2026" />
        </div>
      </article>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        <p>&copy; 2026 VerdeDesk. Made for freelancers in Portugal.</p>
      </footer>
    </div>
  )
}
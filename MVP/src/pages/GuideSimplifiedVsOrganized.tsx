import { Link } from 'react-router-dom'
import { useSEO } from '../lib/useSEO'
import { useArticleSchema } from '../lib/useArticleSchema'
import RelatedGuides from '../components/RelatedGuides'

export default function GuideSimplifiedVsOrganized() {
  useSEO({
    title: 'Simplified vs Organized Regime for Freelancers in Portugal (2026) | VerdeDesk',
    description: 'Should you choose the simplified or organized accounting regime as a freelancer in Portugal? This English guide compares both tax regimes, explains the EUR 200k threshold, and helps D8 visa holders pick the right one.',
    canonical: 'https://verdedesk.vercel.app/guide/simplified-vs-organized-regime',
  })
  useArticleSchema({
    title: 'Simplified vs Organized Regime for Freelancers in Portugal (2026)',
    description: 'English guide comparing the simplified and organized accounting regimes for freelancers in Portugal.',
    url: 'https://verdedesk.vercel.app/guide/simplified-vs-organized-regime',
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

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-6">
          <Link to="/" className="hover:text-verde-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/guides" className="hover:text-verde-600">Guides</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Simplified vs Organized Regime</span>
        </nav>

        <p className="text-sm text-verde-600 font-medium mb-4">Guide for expat freelancers</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
          Simplified vs Organized Regime: Which Tax Regime Should You Choose as a Freelancer in Portugal?
        </h1>
        <p className="text-gray-500 text-sm mb-12">
          Updated March 2026. The decision that determines how your income is taxed for the entire year.
        </p>

        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            When you register as a freelancer in Portugal (abrir atividade), you must choose between
            two tax regimes: <strong>regime simplificado</strong> (simplified) or <strong>contabilidade organizada</strong> (organized
            accounting). This choice determines how your taxable income is calculated and whether you
            need a certified accountant. Most D8 visa holders should choose the simplified regime — but
            not always.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            What is the simplified regime (regime simplificado)?
          </h2>
          <p className="text-gray-700 mb-4">
            The simplified regime is Portugal's default tax regime for freelancers. Under this regime,
            the tax authority applies a flat presumed-expense deduction to your gross income. You do not
            need to track or prove actual business expenses.
          </p>
          <p className="text-gray-700 mb-4">
            For service-based freelancers (the vast majority of D8 visa holders — developers, designers,
            consultants, writers), only <strong>75% of your gross income is taxable</strong>. The remaining
            25% is automatically treated as business expenses, no receipts required.
          </p>
          <p className="text-gray-700 mb-4">
            For product-based businesses (selling goods), only <strong>15% of your gross income is
            taxable</strong> — the presumed expense rate is much higher because goods have material costs.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <p className="font-semibold text-gray-900 mb-2">Example: simplified regime for a developer</p>
            <p className="text-gray-700 text-sm">
              You earn EUR 40,000/year from freelance development work.<br />
              Taxable income = EUR 40,000 x 75% = <strong>EUR 30,000</strong>.<br />
              The EUR 10,000 "deduction" is automatic — no receipts, no bookkeeping.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            What is the organized regime (contabilidade organizada)?
          </h2>
          <p className="text-gray-700 mb-4">
            The organized regime works like traditional business accounting. You deduct your actual,
            documented business expenses from your gross income. Your taxable income is gross income
            minus all proven expenses.
          </p>
          <p className="text-gray-700 mb-4">
            This regime <strong>requires a certified accountant</strong> (contabilista certificado). You
            cannot file under contabilidade organizada without one. The accountant maintains your books,
            submits quarterly IES declarations, and handles SAF-T compliance.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <p className="font-semibold text-gray-900 mb-2">Example: organized regime for the same developer</p>
            <p className="text-gray-700 text-sm">
              You earn EUR 40,000/year from freelance development work.<br />
              Actual business expenses: coworking (EUR 3,600), equipment (EUR 2,000), software (EUR 1,200),
              accountant (EUR 1,800), travel (EUR 2,400) = EUR 11,000 total.<br />
              Taxable income = EUR 40,000 - EUR 11,000 = <strong>EUR 29,000</strong>.<br />
              Slightly lower taxable income, but you need receipts for everything + pay the accountant.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Side-by-side comparison
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 font-semibold text-gray-900"></th>
                  <th className="px-4 py-3 font-semibold text-verde-700">Simplified</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Organized</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">How taxable income is calculated</td>
                  <td className="px-4 py-3 text-gray-700">75% of gross (services) or 15% (goods)</td>
                  <td className="px-4 py-3 text-gray-700">Gross minus actual documented expenses</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Accountant required?</td>
                  <td className="px-4 py-3 text-verde-700 font-medium">No</td>
                  <td className="px-4 py-3 text-gray-700">Yes (EUR 100-200/month)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Revenue limit</td>
                  <td className="px-4 py-3 text-gray-700">EUR 200,000/year</td>
                  <td className="px-4 py-3 text-gray-700">No limit</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Expense tracking</td>
                  <td className="px-4 py-3 text-verde-700 font-medium">None required</td>
                  <td className="px-4 py-3 text-gray-700">Full documentation required</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Best for</td>
                  <td className="px-4 py-3 text-gray-700">Low-expense service freelancers</td>
                  <td className="px-4 py-3 text-gray-700">High-expense businesses, income over EUR 200k</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Bookkeeping complexity</td>
                  <td className="px-4 py-3 text-verde-700 font-medium">Minimal</td>
                  <td className="px-4 py-3 text-gray-700">Full double-entry accounting</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            The EUR 200,000 threshold
          </h2>
          <p className="text-gray-700 mb-4">
            You can only use the simplified regime if your annual gross income stays below
            EUR 200,000. If you cross this threshold in any calendar year, you are automatically
            moved to the organized regime starting the following year. You must then hire a
            certified accountant.
          </p>
          <p className="text-gray-700 mb-4">
            For the vast majority of D8 visa freelancers, this threshold is not a concern. The
            average D8 visa holder earns between EUR 30,000 and EUR 80,000 per year.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            When simplified beats organized
          </h2>
          <p className="text-gray-700 mb-4">
            The simplified regime wins when your actual business expenses are less than 25%
            of your gross income. This is the case for most remote service freelancers:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Software developers</strong> — laptop, internet, maybe a coworking space. Expenses rarely exceed 15% of income.</li>
            <li><strong>Designers and consultants</strong> — similar expense profile. The 25% automatic deduction is generous.</li>
            <li><strong>Writers and translators</strong> — minimal equipment costs. The simplified regime is almost always better.</li>
            <li><strong>Online tutors and coaches</strong> — platform fees are the main expense, usually under 25%.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            When organized beats simplified
          </h2>
          <p className="text-gray-700 mb-4">
            The organized regime wins when your actual documented expenses exceed 25% of your
            gross income:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Freelancers with employees or subcontractors</strong> — payroll costs push expenses well above 25%.</li>
            <li><strong>Equipment-heavy professions</strong> — photographers, videographers, lab researchers with significant gear costs.</li>
            <li><strong>High travel costs</strong> — consultants who travel frequently to client sites.</li>
            <li><strong>Income over EUR 200,000</strong> — you have no choice; organized is mandatory.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            The 15% deduction rule for goods
          </h2>
          <p className="text-gray-700 mb-4">
            If your freelance activity involves selling physical or digital products (not services),
            the simplified regime only taxes 15% of your gross income — an automatic 85% expense
            deduction. This is extremely favorable and reflects the higher cost of goods sold.
          </p>
          <p className="text-gray-700 mb-4">
            However, most D8 visa freelancers provide services, not goods. Your CAE/CIRS activity
            code determines which rate applies. If you chose a service-based activity code when you
            registered (abrir atividade), the 75% rate applies.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Can you switch between regimes?
          </h2>
          <p className="text-gray-700 mb-4">
            Yes. You can switch regimes, but only at the start of a new tax year:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>Submit a declaration of alteration (declaracao de alteracoes) on Portal das Financas by March 31 of the year you want the change to apply.</li>
            <li>The change takes effect from January 1 of that year.</li>
            <li>If you switch to organized, you must already have a certified accountant lined up.</li>
            <li>If you switch from organized back to simplified, you must stay below EUR 200,000.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            How each regime affects your social security
          </h2>
          <p className="text-gray-700 mb-4">
            Your tax regime also affects your Seguranca Social contributions:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
            <li><strong>Simplified regime:</strong> contributions are calculated on 70% of your relevant quarterly income. The effective rate is about 21.4% x 70% = ~15% of gross income.</li>
            <li><strong>Organized regime:</strong> contributions are calculated on your declared net profit. If your accountant optimizes your deductions, this can result in lower contributions — but the accountant's fee offsets some of the savings.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Common mistakes D8 visa freelancers make
          </h2>
          <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
            <li><strong>Choosing organized "to be safe":</strong> Organized requires a certified accountant (EUR 1,200-2,400/year) and full bookkeeping. For most remote freelancers with few expenses, the simplified regime is both cheaper and simpler.</li>
            <li><strong>Thinking simplified means no tax return:</strong> You still file an annual IRS return. The regime only changes how taxable income is calculated — not whether you file.</li>
            <li><strong>Not tracking the EUR 200,000 threshold:</strong> If you cross it, the switch to organized is automatic and you need an accountant immediately.</li>
            <li><strong>Assuming you can deduct expenses in simplified:</strong> You cannot. The 25% deduction is fixed and automatic. Keeping receipts does not reduce your tax under the simplified regime.</li>
          </ul>

          {/* CTA */}
          <div className="bg-verde-50 border border-verde-200 rounded-xl p-8 my-12">
            <h3 className="text-xl font-bold text-verde-800 mb-3">
              VerdeDesk handles the regime for you.
            </h3>
            <p className="text-verde-700 mb-4">
              We track your income, estimate your taxes under the simplified regime, and warn you
              before you hit thresholds — all in plain English. No accountant needed until you
              actually need one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/#waitlist"
                className="inline-block px-6 py-3 bg-verde-600 hover:bg-verde-700 text-white font-semibold rounded-lg transition-colors text-center"
              >
                Join the waitlist — first month free
              </Link>
              <Link
                to="/tools/tax-calculator"
                className="inline-block px-6 py-3 border border-verde-300 text-verde-700 hover:bg-verde-50 font-medium rounded-lg transition-colors text-center"
              >
                Try the tax calculator
              </Link>
            </div>
          </div>

          <RelatedGuides current="/guide/simplified-vs-organized-regime" />
        </div>
      </article>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        <p>&copy; 2026 VerdeDesk. Made for freelancers in Portugal.</p>
      </footer>
    </div>
  )
}

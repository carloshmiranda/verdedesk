import { Link } from 'react-router-dom'
import { useSEO } from '../lib/useSEO'
import { useArticleSchema } from '../lib/useArticleSchema'
import RelatedGuides from '../components/RelatedGuides'

export default function GuideTaxDeductions() {
  useSEO({
    title: 'Freelancer Tax Deductions in Portugal (2026) — What You Can and Cannot Deduct | VerdeDesk',
    description: 'Complete English guide to tax deductions for freelancers in Portugal. Covers the simplified regime 25% automatic deduction, organized regime expenses, e-Fatura categories, and what D8 visa holders can claim.',
    canonical: 'https://verdedesk.vercel.app/guide/tax-deductions-freelancer-portugal',
  })
  useArticleSchema({
    title: 'Freelancer Tax Deductions in Portugal (2026) — What You Can and Cannot Deduct',
    description: 'Complete English guide to tax deductions for freelancers in Portugal.',
    url: 'https://verdedesk.vercel.app/guide/tax-deductions-freelancer-portugal',
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
          <span className="text-gray-600">Tax Deductions</span>
        </nav>

        <p className="text-sm text-verde-600 font-medium mb-4">Guide for expat freelancers</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
          Freelancer Tax Deductions in Portugal: What You Can and Cannot Deduct (2026)
        </h1>
        <p className="text-gray-500 text-sm mb-12">
          Updated March 2026. Covers simplified regime, organized regime, e-Fatura, and D8 visa considerations.
        </p>

        <div className="prose prose-gray max-w-none">
          {/* TOC */}
          <div className="bg-gray-50 rounded-xl p-6 mb-10">
            <p className="font-semibold text-gray-900 mb-3">In this guide:</p>
            <ol className="text-verde-700 space-y-1 text-sm list-decimal list-inside">
              <li><a href="#how-deductions-work" className="hover:underline">How tax deductions work for freelancers in Portugal</a></li>
              <li><a href="#simplified-regime-deduction" className="hover:underline">The simplified regime: your automatic 25% deduction</a></li>
              <li><a href="#the-15-percent-rule" className="hover:underline">The 15% e-Fatura rule (and how to satisfy it)</a></li>
              <li><a href="#what-counts-as-business-expense" className="hover:underline">What counts as a business expense on e-Fatura</a></li>
              <li><a href="#organized-regime-deductions" className="hover:underline">Organized regime: full expense deductions</a></li>
              <li><a href="#personal-deductions" className="hover:underline">Personal deductions all freelancers can claim</a></li>
              <li><a href="#common-expenses-table" className="hover:underline">Common expenses: deductible or not? (table)</a></li>
              <li><a href="#d8-visa-deductions" className="hover:underline">Special considerations for D8 visa holders</a></li>
              <li><a href="#mistakes-to-avoid" className="hover:underline">Mistakes to avoid with deductions</a></li>
            </ol>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Tax deductions are one of the most confusing topics for expat freelancers in Portugal.
            The system works very differently from the US, UK, or most other countries — and the
            rules depend entirely on which tax regime you are on. This guide explains what you can
            deduct, how the automatic deduction works, and the e-Fatura system that catches many
            D8 visa holders off guard.
          </p>

          <h2 id="how-deductions-work" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            How tax deductions work for freelancers in Portugal
          </h2>
          <p className="text-gray-700 mb-4">
            In Portugal, freelancer income falls under <strong>Category B</strong> (rendimentos
            empresariais e profissionais). How your expenses are handled depends on your tax regime:
          </p>
          <ul className="text-gray-700 mb-4 list-disc pl-6 space-y-2">
            <li>
              <strong>Simplified regime (regime simplificado):</strong> You get an automatic flat
              deduction — the tax authority assumes 25% of your service income goes to expenses.
              You do <strong>not</strong> need to list individual business expenses.
            </li>
            <li>
              <strong>Organized regime (contabilidade organizada):</strong> You deduct actual
              business expenses against your income, like in most other countries. This requires
              a certified accountant (<em>contabilista certificado</em>).
            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            Most D8 visa freelancers are on the simplified regime, which means the deduction
            system is simpler than you might expect — but it comes with a catch called the 15% rule.
          </p>

          <h2 id="simplified-regime-deduction" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            The simplified regime: your automatic 25% deduction
          </h2>
          <p className="text-gray-700 mb-4">
            Under the simplified regime, only <strong>75% of your gross service income is
            taxable</strong>. The remaining 25% is automatically treated as expenses. You do not
            need receipts, invoices, or records to claim this deduction — it is applied
            automatically when you file your IRS return.
          </p>
          <div className="bg-verde-50 border border-verde-200 rounded-lg p-4 mb-4">
            <p className="text-verde-800 font-semibold mb-2">Example</p>
            <p className="text-verde-700 text-sm">
              You earn EUR 40,000 in gross income from freelance services. Under the simplified
              regime, only EUR 30,000 (75%) is taxable. The other EUR 10,000 (25%) is your
              automatic expense deduction.
            </p>
          </div>
          <p className="text-gray-700 mb-4">
            This sounds simple, and it is — except for the 15% rule, which requires you to
            actually prove at least part of those expenses through e-Fatura.
          </p>

          <h2 id="the-15-percent-rule" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            The 15% e-Fatura rule (and how to satisfy it)
          </h2>
          <p className="text-gray-700 mb-4">
            Even though the simplified regime gives you an automatic 25% deduction, you must
            justify at least <strong>15% of your gross income</strong> with actual expenses
            registered in <strong>e-Fatura</strong> (the Portuguese invoice tracking system).
            If you do not, the unjustified portion is taxed at a higher rate.
          </p>
          <p className="text-gray-700 mb-4">
            How it works:
          </p>
          <ul className="text-gray-700 mb-4 list-disc pl-6 space-y-2">
            <li>The 25% deduction is split: <strong>10%</strong> is always guaranteed (no proof needed)</li>
            <li>The other <strong>15%</strong> must be justified with expenses on e-Fatura categorized as business expenses (<em>despesas de atividade</em>)</li>
            <li>If you cannot justify the full 15%, the shortfall is added back to your taxable income</li>
          </ul>
          <div className="bg-verde-50 border border-verde-200 rounded-lg p-4 mb-4">
            <p className="text-verde-800 font-semibold mb-2">Example</p>
            <p className="text-verde-700 text-sm">
              Gross income: EUR 40,000. Required e-Fatura expenses: EUR 6,000 (15%). If you only
              have EUR 4,000 in e-Fatura business expenses, the EUR 2,000 shortfall is added
              back to your taxable income: EUR 30,000 + EUR 2,000 = EUR 32,000 taxable.
            </p>
          </div>
          <p className="text-gray-700 mb-4">
            <strong>How to satisfy the 15% rule:</strong> Make sure you ask for invoices with your
            NIF whenever you make purchases related to your work. On e-Fatura, categorize these
            invoices as <em>"Atividade profissional"</em> (Professional activity). Common qualifying
            expenses include office supplies, software subscriptions, coworking fees, and professional
            equipment.
          </p>

          <h2 id="what-counts-as-business-expense" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            What counts as a business expense on e-Fatura
          </h2>
          <p className="text-gray-700 mb-4">
            On e-Fatura (efatura.portaldasfinancas.gov.pt), you validate your invoices and assign
            them to categories. For the 15% rule, you need invoices in the <strong>"Atividade
            profissional"</strong> (Professional activity) category. Qualifying expenses include:
          </p>
          <ul className="text-gray-700 mb-4 list-disc pl-6 space-y-2">
            <li>Office supplies and equipment (laptop, monitor, keyboard)</li>
            <li>Software subscriptions (SaaS tools, design software, development tools)</li>
            <li>Coworking space fees</li>
            <li>Professional training and courses</li>
            <li>Internet service (business portion)</li>
            <li>Mobile phone (business portion)</li>
            <li>Professional books and publications</li>
            <li>Business travel (transport, accommodation for client meetings)</li>
            <li>Professional association memberships</li>
          </ul>
          <p className="text-gray-700 mb-4">
            <strong>Important:</strong> The expense must have your NIF on the invoice to appear on
            e-Fatura. Always ask for <em>"fatura com NIF"</em> when making purchases. Expenses
            from international vendors (like AWS, GitHub, or Slack) will <strong>not</strong>{' '}
            appear on e-Fatura because they are not Portuguese entities — these cannot count
            toward the 15% rule.
          </p>

          <h2 id="organized-regime-deductions" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Organized regime: full expense deductions
          </h2>
          <p className="text-gray-700 mb-4">
            If you are on the organized regime, you deduct your actual business expenses from your
            gross income, like in most other countries. This requires a certified accountant who
            maintains your books and submits your IRS return.
          </p>
          <p className="text-gray-700 mb-4">
            Deductible expenses under the organized regime include everything listed above, plus:
          </p>
          <ul className="text-gray-700 mb-4 list-disc pl-6 space-y-2">
            <li>Rent for a dedicated office or studio</li>
            <li>Vehicle expenses (business use portion)</li>
            <li>Employee salaries (if you hire staff)</li>
            <li>Accounting and legal fees</li>
            <li>Marketing and advertising costs</li>
            <li>Depreciation of business assets (equipment, vehicles)</li>
            <li>Insurance premiums (professional liability, equipment)</li>
            <li>International software subscriptions (with proper documentation)</li>
          </ul>
          <p className="text-gray-700 mb-4">
            The organized regime makes financial sense when your actual business expenses exceed 25%
            of your gross income. For most D8 visa freelancers (consultants, developers, designers),
            actual expenses are well under 25%, making the simplified regime the better choice.
            See our{' '}
            <Link to="/guide/simplified-vs-organized-regime" className="text-verde-600 hover:underline">
              regime comparison guide
            </Link>{' '}
            for a detailed breakdown.
          </p>

          <h2 id="personal-deductions" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Personal deductions all freelancers can claim
          </h2>
          <p className="text-gray-700 mb-4">
            Regardless of your tax regime, all Portuguese tax residents can claim personal
            deductions (<em>deducoes a coleta</em>) on their IRS return:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 border-b font-semibold text-gray-900">Category</th>
                  <th className="text-left p-3 border-b font-semibold text-gray-900">Maximum deduction</th>
                  <th className="text-left p-3 border-b font-semibold text-gray-900">Notes</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="p-3 font-semibold">General family expenses</td>
                  <td className="p-3">EUR 250 per person</td>
                  <td className="p-3">35% of general expenses (supermarket, clothing, etc.)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Health</td>
                  <td className="p-3">EUR 1,000</td>
                  <td className="p-3">15% of health expenses (doctor visits, pharmacy, insurance)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Education</td>
                  <td className="p-3">EUR 800</td>
                  <td className="p-3">30% of education expenses (tuition, books, school supplies)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Housing</td>
                  <td className="p-3">EUR 502 (rent) / EUR 296 (mortgage)</td>
                  <td className="p-3">15% of rent or mortgage interest</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Restaurants and hospitality</td>
                  <td className="p-3">EUR 250</td>
                  <td className="p-3">15% of restaurant expenses with NIF on invoice</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Public transport passes</td>
                  <td className="p-3">EUR 250</td>
                  <td className="p-3">100% of monthly transport passes (Lisboa Viva, Navegante)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-4">
            These deductions are tracked automatically through e-Fatura. Ask for your NIF on
            every receipt — restaurants, pharmacies, supermarkets, medical appointments. The more
            invoices with your NIF, the higher your personal deductions.
          </p>

          <h2 id="common-expenses-table" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Common expenses: deductible or not?
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 border-b font-semibold text-gray-900">Expense</th>
                  <th className="text-left p-3 border-b font-semibold text-gray-900">Simplified</th>
                  <th className="text-left p-3 border-b font-semibold text-gray-900">Organized</th>
                  <th className="text-left p-3 border-b font-semibold text-gray-900">Notes</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="p-3">Laptop / computer</td>
                  <td className="p-3 text-verde-600">15% rule</td>
                  <td className="p-3 text-verde-600">Yes</td>
                  <td className="p-3">Must buy from Portuguese vendor for e-Fatura</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Coworking space</td>
                  <td className="p-3 text-verde-600">15% rule</td>
                  <td className="p-3 text-verde-600">Yes</td>
                  <td className="p-3">With NIF on invoice</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">GitHub / AWS / SaaS</td>
                  <td className="p-3 text-red-500">No</td>
                  <td className="p-3 text-verde-600">Yes</td>
                  <td className="p-3">Not on e-Fatura (international vendor)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Home internet</td>
                  <td className="p-3 text-verde-600">15% rule</td>
                  <td className="p-3 text-verde-600">Yes (partial)</td>
                  <td className="p-3">Business portion only under organized</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Home office furniture</td>
                  <td className="p-3 text-verde-600">15% rule</td>
                  <td className="p-3 text-verde-600">Yes</td>
                  <td className="p-3">Must buy in Portugal with NIF</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Client dinner</td>
                  <td className="p-3 text-red-500">No</td>
                  <td className="p-3 text-verde-600">Yes</td>
                  <td className="p-3">Under organized, within entertainment limits</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Rent (home office)</td>
                  <td className="p-3 text-red-500">No</td>
                  <td className="p-3 text-verde-600">Partial</td>
                  <td className="p-3">Only if dedicated room with separate lease</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Flights to clients</td>
                  <td className="p-3 text-red-500">No</td>
                  <td className="p-3 text-verde-600">Yes</td>
                  <td className="p-3">Documented business purpose required</td>
                </tr>
                <tr>
                  <td className="p-3">Accountant fees</td>
                  <td className="p-3 text-verde-600">15% rule</td>
                  <td className="p-3 text-verde-600">Yes</td>
                  <td className="p-3">Portuguese-based accountant with NIF</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="d8-visa-deductions" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Special considerations for D8 visa holders
          </h2>
          <p className="text-gray-700 mb-4">
            If you are on a D8 digital nomad visa, there are a few extra things to know:
          </p>
          <ul className="text-gray-700 mb-4 list-disc pl-6 space-y-2">
            <li>
              <strong>International software subscriptions do not count.</strong> If most of your
              business tools are US/EU SaaS companies (Figma, Notion, GitHub, AWS), they will not
              appear on e-Fatura. This makes the 15% rule harder to satisfy.
            </li>
            <li>
              <strong>Buy equipment in Portugal.</strong> A laptop bought at FNAC or Worten with
              your NIF counts toward the 15% rule. The same laptop bought online from Apple US
              does not.
            </li>
            <li>
              <strong>NHR 2.0 affects your deductions.</strong> If you qualify for the IFICI regime
              (NHR 2.0), you pay a flat 20% rate. Personal deductions may be limited. Check with
              a tax advisor about how deductions interact with the NHR 2.0 flat rate.
            </li>
            <li>
              <strong>First-year partial residency.</strong> If you became a tax resident partway
              through the year, your deductions and thresholds are prorated based on the number
              of months you were resident.
            </li>
          </ul>

          <h2 id="mistakes-to-avoid" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Mistakes to avoid with deductions
          </h2>
          <ol className="text-gray-700 mb-4 list-decimal pl-6 space-y-3">
            <li>
              <strong>Not asking for NIF on purchases.</strong> If you do not give your NIF at the
              point of sale, the expense will not appear on e-Fatura. Always say <em>"com NIF, por
              favor"</em> and provide your 9-digit number.
            </li>
            <li>
              <strong>Not validating e-Fatura invoices.</strong> Invoices appear on e-Fatura
              automatically, but some need to be manually categorized. Log in to e-Fatura monthly
              and assign uncategorized invoices to the correct category.
            </li>
            <li>
              <strong>Assuming international expenses count.</strong> Under the simplified regime,
              only expenses from Portuguese companies with your NIF on the invoice count toward
              the 15% rule. International SaaS, foreign conference tickets, and overseas equipment
              purchases do not appear on e-Fatura.
            </li>
            <li>
              <strong>Ignoring the 15% rule entirely.</strong> Many expats assume the simplified
              regime means "zero paperwork." The 25% deduction is automatic, but the 15% portion
              requires e-Fatura justification. Ignoring it means paying more tax than necessary.
            </li>
            <li>
              <strong>Mixing personal and business categories.</strong> On e-Fatura, categorize
              business expenses as <em>"Atividade profissional"</em> — not as general or personal
              expenses. Only business-categorized expenses count toward the 15% rule.
            </li>
          </ol>

          {/* CTA */}
          <div className="bg-verde-50 border border-verde-200 rounded-xl p-6 mt-10">
            <h3 className="text-lg font-semibold text-verde-800 mb-2">
              Track your income and deductions automatically
            </h3>
            <p className="text-verde-700 mb-4">
              VerdeDesk launches April 2026. Issue recibos verdes, track your income against the
              VAT threshold, and never miss a deadline — in plain English. EUR 9/month, 14-day free trial.
            </p>
            <Link
              to="/#waitlist"
              className="inline-block px-5 py-2.5 bg-verde-600 hover:bg-verde-700 text-white font-semibold rounded-lg transition-colors"
            >
              Join the waitlist
            </Link>
          </div>
        </div>

        <RelatedGuides current="/guide/tax-deductions-freelancer-portugal" />
      </article>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        <p>&copy; 2026 VerdeDesk. Made for freelancers in Portugal.</p>
      </footer>
    </div>
  )
}

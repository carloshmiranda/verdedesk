import { Link } from 'react-router-dom'
import { useSEO } from '../lib/useSEO'

export default function VsInvoiceXpress() {
  useSEO({
    title: 'VerdeDesk vs InvoiceXpress: Which Should Expat Freelancers in Portugal Use? (2026)',
    description: 'Honest comparison of VerdeDesk and InvoiceXpress for English-speaking freelancers in Portugal. Covers recibos verdes, language, pricing, and who each tool is built for.',
    canonical: 'https://verdedesk.vercel.app/vs/invoicexpress',
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
        <div className="flex items-center gap-4">
          <Link to="/guides" className="text-sm font-medium text-gray-600 hover:text-verde-700">Guides</Link>
          <Link to="/tools/tax-calculator" className="text-sm font-medium text-gray-600 hover:text-verde-700">Tax Calculator</Link>
          <Link to="/#waitlist" className="text-sm font-medium text-verde-700 hover:text-verde-800">Join waitlist</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-12 pb-10">
        <div className="text-center mb-12">
          <p className="text-sm text-verde-600 font-medium mb-4">Tool comparison</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            VerdeDesk vs InvoiceXpress
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            InvoiceXpress is one of Portugal's most established certified billing platforms.
            VerdeDesk is built specifically for English-speaking expat freelancers.
            Here's what actually matters for your situation.
          </p>
        </div>

        {/* TL;DR box */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10 max-w-2xl mx-auto">
          <h2 className="font-bold text-amber-900 mb-2">TL;DR</h2>
          <p className="text-amber-800 text-sm leading-relaxed">
            <strong>InvoiceXpress</strong> is a certified billing platform used by Portuguese accountants
            and businesses of all sizes. It does more than recibos verdes — it handles faturas, credit notes,
            and accounting integrations — entirely in Portuguese.<br /><br />
            <strong>VerdeDesk</strong> is built for the specific situation of an expat freelancer in Portugal
            who wants to issue recibos verdes, track income, and stay compliant without learning Portuguese
            tax bureaucracy from scratch.
          </p>
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse bg-white rounded-xl border border-gray-200 text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-6 py-4 font-semibold text-gray-700 w-1/3">Feature</th>
                <th className="text-center px-6 py-4 font-semibold text-verde-700 bg-verde-50 w-1/3">VerdeDesk</th>
                <th className="text-center px-6 py-4 font-semibold text-gray-700 w-1/3">InvoiceXpress</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-4 font-medium text-gray-900">Language</td>
                <td className="px-6 py-4 text-center bg-verde-50">
                  <span className="font-semibold text-verde-700">English-first</span>
                  <p className="text-verde-600 text-xs mt-1">Every screen, form, and error message in English</p>
                </td>
                <td className="px-6 py-4 text-center text-gray-600">
                  Portuguese only
                  <p className="text-gray-400 text-xs mt-1">No English translation available</p>
                </td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">Primary audience</td>
                <td className="px-6 py-4 text-center bg-verde-50">
                  <span className="font-semibold text-verde-700">Expat freelancers in Portugal</span>
                  <p className="text-verde-600 text-xs mt-1">D8 visa holders, NHR recipients, English-speaking trabalhadores independentes</p>
                </td>
                <td className="px-6 py-4 text-center text-gray-600">
                  All Portuguese businesses
                  <p className="text-gray-400 text-xs mt-1">Designed for accountants, SMEs, and established businesses</p>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-4 font-medium text-gray-900">Document types</td>
                <td className="px-6 py-4 text-center bg-verde-50">
                  <span className="font-semibold text-verde-700">Recibos verdes</span>
                  <p className="text-verde-600 text-xs mt-1">The self-employment invoice used by freelancers in the simplified regime</p>
                </td>
                <td className="px-6 py-4 text-center text-gray-600">
                  Faturas, faturas-recibo, recibos, credit notes, and more
                  <p className="text-gray-400 text-xs mt-1">Full AT-certified billing suite</p>
                </td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">Tax guidance</td>
                <td className="px-6 py-4 text-center bg-verde-50">
                  <span className="font-semibold text-verde-700">Built-in, in English</span>
                  <p className="text-verde-600 text-xs mt-1">VAT threshold warnings, SS deadline reminders, NHR 2.0 eligibility</p>
                </td>
                <td className="px-6 py-4 text-center text-gray-600">
                  None
                  <p className="text-gray-400 text-xs mt-1">Billing tool only — tax guidance is your accountant's job</p>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-4 font-medium text-gray-900">Pricing (entry plan)</td>
                <td className="px-6 py-4 text-center bg-verde-50">
                  <span className="font-semibold text-verde-700">€9/month</span>
                  <p className="text-verde-600 text-xs mt-1">14-day free trial, no card required</p>
                </td>
                <td className="px-6 py-4 text-center text-gray-600">
                  ~€9–12/month
                  <p className="text-gray-400 text-xs mt-1">Entry plan limited to 25 invoices/month</p>
                </td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">Portal das Financas integration</td>
                <td className="px-6 py-4 text-center bg-verde-50">
                  <span className="font-semibold text-verde-700">Yes — guided workflow</span>
                  <p className="text-verde-600 text-xs mt-1">English-translated interface over the portal's recibo verde process</p>
                </td>
                <td className="px-6 py-4 text-center text-gray-600">
                  Yes — AT-certified
                  <p className="text-gray-400 text-xs mt-1">Certified billing software, AT-connected</p>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-4 font-medium text-gray-900">Income dashboard</td>
                <td className="px-6 py-4 text-center bg-verde-50">
                  <span className="font-semibold text-verde-700">Yes</span>
                  <p className="text-verde-600 text-xs mt-1">Monthly totals, YTD income, real-time tax estimates</p>
                </td>
                <td className="px-6 py-4 text-center text-gray-600">
                  Limited
                  <p className="text-gray-400 text-xs mt-1">Billing reports, not income tax estimates</p>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">Onboarding support</td>
                <td className="px-6 py-4 text-center bg-verde-50">
                  <span className="font-semibold text-verde-700">Guided setup for expats</span>
                  <p className="text-verde-600 text-xs mt-1">NIF check, activity code selection, VAT regime confirmation — in English</p>
                </td>
                <td className="px-6 py-4 text-center text-gray-600">
                  Standard onboarding
                  <p className="text-gray-400 text-xs mt-1">Assumes you already know Portuguese tax basics</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Deep dive sections */}
        <div className="max-w-3xl mx-auto space-y-12">

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What InvoiceXpress is actually good at
            </h2>
            <p className="text-gray-700 mb-4">
              InvoiceXpress has been operating since 2009 and is one of the original AT-certified billing platforms in Portugal. It supports the full range of fiscal documents: faturas, faturas-recibo, notas de crédito (credit notes), recibos, and more. For a Portuguese business with an accountant who understands the system, it's a solid tool.
            </p>
            <p className="text-gray-700 mb-4">
              It connects directly with Portugal's AT (Autoridade Tributária) for real-time document communication. Accountants across Portugal know how to use it and can access client data directly. If you're a Portuguese-speaking business owner or have a local accountant handling your billing, InvoiceXpress is a reasonable choice.
            </p>
            <p className="text-gray-700">
              It also offers client management, recurring invoices, payment tracking, and integrations with accounting software like Moloni. These features matter for established businesses billing many clients in Portugal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Where InvoiceXpress falls short for expat freelancers
            </h2>
            <p className="text-gray-700 mb-4">
              The interface is Portuguese-only. Every menu, form label, dropdown option, and error message is in Portuguese. For a freelancer who moved from the UK or US six months ago and is still learning the language, this is a real problem — not just an inconvenience.
            </p>
            <p className="text-gray-700 mb-4">
              More importantly, InvoiceXpress is purely a billing tool. It does not tell you:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Whether you're approaching the Article 53 VAT threshold (EUR 15,000)</li>
              <li>When your quarterly social security payment is due and how much to set aside</li>
              <li>Whether you qualify for the NHR 2.0 regime and what tax rate applies</li>
              <li>How to handle withholding tax on Portuguese vs. foreign clients</li>
              <li>What to expect when you file your first IRS return as a Category B freelancer</li>
            </ul>
            <p className="text-gray-700">
              For a D8 visa holder in their first or second year in Portugal, the billing part is
              only 20% of the problem. The other 80% is understanding what you owe, when you owe it,
              and what happens if you get it wrong.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What VerdeDesk does differently
            </h2>
            <p className="text-gray-700 mb-4">
              VerdeDesk is not trying to replace InvoiceXpress for established Portuguese businesses.
              It's solving a specific problem: an English-speaking freelancer in Portugal who registered
              under the simplified regime, needs to issue recibos verdes, and does not want to navigate
              the Portal das Financas in a language they're still learning — or pay EUR 100–150/month
              for an accountant to do it for them.
            </p>
            <p className="text-gray-700 mb-4">
              Every part of the VerdeDesk experience is in English: the recibo verde form with field
              explanations, the VAT threshold tracker, the social security calendar, the IRS estimate.
              When you cross the EUR 15,000 VAT threshold, you get a warning in plain English that
              explains what it means and what to do next — not a Portuguese error message.
            </p>
            <p className="text-gray-700">
              The free tax guides on this site exist for the same reason: the information needed to
              stay compliant as an expat freelancer is spread across Portuguese-language AT documentation,
              government circulars, and forum posts — and almost none of it is available in English at the
              level of detail you actually need.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Which one should you use?
            </h2>
            <div className="space-y-6">
              <div className="border border-verde-200 rounded-xl p-6 bg-verde-50">
                <h3 className="font-bold text-verde-800 mb-2">Choose VerdeDesk if:</h3>
                <ul className="space-y-2 text-verde-700 text-sm">
                  <li>You're an English-speaking freelancer registered in Portugal (D8 visa, NHR, or otherwise)</li>
                  <li>You're under the simplified tax regime (<em>regime simplificado</em>) issuing recibos verdes</li>
                  <li>You want to manage your own compliance without hiring an accountant</li>
                  <li>You want to understand your tax obligations — not just generate documents</li>
                  <li>Your income is primarily from foreign clients (UK, US, EU)</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-2">InvoiceXpress may be a better fit if:</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>You're comfortable navigating Portuguese interfaces</li>
                  <li>You have a local accountant who prefers AT-certified billing tools</li>
                  <li>You need to issue faturas to Portuguese businesses (B2B, not self-employment)</li>
                  <li>Your income exceeds EUR 200,000/year and you're in the organized regime</li>
                  <li>You need recurring invoice automation or complex client management</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              A note on "certified" billing software
            </h2>
            <p className="text-gray-700 mb-4">
              InvoiceXpress is AT-certified billing software (<em>software de faturação certificado</em>),
              which means it's on the official AT list of approved billing programs. This certification
              is required for businesses that issue more than 1,000 invoices per year, or that are in
              the organized accounting regime.
            </p>
            <p className="text-gray-700 mb-4">
              Most freelancers in the simplified regime issuing recibos verdes through Portal das Financas
              do not need AT-certified third-party software. The portal itself handles the certification
              for you — it's AT's own system. VerdeDesk wraps this workflow in English without requiring
              you to use separate certified billing software.
            </p>
            <p className="text-gray-700">
              If you're unsure whether you need certified billing software, see our guide on the{' '}
              <Link to="/guide/simplified-vs-organized-regime" className="text-verde-700 hover:underline">
                simplified vs organized regime
              </Link>
              {' '}— the simplified regime is the default for new freelancers earning under EUR 200,000/year.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto mt-16">
          <div className="bg-verde-600 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Green receipts in plain English — no Portuguese required
            </h2>
            <p className="text-verde-100 mb-6">
              VerdeDesk is launching April 2026. Join the waitlist for early access and the first month free.
            </p>
            <Link
              to="/#waitlist"
              className="inline-block px-6 py-3 bg-white hover:bg-verde-50 text-verde-700 font-semibold rounded-lg transition-colors"
            >
              Join the waitlist
            </Link>
          </div>
        </div>

        {/* Related comparisons */}
        <div className="max-w-3xl mx-auto mt-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Other comparisons</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link
              to="/vs/rauva"
              className="block p-4 rounded-xl border border-gray-200 hover:border-verde-300 hover:bg-verde-50 transition-colors"
            >
              <span className="text-verde-700 font-medium text-sm">VerdeDesk vs Rauva →</span>
              <p className="text-gray-500 text-xs mt-1">Business banking platform for Portuguese freelancers</p>
            </Link>
            <Link
              to="/guides"
              className="block p-4 rounded-xl border border-gray-200 hover:border-verde-300 hover:bg-verde-50 transition-colors"
            >
              <span className="text-verde-700 font-medium text-sm">Free tax guides →</span>
              <p className="text-gray-500 text-xs mt-1">Everything you need to know about Portuguese freelancer taxes in English</p>
            </Link>
          </div>
        </div>

      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm mt-8 border-t border-gray-100">
        <p>&copy; 2026 VerdeDesk. Made for freelancers in Portugal.</p>
      </footer>
    </div>
  )
}

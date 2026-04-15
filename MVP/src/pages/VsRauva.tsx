import { Link } from 'react-router-dom'
import { useSEO } from '../lib/useSEO'

export default function VsRauva() {
  useSEO({
    title: 'VerdeDesk vs Rauva: Which is Better for Expat Freelancers in Portugal? (2026)',
    description: 'Honest comparison of VerdeDesk and Rauva for English-speaking freelancers in Portugal. Covers recibos verdes, pricing, English support, and who each tool is actually built for.',
    canonical: 'https://verdedesk.vercel.app/vs/rauva',
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
            VerdeDesk vs Rauva
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Two tools that Portuguese freelancers compare — but built for very different users. Here is
            an honest breakdown to help you decide which one (if either) fits your situation.
          </p>
        </div>

        {/* TL;DR box */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10 max-w-2xl mx-auto">
          <h2 className="font-bold text-amber-900 mb-2">TL;DR</h2>
          <p className="text-amber-800 text-sm leading-relaxed">
            <strong>Rauva</strong> is a Portuguese-language business banking and invoicing platform for
            companies and freelancers who primarily work with Portuguese clients and are comfortable
            navigating Portuguese interfaces.<br /><br />
            <strong>VerdeDesk</strong> is an English-first compliance tool built specifically for D8 visa
            holders and expat freelancers who want to issue recibos verdes and stay compliant without
            learning Portuguese tax bureaucracy.
          </p>
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse bg-white rounded-xl border border-gray-200 text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-6 py-4 font-semibold text-gray-700 w-1/3">Feature</th>
                <th className="text-center px-6 py-4 font-semibold text-verde-700 bg-verde-50 w-1/3">VerdeDesk</th>
                <th className="text-center px-6 py-4 font-semibold text-gray-700 w-1/3">Rauva</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-4 font-medium text-gray-900">Language</td>
                <td className="px-6 py-4 text-center bg-verde-50">
                  <span className="font-semibold text-verde-700">English-first</span>
                  <p className="text-verde-600 text-xs mt-1">Every form, label, and error message in English</p>
                </td>
                <td className="px-6 py-4 text-center text-gray-600">
                  Portuguese-first
                  <p className="text-gray-400 text-xs mt-1">Some English support, Portuguese UI</p>
                </td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">Primary purpose</td>
                <td className="px-6 py-4 text-center bg-verde-50">
                  <span className="font-semibold text-verde-700">Green receipt compliance</span>
                  <p className="text-verde-600 text-xs mt-1">Recibos verdes, income tracking, tax estimates</p>
                </td>
                <td className="px-6 py-4 text-center text-gray-600">
                  Business banking + invoicing
                  <p className="text-gray-400 text-xs mt-1">IBAN, faturas, expense management</p>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-4 font-medium text-gray-900">Target user</td>
                <td className="px-6 py-4 text-center bg-verde-50">
                  <span className="font-semibold text-verde-700">D8 visa holders, expat freelancers</span>
                  <p className="text-verde-600 text-xs mt-1">English speakers new to Portugal's tax system</p>
                </td>
                <td className="px-6 py-4 text-center text-gray-600">
                  Portuguese SMEs and freelancers
                  <p className="text-gray-400 text-xs mt-1">Primarily serving Portuguese-speaking market</p>
                </td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">Recibo verde issuing</td>
                <td className="px-6 py-4 text-center bg-verde-50">
                  <span className="text-verde-600 font-bold text-base">✓</span>
                  <p className="text-verde-600 text-xs mt-1">Core feature, step-by-step English guidance</p>
                </td>
                <td className="px-6 py-4 text-center text-gray-600">
                  <span className="text-gray-400 font-bold text-base">~</span>
                  <p className="text-gray-400 text-xs mt-1">Supports fatura/fatura-recibo; recibo verde via Portal das Financas</p>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-4 font-medium text-gray-900">Business bank account</td>
                <td className="px-6 py-4 text-center bg-verde-50">
                  <span className="text-gray-400 font-bold text-base">✗</span>
                  <p className="text-verde-600 text-xs mt-1">Not provided — use Wise, Revolut, or local bank</p>
                </td>
                <td className="px-6 py-4 text-center text-gray-600">
                  <span className="text-gray-700 font-bold text-base">✓</span>
                  <p className="text-gray-400 text-xs mt-1">Portuguese IBAN included</p>
                </td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">Income tracking</td>
                <td className="px-6 py-4 text-center bg-verde-50">
                  <span className="text-verde-600 font-bold text-base">✓</span>
                  <p className="text-verde-600 text-xs mt-1">Monthly totals, YTD, tax provision</p>
                </td>
                <td className="px-6 py-4 text-center text-gray-600">
                  <span className="text-gray-700 font-bold text-base">✓</span>
                  <p className="text-gray-400 text-xs mt-1">Via bank transaction categorization</p>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-4 font-medium text-gray-900">IRS / tax estimates</td>
                <td className="px-6 py-4 text-center bg-verde-50">
                  <span className="text-verde-600 font-bold text-base">✓</span>
                  <p className="text-verde-600 text-xs mt-1">Real-time IRS, SS, and net income estimates</p>
                </td>
                <td className="px-6 py-4 text-center text-gray-600">
                  <span className="text-gray-400 font-bold text-base">~</span>
                  <p className="text-gray-400 text-xs mt-1">Basic expense overview</p>
                </td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">English guides & support</td>
                <td className="px-6 py-4 text-center bg-verde-50">
                  <span className="text-verde-600 font-bold text-base">✓</span>
                  <p className="text-verde-600 text-xs mt-1">15+ English guides on Portuguese tax topics</p>
                </td>
                <td className="px-6 py-4 text-center text-gray-600">
                  <span className="text-gray-400 font-bold text-base">~</span>
                  <p className="text-gray-400 text-xs mt-1">Some English content, primarily Portuguese</p>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-4 font-medium text-gray-900">Pricing</td>
                <td className="px-6 py-4 text-center bg-verde-50">
                  <span className="font-semibold text-verde-700">€9/month</span>
                  <p className="text-verde-600 text-xs mt-1">14-day free trial, no card required</p>
                </td>
                <td className="px-6 py-4 text-center text-gray-600">
                  Free tier available
                  <p className="text-gray-400 text-xs mt-1">Paid plans for premium features</p>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">NHR 2.0 / expat tax focus</td>
                <td className="px-6 py-4 text-center bg-verde-50">
                  <span className="text-verde-600 font-bold text-base">✓</span>
                  <p className="text-verde-600 text-xs mt-1">NHR checker tool, D8 visa guide, expat-specific content</p>
                </td>
                <td className="px-6 py-4 text-center text-gray-600">
                  <span className="text-gray-400 font-bold text-base">✗</span>
                  <p className="text-gray-400 text-xs mt-1">Not the focus</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* When to use each */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <div className="border-2 border-verde-200 bg-verde-50 rounded-xl p-6">
            <h2 className="font-bold text-verde-800 text-lg mb-4">Choose VerdeDesk if you...</h2>
            <ul className="space-y-3 text-verde-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold mt-0.5">✓</span>
                <span>Are an English speaker who finds Portuguese tax forms confusing or stressful</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold mt-0.5">✓</span>
                <span>Are on a D8 visa or recently arrived in Portugal and need to start issuing recibos verdes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold mt-0.5">✓</span>
                <span>Work primarily for foreign (non-Portuguese) clients</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold mt-0.5">✓</span>
                <span>Want to understand your actual tax position in real time, not just store invoices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold mt-0.5">✓</span>
                <span>Are considering NHR 2.0 and want tools built around expat tax scenarios</span>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <h2 className="font-bold text-gray-900 text-lg mb-4">Consider Rauva if you...</h2>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold mt-0.5">→</span>
                <span>Need a full Portuguese business bank account (IBAN) in addition to invoicing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold mt-0.5">→</span>
                <span>Primarily work with Portuguese clients and issue faturas rather than recibos verdes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold mt-0.5">→</span>
                <span>Are comfortable navigating Portuguese-language interfaces</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold mt-0.5">→</span>
                <span>Run a registered Portuguese company (Lda or SA) rather than working as a freelancer</span>
              </li>
            </ul>
          </div>
        </div>

        {/* The expat gap */}
        <div className="max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The gap Rauva doesn't fill</h2>
          <p className="text-gray-700 mb-4">
            Rauva is a solid product for Portuguese-speaking freelancers and small businesses. It is not
            designed around the experience of someone who arrived in Portugal six months ago, does not read
            Portuguese, and needs to figure out the difference between a fatura and a recibo verde while
            also understanding the Article 53 VAT threshold and whether they qualify for NHR 2.0.
          </p>
          <p className="text-gray-700 mb-4">
            That is the gap VerdeDesk fills. Every piece of the product — the receipt form, income
            dashboard, tax estimates, and the guides in this library — is designed for someone who is
            fluent in English and new to Portugal's fiscal system.
          </p>
          <p className="text-gray-700 mb-4">
            If you need a bank account, pair VerdeDesk with Wise or N26 (both offer Portuguese IBANs).
            For recibos verdes, income tracking, and understanding your actual tax situation in English —
            that is what VerdeDesk is for.
          </p>
        </div>

        {/* Useful resources */}
        <div className="border border-gray-100 rounded-xl p-6 mb-10">
          <h2 className="font-semibold text-gray-900 mb-4">Useful resources for expat freelancers</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link to="/guide/recibo-verde-english" className="block p-3 rounded-lg border border-gray-100 hover:border-verde-200 hover:bg-verde-50 transition-colors">
              <span className="text-verde-600 text-sm font-medium">How to issue a recibo verde (English guide)</span>
            </Link>
            <Link to="/guide/invoice-foreign-clients-portugal" className="block p-3 rounded-lg border border-gray-100 hover:border-verde-200 hover:bg-verde-50 transition-colors">
              <span className="text-verde-600 text-sm font-medium">Invoicing foreign clients from Portugal</span>
            </Link>
            <Link to="/guide/vat-exemption-article-53-portugal" className="block p-3 rounded-lg border border-gray-100 hover:border-verde-200 hover:bg-verde-50 transition-colors">
              <span className="text-verde-600 text-sm font-medium">VAT exemption Article 53 explained</span>
            </Link>
            <Link to="/tools/tax-calculator" className="block p-3 rounded-lg border border-gray-100 hover:border-verde-200 hover:bg-verde-50 transition-colors">
              <span className="text-verde-600 text-sm font-medium">Free Portugal freelancer tax calculator</span>
            </Link>
            <Link to="/tools/nhr-checker" className="block p-3 rounded-lg border border-gray-100 hover:border-verde-200 hover:bg-verde-50 transition-colors">
              <span className="text-verde-600 text-sm font-medium">NHR 2.0 eligibility checker</span>
            </Link>
            <Link to="/guide/d8-visa-portugal-taxes" className="block p-3 rounded-lg border border-gray-100 hover:border-verde-200 hover:bg-verde-50 transition-colors">
              <span className="text-verde-600 text-sm font-medium">D8 visa Portugal taxes: complete guide</span>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-verde-50 border border-verde-200 rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-verde-800 mb-3">
            Built for English-speaking freelancers in Portugal
          </h2>
          <p className="text-verde-700 mb-6 max-w-lg mx-auto">
            VerdeDesk is launching with a 14-day free trial and no credit card required.
            Join the waitlist and get early access.
          </p>
          <Link
            to="/#waitlist"
            className="inline-block px-8 py-3 bg-verde-600 hover:bg-verde-700 text-white font-semibold rounded-lg transition-colors"
          >
            Join the waitlist — it's free
          </Link>
          <p className="text-verde-600 text-xs mt-3">€9/month after trial. No card required to join.</p>
        </div>
      </section>
    </div>
  )
}

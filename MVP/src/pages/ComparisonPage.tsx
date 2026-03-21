import { Link } from 'react-router-dom'
import { useSEO } from '../lib/useSEO'

export default function ComparisonPage() {
  useSEO({
    title: 'VerdeDesk vs Rauva vs Worktugal vs Abillio — Portugal Freelancer Tools Comparison',
    description: 'Compare VerdeDesk against Rauva, Worktugal, and Abillio for Portuguese freelancer compliance. See pricing, features, and why VerdeDesk is built specifically for English-speaking expats.',
    canonical: 'https://verdedesk.vercel.app/comparison',
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
          <Link
            to="/guides"
            className="text-sm font-medium text-gray-600 hover:text-verde-700"
          >
            Guides
          </Link>
          <Link
            to="/tools/tax-calculator"
            className="text-sm font-medium text-gray-600 hover:text-verde-700"
          >
            Tax Calculator
          </Link>
          <Link
            to="/#waitlist"
            className="text-sm font-medium text-verde-700 hover:text-verde-800"
          >
            Join waitlist
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-12 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            VerdeDesk vs the competition
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            How does VerdeDesk compare to other freelancer tools in Portugal? We break down the features, pricing, and target audience of each option.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl border border-gray-200">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-6 py-4 font-semibold text-gray-900">Feature</th>
                <th className="text-center px-6 py-4 font-semibold text-verde-700 bg-verde-50">VerdeDesk</th>
                <th className="text-center px-6 py-4 font-semibold text-gray-900">Rauva</th>
                <th className="text-center px-6 py-4 font-semibold text-gray-900">Worktugal</th>
                <th className="text-center px-6 py-4 font-semibold text-gray-900">Abillio</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-4 font-medium text-gray-900">Starting Price</td>
                <td className="px-6 py-4 text-center font-semibold text-verde-700 bg-verde-50">€29/month</td>
                <td className="px-6 py-4 text-center text-gray-600">€8/month + VAT</td>
                <td className="px-6 py-4 text-center text-gray-600">€59/session</td>
                <td className="px-6 py-4 text-center text-gray-600">€12/month</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-4 font-medium text-gray-900">Full Service Price</td>
                <td className="px-6 py-4 text-center font-semibold text-verde-700 bg-verde-50">€99/month</td>
                <td className="px-6 py-4 text-center text-gray-600">€128-200+/month</td>
                <td className="px-6 py-4 text-center text-gray-600">€165+/session</td>
                <td className="px-6 py-4 text-center text-gray-600">Invoicing only</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-4 font-medium text-gray-900">English Interface</td>
                <td className="px-6 py-4 text-center text-verde-600 bg-verde-50">✓ Native English</td>
                <td className="px-6 py-4 text-center text-gray-600">🟡 Partial</td>
                <td className="px-6 py-4 text-center text-verde-600">✓ Full English</td>
                <td className="px-6 py-4 text-center text-gray-600">🟡 Partial</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-4 font-medium text-gray-900">Recibos Verdes</td>
                <td className="px-6 py-4 text-center text-verde-600 bg-verde-50">✓ Auto-compliance</td>
                <td className="px-6 py-4 text-center text-verde-600">✓ Available</td>
                <td className="px-6 py-4 text-center text-red-600">✗ Manual only</td>
                <td className="px-6 py-4 text-center text-verde-600">✓ Available</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-4 font-medium text-gray-900">Automated Compliance</td>
                <td className="px-6 py-4 text-center text-verde-600 bg-verde-50">✓ VAT + SS tracking</td>
                <td className="px-6 py-4 text-center text-gray-600">🟡 Basic</td>
                <td className="px-6 py-4 text-center text-red-600">✗ Human-only</td>
                <td className="px-6 py-4 text-center text-red-600">✗ No compliance</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-4 font-medium text-gray-900">Banking Integration</td>
                <td className="px-6 py-4 text-center text-gray-600 bg-verde-50">🟡 Planned</td>
                <td className="px-6 py-4 text-center text-red-600">✗ Discontinued</td>
                <td className="px-6 py-4 text-center text-red-600">✗ No banking</td>
                <td className="px-6 py-4 text-center text-red-600">✗ No banking</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-4 font-medium text-gray-900">Educational Content</td>
                <td className="px-6 py-4 text-center text-verde-600 bg-verde-50">✓ Comprehensive</td>
                <td className="px-6 py-4 text-center text-gray-600">🟡 Basic blog</td>
                <td className="px-6 py-4 text-center text-verde-600">✓ Human guidance</td>
                <td className="px-6 py-4 text-center text-red-600">✗ Minimal</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-4 font-medium text-gray-900">Target Audience</td>
                <td className="px-6 py-4 text-center text-sm text-gray-700 bg-verde-50">English-speaking expats & D8 visa holders</td>
                <td className="px-6 py-4 text-center text-sm text-gray-700">Portuguese SMEs & freelancers</td>
                <td className="px-6 py-4 text-center text-sm text-gray-700">Expats needing human support</td>
                <td className="px-6 py-4 text-center text-sm text-gray-700">Basic invoicing needs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed Comparisons */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Why each option exists
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-verde-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <h3 className="font-bold text-gray-900">VerdeDesk</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Built specifically for English-speaking expats and D8 visa holders in Portugal.
                Wraps the complex Portal das Finanças workflow with automated compliance checking and clear English explanations.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-verde-700 font-medium">✓ Best for: D8 visa holders, expats, digital nomads</div>
                <div className="text-sm text-verde-700 font-medium">✓ Strength: English-first + automated compliance</div>
                <div className="text-sm text-gray-500">⚠ New product, still in validation phase</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">R</span>
                </div>
                <h3 className="font-bold text-gray-900">Rauva</h3>
              </div>
              <p className="text-gray-600 mb-4">
                €11M revenue business super-app targeting Portuguese SMEs.
                Offers banking, accounting, and business formation — but banking features were discontinued after customer issues.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-verde-700 font-medium">✓ Best for: Portuguese businesses needing full service</div>
                <div className="text-sm text-verde-700 font-medium">✓ Strength: Comprehensive accounting + legal</div>
                <div className="text-sm text-gray-500">⚠ Expensive (€128-200+/mo), banking discontinued</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">W</span>
                </div>
                <h3 className="font-bold text-gray-900">Worktugal</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Human accountant coaching service with 20K+ community members.
                Provides personalized guidance through Portuguese tax system — €59+ per session.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-verde-700 font-medium">✓ Best for: Complex cases needing human guidance</div>
                <div className="text-sm text-verde-700 font-medium">✓ Strength: Expert human support + community</div>
                <div className="text-sm text-gray-500">⚠ No automation, session-based pricing</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <h3 className="font-bold text-gray-900">Abillio</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Simple invoicing tool with 4.8★ rating.
                Focuses on basic invoice creation without compliance checking or tax guidance.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-verde-700 font-medium">✓ Best for: Simple invoicing needs</div>
                <div className="text-sm text-verde-700 font-medium">✓ Strength: High ratings, straightforward</div>
                <div className="text-sm text-gray-500">⚠ No compliance features, invoicing only</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Which option is right for you?
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-verde-600 pl-6 py-4">
              <h3 className="font-semibold text-verde-700 mb-2">Choose VerdeDesk if:</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• You're a D8 visa holder, expat, or digital nomad in Portugal</li>
                <li>• You want automated compliance checking in English</li>
                <li>• You need transparency on VAT thresholds and deadlines</li>
                <li>• You prefer self-service with educational content</li>
                <li>• You want pricing under €100/month</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-4">
              <h3 className="font-semibold text-blue-700 mb-2">Choose Rauva if:</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• You're a Portuguese business needing full-service accounting</li>
                <li>• You want company formation assistance</li>
                <li>• You have budget for €128-200+/month</li>
                <li>• You're comfortable with primarily Portuguese interfaces</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-600 pl-6 py-4">
              <h3 className="font-semibold text-purple-700 mb-2">Choose Worktugal if:</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• You have complex tax situations needing expert human guidance</li>
                <li>• You prefer one-on-one accountant sessions</li>
                <li>• You want access to their 20K+ member community</li>
                <li>• You're comfortable with session-based pricing (€59+/session)</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-600 pl-6 py-4">
              <h3 className="font-semibold text-green-700 mb-2">Choose Abillio if:</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• You only need basic invoice creation</li>
                <li>• You handle compliance and tax matters separately</li>
                <li>• You want the simplest, cheapest option</li>
                <li>• You already have tax/compliance support elsewhere</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Reality Check */}
      <section className="bg-verde-600 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            The real cost of freelancer compliance in Portugal
          </h2>
          <p className="text-verde-100 mb-8">
            Most expats end up paying a local accountant €80-165/month simply because the Portal das Finanças is in Portuguese.
            VerdeDesk removes that language barrier.
          </p>

          <div className="bg-white/10 rounded-xl p-6">
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-white">€80-165</div>
                <div className="text-verde-100 text-sm">Monthly accountant</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">€29-99</div>
                <div className="text-verde-100 text-sm">VerdeDesk pricing</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">50-70%</div>
                <div className="text-verde-100 text-sm">Cost savings</div>
              </div>
            </div>
          </div>

          <Link
            to="/#waitlist"
            className="inline-block mt-8 px-8 py-3 bg-white text-verde-700 font-semibold rounded-lg hover:bg-verde-50 transition-colors"
          >
            Join the VerdeDesk waitlist
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        <p>© 2026 VerdeDesk. Made for freelancers in Portugal.</p>
      </footer>
    </div>
  )
}
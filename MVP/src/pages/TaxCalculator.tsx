import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useSEO } from '../lib/useSEO'

// 2025 IRS tax brackets (latest confirmed from AT/PWC)
// 2026 brackets adjust thresholds ~3.5% upward — estimates will be within 1-2%
const IRS_BRACKETS = [
  { min: 0, max: 8059, rate: 0.125 },
  { min: 8059, max: 12160, rate: 0.16 },
  { min: 12160, max: 17233, rate: 0.215 },
  { min: 17233, max: 22306, rate: 0.244 },
  { min: 22306, max: 28400, rate: 0.314 },
  { min: 28400, max: 41629, rate: 0.349 },
  { min: 41629, max: 44987, rate: 0.431 },
  { min: 44987, max: 83696, rate: 0.446 },
  { min: 83696, max: Infinity, rate: 0.48 },
]

const NHR_FLAT_RATE = 0.20
const SS_RATE = 0.214
const SS_INCOME_FACTOR = 0.70
const SIMPLIFIED_TAXABLE_FACTOR = 0.75
const VAT_THRESHOLD = 15000
const VAT_RATE = 0.23

function calculateIRS(taxableIncome: number): number {
  let tax = 0
  for (const bracket of IRS_BRACKETS) {
    if (taxableIncome <= bracket.min) break
    const incomeInBracket = Math.min(taxableIncome, bracket.max) - bracket.min
    tax += incomeInBracket * bracket.rate
  }
  // Solidarity surcharge
  if (taxableIncome > 250000) {
    tax += (taxableIncome - 250000) * 0.05
    tax += (250000 - 80000) * 0.025
  } else if (taxableIncome > 80000) {
    tax += (taxableIncome - 80000) * 0.025
  }
  return tax
}

function formatEUR(n: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n)
}

export default function TaxCalculator() {
  useSEO({
    title: 'Portugal Freelancer Tax Calculator (2026) — Estimate IRS, Social Security & Net Income | VerdeDesk',
    description: 'Free tax calculator for freelancers in Portugal. Estimate your IRS income tax, social security contributions, VAT status, and take-home pay under the simplified regime. Built for D8 visa holders and expats.',
    canonical: 'https://verdedesk.vercel.app/tools/tax-calculator',
  })

  const [grossIncome, setGrossIncome] = useState<string>('30000')
  const [isNewFreelancer, setIsNewFreelancer] = useState(false)
  const [useNHR, setUseNHR] = useState(false)

  const results = useMemo(() => {
    const gross = parseFloat(grossIncome) || 0

    // Simplified regime: 75% of service income is taxable
    const taxableIncome = gross * SIMPLIFIED_TAXABLE_FACTOR

    // IRS calculation
    const irsTax = useNHR ? taxableIncome * NHR_FLAT_RATE : calculateIRS(taxableIncome)
    const effectiveIRSRate = gross > 0 ? (irsTax / gross) * 100 : 0

    // Social security: 21.4% on 70% of gross quarterly income (annualized)
    const ssBase = gross * SS_INCOME_FACTOR
    const ssTax = isNewFreelancer ? 0 : ssBase * SS_RATE
    const effectiveSSRate = gross > 0 ? (ssTax / gross) * 100 : 0

    // VAT status
    const vatExempt = gross < VAT_THRESHOLD
    const vatAmount = vatExempt ? 0 : gross * VAT_RATE

    // Net income (after IRS + SS, before VAT which is collected from clients)
    const netIncome = gross - irsTax - ssTax
    const effectiveTotalRate = gross > 0 ? ((irsTax + ssTax) / gross) * 100 : 0

    return {
      gross,
      taxableIncome,
      irsTax,
      effectiveIRSRate,
      ssTax,
      effectiveSSRate,
      vatExempt,
      vatAmount,
      netIncome,
      effectiveTotalRate,
    }
  }, [grossIncome, isNewFreelancer, useNHR])

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
        <a href="/#waitlist" className="text-sm font-medium text-verde-700 hover:text-verde-800">
          Join waitlist
        </a>
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-3xl mx-auto px-6 pt-4">
        <nav className="text-sm text-gray-500">
          <Link to="/" className="hover:text-verde-600">Home</Link>
          {' / '}
          <span className="text-gray-900">Tax Calculator</span>
        </nav>
      </div>

      {/* Header */}
      <section className="max-w-3xl mx-auto px-6 pt-8 pb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Portugal Freelancer Tax Calculator
        </h1>
        <p className="text-lg text-gray-600">
          Estimate your income tax, social security, and take-home pay as a freelancer in Portugal.
          Uses the simplified regime (regime simplificado) — the default for most D8 visa holders and expat freelancers.
        </p>
      </section>

      {/* Calculator */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
          {/* Inputs */}
          <div className="space-y-6 mb-8">
            <div>
              <label htmlFor="gross-income" className="block text-sm font-semibold text-gray-900 mb-2">
                Annual gross income (EUR)
              </label>
              <input
                id="gross-income"
                type="number"
                min="0"
                step="1000"
                value={grossIncome}
                onChange={(e) => setGrossIncome(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-verde-500 focus:border-transparent"
                placeholder="e.g. 30000"
              />
              <p className="text-xs text-gray-500 mt-1">
                Total invoiced amount before taxes — what you charge your clients per year.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isNewFreelancer}
                  onChange={(e) => setIsNewFreelancer(e.target.checked)}
                  className="w-5 h-5 rounded border-gray-300 text-verde-600 focus:ring-verde-500"
                />
                <span className="text-sm text-gray-700">
                  First year as freelancer <span className="text-gray-400">(12-month SS exemption)</span>
                </span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={useNHR}
                  onChange={(e) => setUseNHR(e.target.checked)}
                  className="w-5 h-5 rounded border-gray-300 text-verde-600 focus:ring-verde-500"
                />
                <span className="text-sm text-gray-700">
                  NHR 2.0 regime <span className="text-gray-400">(20% flat rate)</span>
                </span>
              </label>
            </div>
          </div>

          {/* Results */}
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Your estimated breakdown</h2>

            <div className="space-y-4">
              {/* Gross */}
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Gross income</span>
                <span className="font-semibold text-gray-900">{formatEUR(results.gross)}</span>
              </div>

              {/* Taxable income */}
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <div>
                  <span className="text-gray-600">Taxable income</span>
                  <span className="text-xs text-gray-400 ml-2">(75% simplified regime)</span>
                </div>
                <span className="text-gray-700">{formatEUR(results.taxableIncome)}</span>
              </div>

              {/* IRS */}
              <div className="flex justify-between items-center py-2">
                <div>
                  <span className="text-gray-600">IRS (income tax)</span>
                  <span className="text-xs text-gray-400 ml-2">
                    {useNHR ? '20% flat NHR' : `${results.effectiveIRSRate.toFixed(1)}% effective`}
                  </span>
                </div>
                <span className="text-red-600 font-medium">-{formatEUR(results.irsTax)}</span>
              </div>

              {/* Social Security */}
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <div>
                  <span className="text-gray-600">Social Security</span>
                  <span className="text-xs text-gray-400 ml-2">
                    {isNewFreelancer ? 'exempt (first year)' : `${results.effectiveSSRate.toFixed(1)}% effective`}
                  </span>
                </div>
                <span className={isNewFreelancer ? 'text-verde-600 font-medium' : 'text-red-600 font-medium'}>
                  {isNewFreelancer ? 'EUR 0' : `-${formatEUR(results.ssTax)}`}
                </span>
              </div>

              {/* Net income */}
              <div className="flex justify-between items-center py-3 bg-verde-50 rounded-lg px-4 -mx-4">
                <div>
                  <span className="font-semibold text-verde-800">Net income (take-home)</span>
                  <span className="text-xs text-verde-600 ml-2">
                    {results.effectiveTotalRate.toFixed(1)}% total tax rate
                  </span>
                </div>
                <span className="text-xl font-bold text-verde-800">{formatEUR(results.netIncome)}</span>
              </div>

              {/* Monthly breakdown */}
              <div className="flex justify-between items-center py-2 text-sm">
                <span className="text-gray-500">Monthly take-home</span>
                <span className="text-gray-700 font-medium">{formatEUR(results.netIncome / 12)}/month</span>
              </div>
            </div>

            {/* VAT status */}
            <div className={`mt-6 p-4 rounded-lg border ${results.vatExempt ? 'bg-verde-50 border-verde-200' : 'bg-amber-50 border-amber-200'}`}>
              <p className={`text-sm font-medium ${results.vatExempt ? 'text-verde-800' : 'text-amber-800'}`}>
                {results.vatExempt
                  ? `VAT exempt under Article 53 — your income is below the EUR ${VAT_THRESHOLD.toLocaleString()} threshold.`
                  : `You must register for VAT and charge 23% (EUR ${formatEUR(results.vatAmount)}/year). Your income exceeds the EUR ${VAT_THRESHOLD.toLocaleString()} threshold.`}
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-400 mt-4 text-center">
          Estimates based on 2025 IRS brackets (simplified regime). 2026 brackets adjust thresholds ~3.5% upward.
          This calculator provides estimates only — consult a tax professional for your specific situation.
          Does not account for deductible expenses, municipal surcharges, or withholding tax.
        </p>

        {/* How it works explanation */}
        <div className="mt-12 space-y-8">
          <h2 className="text-2xl font-bold text-gray-900">How freelancer taxes work in Portugal</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">The simplified regime (regime simplificado)</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Most freelancers in Portugal use the simplified tax regime. Under this regime, only 75% of your
                service income is considered taxable — the other 25% is a presumed expense deduction. You do not
                need to track individual business expenses. This regime is available if your annual income is under
                EUR 200,000.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">IRS income tax brackets</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Portugal uses progressive tax rates from 12.5% to 48% across nine brackets. Your taxable income
                (75% of gross under the simplified regime) is taxed at each bracket rate for the portion that falls
                within that bracket — not your entire income at the highest rate.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 pr-4 text-gray-500 font-medium">Income range</th>
                      <th className="text-right py-2 text-gray-500 font-medium">Rate</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    {IRS_BRACKETS.map((b) => (
                      <tr key={b.min} className="border-b border-gray-50">
                        <td className="py-1.5 pr-4">
                          {b.max === Infinity
                            ? `EUR ${b.min.toLocaleString()}+`
                            : `EUR ${b.min.toLocaleString()} – ${b.max.toLocaleString()}`}
                        </td>
                        <td className="py-1.5 text-right">{(b.rate * 100).toFixed(1)}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Social security (Seguranca Social)</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Freelancers pay 21.4% on 70% of their relevant quarterly income — an effective rate of about
                15% of gross income. New freelancers are exempt for their first 12 months. Declarations are
                quarterly (January, April, July, October), and missing a deadline triggers automatic penalties.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">VAT (IVA) threshold</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                If your annual income stays below EUR 15,000, you are exempt from charging VAT under Article 53
                of the Portuguese VAT Code. Once you cross this threshold, you must register for VAT and charge
                23% on your invoices. The transition is immediate — you cannot wait until the next calendar year.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">NHR 2.0 (Non-Habitual Resident)</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                If you qualify for the NHR 2.0 regime (available to new tax residents in Portugal), you pay a
                flat 20% rate on Portuguese-source employment and self-employment income for 10 years. This
                replaces the progressive brackets and can result in significant savings for higher earners.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-verde-600 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Let VerdeDesk handle the paperwork
          </h2>
          <p className="text-verde-100 mb-6 max-w-lg mx-auto">
            Issue recibos verdes, track your income against thresholds, and get deadline reminders —
            all in English. Launching April 2026.
          </p>
          <a
            href="/#waitlist"
            className="inline-block px-8 py-3 bg-white hover:bg-verde-50 text-verde-700 font-semibold rounded-lg transition-colors"
          >
            Join the waitlist
          </a>
          <p className="text-verde-200 text-sm mt-3">Free to join. Early members get their first month free.</p>
        </div>

        {/* Related guides */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Related guides</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { to: '/tools/nhr-checker', label: 'NHR 2.0 Eligibility Checker: Do You Qualify for the 20% Flat Rate?' },
              { to: '/guide/irs-tax-return-freelancer-portugal', label: 'How to File Your IRS Tax Return as a Freelancer' },
              { to: '/guide/social-security-freelancer-portugal', label: 'Social Security for Freelancers in Portugal' },
              { to: '/guide/vat-exemption-article-53-portugal', label: 'VAT Exemption Article 53: The EUR 15,000 Threshold' },
              { to: '/guide/d8-visa-portugal-taxes', label: 'D8 Visa Portugal Taxes: Complete 2026 Guide' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="block p-3 rounded-lg border border-gray-100 hover:border-verde-200 hover:bg-verde-50 transition-colors"
              >
                <span className="text-verde-600 text-sm font-medium">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        <p>&copy; 2026 VerdeDesk. Made for freelancers in Portugal.</p>
      </footer>
    </div>
  )
}

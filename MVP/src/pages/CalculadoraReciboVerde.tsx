import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useSEO } from '../lib/useSEO'

// 2025 IRS tax brackets
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

export default function CalculadoraReciboVerde() {
  useSEO({
    title: 'Calculadora Recibo Verde — Estimate Your Portuguese Freelancer Taxes | VerdeDesk',
    description: 'Simple recibo verde tax calculator for freelancers in Portugal. Calculate your IRS income tax and social security contributions based on annual income and tax regime.',
    canonical: 'https://verdedesk.vercel.app/calculadora',
  })

  const [annualIncome, setAnnualIncome] = useState<string>('30000')
  const [taxRegime, setTaxRegime] = useState<'normal' | 'nhr'>('normal')
  const [isFirstYear, setIsFirstYear] = useState(false)

  const results = useMemo(() => {
    const gross = parseFloat(annualIncome) || 0

    // Simplified regime: 75% of service income is taxable
    const taxableIncome = gross * SIMPLIFIED_TAXABLE_FACTOR

    // IRS calculation
    const irsTax = taxRegime === 'nhr' ? taxableIncome * NHR_FLAT_RATE : calculateIRS(taxableIncome)

    // Social security: 21.4% on 70% of gross quarterly income (annualized)
    const ssBase = gross * SS_INCOME_FACTOR
    const ssTax = isFirstYear ? 0 : ssBase * SS_RATE

    // Net income
    const netIncome = gross - irsTax - ssTax
    const totalTaxRate = gross > 0 ? ((irsTax + ssTax) / gross) * 100 : 0

    return {
      gross,
      taxableIncome,
      irsTax,
      ssTax,
      netIncome,
      totalTaxRate,
    }
  }, [annualIncome, taxRegime, isFirstYear])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
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
          <span className="text-gray-900">Calculadora</span>
        </nav>
      </div>

      {/* Header */}
      <section className="max-w-3xl mx-auto px-6 pt-8 pb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Calculadora Recibo Verde
        </h1>
        <p className="text-lg text-gray-600">
          Calculate your estimated taxes as a freelancer in Portugal using the simplified regime (regime simplificado).
          Enter your annual income and tax regime to get instant estimates for IRS and Social Security.
        </p>
      </section>

      {/* Calculator */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
          {/* Input Form */}
          <div className="space-y-6 mb-8">
            {/* Annual Income */}
            <div>
              <label htmlFor="annual-income" className="block text-sm font-semibold text-gray-900 mb-2">
                Annual Income (EUR)
              </label>
              <input
                id="annual-income"
                type="number"
                min="0"
                step="1000"
                value={annualIncome}
                onChange={(e) => setAnnualIncome(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-verde-500 focus:border-transparent"
                placeholder="e.g. 30000"
              />
              <p className="text-xs text-gray-500 mt-1">
                Total amount you invoice clients annually before taxes
              </p>
            </div>

            {/* Tax Regime */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Tax Regime
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="tax-regime"
                    value="normal"
                    checked={taxRegime === 'normal'}
                    onChange={(e) => setTaxRegime(e.target.value as 'normal' | 'nhr')}
                    className="w-5 h-5 text-verde-600 focus:ring-verde-500 border-gray-300"
                  />
                  <span className="text-sm text-gray-700">
                    Normal IRS (Progressive rates 12.5% - 48%)
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="tax-regime"
                    value="nhr"
                    checked={taxRegime === 'nhr'}
                    onChange={(e) => setTaxRegime(e.target.value as 'normal' | 'nhr')}
                    className="w-5 h-5 text-verde-600 focus:ring-verde-500 border-gray-300"
                  />
                  <span className="text-sm text-gray-700">
                    NHR 2.0 (20% flat rate)
                  </span>
                </label>
              </div>
            </div>

            {/* First Year Exemption */}
            <div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isFirstYear}
                  onChange={(e) => setIsFirstYear(e.target.checked)}
                  className="w-5 h-5 rounded border-gray-300 text-verde-600 focus:ring-verde-500"
                />
                <span className="text-sm text-gray-700">
                  First year as freelancer <span className="text-gray-400">(Social Security exemption)</span>
                </span>
              </label>
            </div>
          </div>

          {/* Results */}
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Tax Estimate</h2>

            <div className="space-y-4">
              {/* Gross Income */}
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Annual Income</span>
                <span className="font-semibold text-gray-900">{formatEUR(results.gross)}</span>
              </div>

              {/* Taxable Income */}
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <div>
                  <span className="text-gray-600">Taxable Income</span>
                  <span className="text-xs text-gray-400 ml-2">(75% under simplified regime)</span>
                </div>
                <span className="text-gray-700">{formatEUR(results.taxableIncome)}</span>
              </div>

              {/* IRS Tax */}
              <div className="flex justify-between items-center py-2">
                <div>
                  <span className="text-gray-600">IRS Income Tax</span>
                  <span className="text-xs text-gray-400 ml-2">
                    {taxRegime === 'nhr' ? '20% NHR flat rate' : 'Progressive brackets'}
                  </span>
                </div>
                <span className="text-red-600 font-medium">-{formatEUR(results.irsTax)}</span>
              </div>

              {/* Social Security */}
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <div>
                  <span className="text-gray-600">Social Security</span>
                  <span className="text-xs text-gray-400 ml-2">
                    {isFirstYear ? 'Exempt (first year)' : '21.4% on 70% of income'}
                  </span>
                </div>
                <span className={isFirstYear ? 'text-verde-600 font-medium' : 'text-red-600 font-medium'}>
                  {isFirstYear ? '€0' : `-${formatEUR(results.ssTax)}`}
                </span>
              </div>

              {/* Net Income */}
              <div className="flex justify-between items-center py-3 bg-verde-50 rounded-lg px-4 -mx-4">
                <div>
                  <span className="font-semibold text-verde-800">Net Income</span>
                  <span className="text-xs text-verde-600 ml-2">
                    {results.totalTaxRate.toFixed(1)}% total tax rate
                  </span>
                </div>
                <span className="text-xl font-bold text-verde-800">{formatEUR(results.netIncome)}</span>
              </div>

              {/* Monthly */}
              <div className="flex justify-between items-center py-2 text-sm">
                <span className="text-gray-500">Monthly net income</span>
                <span className="text-gray-700 font-medium">{formatEUR(results.netIncome / 12)}/month</span>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-blue-800 mb-2">Important Notes</h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Estimates based on the simplified regime (regime simplificado)</li>
            <li>• Does not include municipal surcharges or deductible expenses</li>
            <li>• VAT registration required if annual income exceeds €15,000</li>
            <li>• Social Security declarations are quarterly (Jan, Apr, Jul, Oct)</li>
            <li>• Consult a tax professional for your specific situation</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-verde-600 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Let VerdeDesk simplify your compliance
          </h2>
          <p className="text-verde-100 mb-6 max-w-lg mx-auto">
            Issue recibos verdes, track income thresholds, get deadline reminders, and stay compliant — all in English.
          </p>
          <a
            href="/#waitlist"
            className="inline-block px-8 py-3 bg-white hover:bg-verde-50 text-verde-700 font-semibold rounded-lg transition-colors"
          >
            Join the waitlist
          </a>
          <p className="text-verde-200 text-sm mt-3">Free to join. Early members get their first month free.</p>
        </div>

        {/* Related Tools */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Tools & Guides</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { to: '/tools/tax-calculator', label: 'Advanced Tax Calculator with VAT & Detailed Breakdown' },
              { to: '/tools/nhr-checker', label: 'NHR 2.0 Eligibility Checker' },
              { to: '/guide/recibo-verde-english', label: 'Complete Guide to Recibos Verdes' },
              { to: '/guide/simplified-vs-organized-regime', label: 'Simplified vs Organized Tax Regime' },
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
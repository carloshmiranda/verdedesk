import { useState } from 'react'
import { Link } from 'react-router-dom'

function WaitlistCTA() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) setEmail('')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-verde-50 border border-verde-200 rounded-xl p-6 text-center mt-12">
        <p className="font-semibold text-verde-800">You're on the list!</p>
        <p className="text-verde-700 text-sm mt-1">We'll email you when VerdeDesk launches. No spam, ever.</p>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 rounded-xl p-6 sm:p-8 mt-12 text-center">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        Tired of navigating Portal das Financas in Portuguese?
      </h3>
      <p className="text-gray-600 text-sm mb-4">
        VerdeDesk handles green receipts, income tracking, and tax compliance — in plain English. Launching April 2026.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-verde-500 focus:border-transparent"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-5 py-2.5 bg-verde-600 text-white text-sm font-medium rounded-lg hover:bg-verde-700 disabled:opacity-50 transition-colors"
        >
          {status === 'loading' ? 'Joining...' : 'Join waitlist'}
        </button>
      </form>
      {status === 'error' && (
        <p className="text-red-600 text-xs mt-2">Something went wrong. Please try again.</p>
      )}
    </div>
  )
}

const guides = [
  { to: '/guide/recibo-verde-english', label: 'How to Issue a Recibo Verde in English' },
  { to: '/guide/fatura-vs-fatura-recibo-vs-recibo', label: 'Fatura vs Fatura-Recibo vs Recibo' },
  { to: '/guide/vat-exemption-article-53-portugal', label: 'VAT Exemption Article 53 Explained' },
  { to: '/guide/social-security-freelancer-portugal', label: 'Social Security for Freelancers' },
  { to: '/guide/irs-tax-return-freelancer-portugal', label: 'How to File Your IRS Tax Return' },
  { to: '/guide/d8-visa-portugal-taxes', label: 'D8 Visa Portugal Taxes Guide' },
  { to: '/guide/tax-deadlines-2026', label: 'Tax Deadlines 2026 Calendar' },
  { to: '/guide/register-freelancer-portugal', label: 'How to Register as a Freelancer' },
  { to: '/guide/withholding-tax-portugal', label: 'Withholding Tax (Retencao na Fonte)' },
  { to: '/guide/simplified-vs-organized-regime', label: 'Simplified vs Organized Regime' },
  { to: '/guide/portal-das-financas-english', label: 'Portal das Financas in English' },
  { to: '/guide/tax-deductions-freelancer-portugal', label: 'Freelancer Tax Deductions' },
  { to: '/guide/e-fatura-portugal-english', label: 'e-Fatura Portugal in English' },
  { to: '/guide/nif-portugal-foreigner', label: 'How to Get a NIF in Portugal' },
  { to: '/guide/anexo-b-irs-freelancer-portugal', label: 'Anexo B (Annex B) Field-by-Field Guide' },
  { to: '/guide/invoice-foreign-clients-portugal', label: 'Invoicing Foreign Clients from Portugal' },
  { to: '/guide/accountant-freelancer-portugal', label: 'Do You Need an Accountant in Portugal?' },
  { to: '/guide/moving-to-portugal-freelancer', label: 'Moving to Portugal as a Freelancer' },
  { to: '/guide/cancel-recibo-verde-portugal', label: 'How to Cancel a Recibo Verde' },
]

export default function RelatedGuides({ current }: { current: string }) {
  const others = guides.filter((g) => g.to !== current)
  return (
    <div className="border-t border-gray-100 pt-8 mt-12">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">More guides for expat freelancers</h3>
      <Link
        to="/tools/tax-calculator"
        className="block p-4 rounded-lg border-2 border-verde-200 bg-verde-50 hover:border-verde-300 transition-colors mb-3"
      >
        <span className="text-verde-800 text-sm font-semibold">🧮 Free Tax Calculator</span>
        <span className="text-verde-600 text-xs block mt-0.5">Estimate your IRS, social security, and take-home pay</span>
      </Link>
      <div className="grid sm:grid-cols-2 gap-3">
        {others.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className="block p-3 rounded-lg border border-gray-100 hover:border-verde-200 hover:bg-verde-50 transition-colors"
          >
            <span className="text-verde-600 text-sm font-medium">{label}</span>
          </Link>
        ))}
      </div>
      <WaitlistCTA />
    </div>
  )
}

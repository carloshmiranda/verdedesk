import { Link } from 'react-router-dom'

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
    </div>
  )
}

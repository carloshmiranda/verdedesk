import { Link } from 'react-router-dom'

const guides = [
  { to: '/guide/recibo-verde-english', label: 'How to Issue a Recibo Verde in English' },
  { to: '/guide/fatura-vs-fatura-recibo-vs-recibo', label: 'Fatura vs Fatura-Recibo vs Recibo' },
  { to: '/guide/vat-exemption-article-53-portugal', label: 'VAT Exemption Article 53 Explained' },
  { to: '/guide/social-security-freelancer-portugal', label: 'Social Security for Freelancers' },
  { to: '/guide/irs-tax-return-freelancer-portugal', label: 'How to File Your IRS Tax Return' },
  { to: '/guide/d8-visa-portugal-taxes', label: 'D8 Visa Portugal Taxes Guide' },
]

export default function RelatedGuides({ current }: { current: string }) {
  const others = guides.filter((g) => g.to !== current)
  return (
    <div className="border-t border-gray-100 pt-8 mt-12">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">More guides for expat freelancers</h3>
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

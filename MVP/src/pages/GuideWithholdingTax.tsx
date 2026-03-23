import { Link } from 'react-router-dom'
import { useSEO } from '../lib/useSEO'
import { useArticleSchema } from '../lib/useArticleSchema'
import RelatedGuides from '../components/RelatedGuides'
import IrsFilingBanner from '../components/IrsFilingBanner'

export default function GuideWithholdingTax() {
  useSEO({
    title: 'Withholding Tax (Retenção na Fonte) for Freelancers in Portugal (2026) | VerdeDesk',
    description: 'Complete English guide to withholding tax on green receipts in Portugal. Covers the 25% rate, Article 53 exemption, international clients, reduced rates, and how to choose the right option when issuing a recibo verde.',
    canonical: 'https://verdedesk.vercel.app/guide/withholding-tax-portugal',
  })
  useArticleSchema({
    title: 'Withholding Tax (Retenção na Fonte) for Freelancers in Portugal (2026)',
    description: 'Complete English guide to withholding tax on green receipts in Portugal.',
    url: 'https://verdedesk.vercel.app/guide/withholding-tax-portugal',
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

      {/* IRS Filing Season Banner */}
      <IrsFilingBanner />

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-6">
          <Link to="/" className="hover:text-verde-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/guides" className="hover:text-verde-600">Guides</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Withholding Tax</span>
        </nav>

        <p className="text-sm text-verde-600 font-medium mb-4">Invoicing</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
          Withholding Tax on Green Receipts in Portugal: Retencao na Fonte Explained (2026)
        </h1>
        <p className="text-gray-500 text-sm mb-12">
          Updated March 2026. Covers withholding tax rules for freelancers issuing recibos verdes.
        </p>

        <div className="prose prose-gray max-w-none">
          {/* TOC */}
          <nav aria-label="Table of contents" className="bg-gray-50 rounded-xl p-6 mb-10">
            <p className="font-semibold text-gray-900 mb-3">In this guide:</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm text-verde-700">
              <li><a href="#what-is-retencao" className="hover:text-verde-900">What is retencao na fonte?</a></li>
              <li><a href="#when-does-it-apply" className="hover:text-verde-900">When does withholding tax apply?</a></li>
              <li><a href="#standard-rate" className="hover:text-verde-900">The standard 25% rate</a></li>
              <li><a href="#reduced-rates" className="hover:text-verde-900">Reduced withholding rates</a></li>
              <li><a href="#article-53-exemption" className="hover:text-verde-900">Article 53 exemption (under EUR 15,000)</a></li>
              <li><a href="#international-clients" className="hover:text-verde-900">International clients: no withholding</a></li>
              <li><a href="#recibo-verde-options" className="hover:text-verde-900">Which option to choose on the recibo verde form</a></li>
              <li><a href="#how-it-works-with-irs" className="hover:text-verde-900">How withholding relates to your annual IRS return</a></li>
              <li><a href="#common-mistakes" className="hover:text-verde-900">Common mistakes expats make</a></li>
            </ol>
          </nav>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            When you issue a green receipt (recibo verde) through Portal das Financas, one of the most confusing fields is <strong>retencao na fonte</strong> — withholding tax. Choose the wrong option and you will either overpay your taxes throughout the year or face a surprise bill when you file your IRS return. This guide explains every option in plain English so you pick the right one every time.
          </p>

          {/* Section 1 */}
          <h2 id="what-is-retencao" className="text-xl font-bold text-gray-900 mt-12 mb-4">
            What is retencao na fonte?
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>Retencao na fonte</strong> (literally "retention at source") is Portugal's withholding tax system. When you invoice a Portuguese company or entity with organised accounting, they withhold a percentage of your payment and send it directly to the tax authority (Autoridade Tributaria) on your behalf.
          </p>
          <p className="text-gray-700 mb-4">
            Think of it as a pre-payment toward your annual income tax. At the end of the year when you file your IRS return, the total amount withheld throughout the year is subtracted from what you owe. If too much was withheld, you get a refund. If too little, you pay the difference.
          </p>
          <div className="bg-verde-50 border border-verde-200 rounded-lg p-4 mb-8">
            <p className="text-verde-800 text-sm font-medium mb-1">Key point</p>
            <p className="text-verde-700 text-sm">
              Withholding tax is <strong>not an additional tax</strong>. It is an advance payment toward the income tax you will owe when you file your IRS return. The final amount of tax you pay is determined by your annual return, not by withholding.
            </p>
          </div>

          {/* Section 2 */}
          <h2 id="when-does-it-apply" className="text-xl font-bold text-gray-900 mt-12 mb-4">
            When does withholding tax apply?
          </h2>
          <p className="text-gray-700 mb-4">
            Withholding tax applies when <strong>all three conditions</strong> are met:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
            <li>Your client is a Portuguese entity with <strong>organised accounting</strong> (contabilidade organizada) — typically any company, not individuals</li>
            <li>Your annual freelance income was <strong>above EUR 15,000</strong> in the previous year (or you expect it to exceed EUR 15,000 this year)</li>
            <li>The service you provide is subject to withholding under the IRS Code</li>
          </ol>
          <p className="text-gray-700 mb-8">
            If any one of these conditions is not met, withholding does not apply to that invoice.
          </p>

          {/* Section 3 */}
          <h2 id="standard-rate" className="text-xl font-bold text-gray-900 mt-12 mb-4">
            The standard 25% withholding rate
          </h2>
          <p className="text-gray-700 mb-4">
            The standard withholding rate for most freelance services in Portugal is <strong>25%</strong>. This applies to Category B income from professional services — which covers the vast majority of freelance work (consulting, software development, design, marketing, writing, etc.).
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <p className="text-gray-700 text-sm">
              <strong>Example:</strong> You invoice a Portuguese company EUR 1,000 for consulting work. They withhold EUR 250 (25%) and pay you EUR 750. The EUR 250 is sent to the tax authority and credited against your annual IRS tax liability.
            </p>
          </div>
          <p className="text-gray-700 mb-8">
            When you issue the recibo verde on Portal das Financas, you select "Retencao na fonte — Artigo 101 do CIRS" and the rate of 25%.
          </p>

          {/* Section 4 */}
          <h2 id="reduced-rates" className="text-xl font-bold text-gray-900 mt-12 mb-4">
            Reduced withholding rates
          </h2>
          <p className="text-gray-700 mb-4">
            Some types of income qualify for reduced withholding rates:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full text-sm border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2 border-b font-medium text-gray-700">Income type</th>
                  <th className="text-left px-4 py-2 border-b font-medium text-gray-700">Rate</th>
                  <th className="text-left px-4 py-2 border-b font-medium text-gray-700">Legal basis</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b text-gray-700">Standard professional services</td>
                  <td className="px-4 py-2 border-b text-gray-700 font-medium">25%</td>
                  <td className="px-4 py-2 border-b text-gray-500">Art. 101 CIRS</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b text-gray-700">Intellectual property (royalties, copyright)</td>
                  <td className="px-4 py-2 border-b text-gray-700 font-medium">16.5%</td>
                  <td className="px-4 py-2 border-b text-gray-500">Art. 101 CIRS</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b text-gray-700">Commissions from intermediation</td>
                  <td className="px-4 py-2 border-b text-gray-700 font-medium">25%</td>
                  <td className="px-4 py-2 border-b text-gray-500">Art. 101 CIRS</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b text-gray-700">Income from activities listed in Art. 151 CIRS (Table B)</td>
                  <td className="px-4 py-2 border-b text-gray-700 font-medium">11.5%</td>
                  <td className="px-4 py-2 border-b text-gray-500">Art. 101-B CIRS</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b text-gray-700">IFICI / NHR 2.0 regime income</td>
                  <td className="px-4 py-2 border-b text-gray-700 font-medium">20%</td>
                  <td className="px-4 py-2 border-b text-gray-500">Art. 12-J EBF</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-8">
            The 11.5% rate for Table B activities applies to specific professional categories — but only when your income in the previous year was below a certain threshold and you opt in. Most expat freelancers use the standard 25% rate. If you are on IFICI (NHR 2.0), your withholding rate is 20% instead.
          </p>

          {/* Section 5 */}
          <h2 id="article-53-exemption" className="text-xl font-bold text-gray-900 mt-12 mb-4">
            Article 53 exemption: under EUR 15,000 means no withholding
          </h2>
          <p className="text-gray-700 mb-4">
            If you are exempt from VAT under <Link to="/guide/vat-exemption-article-53-portugal" className="text-verde-600 hover:text-verde-800 underline">Article 53 of the Portuguese VAT Code</Link> (because your annual income is below EUR 15,000), you are <strong>also exempt from withholding tax</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            This means:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>Your Portuguese clients pay you the <strong>full invoiced amount</strong> — no deduction</li>
            <li>You do not need to apply any withholding rate on your recibo verde</li>
            <li>You settle your entire tax liability when you file your annual IRS return</li>
          </ul>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
            <p className="text-amber-800 text-sm font-medium mb-1">Warning</p>
            <p className="text-amber-700 text-sm">
              Once your income crosses EUR 15,000 in a year, you lose both the VAT exemption and the withholding exemption. From the invoice that crosses the threshold, you must start applying withholding tax and charging VAT. Keep close track of your cumulative income.
            </p>
          </div>

          {/* Section 6 */}
          <h2 id="international-clients" className="text-xl font-bold text-gray-900 mt-12 mb-4">
            International clients: no withholding
          </h2>
          <p className="text-gray-700 mb-4">
            When you invoice a client outside Portugal — a foreign company or individual without a permanent establishment in Portugal — <strong>no withholding tax applies</strong>, regardless of the amount.
          </p>
          <p className="text-gray-700 mb-4">
            On the recibo verde form, you select:
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <p className="text-gray-700 text-sm font-mono">
              Sem retencao — Nao residente sem estabelecimento
            </p>
            <p className="text-gray-500 text-xs mt-1">
              (No withholding — non-resident without establishment)
            </p>
          </div>
          <p className="text-gray-700 mb-8">
            This is the option most D8 visa holders use for the majority of their invoices, since many work remotely for companies based outside Portugal. Your full income tax is settled through the annual IRS return instead.
          </p>

          {/* Section 7 */}
          <h2 id="recibo-verde-options" className="text-xl font-bold text-gray-900 mt-12 mb-4">
            Which option to choose on the recibo verde form
          </h2>
          <p className="text-gray-700 mb-4">
            When you issue a recibo verde on Portal das Financas, the "retencao" field gives you several options. Here is a decision tree:
          </p>
          <div className="space-y-3 mb-8">
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-medium text-gray-900 mb-1">Client is outside Portugal?</p>
              <p className="text-gray-600 text-sm">Select: <span className="font-mono text-xs bg-gray-100 px-1 py-0.5 rounded">Sem retencao — Nao residente sem estabelecimento</span></p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-medium text-gray-900 mb-1">Client is in Portugal, but your annual income is under EUR 15,000?</p>
              <p className="text-gray-600 text-sm">Select: <span className="font-mono text-xs bg-gray-100 px-1 py-0.5 rounded">Sem retencao — Art. 53</span></p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-medium text-gray-900 mb-1">Client is a Portuguese company and your income exceeds EUR 15,000?</p>
              <p className="text-gray-600 text-sm">Select: <span className="font-mono text-xs bg-gray-100 px-1 py-0.5 rounded">Retencao na fonte — Art. 101 do CIRS — 25%</span></p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-medium text-gray-900 mb-1">You are on IFICI / NHR 2.0?</p>
              <p className="text-gray-600 text-sm">Select: <span className="font-mono text-xs bg-gray-100 px-1 py-0.5 rounded">Retencao na fonte — 20%</span> (IFICI flat rate)</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-medium text-gray-900 mb-1">Client is a Portuguese individual (not a company)?</p>
              <p className="text-gray-600 text-sm">Select: <span className="font-mono text-xs bg-gray-100 px-1 py-0.5 rounded">Sem retencao — Entidade sem contabilidade organizada</span></p>
              <p className="text-gray-500 text-xs mt-1">Individuals without organised accounting cannot withhold.</p>
            </div>
          </div>

          {/* Section 8 */}
          <h2 id="how-it-works-with-irs" className="text-xl font-bold text-gray-900 mt-12 mb-4">
            How withholding relates to your annual IRS return
          </h2>
          <p className="text-gray-700 mb-4">
            All withholding throughout the year is tracked automatically by the tax authority. When you file your annual IRS return (April 1 — June 30 for 2025 income), the total withheld is pre-filled and subtracted from your calculated tax:
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <p className="text-gray-700 text-sm">
              <strong>Tax owed</strong> = IRS calculated on full annual income<br />
              <strong>minus</strong> total retencao na fonte already withheld<br />
              = <strong>amount to pay</strong> (or refund if negative)
            </p>
          </div>
          <p className="text-gray-700 mb-4">
            This means:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>High withholding (25%) + low actual tax rate</strong> = you get a refund at filing time</li>
            <li><strong>No withholding + high income</strong> = you owe the full tax at filing time (one large payment)</li>
            <li><strong>Mixed clients (Portuguese + international)</strong> = some withholding offsets your total, you pay the rest at filing</li>
          </ul>
          <p className="text-gray-700 mb-8">
            Many D8 visa holders invoice only international clients, meaning zero withholding all year. This creates a large tax bill at filing time. If this is you, consider setting aside 20-25% of each payment in a separate savings account to avoid a cash flow shock in April.
          </p>

          {/* Section 9 */}
          <h2 id="common-mistakes" className="text-xl font-bold text-gray-900 mt-12 mb-4">
            Common mistakes expats make with withholding tax
          </h2>
          <div className="space-y-4 mb-8">
            <div className="border-l-4 border-red-300 pl-4">
              <p className="font-medium text-gray-900 text-sm">Applying withholding to international clients</p>
              <p className="text-gray-600 text-sm">Non-resident clients without a Portuguese establishment do not withhold. Selecting the wrong option overstates your withholding and confuses your IRS return.</p>
            </div>
            <div className="border-l-4 border-red-300 pl-4">
              <p className="font-medium text-gray-900 text-sm">Forgetting to switch when crossing EUR 15,000</p>
              <p className="text-gray-600 text-sm">Once your cumulative annual income passes EUR 15,000, you must apply withholding on Portuguese client invoices from that point forward. Many expats keep using "Sem retencao — Art. 53" after crossing the threshold.</p>
            </div>
            <div className="border-l-4 border-red-300 pl-4">
              <p className="font-medium text-gray-900 text-sm">Not saving for tax if all clients are international</p>
              <p className="text-gray-600 text-sm">With zero withholding all year, you will owe 100% of your income tax at filing. Set aside 20-25% of each payment received.</p>
            </div>
            <div className="border-l-4 border-red-300 pl-4">
              <p className="font-medium text-gray-900 text-sm">Using 25% when you qualify for a lower rate</p>
              <p className="text-gray-600 text-sm">If your income type qualifies for 16.5% (intellectual property) or you are on IFICI (20%), using the standard 25% means over-withholding. You will get it back at filing, but it reduces your cash flow all year.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-verde-50 border border-verde-200 rounded-xl p-6 mt-12">
            <h3 className="text-lg font-semibold text-verde-800 mb-2">
              Skip the Portuguese paperwork
            </h3>
            <p className="text-verde-700 text-sm mb-4">
              VerdeDesk automatically selects the correct withholding option based on your client's location, your income level, and your tax regime. No more guessing on Portal das Financas.
            </p>
            <Link
              to="/#waitlist"
              className="inline-block px-5 py-2.5 bg-verde-600 hover:bg-verde-700 text-white font-semibold rounded-lg transition-colors text-sm"
            >
              Join the waitlist
            </Link>
          </div>
        </div>

        <RelatedGuides current="/guide/withholding-tax-portugal" />
      </article>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm border-t border-gray-100 mt-16">
        <p>&copy; 2026 VerdeDesk. Made for freelancers in Portugal.</p>
      </footer>
    </div>
  )
}

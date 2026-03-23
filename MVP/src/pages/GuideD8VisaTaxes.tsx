import { Link } from 'react-router-dom'
import { useSEO } from '../lib/useSEO'
import { useArticleSchema } from '../lib/useArticleSchema'
import RelatedGuides from '../components/RelatedGuides'
import IrsFilingBanner from '../components/IrsFilingBanner'

export default function GuideD8VisaTaxes() {
  useSEO({
    title: 'D8 Visa Portugal Taxes (2026) — Complete Tax Guide for Digital Nomads | VerdeDesk',
    description: 'Everything D8 visa holders need to know about Portuguese taxes in 2026. Covers tax residency, NIF, freelance registration, income tax rates, VAT, social security, NHR 2.0, and your first-year tax checklist.',
    canonical: 'https://verdedesk.vercel.app/guide/d8-visa-portugal-taxes',
  })
  useArticleSchema({
    title: 'D8 Visa Portugal Taxes (2026) — Complete Tax Guide for Digital Nomads',
    description: 'Everything D8 visa holders need to know about Portuguese taxes in 2026.',
    url: 'https://verdedesk.vercel.app/guide/d8-visa-portugal-taxes',
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
        <p className="text-sm text-verde-600 font-medium mb-4">Guide for D8 visa holders</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
          D8 Visa Portugal Taxes: The Complete 2026 Guide for Digital Nomads
        </h1>
        <p className="text-gray-500 text-sm mb-12">
          Updated March 2026. Covers tax residency, NIF, income tax, VAT, social security, and NHR 2.0.
        </p>

        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            You have your D8 digital nomad visa. You have arrived in Portugal. Now what? Your visa
            does not determine your tax obligations — your <strong>tax residency status</strong> does.
            If you spend more than 183 days in Portugal in a calendar year, you become a Portuguese
            tax resident, and you owe taxes on your worldwide income. This guide covers every tax
            obligation you will face as a D8 visa holder working as a freelancer in Portugal.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Tax residency: the 183-day rule
          </h2>
          <p className="text-gray-700 mb-4">
            Portugal considers you a tax resident if you spend more than 183 days in the country
            during a calendar year, or if you have a habitual residence in Portugal on December 31.
            Most D8 visa holders cross the 183-day threshold because the visa is designed for people
            who want to live in Portugal long-term.
          </p>
          <p className="text-gray-700 mb-4">
            Once you are a tax resident, you are subject to Portuguese income tax (<em>IRS</em>) on
            your <strong>worldwide income</strong> — not just income earned in Portugal. This includes
            freelance income from clients in the US, UK, or anywhere else.
          </p>
          <p className="text-gray-700 mb-4">
            If you stay fewer than 183 days and do not have a habitual residence, you are a
            non-resident. Non-residents are only taxed on Portuguese-source income. However, this
            is uncommon for D8 holders since the visa requires you to reside in Portugal.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Step 1: Get your NIF (tax identification number)
          </h2>
          <p className="text-gray-700 mb-4">
            Your NIF (<em>Numero de Identificacao Fiscal</em>) is the foundation of your tax life
            in Portugal. You need it for everything: opening a bank account, signing a lease,
            registering on Portal das Financas, and filing taxes.
          </p>
          <p className="text-gray-700 mb-4">
            If you are a non-EU citizen, you must appoint a <strong>fiscal representative</strong> (
            <em>representante fiscal</em>) until you become a tax resident. This is typically a
            Portuguese citizen or legal entity who acts as your tax contact. Many immigration lawyers
            offer this service for EUR 100-300/year.
          </p>
          <p className="text-gray-700 mb-4">
            You can get your NIF at any Financas (tax office) or Loja do Cidadao (citizen shop).
            Bring your passport, proof of address in Portugal, and your visa. Some people obtain their
            NIF remotely before arriving through a lawyer or fiscal representative.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Step 2: Register your freelance activity
          </h2>
          <p className="text-gray-700 mb-4">
            To issue invoices (recibos verdes) in Portugal, you must register as a self-employed
            worker (<em>trabalhador independente</em>) on Portal das Financas. This is called
            opening your <em>atividade</em> (activity).
          </p>
          <p className="text-gray-700 mb-4">
            During registration, you will choose a <strong>CAE code</strong> (activity code) that
            describes your work. Common choices for digital nomads include:
          </p>
          <ul className="text-gray-700 mb-4 list-disc pl-6 space-y-1">
            <li>6201 — Computer programming activities</li>
            <li>6202 — Information technology consultancy</li>
            <li>7311 — Advertising agencies</li>
            <li>7021 — Public relations and communication activities</li>
            <li>9003 — Artistic and literary creation (for writers, designers)</li>
          </ul>
          <p className="text-gray-700 mb-4">
            You will also declare whether you expect to earn under or over EUR 15,000 per year.
            This determines your initial VAT status. If under EUR 15,000, you qualify for{' '}
            <Link to="/guide/vat-exemption-article-53-portugal" className="text-verde-600 hover:text-verde-700 underline">
              VAT exemption under Article 53
            </Link>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Income tax (IRS): how much will you pay?
          </h2>
          <p className="text-gray-700 mb-4">
            Portuguese income tax (<em>Imposto sobre o Rendimento das Pessoas Singulares</em>, or IRS)
            uses progressive rates from 14% to 48%. However, as a freelancer, you will likely use
            the <strong>simplified regime</strong> (<em>regime simplificado</em>), which taxes only
            75% of your gross income (25% is automatically deducted as presumed expenses).
          </p>
          <p className="text-gray-700 mb-4">
            This means if you earn EUR 50,000 as a freelancer, only EUR 37,500 is taxable. The
            effective tax rate on your total income ends up significantly lower than the headline
            bracket rates.
          </p>
          <div className="bg-gray-50 rounded-lg p-6 my-8">
            <h3 className="font-bold text-gray-900 mb-3">2026 IRS tax brackets (mainland Portugal)</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-gray-700">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4">Taxable income</th>
                    <th className="text-left py-2">Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr><td className="py-2 pr-4">Up to EUR 7,703</td><td className="py-2">14.5%</td></tr>
                  <tr><td className="py-2 pr-4">EUR 7,703 - 11,623</td><td className="py-2">21%</td></tr>
                  <tr><td className="py-2 pr-4">EUR 11,623 - 16,472</td><td className="py-2">26.5%</td></tr>
                  <tr><td className="py-2 pr-4">EUR 16,472 - 21,321</td><td className="py-2">28.5%</td></tr>
                  <tr><td className="py-2 pr-4">EUR 21,321 - 27,146</td><td className="py-2">35%</td></tr>
                  <tr><td className="py-2 pr-4">EUR 27,146 - 39,791</td><td className="py-2">37%</td></tr>
                  <tr><td className="py-2 pr-4">EUR 39,791 - 51,997</td><td className="py-2">43.5%</td></tr>
                  <tr><td className="py-2 pr-4">EUR 51,997 - 81,199</td><td className="py-2">45%</td></tr>
                  <tr><td className="py-2 pr-4">Over EUR 81,199</td><td className="py-2">48%</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              These rates apply to taxable income after the 25% simplified regime deduction.
            </p>
          </div>
          <p className="text-gray-700 mb-4">
            You file your annual IRS return between April 1 and June 30 for the previous year's
            income. See our{' '}
            <Link to="/guide/irs-tax-return-freelancer-portugal" className="text-verde-600 hover:text-verde-700 underline">
              IRS filing guide
            </Link>{' '}
            for step-by-step instructions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            VAT (IVA): the EUR 15,000 threshold
          </h2>
          <p className="text-gray-700 mb-4">
            If your annual income is under EUR 15,000, you are exempt from charging VAT on your
            invoices under{' '}
            <Link to="/guide/vat-exemption-article-53-portugal" className="text-verde-600 hover:text-verde-700 underline">
              Article 53 of the Portuguese VAT Code
            </Link>. This is the situation for many D8 visa holders in their first year.
          </p>
          <p className="text-gray-700 mb-4">
            Once you cross EUR 15,000, you must register for IVA and start charging 23% VAT on
            your invoices. There is also a EUR 18,750 trap: if you earned between EUR 15,000 and
            EUR 18,750 in the previous year, you may still be exempt but the rules are complex.
            Read our detailed{' '}
            <Link to="/guide/vat-exemption-article-53-portugal" className="text-verde-600 hover:text-verde-700 underline">
              VAT Article 53 guide
            </Link>{' '}
            before making assumptions.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Important for D8 holders with non-EU clients:</strong> Services provided to
            clients outside the EU are generally not subject to Portuguese VAT (reverse charge
            applies). However, this income still counts toward your EUR 15,000 threshold for
            domestic VAT exemption purposes. Many D8 holders working for US clients are surprised
            by this.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Social security (Seguranca Social)
          </h2>
          <p className="text-gray-700 mb-4">
            As a self-employed worker in Portugal, you must contribute to{' '}
            <Link to="/guide/social-security-freelancer-portugal" className="text-verde-600 hover:text-verde-700 underline">
              Seguranca Social
            </Link>{' '}
            (Portuguese social security). The contribution rate is <strong>21.4%</strong> of your
            declared relevant income.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Good news for new D8 arrivals:</strong> New freelancers get a <strong>12-month
            exemption</strong> from social security contributions. This starts from the date you
            register your activity, giving you a full year to get established before contributions
            begin.
          </p>
          <p className="text-gray-700 mb-4">
            After the exemption, you must make quarterly declarations and monthly payments. The
            contribution is calculated on 70% of your quarterly income. Deadlines are January,
            April, July, and October. Missing a deadline triggers automatic penalties.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            NHR 2.0: the 20% flat tax option
          </h2>
          <p className="text-gray-700 mb-4">
            Portugal's original Non-Habitual Resident (NHR) tax regime ended for new applicants on
            January 1, 2024. It was replaced by <strong>NHR 2.0</strong> (also called the IFICI
            regime), which is more restrictive but still valuable for qualifying D8 visa holders.
          </p>
          <p className="text-gray-700 mb-4">
            NHR 2.0 offers a <strong>20% flat tax rate</strong> on Portuguese income from qualifying
            professional activities, compared to the standard progressive rates of up to 48%. It also
            provides exemptions on most foreign-sourced passive income (dividends, interest, rental
            income).
          </p>
          <p className="text-gray-700 mb-4">
            To qualify for NHR 2.0, you must:
          </p>
          <ul className="text-gray-700 mb-4 list-disc pl-6 space-y-1">
            <li>Not have been a Portuguese tax resident in the previous 5 years</li>
            <li>Work in a qualifying profession (tech, scientific research, and certain other fields)</li>
            <li>Register as a tax resident and apply within the required timeframe</li>
          </ul>
          <p className="text-gray-700 mb-4">
            The 20% flat rate lasts for <strong>10 years</strong>. For a D8 holder earning EUR 60,000,
            this means paying EUR 12,000 in income tax instead of potentially EUR 15,000+ under
            standard rates. Check with a Portuguese tax advisor whether your specific profession
            qualifies.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Issuing invoices: recibos verdes
          </h2>
          <p className="text-gray-700 mb-4">
            Every time you receive a payment from a client, you must issue a{' '}
            <Link to="/guide/recibo-verde-english" className="text-verde-600 hover:text-verde-700 underline">
              recibo verde
            </Link>{' '}
            (green receipt) through Portal das Financas. This is Portugal's official invoicing system
            for self-employed workers.
          </p>
          <p className="text-gray-700 mb-4">
            The entire Portal das Financas interface is in Portuguese with no English option. You need
            to correctly fill in the document type ({' '}
            <Link to="/guide/fatura-vs-fatura-recibo-vs-recibo" className="text-verde-600 hover:text-verde-700 underline">
              fatura, fatura-recibo, or recibo
            </Link>
            ), your client's details, the service description, and the correct VAT regime. Getting
            any of these wrong can trigger tax authority queries.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Your first-year tax checklist
          </h2>
          <div className="bg-verde-50 rounded-lg p-6 my-8">
            <ol className="text-gray-700 space-y-3 list-decimal pl-5">
              <li><strong>Before arriving:</strong> Get your NIF and appoint a fiscal representative (non-EU citizens)</li>
              <li><strong>Within 30 days of arrival:</strong> Register at the local Financas office, get Portal das Financas access credentials</li>
              <li><strong>Before first invoice:</strong> Open your freelance activity (<em>atividade</em>) on Portal das Financas — choose your CAE code and declare your expected income</li>
              <li><strong>Monthly:</strong> Issue recibos verdes for every client payment received</li>
              <li><strong>Quarterly:</strong> After your 12-month SS exemption ends, submit quarterly Seguranca Social declarations</li>
              <li><strong>By March 31:</strong> Check if you qualify for NHR 2.0 and apply before the deadline</li>
              <li><strong>April 1 - June 30:</strong> File your annual IRS tax return for the previous year</li>
              <li><strong>Throughout the year:</strong> Track your cumulative income against the EUR 15,000 VAT threshold</li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Common mistakes D8 holders make
          </h2>
          <ul className="text-gray-700 mb-4 list-disc pl-6 space-y-3">
            <li>
              <strong>Assuming the visa handles taxes:</strong> Your D8 visa gives you the right to
              reside in Portugal. It says nothing about your tax obligations. Those are determined
              solely by your residency status and the Portuguese tax code.
            </li>
            <li>
              <strong>Not registering for freelance activity:</strong> Some D8 holders work for months
              without opening their <em>atividade</em>. This creates a gap period where income was
              earned but not invoiced — the tax authority can and does flag this.
            </li>
            <li>
              <strong>Ignoring social security:</strong> The 12-month exemption feels like a long time
              until it expires. Set a reminder for 2 months before your exemption ends so you can
              prepare for your first quarterly declaration.
            </li>
            <li>
              <strong>Not tracking the VAT threshold:</strong> Many D8 holders earn in USD or GBP and
              do not realize they are approaching the EUR 15,000 threshold until they cross it. By
              then, retroactive VAT registration is required.
            </li>
            <li>
              <strong>Missing the NHR 2.0 deadline:</strong> If you qualify for the 20% flat rate,
              you must apply within the registration window. Missing it means 10 years of standard
              progressive rates instead.
            </li>
          </ul>

          {/* CTA */}
          <div className="bg-verde-600 text-white rounded-2xl p-8 mt-16 text-center">
            <h2 className="text-2xl font-bold mb-3">Stop guessing. Start tracking.</h2>
            <p className="text-verde-100 mb-6 max-w-lg mx-auto">
              VerdeDesk handles your recibos verdes, tracks your VAT threshold, and reminds you of
              every deadline — all in plain English. Built specifically for D8 visa holders.
            </p>
            <Link
              to="/#waitlist"
              className="inline-block bg-white text-verde-700 font-semibold px-8 py-3 rounded-lg hover:bg-verde-50 transition-colors"
            >
              Join the waitlist — it is free
            </Link>
          </div>
        </div>
      </article>

      <RelatedGuides current="/guide/d8-visa-portugal-taxes" />

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-gray-100 mt-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-verde-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">V</span>
            </div>
            <span className="text-sm text-gray-500">VerdeDesk</span>
          </div>
          <p className="text-sm text-gray-400">
            Green receipts made simple for expats in Portugal.
          </p>
        </div>
      </footer>
    </div>
  )
}

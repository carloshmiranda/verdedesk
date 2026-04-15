import { Link } from 'react-router-dom'
import { useSEO } from '../lib/useSEO'
import { useArticleSchema } from '../lib/useArticleSchema'
import RelatedGuides from '../components/RelatedGuides'

export default function GuideInvoiceForeignClients() {
  useSEO({
    title: 'Invoicing Foreign Clients as a Portugal Freelancer (2026) | VerdeDesk',
    description: 'How to issue recibos verdes for non-Portuguese clients. Covers VAT on foreign clients, withholding tax exemption, currency, and social security — in plain English.',
    canonical: 'https://verdedesk.vercel.app/guide/invoice-foreign-clients-portugal',
  })
  useArticleSchema({
    title: 'Invoicing Foreign Clients as a Portugal Freelancer (2026)',
    description: 'How to issue recibos verdes for non-Portuguese clients. Covers VAT on foreign clients, withholding tax exemption, currency, and social security.',
    url: 'https://verdedesk.vercel.app/guide/invoice-foreign-clients-portugal',
    datePublished: '2026-04-15',
    dateModified: '2026-04-15',
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
          <Link to="/#waitlist" className="text-sm font-medium text-verde-700 hover:text-verde-800">Join waitlist</Link>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-3xl mx-auto px-6 pt-4">
        <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-verde-700">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/guides" className="hover:text-verde-700">Guides</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Invoicing foreign clients</span>
        </nav>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-sm text-verde-600 font-medium mb-4">VerdeDesk Guide • Invoicing</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
          Invoicing Foreign Clients as a Portugal Freelancer (2026)
        </h1>
        <p className="text-gray-500 text-sm mb-10">
          Updated April 2026. Applies to freelancers registered under the simplified regime issuing recibos verdes.
        </p>

        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Most D8 visa holders and expat freelancers in Portugal work for clients outside Portugal — often
            in the UK, US, Germany, or the Netherlands. The good news: you still issue a recibo verde for
            each payment. The rules around VAT and withholding tax are different from domestic clients, and
            getting them wrong is one of the most common compliance mistakes expats make.
          </p>

          {/* Quick answer box */}
          <div className="bg-verde-50 border border-verde-200 rounded-xl p-6 my-8">
            <h3 className="text-base font-bold text-verde-800 mb-3">The short answer</h3>
            <ul className="space-y-2 text-verde-700 text-sm">
              <li><strong>VAT:</strong> Do not charge VAT to foreign B2B clients. Leave the VAT field blank or select "Isento — Artigo 6.º do CIVA".</li>
              <li><strong>Withholding tax:</strong> Uncheck the retencão na fonte box. Foreign clients do not withhold Portuguese tax.</li>
              <li><strong>Social security:</strong> Still owed. Foreign income does not exempt you from SS contributions.</li>
              <li><strong>Currency:</strong> Convert to EUR using the ECB rate on the invoice date.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Do you still need to issue a recibo verde?
          </h2>
          <p className="text-gray-700 mb-4">
            Yes. As a Portuguese-registered freelancer (<em>trabalhador independente</em>), you must document
            every payment you receive with a fiscal document — regardless of where the client is based. For
            freelancers in the simplified regime (<em>regime simplificado</em>), that document is the recibo
            verde, issued through Portal das Financas.
          </p>
          <p className="text-gray-700 mb-4">
            There is no legal option to skip the recibo verde because your client is foreign. The document
            is for your own tax record, not for the client's accounting. Your foreign client does not need
            to file anything with the Portuguese tax authority.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            VAT on foreign clients: the reverse charge rule
          </h2>
          <p className="text-gray-700 mb-4">
            This is where most expats get tripped up. The general rule in Portuguese VAT law (Article 6
            of CIVA, aligned with the EU VAT Directive) is:
          </p>
          <blockquote className="border-l-4 border-verde-400 pl-4 italic text-gray-600 my-6">
            Services supplied to a taxable person (business) established in another country are
            deemed to be supplied where the <strong>client</strong> is established — not where the
            freelancer is located.
          </blockquote>
          <p className="text-gray-700 mb-4">
            In plain terms: if your client is a business (VAT-registered or not) based outside Portugal,
            Portuguese VAT does not apply. The client handles VAT in their own country, if at all. This is
            called the <strong>reverse charge mechanism</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            On your recibo verde, set the VAT field to <strong>"Isento — Artigo 6.º do CIVA"</strong> (exempt
            under Article 6). Do not charge 23% VAT, or your client will correctly refuse to pay it.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
            <h3 className="text-sm font-bold text-amber-800 mb-2">EU vs non-EU clients</h3>
            <p className="text-amber-700 text-sm">
              The reverse charge rule applies to both EU and non-EU business clients. If your client is a
              US LLC, a UK Ltd, or an Australian Pty Ltd — same result: no Portuguese VAT. The exemption
              applies because the service is consumed outside Portugal.
            </p>
            <p className="text-amber-700 text-sm mt-2">
              <strong>Exception:</strong> If your client is a private individual (not a business) in the EU,
              different rules may apply. Most freelancer work for digital nomads and tech companies falls
              under B2B, so this exception rarely applies in practice.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Article 53 VAT exemption and foreign clients
          </h2>
          <p className="text-gray-700 mb-4">
            If your total annual income is below EUR 15,000 (EUR 18,750 in your first year of activity),
            you qualify for the Article 53 VAT exemption. Under this exemption, you are not VAT-registered
            and do not charge VAT to any client — domestic or foreign.
          </p>
          <p className="text-gray-700 mb-4">
            If you exceed EUR 15,000 in gross income, you must register for VAT. But for foreign B2B clients,
            you still do not charge VAT (reverse charge still applies). The VAT registration requirement
            matters mainly for Portuguese clients.
          </p>
          <p className="text-gray-700 mb-4">
            See our full <Link to="/guide/vat-exemption-article-53-portugal" className="text-verde-700 hover:underline">Article 53 VAT exemption guide</Link> for the thresholds and registration process.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Withholding tax (retencão na fonte) for foreign clients
          </h2>
          <p className="text-gray-700 mb-4">
            When you issue a recibo verde to a Portuguese business client, they typically withhold 25% of
            the payment and remit it to the tax authority on your behalf. This is <em>retencão na fonte</em>.
          </p>
          <p className="text-gray-700 mb-4">
            Foreign clients do not and cannot withhold Portuguese income tax. They have no obligation to
            the Portuguese tax authority. When issuing a recibo verde for a foreign client, you should:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>Leave the withholding tax (<em>retencão na fonte</em>) checkbox <strong>unchecked</strong></li>
            <li>Or, if the portal asks for a reason, select "Não sujeito a retencão" (not subject to withholding)</li>
          </ul>
          <p className="text-gray-700 mb-4">
            The implication: you receive 100% of the invoice amount. But this also means you owe the
            full IRS tax when you file your annual return. You are responsible for setting aside your
            own tax provision — typically 20–28% of income, depending on your bracket and deductions.
          </p>
          <p className="text-gray-700 mb-4">
            See our <Link to="/guide/withholding-tax-portugal" className="text-verde-700 hover:underline">withholding tax guide</Link> and{' '}
            <Link to="/tools/tax-calculator" className="text-verde-700 hover:underline">tax calculator</Link> to estimate what you will owe.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Currency: receiving payment in USD, GBP, or EUR
          </h2>
          <p className="text-gray-700 mb-4">
            Portal das Financas only accepts EUR amounts on recibos verdes. If your client pays in another
            currency, you must convert to EUR before issuing the document.
          </p>
          <p className="text-gray-700 mb-4">
            Use the <strong>European Central Bank (ECB) reference rate</strong> on the date the service was
            provided or the date of payment — whichever is more consistent with your invoicing practice.
            The ECB rate is published daily at ecb.europa.eu/stats/policy_and_exchange_rates.
          </p>
          <p className="text-gray-700 mb-4">
            Keep a record of the exchange rate used for each invoice. If the AT (Autoridade Tributária) ever
            requests documentation, you will need to show the source and date of the rate. A screenshot of
            the ECB rate page works fine.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8">
            <h3 className="text-base font-bold text-gray-900 mb-3">Example: USD client, April 2026</h3>
            <div className="text-sm text-gray-700 space-y-2">
              <p>Invoice amount: USD 5,000</p>
              <p>ECB rate on April 15, 2026: 1 EUR = 1.0842 USD (example)</p>
              <p>EUR amount: 5,000 / 1.0842 = <strong>EUR 4,611.68</strong></p>
              <p>Recibo verde amount: <strong>EUR 4,611.68</strong>, VAT exempt (Art. 6.º CIVA), no withholding</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Social security on foreign income
          </h2>
          <p className="text-gray-700 mb-4">
            Social security contributions are owed on all freelance income, regardless of where your clients
            are based. The contribution base is calculated from your recibo verde income — the country of
            origin of that income does not matter.
          </p>
          <p className="text-gray-700 mb-4">
            The standard rate is <strong>21.4%</strong> on 70% of your quarterly gross income (effectively
            ~15% of gross). Payments are due in January, April, July, and October.
          </p>
          <p className="text-gray-700 mb-4">
            If you are in your first year of freelance activity, you are exempt from SS contributions for
            the first 12 months. See our <Link to="/guide/social-security-freelancer-portugal" className="text-verde-700 hover:underline">social security guide</Link> for the full breakdown.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            NHR 2.0 and foreign-sourced professional income
          </h2>
          <p className="text-gray-700 mb-4">
            If you hold NHR 2.0 status (IFICI regime) and your professional income comes from foreign
            clients, you may benefit from a flat 20% IRS rate on that income instead of the standard
            progressive brackets (which reach 48% for income above EUR 80,882).
          </p>
          <p className="text-gray-700 mb-4">
            The 20% NHR rate applies to income from "high added value activities" — which includes most
            technology, creative, and professional services work. The key condition is that the income
            is sourced from outside Portugal (i.e., your client is non-Portuguese).
          </p>
          <p className="text-gray-700 mb-4">
            Use our <Link to="/tools/nhr-checker" className="text-verde-700 hover:underline">NHR 2.0 eligibility checker</Link> to see if your activity qualifies and what the tax savings look like.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Step-by-step: issuing a recibo verde for a foreign client
          </h2>
          <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-4">
            <li>
              <strong>Log in to Portal das Financas</strong> (portaldasfinancas.gov.pt) and navigate to
              Serviços → Recibos Verdes Eletrónicos → Emitir.
            </li>
            <li>
              <strong>Enter client details:</strong> Use the client's NIF/VAT number if they have one.
              For non-Portuguese clients without a NIF, you may use a generic NIF or enter their business
              registration number. The AT accepts this for foreign entities.
            </li>
            <li>
              <strong>Enter the EUR amount</strong> converted from the original currency using the ECB rate.
            </li>
            <li>
              <strong>Set VAT to exempt (Art. 6.º CIVA)</strong> — do not select 23% or any other rate.
            </li>
            <li>
              <strong>Uncheck retencão na fonte</strong> — foreign clients do not withhold.
            </li>
            <li>
              <strong>Submit and save the PDF.</strong> Send the PDF to your client if they need a receipt,
              or keep it for your own records. The AT does not send it to your client automatically.
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Common mistakes with foreign client invoicing
          </h2>
          <div className="space-y-4 mb-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-sm">✗</div>
              <div>
                <p className="font-semibold text-gray-900">Charging 23% VAT to a foreign business client</p>
                <p className="text-gray-600 text-sm mt-1">Your client will refuse to pay, and you will have issued an incorrect document. Reverse charge means zero VAT.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-sm">✗</div>
              <div>
                <p className="font-semibold text-gray-900">Not issuing a recibo verde because the client is foreign</p>
                <p className="text-gray-600 text-sm mt-1">Every payment must be documented. Undeclared income discovered in an AT audit can result in fines and penalties on the full undeclared amount.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-sm">✗</div>
              <div>
                <p className="font-semibold text-gray-900">Using the Wise or bank exchange rate instead of ECB</p>
                <p className="text-gray-600 text-sm mt-1">While the AT does not audit exchange rates in routine filings, using a non-official rate is inconsistent and hard to defend. Stick to the ECB rate.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-sm">✗</div>
              <div>
                <p className="font-semibold text-gray-900">Forgetting social security on foreign income</p>
                <p className="text-gray-600 text-sm mt-1">SS is calculated on your total recibo verde income. Not provisioning for it leads to a surprise bill in the quarterly declaration months.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            What about clients in double tax treaty countries?
          </h2>
          <p className="text-gray-700 mb-4">
            Portugal has double taxation treaties with over 80 countries, including the US, UK, Germany,
            France, and the Netherlands. These treaties determine which country has the right to tax your
            income — but for most freelancers in the simplified regime with foreign clients, the practical
            answer is: Portugal taxes you, and the client's country does not.
          </p>
          <p className="text-gray-700 mb-4">
            The treaty matters if you have also been subject to foreign withholding (e.g., a US client
            withholds tax under a W-8BEN form). In that case, you can claim a foreign tax credit in your
            Portuguese IRS filing to avoid being taxed twice. This is handled in Anexo J of Modelo 3.
          </p>
          <p className="text-gray-700 mb-4">
            If you hold NHR 2.0 status and are dealing with complex multi-country income, consulting a
            Portuguese accountant (contabilista certificado) is worth the cost for the first year.
          </p>

          {/* CTA */}
          <div className="bg-verde-50 border border-verde-200 rounded-xl p-6 my-10">
            <h3 className="text-lg font-bold text-verde-800 mb-2">
              Issue recibos verdes for foreign clients — in English
            </h3>
            <p className="text-verde-700 mb-4">
              VerdeDesk handles the Portal das Financas complexity in plain English. Issue green receipts,
              track income in multiple currencies, and see your estimated tax position — all in one place.
            </p>
            <Link
              to="/#waitlist"
              className="inline-block px-6 py-3 bg-verde-600 hover:bg-verde-700 text-white font-semibold rounded-lg transition-colors"
            >
              Join the waitlist
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Summary</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-900 border border-gray-200">Item</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-900 border border-gray-200">Portuguese client</th>
                  <th className="text-left px-4 py-3 font-semibold text-verde-700 border border-gray-200">Foreign B2B client</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3 border border-gray-200">Recibo verde required</td>
                  <td className="px-4 py-3 border border-gray-200">Yes</td>
                  <td className="px-4 py-3 border border-gray-200 text-verde-700">Yes</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 border border-gray-200">VAT charged</td>
                  <td className="px-4 py-3 border border-gray-200">23% (if VAT registered and not Art. 53 exempt)</td>
                  <td className="px-4 py-3 border border-gray-200 text-verde-700">0% — Art. 6.º CIVA (reverse charge)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border border-gray-200">Withholding tax</td>
                  <td className="px-4 py-3 border border-gray-200">25% withheld by client</td>
                  <td className="px-4 py-3 border border-gray-200 text-verde-700">None — you receive 100%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 border border-gray-200">Social security</td>
                  <td className="px-4 py-3 border border-gray-200">Owed by you</td>
                  <td className="px-4 py-3 border border-gray-200 text-verde-700">Owed by you (same rules)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border border-gray-200">Currency on recibo</td>
                  <td className="px-4 py-3 border border-gray-200">EUR</td>
                  <td className="px-4 py-3 border border-gray-200 text-verde-700">EUR (convert using ECB rate)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <RelatedGuides current="/guide/invoice-foreign-clients-portugal" />
      </article>
    </div>
  )
}

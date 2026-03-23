import { Link } from 'react-router-dom'
import { useSEO } from '../lib/useSEO'
import { useArticleSchema } from '../lib/useArticleSchema'
import RelatedGuides from '../components/RelatedGuides'
import IrsFilingBanner from '../components/IrsFilingBanner'

export default function GuideAnexoB() {
  useSEO({
    title: 'Anexo B IRS Portugal: Freelancer Guide in English (2026) | VerdeDesk',
    description: 'Complete English guide to Anexo B (Annex B) of the Portuguese IRS tax return. Field-by-field walkthrough for freelancers under the simplified regime filing 2025 income in 2026.',
    canonical: 'https://verdedesk.vercel.app/guide/anexo-b-irs-freelancer-portugal',
  })
  useArticleSchema({
    title: 'Anexo B IRS Portugal: Freelancer Guide in English (2026)',
    description: 'Complete English guide to filling out Anexo B of the Portuguese IRS tax return for freelancers.',
    url: 'https://verdedesk.vercel.app/guide/anexo-b-irs-freelancer-portugal',
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
        <div className="flex items-center gap-4">
          <Link
            to="/guides"
            className="text-sm font-medium text-gray-500 hover:text-verde-700"
          >
            Guides
          </Link>
          <Link
            to="/#waitlist"
            className="text-sm font-medium text-verde-700 hover:text-verde-800"
          >
            Join waitlist
          </Link>
        </div>
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
          <span className="text-gray-600">Anexo B</span>
        </nav>

        <p className="text-sm text-verde-600 font-medium mb-4">IRS filing guide</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
          Anexo B (Annex B) IRS Portugal: Complete Field-by-Field Guide in English for Freelancers (2026)
        </h1>
        <p className="text-gray-500 text-sm mb-12">
          Updated March 2026. Covers 2025 income filing (April 1 — June 30, 2026). For freelancers under the simplified regime (regime simplificado).
        </p>

        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Anexo B is the tax annex every freelancer in Portugal must submit alongside their IRS
            Modelo 3 return. It covers Category B income — self-employment and professional
            activity. The form is entirely in Portuguese on Portal das Financas, and there is no
            official English translation. This guide translates every field and walks you through
            filling it out correctly.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <p className="text-amber-800 text-sm font-semibold mb-1">IRS filing season is open</p>
            <p className="text-amber-700 text-sm">
              The filing window for 2025 income runs <strong>April 1 — June 30, 2026</strong>.
              Late filing incurs an automatic penalty of EUR 25 to EUR 12,500. There is no extension.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            What is Anexo B?
          </h2>
          <p className="text-gray-700 mb-4">
            When you file your annual IRS return (Modelo 3), you attach annexes for each type of
            income. Freelancers and self-employed workers under the <strong>simplified regime</strong> must
            attach <strong>Anexo B</strong>. If you use organized accounting (<em>contabilidade organizada</em>),
            you file Anexo C instead.
          </p>
          <p className="text-gray-700 mb-4">
            Anexo B is where you declare:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>Your total gross income from freelance activities in 2025</li>
            <li>Income by category (professional services, sales, intellectual property)</li>
            <li>Withholding tax already paid (<em>retencao na fonte</em>)</li>
            <li>Social security contributions deducted</li>
            <li>Whether you opted for the simplified or organized regime</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Who needs to file Anexo B?
          </h2>
          <p className="text-gray-700 mb-4">
            You must file Anexo B if you had <strong>any</strong> Category B income in 2025, even if:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>All your clients are outside Portugal</li>
            <li>You earned below the VAT exemption threshold (Article 53)</li>
            <li>You had no expenses to deduct</li>
            <li>You only worked as a freelancer for part of the year</li>
            <li>You are on a D8 digital nomad visa</li>
          </ul>
          <p className="text-gray-700 mb-4">
            If you also had employment income (Category A), you file Anexo A for that separately.
            Both annexes attach to the same Modelo 3 return.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Before you start: what you need
          </h2>
          <p className="text-gray-700 mb-4">
            Gather these before logging into Portal das Financas:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Your NIF</strong> (tax identification number) and Portal login credentials</li>
            <li><strong>Total gross income from 2025</strong> — sum of all recibos verdes issued</li>
            <li><strong>Withholding tax amounts</strong> — shown on each recibo verde where you applied <em>retencao na fonte</em></li>
            <li><strong>Social security contributions</strong> — total paid in 2025 (check Seguranca Social Direta)</li>
            <li><strong>Your CAE/CIRS activity code</strong> — the code you registered with when opening activity</li>
            <li><strong>NIF of each client</strong> (Portuguese clients) or country code (international clients)</li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            How to access Anexo B on Portal das Financas
          </h2>
          <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
            <li>Log in to <strong>Portal das Financas</strong> with your NIF and password</li>
            <li>Navigate to <strong>Cidadaos</strong> &rarr; <strong>Servicos</strong> &rarr; <strong>IRS</strong> &rarr; <strong>Entregar Declaracao</strong></li>
            <li>Select year <strong>2025</strong></li>
            <li>The system may offer <strong>IRS Automatico</strong> — freelancers almost always cannot use this. Click <strong>Preencher Declaracao</strong> to file manually</li>
            <li>On the Modelo 3 main form, click <strong>Adicionar Anexo</strong> and select <strong>Anexo B</strong></li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Field-by-field guide to Anexo B
          </h2>
          <p className="text-gray-700 mb-4">
            Below is every section of Anexo B, translated and explained. Field names are shown in
            Portuguese with English translations.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
            Quadro 1 — Regime de tributacao (Tax regime)
          </h3>
          <p className="text-gray-700 mb-4">
            Select your tax regime:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Campo 01</strong> — <em>Regime simplificado</em> (Simplified regime): Select this if your annual income was under EUR 200,000 and you did not opt for organized accounting. This is what most freelancers use.</li>
            <li><strong>Campo 02</strong> — <em>Contabilidade organizada</em> (Organized accounting): Only select this if you have a certified accountant (<em>contabilista certificado</em>) filing on your behalf. If you select this, you should be filing Anexo C, not Anexo B.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
            Quadro 3 — Identificacao do sujeito passivo (Taxpayer identification)
          </h3>
          <p className="text-gray-700 mb-4">
            This section identifies who the annex belongs to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Campo 01</strong> — <em>Sujeito passivo A</em>: Select this if you are filing individually or are Taxpayer A in a joint return</li>
            <li><strong>Campo 02</strong> — <em>Sujeito passivo B</em>: Select this if you are Taxpayer B in a joint return (married filing jointly)</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
            Quadro 4A — Rendimentos brutos (Gross income)
          </h3>
          <p className="text-gray-700 mb-4">
            This is the most important section — where you declare your freelance income. The Portal
            may pre-fill some values from your issued recibos verdes. <strong>Always verify the
            pre-filled values against your own records.</strong>
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Campo</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Portuguese</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">English</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">What to enter</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-3 font-mono text-verde-700">401</td>
                  <td className="px-4 py-3 text-gray-600">Vendas de mercadorias e produtos</td>
                  <td className="px-4 py-3 text-gray-700">Sales of goods and products</td>
                  <td className="px-4 py-3 text-gray-700">Total income from selling physical goods (most freelancers: leave blank)</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 font-mono text-verde-700">402</td>
                  <td className="px-4 py-3 text-gray-600">Prestacoes de servicos</td>
                  <td className="px-4 py-3 text-gray-700">Services rendered</td>
                  <td className="px-4 py-3 text-gray-700"><strong>Your main freelance income goes here.</strong> Total gross from all recibos verdes for professional services in 2025.</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 font-mono text-verde-700">403</td>
                  <td className="px-4 py-3 text-gray-600">Propriedade intelectual/industrial</td>
                  <td className="px-4 py-3 text-gray-700">Intellectual/industrial property</td>
                  <td className="px-4 py-3 text-gray-700">Income from patents, copyrights, royalties. Separate from regular services.</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 font-mono text-verde-700">404</td>
                  <td className="px-4 py-3 text-gray-600">Rendimentos de capitais imputaveis</td>
                  <td className="px-4 py-3 text-gray-700">Attributable capital income</td>
                  <td className="px-4 py-3 text-gray-700">Rarely used by freelancers. Investment income attributable to business.</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 font-mono text-verde-700">410</td>
                  <td className="px-4 py-3 text-gray-600">Ato isolado</td>
                  <td className="px-4 py-3 text-gray-700">Isolated act</td>
                  <td className="px-4 py-3 text-gray-700">Income from a one-off freelance job without ongoing activity registration.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-4">
            <strong>Key tip:</strong> Most freelancers only need to fill Campo 402 (services rendered).
            If you are a developer, designer, consultant, translator, or any other service provider,
            your entire freelance income goes in Campo 402.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
            Quadro 4B — Rendimentos declarados em anexo SS (Income declared in SS annex)
          </h3>
          <p className="text-gray-700 mb-4">
            If you made quarterly social security declarations via <em>Seguranca Social Direta</em>,
            those amounts should match what you report here. The Portal may pre-fill this section.
            Verify it matches your SS contributions.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
            Quadro 5 — Retencoes na fonte (Withholding tax)
          </h3>
          <p className="text-gray-700 mb-4">
            If you applied withholding tax (<em>retencao na fonte</em>) on any recibos verdes — typically 25% for
            services to Portuguese companies — declare those amounts here. Each entry needs:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>NIF da entidade</strong> — The client's NIF (tax number)</li>
            <li><strong>Importancia retida</strong> — Amount withheld</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Withholding tax is credited against your final IRS bill. If more was withheld than
            you owe, you get a refund. If you only had international clients and applied no
            withholding, this section stays blank.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
            Quadro 6 — Encargos (Expenses/charges)
          </h3>
          <p className="text-gray-700 mb-4">
            Under the simplified regime, you do <strong>not</strong> itemize individual expenses here.
            The 25% automatic deduction is applied by the tax system. However, you need to declare:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Contribuicoes obrigatorias para regimes de protecao social</strong> — Mandatory social security contributions paid in 2025</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Social security contributions are deducted from your taxable income <em>in addition to</em> the 25%
            automatic deduction. Enter the total SS paid in 2025 (check Seguranca Social Direta for the exact amount).
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
            Quadro 7 — Informacoes complementares (Supplementary information)
          </h3>
          <p className="text-gray-700 mb-4">
            This section covers special situations:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Campo 701</strong> — Whether you started or ceased activity during the year</li>
            <li><strong>Campo 702</strong> — Your CAE/CIRS activity code</li>
            <li><strong>Campo 703</strong> — If you had income from more than one activity</li>
          </ul>
          <p className="text-gray-700 mb-4">
            If you opened your freelance activity partway through 2025 (common for D8 visa
            arrivals), check Campo 701. This can affect how your tax is calculated.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            How the simplified regime tax calculation works
          </h2>
          <p className="text-gray-700 mb-4">
            Once you submit Anexo B, the tax system calculates your tax as follows:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Gross income</strong> (Campo 402) = total from services rendered</li>
            <li><strong>Taxable income</strong> = Gross income x 75% (the 25% automatic deduction applies)</li>
            <li><strong>Deduct social security</strong> contributions (from Quadro 6)</li>
            <li><strong>Apply IRS tax brackets</strong> to the remaining amount</li>
            <li><strong>Subtract withholding tax</strong> already paid (Quadro 5)</li>
            <li><strong>Result</strong>: additional tax to pay, or refund owed to you</li>
          </ol>

          <div className="bg-verde-50 border border-verde-200 rounded-xl p-5 mb-8">
            <p className="text-verde-800 text-sm font-semibold mb-1">The 15% expense rule</p>
            <p className="text-verde-700 text-sm">
              Of the 25% automatic deduction, 10% is fully automatic. The remaining 15% must be
              backed by invoices registered in e-Fatura as professional expenses. If your documented
              expenses are less than 15% of income, the gap is added back to your taxable income.
              Check your e-Fatura status before filing.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Common mistakes on Anexo B
          </h2>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-3">
            <li>
              <strong>Trusting pre-filled values blindly.</strong> Portal das Financas pre-fills
              income from recibos verdes, but it can miss receipts or show incorrect totals.
              Always cross-check against your own records.
            </li>
            <li>
              <strong>Forgetting social security deduction.</strong> SS contributions are deductible
              on top of the 25% automatic deduction. Omitting them means you overpay.
            </li>
            <li>
              <strong>Putting services in the wrong campo.</strong> Freelance service income goes
              in Campo 402 (prestacoes de servicos), not 401 (sales of goods). The tax coefficient
              is different — 75% taxable for services vs 15% for goods.
            </li>
            <li>
              <strong>Missing withholding tax credits.</strong> If Portuguese clients withheld 25%
              on your recibos verdes, that must appear in Quadro 5 or you lose the credit.
            </li>
            <li>
              <strong>Not checking e-Fatura before filing.</strong> The 15% expense requirement
              is calculated from e-Fatura data. If your expenses are not properly classified there,
              your effective deduction drops and your tax bill increases.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Anexo B for international clients only
          </h2>
          <p className="text-gray-700 mb-4">
            Many D8 visa holders and digital nomads work exclusively for clients outside Portugal.
            Your filing process is the same, with a few differences:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>No withholding tax</strong> — international clients do not withhold Portuguese tax. Quadro 5 stays empty.</li>
            <li><strong>Full income in Campo 402</strong> — declare the EUR equivalent of all payments received. Use the exchange rate on the date of each recibo verde.</li>
            <li><strong>No Portuguese NIF for clients</strong> — use the country code instead of a NIF when identifying the client.</li>
            <li><strong>VAT reverse charge</strong> — if your clients are EU-based businesses, you likely issued recibos verdes with VAT reverse charge. This does not affect Anexo B (VAT is separate from IRS).</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            After submitting: what happens next
          </h2>
          <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Validation.</strong> Portal das Financas validates your return immediately. If there are errors, you get a warning and can fix them before finalizing.</li>
            <li><strong>Nota de liquidacao.</strong> Within a few weeks (typically July), you receive a tax assessment notice showing your final tax calculation.</li>
            <li><strong>Payment or refund.</strong> If you owe additional tax, the deadline is <strong>August 31, 2026</strong>. You can request installments (3 payments: July, September, December). If you overpaid via withholding tax, the refund is deposited to your IBAN.</li>
            <li><strong>Amendments.</strong> You can amend your return within 30 days of filing with no penalty.</li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            IRS Automatico: can freelancers use it?
          </h2>
          <p className="text-gray-700 mb-4">
            IRS Automatico is the automatic tax return that the tax authority pre-fills and offers to
            some taxpayers. Most freelancers <strong>cannot</strong> use IRS Automatico because it requires:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>Only Category A (employment) and/or Category H (pensions) income</li>
            <li>No foreign income</li>
            <li>No deductions beyond the standard automatic ones</li>
          </ul>
          <p className="text-gray-700 mb-4">
            As a Category B taxpayer, you must file manually using the standard Modelo 3 + Anexo B process
            described in this guide.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Quick reference: Anexo B checklist
          </h2>
          <div className="bg-gray-50 rounded-xl p-5 mb-8">
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2"><span className="text-verde-600 mt-0.5">&#9744;</span> Gather all recibos verdes issued in 2025</li>
              <li className="flex items-start gap-2"><span className="text-verde-600 mt-0.5">&#9744;</span> Calculate total gross income (sum of all recibos)</li>
              <li className="flex items-start gap-2"><span className="text-verde-600 mt-0.5">&#9744;</span> Check e-Fatura for professional expense classification</li>
              <li className="flex items-start gap-2"><span className="text-verde-600 mt-0.5">&#9744;</span> Get total SS contributions from Seguranca Social Direta</li>
              <li className="flex items-start gap-2"><span className="text-verde-600 mt-0.5">&#9744;</span> Note withholding tax from Portuguese clients</li>
              <li className="flex items-start gap-2"><span className="text-verde-600 mt-0.5">&#9744;</span> Log in to Portal das Financas &rarr; IRS &rarr; Entregar Declaracao</li>
              <li className="flex items-start gap-2"><span className="text-verde-600 mt-0.5">&#9744;</span> Add Anexo B to your Modelo 3</li>
              <li className="flex items-start gap-2"><span className="text-verde-600 mt-0.5">&#9744;</span> Fill Quadro 1 (simplified regime)</li>
              <li className="flex items-start gap-2"><span className="text-verde-600 mt-0.5">&#9744;</span> Fill Quadro 4A Campo 402 (service income)</li>
              <li className="flex items-start gap-2"><span className="text-verde-600 mt-0.5">&#9744;</span> Fill Quadro 5 (withholding tax, if applicable)</li>
              <li className="flex items-start gap-2"><span className="text-verde-600 mt-0.5">&#9744;</span> Fill Quadro 6 (social security deduction)</li>
              <li className="flex items-start gap-2"><span className="text-verde-600 mt-0.5">&#9744;</span> Validate and submit</li>
              <li className="flex items-start gap-2"><span className="text-verde-600 mt-0.5">&#9744;</span> Save the confirmation PDF</li>
            </ul>
          </div>
        </div>

        <RelatedGuides current="/guide/anexo-b-irs-freelancer-portugal" />
      </article>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        <p>&copy; 2026 VerdeDesk. Made for freelancers in Portugal.</p>
      </footer>
    </div>
  )
}

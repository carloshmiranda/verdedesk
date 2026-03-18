import { Link } from 'react-router-dom'
import { useSEO } from '../lib/useSEO'

export default function GuideIrsTaxReturn() {
  useSEO({
    title: 'How to File Your IRS Tax Return in Portugal as a Freelancer (2026) | VerdeDesk',
    description: 'Step-by-step English guide to filing your annual IRS tax return in Portugal. Covers Category B income, the simplified regime, tax brackets, deadlines (April 1 - June 30, 2026), and common mistakes.',
    canonical: 'https://verdedesk.vercel.app/guide/irs-tax-return-freelancer-portugal',
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

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-sm text-verde-600 font-medium mb-4">Guide for expat freelancers</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
          How to File Your IRS Tax Return in Portugal as a Freelancer (2026 Step-by-Step Guide in English)
        </h1>
        <p className="text-gray-500 text-sm mb-12">
          Updated March 2026. Covers filing deadlines (April 1 — June 30, 2026), the simplified regime, and Category B income.
        </p>

        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Every freelancer in Portugal must file an annual IRS tax return — even if all your
            clients are outside Portugal. The filing window for 2025 income opens April 1, 2026 and
            closes June 30, 2026. The entire process is on Portal das Financas, in Portuguese. This
            guide walks you through it in English.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            What is the IRS?
          </h2>
          <p className="text-gray-700 mb-4">
            IRS (<em>Imposto sobre o Rendimento das Pessoas Singulares</em>) is Portugal's personal
            income tax. It applies to all residents and to non-residents with Portuguese-source
            income. As a freelancer, your income falls under <strong>Category B</strong> — income
            from self-employment and professional activities.
          </p>
          <p className="text-gray-700 mb-4">
            IRS is separate from social security (Seguranca Social) and VAT (IVA). You file IRS
            annually; social security is quarterly; VAT depends on your regime.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Key deadlines for 2026
          </h2>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>April 1 — June 30, 2026:</strong> Filing window for 2025 income</li>
            <li><strong>July 2026:</strong> Tax assessment notice (<em>nota de liquidacao</em>)</li>
            <li><strong>August 31, 2026:</strong> Payment deadline (if you owe additional tax)</li>
            <li><strong>Installments:</strong> You can split the payment into 3 installments — July, September, December</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Missing the June 30 deadline incurs an automatic penalty. There is no extension process.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Simplified regime vs organized accounting
          </h2>
          <p className="text-gray-700 mb-4">
            Most freelancers in Portugal operate under the <strong>simplified regime</strong> (<em>regime
            simplificado</em>). Under this regime:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>Only <strong>75%</strong> of your Category B income is taxable</li>
            <li>The remaining 25% is a presumed expense deduction</li>
            <li>Of that 25%, <strong>10% is automatic</strong> — no receipts needed</li>
            <li>The other <strong>15% must be backed by real expense invoices</strong> (known as the <em>despesas de atividade</em> requirement)</li>
          </ul>
          <p className="text-gray-700 mb-4">
            If you do not have enough documented expenses to cover that 15%, the difference is added
            back to your taxable income. This is why many freelancers are surprised by a higher
            tax bill — they assumed the full 25% deduction was automatic.
          </p>
          <p className="text-gray-700 mb-4">
            The alternative is <strong>organized accounting</strong> (<em>contabilidade
            organizada</em>), which requires hiring a certified accountant (TOC) and allows you to
            deduct all real business expenses. This is typically only worthwhile if your expenses
            exceed 25% of income.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Tax rates for freelancers (2025 income)
          </h2>
          <p className="text-gray-700 mb-4">
            Portugal uses progressive IRS tax brackets. After applying the simplified regime
            coefficient (75% of income), your taxable amount is taxed at these rates:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left text-gray-700 border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-2 pr-4 font-semibold">Taxable income</th>
                  <th className="py-2 font-semibold">Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">Up to EUR 7,703</td>
                  <td className="py-2">13%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">EUR 7,703 — 11,623</td>
                  <td className="py-2">18%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">EUR 11,623 — 16,472</td>
                  <td className="py-2">23%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">EUR 16,472 — 21,321</td>
                  <td className="py-2">26%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">EUR 21,321 — 27,146</td>
                  <td className="py-2">32.75%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">EUR 27,146 — 39,791</td>
                  <td className="py-2">37%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">EUR 39,791 — 51,997</td>
                  <td className="py-2">43.5%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">EUR 51,997 — 81,199</td>
                  <td className="py-2">45%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">Over EUR 81,199</td>
                  <td className="py-2">48%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-4">
            <strong>NHR 2.0 holders:</strong> If you qualify for the Non-Habitual Resident regime,
            your Category B income may be taxed at a flat 20% rate instead of the progressive
            brackets — a significant difference for higher earners.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Step-by-step: filing your IRS return
          </h2>
          <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-3">
            <li>
              <strong>Log in to Portal das Financas</strong> — use your NIF and password. If you
              have not activated your account, you will need the activation letter sent to your
              fiscal address.
            </li>
            <li>
              <strong>Navigate to IRS filing</strong> — go to <em>Cidadaos &gt; Entregar
              Declaracao &gt; IRS</em>. The portal may pre-fill some fields if you have already
              validated your invoices in <em>e-Fatura</em>.
            </li>
            <li>
              <strong>Select Anexo B</strong> — this is the annex for Category B income (freelance
              income). It captures your total revenue from recibos verdes issued during 2025.
            </li>
            <li>
              <strong>Enter your income</strong> — the portal may auto-populate your total from
              issued recibos verdes. Verify it matches your records. If you had withholding tax
              (<em>retencao na fonte</em>) applied by Portuguese clients, this appears separately.
            </li>
            <li>
              <strong>Validate expenses in e-Fatura</strong> — before filing, go to{' '}
              <em>e-Fatura &gt; Verificar Faturas</em> and categorize your expenses. The 15%
              expense requirement is checked against your validated expense invoices.
            </li>
            <li>
              <strong>Submit and get your reference</strong> — after submitting, you receive a
              reference number. The tax authority processes your return and issues a{' '}
              <em>nota de liquidacao</em> (assessment notice) typically in July.
            </li>
            <li>
              <strong>Pay or receive refund</strong> — if you owe additional tax, pay by August 31
              (or in installments). If you overpaid through withholding, you receive a refund via
              bank transfer.
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Withholding tax (retencao na fonte)
          </h2>
          <p className="text-gray-700 mb-4">
            When you issue recibos verdes to Portuguese companies, they may withhold 25% of your
            payment and remit it directly to the tax authority. This is an advance payment on your
            IRS — it is not an additional tax.
          </p>
          <p className="text-gray-700 mb-4">
            At filing time, the withheld amount is credited against your total IRS liability. If
            your effective tax rate is lower than 25%, you will receive a refund.
          </p>
          <p className="text-gray-700 mb-4">
            Freelancers under Article 53 (VAT exempt) with income under EUR 14,500 can request
            exemption from withholding. This is done via a declaration on Portal das Financas at the
            start of the year.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Common mistakes
          </h2>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>
              <strong>Not validating expenses in e-Fatura.</strong> Your 15% expense deduction
              depends on validated invoices. Unvalidated expenses do not count.
            </li>
            <li>
              <strong>Filing after June 30.</strong> There is no grace period. Late filing incurs
              automatic penalties starting at EUR 25.
            </li>
            <li>
              <strong>Forgetting Anexo B.</strong> Freelance income must go in Anexo B, not the
              main declaration. Omitting it triggers a tax audit.
            </li>
            <li>
              <strong>Not checking the pre-filled data.</strong> The portal pre-fills income from
              issued recibos verdes, but it can miss invoices or double-count amended ones. Always
              verify against your own records.
            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            Still confused about which document to issue?{' '}
            <Link to="/guide/fatura-vs-fatura-recibo-vs-recibo" className="text-verde-600 hover:text-verde-700 underline">
              Read our guide on fatura vs fatura-recibo vs recibo.
            </Link>
            {' '}Need help with the recibo verde process?{' '}
            <Link to="/guide/recibo-verde-english" className="text-verde-600 hover:text-verde-700 underline">
              See our step-by-step recibo verde guide.
            </Link>
          </p>

          {/* CTA */}
          <div className="bg-verde-50 border border-verde-200 rounded-xl p-8 my-12">
            <h3 className="text-xl font-bold text-verde-800 mb-3">
              Know your tax bill before April.
            </h3>
            <p className="text-verde-700 mb-6">
              VerdeDesk tracks your annual income, estimates your IRS liability under the simplified
              regime, and reminds you of the filing deadline. No spreadsheets. No surprises at tax
              time. Launching April 2026.
            </p>
            <Link
              to="/#waitlist"
              className="inline-block px-6 py-3 bg-verde-600 hover:bg-verde-700 text-white font-semibold rounded-lg transition-colors"
            >
              Join the waitlist — first month free
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        <p>&copy; 2026 VerdeDesk. Made for freelancers in Portugal.</p>
      </footer>
    </div>
  )
}

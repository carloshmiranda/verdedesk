import { Link } from 'react-router-dom'
import { useSEO } from '../lib/useSEO'
import { useArticleSchema } from '../lib/useArticleSchema'
import RelatedGuides from '../components/RelatedGuides'

export default function GuideCancelReciboVerde() {
  useSEO({
    title: 'How to Cancel (Annul) a Recibo Verde in Portugal | VerdeDesk',
    description: 'Step-by-step guide to cancelling a recibo verde on Portal das Financas. Covers the annulment process, required reasons, what happens after, and how to avoid common mistakes.',
    canonical: 'https://verdedesk.vercel.app/guide/cancel-recibo-verde-portugal',
  })
  useArticleSchema({
    title: 'How to Cancel (Annul) a Recibo Verde in Portugal',
    description: 'Step-by-step guide to cancelling a recibo verde on Portal das Financas. Covers the annulment process, required reasons, what happens after, and how to avoid common mistakes.',
    url: 'https://verdedesk.vercel.app/guide/cancel-recibo-verde-portugal',
    datePublished: '2026-04-16',
    dateModified: '2026-04-16',
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
          <span className="text-gray-700">Cancel a recibo verde</span>
        </nav>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-sm text-verde-600 font-medium mb-4">VerdeDesk Guide • Invoicing</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
          How to Cancel (Annul) a Recibo Verde in Portugal
        </h1>
        <p className="text-gray-500 text-sm mb-10">
          Updated April 2026. Applies to recibos verdes issued through Portal das Financas under the simplified regime.
        </p>

        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            You issued a recibo verde with the wrong amount, the wrong client details, or for a payment
            that ended up not going through. Now what? In Portugal you cannot delete a fiscal document —
            but you can annul (<em>anular</em>) it. This guide explains how, what happens to the annulled
            document, and what you should do afterward.
          </p>

          {/* Quick answer box */}
          <div className="bg-verde-50 border border-verde-200 rounded-xl p-6 my-8">
            <h3 className="text-base font-bold text-verde-800 mb-3">The short answer</h3>
            <ul className="space-y-2 text-verde-700 text-sm">
              <li><strong>You cannot delete a recibo verde.</strong> All fiscal documents in Portugal are permanent in the AT system.</li>
              <li><strong>You can annul it.</strong> Log in to Portal das Financas → Serviços → Recibos Verdes Eletrónicos → Consultar → find the document → Anular.</li>
              <li><strong>Annulled receipts are marked "ANULADO"</strong> permanently in the AT system. They do not count as income for IRS, SS, or VAT purposes.</li>
              <li><strong>Issue a correct document</strong> immediately after annulling if you still need to bill the client.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Why you can't "delete" a recibo verde
          </h2>
          <p className="text-gray-700 mb-4">
            Every recibo verde issued through Portal das Financas is automatically communicated to the AT
            (Autoridade Tributária e Aduaneira) in real time. The moment you submit the form, the document
            gets a unique serial number and becomes part of the official fiscal record.
          </p>
          <p className="text-gray-700 mb-4">
            Portuguese tax law requires that fiscal documents form an unbroken chain — there can be no
            gaps in the numbering sequence. This is why deletion isn't possible. Instead, the AT system
            provides annulment (<em>anulação</em>): the document is permanently marked as cancelled, but
            remains visible in the system for audit purposes.
          </p>
          <p className="text-gray-700 mb-4">
            This is actually a protection for you as well. If a client ever disputes having received
            a service, your complete document history — including annulled receipts — is available as
            evidence.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Common reasons to annul a recibo verde
          </h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li><strong>Wrong amount:</strong> You entered EUR 1,500 instead of EUR 1,050.</li>
            <li><strong>Wrong client NIF:</strong> You used a generic NIF or made a typo.</li>
            <li><strong>Wrong service description:</strong> You described the wrong activity code or service type.</li>
            <li><strong>Client refused payment:</strong> The project was cancelled after invoicing.</li>
            <li><strong>Duplicate document:</strong> You accidentally issued two receipts for the same payment.</li>
            <li><strong>Wrong VAT treatment:</strong> You charged 23% VAT when the client was VAT-exempt, or vice versa.</li>
            <li><strong>Issued in the wrong month:</strong> The date matters for SS and IRS calculations.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Step-by-step: how to annul a recibo verde on Portal das Financas
          </h2>
          <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-4">
            <li>
              <strong>Log in to Portal das Financas</strong> at portaldasfinancas.gov.pt using your NIF
              and password. If you use a Chave Móvel Digital or Cartão de Cidadão, use those authentication methods.
            </li>
            <li>
              <strong>Navigate to Serviços → Faturação → Recibos Verdes Eletrónicos.</strong>
              In the menu, look for "Consultar" (View/Search). This opens the list of all receipts you have issued.
            </li>
            <li>
              <strong>Find the receipt you want to annul.</strong> You can filter by date range or document number.
              Click on the receipt to open the detail view.
            </li>
            <li>
              <strong>Click "Anular" (Annul).</strong> This button appears at the bottom of the document detail page.
              If you don't see it, the document may already be annulled, or you may not have permission to annul it.
            </li>
            <li>
              <strong>Select a reason for annulment.</strong> The portal will ask you to choose from a list:
              <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                <li><em>Emitido com erro</em> — Issued in error (use this for wrong amounts, wrong NIF, duplicates)</li>
                <li><em>Recusado pelo adquirente</em> — Refused by the client</li>
                <li><em>Acordo entre as partes</em> — Mutual agreement to cancel</li>
              </ul>
              For most expat freelancer situations, "Emitido com erro" is the correct choice.
            </li>
            <li>
              <strong>Confirm the annulment.</strong> The system will ask you to verify the action. Once confirmed,
              the receipt is permanently marked "ANULADO" in the AT system.
            </li>
            <li>
              <strong>Download the annulled document</strong> for your records. The PDF will show the original data
              with a red "ANULADO" watermark. Keep this alongside your active receipts.
            </li>
          </ol>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
            <h3 className="text-sm font-bold text-amber-800 mb-2">Is there a time limit?</h3>
            <p className="text-amber-700 text-sm">
              For recibos verdes issued directly through Portal das Financas, there is no strict 24h or 48h
              annulment window that applies to AT-certified billing software. The AT's own portal allows annulment
              at any time before the IRS filing deadline for that tax year.
            </p>
            <p className="text-amber-700 text-sm mt-2">
              However, annulling a receipt for a prior tax year (e.g., annulling a 2025 receipt in 2026 after
              filing your IRS return) can create complications — you may need to file a corrected IRS return.
              Annul receipts as soon as you identify an error, ideally within the same tax year.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            What happens after annulment
          </h2>
          <p className="text-gray-700 mb-4">
            Once a recibo verde is annulled, it no longer counts for any tax purpose:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li><strong>IRS:</strong> The annulled amount is not included in your Category B income for the year. Only active (non-annulled) receipts count.</li>
            <li><strong>Social security:</strong> The SS contribution base is calculated from your active receipts. Annulled receipts are excluded.</li>
            <li><strong>VAT threshold:</strong> If you're approaching the EUR 15,000 Article 53 threshold, annulled receipts don't count toward it.</li>
            <li><strong>e-Fatura:</strong> Annulled documents are excluded from the e-Fatura system's income tracking.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            The annulled document remains visible in your Portal das Financas history. This is normal and
            expected — it's part of the audit trail. You don't need to take any further action to "clear"
            it from the system.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Issuing a corrected receipt after annulment
          </h2>
          <p className="text-gray-700 mb-4">
            If you annulled a receipt because of an error (wrong amount, wrong client), you typically
            need to issue a new, correct receipt immediately after. The process is identical to issuing
            any new recibo verde:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
            <li>Go to Serviços → Recibos Verdes Eletrónicos → Emitir.</li>
            <li>Fill in the correct amount, client NIF, service description, and VAT treatment.</li>
            <li>Double-check everything before submitting — particularly the client NIF and amount.</li>
            <li>Submit. The new receipt gets its own serial number and is independent of the annulled one.</li>
          </ol>
          <p className="text-gray-700 mb-4">
            If the annulment was because the client refused payment or the project was cancelled, you
            do not need to issue a new receipt. Simply annul the erroneous one and you're done.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            What if you can't find the "Anular" button?
          </h2>
          <p className="text-gray-700 mb-4">
            A few situations where the annulment option may not appear:
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-bold text-sm">!</div>
              <div>
                <p className="font-semibold text-gray-900">The receipt is already annulled</p>
                <p className="text-gray-600 text-sm mt-1">Check the document status. If it already shows "ANULADO", no further action is needed.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-bold text-sm">!</div>
              <div>
                <p className="font-semibold text-gray-900">The document is from a different tax year that's been closed</p>
                <p className="text-gray-600 text-sm mt-1">Very old documents may have restrictions. Contact the AT helpline (217 206 707) for guidance on annulling documents from previous closed tax years.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-bold text-sm">!</div>
              <div>
                <p className="font-semibold text-gray-900">You're looking at the wrong document type</p>
                <p className="text-gray-600 text-sm mt-1">If you issued a fatura-recibo instead of a recibo verde, the annulment process is slightly different (it's in the Faturação section, not Recibos Verdes Eletrónicos).</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-bold text-sm">!</div>
              <div>
                <p className="font-semibold text-gray-900">Browser or session issue</p>
                <p className="text-gray-600 text-sm mt-1">Try logging out and back in. The AT portal is notorious for session timeout issues and stale UI states that a fresh login resolves.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Annulment vs correction: a common misconception
          </h2>
          <p className="text-gray-700 mb-4">
            Some freelancers assume they can "edit" a recibo verde to fix an error. This is not possible.
            Once a fiscal document is issued, it cannot be modified — only annulled and replaced.
          </p>
          <p className="text-gray-700 mb-4">
            Certified billing software (like InvoiceXpress) uses credit notes (<em>notas de crédito</em>)
            to "correct" faturas — but this document type does not exist for recibos verdes. The only
            option for a recibo verde is full annulment followed by a new receipt.
          </p>
          <p className="text-gray-700">
            This is one reason why it's worth double-checking every recibo verde before submitting it,
            particularly the amount, client NIF, and VAT treatment. Mistakes add steps, but they're
            always recoverable through annulment.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            How to avoid needing to annul in the first place
          </h2>
          <p className="text-gray-700 mb-4">
            The most common sources of error on recibos verdes:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li><strong>Wrong amount:</strong> Always enter net income (pre-withholding if applicable), not the gross payment.</li>
            <li><strong>Wrong client NIF:</strong> Ask your client for their Portuguese NIF before issuing. For foreign clients, confirm whether to use a generic NIF or their EU VAT number.</li>
            <li><strong>Wrong VAT treatment:</strong> Portuguese clients below EUR 15,000 threshold = Article 53 exempt. Foreign B2B clients = Article 6.º CIVA (reverse charge). Portuguese VAT-registered clients above threshold = 23% (or reduced rate if applicable).</li>
            <li><strong>Wrong date:</strong> The date on the receipt affects which quarter it falls into for social security. Issue the receipt in the month the service was provided or the payment was received.</li>
            <li><strong>Wrong activity description:</strong> The service description should match your registered activity code (CIRS code).</li>
          </ul>
          <p className="text-gray-700">
            See our guide on{' '}
            <Link to="/guide/recibo-verde-english" className="text-verde-700 hover:underline">
              how to issue a recibo verde in English
            </Link>{' '}
            for a field-by-field walkthrough of the Portal das Financas form.
          </p>

          {/* CTA */}
          <div className="bg-verde-50 border border-verde-200 rounded-xl p-6 my-10">
            <h3 className="text-lg font-bold text-verde-800 mb-2">
              Fewer mistakes with an English-first interface
            </h3>
            <p className="text-verde-700 mb-4">
              VerdeDesk guides you through every field of the recibo verde process in plain English —
              so you understand what you're filling in before you submit. Catching errors before they
              happen is easier than annulling and reissuing.
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
                  <th className="text-left px-4 py-3 font-semibold text-gray-900 border border-gray-200">Question</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-900 border border-gray-200">Answer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3 border border-gray-200">Can I delete a recibo verde?</td>
                  <td className="px-4 py-3 border border-gray-200">No. Fiscal documents in Portugal are permanent in the AT system.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 border border-gray-200">Can I annul a recibo verde?</td>
                  <td className="px-4 py-3 border border-gray-200">Yes. Portal das Financas → Recibos Verdes Eletrónicos → Consultar → select document → Anular.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border border-gray-200">Does an annulled receipt count as income?</td>
                  <td className="px-4 py-3 border border-gray-200">No. Annulled receipts are excluded from IRS income, SS base, and VAT threshold calculations.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 border border-gray-200">Is there a time limit to annul?</td>
                  <td className="px-4 py-3 border border-gray-200">No strict rule for Portal das Financas recibos verdes, but annul promptly — ideally within the same tax year.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border border-gray-200">What reason should I select?</td>
                  <td className="px-4 py-3 border border-gray-200">"Emitido com erro" for mistakes. "Recusado pelo adquirente" if the client refused payment.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 border border-gray-200">Do I need to issue a new receipt after annulling?</td>
                  <td className="px-4 py-3 border border-gray-200">Only if you still need to bill the client. Issue a correct new receipt immediately after annulment.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <RelatedGuides current="/guide/cancel-recibo-verde-portugal" />
      </article>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { useSEO } from '../lib/useSEO'
import { useArticleSchema } from '../lib/useArticleSchema'
import RelatedGuides from '../components/RelatedGuides'

export default function GuideFaturaTypes() {
  useSEO({
    title: 'Fatura vs Fatura-Recibo vs Recibo — Which Document Do You Need? | VerdeDesk',
    description: 'Confused about Portuguese invoice types? This English guide explains the difference between fatura, fatura-recibo, and recibo verde. Learn which document to issue as a freelancer in Portugal.',
    canonical: 'https://verdedesk.vercel.app/guide/fatura-vs-fatura-recibo-vs-recibo',
  })
  useArticleSchema({
    title: 'Fatura vs Fatura-Recibo vs Recibo — Which Document Do You Need?',
    description: 'English guide explaining the difference between Portuguese invoice types for freelancers.',
    url: 'https://verdedesk.vercel.app/guide/fatura-vs-fatura-recibo-vs-recibo',
    datePublished: '2026-03-18',
    dateModified: '2026-03-18',
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
          Fatura vs Fatura-Recibo vs Recibo Verde: Which Invoice Do You Need in Portugal?
        </h1>
        <p className="text-gray-500 text-sm mb-12">
          Updated March 2026. The most common source of confusion for English-speaking freelancers on Portal das Financas.
        </p>

        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Portal das Financas offers several document types, all in Portuguese, with no explanation
            of when to use which. Pick the wrong one and you could end up with tax mismatches, missing
            income declarations, or duplicate reporting. Here is the plain-English breakdown.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            The three document types, explained
          </h2>

          {/* Comparison table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 font-semibold text-gray-900">Document</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">What it means</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">When to use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Fatura</td>
                  <td className="px-4 py-3 text-gray-700">Invoice only. Declares you provided a service and are owed payment. Does not confirm payment was received.</td>
                  <td className="px-4 py-3 text-gray-700">When you invoice a client but have not been paid yet. Common for B2B with payment terms (net 30, etc.).</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Recibo</td>
                  <td className="px-4 py-3 text-gray-700">Receipt only. Confirms payment was received for a previously issued fatura.</td>
                  <td className="px-4 py-3 text-gray-700">When you receive payment for an invoice you already issued as a fatura. Pairs with the original fatura.</td>
                </tr>
                <tr className="bg-verde-50">
                  <td className="px-4 py-3 font-medium text-verde-800">Fatura-Recibo</td>
                  <td className="px-4 py-3 text-verde-700">Invoice + receipt combined. Declares the service AND confirms payment in one document.</td>
                  <td className="px-4 py-3 text-verde-700">When you are paid immediately (or already have been paid). This is the "recibo verde" most freelancers need.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Which one do most freelancers need?
          </h2>
          <p className="text-gray-700 mb-4">
            If you are a freelancer paid by international clients (the typical D8 visa situation), you
            almost always want a <strong>fatura-recibo</strong>. This is the "recibo verde" — the green
            receipt. It combines the invoice and the payment confirmation into a single document.
          </p>
          <p className="text-gray-700 mb-4">
            The confusion arises because Portal das Financas presents all three options in a dropdown
            with no explanation. The labels are in Portuguese, and selecting the wrong type creates a
            mismatch in your tax records:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>Issue a <strong>fatura</strong> but never follow up with a <strong>recibo</strong>? The tax authority sees an unpaid invoice — potential audit trigger.</li>
            <li>Issue a <strong>recibo</strong> without a matching <strong>fatura</strong>? You have a receipt for money with no corresponding invoice — another red flag.</li>
            <li>Issue a <strong>fatura-recibo</strong> when you should have issued a <strong>fatura</strong>? You declared payment received before you actually got paid — tax liability on income you do not have yet.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            When to use fatura (invoice only)
          </h2>
          <p className="text-gray-700 mb-4">
            Use a standalone fatura when:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>You have a Portuguese corporate client with payment terms (net 15, net 30)</li>
            <li>You want to invoice now but will receive payment later</li>
            <li>Your contract requires invoicing before payment</li>
          </ul>
          <p className="text-gray-700 mb-4">
            When the payment arrives, you then issue a <strong>recibo</strong> linked to the original
            fatura. Portal das Financas will ask for the fatura number to link them.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            When to use fatura-recibo (the green receipt)
          </h2>
          <p className="text-gray-700 mb-4">
            Use a fatura-recibo when:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>You already received payment (most common for international freelancers paid via Wise, PayPal, or bank transfer)</li>
            <li>You are paid on delivery or on a recurring schedule</li>
            <li>You have no reason to separate the invoice from the payment confirmation</li>
          </ul>
          <p className="text-gray-700 mb-8">
            This is by far the most common document type for D8 visa freelancers working with
            international clients. If you are unsure, this is almost certainly what you need.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Common mistakes
          </h2>
          <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
            <li><strong>Issuing a fatura-recibo before getting paid:</strong> You are declaring income you have not received. This creates a tax liability immediately.</li>
            <li><strong>Issuing only a fatura and forgetting the recibo:</strong> At year-end, the tax authority may flag unpaid invoices and assume you are underreporting income.</li>
            <li><strong>Issuing a recibo for a payment that was never invoiced:</strong> This creates orphaned receipts with no matching invoice — a compliance gap.</li>
            <li><strong>Using the wrong document type because the dropdown is in Portuguese:</strong> This is the most common mistake. The dropdown says "Fatura", "Fatura-Recibo", or "Recibo" with zero context.</li>
          </ul>

          {/* CTA */}
          <div className="bg-verde-50 border border-verde-200 rounded-xl p-8 my-12">
            <h3 className="text-xl font-bold text-verde-800 mb-3">
              VerdeDesk picks the right document type for you.
            </h3>
            <p className="text-verde-700 mb-4">
              Tell us if you have been paid or not. VerdeDesk selects the correct document type,
              fills in the Portuguese fields, and issues the receipt — all in English.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/#waitlist"
                className="inline-block px-6 py-3 bg-verde-600 hover:bg-verde-700 text-white font-semibold rounded-lg transition-colors text-center"
              >
                Join the waitlist — first month free
              </Link>
              <Link
                to="/guide/recibo-verde-english"
                className="inline-block px-6 py-3 border border-verde-300 text-verde-700 hover:bg-verde-50 font-medium rounded-lg transition-colors text-center"
              >
                Full recibo verde guide
              </Link>
            </div>
          </div>

          <RelatedGuides current="/guide/fatura-vs-fatura-recibo-vs-recibo" />
        </div>
      </article>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        <p>&copy; 2026 VerdeDesk. Made for freelancers in Portugal.</p>
      </footer>
    </div>
  )
}

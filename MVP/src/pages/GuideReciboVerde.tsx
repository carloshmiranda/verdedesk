import { Link } from 'react-router-dom'

export default function GuideReciboVerde() {
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
          How to Issue a Recibo Verde in English: Complete 2026 Guide for D8 Visa Holders
        </h1>
        <p className="text-gray-500 text-sm mb-12">
          Updated March 2026. Covers the QES mandate, VAT threshold, and Seguranca Social obligations.
        </p>

        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            If you are a freelancer in Portugal on a D8 digital nomad visa, you are required to issue{' '}
            <strong>recibos verdes</strong> (green receipts) through the Portal das Financas for every
            payment you receive. The entire process is in Portuguese with no English option. This guide
            walks you through every step in plain English.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            What is a recibo verde?
          </h2>
          <p className="text-gray-700 mb-4">
            A recibo verde (literally "green receipt") is the official invoice that self-employed workers
            (<em>trabalhadores independentes</em>) in Portugal must issue for each client payment. It is
            not optional. Every freelancer registered with the Portuguese tax authority must issue recibos
            verdes through the government portal — Portal das Financas.
          </p>
          <p className="text-gray-700 mb-4">
            Unlike invoices you might create in tools like FreshBooks or Wave, a recibo verde is a
            government-issued fiscal document. It is your proof of income for tax purposes, and the
            Portuguese tax authority (Autoridade Tributaria) uses it to calculate your IRS (income tax)
            and Seguranca Social (social security) contributions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Step 1: Get your NIF (tax identification number)
          </h2>
          <p className="text-gray-700 mb-4">
            Before you can do anything tax-related in Portugal, you need a NIF (<em>Numero de
            Identificacao Fiscal</em>). This is your Portuguese tax ID. If you are a non-EU citizen on a
            D8 visa, you will also need a fiscal representative until you become a tax resident.
          </p>
          <p className="text-gray-700 mb-4">
            Getting a NIF can take 2-4 weeks. You can apply at a local Financas office or through a
            lawyer. Once you have it, you can register on Portal das Financas.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Step 2: Register your activity on Portal das Financas
          </h2>
          <p className="text-gray-700 mb-4">
            Before issuing your first recibo verde, you must register your freelance activity. This
            involves selecting a CAE/CIRS activity code from a dropdown menu — entirely in Portuguese.
            Choosing the wrong code can place you in the wrong tax bracket or trigger unexpected VAT
            obligations.
          </p>
          <p className="text-gray-700 mb-4">
            Common activity codes for digital workers include:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>6201</strong> — Computer programming activities</li>
            <li><strong>6202</strong> — IT consultancy activities</li>
            <li><strong>7311</strong> — Advertising agencies (for marketing freelancers)</li>
            <li><strong>9003</strong> — Other artistic and literary creation (for designers, writers)</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Step 3: Issue your recibo verde
          </h2>
          <p className="text-gray-700 mb-4">
            The recibo verde form on Portal das Financas has 12+ fields, all in Portuguese. The key
            fields you need to fill correctly:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>NIF do adquirente</strong> — your client's tax number (or "consumidor final" for international clients)</li>
            <li><strong>Descricao</strong> — description of the service provided</li>
            <li><strong>Valor base</strong> — the base amount before any taxes</li>
            <li><strong>IVA (VAT)</strong> — whether to charge 23% VAT (depends on your exemption status)</li>
            <li><strong>Retencao na fonte</strong> — withholding tax rate (usually 25% for services to Portuguese companies)</li>
            <li><strong>Regime</strong> — simplified or organized accounting regime</li>
          </ul>
          <p className="text-gray-700 mb-4">
            One wrong selection can have real financial consequences. Selecting the wrong IVA option can
            mean you owe 23% VAT on income you have already received and spent.
          </p>
          <p className="text-gray-700 mb-4">
            Confused about which document type to pick? Read our guide:{' '}
            <Link to="/guide/fatura-vs-fatura-recibo-vs-recibo" className="text-verde-600 hover:text-verde-700 underline">
              Fatura vs Fatura-Recibo vs Recibo — which one do you need?
            </Link>
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            The EUR 15,000 VAT threshold trap
          </h2>
          <p className="text-gray-700 mb-4">
            Freelancers earning under EUR 15,000 per calendar year are exempt from charging VAT under
            Article 53 of the CIVA. However, the moment your cumulative invoices cross EUR 15,000, you
            must:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
            <li>Register for IVA (VAT) immediately</li>
            <li>Charge 23% VAT on the invoice that crosses the threshold</li>
            <li>Start charging VAT on all subsequent invoices</li>
            <li>File quarterly VAT declarations</li>
          </ol>
          <p className="text-gray-700 mb-4">
            Most freelancers do not track their cumulative income against this threshold until it is too
            late. Portal das Financas does not warn you — it simply expects you to know.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Seguranca Social: quarterly obligations
          </h2>
          <p className="text-gray-700 mb-4">
            Every quarter, freelancers must declare their income to Seguranca Social (Portuguese social
            security) and pay a contribution based on their earnings. The contribution rate is
            approximately 21.4% of your declared income, though a coefficient of 0.70 is applied first
            (meaning you pay roughly 14.98% of gross income).
          </p>
          <p className="text-gray-700 mb-4">
            Missing the declaration deadline triggers automatic penalties. New freelancers are exempt
            for their first 12 months of activity.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            QES mandate (January 2026)
          </h2>
          <p className="text-gray-700 mb-4">
            From January 2026, Portugal requires a Qualified Electronic Signature (QES) on invoices
            issued outside Portal das Financas. A QES is a specific cryptographic certificate — not a
            simple digital signature or email confirmation. If you use any third-party invoicing tool,
            verify it is QES-compliant or your invoices may be non-compliant.
          </p>
          <p className="text-gray-700 mb-4">
            Issuing directly through Portal das Financas is automatically compliant. This is one reason
            VerdeDesk wraps the official portal rather than replacing it.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            NHR 2.0 and D8 visa tax considerations
          </h2>
          <p className="text-gray-700 mb-4">
            The Non-Habitual Resident (NHR) regime, relaunched as NHR 2.0, offers favorable tax rates
            for qualifying residents. If you are a D8 visa holder, you may be eligible for NHR 2.0,
            which can significantly reduce your Portuguese tax burden for the first 10 years.
          </p>
          <p className="text-gray-700 mb-8">
            However, NHR status does not exempt you from issuing recibos verdes or from Seguranca Social
            contributions. The green receipt workflow remains the same regardless of your tax regime.
          </p>

          {/* CTA */}
          <div className="bg-verde-50 border border-verde-200 rounded-xl p-8 my-12">
            <h3 className="text-xl font-bold text-verde-800 mb-3">
              Skip the Portuguese. Issue recibos verdes in English.
            </h3>
            <p className="text-verde-700 mb-6">
              VerdeDesk is building an English-first interface for the entire green receipt workflow —
              plain-English field explanations, income tracking vs the EUR 15k VAT threshold, and
              quarterly Seguranca Social reminders. Launching April 2026.
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

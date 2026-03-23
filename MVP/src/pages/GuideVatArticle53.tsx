import { Link } from 'react-router-dom'
import { useSEO } from '../lib/useSEO'
import { useArticleSchema } from '../lib/useArticleSchema'
import RelatedGuides from '../components/RelatedGuides'
import IrsFilingBanner from '../components/IrsFilingBanner'

export default function GuideVatArticle53() {
  useSEO({
    title: 'Portugal VAT Exemption Article 53 (2026) — EUR 15,000 Threshold Explained | VerdeDesk',
    description: 'Complete English guide to Portugal VAT exemption under Article 53 for freelancers. Covers the EUR 15,000 and EUR 18,750 thresholds, 2026 rule changes, and what happens when you cross the limit.',
    canonical: 'https://verdedesk.vercel.app/guide/vat-exemption-article-53-portugal',
  })
  useArticleSchema({
    title: 'Portugal VAT Exemption Article 53 (2026) — EUR 15,000 Threshold Explained',
    description: 'Complete English guide to Portugal VAT exemption under Article 53 for freelancers.',
    url: 'https://verdedesk.vercel.app/guide/vat-exemption-article-53-portugal',
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

      {/* IRS Filing Season Banner */}
      <IrsFilingBanner />

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-sm text-verde-600 font-medium mb-4">Guide for expat freelancers</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
          Portugal VAT Exemption (Article 53) in 2026: The EUR 15,000 Threshold Explained in English
        </h1>
        <p className="text-gray-500 text-sm mb-12">
          Updated March 2026. Covers the new 2026 rules, the EUR 18,750 trap, and what happens when you cross the threshold.
        </p>

        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            If you are a freelancer in Portugal earning under EUR 15,000 per year, you are probably
            exempt from charging VAT under Article 53 of the CIVA. But the 2026 rules tightened
            significantly — and one wrong invoice can trigger a VAT liability you never collected.
            This guide explains everything in plain English.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            What is Article 53 VAT exemption?
          </h2>
          <p className="text-gray-700 mb-4">
            Article 53 of Portugal's VAT Code (CIVA) allows small businesses and freelancers to
            issue invoices <strong>without charging VAT</strong> if their annual turnover stays
            below EUR 15,000. This means your clients pay only your fee — no 23% IVA on top.
          </p>
          <p className="text-gray-700 mb-4">
            In exchange, you cannot deduct VAT on your own business expenses. For most freelancers
            whose expenses are low (laptop, coworking, software), the exemption saves more money
            than it costs.
          </p>
          <p className="text-gray-700 mb-4">
            When you register your freelance activity on Portal das Financas, you choose whether to
            register under Article 53. If your projected income is under EUR 15,000, the portal
            defaults to the exemption. Your recibos verdes will include the line:{' '}
            <em>"IVA - regime de isencao — artigo 53.o do CIVA"</em>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            What changed in 2026?
          </h2>
          <p className="text-gray-700 mb-4">
            The Portuguese government approved new VAT rules in March 2025 that took effect from
            January 2026. The key changes for freelancers:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>
              <strong>VAT registration deadline moved to January 1.</strong> If you exceeded
              EUR 15,000 in the previous year but stayed below EUR 18,750, you must register for
              VAT from January 1, 2026 — not February 1 as before. This catches freelancers who
              assumed they had until February.
            </li>
            <li>
              <strong>Non-residents lose the exemption.</strong> Self-employed individuals who are
              not tax residents in Portugal can no longer claim Article 53, even if their turnover
              is under EUR 15,000. If you hold a D8 visa but have not yet established tax residency,
              this may affect you.
            </li>
            <li>
              <strong>Only Portuguese-territory income counts.</strong> The EUR 15,000 threshold
              applies only to turnover generated in Portuguese territory. Invoices issued to clients
              outside Portugal do not count toward the limit.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            The EUR 18,750 trap
          </h2>
          <p className="text-gray-700 mb-4">
            There are actually <strong>two thresholds</strong>, and most guides only mention one:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>
              <strong>EUR 15,000</strong> — if your annual turnover exceeds this but stays below
              EUR 18,750, you must register for VAT <strong>starting the following January</strong>.
              You do not need to charge VAT retroactively on invoices already issued that year.
            </li>
            <li>
              <strong>EUR 18,750</strong> — if your turnover exceeds this amount, you must charge
              VAT <strong>immediately on the invoice that crosses the threshold</strong>. No grace
              period. No waiting until next year. You must also file an alteration declaration
              (<em>declaracao de alteracoes</em>) to register as a VAT taxpayer.
            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            This is the trap: a freelancer at EUR 17,000 thinks they are fine because they are under
            EUR 18,750. They are — for now. But they will need to be VAT-registered from January 1
            of next year. And if one more invoice pushes them past EUR 18,750, they owe 23% VAT on
            that specific invoice retroactively.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            What happens when you cross the threshold?
          </h2>
          <p className="text-gray-700 mb-4">
            Once you are required to charge VAT, everything changes:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
            <li>All new invoices must include 23% IVA</li>
            <li>You must file quarterly VAT declarations (every 3 months)</li>
            <li>You can now deduct VAT on business expenses</li>
            <li>Your recibos verdes format changes — no more Article 53 exemption line</li>
            <li>You must submit the VAT alteration on Portal das Financas</li>
          </ol>
          <p className="text-gray-700 mb-4">
            The Portal das Financas does not warn you when you approach the threshold. There is no
            notification, no pop-up, no email. You are expected to track your cumulative income
            yourself.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            How does this affect D8 visa holders?
          </h2>
          <p className="text-gray-700 mb-4">
            Most D8 visa holders work for foreign clients. Under the 2026 rules, income from clients
            outside Portugal does not count toward the EUR 15,000 threshold. If all your clients are
            outside Portugal, you may remain Article 53 exempt regardless of your total income.
          </p>
          <p className="text-gray-700 mb-4">
            However, you must still be a <strong>Portuguese tax resident</strong> to claim the
            exemption. If you have not yet established residency (for example, you are still waiting
            for your NIF or your tax domicile registration), you may not qualify.
          </p>
          <p className="text-gray-700 mb-4">
            New to the recibo verde process?{' '}
            <Link to="/guide/recibo-verde-english" className="text-verde-600 hover:text-verde-700 underline">
              Read our step-by-step guide to issuing a recibo verde in English.
            </Link>
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            How to check your current status
          </h2>
          <p className="text-gray-700 mb-4">
            On Portal das Financas, go to <em>Consultar Atividade</em> (consult activity) to check
            whether you are currently registered under Article 53 or under the normal VAT regime.
            Your registration shows your current status, activity code, and the date you registered.
          </p>
          <p className="text-gray-700 mb-4">
            To track your cumulative income, you can check your issued recibos verdes under{' '}
            <em>Faturas e Recibos Verdes &gt; Consultar</em>. Add up the <em>Valor base</em> column
            across all invoices in the current calendar year.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Common mistakes
          </h2>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>
              <strong>Not tracking cumulative income.</strong> The portal does not alert you. If you
              cross EUR 18,750 without noticing, you owe VAT you never charged.
            </li>
            <li>
              <strong>Including foreign income in the threshold.</strong> Only Portuguese-territory
              income counts. Many freelancers register for VAT unnecessarily.
            </li>
            <li>
              <strong>Assuming February 1 deadline.</strong> As of 2026, the deadline is January 1.
              If you earned EUR 15,001-18,750 last year and waited until February, you are already late.
            </li>
            <li>
              <strong>Confusing document types.</strong> VAT rules apply to all fiscal documents.
              See our guide on{' '}
              <Link to="/guide/fatura-vs-fatura-recibo-vs-recibo" className="text-verde-600 hover:text-verde-700 underline">
                fatura vs fatura-recibo vs recibo
              </Link>{' '}
              to understand which document type you need.
            </li>
          </ul>

          {/* CTA */}
          <div className="bg-verde-50 border border-verde-200 rounded-xl p-8 my-12">
            <h3 className="text-xl font-bold text-verde-800 mb-3">
              Track your VAT threshold automatically.
            </h3>
            <p className="text-verde-700 mb-6">
              VerdeDesk monitors your cumulative income against the EUR 15,000 and EUR 18,750
              thresholds in real time. No more manual spreadsheet tracking. Get warned before you
              cross — not after. Launching April 2026.
            </p>
            <Link
              to="/#waitlist"
              className="inline-block px-6 py-3 bg-verde-600 hover:bg-verde-700 text-white font-semibold rounded-lg transition-colors"
            >
              Join the waitlist — first month free
            </Link>
          </div>

          <RelatedGuides current="/guide/vat-exemption-article-53-portugal" />
        </div>
      </article>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        <p>&copy; 2026 VerdeDesk. Made for freelancers in Portugal.</p>
      </footer>
    </div>
  )
}

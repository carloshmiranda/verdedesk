import { Link } from 'react-router-dom'
import { useSEO } from '../lib/useSEO'
import { useArticleSchema } from '../lib/useArticleSchema'
import RelatedGuides from '../components/RelatedGuides'
import IrsFilingBanner from '../components/IrsFilingBanner'

export default function GuideSocialSecurity() {
  useSEO({
    title: 'Portugal Social Security for Freelancers (2026) — Rates, Deadlines, Exemption | VerdeDesk',
    description: 'English guide to Seguranca Social for self-employed workers in Portugal. Covers contribution rates (21.4%), quarterly declaration deadlines, the 12-month exemption, and payment schedule.',
    canonical: 'https://verdedesk.vercel.app/guide/social-security-freelancer-portugal',
  })
  useArticleSchema({
    title: 'Portugal Social Security for Freelancers (2026) — Rates, Deadlines, Exemption',
    description: 'English guide to Seguranca Social for self-employed workers in Portugal.',
    url: 'https://verdedesk.vercel.app/guide/social-security-freelancer-portugal',
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
          Portugal Social Security for Freelancers: Quarterly Declarations, Rates, and the 12-Month Exemption (2026)
        </h1>
        <p className="text-gray-500 text-sm mb-12">
          Updated March 2026. Covers Seguranca Social contributions, quarterly reporting deadlines, and first-year exemption rules.
        </p>

        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Every freelancer in Portugal must pay into Seguranca Social — the Portuguese social
            security system. The rules are different from employment contributions, the deadlines
            are quarterly, and the entire system is in Portuguese. This guide explains your
            obligations in plain English.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Who must contribute?
          </h2>
          <p className="text-gray-700 mb-4">
            If you are registered as a <em>trabalhador independente</em> (self-employed worker) in
            Portugal and issue recibos verdes, you are obligated to contribute to Seguranca Social.
            This applies to Portuguese citizens, EU nationals, and non-EU residents on D8 or other
            work visas.
          </p>
          <p className="text-gray-700 mb-4">
            The only exception is your first 12 months. After that, contributions are mandatory.
            There is no opt-out.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            The 12-month exemption
          </h2>
          <p className="text-gray-700 mb-4">
            New freelancers in Portugal are <strong>automatically exempt</strong> from social
            security contributions for their first 12 months of registered activity. This exemption
            starts from the date you open your freelance activity on Portal das Financas.
          </p>
          <p className="text-gray-700 mb-4">
            During this period:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>You do not pay monthly contributions</li>
            <li>You <strong>must still submit quarterly income declarations</strong> — even with zero income</li>
            <li>The exemption applies automatically; you do not need to request it</li>
            <li>After 12 months, your first contribution is calculated based on the income declared during the exemption period</li>
          </ul>
          <p className="text-gray-700 mb-4">
            This is a common surprise: freelancers assume the exemption means they have no
            obligations at all. In reality, missing a quarterly declaration during the exemption
            period can trigger penalties.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            How much do you pay?
          </h2>
          <p className="text-gray-700 mb-4">
            The contribution rate for self-employed workers is <strong>21.4%</strong>, but it is not
            applied to your gross income directly. Instead:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
            <li>Take your quarterly income (sum of 3 months of recibos verdes)</li>
            <li>Multiply by <strong>0.70</strong> (the coefficient for service providers)</li>
            <li>Divide by 3 to get your monthly contribution base</li>
            <li>Apply the 21.4% rate to get your monthly contribution</li>
          </ol>
          <p className="text-gray-700 mb-4">
            <strong>Example:</strong> If you earned EUR 6,000 in Q1 (January-March):
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>EUR 6,000 x 0.70 = EUR 4,200 (relevant income)</li>
            <li>EUR 4,200 / 3 = EUR 1,400 (monthly base)</li>
            <li>EUR 1,400 x 21.4% = EUR 299.60 per month</li>
          </ul>
          <p className="text-gray-700 mb-4">
            The effective rate on gross income is approximately <strong>15%</strong>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Quarterly declaration deadlines
          </h2>
          <p className="text-gray-700 mb-4">
            You must declare your income to Seguranca Social four times a year. The deadlines are
            fixed:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left text-gray-700 border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-2 pr-4 font-semibold">Declaration period</th>
                  <th className="py-2 pr-4 font-semibold">Income covered</th>
                  <th className="py-2 font-semibold">Deadline</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">Q4 of previous year</td>
                  <td className="py-2 pr-4">October — December</td>
                  <td className="py-2">Last day of January</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">Q1</td>
                  <td className="py-2 pr-4">January — March</td>
                  <td className="py-2">Last day of April</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">Q2</td>
                  <td className="py-2 pr-4">April — June</td>
                  <td className="py-2">Last day of July</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">Q3</td>
                  <td className="py-2 pr-4">July — September</td>
                  <td className="py-2">Last day of October</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-4">
            Based on each declaration, Seguranca Social calculates your monthly contribution for the
            following quarter. Payments are due between the <strong>10th and 20th of each month</strong>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Where to submit
          </h2>
          <p className="text-gray-700 mb-4">
            Declarations are submitted on <em>Seguranca Social Direta</em> (the online portal) — a
            separate website from Portal das Financas. You need your NISS (social security number),
            which is different from your NIF (tax number). The portal is entirely in Portuguese.
          </p>
          <p className="text-gray-700 mb-4">
            To submit: log in to Seguranca Social Direta, navigate to{' '}
            <em>Emprego &gt; Trabalhadores Independentes &gt; Declaracao Trimestral</em>, and enter
            your income for the quarter.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            What do you get for your contributions?
          </h2>
          <p className="text-gray-700 mb-4">
            Social security contributions are not just a tax — they give you access to Portuguese
            social benefits:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>Unemployment benefits (under certain conditions)</li>
            <li>Sickness allowance</li>
            <li>Parental leave benefits</li>
            <li>Family allowance</li>
            <li>Disability benefits</li>
            <li>Retirement pension</li>
          </ul>
          <p className="text-gray-700 mb-4">
            For D8 visa holders planning to stay long-term, these contributions count toward future
            pension rights in Portugal and may be transferable under bilateral social security
            agreements.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Common mistakes
          </h2>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>
              <strong>Skipping declarations during the exemption period.</strong> You must declare
              even when exempt. Penalties apply for missed declarations.
            </li>
            <li>
              <strong>Confusing NIF and NISS.</strong> Social security uses your NISS, not your NIF.
              These are different numbers managed by different systems.
            </li>
            <li>
              <strong>Missing the payment window.</strong> Contributions must be paid between the
              10th and 20th of each month. Paying on the 21st incurs a penalty.
            </li>
            <li>
              <strong>Not budgeting for the post-exemption jump.</strong> After 12 months of zero
              contributions, suddenly owing ~15% of gross income surprises many freelancers.
            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            Need help with the recibo verde side?{' '}
            <Link to="/guide/recibo-verde-english" className="text-verde-600 hover:text-verde-700 underline">
              Read our step-by-step guide to issuing a recibo verde in English.
            </Link>
          </p>

          {/* CTA */}
          <div className="bg-verde-50 border border-verde-200 rounded-xl p-8 my-12">
            <h3 className="text-xl font-bold text-verde-800 mb-3">
              Never miss a quarterly deadline.
            </h3>
            <p className="text-verde-700 mb-6">
              VerdeDesk tracks your quarterly Seguranca Social deadlines, calculates your estimated
              contribution based on your recibos verdes income, and sends reminders before each
              deadline. No more missed declarations. Launching April 2026.
            </p>
            <Link
              to="/#waitlist"
              className="inline-block px-6 py-3 bg-verde-600 hover:bg-verde-700 text-white font-semibold rounded-lg transition-colors"
            >
              Join the waitlist — first month free
            </Link>
          </div>

          <RelatedGuides current="/guide/social-security-freelancer-portugal" />
        </div>
      </article>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        <p>&copy; 2026 VerdeDesk. Made for freelancers in Portugal.</p>
      </footer>
    </div>
  )
}

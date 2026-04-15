import { Link } from 'react-router-dom'
import { useSEO } from '../lib/useSEO'
import { useArticleSchema } from '../lib/useArticleSchema'
import RelatedGuides from '../components/RelatedGuides'

export default function GuideAccountantPortugal() {
  useSEO({
    title: 'Do You Need an Accountant as a Freelancer in Portugal? (2026) | VerdeDesk',
    description: 'When Portuguese law requires a certified accountant, what they cost (€80–200/month), and when the simplified regime lets you go it alone. English guide for expat freelancers.',
    canonical: 'https://verdedesk.vercel.app/guide/accountant-freelancer-portugal',
  })
  useArticleSchema({
    title: 'Do You Need an Accountant as a Freelancer in Portugal? (2026)',
    description: 'When Portuguese law requires a certified accountant, what they cost, and when the simplified regime lets you manage compliance independently.',
    url: 'https://verdedesk.vercel.app/guide/accountant-freelancer-portugal',
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
          <span className="text-gray-700">Accountant for freelancers Portugal</span>
        </nav>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-sm text-verde-600 font-medium mb-4">VerdeDesk Guide • Tax compliance</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
          Do You Need an Accountant as a Freelancer in Portugal? (2026)
        </h1>
        <p className="text-gray-500 text-sm mb-10">
          Updated April 2026. Applies to freelancers registered under the simplified regime (regime simplificado).
        </p>

        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            One of the first questions expats ask after registering as a freelancer in Portugal is: do I
            need to hire an accountant, or can I handle this myself? The answer depends almost entirely on
            which tax regime you are in. For most freelancers on the simplified regime, Portuguese law
            does not require a certified accountant — but there are real tradeoffs to going it alone that
            are worth understanding before you decide.
          </p>

          {/* Quick answer */}
          <div className="bg-verde-50 border border-verde-200 rounded-xl p-6 my-8">
            <h3 className="text-base font-bold text-verde-800 mb-3">Quick answer</h3>
            <ul className="space-y-2 text-verde-700 text-sm">
              <li><strong>Simplified regime (regime simplificado):</strong> No accountant required by law. You can file your own IRS return and manage recibos verdes independently.</li>
              <li><strong>Organized regime (contabilidade organizada):</strong> A certified accountant (contabilista certificado) is legally required. There is no option to go without.</li>
              <li><strong>Income under EUR 200,000/year:</strong> You are likely in the simplified regime and do not need an accountant.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            The two tax regimes for Portuguese freelancers
          </h2>
          <p className="text-gray-700 mb-4">
            Portuguese freelancers (<em>trabalhadores independentes</em>) operate under one of two regimes:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 my-6">
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">Regime simplificado</h3>
              <p className="text-gray-600 text-sm mb-3">The default regime for most freelancers. Tax is calculated based on a fixed percentage of your gross income (75% for most services, 35% for professional services). No need to track every individual expense.</p>
              <p className="text-sm font-medium text-verde-700">Accountant: not legally required</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">Contabilidade organizada</h3>
              <p className="text-gray-600 text-sm mb-3">The organized accounting regime. Tax is calculated on actual net profit (income minus real expenses). Required if you earn over EUR 200,000/year.</p>
              <p className="text-sm font-medium text-red-600">Accountant: legally required</p>
            </div>
          </div>

          <p className="text-gray-700 mb-4">
            When you first register as a freelancer in Portugal (<em>abertura de atividade</em>), you are
            automatically placed in the simplified regime for your first year. You cannot start in the
            organized regime — it requires an explicit switch from year two onwards.
          </p>
          <p className="text-gray-700 mb-4">
            See our detailed comparison in the <Link to="/guide/simplified-vs-organized-regime" className="text-verde-700 hover:underline">simplified vs organized regime guide</Link>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            What does a Portuguese accountant actually do for freelancers?
          </h2>
          <p className="text-gray-700 mb-4">
            A <em>contabilista certificado</em> (certified accountant) in Portugal can handle:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>Annual IRS Modelo 3 filing (the tax return)</li>
            <li>Quarterly social security declarations</li>
            <li>VAT registration and quarterly VAT returns (if you exceed EUR 15,000)</li>
            <li>IES (annual statistical declaration)</li>
            <li>Full bookkeeping if you are in the organized regime</li>
            <li>Advice on switching regimes, deductions, and NHR 2.0 planning</li>
          </ul>
          <p className="text-gray-700 mb-4">
            In the simplified regime, most of this is either automatic or simple enough to do yourself
            with a good guide. The IRS return for a simple Category B income takes about 30 minutes if
            you understand the form — see our <Link to="/guide/irs-tax-return-freelancer-portugal" className="text-verde-700 hover:underline">step-by-step IRS filing guide</Link>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            How much does an accountant cost in Portugal?
          </h2>
          <p className="text-gray-700 mb-4">
            For freelancers in the simplified regime, most accountants in Portugal charge:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-900 border border-gray-200">Service level</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-900 border border-gray-200">Typical monthly cost</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-900 border border-gray-200">What's included</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3 border border-gray-200">Basic (simplified regime)</td>
                  <td className="px-4 py-3 border border-gray-200">€80–€120/month</td>
                  <td className="px-4 py-3 border border-gray-200">IRS return, SS declarations, email support</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 border border-gray-200">Standard (with VAT)</td>
                  <td className="px-4 py-3 border border-gray-200">€100–€160/month</td>
                  <td className="px-4 py-3 border border-gray-200">Above + quarterly VAT returns, IES</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border border-gray-200">Full (organized regime)</td>
                  <td className="px-4 py-3 border border-gray-200">€150–€250/month</td>
                  <td className="px-4 py-3 border border-gray-200">Full bookkeeping, all filings, audit support</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 mb-4">
            Annual cost for a basic accountant in the simplified regime: <strong>EUR 960–1,440</strong> per year.
            That is roughly 1–1.5% of income at EUR 80,000/year — which may be worth it for the peace of
            mind, but is hard to justify if your tax situation is genuinely simple.
          </p>
          <p className="text-gray-700 mb-4">
            Note that accountant quality varies significantly. An English-speaking accountant in Lisbon with
            experience handling NHR 2.0 for expats typically charges at the higher end of the range.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            When an accountant is genuinely worth it
          </h2>
          <p className="text-gray-700 mb-4">
            There are situations where hiring an accountant is the right call even if you are in the
            simplified regime and do not legally need one:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-3">
            <li>
              <strong>Your first year in Portugal.</strong> The rules around the 12-month social security
              exemption, NIF registration timing, and Article 53 VAT threshold are easy to get wrong in
              year one. A single mistake can trigger fines that exceed the cost of an accountant.
            </li>
            <li>
              <strong>You have complex multi-country income.</strong> If you have income from multiple
              countries, a prior pension or investment income, or are a US citizen (FBAR, FATCA), the
              tax return becomes significantly more complex.
            </li>
            <li>
              <strong>You are considering NHR 2.0 (IFICI).</strong> The eligibility rules and application
              process are nuanced. A mistake in the application can cost you years of tax savings.
              Use our <Link to="/tools/nhr-checker" className="text-verde-700 hover:underline">NHR 2.0 checker</Link> first, then consult a specialist if you qualify.
            </li>
            <li>
              <strong>You approach the EUR 200,000 threshold.</strong> Switching to the organized regime
              requires planning. An accountant can help you model whether it is worth switching early
              for the deduction benefits.
            </li>
            <li>
              <strong>You receive an AT audit letter.</strong> If the Autoridade Tributária sends you a
              notice (<em>notificação</em>), get an accountant or tax lawyer immediately. Do not respond
              without professional guidance.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            What you can do yourself in the simplified regime
          </h2>
          <p className="text-gray-700 mb-4">
            For a straightforward simplified regime freelancer — single income source, no investment
            income, no US citizenship complications — the annual compliance workload is manageable:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li><strong>Issue recibos verdes:</strong> Done through Portal das Financas. Takes 5 minutes per receipt.</li>
            <li><strong>Quarterly SS declaration:</strong> 10-minute form, four times a year. See our <Link to="/guide/social-security-freelancer-portugal" className="text-verde-700 hover:underline">social security guide</Link>.</li>
            <li><strong>Annual IRS return (Modelo 3 Anexo B):</strong> Typically 30–60 minutes. The AT pre-fills most of it from your recibos verdes. See our <Link to="/guide/irs-tax-return-freelancer-portugal" className="text-verde-700 hover:underline">IRS filing guide</Link>.</li>
            <li><strong>e-Fatura validation:</strong> Keep digital receipts for expenses. See the <Link to="/guide/e-fatura-portugal-english" className="text-verde-700 hover:underline">e-Fatura guide</Link>.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            The barrier for most English-speaking expats is not the complexity of the task — it is that
            every form and interface is in Portuguese. VerdeDesk exists to solve exactly this problem.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Finding an English-speaking accountant in Portugal
          </h2>
          <p className="text-gray-700 mb-4">
            If you decide to hire an accountant, look for a <em>contabilista certificado</em> with
            experience working with expats and D8 visa holders. Useful starting points:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>The Worktugal and Lisbon Digital Nomads communities on Facebook have accountant recommendations from verified expats</li>
            <li>The Ordem dos Contabilistas Certificados (OCC) directory at occ.pt lists all licensed accountants in Portugal</li>
            <li>Several Lisbon-based firms (Expatax, Bordr, and similar) specialize in expat tax services and are English-speaking</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Avoid using unlicensed "tax consultants" who are not registered with the OCC. Only a licensed
            contabilista certificado can legally sign your tax documents.
          </p>

          {/* CTA */}
          <div className="bg-verde-50 border border-verde-200 rounded-xl p-6 my-10">
            <h3 className="text-lg font-bold text-verde-800 mb-2">
              Handle recibos verdes and income tracking without an accountant
            </h3>
            <p className="text-verde-700 mb-4">
              VerdeDesk is built for simplified regime freelancers who want to stay compliant without
              paying €1,200/year for an accountant. Issue green receipts, track income, and get
              deadline reminders — all in plain English.
            </p>
            <Link
              to="/#waitlist"
              className="inline-block px-6 py-3 bg-verde-600 hover:bg-verde-700 text-white font-semibold rounded-lg transition-colors"
            >
              Join the waitlist
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            The bottom line
          </h2>
          <p className="text-gray-700 mb-4">
            Most expat freelancers in Portugal are in the simplified regime and do not legally need an
            accountant. The annual tax compliance workload is real but manageable — the main barrier is
            that everything is in Portuguese.
          </p>
          <p className="text-gray-700 mb-4">
            Hire an accountant if: you are in the organized regime (legally required), you have complex
            multi-country tax situations, or you are navigating NHR 2.0 for the first time. For
            everything else, good guides, the right tools, and 4-5 hours per year of focused effort
            will keep you compliant.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-6">
            <h3 className="text-base font-bold text-gray-900 mb-4">Decision framework</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-verde-600 font-bold mt-0.5">→</span>
                <div>
                  <span className="font-semibold">Income below EUR 200,000 + simple single-country income?</span>
                  <span className="text-gray-600"> Simplified regime, no accountant required.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-verde-600 font-bold mt-0.5">→</span>
                <div>
                  <span className="font-semibold">Income above EUR 200,000?</span>
                  <span className="text-gray-600"> Organized regime required. Get an accountant.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-verde-600 font-bold mt-0.5">→</span>
                <div>
                  <span className="font-semibold">Applying for NHR 2.0 or have multi-country income?</span>
                  <span className="text-gray-600"> Consult an accountant for the first year at minimum.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-verde-600 font-bold mt-0.5">→</span>
                <div>
                  <span className="font-semibold">Received an AT notice or audit letter?</span>
                  <span className="text-gray-600"> Get professional help immediately.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <RelatedGuides current="/guide/accountant-freelancer-portugal" />
      </article>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { useSEO } from '../lib/useSEO'
import { useArticleSchema } from '../lib/useArticleSchema'
import RelatedGuides from '../components/RelatedGuides'

export default function GuideFreelancerRegistration() {
  useSEO({
    title: 'How to Register as a Freelancer in Portugal (2026) — Abrir Atividade Step-by-Step | VerdeDesk',
    description: 'Complete English guide to opening your freelance activity (abrir atividade) on Portal das Financas. Covers NIF, CAE/CIRS codes, VAT regime, simplified vs organised accounting, and social security registration.',
    canonical: 'https://verdedesk.vercel.app/guide/register-freelancer-portugal',
  })
  useArticleSchema({
    title: 'How to Register as a Freelancer in Portugal (2026) — Abrir Atividade Step-by-Step',
    description: 'Complete English guide to opening your freelance activity on Portal das Financas.',
    url: 'https://verdedesk.vercel.app/guide/register-freelancer-portugal',
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

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-6">
          <Link to="/" className="hover:text-verde-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/guides" className="hover:text-verde-600">Guides</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Register as Freelancer</span>
        </nav>

        <p className="text-sm text-verde-600 font-medium mb-4">Getting started</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
          How to Register as a Freelancer in Portugal: Abrir Atividade Step-by-Step (2026)
        </h1>
        <p className="text-gray-500 text-sm mb-12">
          Updated March 2026. Covers online registration via Portal das Financas.
        </p>

        <div className="prose prose-gray max-w-none">
          {/* TOC */}
          <nav aria-label="Table of contents" className="bg-gray-50 rounded-xl p-6 mb-10">
            <p className="font-semibold text-gray-900 mb-3">In this guide:</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm text-verde-700">
              <li><a href="#what-is-abrir-atividade" className="hover:text-verde-900">What is abrir atividade?</a></li>
              <li><a href="#before-you-start" className="hover:text-verde-900">What you need before you start</a></li>
              <li><a href="#step-1-portal" className="hover:text-verde-900">Step 1: Log in to Portal das Financas</a></li>
              <li><a href="#step-2-activity-code" className="hover:text-verde-900">Step 2: Choose your activity code (CAE/CIRS)</a></li>
              <li><a href="#step-3-tax-regime" className="hover:text-verde-900">Step 3: Choose your tax regime</a></li>
              <li><a href="#step-4-vat" className="hover:text-verde-900">Step 4: VAT regime selection</a></li>
              <li><a href="#step-5-submit" className="hover:text-verde-900">Step 5: Submit and confirm</a></li>
              <li><a href="#after-registration" className="hover:text-verde-900">After registration: what happens next</a></li>
              <li><a href="#social-security" className="hover:text-verde-900">Social security registration (NISS)</a></li>
              <li><a href="#common-mistakes" className="hover:text-verde-900">Common mistakes to avoid</a></li>
            </ol>
          </nav>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Before you can issue your first invoice (recibo verde) in Portugal, you need to officially register your freelance activity with the tax authority. In Portuguese, this is called <strong>abrir atividade</strong> (opening an activity). The entire process is done online through Portal das Financas — but the portal is entirely in Portuguese. This guide walks you through every step in English.
          </p>

          {/* Section 1 */}
          <h2 id="what-is-abrir-atividade" className="text-xl font-bold text-gray-900 mt-12 mb-4">
            What is abrir atividade?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Abrir atividade</strong> means officially registering your professional or business activity with the Autoridade Tributaria e Aduaneira (AT) — the Portuguese tax and customs authority, commonly called <em>Financas</em>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            This registration is mandatory for anyone earning income as a freelancer, independent contractor, or self-employed person in Portugal. Without it, you cannot:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>Issue legal invoices (recibos verdes / green receipts)</li>
            <li>Declare income to the tax authority</li>
            <li>Register with social security (Seguranca Social)</li>
            <li>Operate legally as a self-employed professional</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            You can register online via <strong>Portal das Financas</strong> (portaldasfinancas.gov.pt) or in person at any local tax office (<em>servico de financas</em>). The online process takes about 15 minutes if you have everything prepared.
          </p>

          {/* Section 2 */}
          <h2 id="before-you-start" className="text-xl font-bold text-gray-900 mt-12 mb-4">
            What you need before you start
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Gather these before opening Portal das Financas:
          </p>
          <div className="bg-verde-50 border border-verde-200 rounded-xl p-6 mb-6">
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex gap-3">
                <span className="text-verde-600 font-bold flex-shrink-0">1.</span>
                <span><strong>NIF (Numero de Identificacao Fiscal)</strong> — your Portuguese tax identification number. If you do not have one yet, apply at a local Financas office or through a fiscal representative.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-verde-600 font-bold flex-shrink-0">2.</span>
                <span><strong>Portal das Financas login credentials</strong> — username (NIF) and password. If you have never logged in, request your access code at a Financas office or via the portal's registration page.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-verde-600 font-bold flex-shrink-0">3.</span>
                <span><strong>Portuguese IBAN</strong> — a bank account in your name at a Portuguese bank. You can open a free basic account (<em>Conta Servicos Minimos Bancarios</em>) at any bank. This is required for tax refunds and social security.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-verde-600 font-bold flex-shrink-0">4.</span>
                <span><strong>Activity code</strong> — know which CAE or CIRS code matches your profession (see next section).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-verde-600 font-bold flex-shrink-0">5.</span>
                <span><strong>Estimated annual income</strong> — your best estimate of how much you will earn between your start date and December 31 of the current year. This determines your initial VAT and tax framework.</span>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <h2 id="step-1-portal" className="text-xl font-bold text-gray-900 mt-12 mb-4">
            Step 1: Log in to Portal das Financas
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Go to <strong>portaldasfinancas.gov.pt</strong> and log in with your NIF and password. Navigate to:
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-4 font-mono text-sm text-gray-700">
            Servicos Tributarios &rarr; Entregar &rarr; Declaracoes &rarr; Atividade &rarr; Inicio de Atividade
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            This opens the activity registration form (<em>Declaracao de Inicio de Atividade</em>). The form has several sections — activity type, income estimate, tax regime, and VAT status.
          </p>

          {/* Section 4 */}
          <h2 id="step-2-activity-code" className="text-xl font-bold text-gray-900 mt-12 mb-4">
            Step 2: Choose your activity code (CAE or CIRS)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Portugal uses two classification systems for freelance activities:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li><strong>CIRS codes</strong> — for <em>profissoes liberais</em> (liberal professions): regulated professionals who provide services. There are 15 main categories. If your work is purely service-based, you will likely use a CIRS code.</li>
            <li><strong>CAE codes</strong> (Classificacao das Atividades Economicas, Rev. 4) — for broader economic activities, especially if you sell goods or have a mixed business.</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Common CIRS codes for expat freelancers</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700 border-b">Code</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border-b">Profession</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border-b">Common use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="p-3 font-mono text-verde-700">1519</td>
                  <td className="p-3 text-gray-700">Other technical and scientific professionals</td>
                  <td className="p-3 text-gray-500">Software developers, IT consultants, web developers</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-verde-700">1518</td>
                  <td className="p-3 text-gray-700">Informatics consultants</td>
                  <td className="p-3 text-gray-500">IT consulting, systems architecture</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-verde-700">1320</td>
                  <td className="p-3 text-gray-700">Translators and interpreters</td>
                  <td className="p-3 text-gray-500">Freelance translators, language services</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-verde-700">1321</td>
                  <td className="p-3 text-gray-700">Writers and scriptwriters</td>
                  <td className="p-3 text-gray-500">Content writers, copywriters, journalists</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-verde-700">1322</td>
                  <td className="p-3 text-gray-700">Visual artists and designers</td>
                  <td className="p-3 text-gray-500">Graphic designers, UI/UX designers, illustrators</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-verde-700">1312</td>
                  <td className="p-3 text-gray-700">Marketing and advertising professionals</td>
                  <td className="p-3 text-gray-500">Digital marketing, SEO, social media managers</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-verde-700">1350</td>
                  <td className="p-3 text-gray-700">Management consultants</td>
                  <td className="p-3 text-gray-500">Business consultants, strategy advisors</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Tip:</strong> You can register more than one activity code. If your work spans multiple areas (e.g., software development and consulting), add both codes. Your primary code determines your tax coefficient under the simplified regime.
          </p>

          {/* Section 5 */}
          <h2 id="step-3-tax-regime" className="text-xl font-bold text-gray-900 mt-12 mb-4">
            Step 3: Choose your tax regime
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You must choose between two tax regimes:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-verde-50 border border-verde-200 rounded-xl p-5">
              <h4 className="font-semibold text-verde-800 mb-2">Simplified regime</h4>
              <p className="text-sm text-gray-700 mb-2">(<em>Regime simplificado</em>)</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Default for most freelancers</li>
                <li>Only 75% of service income is taxable</li>
                <li>25% is assumed as business expenses</li>
                <li>No accountant required</li>
                <li>Available if annual income under EUR 200,000</li>
              </ul>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h4 className="font-semibold text-gray-800 mb-2">Organised accounting</h4>
              <p className="text-sm text-gray-700 mb-2">(<em>Contabilidade organizada</em>)</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Requires a certified accountant (TOC)</li>
                <li>Deduct all actual business expenses</li>
                <li>Better if expenses exceed 25% of income</li>
                <li>Mandatory if annual income exceeds EUR 200,000</li>
                <li>More complex bookkeeping</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Recommendation for most D8 visa holders:</strong> Start with the simplified regime. It is easier, requires no accountant, and the 25% automatic deduction is generous. You can switch to organised accounting later if your expenses justify it.
          </p>

          {/* Section 6 */}
          <h2 id="step-4-vat" className="text-xl font-bold text-gray-900 mt-12 mb-4">
            Step 4: VAT regime selection
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            During registration, you will choose your VAT (IVA) status:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li><strong>Article 53 exemption:</strong> If your estimated annual income is below EUR 15,000, you are exempt from charging VAT. Select <em>"Regime de isencao — Artigo 53"</em> on the form. This is the most common choice for freelancers starting out.</li>
            <li><strong>Normal VAT regime:</strong> If your income will exceed EUR 15,000, you must register for VAT and charge 23% on your invoices. You will file periodic VAT returns (monthly or quarterly).</li>
          </ul>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
            <p className="text-sm text-amber-800">
              <strong>Warning — the EUR 18,750 trap:</strong> If you cross the EUR 15,000 threshold but stay below EUR 18,750, your exemption is revoked retroactively at the end of the year. You may owe VAT on income you already collected without charging it. Read our{' '}
              <Link to="/guide/vat-exemption-article-53-portugal" className="text-amber-700 underline hover:text-amber-900">
                VAT Article 53 guide
              </Link>{' '}
              for full details.
            </p>
          </div>

          {/* Section 7 */}
          <h2 id="step-5-submit" className="text-xl font-bold text-gray-900 mt-12 mb-4">
            Step 5: Submit and confirm
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Review all the information you entered, then click <em>Submeter</em> (Submit). The system will generate a confirmation document (<em>Comprovativo de Inicio de Atividade</em>). Save this PDF — you may need it when registering with Seguranca Social or opening a business bank account.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your registration takes effect immediately. You can issue your first recibo verde (green receipt) right after submitting.
          </p>

          {/* Section 8 */}
          <h2 id="after-registration" className="text-xl font-bold text-gray-900 mt-12 mb-4">
            After registration: what happens next
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Once your activity is open, here is your timeline:
          </p>
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <div className="space-y-4 text-sm">
              <div className="flex gap-4">
                <span className="font-semibold text-verde-700 whitespace-nowrap w-28 flex-shrink-0">Day 1</span>
                <span className="text-gray-700">Issue your first recibo verde on Portal das Financas</span>
              </div>
              <div className="flex gap-4">
                <span className="font-semibold text-verde-700 whitespace-nowrap w-28 flex-shrink-0">Within 1 month</span>
                <span className="text-gray-700">Register with Seguranca Social (social security) for your NISS number</span>
              </div>
              <div className="flex gap-4">
                <span className="font-semibold text-verde-700 whitespace-nowrap w-28 flex-shrink-0">Month 1–12</span>
                <span className="text-gray-700">12-month social security exemption — no contributions due, but you must submit quarterly declarations</span>
              </div>
              <div className="flex gap-4">
                <span className="font-semibold text-verde-700 whitespace-nowrap w-28 flex-shrink-0">5th of each month</span>
                <span className="text-gray-700">Submit SAFT file for previous month's invoices via e-Fatura</span>
              </div>
              <div className="flex gap-4">
                <span className="font-semibold text-verde-700 whitespace-nowrap w-28 flex-shrink-0">Next April–June</span>
                <span className="text-gray-700">File your first IRS tax return (Modelo 3) for income earned this year</span>
              </div>
            </div>
          </div>

          {/* Section 9 */}
          <h2 id="social-security" className="text-xl font-bold text-gray-900 mt-12 mb-4">
            Social security registration (NISS)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            After opening your activity, you must register with Seguranca Social to get your NISS (Numero de Identificacao de Seguranca Social). You can do this:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>Online:</strong> Through Seguranca Social Direta (app.seg-social.pt)</li>
            <li><strong>In person:</strong> At your local Seguranca Social office</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Processing typically takes 2–4 weeks. You will receive your NISS by letter or can check it online once processed.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>New freelancers are exempt from social security contributions for 12 months</strong> from the start of their activity. After that, you pay 21.4% on 70% of your declared quarterly income (an effective rate of about 15%). Read our{' '}
            <Link to="/guide/social-security-freelancer-portugal" className="text-verde-600 underline hover:text-verde-800">
              Social Security guide
            </Link>{' '}
            for full details on rates and deadlines.
          </p>

          {/* Section 10 */}
          <h2 id="common-mistakes" className="text-xl font-bold text-gray-900 mt-12 mb-4">
            Common mistakes to avoid
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
            <li><strong>Wrong activity code:</strong> Choosing the wrong CIRS/CAE code can affect your tax coefficient. Code 1519 (other technical professionals) is the most common for tech freelancers, but verify it matches your actual work.</li>
            <li><strong>Starting work before registration:</strong> You cannot issue invoices before your activity is open. If you receive payments before registering, you are technically working illegally and cannot declare that income.</li>
            <li><strong>Overestimating income:</strong> Your estimated annual income determines your initial VAT status. Overestimate and you may end up registered for VAT unnecessarily. Be realistic — you can always update later.</li>
            <li><strong>Forgetting to register with Seguranca Social:</strong> Opening activity on Portal das Financas does not automatically register you with social security. You must do this separately within your first month.</li>
            <li><strong>Not saving the confirmation PDF:</strong> The <em>Comprovativo de Inicio de Atividade</em> is your proof of registration. Banks, social security offices, and immigration authorities may ask for it.</li>
            <li><strong>Choosing organised accounting without an accountant:</strong> If you select <em>contabilidade organizada</em> without a certified accountant (TOC) already lined up, you will be non-compliant from day one.</li>
          </ul>

          {/* CTA */}
          <div className="bg-verde-50 border border-verde-200 rounded-xl p-8 text-center mt-12">
            <h2 className="text-xl font-bold text-verde-800 mb-3">
              Skip the Portuguese portal
            </h2>
            <p className="text-verde-700 mb-4">
              VerdeDesk handles your recibos verdes in English — issue invoices, track income, and stay compliant without navigating Portal das Financas in Portuguese.
            </p>
            <Link
              to="/#waitlist"
              className="inline-block px-6 py-3 bg-verde-600 hover:bg-verde-700 text-white font-semibold rounded-lg transition-colors"
            >
              Join the waitlist — launching April 2026
            </Link>
          </div>
        </div>
      </article>

      <RelatedGuides current="/guide/register-freelancer-portugal" />

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        <p>&copy; 2026 VerdeDesk. Made for freelancers in Portugal.</p>
      </footer>
    </div>
  )
}

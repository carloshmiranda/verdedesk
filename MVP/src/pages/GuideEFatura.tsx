import { Link } from 'react-router-dom'
import { useSEO } from '../lib/useSEO'
import { useArticleSchema } from '../lib/useArticleSchema'
import RelatedGuides from '../components/RelatedGuides'

export default function GuideEFatura() {
  useSEO({
    title: 'e-Fatura Portugal in English (2026) — How to Validate Invoices & Claim Deductions | VerdeDesk',
    description: 'Complete English guide to Portugal\'s e-Fatura system. How to access the portal, validate invoices, classify expenses as personal or professional, the February 25 deadline, and the 15% rule for freelancers on the simplified regime.',
    canonical: 'https://verdedesk.vercel.app/guide/e-fatura-portugal-english',
  })
  useArticleSchema({
    title: 'e-Fatura Portugal in English (2026) — How to Validate Invoices & Claim Deductions',
    description: 'Complete English guide to Portugal\'s e-Fatura system for freelancers.',
    url: 'https://verdedesk.vercel.app/guide/e-fatura-portugal-english',
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
          <span className="text-gray-600">e-Fatura</span>
        </nav>

        <p className="text-sm text-verde-600 font-medium mb-4">Guide for expat freelancers</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
          e-Fatura Portugal in English: How to Validate Invoices and Claim Deductions (2026)
        </h1>
        <p className="text-gray-500 text-sm mb-12">
          Updated March 2026. Covers portal access, invoice validation, expense categories, the February 25 deadline, and freelancer-specific rules.
        </p>

        <div className="prose prose-gray max-w-none">
          {/* TOC */}
          <div className="bg-gray-50 rounded-xl p-6 mb-10">
            <p className="font-semibold text-gray-900 mb-3">In this guide:</p>
            <ol className="text-verde-700 space-y-1 text-sm list-decimal list-inside">
              <li><a href="#what-is-efatura" className="hover:underline">What is e-Fatura and why it matters for freelancers</a></li>
              <li><a href="#how-to-access" className="hover:underline">How to access the e-Fatura portal (step by step)</a></li>
              <li><a href="#navigating-the-portal" className="hover:underline">Navigating the portal: key pages in English</a></li>
              <li><a href="#validating-invoices" className="hover:underline">How to validate and classify your invoices</a></li>
              <li><a href="#personal-vs-professional" className="hover:underline">Personal vs professional expenses (critical for freelancers)</a></li>
              <li><a href="#expense-categories" className="hover:underline">Expense categories explained in English</a></li>
              <li><a href="#the-15-percent-rule" className="hover:underline">The 15% rule for the simplified regime</a></li>
              <li><a href="#february-25-deadline" className="hover:underline">The February 25 deadline (and what happens if you miss it)</a></li>
              <li><a href="#common-mistakes" className="hover:underline">Common mistakes expats make with e-Fatura</a></li>
              <li><a href="#efatura-checklist" className="hover:underline">Monthly e-Fatura checklist</a></li>
            </ol>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            e-Fatura is Portugal&apos;s electronic invoice tracking system. Every time you give your NIF
            (tax number) at a shop, pharmacy, or service provider, that invoice is automatically sent to
            e-Fatura. As a freelancer, you <strong>must</strong> log in regularly to validate and classify
            these invoices — otherwise you lose tax deductions and may face a higher tax bill. The entire
            portal is in Portuguese. This guide translates every step into English.
          </p>

          {/* Section 1 */}
          <h2 id="what-is-efatura" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            What is e-Fatura and why it matters for freelancers
          </h2>
          <p className="text-gray-700 mb-4">
            e-Fatura (short for <em>fatura eletronica</em> — electronic invoice) is an online platform
            run by the Autoridade Tributaria e Aduaneira (AT), Portugal&apos;s tax authority. Launched in 2013,
            it tracks every commercial transaction linked to your NIF.
          </p>
          <p className="text-gray-700 mb-4">
            For freelancers on the <strong>simplified regime</strong> (regime simplificado), e-Fatura directly
            affects how much tax you pay. The system determines whether you get the full benefit of your
            automatic deductions or pay more. For those on the <strong>organized regime</strong>,
            e-Fatura matters less for income tax (your accountant handles expenses), but it still affects
            personal deductions like health and education.
          </p>
          <div className="bg-verde-50 border-l-4 border-verde-500 p-4 rounded-r-lg my-6">
            <p className="text-verde-800 font-medium">Why this matters:</p>
            <p className="text-verde-700 text-sm mt-1">
              Ignoring e-Fatura can cost you hundreds of euros per year. Unvalidated invoices default to
              the lowest deduction category, and the tax authority assumes the worst when calculating your
              IRS bill.
            </p>
          </div>

          {/* Section 2 */}
          <h2 id="how-to-access" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            How to access the e-Fatura portal
          </h2>
          <p className="text-gray-700 mb-4">
            e-Fatura lives inside the Portal das Financas ecosystem. Here is how to get there:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
            <li>
              Go to <strong>faturas.portaldasfinancas.gov.pt</strong> (the direct e-Fatura URL)
            </li>
            <li>
              Click <strong>&quot;Iniciar Sessao&quot;</strong> (Start Session / Log In) in the top right
            </li>
            <li>
              Enter your <strong>NIF</strong> and <strong>senha</strong> (password) — the same credentials
              you use for Portal das Financas
            </li>
            <li>
              You are now on the e-Fatura dashboard. The main menu items you need are:
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li><strong>Verificar Faturas</strong> — Verify Invoices (this is where you validate)</li>
                <li><strong>Despesas Dedutíveis</strong> — Deductible Expenses (summary of your deductions)</li>
                <li><strong>Adquirente</strong> — Buyer (view invoices registered to your NIF)</li>
              </ul>
            </li>
          </ol>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg my-6">
            <p className="text-amber-800 font-medium">Tip for new arrivals:</p>
            <p className="text-amber-700 text-sm mt-1">
              If you just got your NIF and have never logged in, you need to register on Portal das
              Financas first. See our <Link to="/guide/portal-das-financas-english" className="text-verde-600 underline">Portal das Financas in English</Link> guide for the full
              registration process.
            </p>
          </div>

          {/* Section 3 */}
          <h2 id="navigating-the-portal" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Navigating the portal: key pages in English
          </h2>
          <p className="text-gray-700 mb-4">
            The e-Fatura portal is entirely in Portuguese. Here are the key terms you will encounter:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Portuguese</th>
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">English</th>
                  <th className="text-left py-3 font-semibold text-gray-900">What it means</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 font-medium">Faturas Pendentes</td>
                  <td className="py-2 pr-4">Pending Invoices</td>
                  <td className="py-2">Invoices waiting for you to classify</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 font-medium">Verificar Faturas</td>
                  <td className="py-2 pr-4">Verify Invoices</td>
                  <td className="py-2">The main validation page</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 font-medium">Registar Faturas</td>
                  <td className="py-2 pr-4">Register Invoices</td>
                  <td className="py-2">Manually add an invoice not auto-reported</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 font-medium">Despesas Gerais Familiares</td>
                  <td className="py-2 pr-4">General Family Expenses</td>
                  <td className="py-2">Catch-all category (groceries, fuel, etc.)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 font-medium">Saude</td>
                  <td className="py-2 pr-4">Health</td>
                  <td className="py-2">Medical, pharmacy, dental expenses</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 font-medium">Educacao</td>
                  <td className="py-2 pr-4">Education</td>
                  <td className="py-2">School fees, training, courses</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 font-medium">Habitacao</td>
                  <td className="py-2 pr-4">Housing</td>
                  <td className="py-2">Rent or mortgage interest</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 font-medium">Atividade Profissional</td>
                  <td className="py-2 pr-4">Professional Activity</td>
                  <td className="py-2">Business expenses (freelancers only)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 font-medium">Confirmar</td>
                  <td className="py-2 pr-4">Confirm</td>
                  <td className="py-2">Save your classification</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 font-medium">Complementar Informacao</td>
                  <td className="py-2 pr-4">Add Information</td>
                  <td className="py-2">Invoice needs your input to classify</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 4 */}
          <h2 id="validating-invoices" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            How to validate and classify your invoices
          </h2>
          <p className="text-gray-700 mb-4">
            When a merchant reports an invoice with your NIF, it appears in your e-Fatura account.
            Some invoices are automatically classified (e.g., a pharmacy is clearly &quot;Health&quot;).
            Others need your input — these show up as <strong>Faturas Pendentes</strong> (Pending Invoices).
          </p>
          <p className="text-gray-700 mb-4">
            Here is the step-by-step process:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
            <li>
              Log in and click <strong>Verificar Faturas</strong>
            </li>
            <li>
              Select the <strong>year</strong> you want to review (e.g., 2026)
            </li>
            <li>
              Look for invoices marked <strong>&quot;Complementar Informacao&quot;</strong> — these need
              your classification
            </li>
            <li>
              Click on the invoice. You will see the merchant name, NIF, date, and amount
            </li>
            <li>
              Choose the correct <strong>sector/category</strong> from the dropdown. If you are a
              freelancer, you will also see the option to mark it as a <strong>professional expense</strong>
            </li>
            <li>
              Click <strong>Confirmar</strong> (Confirm) to save
            </li>
            <li>
              Repeat for all pending invoices
            </li>
          </ol>
          <div className="bg-verde-50 border-l-4 border-verde-500 p-4 rounded-r-lg my-6">
            <p className="text-verde-800 font-medium">Pro tip:</p>
            <p className="text-verde-700 text-sm mt-1">
              Do this monthly — not once a year. If you leave it until February, you may have hundreds
              of invoices to classify and the portal can be slow under load near the deadline.
            </p>
          </div>

          {/* Section 5 */}
          <h2 id="personal-vs-professional" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Personal vs professional expenses (critical for freelancers)
          </h2>
          <p className="text-gray-700 mb-4">
            This is the part that confuses most expat freelancers. When you are registered as an independent
            worker (trabalhador independente), e-Fatura gives you an extra classification option that
            salaried employees do not see: <strong>&quot;Atividade Profissional&quot;</strong> (Professional Activity).
          </p>
          <p className="text-gray-700 mb-4">
            For each invoice, you must decide:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>
              <strong>Personal expense</strong> — classify it into the normal categories (Health, Education,
              Housing, General Family Expenses). These give you personal tax deductions on your IRS.
            </li>
            <li>
              <strong>Professional expense</strong> — classify it as &quot;Atividade Profissional&quot;.
              On the simplified regime, professional expenses contribute to the 15% rule (explained below).
              On the organized regime, your accountant handles these separately.
            </li>
          </ul>
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg my-6">
            <p className="text-red-800 font-medium">Warning:</p>
            <p className="text-red-700 text-sm mt-1">
              Do not classify personal groceries or rent as professional expenses. The tax authority
              cross-references your activity code (CAE/CIRS) with your claimed professional expenses.
              A software developer claiming restaurant meals as professional expenses is a red flag for
              audits.
            </p>
          </div>

          {/* Section 6 */}
          <h2 id="expense-categories" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Expense categories explained in English
          </h2>
          <p className="text-gray-700 mb-4">
            e-Fatura groups expenses into categories that determine your personal tax deductions.
            Here is what each category means and its deduction ceiling:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Category</th>
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Deduction rate</th>
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Annual ceiling</th>
                  <th className="text-left py-3 font-semibold text-gray-900">Examples</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 font-medium">General Family Expenses</td>
                  <td className="py-2 pr-4">35%</td>
                  <td className="py-2 pr-4">EUR 250 per person</td>
                  <td className="py-2">Groceries, fuel, clothing, utilities</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 font-medium">Health</td>
                  <td className="py-2 pr-4">15%</td>
                  <td className="py-2 pr-4">EUR 1,000</td>
                  <td className="py-2">Doctor visits, pharmacy, dental, insurance</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 font-medium">Education</td>
                  <td className="py-2 pr-4">30%</td>
                  <td className="py-2 pr-4">EUR 800</td>
                  <td className="py-2">School fees, university, courses, textbooks</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 font-medium">Housing</td>
                  <td className="py-2 pr-4">15%</td>
                  <td className="py-2 pr-4">EUR 502</td>
                  <td className="py-2">Rent, mortgage interest</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 font-medium">Veterinary</td>
                  <td className="py-2 pr-4">15%</td>
                  <td className="py-2 pr-4">EUR 250</td>
                  <td className="py-2">Vet bills for pets</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 font-medium">Car repair</td>
                  <td className="py-2 pr-4">15%</td>
                  <td className="py-2 pr-4">EUR 250</td>
                  <td className="py-2">Mechanics, car maintenance</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 font-medium">Professional Activity</td>
                  <td className="py-2 pr-4">See 15% rule</td>
                  <td className="py-2 pr-4">Varies</td>
                  <td className="py-2">Office supplies, software, professional services</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mb-6">
            Note: These ceilings apply per taxpayer. Married couples filing jointly get double the limits.
            The exact values can change with annual budget laws — check the AT website for the current year.
          </p>

          {/* Section 7 */}
          <h2 id="the-15-percent-rule" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            The 15% rule for the simplified regime
          </h2>
          <p className="text-gray-700 mb-4">
            If you are on the <strong>simplified regime</strong> (which most expat freelancers are), the
            tax authority automatically assumes 25% of your gross income is business expenses. You are
            taxed on the remaining 75%.
          </p>
          <p className="text-gray-700 mb-4">
            But there is a catch: <strong>at least 15% of that 25%</strong> must be proven through invoices
            classified as &quot;Atividade Profissional&quot; on e-Fatura. If you do not hit that 15% threshold,
            the unproven portion is added back to your taxable income.
          </p>
          <div className="bg-gray-50 rounded-xl p-6 my-6">
            <p className="font-semibold text-gray-900 mb-3">Example: EUR 40,000 annual income</p>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>Automatic deduction: 25% = <strong>EUR 10,000</strong></li>
              <li>15% of EUR 10,000 = <strong>EUR 1,500</strong> must be proven on e-Fatura</li>
              <li>If you prove EUR 1,500+ in professional expenses on e-Fatura, you keep the full EUR 10,000 deduction</li>
              <li>If you prove only EUR 500, the shortfall (EUR 1,000) is added back to your taxable income</li>
            </ul>
          </div>
          <p className="text-gray-700 mb-4">
            What counts as proof? Invoices where you gave your NIF <strong>and</strong> classified them
            as &quot;Atividade Profissional&quot; on e-Fatura. This includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Office supplies and equipment</li>
            <li>Software subscriptions (if you ask for a fatura with your NIF)</li>
            <li>Internet and phone bills (the professional portion)</li>
            <li>Professional training and courses related to your activity</li>
            <li>Coworking space fees</li>
            <li>Professional insurance</li>
          </ul>
          <p className="text-gray-700 mb-4">
            See our <Link to="/guide/tax-deductions-freelancer-portugal" className="text-verde-600 underline">Freelancer Tax Deductions</Link> guide
            for the full list of what counts.
          </p>

          {/* Section 8 */}
          <h2 id="february-25-deadline" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            The February 25 deadline (and what happens if you miss it)
          </h2>
          <p className="text-gray-700 mb-4">
            Every year, all invoices from the previous year must be validated by <strong>February 25</strong>.
            For example, all 2025 invoices must be validated by February 25, 2026.
          </p>
          <p className="text-gray-700 mb-4">
            If you miss this deadline:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>
              <strong>Unclassified invoices</strong> default to &quot;Despesas Gerais Familiares&quot; (General
              Family Expenses) — the lowest-value deduction category
            </li>
            <li>
              <strong>Professional expenses</strong> that were not classified as such cannot be counted
              toward the 15% rule
            </li>
            <li>
              You <strong>cannot reclassify</strong> invoices after the deadline — the system locks
            </li>
            <li>
              Your IRS pre-filled declaration (Modelo 3) will use whatever e-Fatura calculated, and you
              cannot override it for categories that have a deduction ceiling
            </li>
          </ul>
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg my-6">
            <p className="text-red-800 font-medium">First-year expats, take note:</p>
            <p className="text-red-700 text-sm mt-1">
              If you arrived in Portugal mid-year and started giving your NIF late in the year, you may
              have very few invoices on e-Fatura. This is normal, but it means your 15% threshold proof
              for the simplified regime will be low. Start collecting NIF invoices from day one — even
              for small purchases like coffee or groceries.
            </p>
          </div>

          {/* Section 9 */}
          <h2 id="common-mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Common mistakes expats make with e-Fatura
          </h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-700 mb-6">
            <li>
              <strong>Not giving your NIF at checkout.</strong> If the merchant does not have your NIF, the
              invoice does not appear on e-Fatura. Always say &quot;com contribuinte&quot; (with tax number) and
              give your NIF before paying. Some stores require it before finalizing the transaction.
            </li>
            <li>
              <strong>Ignoring e-Fatura for the whole year.</strong> Logging in once in February to classify
              12 months of invoices is stressful and error-prone. Check monthly.
            </li>
            <li>
              <strong>Classifying everything as professional.</strong> Only genuine business expenses belong
              in &quot;Atividade Profissional&quot;. Your weekly grocery shop is not a business expense unless
              you run a food business.
            </li>
            <li>
              <strong>Forgetting to register invoices from foreign services.</strong> If you pay for software,
              hosting, or other services from foreign companies (Stripe, AWS, Google), those invoices are
              usually not reported to e-Fatura automatically. You can manually register them under
              &quot;Registar Faturas&quot; — but only if the service is clearly professional.
            </li>
            <li>
              <strong>Confusing e-Fatura with the recibo verde system.</strong> e-Fatura tracks your
              <em>expenses</em> (purchases with your NIF). Recibos verdes are the <em>invoices you issue</em>
              to clients. They are two separate systems on Portal das Financas. See
              our <Link to="/guide/recibo-verde-english" className="text-verde-600 underline">Recibo Verde guide</Link> for
              the issuing side.
            </li>
            <li>
              <strong>Not knowing about the Chave Movel Digital (CMD) login.</strong> Some portal features
              require CMD authentication instead of the basic NIF + password. Consider setting up CMD —
              it also works as a digital signature for other Portuguese government services.
            </li>
          </ol>

          {/* Section 10 */}
          <h2 id="efatura-checklist" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Monthly e-Fatura checklist
          </h2>
          <p className="text-gray-700 mb-4">
            Follow this routine once a month to stay on top of e-Fatura:
          </p>
          <div className="bg-gray-50 rounded-xl p-6 my-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-verde-600 font-bold mt-0.5">1.</span>
                <span>Log in to <strong>faturas.portaldasfinancas.gov.pt</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-verde-600 font-bold mt-0.5">2.</span>
                <span>Go to <strong>Verificar Faturas</strong> and select the current year</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-verde-600 font-bold mt-0.5">3.</span>
                <span>Classify all <strong>Faturas Pendentes</strong> — personal or professional</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-verde-600 font-bold mt-0.5">4.</span>
                <span>Check if any invoices are <strong>missing</strong> — did you give your NIF for all major
                  purchases this month? If a merchant did not report it, use &quot;Registar Faturas&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-verde-600 font-bold mt-0.5">5.</span>
                <span>Review your <strong>professional expenses total</strong> — are you on track for the
                  15% threshold? (Check via &quot;Despesas Dedutiveis&quot;)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-verde-600 font-bold mt-0.5">6.</span>
                <span>Set a <strong>calendar reminder</strong> for next month</span>
              </li>
            </ul>
          </div>
          <p className="text-gray-700 mb-4">
            For key dates including the February 25 e-Fatura deadline, see
            our <Link to="/guide/tax-deadlines-2026" className="text-verde-600 underline">2026 Tax Deadlines Calendar</Link>.
          </p>

          {/* CTA */}
          <div className="bg-verde-50 rounded-xl p-8 text-center mt-12">
            <h3 className="text-xl font-bold text-verde-800 mb-2">
              Skip the Portuguese paperwork
            </h3>
            <p className="text-verde-700 mb-4">
              VerdeDesk is building an English-friendly interface for managing your Portuguese tax
              obligations — including e-Fatura tracking. Join the waitlist for early access.
            </p>
            <Link
              to="/#waitlist"
              className="inline-block px-6 py-3 bg-verde-600 hover:bg-verde-700 text-white font-semibold rounded-lg transition-colors"
            >
              Join the waitlist
            </Link>
          </div>
        </div>

        <RelatedGuides current="/guide/e-fatura-portugal-english" />
      </article>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        <p>&copy; 2026 VerdeDesk. Made for freelancers in Portugal.</p>
      </footer>
    </div>
  )
}

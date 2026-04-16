import { Link } from 'react-router-dom'
import { useSEO } from '../lib/useSEO'
import { useArticleSchema } from '../lib/useArticleSchema'
import RelatedGuides from '../components/RelatedGuides'

export default function GuideMovingPortugalFreelancer() {
  useSEO({
    title: 'Moving to Portugal as a Freelancer: Complete 2026 Guide | VerdeDesk',
    description: 'Everything you need to set up as a freelancer in Portugal — NIF, D8 visa, opening your activity, tax regime, social security, NHR 2.0, and your first-year checklist.',
    canonical: 'https://verdedesk.vercel.app/guide/moving-to-portugal-freelancer',
  })
  useArticleSchema({
    title: 'Moving to Portugal as a Freelancer: Complete 2026 Guide',
    description: 'Everything you need to set up as a freelancer in Portugal — NIF, D8 visa, opening your activity, tax regime, social security, NHR 2.0, and your first-year checklist.',
    url: 'https://verdedesk.vercel.app/guide/moving-to-portugal-freelancer',
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
          <Link to="/tools/tax-calculator" className="text-sm font-medium text-gray-600 hover:text-verde-700">Tax Calculator</Link>
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
          <span className="text-gray-700">Moving to Portugal as a freelancer</span>
        </nav>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-sm text-verde-600 font-medium mb-4">VerdeDesk Guide • Getting started</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
          Moving to Portugal as a Freelancer: Complete 2026 Guide
        </h1>
        <p className="text-gray-500 text-sm mb-10">
          Updated April 2026. Written for D8 visa holders, EU citizens, and non-EU freelancers relocating to Portugal.
        </p>

        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Portugal has become one of the most popular destinations for remote workers and freelancers —
            favourable tax regimes, a walkable lifestyle, and Europe as your backyard. But the tax setup
            process is genuinely confusing, and most of the official guidance exists only in Portuguese.
            This guide walks you through every step you need to take before and after you arrive, so you
            don't spend your first months scrambling to fix things you set up wrong.
          </p>

          {/* Before you arrive */}
          <div className="bg-verde-50 border border-verde-200 rounded-xl p-6 my-8">
            <h3 className="text-base font-bold text-verde-800 mb-3">Timeline overview</h3>
            <div className="space-y-2 text-verde-700 text-sm">
              <div className="flex gap-3">
                <span className="font-semibold min-w-[120px]">Before you arrive</span>
                <span>NIF via fiscal representative (non-EU), D8 visa application, tax planning</span>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold min-w-[120px]">Month 1</span>
                <span>Open bank account, get NIF in person (EU), register freelance activity</span>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold min-w-[120px]">Month 2–3</span>
                <span>Apply for NHR 2.0 (IFICI), issue first recibos verdes</span>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold min-w-[120px]">Quarterly</span>
                <span>Social security declarations and payments (exempted in year 1)</span>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold min-w-[120px]">April–June</span>
                <span>IRS tax return filing window for the prior year's income</span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Step 1: Get your NIF before you start working
          </h2>
          <p className="text-gray-700 mb-4">
            The NIF (Número de Identificação Fiscal) is your Portuguese tax identification number. You
            need it to issue recibos verdes, open a bank account, sign a lease, and file any document
            with the Portuguese state. Get this first — everything else depends on it.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">EU citizens</h3>
          <p className="text-gray-700 mb-4">
            If you hold a passport from an EU/EEA country (France, Germany, the Netherlands, etc.),
            you can get your NIF on arrival at any tax office (<em>Serviço de Finanças</em>). Bring your
            passport and proof of address (rental contract, utility bill). The process takes under an hour.
            You don't need a fiscal representative.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Non-EU citizens (D8 visa holders, UK, US, etc.)</h3>
          <p className="text-gray-700 mb-4">
            Non-EU citizens must appoint a <strong>fiscal representative</strong> (<em>representante fiscal</em>)
            before they can get a NIF. This is a Portuguese resident or company who acts as your point of
            contact with the AT. Many law firms, accountants, and relocation services offer this for EUR 50–150/year.
          </p>
          <p className="text-gray-700 mb-4">
            Critically: you can get your NIF before you arrive in Portugal if you appoint a fiscal
            representative in advance. This means D8 visa applicants can start the NIF process while
            their visa is still being processed — getting you ready to issue invoices on day one of
            arrival rather than waiting weeks.
          </p>
          <p className="text-gray-700 mb-4">
            Once you become a tax resident in Portugal (spending more than 183 days in a calendar year),
            you no longer need a fiscal representative for day-to-day purposes. You'll still need one
            to formally release the role if you later leave Portugal.
          </p>
          <p className="text-gray-700">
            Full details in our dedicated guide: <Link to="/guide/nif-portugal-foreigner" className="text-verde-700 hover:underline">How to Get a NIF in Portugal as a Foreigner (2026)</Link>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Step 2: The D8 visa — what it means for your taxes
          </h2>
          <p className="text-gray-700 mb-4">
            The D8 is Portugal's digital nomad / remote worker visa. It's for non-EU/EEA citizens who
            work remotely for clients or employers outside Portugal. As of early 2026, more than 9,300
            D8 visas have been approved.
          </p>
          <p className="text-gray-700 mb-4">
            Key tax implications of the D8 visa:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li><strong>You become a Portuguese tax resident</strong> once you spend more than 183 days in Portugal in a calendar year (or have your habitual residence here). As a tax resident, your worldwide income is subject to Portuguese IRS.</li>
            <li><strong>You must register as a self-employed worker</strong> (<em>trabalhador independente</em>) and issue recibos verdes for any freelance income — even from foreign clients.</li>
            <li><strong>The NHR 2.0 (IFICI) regime</strong> may significantly reduce your IRS rate. D8 visa holders are one of the target groups. See Step 4 below.</li>
            <li><strong>Social security</strong> applies to your freelance income, with a 12-month exemption in your first year.</li>
          </ul>
          <p className="text-gray-700">
            For the full tax breakdown including tax residency rules, NIF, IRS brackets, and SS rates,
            see our{' '}
            <Link to="/guide/d8-visa-portugal-taxes" className="text-verde-700 hover:underline">
              D8 Visa Portugal Taxes: Complete 2026 Guide
            </Link>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Step 3: Open your bank account
          </h2>
          <p className="text-gray-700 mb-4">
            You need a Portuguese or EU bank account to receive payments and pay taxes. The main options:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li><strong>Traditional Portuguese banks</strong> (Millennium BCP, Santander Portugal, Caixa Geral): require NIF and proof of address. Can take 2–4 weeks. Branch-based process, often in Portuguese.</li>
            <li><strong>Online-first banks</strong> (N26, Revolut, Wise): faster to open, English interfaces, but some have limitations on Portuguese direct debits for tax payments.</li>
            <li><strong>Rauva / Conta Simples:</strong> Portuguese fintech accounts that also handle invoicing. Generally Portuguese-language.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            For tax payments (quarterly SS, IRS settlement), you need an IBAN that the AT's MBWAY or
            Multibanco payment references can charge. Most major EU-based accounts work fine. Pure
            US-based accounts (Chase, Bank of America) do not.
          </p>
          <p className="text-gray-700">
            Wise's EUR IBAN (which is a Belgian IBAN) works for most Portuguese tax payments. Confirm
            this with your accountant if in doubt.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Step 4: Register your freelance activity (abrir atividade)
          </h2>
          <p className="text-gray-700 mb-4">
            Before issuing any invoice or receipt, you must formally open your freelance activity (<em>abrir atividade</em>)
            on Portal das Financas. Legally, you should do this before you start work — or at the very latest
            within 15 days of your first paid activity.
          </p>
          <p className="text-gray-700 mb-4">
            What you'll choose during registration:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>
              <strong>Activity code (CIRS code):</strong> This is a code that describes your type of work.
              Most freelancers in tech, design, writing, or consulting use CIRS code 1519 (Other
              professional, scientific, or technical activities) or 1710 (Computer programming) or similar.
              Choosing the wrong code rarely causes immediate problems but matters for some tax calculations.
            </li>
            <li>
              <strong>Tax regime:</strong> The <em>regime simplificado</em> (simplified regime) is the default
              and the right choice for most expat freelancers earning under EUR 200,000/year. It gives you a
              flat 25% expense deduction on your gross income, no receipts needed.
            </li>
            <li>
              <strong>VAT regime:</strong> If you expect to earn less than EUR 15,000/year, select the
              Article 53 VAT exemption. This means you don't charge or collect VAT. Above EUR 15,000 (EUR 18,750
              in your first year), you must register for IVA (VAT) and charge 23% on domestic services.
            </li>
          </ul>
          <p className="text-gray-700">
            Full step-by-step: <Link to="/guide/register-freelancer-portugal" className="text-verde-700 hover:underline">How to Register as a Freelancer in Portugal (Abrir Atividade)</Link>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Step 5: Apply for NHR 2.0 (IFICI) — don't miss the window
          </h2>
          <p className="text-gray-700 mb-4">
            The NHR 2.0 regime (officially called IFICI — <em>Incentivo Fiscal à Investigação Científica e Inovação</em>)
            offers a flat 20% IRS rate on eligible Portuguese income and a 10-year term. It was introduced in
            2024 as a replacement for the original NHR regime.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>The critical detail:</strong> you must apply for NHR 2.0 in the year after you first
            become a tax resident in Portugal. If you became resident in 2025, you apply between January and
            March 2026. Miss this window and you cannot apply for NHR 2.0 — you pay standard IRS rates for
            the full 10 years you could have been on the flat rate.
          </p>
          <p className="text-gray-700 mb-4">
            Eligibility for freelancers:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>You were not a Portuguese tax resident in the 5 years prior to arriving</li>
            <li>Your professional activity falls under "high added value activities" (technology, R&D, creative industries, most professional services)</li>
            <li>You have an existing or prospective employer/client contract</li>
          </ul>
          <p className="text-gray-700 mb-4">
            The application is made through your personal AT area on Portal das Financas. You'll need
            your NIF, a description of your professional activity, and documentation of your client contracts.
          </p>
          <p className="text-gray-700">
            Use our <Link to="/tools/nhr-checker" className="text-verde-700 hover:underline">NHR 2.0 eligibility checker</Link> to see whether your situation qualifies and what the tax savings look like at different income levels.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Step 6: Issuing your first recibo verde
          </h2>
          <p className="text-gray-700 mb-4">
            Once your activity is open, you can issue recibos verdes (green receipts) for each client payment.
            Recibos verdes are the self-employment invoice document used by Portuguese freelancers in the
            simplified regime. Every payment you receive must have a corresponding recibo verde — including
            payments from foreign clients.
          </p>
          <p className="text-gray-700 mb-4">
            The recibo verde form lives at Portal das Financas → Serviços → Faturação → Recibos Verdes Eletrónicos → Emitir.
            The entire form is in Portuguese. The fields you'll fill in on every receipt:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li><strong>NIF do adquirente:</strong> Your client's Portuguese NIF. For foreign clients, use their EU VAT number or a generic NIF.</li>
            <li><strong>Valor base:</strong> The amount in EUR (convert from foreign currency using the ECB rate if needed).</li>
            <li><strong>IVA:</strong> VAT rate. Usually "Isento — Art. 53.º" if under the threshold, or "Isento — Artigo 6.º do CIVA" for foreign clients.</li>
            <li><strong>Retenção na fonte:</strong> Withholding tax. Leave unchecked for foreign clients. For Portuguese business clients, this is typically 25%.</li>
            <li><strong>Descrição:</strong> Service description — a brief description of what you delivered.</li>
          </ul>
          <p className="text-gray-700">
            Full walkthrough: <Link to="/guide/recibo-verde-english" className="text-verde-700 hover:underline">How to Issue a Recibo Verde in English (2026)</Link>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Social security in your first year
          </h2>
          <p className="text-gray-700 mb-4">
            New freelancers in Portugal are exempt from social security contributions for the first 12 months
            of activity. This applies regardless of how much you earn. The exemption starts automatically
            when you open your activity — you don't need to apply for it.
          </p>
          <p className="text-gray-700 mb-4">
            After the 12-month exemption ends, you start making quarterly SS declarations. The contribution
            rate is <strong>21.4%</strong> on 70% of your quarterly gross income (effectively around 15% of gross).
            Declarations are submitted in January, April, July, and October, with payment due in the following month.
          </p>
          <p className="text-gray-700">
            Full breakdown: <Link to="/guide/social-security-freelancer-portugal" className="text-verde-700 hover:underline">Social Security for Freelancers in Portugal</Link>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Your first IRS tax return
          </h2>
          <p className="text-gray-700 mb-4">
            Portuguese IRS returns are filed between April and June each year for the prior year's income.
            If you arrived in Portugal partway through 2025, you'll file for the first time in April–June 2026
            (reporting your 2025 income earned while resident in Portugal).
          </p>
          <p className="text-gray-700 mb-4">
            As a freelancer in the simplified regime, your income goes in <strong>Modelo 3, Anexo B</strong>.
            The simplified regime applies an automatic 25% expense deduction to your income — you don't need
            to submit receipts or prove your expenses.
          </p>
          <p className="text-gray-700 mb-4">
            Key items to prepare for your first IRS return:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>Total value of all recibos verdes issued during the tax year</li>
            <li>Any withholding tax (retencão na fonte) deducted by Portuguese clients</li>
            <li>NHR 2.0 regime status (if applicable)</li>
            <li>Foreign income if you also had employment or freelance income outside Portugal</li>
            <li>Health insurance, gym membership, and restaurant expenses validated in e-Fatura</li>
          </ul>
          <p className="text-gray-700">
            Step-by-step: <Link to="/guide/irs-tax-return-freelancer-portugal" className="text-verde-700 hover:underline">How to File Your IRS Tax Return as a Freelancer in Portugal</Link>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            First-year mistakes to avoid
          </h2>
          <div className="space-y-4 mb-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-sm">✗</div>
              <div>
                <p className="font-semibold text-gray-900">Not opening your activity before issuing invoices</p>
                <p className="text-gray-600 text-sm mt-1">If you receive payments without having opened your activity, you're technically operating illegally. The AT can impose fines if they discover undeclared income before you registered. Open your activity first.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-sm">✗</div>
              <div>
                <p className="font-semibold text-gray-900">Missing the NHR 2.0 application window</p>
                <p className="text-gray-600 text-sm mt-1">This is the single most expensive mistake expats make. The January–March window the year after you become resident is non-negotiable. Put it in your calendar immediately.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-sm">✗</div>
              <div>
                <p className="font-semibold text-gray-900">Not issuing recibos verdes for foreign client payments</p>
                <p className="text-gray-600 text-sm mt-1">Every payment, regardless of source country, needs a recibo verde. Undeclared foreign income can be discovered when the AT cross-references bank account transfers with your declared receipts.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-sm">✗</div>
              <div>
                <p className="font-semibold text-gray-900">Underestimating the VAT threshold risk</p>
                <p className="text-gray-600 text-sm mt-1">If you earn EUR 14,000 in your first partial year, the Article 53 exemption applies. But if you earn EUR 16,000, you must register for IVA retroactively. The EUR 15,000 limit is easy to cross without realising. Track your cumulative income monthly.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-sm">✗</div>
              <div>
                <p className="font-semibold text-gray-900">Not setting aside tax provisions</p>
                <p className="text-gray-600 text-sm mt-1">When you receive payments from foreign clients without withholding, you get the full amount — but owe IRS at filing time. Standard practice: set aside 20–28% of gross income in a separate account each month.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            First-year checklist
          </h2>
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="space-y-3 text-sm">
              {[
                { label: 'Before arrival: appoint fiscal representative and get NIF (non-EU)', tag: 'Non-EU' },
                { label: 'On arrival: get NIF in person at Serviço de Finanças (EU)', tag: 'EU' },
                { label: 'Open Portuguese or EU bank account with EUR IBAN', tag: 'Month 1' },
                { label: 'Register freelance activity on Portal das Financas (abrir atividade)', tag: 'Month 1' },
                { label: 'Choose CIRS activity code, tax regime (simplified), and VAT status (Art. 53)', tag: 'Month 1' },
                { label: 'Issue first recibo verde for each client payment', tag: 'Ongoing' },
                { label: 'Apply for NHR 2.0 / IFICI in Jan–Mar of the following year', tag: 'Critical' },
                { label: 'Track cumulative income against EUR 15,000 VAT threshold', tag: 'Ongoing' },
                { label: 'Set aside 20–28% of each payment for IRS provisions', tag: 'Ongoing' },
                { label: 'File first IRS return (Modelo 3, Anexo B) in April–June following year', tag: 'Annual' },
              ].map(({ label, tag }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5 border-2 border-verde-400 rounded"></div>
                  <div className="flex-1">
                    <span className="text-gray-700">{label}</span>
                    <span className={`ml-2 text-xs font-medium px-1.5 py-0.5 rounded ${
                      tag === 'Critical' ? 'bg-red-100 text-red-700' :
                      tag === 'Month 1' ? 'bg-blue-100 text-blue-700' :
                      tag === 'Annual' ? 'bg-purple-100 text-purple-700' :
                      'bg-gray-200 text-gray-600'
                    }`}>{tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Do you need an accountant?
          </h2>
          <p className="text-gray-700 mb-4">
            Under the simplified regime, you are legally allowed to manage your own tax compliance without
            a certified accountant (<em>contabilista certificado</em>). Most expat freelancers earning under
            EUR 200,000/year can issue recibos verdes, file SS declarations, and submit their IRS return
            independently.
          </p>
          <p className="text-gray-700 mb-4">
            The main reason expats hire accountants is the language barrier — navigating Portal das Financas,
            AT correspondence, and the IRS filing process in Portuguese is stressful and time-consuming.
            A local accountant costs EUR 80–200/month and handles the entire compliance burden.
          </p>
          <p className="text-gray-700">
            For a detailed cost/benefit breakdown, see: <Link to="/guide/accountant-freelancer-portugal" className="text-verde-700 hover:underline">Do You Need an Accountant as a Freelancer in Portugal?</Link>
          </p>

          {/* CTA */}
          <div className="bg-verde-50 border border-verde-200 rounded-xl p-6 my-10">
            <h3 className="text-lg font-bold text-verde-800 mb-2">
              Handle your Portuguese compliance in English
            </h3>
            <p className="text-verde-700 mb-4">
              VerdeDesk is built for expat freelancers in exactly this situation. Issue recibos verdes,
              track income, monitor your VAT threshold, and get deadline reminders — all in plain English.
              No Portuguese required.
            </p>
            <Link
              to="/#waitlist"
              className="inline-block px-6 py-3 bg-verde-600 hover:bg-verde-700 text-white font-semibold rounded-lg transition-colors"
            >
              Join the waitlist
            </Link>
          </div>

        </div>

        <RelatedGuides current="/guide/moving-to-portugal-freelancer" />
      </article>
    </div>
  )
}

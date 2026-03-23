import { Link } from 'react-router-dom'
import { useSEO } from '../lib/useSEO'
import { useArticleSchema } from '../lib/useArticleSchema'
import RelatedGuides from '../components/RelatedGuides'
import IrsFilingBanner from '../components/IrsFilingBanner'

export default function GuidePortalDasFinancas() {
  useSEO({
    title: 'Portal das Financas in English (2026) — Complete Navigation Guide for Expat Freelancers | VerdeDesk',
    description: 'English guide to Portal das Financas for freelancers in Portugal. Navigate the Portuguese tax portal, issue recibos verdes, check your tax status, and file declarations — all explained in plain English.',
    canonical: 'https://verdedesk.vercel.app/guide/portal-das-financas-english',
  })
  useArticleSchema({
    title: 'Portal das Financas in English (2026) — Complete Navigation Guide for Expat Freelancers',
    description: 'English guide to Portal das Financas for freelancers in Portugal.',
    url: 'https://verdedesk.vercel.app/guide/portal-das-financas-english',
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

      {/* IRS Filing Season Banner */}
      <IrsFilingBanner />

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-6">
          <Link to="/" className="hover:text-verde-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/guides" className="hover:text-verde-600">Guides</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Portal das Financas in English</span>
        </nav>

        <p className="text-sm text-verde-600 font-medium mb-4">Guide for expat freelancers</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
          Portal das Financas in English: How to Navigate Portugal's Tax Portal as an Expat Freelancer (2026)
        </h1>
        <p className="text-gray-500 text-sm mb-12">
          Updated March 2026. Covers login, recibo verde issuance, IRS filing, and Seguranca Social declarations.
        </p>

        <div className="prose prose-gray max-w-none">
          {/* TOC */}
          <div className="bg-gray-50 rounded-xl p-6 mb-10">
            <p className="font-semibold text-gray-900 mb-3">In this guide:</p>
            <ol className="text-verde-700 space-y-1 text-sm list-decimal list-inside">
              <li><a href="#what-is-portal-das-financas" className="hover:underline">What is Portal das Financas?</a></li>
              <li><a href="#how-to-get-access" className="hover:underline">How to get access (credentials and password)</a></li>
              <li><a href="#logging-in" className="hover:underline">Logging in for the first time</a></li>
              <li><a href="#main-menu-translated" className="hover:underline">Main menu translated to English</a></li>
              <li><a href="#issuing-a-recibo-verde" className="hover:underline">Issuing a recibo verde (green receipt) — field by field</a></li>
              <li><a href="#checking-your-tax-situation" className="hover:underline">Checking your tax situation (situacao fiscal)</a></li>
              <li><a href="#viewing-past-receipts" className="hover:underline">Viewing past receipts and income history</a></li>
              <li><a href="#irs-annual-return" className="hover:underline">Filing your IRS annual return through the portal</a></li>
              <li><a href="#seguranca-social-declarations" className="hover:underline">Quarterly Seguranca Social declarations</a></li>
              <li><a href="#common-error-messages" className="hover:underline">Common portal error messages (translated)</a></li>
              <li><a href="#mobile-access" className="hover:underline">Mobile access and the app</a></li>
              <li><a href="#verdedesk-alternative" className="hover:underline">VerdeDesk: the English alternative</a></li>
            </ol>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Portal das Financas (<em>portal.portaldasfinancas.gov.pt</em>) is the Portuguese
            government's online tax platform. Every freelancer in Portugal must use it to issue
            invoices, file tax returns, and make declarations. The problem: the entire portal is
            in Portuguese, with no English version. This guide translates every screen, button,
            and error message you will encounter as an expat freelancer.
          </p>

          <h2 id="what-is-portal-das-financas" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            What is Portal das Financas?
          </h2>
          <p className="text-gray-700 mb-4">
            Portal das Financas is the official website of the <em>Autoridade Tributaria e
            Aduaneira</em> (AT) — Portugal's tax and customs authority. Think of it as Portugal's
            equivalent of the IRS website (US), HMRC portal (UK), or ATO myGov (Australia).
          </p>
          <p className="text-gray-700 mb-4">
            As a freelancer (<em>trabalhador independente</em>), you use the portal to:
          </p>
          <ul className="text-gray-700 mb-4 list-disc pl-6 space-y-2">
            <li><strong>Issue recibos verdes</strong> (green receipts) for every client payment</li>
            <li><strong>File your annual IRS return</strong> (income tax declaration)</li>
            <li><strong>Check your tax situation</strong> (outstanding debts, pending declarations)</li>
            <li><strong>Validate e-Fatura invoices</strong> (your personal expense deductions)</li>
            <li><strong>Submit your quarterly income declaration</strong> to Seguranca Social</li>
            <li><strong>Open or close your freelance activity</strong> (<em>abrir/cessar atividade</em>)</li>
          </ul>
          <p className="text-gray-700 mb-4">
            The portal has no English version. While some help pages have been translated,
            all forms, menus, buttons, and error messages are exclusively in Portuguese. This
            is the single biggest pain point for English-speaking freelancers in Portugal.
          </p>

          <h2 id="how-to-get-access" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            How to get access (credentials and password)
          </h2>
          <p className="text-gray-700 mb-4">
            To access Portal das Financas, you need two things:
          </p>
          <ol className="text-gray-700 mb-4 list-decimal pl-6 space-y-2">
            <li>
              <strong>A NIF (Numero de Identificacao Fiscal)</strong> — your Portuguese tax ID
              number. You get this when you register with the tax authority, either at a local
              Financas office or through a fiscal representative.
            </li>
            <li>
              <strong>A portal password (senha de acesso)</strong> — you must request this
              separately. When you get your NIF, ask the Financas office to issue your portal
              credentials. Alternatively, request them online at the portal — a temporary
              password will be mailed to your registered Portuguese address within 5 business days.
            </li>
          </ol>
          <p className="text-gray-700 mb-4">
            <strong>Important:</strong> The password letter arrives by physical mail to the address
            registered with your NIF. If you have not yet updated your address in Portugal, the
            letter will go to your fiscal representative's address.
          </p>
          <p className="text-gray-700 mb-4">
            You can also authenticate using <strong>Chave Movel Digital</strong> (CMD) — Portugal's
            digital mobile key. This is a government-issued digital identity that works like 2FA.
            If you have a Portuguese residence permit, you can activate CMD at any Loja do Cidadao
            or Espaco Cidadao. CMD is faster and more reliable than the portal password.
          </p>

          <h2 id="logging-in" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Logging in for the first time
          </h2>
          <p className="text-gray-700 mb-4">
            Go to <strong>portaldasfinancas.gov.pt</strong>. You will see the main page with a
            login section. Here is what each field means:
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-4 font-mono text-sm">
            <p><strong>NIF:</strong> Enter your 9-digit tax identification number</p>
            <p><strong>Senha:</strong> Enter your password (the one from the letter)</p>
            <p><strong>Autenticar:</strong> Click to log in (means "Authenticate")</p>
          </div>
          <p className="text-gray-700 mb-4">
            If you see <em>"Dados de autenticacao invalidos"</em>, your NIF or password is wrong.
            If you see <em>"Conta bloqueada"</em>, your account is locked after too many failed
            attempts — you will need to request a new password or use CMD.
          </p>
          <p className="text-gray-700 mb-4">
            After your first login, you will be prompted to change your temporary password.
            The new password must be at least 8 characters with a mix of letters and numbers.
          </p>

          <h2 id="main-menu-translated" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Main menu translated to English
          </h2>
          <p className="text-gray-700 mb-4">
            Once logged in, you will see a dashboard with several menu items. Here is a
            translation of the main sections:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 border-b font-semibold text-gray-900">Portuguese</th>
                  <th className="text-left p-3 border-b font-semibold text-gray-900">English</th>
                  <th className="text-left p-3 border-b font-semibold text-gray-900">When you use it</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="p-3 font-mono text-xs">Faturas e Recibos</td>
                  <td className="p-3">Invoices and Receipts</td>
                  <td className="p-3">Issue recibos verdes, view past invoices</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono text-xs">Entregar Declaracao</td>
                  <td className="p-3">Submit Declaration</td>
                  <td className="p-3">File your IRS annual return</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono text-xs">Consultar Declaracoes</td>
                  <td className="p-3">View Declarations</td>
                  <td className="p-3">Check status of submitted declarations</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono text-xs">Situacao Fiscal</td>
                  <td className="p-3">Tax Situation</td>
                  <td className="p-3">View outstanding debts, compliance status</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono text-xs">Atividade</td>
                  <td className="p-3">Activity</td>
                  <td className="p-3">Open, modify, or close freelance activity</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono text-xs">e-Fatura</td>
                  <td className="p-3">e-Invoice</td>
                  <td className="p-3">Validate your personal expense invoices</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono text-xs">Pagamentos</td>
                  <td className="p-3">Payments</td>
                  <td className="p-3">Pay outstanding taxes, generate payment references</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs">Dados Pessoais</td>
                  <td className="p-3">Personal Data</td>
                  <td className="p-3">Update your address, IBAN, contact info</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="issuing-a-recibo-verde" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Issuing a recibo verde (green receipt) — field by field
          </h2>
          <p className="text-gray-700 mb-4">
            This is the task you will do most often. Navigate to <strong>Faturas e Recibos</strong>{' '}
            &rarr; <strong>Emitir</strong> (Issue). You will see a form with these fields:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 border-b font-semibold text-gray-900">Field (Portuguese)</th>
                  <th className="text-left p-3 border-b font-semibold text-gray-900">English</th>
                  <th className="text-left p-3 border-b font-semibold text-gray-900">What to enter</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="p-3 font-mono text-xs">Tipo de documento</td>
                  <td className="p-3">Document type</td>
                  <td className="p-3">Choose <em>Fatura-Recibo</em> (most common for freelancers)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono text-xs">Data de prestacao</td>
                  <td className="p-3">Service date</td>
                  <td className="p-3">The date the service was provided</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono text-xs">NIF do adquirente</td>
                  <td className="p-3">Client's tax ID</td>
                  <td className="p-3">Your client's NIF, or "Consumidor final" for international clients</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono text-xs">Descricao</td>
                  <td className="p-3">Description</td>
                  <td className="p-3">Description of the service provided (can be in English)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono text-xs">Valor base</td>
                  <td className="p-3">Base amount</td>
                  <td className="p-3">The amount before VAT (in EUR)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono text-xs">IVA</td>
                  <td className="p-3">VAT</td>
                  <td className="p-3">Select rate (23%, 13%, 6%) or exemption article</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono text-xs">Regime de IVA</td>
                  <td className="p-3">VAT regime</td>
                  <td className="p-3">Article 53 exemption if under EUR 15,000/year</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs">Retencao na fonte</td>
                  <td className="p-3">Withholding tax</td>
                  <td className="p-3">25% for Portuguese clients, none for international clients</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-4">
            After filling in all fields, click <strong>Emitir</strong> (Issue). You will see a
            confirmation screen. Click <strong>Confirmar</strong> to finalize. The receipt is
            immediately registered with the tax authority and available for download as a PDF.
          </p>
          <p className="text-gray-700 mb-4">
            For a detailed walkthrough of every option, see our{' '}
            <Link to="/guide/recibo-verde-english" className="text-verde-600 hover:underline">
              complete recibo verde guide
            </Link>.
          </p>

          <h2 id="checking-your-tax-situation" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Checking your tax situation (situacao fiscal)
          </h2>
          <p className="text-gray-700 mb-4">
            Navigate to <strong>Situacao Fiscal</strong> &rarr; <strong>Situacao Fiscal Integrada</strong>.
            This page shows:
          </p>
          <ul className="text-gray-700 mb-4 list-disc pl-6 space-y-2">
            <li><strong>Dividas (Debts)</strong> — any outstanding tax payments you owe</li>
            <li><strong>Declaracoes em falta (Missing declarations)</strong> — any filings you have not submitted</li>
            <li><strong>Situacao contributiva (Contribution status)</strong> — whether your social security is up to date</li>
          </ul>
          <p className="text-gray-700 mb-4">
            If everything shows <em>"Sem divergencias"</em> (No discrepancies) or
            <em>"Situacao fiscal regularizada"</em> (Tax situation regularized), you are in good standing.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Tip:</strong> Check this page before renewing your residence permit. SEF/AIMA
            may request proof that your tax situation is regular. You can download a{' '}
            <em>certidao de situacao fiscal</em> (tax compliance certificate) from this section.
          </p>

          <h2 id="viewing-past-receipts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Viewing past receipts and income history
          </h2>
          <p className="text-gray-700 mb-4">
            Go to <strong>Faturas e Recibos</strong> &rarr; <strong>Consultar</strong> (View).
            Select the year and you will see all receipts you have issued. Each entry shows:
          </p>
          <ul className="text-gray-700 mb-4 list-disc pl-6 space-y-2">
            <li><strong>Numero (Number)</strong> — the sequential receipt number</li>
            <li><strong>Data (Date)</strong> — when the receipt was issued</li>
            <li><strong>Valor (Amount)</strong> — the total value including VAT</li>
            <li><strong>Estado (Status)</strong> — Normal, Anulado (Cancelled)</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Click on any receipt to view its details or download the PDF. To cancel a receipt,
            click <strong>Anular</strong> — but be aware that cancelled receipts remain visible
            to the tax authority.
          </p>

          <h2 id="irs-annual-return" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Filing your IRS annual return through the portal
          </h2>
          <p className="text-gray-700 mb-4">
            The IRS filing window for 2025 income is <strong>April 1 to June 30, 2026</strong>.
            Navigate to <strong>Entregar Declaracao</strong> &rarr; <strong>IRS</strong>.
            Key terms you will see:
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-4 font-mono text-sm space-y-1">
            <p><strong>Modelo 3:</strong> The main IRS return form</p>
            <p><strong>Anexo B:</strong> The annex for Category B (self-employment) income</p>
            <p><strong>Rendimento bruto:</strong> Gross income</p>
            <p><strong>Retencoes na fonte:</strong> Withholding taxes already paid</p>
            <p><strong>Deducoes:</strong> Deductions</p>
            <p><strong>Imposto a pagar:</strong> Tax to pay</p>
            <p><strong>Reembolso:</strong> Refund</p>
            <p><strong>Submeter:</strong> Submit</p>
            <p><strong>Simular:</strong> Simulate (preview your tax calculation before submitting)</p>
          </div>
          <p className="text-gray-700 mb-4">
            <strong>Pro tip:</strong> Always click <strong>Simular</strong> before <strong>Submeter</strong>.
            The simulation shows you exactly how much tax you owe (or get back) before you commit.
            For a full filing walkthrough, see our{' '}
            <Link to="/guide/irs-tax-return-freelancer-portugal" className="text-verde-600 hover:underline">
              IRS tax return guide
            </Link>.
          </p>

          <h2 id="seguranca-social-declarations" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Quarterly Seguranca Social declarations
          </h2>
          <p className="text-gray-700 mb-4">
            Social security declarations are <strong>not</strong> done on Portal das Financas.
            They use a separate portal: <strong>Seguranca Social Direta</strong> (app.seg-social.pt).
            However, the income data comes from your Portal das Financas receipts.
          </p>
          <p className="text-gray-700 mb-4">
            On Seguranca Social Direta, you will see:
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-4 font-mono text-sm space-y-1">
            <p><strong>Declaracao Trimestral:</strong> Quarterly Declaration</p>
            <p><strong>Rendimento relevante:</strong> Relevant income (70% of gross)</p>
            <p><strong>Contribuicao:</strong> Contribution amount</p>
            <p><strong>Prazo:</strong> Deadline</p>
          </div>
          <p className="text-gray-700 mb-4">
            Quarterly deadlines: January 31, April 30, July 31, October 31. For details, see our{' '}
            <Link to="/guide/social-security-freelancer-portugal" className="text-verde-600 hover:underline">
              social security guide
            </Link>.
          </p>

          <h2 id="common-error-messages" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Common portal error messages (translated)
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 border-b font-semibold text-gray-900">Portuguese error</th>
                  <th className="text-left p-3 border-b font-semibold text-gray-900">English translation</th>
                  <th className="text-left p-3 border-b font-semibold text-gray-900">What to do</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="p-3 font-mono text-xs">Dados de autenticacao invalidos</td>
                  <td className="p-3">Invalid login credentials</td>
                  <td className="p-3">Check your NIF and password</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono text-xs">Conta bloqueada</td>
                  <td className="p-3">Account locked</td>
                  <td className="p-3">Request a new password</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono text-xs">Sessao expirada</td>
                  <td className="p-3">Session expired</td>
                  <td className="p-3">Log in again (sessions time out after ~20 minutes)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono text-xs">NIF invalido</td>
                  <td className="p-3">Invalid tax ID</td>
                  <td className="p-3">Client NIF is wrong — check the 9-digit number</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono text-xs">Atividade nao encontrada</td>
                  <td className="p-3">Activity not found</td>
                  <td className="p-3">You have not registered your freelance activity yet</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono text-xs">Servico temporariamente indisponivel</td>
                  <td className="p-3">Service temporarily unavailable</td>
                  <td className="p-3">The portal is down (common during IRS filing season)</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs">Documento ja emitido para este periodo</td>
                  <td className="p-3">Document already issued for this period</td>
                  <td className="p-3">You already issued a receipt with the same details</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="mobile-access" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Mobile access and the app
          </h2>
          <p className="text-gray-700 mb-4">
            The Portal das Financas has a mobile app called <strong>Faturas</strong> (available on
            iOS and Android). The app is limited — it lets you validate e-Fatura invoices and
            check basic tax information, but you <strong>cannot issue recibos verdes</strong> from
            the app. For issuing receipts, you must use the full web portal.
          </p>
          <p className="text-gray-700 mb-4">
            The web portal is technically responsive but works poorly on mobile screens. The forms
            are designed for desktop browsers and many dropdown menus are difficult to use on
            small screens. For the best experience, use a laptop or desktop.
          </p>

          <h2 id="verdedesk-alternative" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            VerdeDesk: the English alternative
          </h2>
          <p className="text-gray-700 mb-4">
            VerdeDesk is building an English-language interface for issuing recibos verdes and
            managing your Portuguese freelancer tax obligations. Instead of navigating the
            Portuguese portal with a translation guide, you fill in a simple English form and
            VerdeDesk handles the rest.
          </p>
          <ul className="text-gray-700 mb-4 list-disc pl-6 space-y-2">
            <li>Issue green receipts in English — no Portuguese required</li>
            <li>Automatic VAT threshold tracking (EUR 15,000 Article 53 limit)</li>
            <li>Deadline reminders for IRS filing and Seguranca Social declarations</li>
            <li>Income dashboard with monthly and year-to-date totals</li>
          </ul>

          {/* CTA */}
          <div className="bg-verde-50 border border-verde-200 rounded-xl p-6 mt-10">
            <h3 className="text-lg font-semibold text-verde-800 mb-2">
              Skip the Portuguese portal
            </h3>
            <p className="text-verde-700 mb-4">
              VerdeDesk launches April 2026. Issue recibos verdes, track income, and stay
              compliant — in plain English. EUR 9/month, 14-day free trial.
            </p>
            <Link
              to="/#waitlist"
              className="inline-block px-5 py-2.5 bg-verde-600 hover:bg-verde-700 text-white font-semibold rounded-lg transition-colors"
            >
              Join the waitlist
            </Link>
          </div>
        </div>

        <RelatedGuides current="/guide/portal-das-financas-english" />
      </article>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        <p>&copy; 2026 VerdeDesk. Made for freelancers in Portugal.</p>
      </footer>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { useSEO } from '../lib/useSEO'
import { useArticleSchema } from '../lib/useArticleSchema'
import RelatedGuides from '../components/RelatedGuides'

export default function GuideNifPortugal() {
  useSEO({
    title: 'How to Get a NIF in Portugal as a Foreigner (2026) — Step-by-Step Guide | VerdeDesk',
    description: 'Complete English guide to getting your NIF (tax identification number) in Portugal. Covers EU and non-EU citizens, in-person vs online, fiscal representatives, required documents, and Portal das Financas registration.',
    canonical: 'https://verdedesk.vercel.app/guide/nif-portugal-foreigner',
  })
  useArticleSchema({
    title: 'How to Get a NIF in Portugal as a Foreigner (2026) — Step-by-Step Guide',
    description: 'Complete English guide to getting your NIF in Portugal as a foreigner.',
    url: 'https://verdedesk.vercel.app/guide/nif-portugal-foreigner',
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
          <span className="text-gray-600">NIF for Foreigners</span>
        </nav>

        <p className="text-sm text-verde-600 font-medium mb-4">Getting started</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
          How to Get a NIF in Portugal as a Foreigner: Step-by-Step (2026)
        </h1>
        <p className="text-gray-500 text-sm mb-12">
          Updated March 2026. Covers EU/EEA and non-EU citizens, in-person and online options.
        </p>

        <div className="prose prose-gray max-w-none">
          {/* TOC */}
          <nav aria-label="Table of contents" className="bg-gray-50 rounded-xl p-6 mb-10">
            <p className="font-semibold text-gray-900 mb-3">In this guide:</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm text-verde-700">
              <li><a href="#what-is-nif" className="hover:text-verde-900">What is a NIF and why you need one</a></li>
              <li><a href="#eu-citizens" className="hover:text-verde-900">Getting a NIF as an EU/EEA citizen</a></li>
              <li><a href="#non-eu-citizens" className="hover:text-verde-900">Getting a NIF as a non-EU citizen</a></li>
              <li><a href="#fiscal-representative" className="hover:text-verde-900">Do you need a fiscal representative?</a></li>
              <li><a href="#documents" className="hover:text-verde-900">Required documents</a></li>
              <li><a href="#online-options" className="hover:text-verde-900">Getting a NIF online (before arriving)</a></li>
              <li><a href="#portal-registration" className="hover:text-verde-900">Registering for Portal das Financas</a></li>
              <li><a href="#after-nif" className="hover:text-verde-900">What to do after getting your NIF</a></li>
              <li><a href="#common-mistakes" className="hover:text-verde-900">Common mistakes to avoid</a></li>
              <li><a href="#faq" className="hover:text-verde-900">FAQ</a></li>
            </ol>
          </nav>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            The <strong>NIF (Numero de Identificacao Fiscal)</strong> is your Portuguese tax identification number. It is a unique 9-digit number that you need for virtually everything in Portugal: opening a bank account, signing a rental contract, starting freelance work, paying taxes, and even getting a mobile phone contract. If you are moving to Portugal on a D8 visa, applying for residency, or planning to freelance, getting your NIF is the very first step.
          </p>

          {/* Section 1 */}
          <h2 id="what-is-nif" className="text-xl font-bold text-gray-900 mt-12 mb-4">
            What is a NIF and why you need one
          </h2>
          <p className="text-gray-700 mb-4">
            NIF stands for <strong>Numero de Identificacao Fiscal</strong> (Tax Identification Number). It is issued by the <strong>Autoridade Tributaria e Aduaneira (AT)</strong> — the Portuguese tax authority. Every person who has financial dealings in Portugal needs one.
          </p>
          <p className="text-gray-700 mb-4">You need a NIF to:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li><strong>Open a bank account</strong> — all Portuguese banks require it</li>
            <li><strong>Sign a rental contract</strong> — landlords need it for tax reporting</li>
            <li><strong>Register as a freelancer</strong> — you cannot open activity (abrir atividade) without one</li>
            <li><strong>File taxes</strong> — IRS annual return requires your NIF</li>
            <li><strong>Get a phone contract</strong> — most operators require it</li>
            <li><strong>Buy property</strong> — mandatory for real estate transactions</li>
            <li><strong>Apply for residency</strong> — SEF/AIMA requires it for permit applications</li>
          </ul>

          <div className="bg-verde-50 border border-verde-200 rounded-xl p-6 mb-8">
            <p className="text-verde-800 font-semibold mb-1">NIF format</p>
            <p className="text-verde-700 text-sm">
              A NIF is exactly 9 digits. NIFs for individuals start with 1, 2, or 3. NIFs assigned to foreigners typically start with <strong>2</strong>. Companies start with 5. You will use this number on every invoice, tax form, and government interaction in Portugal.
            </p>
          </div>

          {/* Section 2 */}
          <h2 id="eu-citizens" className="text-xl font-bold text-gray-900 mt-12 mb-4">
            Getting a NIF as an EU/EEA citizen
          </h2>
          <p className="text-gray-700 mb-4">
            If you hold a passport from an EU or EEA country (including Switzerland), the process is straightforward:
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
            <li>
              <strong>Visit any Servico de Financas (tax office)</strong> — find your nearest office at <em>portaldasfinancas.gov.pt</em>. Opening hours are typically Monday to Friday, 9:00 to 15:30.
            </li>
            <li>
              <strong>Bring your passport or national ID card</strong> — a valid, unexpired document.
            </li>
            <li>
              <strong>Bring proof of address</strong> — this can be a Portuguese address (rental contract, utility bill) or your home country address. If you provide a home country address, your NIF will be registered as a non-resident.
            </li>
            <li>
              <strong>Fill in the registration form</strong> — the staff will help you. The form is in Portuguese but the process takes about 10 minutes.
            </li>
            <li>
              <strong>Receive your NIF immediately</strong> — it is issued on the spot. You will get a printed document with your number.
            </li>
          </ol>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
            <p className="text-amber-800 font-semibold mb-1">No appointment needed in most cases</p>
            <p className="text-amber-700 text-sm">
              Most tax offices handle NIF requests on a walk-in basis. However, offices in Lisbon and Porto can be busy. Some now require appointments — check the Financas office directly or book online through Portal das Financas. Arrive early (before 10:00) for shorter waits.
            </p>
          </div>

          <p className="text-gray-700 mb-4">
            <strong>Key advantage for EU/EEA citizens:</strong> you do <em>not</em> need a fiscal representative. You can register directly with a foreign address and manage your own tax affairs.
          </p>

          {/* Section 3 */}
          <h2 id="non-eu-citizens" className="text-xl font-bold text-gray-900 mt-12 mb-4">
            Getting a NIF as a non-EU citizen
          </h2>
          <p className="text-gray-700 mb-4">
            Non-EU citizens (including Americans, Canadians, Brazilians, Australians, and anyone outside the EU/EEA) follow a slightly different process:
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Option A: In person at a tax office</h3>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
            <li>
              <strong>Appoint a fiscal representative</strong> — non-EU non-residents must have a fiscal representative (representante fiscal) who is a Portuguese tax resident. This can be a lawyer, accountant, or any Portuguese resident willing to act on your behalf.
            </li>
            <li>
              <strong>Visit the tax office together</strong> — both you and your fiscal representative must attend (or the representative can go alone with a power of attorney).
            </li>
            <li>
              <strong>Bring required documents</strong> — passport, proof of address from home country, and the representative's NIF and ID.
            </li>
            <li>
              <strong>Receive your NIF</strong> — issued the same day.
            </li>
          </ol>

          <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Option B: Through a lawyer or service (remote)</h3>
          <p className="text-gray-700 mb-4">
            Many law firms and NIF services can obtain your NIF remotely before you arrive in Portugal. They act as your fiscal representative and handle all paperwork. Typical cost: EUR 50 to EUR 150.
          </p>

          <div className="bg-verde-50 border border-verde-200 rounded-xl p-6 mb-8">
            <p className="text-verde-800 font-semibold mb-1">When can you drop the fiscal representative?</p>
            <p className="text-verde-700 text-sm">
              Once you become a <strong>tax resident in Portugal</strong> (living here more than 183 days/year or having your habitual residence here), you can update your NIF to a Portuguese address and remove the fiscal representative. Do this at any tax office or through Portal das Financas. This is important — having a fiscal representative means they receive all your tax correspondence.
            </p>
          </div>

          {/* Section 4 */}
          <h2 id="fiscal-representative" className="text-xl font-bold text-gray-900 mt-12 mb-4">
            Do you need a fiscal representative?
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-gray-900 border-b">Your situation</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-900 border-b">Fiscal representative needed?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-3 text-gray-700">EU/EEA citizen, non-resident</td>
                  <td className="px-4 py-3 text-gray-700"><strong>No</strong> — register directly with home address</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 text-gray-700">EU/EEA citizen, tax resident in Portugal</td>
                  <td className="px-4 py-3 text-gray-700"><strong>No</strong> — register with Portuguese address</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 text-gray-700">Non-EU citizen, non-resident</td>
                  <td className="px-4 py-3 text-gray-700"><strong>Yes</strong> — mandatory under Article 19 LGT</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 text-gray-700">Non-EU citizen, tax resident in Portugal</td>
                  <td className="px-4 py-3 text-gray-700"><strong>No</strong> — once you have a Portuguese address and residency</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 text-gray-700">D8 visa holder arriving in Portugal</td>
                  <td className="px-4 py-3 text-gray-700"><strong>Yes initially</strong> — until you register a Portuguese address</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 5 */}
          <h2 id="documents" className="text-xl font-bold text-gray-900 mt-12 mb-4">
            Required documents
          </h2>
          <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">EU/EEA citizens</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>Valid passport or national ID card</li>
            <li>Proof of address (utility bill, bank statement, or rental contract — home country or Portuguese)</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Non-EU citizens</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>Valid passport</li>
            <li>Proof of address from home country (utility bill or bank statement, translated if not in Portuguese, English, French, or Spanish)</li>
            <li>Fiscal representative's NIF and identification document</li>
            <li>Signed declaration of acceptance by the fiscal representative (Modelo 1 form)</li>
            <li>Power of attorney if the representative is applying without you present</li>
          </ul>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
            <p className="text-amber-800 font-semibold mb-1">Translation requirements</p>
            <p className="text-amber-700 text-sm">
              Documents in English are generally accepted. Documents in other languages may need a certified translation (traducao certificada). The tax office has discretion — smaller offices may be stricter. When in doubt, bring a certified translation.
            </p>
          </div>

          {/* Section 6 */}
          <h2 id="online-options" className="text-xl font-bold text-gray-900 mt-12 mb-4">
            Getting a NIF online (before arriving)
          </h2>
          <p className="text-gray-700 mb-4">
            You cannot apply for a NIF directly online through Portal das Financas as a foreigner. However, several options exist to get your NIF remotely:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li>
              <strong>NIF service providers</strong> — companies like GetNIFPortugal, Bordr, and others offer online NIF applications. You submit your documents digitally, they act as your fiscal representative, and mail you your NIF. Typical cost: EUR 70 to EUR 150. Processing time: 3 to 10 business days.
            </li>
            <li>
              <strong>Law firms</strong> — many Portuguese immigration law firms offer NIF registration as part of their D8 visa or relocation packages.
            </li>
            <li>
              <strong>Portuguese consulates</strong> — some Portuguese consulates abroad can process NIF applications. Contact your nearest consulate to check availability.
            </li>
          </ul>

          <div className="bg-verde-50 border border-verde-200 rounded-xl p-6 mb-8">
            <p className="text-verde-800 font-semibold mb-1">Pro tip: get your NIF before arriving</p>
            <p className="text-verde-700 text-sm">
              Having your NIF ready before you land in Portugal saves significant time. You can immediately open a bank account, sign a rental contract, and begin your freelance registration — instead of spending your first weeks waiting at tax offices.
            </p>
          </div>

          {/* Section 7 */}
          <h2 id="portal-registration" className="text-xl font-bold text-gray-900 mt-12 mb-4">
            Registering for Portal das Financas
          </h2>
          <p className="text-gray-700 mb-4">
            Your NIF alone is not enough to do anything online. You also need <strong>Portal das Financas access</strong> — the online tax portal where you file taxes, issue invoices (recibos verdes), and manage your tax affairs. Here is how to register:
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
            <li>
              <strong>Request a password</strong> — after receiving your NIF, go to <em>portaldasfinancas.gov.pt</em> and click "Registar-se" (Register). Enter your NIF and it will send a password letter to your registered address.
            </li>
            <li>
              <strong>Wait for the password letter</strong> — the letter arrives in 5 to 10 business days to a Portuguese address, or 2 to 4 weeks to a foreign address. It contains an initial access code.
            </li>
            <li>
              <strong>Activate your account</strong> — go to the portal, log in with your NIF and the code from the letter, and set your own password.
            </li>
            <li>
              <strong>Alternative: request in person</strong> — visit any Financas office with your NIF and ID. They can issue portal credentials on the spot, bypassing the letter.
            </li>
          </ol>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
            <p className="text-amber-800 font-semibold mb-1">Speed tip: get your password in person</p>
            <p className="text-amber-700 text-sm">
              The password letter can take weeks. If you need portal access quickly (to register as a freelancer and start issuing invoices), visit the tax office in person and ask for immediate credentials. Bring your passport and NIF document.
            </p>
          </div>

          {/* Section 8 */}
          <h2 id="after-nif" className="text-xl font-bold text-gray-900 mt-12 mb-4">
            What to do after getting your NIF
          </h2>
          <p className="text-gray-700 mb-4">
            Once you have your NIF, here is the typical next-steps sequence for freelancers arriving in Portugal:
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
            <li><strong>Open a Portuguese bank account</strong> — bring your NIF, passport, and proof of address. Most banks require an in-person visit.</li>
            <li><strong>Register for Portal das Financas</strong> — get your online credentials (see above).</li>
            <li><strong>Open freelance activity (abrir atividade)</strong> — <Link to="/guide/register-freelancer-portugal" className="text-verde-600 hover:text-verde-800 underline">our guide walks you through every step</Link>.</li>
            <li><strong>Choose your VAT regime</strong> — <Link to="/guide/vat-exemption-article-53-portugal" className="text-verde-600 hover:text-verde-800 underline">understand the Article 53 exemption</Link> if your income will be under EUR 15,000/year.</li>
            <li><strong>Issue your first recibo verde</strong> — <Link to="/guide/recibo-verde-english" className="text-verde-600 hover:text-verde-800 underline">follow our step-by-step guide in English</Link>.</li>
            <li><strong>Check IFICI/NHR 2.0 eligibility</strong> — <Link to="/tools/nhr-checker" className="text-verde-600 hover:text-verde-800 underline">use our free checker tool</Link> to see if you qualify for the 20% flat tax rate.</li>
          </ol>

          {/* Section 9 */}
          <h2 id="common-mistakes" className="text-xl font-bold text-gray-900 mt-12 mb-4">
            Common mistakes to avoid
          </h2>
          <div className="space-y-4 mb-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800 font-semibold text-sm">Using your home country tax ID instead of a Portuguese NIF</p>
              <p className="text-red-700 text-sm mt-1">
                Your US SSN, UK UTR, or other national tax ID does not work in Portugal. You need a Portuguese NIF specifically.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800 font-semibold text-sm">Not updating your address after becoming resident</p>
              <p className="text-red-700 text-sm mt-1">
                If your NIF is registered to a foreign address, you are classified as non-resident. This affects your tax obligations and withholding rates. Update to a Portuguese address as soon as you have one.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800 font-semibold text-sm">Keeping a fiscal representative after becoming resident</p>
              <p className="text-red-700 text-sm mt-1">
                Once you are tax resident (Portuguese address registered), remove your fiscal representative. Otherwise, all official tax correspondence goes to them, not you — and you may miss important deadlines.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800 font-semibold text-sm">Waiting until you arrive to get your NIF</p>
              <p className="text-red-700 text-sm mt-1">
                Many expats lose their first week or more waiting for NIF appointments and password letters. Apply remotely before arriving if possible.
              </p>
            </div>
          </div>

          {/* Section 10 — FAQ */}
          <h2 id="faq" className="text-xl font-bold text-gray-900 mt-12 mb-4">
            Frequently asked questions
          </h2>

          <h3 className="font-semibold text-gray-900 mt-6 mb-2">How much does a NIF cost?</h3>
          <p className="text-gray-700 mb-4">
            Getting a NIF at a Portuguese tax office is <strong>free</strong>. If you use an online service or lawyer to get it remotely, expect to pay EUR 50 to EUR 150 for the service fee.
          </p>

          <h3 className="font-semibold text-gray-900 mt-6 mb-2">How long does it take?</h3>
          <p className="text-gray-700 mb-4">
            In person: <strong>same day</strong> (usually within 30 minutes). Through an online service: <strong>3 to 10 business days</strong>.
          </p>

          <h3 className="font-semibold text-gray-900 mt-6 mb-2">Can I get a NIF without being in Portugal?</h3>
          <p className="text-gray-700 mb-4">
            Yes. Non-EU citizens can apply through an online NIF service or law firm that acts as fiscal representative. EU citizens can sometimes apply at Portuguese consulates abroad or through a representative.
          </p>

          <h3 className="font-semibold text-gray-900 mt-6 mb-2">My NIF starts with 2 — is that normal?</h3>
          <p className="text-gray-700 mb-4">
            Yes. NIFs starting with 2 are assigned to individuals who are not Portuguese nationals. It works identically to any other NIF.
          </p>

          <h3 className="font-semibold text-gray-900 mt-6 mb-2">Can my spouse or partner be my fiscal representative?</h3>
          <p className="text-gray-700 mb-4">
            Yes, as long as they are a Portuguese tax resident with their own NIF and Portuguese address. They must formally accept the role at the tax office.
          </p>

          <h3 className="font-semibold text-gray-900 mt-6 mb-2">I already have a NIF from a previous visit. Do I need a new one?</h3>
          <p className="text-gray-700 mb-8">
            No. Your NIF is permanent and never changes. If you already have one, simply update your address and residency status at a tax office.
          </p>
        </div>

        <RelatedGuides current="/guide/nif-portugal-foreigner" />
      </article>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        <p>&copy; 2026 VerdeDesk. Made for freelancers in Portugal.</p>
      </footer>
    </div>
  )
}

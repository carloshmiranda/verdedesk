import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSEO } from '../lib/useSEO'

type Step = 'residency' | 'duration' | 'previous_nhr' | 'profession' | 'education' | 'result'
type Result = 'likely_eligible' | 'unlikely' | 'maybe'

interface Answers {
  isNewResident: boolean | null
  fiveYearAbsence: boolean | null
  previousNHR: boolean | null
  profession: string | null
  education: string | null
}

const QUALIFYING_PROFESSIONS = [
  { id: 'tech', label: 'Technology / ICT specialist' },
  { id: 'science', label: 'Physical sciences, mathematics, or engineering' },
  { id: 'medical', label: 'Medical doctor or healthcare specialist' },
  { id: 'academic', label: 'University professor or researcher' },
  { id: 'executive', label: 'Senior executive / company director (CEO, board member)' },
  { id: 'startup', label: 'Employee or director of a certified startup' },
  { id: 'rd', label: 'R&D staff under Portugal SIFIDE program' },
  { id: 'phd_researcher', label: 'PhD researcher in national scientific network' },
  { id: 'iapmei', label: 'IAPMEI or AICEP-approved professional' },
  { id: 'islands', label: 'Azores or Madeira regional specialist' },
  { id: 'other', label: 'Other profession (freelancer, creative, consultant, etc.)' },
]

const EDUCATION_LEVELS = [
  { id: 'phd', label: 'PhD or Doctorate (EQF Level 8)' },
  { id: 'bachelor_plus', label: "Bachelor's degree + 3 years relevant experience (EQF Level 6+)" },
  { id: 'bachelor', label: "Bachelor's degree (less than 3 years experience)" },
  { id: 'none', label: 'No university degree' },
]

function getResult(answers: Answers): { result: Result; reasons: string[] } {
  const reasons: string[] = []

  if (answers.isNewResident === false) {
    reasons.push('You must become a Portuguese tax resident after January 1, 2024 to qualify for IFICI.')
    return { result: 'unlikely', reasons }
  }

  if (answers.fiveYearAbsence === false) {
    reasons.push('You must not have been a Portuguese tax resident in the previous 5 years.')
    return { result: 'unlikely', reasons }
  }

  if (answers.previousNHR === true) {
    reasons.push('You cannot have previously benefited from the original NHR or another special Portuguese tax regime.')
    return { result: 'unlikely', reasons }
  }

  const qualifyingProfessions = ['tech', 'science', 'medical', 'academic', 'executive', 'startup', 'rd', 'phd_researcher', 'iapmei', 'islands']
  const hasQualifyingProfession = answers.profession !== null && qualifyingProfessions.includes(answers.profession)

  const hasQualifyingEducation = answers.education === 'phd' || answers.education === 'bachelor_plus'

  if (!hasQualifyingProfession) {
    reasons.push('IFICI targets specific high-value professions: technology, science, engineering, medical, academic, executive, R&D, and certified startup roles. General freelancers, consultants, and creatives do not qualify under the current criteria.')
    return { result: 'unlikely', reasons }
  }

  if (!hasQualifyingEducation) {
    if (answers.education === 'bachelor') {
      reasons.push('You need at least a Bachelor\'s degree plus 3 years of relevant professional experience (EQF Level 6+) to qualify. Consider waiting until you reach the 3-year experience threshold.')
      return { result: 'unlikely', reasons }
    }
    if (answers.profession === 'startup' || answers.profession === 'rd' || answers.profession === 'phd_researcher' || answers.profession === 'iapmei') {
      reasons.push('Your professional category may qualify through alternative routes (certified startup, SIFIDE, IAPMEI/AICEP approval) even without a formal degree. Consult a Portuguese tax advisor to confirm your specific eligibility.')
      return { result: 'maybe', reasons }
    }
    reasons.push('Most IFICI categories require at minimum a Bachelor\'s degree plus 3 years of relevant professional experience. Without a university degree, eligibility is very limited.')
    return { result: 'unlikely', reasons }
  }

  // All criteria met
  reasons.push('You meet the key eligibility criteria for IFICI (NHR 2.0):')
  reasons.push('New tax resident after January 1, 2024')
  reasons.push('No Portuguese tax residency in the previous 5 years')
  reasons.push('No previous NHR or special tax regime benefits')
  reasons.push(`Qualifying profession: ${QUALIFYING_PROFESSIONS.find(p => p.id === answers.profession)?.label}`)
  reasons.push(`Qualifying education: ${EDUCATION_LEVELS.find(e => e.id === answers.education)?.label}`)

  if (answers.profession === 'executive') {
    reasons.push('Note: Senior executives must be employed by a company that generates at least 50% of turnover from exports, or operates in qualifying sectors (extractive/transformative industries, ICT, R&D, higher education, healthcare).')
  }

  return { result: 'likely_eligible', reasons }
}

export default function NhrChecker() {
  useSEO({
    title: 'NHR 2.0 Eligibility Checker (IFICI Portugal 2026) — Do You Qualify? | VerdeDesk',
    description: 'Free interactive tool to check if you qualify for Portugal NHR 2.0 (IFICI) tax regime. Answer 5 questions to find out if you can get the 20% flat tax rate for 10 years. Built for D8 visa holders and expat professionals.',
    canonical: 'https://verdedesk.vercel.app/tools/nhr-checker',
  })

  const [step, setStep] = useState<Step>('residency')
  const [answers, setAnswers] = useState<Answers>({
    isNewResident: null,
    fiveYearAbsence: null,
    previousNHR: null,
    profession: null,
    education: null,
  })

  function handleAnswer(field: keyof Answers, value: boolean | string) {
    const newAnswers = { ...answers, [field]: value }
    setAnswers(newAnswers)

    // Determine next step
    if (field === 'isNewResident') {
      if (value === false) { setStep('result'); setAnswers(newAnswers); return }
      setStep('duration')
    } else if (field === 'fiveYearAbsence') {
      if (value === false) { setStep('result'); setAnswers(newAnswers); return }
      setStep('previous_nhr')
    } else if (field === 'previousNHR') {
      if (value === true) { setStep('result'); setAnswers(newAnswers); return }
      setStep('profession')
    } else if (field === 'profession') {
      if (value === 'other') { setStep('result'); setAnswers(newAnswers); return }
      setStep('education')
    } else if (field === 'education') {
      setStep('result')
    }
  }

  function restart() {
    setStep('residency')
    setAnswers({ isNewResident: null, fiveYearAbsence: null, previousNHR: null, profession: null, education: null })
  }

  const { result, reasons } = step === 'result' ? getResult(answers) : { result: null, reasons: [] }

  const stepNumber = { residency: 1, duration: 2, previous_nhr: 3, profession: 4, education: 5, result: 6 }[step]
  const totalSteps = 5

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
        <a href="/#waitlist" className="text-sm font-medium text-verde-700 hover:text-verde-800">
          Join waitlist
        </a>
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-3xl mx-auto px-6 pt-4">
        <nav className="text-sm text-gray-500">
          <Link to="/" className="hover:text-verde-600">Home</Link>
          {' / '}
          <span className="text-gray-900">NHR 2.0 Eligibility Checker</span>
        </nav>
      </div>

      {/* Header */}
      <section className="max-w-3xl mx-auto px-6 pt-8 pb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          NHR 2.0 / IFICI Eligibility Checker
        </h1>
        <p className="text-lg text-gray-600">
          Check if you qualify for Portugal's new IFICI tax regime (NHR 2.0) — a 20% flat income tax rate for 10 years.
          Answer 5 questions to get your result.
        </p>
      </section>

      {/* Checker */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
          {/* Progress bar */}
          {step !== 'result' && (
            <div className="mb-8">
              <div className="flex justify-between text-xs text-gray-400 mb-2">
                <span>Question {stepNumber} of {totalSteps}</span>
                <span>{Math.round(((stepNumber - 1) / totalSteps) * 100)}% complete</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-verde-500 rounded-full transition-all duration-300"
                  style={{ width: `${((stepNumber - 1) / totalSteps) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Step: Residency */}
          {step === 'residency' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Are you becoming a Portuguese tax resident for the first time?
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                You become a tax resident if you spend more than 183 days in Portugal in a calendar year,
                or if you have a habitual residence in Portugal on December 31.
              </p>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => handleAnswer('isNewResident', true)}
                  className="w-full text-left p-4 rounded-lg border-2 border-gray-200 hover:border-verde-400 hover:bg-verde-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">Yes</span>
                  <span className="block text-sm text-gray-500 mt-1">
                    I am moving to Portugal or recently arrived (after January 1, 2024)
                  </span>
                </button>
                <button
                  onClick={() => handleAnswer('isNewResident', false)}
                  className="w-full text-left p-4 rounded-lg border-2 border-gray-200 hover:border-gray-400 transition-colors"
                >
                  <span className="font-medium text-gray-900">No</span>
                  <span className="block text-sm text-gray-500 mt-1">
                    I have been a Portuguese tax resident since before 2024
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* Step: 5-year absence */}
          {step === 'duration' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Have you been a non-resident of Portugal for the last 5 years?
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                IFICI requires that you have not been a Portuguese tax resident at any point in the 5 calendar years
                before the year you become a resident.
              </p>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => handleAnswer('fiveYearAbsence', true)}
                  className="w-full text-left p-4 rounded-lg border-2 border-gray-200 hover:border-verde-400 hover:bg-verde-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">Yes, I have not lived in Portugal in the last 5 years</span>
                </button>
                <button
                  onClick={() => handleAnswer('fiveYearAbsence', false)}
                  className="w-full text-left p-4 rounded-lg border-2 border-gray-200 hover:border-gray-400 transition-colors"
                >
                  <span className="font-medium text-gray-900">No, I was a Portuguese tax resident within the last 5 years</span>
                </button>
              </div>
            </div>
          )}

          {/* Step: Previous NHR */}
          {step === 'previous_nhr' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Have you previously benefited from Portugal's original NHR or another special tax regime?
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                If you used the original Non-Habitual Resident (NHR) regime or another Portuguese special tax
                regime in a previous residency period, you are not eligible for IFICI.
              </p>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => handleAnswer('previousNHR', false)}
                  className="w-full text-left p-4 rounded-lg border-2 border-gray-200 hover:border-verde-400 hover:bg-verde-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">No, I have never used NHR or a special Portuguese tax regime</span>
                </button>
                <button
                  onClick={() => handleAnswer('previousNHR', true)}
                  className="w-full text-left p-4 rounded-lg border-2 border-gray-200 hover:border-gray-400 transition-colors"
                >
                  <span className="font-medium text-gray-900">Yes, I previously used NHR or another special regime</span>
                </button>
              </div>
            </div>
          )}

          {/* Step: Profession */}
          {step === 'profession' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                What is your profession or professional category?
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                IFICI is limited to specific high-value professions. Select the category that best describes your work.
              </p>
              <div className="flex flex-col gap-2">
                {QUALIFYING_PROFESSIONS.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => handleAnswer('profession', id)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                      id === 'other'
                        ? 'border-gray-200 hover:border-gray-400'
                        : 'border-gray-200 hover:border-verde-400 hover:bg-verde-50'
                    }`}
                  >
                    <span className="font-medium text-gray-900 text-sm">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step: Education */}
          {step === 'education' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                What is your highest education level?
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                Most IFICI categories require at minimum a Bachelor's degree (EQF Level 6) plus 3 years of relevant
                professional experience. A PhD/Doctorate qualifies automatically.
              </p>
              <div className="flex flex-col gap-3">
                {EDUCATION_LEVELS.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => handleAnswer('education', id)}
                    className="w-full text-left p-4 rounded-lg border-2 border-gray-200 hover:border-verde-400 hover:bg-verde-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Result */}
          {step === 'result' && result && (
            <div>
              <div className={`p-6 rounded-xl border-2 mb-6 ${
                result === 'likely_eligible'
                  ? 'bg-verde-50 border-verde-300'
                  : result === 'maybe'
                  ? 'bg-amber-50 border-amber-300'
                  : 'bg-red-50 border-red-300'
              }`}>
                <h2 className={`text-xl font-bold mb-3 ${
                  result === 'likely_eligible' ? 'text-verde-800'
                  : result === 'maybe' ? 'text-amber-800'
                  : 'text-red-800'
                }`}>
                  {result === 'likely_eligible' && 'You likely qualify for IFICI (NHR 2.0)'}
                  {result === 'maybe' && 'You may qualify — consult a tax advisor'}
                  {result === 'unlikely' && 'You likely do not qualify for IFICI (NHR 2.0)'}
                </h2>
                <ul className={`space-y-2 text-sm ${
                  result === 'likely_eligible' ? 'text-verde-700'
                  : result === 'maybe' ? 'text-amber-700'
                  : 'text-red-700'
                }`}>
                  {reasons.map((reason, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="flex-shrink-0 mt-0.5">
                        {i === 0 ? '' : result === 'likely_eligible' ? '✓' : ''}
                      </span>
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {result === 'likely_eligible' && (
                <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">What IFICI gives you</h3>
                  <div className="grid sm:grid-cols-3 gap-4 text-center">
                    <div className="bg-verde-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-verde-700">20%</div>
                      <div className="text-xs text-verde-600 mt-1">Flat income tax rate</div>
                    </div>
                    <div className="bg-verde-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-verde-700">10 yr</div>
                      <div className="text-xs text-verde-600 mt-1">Benefit duration</div>
                    </div>
                    <div className="bg-verde-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-verde-700">Jan 15</div>
                      <div className="text-xs text-verde-600 mt-1">Application deadline</div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">
                    Apply by January 15 of the year following when you become a tax resident.
                    For example, if you become resident in 2026, apply by January 15, 2027.
                    The benefit is backdated to your residency start date.
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={restart}
                  className="px-6 py-3 border-2 border-gray-200 hover:border-gray-400 text-gray-700 font-medium rounded-lg transition-colors"
                >
                  Start over
                </button>
                <Link
                  to="/tools/tax-calculator"
                  className="px-6 py-3 bg-verde-600 hover:bg-verde-700 text-white font-semibold rounded-lg transition-colors text-center"
                >
                  Calculate your taxes with NHR 2.0
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-400 mt-4 text-center">
          This tool provides a preliminary eligibility assessment based on publicly available criteria as of March 2026.
          IFICI eligibility depends on individual circumstances and is determined by the Portuguese tax authorities.
          Always consult a qualified Portuguese tax advisor before making decisions based on this assessment.
        </p>

        {/* Explainer content */}
        <div className="mt-12 space-y-8">
          <h2 className="text-2xl font-bold text-gray-900">What is NHR 2.0 / IFICI?</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">The end of the original NHR</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Portugal's original Non-Habitual Resident (NHR) tax regime ended on December 31, 2024.
                It was replaced by the IFICI regime (Incentivo Fiscal a Investigacao Cientifica e Inovacao),
                commonly called NHR 2.0, which took effect on January 1, 2025. Unlike the broad original NHR,
                IFICI is targeted at specific high-value professions in science, technology, and innovation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Who qualifies for IFICI?</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                IFICI targets professionals in strategic sectors. Eligible categories include:
              </p>
              <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                <li>University professors and researchers</li>
                <li>Medical doctors and healthcare specialists</li>
                <li>Physical sciences, mathematics, and engineering professionals</li>
                <li>ICT and technology specialists</li>
                <li>Senior executives and company directors</li>
                <li>R&D staff under the SIFIDE program</li>
                <li>Directors or employees of certified startups</li>
                <li>IAPMEI or AICEP-approved professionals</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">
                Most categories require at minimum a Bachelor's degree (EQF Level 6) plus 3 years of relevant
                professional experience, or a PhD/Doctorate.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Key requirements</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><strong>New residency:</strong> You must become a Portuguese tax resident after January 1, 2024.</li>
                <li><strong>5-year absence:</strong> You cannot have been a Portuguese tax resident in the previous 5 calendar years.</li>
                <li><strong>No prior NHR:</strong> You cannot have previously benefited from the original NHR or another special Portuguese tax regime.</li>
                <li><strong>Qualifying employer:</strong> For executives, your employer must generate at least 50% of turnover from exports or operate in qualifying sectors.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Tax benefits</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                IFICI provides a <strong>20% flat income tax rate</strong> on Portuguese-sourced employment and
                self-employment income for <strong>10 consecutive years</strong>. It also offers double taxation
                relief on certain foreign-sourced income (dividends, royalties, employment income from abroad).
                Unlike the original NHR, pension income and passive investment income no longer qualify for
                preferential treatment under IFICI.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">How to apply</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Apply by <strong>January 15</strong> of the year following the one in which you become a Portuguese
                tax resident. For example, if you arrive and become tax resident in 2026, your application deadline
                is January 15, 2027. The application is submitted through the Portal das Financas. Processing
                typically takes 2 to 3 months.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">IFICI vs original NHR: key differences</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 pr-4 text-gray-500 font-medium">Feature</th>
                      <th className="text-left py-2 pr-4 text-gray-500 font-medium">Original NHR</th>
                      <th className="text-left py-2 text-gray-500 font-medium">IFICI (NHR 2.0)</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-50">
                      <td className="py-2 pr-4">Eligibility</td>
                      <td className="py-2 pr-4">Any new tax resident</td>
                      <td className="py-2">Specific professions only</td>
                    </tr>
                    <tr className="border-b border-gray-50">
                      <td className="py-2 pr-4">Income tax rate</td>
                      <td className="py-2 pr-4">20% flat (employment)</td>
                      <td className="py-2">20% flat (employment + self-employment)</td>
                    </tr>
                    <tr className="border-b border-gray-50">
                      <td className="py-2 pr-4">Pension income</td>
                      <td className="py-2 pr-4">10% flat rate</td>
                      <td className="py-2">Standard progressive rates (up to 48%)</td>
                    </tr>
                    <tr className="border-b border-gray-50">
                      <td className="py-2 pr-4">Foreign income</td>
                      <td className="py-2 pr-4">Exempt in many cases</td>
                      <td className="py-2">Double taxation relief (limited)</td>
                    </tr>
                    <tr className="border-b border-gray-50">
                      <td className="py-2 pr-4">Duration</td>
                      <td className="py-2 pr-4">10 years</td>
                      <td className="py-2">10 years</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Education requirement</td>
                      <td className="py-2 pr-4">None</td>
                      <td className="py-2">Bachelor's + 3yr exp. or PhD</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-verde-600 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Stay on top of your Portuguese tax obligations
          </h2>
          <p className="text-verde-100 mb-6 max-w-lg mx-auto">
            Whether you qualify for IFICI or use the standard regime, VerdeDesk helps you issue recibos verdes,
            track income thresholds, and meet every deadline — in plain English.
          </p>
          <a
            href="/#waitlist"
            className="inline-block px-8 py-3 bg-white hover:bg-verde-50 text-verde-700 font-semibold rounded-lg transition-colors"
          >
            Join the waitlist
          </a>
          <p className="text-verde-200 text-sm mt-3">Free to join. Early members get their first month free.</p>
        </div>

        {/* Related */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Related tools and guides</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { to: '/tools/tax-calculator', label: 'Portugal Freelancer Tax Calculator (with NHR 2.0 toggle)' },
              { to: '/guide/d8-visa-portugal-taxes', label: 'D8 Visa Portugal Taxes: Complete 2026 Guide' },
              { to: '/guide/irs-tax-return-freelancer-portugal', label: 'How to File Your IRS Tax Return as a Freelancer' },
              { to: '/guide/social-security-freelancer-portugal', label: 'Social Security for Freelancers in Portugal' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="block p-3 rounded-lg border border-gray-100 hover:border-verde-200 hover:bg-verde-50 transition-colors"
              >
                <span className="text-verde-600 text-sm font-medium">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        <p>&copy; 2026 VerdeDesk. Made for freelancers in Portugal.</p>
      </footer>
    </div>
  )
}

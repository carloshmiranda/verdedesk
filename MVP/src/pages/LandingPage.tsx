import { useState } from 'react'
import posthog from 'posthog-js'

const WAITLIST_API = '/api/waitlist'

export default function LandingPage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch(WAITLIST_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('success')
        posthog.capture('waitlist_signup', { email })
        setEmail('')
      } else {
        const data = await res.json().catch(() => ({}))
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Network error. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-verde-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">V</span>
          </div>
          <span className="font-semibold text-gray-900">VerdeDesk</span>
        </div>
        <a
          href="#waitlist"
          className="text-sm font-medium text-verde-700 hover:text-verde-800"
        >
          Join waitlist
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-24 text-center">
        <div className="inline-flex items-center gap-2 bg-verde-50 text-verde-700 text-sm font-medium px-3 py-1 rounded-full mb-8">
          <span>For English-speaking freelancers in Portugal</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Stop fighting the{' '}
          <span className="text-verde-600">Portal das Finanças</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Issue recibos verdes, track your income, and stay compliant with Portuguese tax law —
          in plain English. Built for D8 visa holders and expat freelancers.
        </p>

        {/* Waitlist form */}
        <div id="waitlist">
          {status === 'success' ? (
            <div className="bg-verde-50 border border-verde-200 rounded-xl p-6 max-w-md mx-auto">
              <div className="text-2xl mb-2">🎉</div>
              <p className="font-semibold text-verde-800">You're on the list!</p>
              <p className="text-verde-700 text-sm mt-1">
                We'll email you when VerdeDesk opens. No spam, ever.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-verde-500 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3 bg-verde-600 hover:bg-verde-700 disabled:bg-verde-400 text-white font-semibold rounded-lg transition-colors whitespace-nowrap"
              >
                {status === 'loading' ? 'Joining...' : 'Join waitlist'}
              </button>
            </form>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-sm mt-3">{errorMsg}</p>
          )}
          <p className="text-gray-400 text-sm mt-3">Free to join. No card required.</p>
        </div>
      </section>

      {/* Social proof quotes */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-wide mb-8">
            What freelancers in Portugal actually say
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                quote: '"The Finanças portal is only in Portuguese. I had to ask a friend to help with every step."',
                attribution: 'Expat freelancer, Lisbon',
              },
              {
                quote: '"One wrong selection can accidentally trigger a 23% VAT liability you didn\'t collect."',
                attribution: 'Worktugal, 2026 guide',
              },
              {
                quote: '"In Portugal, freelancer taxes are a compliance minefield."',
                attribution: 'Worktugal, 2026 guide',
              },
            ].map(({ quote, attribution }) => (
              <div key={attribution} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <p className="text-gray-700 text-sm italic mb-3">{quote}</p>
                <p className="text-gray-400 text-xs">— {attribution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Sound familiar?
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                emoji: '😰',
                title: 'The portal is entirely in Portuguese',
                body: 'Portal das Finanças has no English version. Every field is a guessing game.',
              },
              {
                emoji: '💸',
                title: 'Accountants charge €80–165/month',
                body: 'You end up paying a local accountant for tasks that should take 30 seconds.',
              },
              {
                emoji: '😤',
                title: 'No idea what you actually owe',
                body: 'Between IRS, Segurança Social, VAT thresholds, and the new QES rules — impossible to keep up.',
              },
            ].map(({ emoji, title, body }) => (
              <div key={title} className="bg-gray-50 rounded-xl p-6">
                <div className="text-3xl mb-3">{emoji}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
            What VerdeDesk does
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Everything a freelancer in Portugal needs — in English, finally.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: '🧾',
                title: 'Issue green receipts in seconds',
                body: 'Fill in a simple English form. VerdeDesk generates a compliant recibo verde — no Portuguese required.',
              },
              {
                icon: '📊',
                title: 'Income dashboard + VAT tracking',
                body: 'See monthly totals, YTD, and get a warning before you cross the €15,000 VAT threshold — the hard line with immediate consequences.',
              },
              {
                icon: '🔔',
                title: 'Compliance reminders',
                body: 'Never miss a quarterly social security declaration or IRS deadline again. The traps are mapped for you.',
              },
              {
                icon: '🇵🇹',
                title: 'D8 visa & NHR aware',
                body: 'Built for the journey from D8 visa approval → NIF registration → first recibo verde. We know the traps.',
              },
            ].map(({ icon, title, body }) => (
              <div key={title} className="flex gap-4 p-5 rounded-xl border border-gray-200 bg-white hover:border-verde-200 transition-colors">
                <div className="text-2xl flex-shrink-0">{icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                  <p className="text-gray-600 text-sm">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing context */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The math is simple
          </h2>
          <div className="bg-gray-50 rounded-2xl p-8 mt-8">
            <div className="space-y-4">
              {[
                { label: 'Local accountant', price: '€80–165/month', muted: true },
                { label: 'Full-service English attorney', price: '€165/month', muted: true },
                { label: 'VerdeDesk', price: '€9/month', muted: false },
              ].map(({ label, price, muted }) => (
                <div
                  key={label}
                  className={`flex justify-between items-center px-4 py-3 rounded-lg ${
                    muted ? 'text-gray-400' : 'bg-verde-50 text-verde-800 font-semibold text-lg'
                  }`}
                >
                  <span>{label}</span>
                  <span className={muted ? 'line-through' : ''}>{price}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-4">14-day free trial. No card required.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-verde-600 py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Be first in line
          </h2>
          <p className="text-verde-100 mb-8">
            VerdeDesk is launching soon. Join the waitlist and get early access.
          </p>
          {status !== 'success' ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 border border-white/30 bg-white/10 rounded-lg text-white placeholder-verde-200 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3 bg-white hover:bg-verde-50 text-verde-700 font-semibold rounded-lg transition-colors whitespace-nowrap"
              >
                {status === 'loading' ? 'Joining...' : 'Join waitlist'}
              </button>
            </form>
          ) : (
            <p className="text-verde-100 font-medium">You're on the list!</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        <p>© 2026 VerdeDesk. Made for freelancers in Portugal.</p>
      </footer>
    </div>
  )
}

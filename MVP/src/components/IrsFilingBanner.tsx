import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface IrsFilingBannerProps {
  onWaitlistClick?: () => void
}

export default function IrsFilingBanner({ onWaitlistClick }: IrsFilingBannerProps) {
  const [isDismissed, setIsDismissed] = useState(false)
  const [daysUntilApril1, setDaysUntilApril1] = useState<number | null>(null)

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('irs-filing-banner-dismissed')
    if (dismissed) {
      setIsDismissed(true)
      return
    }

    // Calculate days until April 1, 2026
    const april1 = new Date('2026-04-01')
    const today = new Date()
    const diffTime = april1.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    // Show banner only if April 1 hasn't passed yet and we're before June 30
    const june30 = new Date('2026-06-30')
    if (today < june30 && diffDays >= 0) {
      setDaysUntilApril1(diffDays)
    } else {
      setIsDismissed(true)
    }
  }, [])

  const handleDismiss = () => {
    setIsDismissed(true)
    localStorage.setItem('irs-filing-banner-dismissed', 'true')
  }

  const handleWaitlistClick = () => {
    if (onWaitlistClick) {
      onWaitlistClick()
    } else {
      // Scroll to waitlist section on homepage or navigate to homepage with hash
      if (window.location.pathname === '/') {
        const waitlistElement = document.getElementById('waitlist')
        if (waitlistElement) {
          waitlistElement.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        window.location.href = '/#waitlist'
      }
    }
  }

  if (isDismissed || daysUntilApril1 === null) {
    return null
  }

  return (
    <div className="bg-orange-50 border-b border-orange-200">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm text-orange-800">
              <span className="font-semibold">
                🚨 IRS filing season opens April 1 — Are you ready?
                {daysUntilApril1 > 0 && (
                  <span className="ml-1">({daysUntilApril1} days left)</span>
                )}
              </span>
              <span className="ml-2">
                <Link
                  to="/guide/irs-tax-return-freelancer-portugal"
                  className="underline font-medium hover:text-orange-900"
                >
                  Get your filing checklist
                </Link>
                {' '}or{' '}
                <button
                  onClick={handleWaitlistClick}
                  className="underline font-medium hover:text-orange-900"
                >
                  join our waitlist for automated filing
                </button>
              </span>
            </p>
          </div>
          <button
            onClick={handleDismiss}
            className="ml-4 text-orange-600 hover:text-orange-800 p-1"
            aria-label="Dismiss banner"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
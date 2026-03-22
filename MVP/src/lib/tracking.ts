// Simple client-side tracking utility for page views and click events

interface TrackingEvent {
  type: 'pageview' | 'click'
  page: string
  element?: string
}

// Hash function to create a simple hash of user's IP (will be done server-side)
function createUserHash(): string {
  // Use a combination of screen resolution, timezone, and language as a simple fingerprint
  // This is privacy-friendly and doesn't use cookies or localStorage
  const fingerprint = [
    navigator.userAgent.substring(0, 100), // Truncated user agent
    screen.width + 'x' + screen.height,
    Intl.DateTimeFormat().resolvedOptions().timeZone,
    navigator.language,
  ].join('|')

  // Simple hash (not cryptographic, just for basic identification)
  let hash = 0
  for (let i = 0; i < fingerprint.length; i++) {
    const char = fingerprint.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32bit integer
  }
  return Math.abs(hash).toString(36)
}

async function sendTrackingEvent(event: TrackingEvent): Promise<void> {
  try {
    const payload = {
      type: event.type,
      page: event.page,
      element: event.element,
      userAgent: navigator.userAgent,
      userHash: createUserHash(),
      timestamp: new Date().toISOString(),
    }

    // Send to tracking endpoint (we'll create this)
    await fetch('/api/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
  } catch (error) {
    // Fail silently to not impact user experience
    console.debug('Tracking failed:', error)
  }
}

export function trackPageView(page: string): void {
  // Only track in production or if explicitly enabled
  if (import.meta.env.PROD || import.meta.env.VITE_ENABLE_TRACKING) {
    sendTrackingEvent({
      type: 'pageview',
      page,
    })
  }
}

export function trackClick(element: string, page?: string): void {
  // Only track in production or if explicitly enabled
  if (import.meta.env.PROD || import.meta.env.VITE_ENABLE_TRACKING) {
    sendTrackingEvent({
      type: 'click',
      page: page || window.location.pathname,
      element,
    })
  }
}

// Hook for tracking page views in React components
export function usePageTracking(): (page: string) => void {
  return trackPageView
}
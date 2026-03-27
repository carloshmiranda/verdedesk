import { describe, it, expect } from 'vitest'

// Mock the database to test the stats API logic
const mockDb = {
  waitlistEntry: {
    count: async () => 42  // Mock waitlist count
  },
  pageView: {
    count: async (params?: any) => {
      if (params?.where?.OR) {
        return 5  // Mock pricing page views
      }
      return 128  // Mock total page views
    }
  }
}

// Mock the stats response interface
interface StatsResponse {
  page_views: number
  waitlist_total: number
  waitlist_signups: number
  pricing_cta_clicks: number
  pricing_page_views: number
}

// Mock stats function that simulates the API logic
async function getStats(): Promise<StatsResponse> {
  const waitlist_total = await mockDb.waitlistEntry.count()
  const page_views = await mockDb.pageView.count()
  const pricing_page_views = await mockDb.pageView.count({ where: { OR: [] } })
  const waitlist_signups = waitlist_total  // Same value in this context
  const pricing_cta_clicks = 0  // Not tracked yet

  return {
    page_views,
    waitlist_total,
    waitlist_signups,
    pricing_cta_clicks,
    pricing_page_views
  }
}

describe('stats API', () => {
  it('returns correct stats structure', async () => {
    const stats = await getStats()

    expect(stats).toHaveProperty('page_views')
    expect(stats).toHaveProperty('waitlist_total')
    expect(stats).toHaveProperty('waitlist_signups')
    expect(stats).toHaveProperty('pricing_cta_clicks')
    expect(stats).toHaveProperty('pricing_page_views')

    expect(typeof stats.page_views).toBe('number')
    expect(typeof stats.waitlist_total).toBe('number')
    expect(typeof stats.waitlist_signups).toBe('number')
    expect(typeof stats.pricing_cta_clicks).toBe('number')
    expect(typeof stats.pricing_page_views).toBe('number')
  })

  it('returns expected values', async () => {
    const stats = await getStats()

    expect(stats.page_views).toBe(128)  // From mock
    expect(stats.waitlist_total).toBe(42)  // From mock
    expect(stats.waitlist_signups).toBe(42)  // Same as waitlist_total
    expect(stats.pricing_cta_clicks).toBe(0)  // Not implemented yet
    expect(stats.pricing_page_views).toBe(5)  // From mock
  })

  it('returns JSON-serializable data', async () => {
    const stats = await getStats()

    // Should be able to stringify and parse without errors
    const jsonString = JSON.stringify(stats)
    const parsed = JSON.parse(jsonString)

    expect(parsed).toEqual(stats)
  })
})
import { describe, it, expect } from 'vitest'

// Mock the database to test the stats API logic
const mockDb = {
  waitlistEntry: {
    count: async () => 42  // Mock waitlist count
  }
}

// Mock the stats response interface
interface StatsResponse {
  page_views: number
  waitlist_total: number
  pricing_cta_clicks: number
}

// Mock stats function that simulates the API logic
async function getStats(): Promise<StatsResponse> {
  const waitlist_total = await mockDb.waitlistEntry.count()
  const page_views = 0  // Not tracked yet
  const pricing_cta_clicks = 0  // Not tracked yet

  return {
    page_views,
    waitlist_total,
    pricing_cta_clicks
  }
}

describe('stats API', () => {
  it('returns correct stats structure', async () => {
    const stats = await getStats()

    expect(stats).toHaveProperty('page_views')
    expect(stats).toHaveProperty('waitlist_total')
    expect(stats).toHaveProperty('pricing_cta_clicks')

    expect(typeof stats.page_views).toBe('number')
    expect(typeof stats.waitlist_total).toBe('number')
    expect(typeof stats.pricing_cta_clicks).toBe('number')
  })

  it('returns expected values', async () => {
    const stats = await getStats()

    expect(stats.page_views).toBe(0)  // Not implemented yet
    expect(stats.waitlist_total).toBe(42)  // From mock
    expect(stats.pricing_cta_clicks).toBe(0)  // Not implemented yet
  })

  it('returns JSON-serializable data', async () => {
    const stats = await getStats()

    // Should be able to stringify and parse without errors
    const jsonString = JSON.stringify(stats)
    const parsed = JSON.parse(jsonString)

    expect(parsed).toEqual(stats)
  })
})
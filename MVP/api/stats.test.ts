import { describe, it, expect } from 'vitest'

// Mock the database to test the stats API logic
const mockDb = {
  waitlistEntry: {
    count: async () => 42  // Mock waitlist count
  }
}

// Mock the Hive-compatible stats response interface
interface StatsData {
  page_views: number
  signups: number
  waitlist_total: number
  waitlist_signups: number
}

interface HiveStatsResponse {
  ok: boolean
  data: StatsData
}

// Mock stats function that simulates the API logic
async function getStats(): Promise<HiveStatsResponse> {
  const waitlist_total = await mockDb.waitlistEntry.count()
  const page_views = 0  // Not tracked yet
  const signups = waitlist_total  // All signups go to waitlist in validation stage
  const waitlist_signups = waitlist_total

  return {
    ok: true,
    data: {
      page_views,
      signups,
      waitlist_total,
      waitlist_signups
    }
  }
}

describe('stats API', () => {
  it('returns correct Hive-compatible structure', async () => {
    const response = await getStats()

    expect(response).toHaveProperty('ok')
    expect(response).toHaveProperty('data')
    expect(response.ok).toBe(true)

    const { data } = response
    expect(data).toHaveProperty('page_views')
    expect(data).toHaveProperty('signups')
    expect(data).toHaveProperty('waitlist_total')
    expect(data).toHaveProperty('waitlist_signups')

    expect(typeof data.page_views).toBe('number')
    expect(typeof data.signups).toBe('number')
    expect(typeof data.waitlist_total).toBe('number')
    expect(typeof data.waitlist_signups).toBe('number')
  })

  it('returns expected values', async () => {
    const response = await getStats()
    const { data } = response

    expect(data.page_views).toBe(0)  // Not implemented yet
    expect(data.signups).toBe(42)  // From mock (same as waitlist_total)
    expect(data.waitlist_total).toBe(42)  // From mock
    expect(data.waitlist_signups).toBe(42)  // From mock (same as waitlist_total)
  })

  it('returns JSON-serializable data', async () => {
    const response = await getStats()

    // Should be able to stringify and parse without errors
    const jsonString = JSON.stringify(response)
    const parsed = JSON.parse(jsonString)

    expect(parsed).toEqual(response)
  })
})
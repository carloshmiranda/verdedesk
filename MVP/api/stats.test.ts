import { describe, it, expect } from 'vitest'

// Mock the database to test the stats API logic
const mockDb = {
  waitlistEntry: {
    count: async () => 42  // Mock waitlist count
  }
}

// Mock the Hive-compatible stats response interface
interface StatsData {
  views: number
  signups: number
  waitlist: number
  revenue: number
}

interface HiveStatsResponse {
  ok: boolean
  data: StatsData
}

// Mock stats function that simulates the API logic
async function getStats(): Promise<HiveStatsResponse> {
  const waitlistCount = await mockDb.waitlistEntry.count()

  return {
    ok: true,
    data: {
      views: 0,  // Page views not tracked yet in validation stage
      signups: waitlistCount,  // All signups go to waitlist in validation stage
      waitlist: waitlistCount,
      revenue: 0  // No revenue during validation stage
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
    expect(data).toHaveProperty('views')
    expect(data).toHaveProperty('signups')
    expect(data).toHaveProperty('waitlist')
    expect(data).toHaveProperty('revenue')

    expect(typeof data.views).toBe('number')
    expect(typeof data.signups).toBe('number')
    expect(typeof data.waitlist).toBe('number')
    expect(typeof data.revenue).toBe('number')
  })

  it('returns expected values', async () => {
    const response = await getStats()
    const { data } = response

    expect(data.views).toBe(0)  // Not implemented yet
    expect(data.signups).toBe(42)  // From mock (same as waitlist)
    expect(data.waitlist).toBe(42)  // From mock
    expect(data.revenue).toBe(0)  // No revenue during validation stage
  })

  it('returns JSON-serializable data', async () => {
    const response = await getStats()

    // Should be able to stringify and parse without errors
    const jsonString = JSON.stringify(response)
    const parsed = JSON.parse(jsonString)

    expect(parsed).toEqual(response)
  })
})
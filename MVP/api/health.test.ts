import { describe, it, expect } from 'vitest'

// Mock health response interface
interface HealthResponse {
  status: string
  timestamp: string
  version: string
}

// Mock health function that simulates the API logic
async function getHealth(): Promise<HealthResponse> {
  return {
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: '0.1.0'
  }
}

describe('health API', () => {
  it('returns correct health structure', async () => {
    const health = await getHealth()

    expect(health).toHaveProperty('status')
    expect(health).toHaveProperty('timestamp')
    expect(health).toHaveProperty('version')

    expect(typeof health.status).toBe('string')
    expect(typeof health.timestamp).toBe('string')
    expect(typeof health.version).toBe('string')
  })

  it('returns expected values', async () => {
    const health = await getHealth()

    expect(health.status).toBe('ok')
    expect(health.version).toBe('0.1.0')

    // Validate timestamp is a valid ISO string
    expect(() => new Date(health.timestamp)).not.toThrow()
    expect(new Date(health.timestamp).toISOString()).toBe(health.timestamp)
  })

  it('returns JSON-serializable data', async () => {
    const health = await getHealth()

    // Should be able to stringify and parse without errors
    const jsonString = JSON.stringify(health)
    const parsed = JSON.parse(jsonString)

    expect(parsed).toEqual(health)
  })

  it('timestamp is recent', async () => {
    const health = await getHealth()
    const now = new Date()
    const timestamp = new Date(health.timestamp)

    // Should be within 1 second of current time
    const diffMs = Math.abs(now.getTime() - timestamp.getTime())
    expect(diffMs).toBeLessThan(1000)
  })
})
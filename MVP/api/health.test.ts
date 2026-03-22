import { describe, it, expect, vi, beforeEach } from 'vitest'
import handler from './health'
import type { VercelRequest, VercelResponse } from '@vercel/node'

// Mock the database
vi.mock('../lib/db', () => ({
  db: {
    waitlistEntry: {
      count: vi.fn()
    }
  }
}))

const { db } = await import('../lib/db')

function createMockReq(overrides: Partial<VercelRequest> = {}): VercelRequest {
  return {
    method: 'GET',
    url: '/api/health',
    headers: {},
    query: {},
    body: null,
    ...overrides
  } as VercelRequest
}

function createMockRes(): VercelResponse {
  const res = {
    status: vi.fn().mockReturnThis(),
    json: vi.fn().mockReturnThis(),
    setHeader: vi.fn().mockReturnThis(),
  }
  return res as unknown as VercelResponse
}

describe('/api/health', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // Mock environment variables
    process.env.VERCEL_GIT_COMMIT_SHA = 'abc123456789'
    process.env.VERCEL_ENV = 'production'
  })

  it('returns healthy status when database is accessible', async () => {
    // Mock successful database call
    vi.mocked(db.waitlistEntry.count).mockResolvedValue(10)

    const req = createMockReq()
    const res = createMockRes()

    await handler(req, res)

    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({
      status: 'healthy',
      timestamp: expect.any(String),
      services: {
        database: {
          status: 'healthy',
          responseTime: expect.any(Number),
        }
      },
      version: 'abc12345',
      environment: 'production'
    })
  })

  it('returns unhealthy status when database fails', async () => {
    // Mock database failure
    const dbError = new Error('Connection timeout')
    vi.mocked(db.waitlistEntry.count).mockRejectedValue(dbError)

    const req = createMockReq()
    const res = createMockRes()

    await handler(req, res)

    expect(res.status).toHaveBeenCalledWith(503)
    expect(res.json).toHaveBeenCalledWith({
      status: 'unhealthy',
      timestamp: expect.any(String),
      services: {
        database: {
          status: 'unhealthy',
          error: 'Connection timeout'
        }
      },
      version: 'abc12345',
      environment: 'production'
    })
  })

  it('rejects non-GET methods', async () => {
    const req = createMockReq({ method: 'POST' })
    const res = createMockRes()

    await handler(req, res)

    expect(res.status).toHaveBeenCalledWith(405)
    expect(res.json).toHaveBeenCalledWith({ error: 'Method not allowed' })
  })

  it('sets no-cache headers', async () => {
    vi.mocked(db.waitlistEntry.count).mockResolvedValue(5)

    const req = createMockReq()
    const res = createMockRes()

    await handler(req, res)

    expect(res.setHeader).toHaveBeenCalledWith('Cache-Control', 'no-cache, no-store, must-revalidate')
    expect(res.setHeader).toHaveBeenCalledWith('Pragma', 'no-cache')
    expect(res.setHeader).toHaveBeenCalledWith('Expires', '0')
  })

  it('handles unknown database errors gracefully', async () => {
    // Mock non-Error object being thrown
    vi.mocked(db.waitlistEntry.count).mockRejectedValue('string error')

    const req = createMockReq()
    const res = createMockRes()

    await handler(req, res)

    expect(res.status).toHaveBeenCalledWith(503)
    expect(res.json).toHaveBeenCalledWith({
      status: 'unhealthy',
      timestamp: expect.any(String),
      services: {
        database: {
          status: 'unhealthy',
          error: 'Database connection failed'
        }
      },
      version: 'abc12345',
      environment: 'production'
    })
  })
})
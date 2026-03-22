import type { VercelRequest, VercelResponse } from '@vercel/node'
import { db } from '../lib/db'

interface HealthResponse {
  status: 'healthy' | 'unhealthy'
  timestamp: string
  services: {
    database: {
      status: 'healthy' | 'unhealthy'
      responseTime?: number
      error?: string
    }
  }
  version: string
  environment: string
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const startTime = Date.now()
  let dbStatus: 'healthy' | 'unhealthy' = 'healthy'
  let dbResponseTime: number | undefined
  let dbError: string | undefined

  // Test database connection
  try {
    const dbStart = Date.now()
    await db.waitlistEntry.count()
    dbResponseTime = Date.now() - dbStart
  } catch (err) {
    dbStatus = 'unhealthy'
    dbError = err instanceof Error ? err.message : 'Database connection failed'
  }

  const overallStatus: 'healthy' | 'unhealthy' = dbStatus === 'healthy' ? 'healthy' : 'unhealthy'

  const health: HealthResponse = {
    status: overallStatus,
    timestamp: new Date().toISOString(),
    services: {
      database: {
        status: dbStatus,
        responseTime: dbResponseTime,
        error: dbError
      }
    },
    version: process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 8) || 'unknown',
    environment: process.env.VERCEL_ENV || 'development'
  }

  // Set appropriate HTTP status
  const statusCode = overallStatus === 'healthy' ? 200 : 503

  // Set cache headers (short cache for health checks)
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
  res.setHeader('Pragma', 'no-cache')
  res.setHeader('Expires', '0')

  return res.status(statusCode).json(health)
}
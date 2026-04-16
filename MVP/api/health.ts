interface HealthResponse {
  status: string
  timestamp: string
  version: string
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const health: HealthResponse = {
      status: 'ok',
      timestamp: new Date().toISOString(),
      version: '0.1.0'
    }

    // Cache response for 1 minute
    res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30')

    return res.status(200).json(health)
  } catch (err) {
    console.error('Health handler error:', err)
    return res.status(500).json({
      status: 'error',
      timestamp: new Date().toISOString(),
      error: 'Internal server error'
    })
  }
}
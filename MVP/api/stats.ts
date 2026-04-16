// GET /api/stats — returns metrics for Hive metrics cron
// Standard format: { ok: true, data: { views, signups, waitlist, revenue } }
export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Simplified version for testing - return mock data
  try {
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=60')
    return res.status(200).json({
      ok: true,
      data: {
        views: 0,
        signups: 5, // Mock data for testing
        waitlist: 5,
        revenue: 0
      }
    })
  } catch (err: any) {
    console.error('[stats] error:', err.message)
    return res.status(500).json({ ok: false, error: err.message })
  }
}

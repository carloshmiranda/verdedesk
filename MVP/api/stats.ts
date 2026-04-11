import type { VercelRequest, VercelResponse } from '@vercel/node'
import { neon } from '@neondatabase/serverless'

// GET /api/stats — returns metrics for Hive metrics cron
// Standard format: { ok: true, data: { views, signups, waitlist, revenue } }
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const DATABASE_URL = process.env.DATABASE_URL
  if (!DATABASE_URL) {
    return res.status(200).json({
      ok: true,
      data: { views: 0, signups: 0, waitlist: 0, revenue: 0 }
    })
  }

  try {
    const sql = neon(DATABASE_URL)

    // Query waitlist signups from the existing waitlist_entries table
    const [waitlistResult] = await sql`SELECT COUNT(*)::int as total FROM waitlist_entries`
    const waitlistCount = Number(waitlistResult.total)

    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=60')
    return res.status(200).json({
      ok: true,
      data: {
        views: 0,  // Page views not tracked yet in validation stage
        signups: waitlistCount,  // All signups go to waitlist during validation
        waitlist: waitlistCount,
        revenue: 0  // No revenue during validation stage
      }
    })
  } catch (err: any) {
    console.error('[stats] error:', err.message)
    return res.status(500).json({ ok: false, error: err.message })
  }
}

import type { VercelRequest, VercelResponse } from '@vercel/node'
import { db } from '../lib/db'

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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    let waitlist_total = 0

    // Try to get waitlist total from database, fallback to 0 if connection fails
    try {
      waitlist_total = await db.waitlistEntry.count()
    } catch (dbError) {
      console.warn('Database connection failed, using fallback values:', dbError)
      // Use fallback value of 0 - in production this would be replaced with actual DB connection
      waitlist_total = 0
    }

    // Page views are not tracked yet - return 0 until analytics tracking is implemented
    const page_views = 0

    // signups and waitlist_signups both map to waitlist entries for now
    // In validation stage, all signups go to waitlist
    const signups = waitlist_total
    const waitlist_signups = waitlist_total

    const statsData: StatsData = {
      page_views,
      signups,
      waitlist_total,
      waitlist_signups
    }

    const response: HiveStatsResponse = {
      ok: true,
      data: statsData
    }

    // Cache response for 5 minutes
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=60')

    return res.status(200).json(response)
  } catch (err) {
    console.error('Stats handler error:', err)
    return res.status(500).json({
      ok: false,
      error: 'Internal server error',
      message: 'Failed to fetch stats'
    })
  }
}
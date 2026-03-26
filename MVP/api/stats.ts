import type { VercelRequest, VercelResponse } from '@vercel/node'
import { db } from '../lib/db'

interface StatsResponse {
  page_views: number
  waitlist_total: number
  pricing_cta_clicks: number
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Get waitlist total from database
    const waitlist_total = await db.waitlistEntry.count()

    // Page views and pricing CTA clicks are not tracked yet
    // Return 0 until analytics tracking is implemented
    const page_views = 0
    const pricing_cta_clicks = 0

    const stats: StatsResponse = {
      page_views,
      waitlist_total,
      pricing_cta_clicks
    }

    // Cache response for 5 minutes
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=60')

    return res.status(200).json(stats)
  } catch (err) {
    console.error('Stats handler error:', err)
    return res.status(500).json({
      error: 'Internal server error',
      message: 'Failed to fetch stats'
    })
  }
}
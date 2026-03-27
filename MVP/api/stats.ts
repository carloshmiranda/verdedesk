import type { VercelRequest, VercelResponse } from '@vercel/node'
import { db } from '../lib/db'

interface StatsResponse {
  page_views: number
  waitlist_total: number
  waitlist_signups: number
  pricing_cta_clicks: number
  pricing_page_views: number
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Get analytics data from database
    const [waitlist_total, page_views, pricing_page_views, waitlist_signups] = await Promise.all([
      // Total waitlist entries
      db.waitlistEntry.count(),

      // Total page views
      db.pageView.count(),

      // Pricing page views (paths containing '/calculadora' or '/comparison')
      db.pageView.count({
        where: {
          OR: [
            { path: { contains: '/calculadora' } },
            { path: { contains: '/comparison' } }
          ]
        }
      }),

      // Waitlist signups (count of waitlist entries - this is the same as waitlist_total in this context)
      db.waitlistEntry.count()
    ])

    // Pricing CTA clicks are not tracked yet - would need specific tracking
    const pricing_cta_clicks = 0

    const stats: StatsResponse = {
      page_views,
      waitlist_total,
      waitlist_signups,
      pricing_cta_clicks,
      pricing_page_views
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
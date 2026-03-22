import type { VercelRequest, VercelResponse } from '@vercel/node'
import { db } from '../lib/db'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Get current date and 24 hours ago for daily metrics
    const now = new Date()
    const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000)

    // Query all metrics in parallel for better performance
    const [
      totalPageViews,
      dailyPageViews,
      waitlistTotal,
      dailyWaitlistSignups,
      pricingPageViews,
      dailyPricingPageViews,
      pricingCtaClicks,
      dailyPricingCtaClicks,
    ] = await Promise.all([
      // Total page views
      db.pageView.count(),

      // Page views in last 24 hours
      db.pageView.count({
        where: {
          createdAt: {
            gte: yesterday,
          },
        },
      }),

      // Total waitlist entries
      db.waitlistEntry.count(),

      // Waitlist signups in last 24 hours
      db.waitlistEntry.count({
        where: {
          createdAt: {
            gte: yesterday,
          },
        },
      }),

      // Total pricing page views
      db.pageView.count({
        where: {
          OR: [
            { page: '/pricing' },
            { page: { contains: 'pricing' } },
          ],
        },
      }),

      // Pricing page views in last 24 hours
      db.pageView.count({
        where: {
          AND: [
            {
              OR: [
                { page: '/pricing' },
                { page: { contains: 'pricing' } },
              ],
            },
            {
              createdAt: {
                gte: yesterday,
              },
            },
          ],
        },
      }),

      // Total pricing CTA clicks
      db.clickEvent.count({
        where: {
          element: 'pricing_cta',
        },
      }),

      // Pricing CTA clicks in last 24 hours
      db.clickEvent.count({
        where: {
          AND: [
            { element: 'pricing_cta' },
            {
              createdAt: {
                gte: yesterday,
              },
            },
          ],
        },
      }),
    ])

    // Format response to match Hive metrics cron format
    const stats = {
      page_views: {
        total: totalPageViews,
        daily: dailyPageViews,
      },
      waitlist_total: {
        total: waitlistTotal,
        daily: dailyWaitlistSignups,
      },
      waitlist_signups: dailyWaitlistSignups,
      pricing_cta_clicks: {
        total: pricingCtaClicks,
        daily: dailyPricingCtaClicks,
      },
      pricing_page_views: {
        total: pricingPageViews,
        daily: dailyPricingPageViews,
      },
      timestamp: now.toISOString(),
      period: '24h',
    }

    return res.status(200).json(stats)
  } catch (err) {
    console.error('Stats handler error:', err)

    return res.status(500).json({
      error: 'Internal server error',
      message: 'Failed to retrieve stats',
    })
  }
}
import type { VercelRequest, VercelResponse } from '@vercel/node'
import { db } from '../lib/db'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const {
      path,
      utmSource,
      utmMedium,
      utmCampaign
    } = req.body

    if (!path || typeof path !== 'string') {
      return res.status(400).json({ error: 'Path is required' })
    }

    // Get client info
    const userAgent = req.headers['user-agent'] || null
    const ipAddress = (req.headers['x-forwarded-for'] as string)?.split(',')[0] ||
                     (req.headers['x-real-ip'] as string) ||
                     req.connection?.remoteAddress || null

    // Store page view
    await db.pageView.create({
      data: {
        path,
        userAgent,
        ipAddress,
        utmSource: utmSource || null,
        utmMedium: utmMedium || null,
        utmCampaign: utmCampaign || null
      }
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Pageview handler error:', err)
    return res.status(500).json({
      error: 'Internal server error',
      message: 'Failed to track page view'
    })
  }
}
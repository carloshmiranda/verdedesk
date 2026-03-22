import type { VercelRequest, VercelResponse } from '@vercel/node'
import { db } from '../lib/db'
import crypto from 'crypto'

function hashIP(ip: string): string {
  // Create a privacy-friendly hash of the IP address
  return crypto.createHash('sha256').update(ip + process.env.IP_SALT || 'default-salt').digest('hex').substring(0, 16)
}

function getClientIP(req: VercelRequest): string {
  // Get the real IP address from Vercel headers
  const forwarded = req.headers['x-forwarded-for'] as string
  const realIP = req.headers['x-real-ip'] as string

  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }

  return realIP || req.socket?.remoteAddress || 'unknown'
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const body = req.body ?? {}
    const { type, page, element, userAgent } = body

    if (!type || !page) {
      return res.status(400).json({ error: 'Type and page are required' })
    }

    // Get and hash the client IP for privacy
    const clientIP = getClientIP(req)
    const ipHash = hashIP(clientIP)

    if (type === 'pageview') {
      // Record page view
      await db.pageView.create({
        data: {
          page,
          userAgent: userAgent?.substring(0, 255), // Truncate to fit DB constraints
          ipHash,
        },
      })
    } else if (type === 'click') {
      if (!element) {
        return res.status(400).json({ error: 'Element is required for click events' })
      }

      // Record click event
      await db.clickEvent.create({
        data: {
          element,
          page,
          userAgent: userAgent?.substring(0, 255), // Truncate to fit DB constraints
          ipHash,
        },
      })
    } else {
      return res.status(400).json({ error: 'Invalid tracking type' })
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Tracking handler error:', err)

    // Return success even on error to not impact user experience
    return res.status(200).json({ success: true })
  }
}
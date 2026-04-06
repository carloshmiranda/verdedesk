import type { VercelRequest, VercelResponse } from '@vercel/node'
import { neon } from '@neondatabase/serverless'

// GET /api/stats — returns today's metrics for Hive metrics cron
// Standard format: { ok, views, pricing_clicks, affiliate_clicks }
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const DATABASE_URL = process.env.DATABASE_URL
  if (!DATABASE_URL) {
    return res.status(200).json({ ok: true, views: 0, pricing_clicks: 0, affiliate_clicks: 0, source: 'no_db' })
  }

  try {
    const sql = neon(DATABASE_URL)
    const today = new Date().toISOString().split('T')[0]

    const [[views], [pricing], [affiliate]] = await Promise.all([
      sql`SELECT COALESCE(SUM(views), 0) as total FROM page_views WHERE date = ${today}`.catch(() => [{ total: 0 }]),
      sql`SELECT COUNT(*)::int as total FROM pricing_clicks WHERE date = ${today}`.catch(() => [{ total: 0 }]),
      sql`SELECT COUNT(*)::int as total FROM affiliate_clicks WHERE date = ${today}`.catch(() => [{ total: 0 }]),
    ])

    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=60')
    return res.status(200).json({
      ok: true,
      views: Number(views.total),
      pricing_clicks: Number(pricing.total),
      affiliate_clicks: Number(affiliate.total),
    })
  } catch (err: any) {
    console.error('[stats] error:', err.message)
    return res.status(500).json({ ok: false, error: err.message })
  }
}

import type { VercelRequest, VercelResponse } from '@vercel/node'
import { db } from '../lib/db'

interface StatsResponse {
  waitlist: {
    total: number
    today: number
    thisWeek: number
    thisMonth: number
    previousWeek: number
    previousMonth: number
    growthWeekOverWeek: number
    growthMonthOverMonth: number
  }
  timeline: Array<{
    date: string
    count: number
    cumulative: number
  }>
  meta: {
    generatedAt: string
    timezone: string
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const thisWeekStart = new Date(today)
    thisWeekStart.setDate(today.getDate() - today.getDay()) // Start of this week (Sunday)

    const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1)

    const lastWeekStart = new Date(thisWeekStart)
    lastWeekStart.setDate(thisWeekStart.getDate() - 7)
    const lastWeekEnd = new Date(thisWeekStart)

    const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1)
    const lastMonthEnd = new Date(now.getFullYear(), now.getMonth(), 1)

    // Get total count
    const total = await db.waitlistEntry.count()

    // Get counts for different periods
    const [todayCount, thisWeekCount, thisMonthCount, lastWeekCount, lastMonthCount] = await Promise.all([
      db.waitlistEntry.count({
        where: { createdAt: { gte: today } }
      }),
      db.waitlistEntry.count({
        where: { createdAt: { gte: thisWeekStart } }
      }),
      db.waitlistEntry.count({
        where: { createdAt: { gte: thisMonthStart } }
      }),
      db.waitlistEntry.count({
        where: {
          createdAt: {
            gte: lastWeekStart,
            lt: lastWeekEnd
          }
        }
      }),
      db.waitlistEntry.count({
        where: {
          createdAt: {
            gte: lastMonthStart,
            lt: lastMonthEnd
          }
        }
      })
    ])

    // Calculate growth rates
    const growthWeekOverWeek = lastWeekCount > 0
      ? ((thisWeekCount - lastWeekCount) / lastWeekCount) * 100
      : thisWeekCount > 0 ? 100 : 0

    const growthMonthOverMonth = lastMonthCount > 0
      ? ((thisMonthCount - lastMonthCount) / lastMonthCount) * 100
      : thisMonthCount > 0 ? 100 : 0

    // Get timeline data (last 30 days)
    const thirtyDaysAgo = new Date(now)
    thirtyDaysAgo.setDate(now.getDate() - 30)

    const timelineEntries = await db.waitlistEntry.findMany({
      where: { createdAt: { gte: thirtyDaysAgo } },
      select: { createdAt: true },
      orderBy: { createdAt: 'asc' }
    })

    // Group by date and create timeline
    const dateCountMap = new Map<string, number>()
    const dateRange: string[] = []

    // Initialize all dates in range with 0
    for (let i = 30; i >= 0; i--) {
      const date = new Date(now)
      date.setDate(now.getDate() - i)
      const dateStr = date.toISOString().split('T')[0]
      dateRange.push(dateStr)
      dateCountMap.set(dateStr, 0)
    }

    // Count entries by date
    timelineEntries.forEach(entry => {
      const dateStr = entry.createdAt.toISOString().split('T')[0]
      const currentCount = dateCountMap.get(dateStr) || 0
      dateCountMap.set(dateStr, currentCount + 1)
    })

    // Build timeline with cumulative counts
    let cumulative = total - timelineEntries.length
    const timeline = dateRange.map(date => {
      const dailyCount = dateCountMap.get(date) || 0
      cumulative += dailyCount
      return {
        date,
        count: dailyCount,
        cumulative
      }
    })

    const stats: StatsResponse = {
      waitlist: {
        total,
        today: todayCount,
        thisWeek: thisWeekCount,
        thisMonth: thisMonthCount,
        previousWeek: lastWeekCount,
        previousMonth: lastMonthCount,
        growthWeekOverWeek: Math.round(growthWeekOverWeek * 100) / 100,
        growthMonthOverMonth: Math.round(growthMonthOverMonth * 100) / 100
      },
      timeline,
      meta: {
        generatedAt: now.toISOString(),
        timezone: 'UTC'
      }
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
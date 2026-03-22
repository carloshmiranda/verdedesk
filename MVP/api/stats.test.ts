import { describe, it, expect } from 'vitest'

// Growth calculation function extracted from stats.ts for unit testing
function calculateGrowthRate(current: number, previous: number): number {
  if (previous === 0) {
    return current > 0 ? 100 : 0
  }
  return Math.round(((current - previous) / previous) * 100 * 100) / 100
}

// Date calculation utilities for testing
function getDateBoundaries() {
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const thisWeekStart = new Date(today)
  thisWeekStart.setDate(today.getDate() - today.getDay()) // Start of this week (Sunday)

  const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1)

  return { now, today, thisWeekStart, thisMonthStart }
}

describe('stats calculations', () => {
  it('calculates growth rates correctly', () => {
    // Normal growth
    expect(calculateGrowthRate(5, 3)).toBe(66.67) // (5-3)/3 * 100
    expect(calculateGrowthRate(8, 5)).toBe(60) // (8-5)/5 * 100

    // Negative growth
    expect(calculateGrowthRate(2, 5)).toBe(-60) // (2-5)/5 * 100

    // Zero current value
    expect(calculateGrowthRate(0, 5)).toBe(-100) // (0-5)/5 * 100

    // Zero previous value (edge case)
    expect(calculateGrowthRate(5, 0)).toBe(100)
    expect(calculateGrowthRate(0, 0)).toBe(0)
  })

  it('generates correct date boundaries', () => {
    const { now, today, thisWeekStart, thisMonthStart } = getDateBoundaries()

    // Today should be start of current day (midnight)
    expect(today.getHours()).toBe(0)
    expect(today.getMinutes()).toBe(0)
    expect(today.getSeconds()).toBe(0)

    // This week should be start of Sunday
    expect(thisWeekStart.getDay()).toBe(0) // Sunday = 0

    // This month should be first day of current month
    expect(thisMonthStart.getDate()).toBe(1)
    expect(thisMonthStart.getMonth()).toBe(now.getMonth())
    expect(thisMonthStart.getFullYear()).toBe(now.getFullYear())
  })

  it('creates proper timeline date ranges', () => {
    const now = new Date('2024-03-15T12:00:00Z')
    const dateRange: string[] = []

    // Initialize 31 days (30 days ago + today)
    for (let i = 30; i >= 0; i--) {
      const date = new Date(now)
      date.setDate(now.getDate() - i)
      const dateStr = date.toISOString().split('T')[0]
      dateRange.push(dateStr)
    }

    expect(dateRange).toHaveLength(31)
    expect(dateRange[0]).toBe('2024-02-14') // 30 days ago
    expect(dateRange[30]).toBe('2024-03-15') // today
  })
})
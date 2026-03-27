import { describe, it, expect } from 'vitest'

// Mock the database to test the pageview API logic
const mockDb = {
  pageView: {
    create: async (params: any) => {
      return {
        id: 'mock-id',
        ...params.data,
        createdAt: new Date()
      }
    }
  }
}

// Mock pageview function that simulates the API logic
async function trackPageView(data: {
  path: string
  userAgent?: string
  ipAddress?: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
}): Promise<{ success: boolean }> {
  if (!data.path || typeof data.path !== 'string') {
    throw new Error('Path is required')
  }

  await mockDb.pageView.create({
    data: {
      path: data.path,
      userAgent: data.userAgent || null,
      ipAddress: data.ipAddress || null,
      utmSource: data.utmSource || null,
      utmMedium: data.utmMedium || null,
      utmCampaign: data.utmCampaign || null
    }
  })

  return { success: true }
}

describe('pageview API', () => {
  it('tracks page view with required path', async () => {
    const result = await trackPageView({
      path: '/guide/recibo-verde-english'
    })

    expect(result.success).toBe(true)
  })

  it('tracks page view with UTM parameters', async () => {
    const result = await trackPageView({
      path: '/calculadora',
      utmSource: 'google',
      utmMedium: 'cpc',
      utmCampaign: 'tax-calculator'
    })

    expect(result.success).toBe(true)
  })

  it('requires path parameter', async () => {
    await expect(trackPageView({ path: '' })).rejects.toThrow('Path is required')
  })

  it('handles optional parameters gracefully', async () => {
    const result = await trackPageView({
      path: '/',
      userAgent: 'Mozilla/5.0...',
      ipAddress: '192.168.1.1'
    })

    expect(result.success).toBe(true)
  })
})
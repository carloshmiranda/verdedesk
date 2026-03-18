import type { VercelRequest, VercelResponse } from '@vercel/node'

// Simple email validation
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = req.body || {}

  if (!email || typeof email !== 'string' || !isValidEmail(email)) {
    return res.status(400).json({ error: 'Valid email address required' })
  }

  // Store in Neon Postgres via Prisma
  // Until DATABASE_URL is configured, we log and return success
  // This is intentionally simple for the validation stage
  try {
    const { PrismaClient } = await import('@prisma/client')
    const prisma = new PrismaClient()

    await prisma.waitlistEntry.upsert({
      where: { email: email.toLowerCase().trim() },
      update: { updatedAt: new Date() },
      create: { email: email.toLowerCase().trim() },
    })

    await prisma.$disconnect()

    return res.status(200).json({ success: true })
  } catch (err) {
    // If DB not configured yet, log and return success anyway (fail open for validation)
    console.error('Waitlist DB error:', err)
    // Still return 200 so we can validate the form UX without DB
    return res.status(200).json({ success: true, note: 'logged_only' })
  }
}

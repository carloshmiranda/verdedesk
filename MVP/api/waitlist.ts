import type { VercelRequest, VercelResponse } from '@vercel/node'

// Simple email validation
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

async function sendConfirmationEmail(email: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return

  // Use onboarding@resend.dev — works on any Resend account without domain verification
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'VerdeDesk <onboarding@resend.dev>',
      to: [email],
      subject: "You're on the VerdeDesk waitlist",
      html: `<p>Hi,</p>
<p>You're on the list. We'll reach out as soon as VerdeDesk opens — you'll be among the first to get access.</p>
<p>In the meantime, if you have questions about recibos verdes, Portuguese taxes, or the D8 visa process, just reply to this email.</p>
<p>— The VerdeDesk team</p>`,
    }),
  })
}

async function sendAdminNotification(email: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'VerdeDesk Waitlist <onboarding@resend.dev>',
      to: ['carlos.gaspar2011@gmail.com'],
      subject: `New waitlist signup: ${email}`,
      html: `<p>New signup: <strong>${email}</strong></p><p>Check total count at Resend dashboard.</p>`,
    }),
  })
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = req.body || {}

  if (!email || typeof email !== 'string' || !isValidEmail(email)) {
    return res.status(400).json({ error: 'Valid email address required' })
  }

  const normalised = email.toLowerCase().trim()

  // Store in Neon Postgres via Prisma
  // Until DATABASE_URL is configured, we log and return success
  try {
    const { PrismaClient } = await import('@prisma/client')
    const prisma = new PrismaClient()

    await prisma.waitlistEntry.upsert({
      where: { email: normalised },
      update: { updatedAt: new Date() },
      create: { email: normalised },
    })

    await prisma.$disconnect()
  } catch (err) {
    // DB not configured yet — fail open for validation stage
    console.error('Waitlist DB error:', err)
  }

  // Send confirmation + admin notification via Resend (best-effort)
  try {
    await Promise.all([
      sendConfirmationEmail(normalised),
      sendAdminNotification(normalised),
    ])
  } catch (err) {
    console.error('Resend error:', err)
  }

  return res.status(200).json({ success: true })
}

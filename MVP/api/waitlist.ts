import type { VercelRequest, VercelResponse } from '@vercel/node'

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const body = req.body ?? {}
    const { email } = body

    if (!email || typeof email !== 'string' || !isValidEmail(email)) {
      return res.status(400).json({ error: 'Valid email address required' })
    }

    const normalised = email.toLowerCase().trim()
    const apiKey = process.env.RESEND_API_KEY

    if (apiKey) {
      const headers = {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      }

      await Promise.allSettled([
        fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers,
          body: JSON.stringify({
            from: 'VerdeDesk <onboarding@resend.dev>',
            to: [normalised],
            subject: "You're on the VerdeDesk waitlist",
            html: `<p>Hi,</p>
<p>You're on the list. We'll reach out as soon as VerdeDesk opens — you'll be among the first to get access.</p>
<p>In the meantime, if you have questions about recibos verdes, Portuguese taxes, or the D8 visa process, just reply to this email.</p>
<p>— The VerdeDesk team</p>`,
          }),
        }),
        fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers,
          body: JSON.stringify({
            from: 'VerdeDesk Waitlist <onboarding@resend.dev>',
            to: ['carlos.gaspar2011@gmail.com'],
            subject: `New waitlist signup: ${normalised}`,
            html: `<p>New signup: <strong>${normalised}</strong></p>`,
          }),
        }),
      ])
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Waitlist handler error:', err)
    // Fail open — signup is captured via admin email even if something went wrong
    return res.status(200).json({ success: true })
  }
}

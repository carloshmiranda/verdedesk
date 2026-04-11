import type { VercelRequest, VercelResponse } from '@vercel/node'

// IndexNow API key - this should be a random string
// In production, this should be stored as an environment variable
const INDEXNOW_KEY = 'a1b2c3d4e5f6789012345678901234567890abcdefghijklmnopqrstuvwxyz'
const BASE_URL = 'https://verdedesk.vercel.app'

interface IndexNowRequest {
  host: string
  key: string
  keyLocation?: string
  urlList: string[]
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    // Return the IndexNow key for verification
    res.setHeader('Content-Type', 'text/plain')
    return res.status(200).send(INDEXNOW_KEY)
  }

  if (req.method === 'POST') {
    try {
      const { host, key, urlList }: IndexNowRequest = req.body

      // Validate the request
      if (!host || !key || !Array.isArray(urlList)) {
        return res.status(400).json({
          error: 'Missing required fields: host, key, urlList'
        })
      }

      // Verify the key
      if (key !== INDEXNOW_KEY) {
        return res.status(401).json({
          error: 'Invalid key'
        })
      }

      // Verify the host matches our domain
      if (host !== 'verdedesk.vercel.app') {
        return res.status(400).json({
          error: 'Invalid host'
        })
      }

      // Validate URLs belong to our domain
      const validUrls = urlList.filter(url => {
        try {
          const urlObj = new URL(url)
          return urlObj.hostname === host
        } catch {
          return false
        }
      })

      if (validUrls.length === 0) {
        return res.status(400).json({
          error: 'No valid URLs provided'
        })
      }

      // Submit to IndexNow API
      const indexNowPayload = {
        host,
        key,
        keyLocation: `${BASE_URL}/api/indexnow`,
        urlList: validUrls
      }

      // Submit to Bing's IndexNow endpoint
      const response = await fetch('https://api.indexnow.org/indexnow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(indexNowPayload)
      })

      if (response.ok) {
        return res.status(200).json({
          success: true,
          message: `Successfully submitted ${validUrls.length} URLs to IndexNow`,
          submittedUrls: validUrls
        })
      } else {
        const errorText = await response.text()
        console.error('IndexNow API error:', response.status, errorText)
        return res.status(502).json({
          error: 'Failed to submit to IndexNow API',
          details: errorText
        })
      }

    } catch (error) {
      console.error('Error processing IndexNow request:', error)
      return res.status(500).json({
        error: 'Internal server error'
      })
    }
  }

  // Method not allowed
  return res.status(405).json({
    error: 'Method not allowed. Use GET to retrieve key or POST to submit URLs.'
  })
}
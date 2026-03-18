import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  canonical: string
}

export function useSEO({ title, description, canonical }: SEOProps) {
  useEffect(() => {
    document.title = title

    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', description)

    const link = document.querySelector('link[rel="canonical"]')
    if (link) link.setAttribute('href', canonical)

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', title)

    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', description)

    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', canonical)

    const twTitle = document.querySelector('meta[name="twitter:title"]')
    if (twTitle) twTitle.setAttribute('content', title)

    const twDesc = document.querySelector('meta[name="twitter:description"]')
    if (twDesc) twDesc.setAttribute('content', description)
  }, [title, description, canonical])
}

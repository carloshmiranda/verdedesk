import { useEffect } from 'react'

interface ArticleSchemaProps {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified: string
}

export function useArticleSchema({ title, description, url, datePublished, dateModified }: ArticleSchemaProps) {
  useEffect(() => {
    const id = 'article-jsonld'
    let script = document.getElementById(id)
    if (!script) {
      script = document.createElement('script')
      script.id = id
      script.setAttribute('type', 'application/ld+json')
      document.head.appendChild(script)
    }

    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description,
      url,
      datePublished,
      dateModified,
      author: {
        '@type': 'Organization',
        name: 'VerdeDesk',
        url: 'https://verdedesk.vercel.app',
      },
      publisher: {
        '@type': 'Organization',
        name: 'VerdeDesk',
        url: 'https://verdedesk.vercel.app',
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url,
      },
    })

    return () => {
      script?.remove()
    }
  }, [title, description, url, datePublished, dateModified])
}

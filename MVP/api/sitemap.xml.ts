interface SitemapUrl {
  loc: string
  lastmod: string
  changefreq: string
  priority: string
}

const BASE_URL = 'https://verdedesk.vercel.app'

// Define all site URLs with their metadata
const urls: SitemapUrl[] = [
  // Landing page
  {
    loc: '/',
    lastmod: '2026-04-11',
    changefreq: 'weekly',
    priority: '1.0'
  },
  // Guide index
  {
    loc: '/guides',
    lastmod: '2026-04-11',
    changefreq: 'weekly',
    priority: '0.9'
  },
  // Tools
  {
    loc: '/tools/tax-calculator',
    lastmod: '2026-04-11',
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    loc: '/tools/nhr-checker',
    lastmod: '2026-04-11',
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    loc: '/calculadora',
    lastmod: '2026-04-11',
    changefreq: 'monthly',
    priority: '0.9'
  },
  // Other pages
  {
    loc: '/comparison',
    lastmod: '2026-04-11',
    changefreq: 'monthly',
    priority: '0.8'
  },
  // SEO guides - high priority content
  {
    loc: '/guide/recibo-verde-english',
    lastmod: '2026-04-11',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    loc: '/guide/fatura-vs-fatura-recibo-vs-recibo',
    lastmod: '2026-04-11',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    loc: '/guide/vat-exemption-article-53-portugal',
    lastmod: '2026-04-11',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    loc: '/guide/social-security-freelancer-portugal',
    lastmod: '2026-04-11',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    loc: '/guide/irs-tax-return-freelancer-portugal',
    lastmod: '2026-04-11',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    loc: '/guide/d8-visa-portugal-taxes',
    lastmod: '2026-04-11',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    loc: '/guide/tax-deadlines-2026',
    lastmod: '2026-04-11',
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    loc: '/guide/register-freelancer-portugal',
    lastmod: '2026-04-11',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    loc: '/guide/withholding-tax-portugal',
    lastmod: '2026-04-11',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    loc: '/guide/simplified-vs-organized-regime',
    lastmod: '2026-04-11',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    loc: '/guide/portal-das-financas-english',
    lastmod: '2026-04-11',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    loc: '/guide/tax-deductions-freelancer-portugal',
    lastmod: '2026-04-11',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    loc: '/guide/e-fatura-portugal-english',
    lastmod: '2026-04-11',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    loc: '/guide/nif-portugal-foreigner',
    lastmod: '2026-04-11',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    loc: '/guide/anexo-b-irs-freelancer-portugal',
    lastmod: '2026-04-11',
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    loc: '/guide/invoice-foreign-clients-portugal',
    lastmod: '2026-04-15',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    loc: '/guide/accountant-freelancer-portugal',
    lastmod: '2026-04-15',
    changefreq: 'monthly',
    priority: '0.8'
  },
  // Comparison pages
  {
    loc: '/vs/rauva',
    lastmod: '2026-04-15',
    changefreq: 'monthly',
    priority: '0.8'
  },
  // Blog posts
  {
    loc: '/blog/portugal-freelancer-tax-return-2026',
    lastmod: '2026-04-11',
    changefreq: 'monthly',
    priority: '0.8'
  }
]

function generateSitemap(urls: SitemapUrl[]): string {
  const urlsXml = urls.map(url => `  <url>
    <loc>${BASE_URL}${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>`
}

export default function handler(req: any, res: any) {
  try {
    const sitemap = generateSitemap(urls)

    // Set appropriate headers
    res.setHeader('Content-Type', 'application/xml')
    res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600') // Cache for 1 hour

    return res.status(200).send(sitemap)
  } catch (error) {
    console.error('Error generating sitemap:', error)
    return res.status(500).json({ error: 'Failed to generate sitemap' })
  }
}
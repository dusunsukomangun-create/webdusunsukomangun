import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// Memberi tahu mesin pencari bahwa seluruh halaman boleh dibaca,
// sekaligus menunjukkan letak peta situsnya.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}

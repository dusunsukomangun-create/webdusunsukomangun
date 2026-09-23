import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// Peta situs untuk Google. Situs ini satu halaman, jadi isinya satu alamat.
// Kalau nanti ada halaman baru, salin satu blok { ... } di bawah ini.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}

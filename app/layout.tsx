import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { SITE_URL } from '@/lib/site'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  title: 'Dusun Sukomangun — Desa Genito, Windusari, Magelang',
  description:
    'Profil resmi Dusun Sukomangun, Desa Genito, Kecamatan Windusari, Kabupaten Magelang, Jawa Tengah. Sejarah, geografi, kependudukan, kesenian, tradisi, dan fasilitas dusun.',
  generator: 'v0.app',
  keywords: [
    'Sukomangun',
    'Dusun Sukomangun',
    'Desa Genito',
    'Windusari',
    'Magelang',
    'Jawa Tengah',
    'profil dusun',
  ],
  // Tampilan saat tautan situs dibagikan di WhatsApp, Facebook, dan sejenisnya.
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: '/',
    siteName: 'Dusun Sukomangun',
    title: 'Dusun Sukomangun — Desa Genito, Windusari, Magelang',
    description:
      'Profil resmi Dusun Sukomangun: sejarah, geografi, kependudukan, kesenian, tradisi, dan fasilitas dusun.',
    images: [
      {
        url: '/images/Gambar-4.jpeg',
        width: 1200,
        height: 630,
        alt: 'Lanskap perbukitan berundak di Dusun Sukomangun',
      },
    ],
  },
  // Penanda kepemilikan situs untuk Google Search Console. Jangan dihapus.
  verification: {
    google: 'PyrbL15022avmZ08R07TbVtpqGzqkULsjkJAKAbVFBs',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#2f7d4f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${jakarta.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

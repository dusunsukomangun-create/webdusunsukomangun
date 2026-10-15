import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import { SITE_URL } from '@/lib/site'
import './globals.css'

// Judul: huruf berkait klasik yang anggun.
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  style: ['normal', 'italic'],
})

// Isi: huruf bersih yang mudah dibaca di HP.
const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  title: 'Dusun Sukomangun — Desa Genito, Windusari, Magelang',
  description:
    'Profil resmi Dusun Sukomangun, Desa Genito, Kecamatan Windusari, Kabupaten Magelang, Jawa Tengah. Sejarah, geografi, kependudukan, kesenian, tradisi, dan fasilitas dusun.',
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
        // Potongan 1200x630 dari Gambar-4.jpeg, ukuran yang dianjurkan WhatsApp/Facebook.
        url: '/og-image.jpg',
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
  colorScheme: 'light dark',
  themeColor: '#1b4d33',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="id"
      data-theme="light"
      className={`${playfair.variable} ${sourceSans.variable} bg-latar`}
      suppressHydrationWarning
    >
      <head>
        {/* Pasang mode terang/gelap sebelum halaman tampil, supaya tidak berkedip.
            Urutan: pilihan pengunjung yang tersimpan, lalu setelan HP/laptop. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("tema");if(!t)t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

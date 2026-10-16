import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

// Tampil saat pengunjung membuka alamat yang tidak ada,
// misalnya salah ketik: dusunsukomangun.vercel.app/sejarahh
export const metadata: Metadata = {
  title: 'Halaman tidak ditemukan — Dusun Sukomangun',
}

const TAUTAN = [
  { href: '/#potensi', label: 'Potensi' },
  { href: '/#tentang', label: 'Sejarah' },
  { href: '/#peta', label: 'Peta' },
  { href: '/#kesenian', label: 'Kesenian' },
]

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center bg-lembut px-5 py-16 text-center">
      <Link href="/" className="flex flex-col font-serif leading-none">
        <span className="text-sm text-pudar">Dusun</span>
        <span className="text-2xl font-semibold text-hijau-kuat">Sukomangun</span>
      </Link>

      <p className="mt-12 font-serif text-7xl font-semibold text-emas sm:text-8xl">404</p>

      <span className="mt-4 flex items-center gap-3 text-emas" aria-hidden="true">
        <span className="h-px w-12 bg-current" />
        <span className="size-1.5 rotate-45 bg-current" />
        <span className="h-px w-12 bg-current" />
      </span>

      <h1 className="mt-6 text-3xl font-semibold sm:text-4xl">Halaman tidak ditemukan</h1>
      <p className="mt-4 max-w-md text-center text-lg leading-relaxed text-pudar sm:text-center">
        Alamat yang Anda buka tidak ada di situs ini. Mungkin ada salah ketik, atau
        halamannya sudah dipindahkan.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-hijau px-7 font-semibold text-white shadow-md transition-colors hover:bg-hijau-tua dark:bg-hijau-tua dark:hover:bg-hijau-gelap"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Kembali ke beranda
      </Link>

      <nav aria-label="Bagian situs" className="mt-10">
        <p className="text-center text-sm text-pudar sm:text-center">Atau langsung ke:</p>
        <ul className="mt-3 flex flex-wrap justify-center gap-2">
          {TAUTAN.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="inline-block rounded-full border border-garis bg-kartu px-4 py-2 text-sm font-medium transition-colors hover:border-emas hover:text-emas"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  )
}

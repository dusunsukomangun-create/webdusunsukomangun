import Image from 'next/image'
import {
  ChevronDown,
  Handshake,
  MapPin,
  Moon,
  Mountain,
  Music,
  ShoppingBasket,
  Wheat,
} from 'lucide-react'
import { HeroGallery } from '@/components/hero-gallery'
import { Section, SectionHeader } from '@/components/section'

// ── FOTO ────────────────────────────────────────────────────────────
// Foto besar yang memenuhi layar paling atas.
// Pilih foto mendatar (landscape); tulisan judul diletakkan di tengahnya.
const FOTO_UTAMA = {
  src: '/images/Gambar-4.jpeg',
  alt: 'Lanskap perbukitan berundak Dusun Sukomangun dengan jalan beraspal yang membelah ladang',
}
// ────────────────────────────────────────────────────────────────────

const POTENSI = [
  {
    Icon: Wheat,
    title: 'Pertanian',
    body: 'Perbukitan dimanfaatkan sebagai lahan bersistem terasering, dengan tembakau, cabai, jagung, singkong, dan padi sebagai komoditas utama.',
  },
  {
    Icon: Music,
    title: 'Kesenian',
    body: 'Jathilan, Telogo Suto, Al Montra Montro / Sabillun Najah, dan Tari Topeng terus diwariskan antar-generasi sebagai aset budaya khas dusun.',
  },
  {
    Icon: Moon,
    title: 'Tradisi Keagamaan',
    body: 'Tradisi keagamaan terjaga lewat pengajian, Diba’an, Mujahadahan, dan Yasinan yang berjalan rutin.',
  },
  {
    Icon: Handshake,
    title: 'Gotong Royong',
    body: 'Semangat guyub rukun warga sangat kuat dalam kegiatan kemasyarakatan.',
  },
  {
    Icon: ShoppingBasket,
    title: 'UMKM',
    body: 'Beragam usaha mikro berjalan, dari produsen dan distributor singkong, warung kelontong, hingga penjual keranjang tembakau.',
  },
  {
    Icon: Mountain,
    title: 'Perbukitan',
    body: 'Dusun dikelilingi bukit dan perkebunan, dengan permukiman warga berada tepat di tengahnya.',
  },
]

export function HeroSection() {
  return (
    <>
      <section
        id="beranda"
        className="relative flex h-[100svh] min-h-[560px] items-center justify-center overflow-hidden bg-hijau-gelap text-white"
      >
        <Image
          src={FOTO_UTAMA.src}
          alt={FOTO_UTAMA.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Penggelap supaya tulisan tetap terbaca di atas foto. */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-hijau-gelap/70 via-black/40 to-hijau-gelap/80"
          aria-hidden="true"
        />

        <div className="pembuka relative mx-auto flex max-w-4xl flex-col items-center px-5 pt-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
            <MapPin className="size-4 text-emas-muda" aria-hidden="true" />
            Desa Genito, Windusari, Kabupaten Magelang
          </span>

          <h1 className="mt-6 text-5xl font-semibold leading-[1.1] sm:text-7xl">
            Dusun Sukomangun
          </h1>

          <span className="mt-5 flex items-center gap-3 text-emas-muda" aria-hidden="true">
            <span className="h-px w-12 bg-current" />
            <span className="size-1.5 rotate-45 bg-current" />
            <span className="h-px w-12 bg-current" />
          </span>

          <p className="mt-5 max-w-2xl text-center text-lg leading-relaxed text-white/90 sm:text-center sm:text-xl">
            <em className="font-serif not-italic text-emas-muda">Suko</em> berarti senang,{' '}
            <em className="font-serif not-italic text-emas-muda">mangun</em> berarti membangun.
            Sebuah dusun di kawasan pegunungan yang menyimpan jejak sejarah sejak zaman
            kolonial Belanda, dan terus tumbuh dengan menjaga tradisi leluhur.
          </p>

          <a
            href="#potensi"
            className="mt-9 inline-flex h-12 items-center gap-2 rounded-full bg-emas px-7 font-semibold text-white dark:text-hijau-gelap shadow-lg shadow-black/20 transition-colors hover:bg-emas-muda hover:text-hijau-gelap"
          >
            Jelajahi Dusun
          </a>
        </div>

        <a
          href="#potensi"
          className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-xs font-medium uppercase tracking-[0.2em] text-white/70"
        >
          Gulir ke bawah
          <ChevronDown className="size-4 motion-safe:animate-bounce" aria-hidden="true" />
        </a>
      </section>

      <Section id="potensi">
        <SectionHeader
          eyebrow="Potensi Dusun"
          title="Kekayaan Sukomangun"
          description="Ladang yang subur, kesenian yang diwariskan, gotong royong yang mengakar, dan usaha warga yang terus berjalan."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 [&_p]:text-left">
          {POTENSI.map(({ Icon, title, body }) => (
            <li
              key={title}
              className="rounded-2xl border border-garis bg-kartu p-6 shadow-[0_8px_24px_-16px_var(--bayang)]"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-lembut text-hijau ring-1 ring-emas/30">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-2 leading-relaxed text-pudar">{body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="galeri" tone="hijau">
        <SectionHeader
          eyebrow="Galeri Foto"
          title="Suasana Dusun Sukomangun"
          description="Jalan dusun, ladang, warung warga, hingga arak-arakan karnaval."
          tone="gelap"
        />
        <div className="mt-12">
          <HeroGallery />
        </div>
      </Section>
    </>
  )
}

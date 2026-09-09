import { ArrowDown, Handshake, MapPin, Moon, Mountain, Music, ShoppingBasket, Sprout, Wheat } from 'lucide-react'
import { HeroGallery } from '@/components/hero-gallery'
import { Photo } from '@/components/photo'

// ── FOTO ────────────────────────────────────────────────────────────
// Ganti '/placeholder.svg' dengan '/images/nama-foto.jpg'.
// Petunjuk lengkap ada di components/photo.tsx
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
    body: 'Jathilan, Telogo Suto, Al Montra Montro, dan Tari Topeng terus diwariskan antar-generasi sebagai aset budaya khas dusun.',
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
    <section
      id="beranda"
      className="relative -mt-16 overflow-hidden bg-gradient-to-b from-secondary via-background to-background pt-16"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14 lg:pb-24 lg:pt-20">
        <div className="flex flex-col items-start gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
            <MapPin className="size-3.5 text-primary" aria-hidden="true" />
            Desa Genito &middot; Kec. Windusari &middot; Kab. Magelang &middot; Jawa Tengah
          </span>

          <h1 className="text-balance text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Dusun <span className="text-primary">Sukomangun</span>
          </h1>

          <p className="text-pretty text-lg italic leading-relaxed text-foreground/80 sm:text-xl">
            &ldquo;Suko Mangun &mdash; senang membangun, tanpa menunda.&rdquo;
          </p>

          <p className="max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">
            Sebuah dusun di kawasan pegunungan yang menyimpan jejak sejarah sejak zaman
            kolonial Belanda, dan terus tumbuh dengan menjaga tradisi leluhur.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#tentang"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Jelajahi Dusun
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#kesenian"
              className="inline-flex h-12 items-center rounded-full border border-border bg-card px-6 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Lihat Kesenian
            </a>
          </div>

          <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Wheat className="size-4 text-primary" aria-hidden="true" />
              Pertanian terasering
            </li>
            <li className="flex items-center gap-2">
              <Mountain className="size-4 text-primary" aria-hidden="true" />
              Dikelilingi perbukitan
            </li>
            <li className="flex items-center gap-2">
              <Sprout className="size-4 text-primary" aria-hidden="true" />
              Tradisi yang lestari
            </li>
          </ul>
        </div>

        <div className="relative animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 fill-mode-both">
          <Photo
            {...FOTO_UTAMA}
            className="aspect-[4/3] sm:aspect-[5/4]"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
        </div>
      </div>

      <div id="potensi" className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 pb-16 sm:px-6">
        <div className="flex flex-col gap-3">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            Potensi Dusun
          </span>
          <h2 className="text-balance text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
            Kekayaan Sukomangun
          </h2>
          <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            Ladang yang subur, kesenian yang diwariskan, gotong royong yang mengakar, dan
            usaha warga yang terus berjalan.
          </p>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {POTENSI.map(({ Icon, title, body }) => (
            <li
              key={title}
              className="group flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-bold">{title}</h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div
        id="galeri"
        className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 pb-16 sm:px-6 lg:pb-24"
      >
        <HeroGallery />
      </div>
    </section>
  )
}

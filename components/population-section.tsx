import { Briefcase, Home, ShoppingBasket, Sprout, Tractor, Users } from 'lucide-react'
import { Photo } from '@/components/photo'
import { Section, SectionHeader } from '@/components/section'

// ── FOTO ────────────────────────────────────────────────────────────
// Ganti '/placeholder.svg' dengan '/images/nama-foto.jpg'.
// Petunjuk lengkap ada di components/photo.tsx
const FOTO_3 = {
  src: '/images/umkm-keranjang-tembakau-panggul.jpeg',
  alt: 'Tiga warga memanggul keranjang bambu besar untuk tembakau di jalan Dusun Sukomangun',
  caption: 'Keranjang tembakau, penopang ekonomi warga',
}
// ────────────────────────────────────────────────────────────────────

const STATS = [
  { value: '±70', label: 'Rumah warga saat ini', Icon: Home },
  { value: '22', label: 'Rumah pada masa awal, dengan satu mushola', Icon: Users },
  { value: 'Petani', label: 'Mata pencaharian mayoritas warga', Icon: Tractor },
  { value: 'Terasering', label: 'Sistem pertanian di lahan perbukitan', Icon: Sprout },
]

const DETAILS = [
  {
    Icon: Tractor,
    title: 'Mata Pencaharian Dahulu',
    body: 'Sejak dahulu warga umumnya bekerja sebagai petani, penjual kayu, dan pedagang gula. Tanaman yang dibudidayakan terbatas pada jagung, singkong, padi, dan sesekali tembakau.',
  },
  {
    Icon: Briefcase,
    title: 'Mata Pencaharian Kini',
    body: 'Seiring berkembangnya zaman, sebagian besar warga juga berprofesi sebagai peternak dan buruh. Ada pula yang beralih ke bidang bisnis.',
  },
  {
    Icon: ShoppingBasket,
    title: 'Usaha Mikro (UMKM)',
    body: 'Warga menjalankan berbagai usaha mikro: produsen dan distributor (kulakan) singkong, warung kelontong, hingga warung penjual keranjang tembakau untuk pendistribusian tembakau.',
  },
]

export function PopulationSection() {
  return (
    <Section id="penduduk" tone="soft">
      <SectionHeader
        eyebrow="Kependudukan & Ekonomi"
        title="Komunitas yang terus tumbuh"
        description="Dari 22 rumah berdinding anyaman bambu hingga sekitar 70 rumah dengan infrastruktur yang terus diperbaiki."
      />

      <dl className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {STATS.map(({ value, label, Icon }, i) => (
          <div
            key={label}
            className={
              i === 0
                ? 'flex flex-col gap-3 rounded-2xl bg-primary p-5 text-primary-foreground shadow-lg shadow-primary/25 sm:p-6'
                : 'flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6'
            }
          >
            <Icon className={i === 0 ? 'size-5 opacity-80' : 'size-5 text-primary'} aria-hidden="true" />
            <dd className="font-serif text-3xl font-extrabold tracking-tight sm:text-4xl">{value}</dd>
            <dt
              className={
                i === 0
                  ? 'text-sm leading-snug opacity-85'
                  : 'text-sm leading-snug text-muted-foreground'
              }
            >
              {label}
            </dt>
          </div>
        ))}
      </dl>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <Photo {...FOTO_3} sizes="(min-width: 1024px) 42vw, 100vw" />

        <div className="grid gap-4 sm:grid-cols-2">
          {DETAILS.map(({ Icon, title, body }) => (
            <article
              key={title}
              className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-bold">{title}</h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}

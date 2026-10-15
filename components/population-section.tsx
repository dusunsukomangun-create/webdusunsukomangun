import { Briefcase, Home, ShoppingBasket, Sprout, Tractor, Users } from 'lucide-react'
import { Photo } from '@/components/photo'
import { Section, SectionHeader } from '@/components/section'

// ── FOTO ────────────────────────────────────────────────────────────
// Ganti '/placeholder.svg' dengan '/images/nama-foto.jpg'.
// Petunjuk lengkap ada di components/photo.tsx
const FOTO_3 = {
  src: '/images/umkm-keranjang-tembakau-panggul.jpeg',
  alt: 'Tiga warga memanggul keranjang bambu besar untuk tembakau di jalan Dusun Sukomangun',
  caption: 'Memanggul keranjang tembakau',
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
    <Section id="penduduk" tone="lembut">
      <SectionHeader
        eyebrow="Kependudukan & Ekonomi"
        title="Komunitas yang Terus Tumbuh"
        description="Dari 22 rumah berdinding anyaman bambu hingga sekitar 70 rumah dengan infrastruktur yang terus diperbaiki."
      />

      <dl className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {STATS.map(({ value, label, Icon }) => (
          <div
            key={label}
            className="flex flex-col items-center rounded-2xl border border-garis bg-kartu p-5 text-center shadow-[0_8px_24px_-16px_var(--bayang)] sm:p-6"
          >
            <Icon className="size-5 text-emas" aria-hidden="true" />
            {/* HTML mewajibkan <dt> sebelum <dd>; order-last menaruh keterangan
                kembali di bawah angkanya. */}
            <dt className="order-last mt-1 text-sm leading-snug text-pudar">{label}</dt>
            <dd className="mt-3 font-serif text-2xl font-semibold text-hijau-kuat sm:text-4xl">
              {value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-start">
        <Photo {...FOTO_3} sizes="(min-width: 1024px) 50vw, 100vw" />

        <div className="flex flex-col gap-4 [&_p]:text-left">
          {DETAILS.map(({ Icon, title, body }) => (
            <article
              key={title}
              className="flex gap-4 rounded-2xl border border-garis bg-kartu p-5 shadow-[0_8px_24px_-16px_var(--bayang)]"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-lembut text-hijau ring-1 ring-emas/30">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-1 leading-relaxed text-pudar">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}

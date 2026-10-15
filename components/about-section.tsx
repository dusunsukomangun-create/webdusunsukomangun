import { BookOpenText, Landmark, ShieldAlert } from 'lucide-react'
import { Photo } from '@/components/photo'
import { Section, SectionHeader } from '@/components/section'

// ── FOTO ────────────────────────────────────────────────────────────
// Ganti '/placeholder.svg' dengan '/images/nama-foto.jpg'.
// Petunjuk lengkap ada di components/photo.tsx
const FOTO_1 = {
  src: '/images/Gambar-5.jpeg',
  alt: 'Papan nama Nahdlatul Ulama bertuliskan Dsn. Sukomangun, Genito, Windusari, Magelang',
  caption: 'Papan nama dusun',
}
const FOTO_2 = {
  src: '/images/dusun-gang-permukiman.jpeg',
  alt: 'Gang permukiman Dusun Sukomangun dengan rumah-rumah berdinding bata dan anak-anak bermain',
  caption: 'Gang permukiman warga',
}
// ────────────────────────────────────────────────────────────────────

// Urut dari yang paling lama; tampil selang-seling kiri dan kanan.
const KISAH = [
  {
    Icon: Landmark,
    when: 'Masa Babad',
    title: 'Tokoh Pembuka Lahan',
    body: (
      <>
        Wilayah Sukomangun dahulu dibuka melalui babad lahan oleh dua tokoh yang
        dihormati, yaitu <strong>Kiai Sunan Geseng</strong> dan{' '}
        <strong>Mbah Raden Wangsadarwin</strong>.
      </>
    ),
  },
  {
    Icon: ShieldAlert,
    when: 'Masa Penjajahan',
    title: 'Masa Penjajahan Belanda',
    body: (
      <>
        Warga turut merasakan pahitnya perjuangan mempertahankan kemerdekaan, mulai dari
        rumah yang dibakar, warga yang disiksa, hingga mereka yang gugur dalam sebuah
        insiden penyerangan. Kisah-kisah ini menjadi bukti bahwa warga Sukomangun turut
        menanggung beban perjuangan di masa sulit tersebut.
      </>
    ),
  },
  {
    Icon: BookOpenText,
    when: 'Hingga Kini',
    title: 'Asal Nama',
    body: (
      <>
        <em>Suko</em> berarti senang, <em>mangun</em> berarti membangun. Perpaduannya
        bermakna keinginan mewujudkan sesuatu dengan penuh sukacita dan sesegera mungkin,
        tanpa menunda-nunda. Makna ini menjadi filosofi hidup dan semangat gotong royong
        warga hingga kini.
      </>
    ),
  },
]

export function AboutSection() {
  return (
    <Section id="tentang">
      <SectionHeader
        eyebrow="Tentang & Sejarah"
        title="Dari Semangat Membangun, Lahirlah Sebuah Nama"
        description="Dusun Sukomangun menyimpan jejak sejarah panjang sejak zaman kolonial Belanda, dan sebuah nama yang menjadi pesan turun-temurun."
      />

      {/* Garis waktu: garis di tengah, kartu selang-seling kiri dan kanan.
          Di HP garisnya pindah ke kiri dan semua kartu di kanannya. */}
      <ol className="relative mx-auto mt-14 max-w-4xl [&_p]:text-left">
        <span
          className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-emas/0 via-emas/60 to-emas/0 md:left-1/2"
          aria-hidden="true"
        />
        {KISAH.map(({ Icon, when, title, body }, i) => (
          <li
            key={title}
            className={`relative mb-10 pl-16 last:mb-0 md:mb-0 md:w-1/2 md:pl-0 ${
              i % 2 === 0 ? 'md:pr-14' : 'md:ml-auto md:pl-14'
            } ${i > 0 ? 'md:-mt-12' : ''}`}
          >
            <span
              className={`absolute left-0 top-6 flex size-10 items-center justify-center rounded-full border-2 border-emas bg-kartu text-hijau ${
                i % 2 === 0 ? 'md:-right-5 md:left-auto' : 'md:-left-5'
              }`}
            >
              <Icon className="size-4" aria-hidden="true" />
            </span>
            <article className="rounded-2xl border border-garis bg-kartu p-6 shadow-[0_8px_24px_-16px_var(--bayang)]">
              <span className="inline-block rounded-full bg-lembut px-3 py-1 text-sm font-semibold text-hijau">
                {when}
              </span>
              <h3 className="mt-3 text-xl font-semibold">{title}</h3>
              <p className="mt-2 leading-relaxed text-pudar">{body}</p>
            </article>
          </li>
        ))}
      </ol>

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        <Photo {...FOTO_1} sizes="(min-width: 640px) 50vw, 100vw" />
        <Photo {...FOTO_2} sizes="(min-width: 640px) 50vw, 100vw" />
      </div>
    </Section>
  )
}

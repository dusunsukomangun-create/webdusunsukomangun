import { BookOpen, GraduationCap, Sparkles, Users } from 'lucide-react'
import { Photo } from '@/components/photo'
import { Section, SectionHeader } from '@/components/section'

// ── FOTO ────────────────────────────────────────────────────────────
// Ganti '/placeholder.svg' dengan '/images/nama-foto.jpg'.
// Petunjuk lengkap ada di components/photo.tsx
const FOTO_1 = {
  src: '/images/tpq-gedung-darul-huda.jpeg',
  alt: 'Gedung TPQ Darul Huda Dusun Sukomangun dengan papan nama Nahdlatul Ulama di depannya',
  caption: 'Gedung TPQ Darul Huda',
}
const FOTO_2 = {
  src: '/images/tpq-kelas-lebar.jpeg',
  alt: 'Suasana kelas TPQ Darul Huda, pengajar menulis huruf Arab di papan tulis sementara santri mencatat',
  caption: 'Suasana belajar di kelas',
}
const FOTO_3 = {
  src: '/images/tpq-anak-mengaji-malam.jpeg',
  alt: 'Santri putri TPQ Darul Huda membaca dan mencatat pelajaran dari kitab di atas meja kayu',
  caption: '',
}
// ────────────────────────────────────────────────────────────────────

const MATERI = [
  'Turutan (Juz ’Amma / Iqro)',
  'Al-Qur’an',
  'Kitab Safinah',
  'Tajwid',
  'Tauhid',
  'Aqidatul Awam',
]

const PENGAJAR = [
  'Pak Surachman',
  'Pak Sutrisno',
  'Pak Zainal',
  'Pak Paino',
  'Pak Mari',
  'Pak Trimo',
]

// Urut menurut tahun.
const RIWAYAT = [
  {
    Icon: Sparkles,
    year: '1979',
    title: 'Awal Pengabdian',
    body: 'Bagi Pak Surachman, mengajar ngaji bukan sekadar tugas melainkan pengabdian yang ia jalani sejak 1979, meneruskan jejak sang ibu, dan ditekuni sepenuh hati sejak 1983.',
  },
  {
    Icon: GraduationCap,
    year: '±2015',
    title: 'TPQ Berdiri',
    body: 'Berawal dari keprihatinan Pak Surachman dan Pak Sutrisno melihat anak-anak mengaji secara terpisah, mereka tergerak menyediakan satu tempat belajar bersama.',
  },
  {
    Icon: BookOpen,
    year: '2018',
    title: 'Gedung Sendiri',
    body: 'Setelah sempat menumpang, TPQ Darul Huda akhirnya memiliki gedung sendiri pada tahun 2018 dari sebuah rumah warga.',
  },
]

export function TpqSection() {
  return (
    <Section id="tpq">
      <SectionHeader
        eyebrow="TPQ Darul Huda"
        title="Tempat Tumbuhnya Generasi Penerus"
        description="Lebih dari sekadar tempat menimba ilmu, TPQ Darul Huda menjadi tempat tumbuhnya harapan agar lahir generasi penerus yang kelak meramaikan masjid dan menjaga denyut kehidupan keagamaan dusun."
      />

      <ol className="mt-12 grid gap-5 md:grid-cols-3 [&_p]:text-left">
        {RIWAYAT.map(({ Icon, year, title, body }) => (
          <li
            key={year}
            className="rounded-2xl border border-garis bg-kartu p-6 shadow-[0_8px_24px_-16px_var(--bayang)]"
          >
            <div className="flex items-center justify-between">
              <span className="font-serif text-3xl font-semibold text-hijau-kuat">{year}</span>
              <span className="flex size-11 items-center justify-center rounded-full bg-lembut text-hijau ring-1 ring-emas/30">
                <Icon className="size-5" aria-hidden="true" />
              </span>
            </div>
            <h3 className="mt-4 text-xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-pudar">{body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Photo {...FOTO_1} sizes="(min-width: 640px) 50vw, 100vw" />
        <Photo {...FOTO_2} sizes="(min-width: 640px) 50vw, 100vw" />
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        <article className="rounded-2xl border border-garis bg-kartu p-6 shadow-[0_8px_24px_-16px_var(--bayang)]">
          <h3 className="flex items-center gap-3 text-xl font-semibold">
            <Users className="size-5 text-emas" aria-hidden="true" />
            Para Pengajar
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {PENGAJAR.map((nama) => (
              <li key={nama} className="rounded-full bg-lembut px-3 py-1.5 text-sm font-medium text-hijau-kuat">
                {nama}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl bg-gradient-to-br from-hijau-tua to-hijau-gelap p-6 text-white shadow-lg">
          <h3 className="text-xl font-semibold">Materi yang Diajarkan</h3>
          <ul className="mt-4 flex flex-col gap-2">
            {MATERI.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="size-1.5 shrink-0 rotate-45 bg-emas-muda" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </article>

        <Photo {...FOTO_3} className="aspect-[4/3] lg:aspect-auto lg:h-full" sizes="(min-width: 1024px) 33vw, 100vw" />
      </div>
    </Section>
  )
}

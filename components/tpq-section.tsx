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
  caption: 'Belajar kitab bersama',
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

const RINGKASAN = [
  {
    Icon: GraduationCap,
    title: 'Berdiri sekitar 2015',
    body: 'Berawal dari keprihatinan Pak Surachman dan Pak Sutrisno melihat anak-anak mengaji secara terpisah, mereka tergerak menyediakan satu tempat belajar bersama.',
  },
  {
    Icon: BookOpen,
    title: 'Gedung sendiri sejak 2018',
    body: 'Setelah sempat menumpang, TPA Darul Huda akhirnya memiliki gedung sendiri pada tahun 2018 dari sebuah rumah warga.',
  },
  {
    Icon: Sparkles,
    title: 'Pengabdian sejak 1979',
    body: 'Bagi Pak Surachman, mengajar ngaji bukan sekadar tugas melainkan pengabdian yang ia jalani sejak 1979, meneruskan jejak sang ibu, dan ditekuni sepenuh hati sejak 1983.',
  },
]

export function TpqSection() {
  return (
    <Section id="tpq" tone="soft">
      <SectionHeader
        eyebrow="TPQ Darul Huda"
        title="Tempat tumbuhnya generasi penerus"
        description="Setiap hari, kecuali malam Jumat, suara lantunan Al-Qur’an mengalun dari TPA Darul Huda."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-start">
        <div className="flex flex-col gap-4">
          {RINGKASAN.map(({ Icon, title, body }) => (
            <article
              key={title}
              className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {body}
                </p>
              </div>
            </article>
          ))}

          <article className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
            <div className="flex items-center gap-3">
              <Users className="size-5 text-primary" aria-hidden="true" />
              <h3 className="text-lg font-bold">Para Pengajar</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {PENGAJAR.map((nama) => (
                <li
                  key={nama}
                  className="rounded-full bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground"
                >
                  {nama}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="flex flex-col gap-6">
          <Photo {...FOTO_1} sizes="(min-width: 1024px) 38vw, 100vw" />
          <Photo {...FOTO_2} sizes="(min-width: 1024px) 38vw, 100vw" />

          <article className="flex flex-col gap-4 rounded-2xl bg-primary p-6 text-primary-foreground shadow-lg shadow-primary/25">
            <h3 className="text-lg font-bold">Materi yang Diajarkan</h3>
            <ul className="flex flex-col gap-2">
              {MATERI.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm">
                  <span
                    className="size-1.5 shrink-0 rounded-full bg-primary-foreground"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-pretty text-sm leading-relaxed opacity-85">
              Lebih dari sekadar tempat menimba ilmu, TPA Darul Huda menjadi tempat
              tumbuhnya harapan agar lahir generasi penerus yang kelak meramaikan masjid
              dan menjaga denyut kehidupan keagamaan dusun.
            </p>
          </article>
        </div>
      </div>
    </Section>
  )
}

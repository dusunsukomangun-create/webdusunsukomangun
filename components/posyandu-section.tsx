import { Activity, CalendarDays, HeartPulse, Stethoscope, Users } from 'lucide-react'
import { Photo } from '@/components/photo'
import { Section, SectionHeader } from '@/components/section'

// ── FOTO ────────────────────────────────────────────────────────────
// Ganti '/placeholder.svg' dengan '/images/nama-foto.jpg'.
// Petunjuk lengkap ada di components/photo.tsx
const FOTO_1 = {
  src: '/placeholder.svg',
  alt: 'Kegiatan Posyandu Dusun Sukomangun yang dihadiri warga',
  caption: 'Kegiatan Posyandu warga',
}
const FOTO_2 = {
  src: '/placeholder.svg',
  alt: 'Para kader Posyandu Dusun Sukomangun sedang bertugas',
  caption: 'Lima kader yang bertugas',
}
const FOTO_3 = {
  src: '/placeholder.svg',
  alt: 'Pemeriksaan kesehatan dan penimbangan di Posyandu',
  caption: 'Pemeriksaan kesehatan warga',
}
// ────────────────────────────────────────────────────────────────────

const RIWAYAT = [
  {
    Icon: HeartPulse,
    title: 'Berawal dari rumah warga',
    body: 'Posyandu di Dusun Sukomangun telah berlangsung sejak lama. Awalnya dilaksanakan di rumah Bu Nur Imah atau Bu Rowi, kemudian berpindah lokasi karena rumah tersebut mengalami pembangunan.',
  },
  {
    Icon: Users,
    title: 'Lima orang kader',
    body: 'Kegiatan didukung oleh lima orang kader yang tidak memiliki masa jabatan tertentu — mereka menjalankan tugas hingga memutuskan untuk berhenti.',
  },
  {
    Icon: CalendarDays,
    title: 'Setiap tanggal 13',
    body: 'Posyandu dilaksanakan setiap tanggal 13, meskipun jadwalnya dapat menyesuaikan kondisi masyarakat. Tingkat partisipasi warga masih beragam.',
  },
]

const LAYANAN = [
  'Pemantauan kondisi kesehatan',
  'Pemantauan status gizi',
  'Indeks massa tubuh (IMT)',
  'Deteksi risiko obesitas',
  'Deteksi kekurangan gizi',
  'Rujukan ke Puskesmas / Pustu',
]

export function PosyanduSection() {
  return (
    <Section id="posyandu">
      <SectionHeader
        eyebrow="Posyandu"
        title="Layanan kesehatan dari warga untuk warga"
        description="Pada awal didirikan, kegiatan lebih berfokus pada bayi dan lansia. Kini cakupannya semakin luas dan melibatkan masyarakat dari berbagai kelompok usia."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Photo {...FOTO_1} sizes="(min-width: 1024px) 31vw, (min-width: 640px) 48vw, 100vw" />
        <Photo {...FOTO_2} sizes="(min-width: 1024px) 31vw, (min-width: 640px) 48vw, 100vw" />
        <Photo {...FOTO_3} sizes="(min-width: 1024px) 31vw, (min-width: 640px) 48vw, 100vw" />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.3fr_1fr] lg:items-start">
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {RIWAYAT.map(({ Icon, title, body }) => (
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

        <article className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-7">
          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Stethoscope className="size-6" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold">Cakupan Layanan</h3>
          </div>

          <ul className="flex flex-col gap-2">
            {LAYANAN.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-xl bg-secondary px-3 py-2.5 text-sm font-medium text-secondary-foreground"
              >
                <Activity className="size-4 shrink-0 text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  )
}

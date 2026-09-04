import { Activity, BookOpen, Building2, Drum, HeartPulse, Route, Speaker, Stethoscope } from 'lucide-react'
import { Section, SectionHeader } from '@/components/section'

const FACILITIES = [
  { Icon: Building2, title: 'Masjid', body: 'Pusat ibadah dan kegiatan keagamaan warga.' },
  { Icon: BookOpen, title: 'TPQ', body: 'Taman Pendidikan Al-Qur’an bagi anak-anak dusun.' },
  { Icon: Speaker, title: 'Sound System', body: 'Perangkat suara milik bersama untuk kegiatan warga.' },
  { Icon: Drum, title: 'Alat Kesenian Rebana', body: 'Inventaris kelompok rebana Al-Muntramuntru.' },
  {
    Icon: Route,
    title: 'Jalan Utama Beraspal',
    body: 'Diaspal oleh PU karena menjadi jalur wisata Temanggung–Kaliangkrik.',
  },
]

const POSYANDU_CHECKS = [
  'Berat badan',
  'Tinggi badan',
  'Lingkar perut (IMT)',
  'Tekanan darah (tensi)',
]

export function FacilitiesSection() {
  return (
    <Section id="fasilitas" tone="soft">
      <SectionHeader
        eyebrow="Fasilitas & Layanan Kesehatan"
        title="Sarana yang menopang kehidupan warga"
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_1fr]">
        <div className="grid gap-3 sm:grid-cols-2">
          {FACILITIES.map(({ Icon, title, body }) => (
            <article
              key={title}
              className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md last:sm:col-span-2"
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
              <HeartPulse className="size-6" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Posyandu</h3>
              <p className="text-sm text-muted-foreground">Dijalankan oleh 5 orang kader</p>
            </div>
          </div>

          <p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            Kegiatan kini mencakup semua kalangan usia. Hasil pemeriksaan dirujuk ke
            Puskesmas atau Pustu bila diperlukan.
          </p>

          <ul className="grid grid-cols-2 gap-2">
            {POSYANDU_CHECKS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-xl bg-secondary px-3 py-2.5 text-sm font-medium text-secondary-foreground"
              >
                <Activity className="size-4 shrink-0 text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex items-center gap-3 rounded-2xl border border-dashed border-border p-4">
            <Stethoscope className="size-5 shrink-0 text-primary" aria-hidden="true" />
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Jadwal:</span> biasanya Sabtu–Minggu
            </p>
          </div>
        </article>
      </div>
    </Section>
  )
}

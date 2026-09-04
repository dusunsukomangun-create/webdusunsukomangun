import { BookOpen, CalendarDays, Moon } from 'lucide-react'
import { Section, SectionHeader } from '@/components/section'

const ACTIVITIES = [
  {
    Icon: Moon,
    when: 'Rutin',
    title: 'Simtudduror & Diba’',
    body: 'Pembacaan maulid Simtudduror dan Diba’ yang dilaksanakan secara rutin oleh warga.',
  },
  {
    Icon: CalendarDays,
    when: '9 Syawal',
    title: 'Ziarah Kubur',
    body: 'Ziarah ke makam leluhur dan keluarga dilakukan bersama setiap tanggal 9 Syawal.',
  },
  {
    Icon: BookOpen,
    when: 'Bulan Mulud',
    title: 'Khataman / Intihan TPA',
    body: 'Diselenggarakan bersamaan dengan Haul Mbah Kiai Wahid di Masjid Punden.',
  },
]

export function ActivitiesSection() {
  return (
    <Section id="kegiatan">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <SectionHeader
          eyebrow="Kegiatan Rutin"
          title="Ritme kebersamaan warga"
          description="Kegiatan keagamaan dan sosial yang mempererat tali silaturahmi sepanjang tahun."
        />

        <ol className="relative flex flex-col gap-6 border-l-2 border-border pl-8 sm:pl-10">
          {ACTIVITIES.map(({ Icon, when, title, body }) => (
            <li key={title} className="relative">
              <span
                className="absolute -left-[calc(2rem+9px)] top-5 flex size-4 items-center justify-center rounded-full border-2 border-primary bg-background sm:-left-[calc(2.5rem+9px)]"
                aria-hidden="true"
              >
                <span className="size-1.5 rounded-full bg-primary" />
              </span>
              <article className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {when}
                  </span>
                  <h3 className="text-lg font-bold leading-snug">{title}</h3>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}

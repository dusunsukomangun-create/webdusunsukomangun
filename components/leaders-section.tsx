import { Section, SectionHeader } from '@/components/section'
import { Sprout, UserRound, Users, Wheat } from 'lucide-react'

const STRUCTURE = [
  { Icon: UserRound, title: 'Kepala Dusun', body: 'Pimpinan pemerintahan tingkat dusun.' },
  { Icon: Users, title: 'Karang Taruna', body: 'Wadah pemuda; motor kegiatan dan kesenian.' },
  { Icon: Wheat, title: 'Kelompok Tani (Poktan)', body: 'Organisasi petani untuk kemajuan pertanian.' },
]

const FIGURES = [
  { name: 'Pak Imam Masjid', role: 'Imam Masjid', initials: 'IM' },
  { name: 'Pak Surahman', role: 'Ketua TPQ', initials: 'SR' },
  { name: 'Pak Zainal Arifin', role: 'Guru Ngaji', initials: 'ZA' },
  { name: 'Mbah Lantur', role: 'Sesepuh yang dihormati lintas kalangan', initials: 'ML' },
]

export function LeadersSection() {
  return (
    <Section id="tokoh">
      <SectionHeader
        eyebrow="Struktur & Tokoh Masyarakat"
        title="Mereka yang menjaga arah dusun"
        description="Kepemimpinan formal dan panutan masyarakat berjalan berdampingan di Sukomangun."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-4">
          <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            <Sprout className="size-4 text-primary" aria-hidden="true" />
            Struktur Kelembagaan
          </h3>
          {STRUCTURE.map(({ Icon, title, body }) => (
            <article
              key={title}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-base font-bold">{title}</h4>
                <p className="text-sm text-muted-foreground">{body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            <Users className="size-4 text-primary" aria-hidden="true" />
            Tokoh Masyarakat
          </h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {FIGURES.map(({ name, role, initials }) => (
              <li
                key={name}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
              >
                <span
                  className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary font-serif text-sm font-bold text-primary-foreground"
                  aria-hidden="true"
                >
                  {initials}
                </span>
                <div className="flex flex-col">
                  <p className="font-serif text-base font-bold leading-tight">{name}</p>
                  <p className="text-sm leading-snug text-muted-foreground">{role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

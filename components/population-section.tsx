import { Briefcase, GraduationCap, Home, Tractor, Users } from 'lucide-react'
import { Section, SectionHeader } from '@/components/section'

const STATS = [
  { value: '65–70+', label: 'Kepala Keluarga', Icon: Home },
  { value: '±70', label: 'Rumah warga', Icon: Users },
  { value: '2000-an', label: 'Generasi muda mulai beralih profesi', Icon: Briefcase },
  { value: 'S1', label: 'Jenjang pendidikan tertinggi warga', Icon: GraduationCap },
]

const DETAILS = [
  {
    Icon: Users,
    title: 'Penduduk',
    body: 'Sekitar 65–70+ Kepala Keluarga, mayoritas berusia produktif. Jumlah penduduk terus bertambah setiap tahun.',
  },
  {
    Icon: Tractor,
    title: 'Mata Pencaharian',
    body: 'Pertanian (musiman) dan buruh harian lepas menjadi tulang punggung ekonomi. Sebagian besar warga juga beternak kambing dan sapi.',
  },
  {
    Icon: Briefcase,
    title: 'Generasi Muda',
    body: 'Sejak sekitar tahun 2000–2002, generasi muda mulai beralih ke bisnis, bekerja di luar daerah, atau di pabrik.',
  },
  {
    Icon: GraduationCap,
    title: 'Kemajuan Pendidikan',
    body: 'Dahulu mayoritas warga lulusan SD–SMP; kini mulai bermunculan lulusan SMA hingga sarjana (S1) dan tenaga perawat.',
  },
]

export function PopulationSection() {
  return (
    <Section id="penduduk">
      <SectionHeader
        eyebrow="Kependudukan & Ekonomi"
        title="Komunitas yang terus tumbuh"
        description="Dari petani dan peternak hingga sarjana dan perawat — potret warga Sukomangun hari ini."
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

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
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
    </Section>
  )
}

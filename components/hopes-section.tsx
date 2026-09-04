import { GraduationCap, HeartHandshake, Palette, Users } from 'lucide-react'
import { Section } from '@/components/section'

const HOPES = [
  {
    Icon: HeartHandshake,
    title: 'Kerukunan warga tetap terjaga',
    body: 'Hidup guyub, saling menghormati, dan gotong royong sebagai fondasi dusun.',
  },
  {
    Icon: GraduationCap,
    title: 'SDM & pendidikan meningkat',
    body: 'Generasi penerus yang terdidik, terampil, dan siap membawa perubahan.',
  },
  {
    Icon: Users,
    title: 'Karang Taruna semakin aktif',
    body: 'Pemuda menjadi penggerak utama kegiatan sosial, ekonomi, dan budaya.',
  },
  {
    Icon: Palette,
    title: 'Kesenian tradisional lestari',
    body: 'Rebana, Telaga Suta, Kuntulan, dan Jatilan terus hidup lintas generasi.',
  },
]

export function HopesSection() {
  return (
    <Section id="harapan" className="pb-0 sm:pb-0 lg:pb-0">
      <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 text-primary-foreground shadow-xl shadow-primary/25 sm:px-10 sm:py-16 lg:px-14">
        <div
          className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full border-[24px] border-primary-foreground/10"
          aria-hidden="true"
        />
        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          <div className="flex max-w-md flex-col gap-4">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
              Harapan Dusun
            </span>
            <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Suko mangun: senang membangun, tanpa menunda
            </h2>
            <p className="text-pretty text-base leading-relaxed opacity-85">
              Semangat yang tertanam dalam nama Sukomangun menjadi kompas bagi langkah
              warga ke depan.
            </p>
          </div>

          <ul className="grid flex-1 gap-3 sm:grid-cols-2">
            {HOPES.map(({ Icon, title, body }) => (
              <li
                key={title}
                className="flex flex-col gap-3 rounded-2xl bg-primary-foreground/10 p-5 backdrop-blur-sm transition-colors hover:bg-primary-foreground/15"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary-foreground text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="text-base font-bold leading-snug">{title}</h3>
                <p className="text-sm leading-relaxed opacity-85">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

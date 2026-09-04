import Image from 'next/image'
import { Award, Drum, Flame, HandHeart, Shield, Sparkles } from 'lucide-react'
import { Section, SectionHeader } from '@/components/section'

const ARTS = [
  {
    Icon: Drum,
    tag: 'Musik religi',
    title: 'Rebana “Al-Muntramuntru”',
    body: 'Awalnya bernama “Al-Kejawen”. Nama baru diberikan oleh seorang Gus karena lagu-lagunya unik memadukan bahasa Jawa, Arab, dan Indonesia. Digerakkan oleh Mas Madun dari Karang Taruna.',
  },
  {
    Icon: Sparkles,
    tag: 'Kesenian khas',
    title: 'Telaga Suta',
    body: 'Tari/pertunjukan khas Sukomangun ciptaan Mas Madun, menggabungkan gerakan Panji Kutan, Warok, dan Tari Topeng (Cakar Lele).',
  },
  {
    Icon: Shield,
    tag: 'Kesenian tua',
    title: 'Kuntulan',
    body: 'Kesenian tua berbasis gerak pencak/silat yang berakar dari tradisi Mangkunegaran.',
  },
  {
    Icon: Flame,
    tag: 'Tradisi lama',
    title: 'Jatilan / Topeng Ireng',
    body: 'Kesenian tradisional lama yang masih terus dilestarikan oleh warga hingga hari ini.',
  },
]

export function ArtsSection() {
  return (
    <Section id="kesenian" tone="soft" className="relative overflow-hidden">
      <SectionHeader
        eyebrow="Kesenian & Tradisi"
        title="Denyut budaya yang terus dijaga"
        description="Dari rebana yang memadukan tiga bahasa hingga tarian ciptaan sendiri — kesenian adalah jantung Sukomangun."
        align="center"
      />

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        <div className="relative min-h-72 overflow-hidden rounded-3xl shadow-lg shadow-primary/10 ring-1 ring-border lg:row-span-2">
          <Image
            src="/images/kesenian.png"
            alt="Pertunjukan kesenian tradisional Jatilan dan Topeng Ireng di Dusun Sukomangun"
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-5 pt-16 text-primary-foreground">
            <p className="text-xs font-medium uppercase tracking-wider opacity-80">Pertunjukan</p>
            <p className="font-serif text-lg font-bold">Jatilan & Topeng Ireng</p>
          </div>
        </div>

        {ARTS.map(({ Icon, tag, title, body }) => (
          <article
            key={title}
            className="group flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                {tag}
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <h3 className="text-lg font-bold leading-snug">{title}</h3>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <article className="flex gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm sm:gap-5 sm:p-7">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
            <HandHeart className="size-5" aria-hidden="true" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold">Filosofi Tradisi</h3>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              Sesaji dan sedekah bumi (<em>merti dusun</em>) dimaknai sebagai bentuk
              penghormatan (<em>nguri-uri</em>) kepada leluhur dan doa keselamatan desa
              &mdash; bukan kemusyrikan.
            </p>
          </div>
        </article>

        <article className="flex items-center gap-4 rounded-3xl bg-primary p-6 text-primary-foreground shadow-lg shadow-primary/25 sm:p-7">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/15">
            <Award className="size-5" aria-hidden="true" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-serif text-2xl font-extrabold tracking-tight">Rp15 juta</p>
            <p className="text-sm leading-snug opacity-85">
              Bantuan dana dari Kabupaten untuk kelompok kesenian tahun ini.
            </p>
          </div>
        </article>
      </div>
    </Section>
  )
}

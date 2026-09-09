import { Drum, Music, Sparkles, Waves } from 'lucide-react'
import { Photo } from '@/components/photo'
import { Section, SectionHeader } from '@/components/section'

// ── FOTO ────────────────────────────────────────────────────────────
// Ganti '/placeholder.svg' dengan '/images/nama-foto.jpg'.
// Petunjuk lengkap ada di components/photo.tsx
const FOTO_1 = {
  src: '/placeholder.svg',
  alt: 'Grup rebana Al-Muntra Muntru Dusun Sukomangun sedang tampil',
  caption: 'Grup rebana Al-Muntra Muntru',
}
const FOTO_2 = {
  src: '/placeholder.svg',
  alt: 'Pementasan Al-Muntra Muntru dengan gendang dan angklung',
  caption: 'Perpaduan gendang dan angklung',
}
const FOTO_3 = {
  src: '/placeholder.svg',
  alt: 'Pertunjukan tari Telaga Suta di Dusun Sukomangun',
  caption: 'Pertunjukan Telaga Suta',
}
// ────────────────────────────────────────────────────────────────────

const ARTS = [
  {
    Icon: Drum,
    DetailIcon: Music,
    tag: 'Musik religi',
    title: 'Al-Muntra Muntru',
    body: 'Grup rebana dusun yang awalnya bernama Al-Kejawen. Namanya diganti oleh seorang Gus lewat ungkapan “wong-wongane iku mantra-mantru”, lalu Mbah Madhon menetapkannya menjadi Al-Muntra Muntru — nama yang bertahan hingga saat ini.',
    detailTitle: 'Keunikannya',
    detail: (
      <>
        Grup ini memadukan musik Arab, Jawa, dan Indonesia, dengan kombinasi alat musik
        tradisional seperti gendang dan angklung. Penampilan pertamanya langsung mendapat
        sambutan luar biasa hingga dikenal warga di seluruh dusun se-Genito, seiring
        videonya yang tersebar luas. Grup ini biasa diundang mengisi acara khataman dan
        pengajian.
      </>
    ),
  },
  {
    Icon: Sparkles,
    DetailIcon: Waves,
    tag: 'Kesenian khas',
    title: 'Telaga Suta',
    body: 'Modernisasi tarian Jawa yang menggabungkan Panji Kutan, Warok, dan Tari Topeng atau Cakar Lele menjadi satu kesatuan pertunjukan yang telah bercampur dengan unsur-unsur modern.',
    detailTitle: 'Arti namanya',
    detail: (
      <>
        Namanya berakar dari kondisi geografis dusun yang dikelilingi sungai-sungai yang
        mengalir menuju Plalar, Ngarenan, dan sekitarnya, serta letaknya yang dekat dengan
        Sendang Piwakan. Kata <em>suta</em> sendiri berarti <em>buto</em> atau raksasa,
        yang dimaknai sebagai sosok penjaga.
      </>
    ),
  },
]

export function ArtsSection() {
  return (
    <Section id="kesenian" tone="soft" className="relative overflow-hidden">
      <SectionHeader
        eyebrow="Kesenian"
        title="Denyut budaya yang terus dijaga"
        description="Dari rebana yang memadukan musik Arab, Jawa, dan Indonesia hingga tarian hasil modernisasi — kesenian adalah jantung Sukomangun."
        align="center"
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Photo {...FOTO_1} sizes="(min-width: 1024px) 31vw, (min-width: 640px) 48vw, 100vw" />
        <Photo {...FOTO_2} sizes="(min-width: 1024px) 31vw, (min-width: 640px) 48vw, 100vw" />
        <Photo {...FOTO_3} sizes="(min-width: 1024px) 31vw, (min-width: 640px) 48vw, 100vw" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {ARTS.map(({ Icon, DetailIcon, tag, title, body, detailTitle, detail }) => (
          <article
            key={title}
            className="group flex flex-col gap-6 rounded-3xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg sm:p-9"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-7" aria-hidden="true" />
              </span>
              <span className="rounded-full bg-muted px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {tag}
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-balance text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                {title}
              </h3>
              <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                {body}
              </p>
            </div>

            <div className="mt-auto flex gap-4 rounded-2xl bg-secondary/60 p-5">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <DetailIcon className="size-5" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h4 className="text-base font-bold">{detailTitle}</h4>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {detail}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

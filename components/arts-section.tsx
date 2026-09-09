import { Drum, Flame, Music, Shield, Sparkles, Waves } from 'lucide-react'
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
    Icon: Flame,
    tag: 'Tradisi lama',
    title: 'Jatilan',
    body: 'Sudah ada sejak zaman dahulu dan masih dilestarikan sampai sekarang. Kegiatan kesenian ini dikelola dan dipimpin oleh Mas Mandhon.',
  },
  {
    Icon: Drum,
    tag: 'Musik religi',
    title: 'Al-Muntra Muntru',
    body: 'Grup rebana dusun yang awalnya bernama Al-Kejawen. Namanya diganti oleh seorang Gus lewat ungkapan “wong-wongane iku mantra-mantru”, lalu Mbah Madhon menetapkannya menjadi Al-Muntra Muntru.',
  },
  {
    Icon: Sparkles,
    tag: 'Kesenian khas',
    title: 'Telaga Suta',
    body: 'Modernisasi tarian Jawa yang menggabungkan Panji Kutan, Warok, dan Tari Topeng atau Cakar Lele menjadi satu pertunjukan bercampur unsur modern.',
  },
  {
    Icon: Shield,
    tag: 'Kesenian tua',
    title: 'Kuntulan',
    body: 'Kesenian lama yang dibawakan para sesepuh, mengangkat cerita lokal yang menyanjung dusun, diiringi syair Jawa kuno dan gamelan. Berbeda jenis dengan Telaga Suta.',
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

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
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

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <article className="flex gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm sm:gap-5 sm:p-7">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
            <Music className="size-5" aria-hidden="true" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold">Keunikan Al-Muntra Muntru</h3>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              Grup ini memadukan musik Arab, Jawa, dan Indonesia, dengan kombinasi alat
              musik tradisional seperti gendang dan angklung. Penampilan pertamanya
              langsung mendapat sambutan luar biasa hingga dikenal warga di seluruh dusun
              se-Genito, seiring videonya yang tersebar luas. Grup ini biasa diundang
              mengisi acara khataman dan pengajian.
            </p>
          </div>
        </article>

        <article className="flex gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm sm:gap-5 sm:p-7">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
            <Waves className="size-5" aria-hidden="true" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold">Arti Nama “Telaga Suta”</h3>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              Namanya berakar dari kondisi geografis dusun yang dikelilingi sungai-sungai
              yang mengalir menuju Plalar, Ngarenan, dan sekitarnya, serta letaknya yang
              dekat dengan Sendang Piwakan. Kata <em>suta</em> sendiri berarti{' '}
              <em>buto</em> atau raksasa, yang dimaknai sebagai sosok penjaga.
            </p>
          </div>
        </article>
      </div>
    </Section>
  )
}

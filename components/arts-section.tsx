import { Drum, Music, Sparkles, Waves } from 'lucide-react'
import { type PhotoData } from '@/components/photo'
import { PhotoSlider } from '@/components/photo-slider'
import { Section, SectionHeader } from '@/components/section'

// ── FOTO ────────────────────────────────────────────────────────────
// Ganti '/placeholder.svg' dengan '/images/nama-foto.jpg'.
// Petunjuk lengkap ada di components/photo.tsx
// Tiap kelompok tampil sebagai galeri yang bisa digeser ke kanan dan kiri.
// Untuk menambah foto, salin satu blok { ... } lalu ganti src dan alt-nya.
// Kalau isinya hanya satu foto, tombol geser otomatis tidak muncul.
const FOTO_ALMONTRAMONTRO: PhotoData[] = [
  {
    src: '/images/kesenian-almontramontro-grup.jpeg',
    alt: 'Anggota grup rebana Al Montra Montro berfoto bersama mengenakan seragam batik dengan alat musiknya',
    caption: '',
  },
  {
    src: '/images/kesenian-rebana-latihan.jpeg',
    alt: 'Para pemain rebana berlatih bersama di ruang tamu rumah warga',
    caption: '',
  },
   {
    src: '/images/mas-madhon.jpeg',
    alt: 'Para pemain rebana berlatih bersama di ruang tamu rumah warga',
    caption: '',
  },
  // Salin blok di atas untuk menambah foto berikutnya.
]

const FOTO_TELOGOSUTO: PhotoData[] = [
  {
    src: '/images/kesenian-jatilan-pentas-1.jpeg',
    alt: 'Para penari berkostum dan bertopeng membawakan Telogo Suto di atas panggung bersama penabuh gamelan',
    caption: '',
  },
  {
    src: '/images/topeng.jpeg',
    alt: 'Penari Telogo Suto berbaris di atas panggung mengenakan kostum dan hiasan kepala lengkap',
    caption: '',
  },
  {
    src: '/images/kesenian-jatilan-kostum-1.jpeg',
    alt: 'Kendang, bedug, angklung, dan gamelan milik kelompok kesenian dusun yang tersimpan rapi',
    caption: '',
  },
  // Salin blok di atas untuk menambah foto berikutnya.
]
// ─────────────────────────────────────────────────────────────────

const ARTS = [
  {
    Icon: Drum,
    DetailIcon: Music,
    tag: 'Musik religi',
    title: 'Al Montra Montro',
    body: 'Grup rebana dusun yang awalnya bernama Al-Kejawen. Namanya diganti oleh seorang Gus lewat ungkapan “wong-wongane iku mantra-mantru”, lalu Mbah Madhon menetapkannya menjadi Al Montra Montro — nama yang bertahan hingga saat ini.',
    detailTitle: 'Keunikan',
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
    title: 'Telogo Suto',
    body: 'Modernisasi tarian Jawa yang menggabungkan Panji Kutan, Warok, dan Tari Topeng atau Cakar Lele menjadi satu kesatuan pertunjukan yang telah bercampur dengan unsur-unsur modern.',
    detailTitle: 'Arti Nama',
    detail: (
      <>
        Namanya berakar dari kondisi geografis dusun yang dikelilingi sungai-sungai yang
        mengalir menuju Plalar, Ngarenan, dan sekitarnya, serta letaknya yang dekat dengan
        Sendang Piwakan. Kata <em>suto</em> sendiri berarti <em>buto</em> atau raksasa,
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
        description="Dari rebana yang memadukan musik Arab, Jawa, dan Indonesia hingga tari tradisional yang dimodernisasi, kesenian menjadi jantung Sukomangun."
        align="center"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <PhotoSlider
          photos={FOTO_ALMONTRAMONTRO}
          label="Foto Al Montra Montro"
          sizes="(min-width: 1024px) 46vw, 100vw"
        />
        <PhotoSlider
          photos={FOTO_TELOGOSUTO}
          label="Foto Telogo Suto"
          sizes="(min-width: 1024px) 46vw, 100vw"
        />
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
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
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

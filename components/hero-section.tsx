import Image from 'next/image'
import { ArrowDown, Beef, Drum, MapPin, Mountain, Route, Sprout, Users, Wheat } from 'lucide-react'
import { HeroGallery } from '@/components/hero-gallery'

const POTENSI = [
  {
    Icon: Wheat,
    title: 'Pertanian',
    body: 'Hamparan sawah membentang ke segala arah dan menjadi tulang punggung ekonomi warga.',
  },
  {
    Icon: Beef,
    title: 'Peternakan',
    body: 'Sebagian besar warga beternak kambing dan sapi sebagai penopang penghasilan.',
  },
  {
    Icon: Drum,
    title: 'Kesenian',
    body: 'Rebana Al-Muntramuntru, Telaga Suta, Kuntulan, hingga Jatilan & Topeng Ireng.',
  },
  {
    Icon: Route,
    title: 'Jalur Wisata',
    body: 'Jalan utama beraspal yang menjadi bagian dari jalur wisata Temanggung–Kaliangkrik.',
  },
  {
    Icon: Mountain,
    title: 'Lanskap Alam',
    body: 'Panorama kaki Gunung Giyanti yang membentang di sisi selatan dusun.',
  },
  {
    Icon: Users,
    title: 'Generasi Muda',
    body: 'Karang Taruna yang aktif menggerakkan kesenian dan kegiatan warga.',
  },
]

export function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative -mt-16 overflow-hidden bg-gradient-to-b from-secondary via-background to-background pt-16"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14 lg:pb-24 lg:pt-20">
        <div className="flex flex-col items-start gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
            <MapPin className="size-3.5 text-primary" aria-hidden="true" />
            Desa Genito · Kec. Windusari · Kab. Magelang · Jawa Tengah
          </span>

          <h1 className="text-balance text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Dusun <span className="text-primary">Sukomangun</span>
          </h1>

          <p className="text-pretty text-lg italic leading-relaxed text-foreground/80 sm:text-xl">
            &ldquo;Suko Mangun &mdash; Semangat untuk membangun, tanpa menunda.&rdquo;
          </p>

          <p className="max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">
            Sebuah dusun yang tumbuh dari sekitar dua puluh rumah menjadi komunitas
            yang hidup, menjaga tradisi leluhur sambil terus melangkah maju.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#tentang"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Jelajahi Dusun
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#kesenian"
              className="inline-flex h-12 items-center rounded-full border border-border bg-card px-6 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Lihat Kesenian
            </a>
          </div>

          <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Wheat className="size-4 text-primary" aria-hidden="true" />
              Dikelilingi sawah
            </li>
            <li className="flex items-center gap-2">
              <Mountain className="size-4 text-primary" aria-hidden="true" />
              Kaki Gunung Giyanti
            </li>
            <li className="flex items-center gap-2">
              <Sprout className="size-4 text-primary" aria-hidden="true" />
              Tradisi yang lestari
            </li>
          </ul>
        </div>

        <div className="relative animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 fill-mode-both">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl shadow-primary/10 ring-1 ring-border sm:aspect-[5/4]">
            <Image
              src="/images/hero-sawah.png"
              alt="Hamparan sawah hijau dan permukiman Dusun Sukomangun dengan latar pegunungan"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-4 right-4 flex items-center gap-4 rounded-2xl border border-border bg-card/95 p-4 shadow-lg backdrop-blur sm:left-6 sm:right-auto sm:max-w-xs">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
              <Sprout className="size-5" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-muted-foreground">Dari 21–22 rumah</span>
              <span className="font-serif text-base font-bold">Kini sekitar 70 rumah</span>
            </div>
          </div>
        </div>
      </div>

      <div id="potensi" className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 pb-16 sm:px-6">
        <div className="flex flex-col gap-3">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            Potensi Dusun
          </span>
          <h2 className="text-balance text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
            Kekayaan yang dimiliki Sukomangun
          </h2>
          <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            Dari sawah dan ternak hingga kesenian dan lanskap pegunungan — modal yang
            terus dikembangkan warga.
          </p>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {POTENSI.map(({ Icon, title, body }) => (
            <li
              key={title}
              className="group flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-bold">{title}</h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div
        id="galeri"
        className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 pb-16 sm:px-6 lg:pb-24"
      >
        <HeroGallery />
      </div>
    </section>
  )
}

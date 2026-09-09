import { ExternalLink, MapPin, Navigation, Route } from 'lucide-react'
import { Section, SectionHeader } from '@/components/section'

/**
 * Titik yang ditampilkan di peta.
 * Untuk memakai koordinat persis: buka Google Maps, klik kanan pada titik yang
 * diinginkan, salin angka koordinatnya, lalu tempel di sini.
 * Contoh: const MAPS_QUERY = '-7.3712345,110.1234567'
 */
const MAPS_QUERY = 'Masjid Dusun Sukomangun, Genito, Windusari, Magelang, Jawa Tengah'

const MAPS_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&z=16&output=embed`
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`

const DETAILS = [
  {
    Icon: MapPin,
    title: 'Alamat',
    body: 'Dusun Sukomangun, Desa Genito, Kecamatan Windusari, Kabupaten Magelang, Jawa Tengah.',
  },
  {
    Icon: Route,
    title: 'Akses Jalan',
    body: 'Jalan utama dusun sudah beraspal dan merupakan bagian dari jalur wisata Temanggung–Kaliangkrik.',
  },
  {
    Icon: Navigation,
    title: 'Penanda Terdekat',
    body: 'Masjid Dusun Sukomangun berada di tengah permukiman dan menjadi patokan paling mudah dikenali.',
  },
]

export function MapSection() {
  return (
    <Section id="peta" tone="soft">
      <SectionHeader
        eyebrow="Lokasi & Peta"
        title="Menemukan Sukomangun"
        description="Permukiman warga berada tepat di tengah dusun, dikelilingi bukit dan lahan perkebunan di sekitarnya."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.5fr] lg:items-start">
        <div className="flex flex-col gap-3">
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

          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Buka di Google Maps
            <ExternalLink className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-lg shadow-primary/10 ring-1 ring-border">
          <iframe
            src={MAPS_EMBED}
            title="Peta lokasi Dusun Sukomangun, Desa Genito, Kecamatan Windusari, Kabupaten Magelang"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[320px] w-full border-0 sm:h-[420px] lg:h-full lg:min-h-[480px]"
          />
        </div>
      </div>
    </Section>
  )
}

import { ExternalLink, MapPin, Navigation, Route } from 'lucide-react'
import { MapEmbed } from '@/components/map-embed'
import { Section, SectionHeader } from '@/components/section'
import { LOKASI } from '@/lib/site'

// Titik peta (koordinat) diubah di lib/site.ts.
const MAPS_QUERY = `${LOKASI.lat},${LOKASI.lng}`

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
    <Section id="peta">
      <SectionHeader
        eyebrow="Lokasi & Peta"
        title="Lokasi Sukomangun"
        description="Rumah-rumah warga berkumpul di tengah dusun, dengan bukit dan ladang yang mengelilinginya."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[2fr_3fr]">
        <div className="flex flex-col gap-4 [&_p]:text-left">
          {DETAILS.map(({ Icon, title, body }) => (
            <article
              key={title}
              className="flex gap-4 rounded-2xl border border-garis bg-kartu p-5 shadow-[0_8px_24px_-16px_var(--bayang)]"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-lembut text-hijau ring-1 ring-emas/30">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-1 leading-relaxed text-pudar">{body}</p>
              </div>
            </article>
          ))}

          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-hijau px-6 font-semibold text-white shadow-md transition-colors hover:bg-hijau-tua dark:bg-hijau-tua dark:hover:bg-hijau-gelap"
          >
            Buka di Google Maps
            <ExternalLink className="size-4" aria-hidden="true" />
          </a>
        </div>

        <MapEmbed
          query={MAPS_QUERY}
          title="Peta lokasi Dusun Sukomangun, Desa Genito, Kecamatan Windusari, Kabupaten Magelang"
        />
      </div>
    </Section>
  )
}

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

        <iframe
          src={MAPS_EMBED}
          title="Peta lokasi Dusun Sukomangun, Desa Genito, Kecamatan Windusari, Kabupaten Magelang"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[340px] w-full rounded-2xl border-0 bg-garis shadow-[0_12px_32px_-12px_var(--bayang)] sm:h-[420px] lg:h-full lg:min-h-[460px]"
        />
      </div>
    </Section>
  )
}

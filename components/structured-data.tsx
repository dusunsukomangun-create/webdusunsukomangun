import { KONTAK, LOKASI, SITE_URL } from '@/lib/site'

/**
 * Data terstruktur (JSON-LD) untuk mesin pencari.
 *
 * Tidak terlihat oleh pengunjung. Isinya memberi tahu Google bahwa situs ini
 * membahas sebuah tempat bernama Dusun Sukomangun, lengkap dengan alamat,
 * koordinat, foto, dan kontaknya. Datanya diambil dari lib/site.ts.
 *
 * Bisa dicek di https://search.google.com/test/rich-results
 */
export function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#situs`,
        url: SITE_URL,
        name: 'Dusun Sukomangun',
        inLanguage: 'id',
        about: { '@id': `${SITE_URL}/#dusun` },
      },
      {
        '@type': 'Place',
        '@id': `${SITE_URL}/#dusun`,
        name: 'Dusun Sukomangun',
        description:
          'Dusun di kawasan perbukitan Desa Genito, Kecamatan Windusari, Kabupaten Magelang, Jawa Tengah, dikenal dengan pertanian terasering, tradisi keagamaan, dan kesenian Telogo Suto serta Al Montra Montro / Sabillun Najah.',
        url: SITE_URL,
        image: `${SITE_URL}/og-image.jpg`,
        telephone: `+${KONTAK.waNomor}`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Dusun Sukomangun, Desa Genito',
          addressLocality: 'Kecamatan Windusari',
          addressRegion: 'Kabupaten Magelang, Jawa Tengah',
          addressCountry: 'ID',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: LOKASI.lat,
          longitude: LOKASI.lng,
        },
        hasMap: `https://www.google.com/maps/search/?api=1&query=${LOKASI.lat},${LOKASI.lng}`,
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: 'Desa Genito, Kecamatan Windusari, Kabupaten Magelang',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      // Tanda < diganti agar isi data tidak bisa menutup tag <script> ini.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}

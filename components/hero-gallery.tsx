import { type PhotoData } from '@/components/photo'
import { PhotoSlider } from '@/components/photo-slider'

// ── FOTO ────────────────────────────────────────────────────────────
// Tambah foto dengan menyalin satu blok { ... } di bawah ini.
// Taruh file fotonya di folder public/images/
// ────────────────────────────────────────────────────────────────────
const SLIDES: PhotoData[] = [
  {
    src: '/images/Gambar-5.jpeg',
    alt: 'Papan nama Nahdlatul Ulama bertuliskan Dsn. Sukomangun, Genito, Windusari, Magelang',
    caption: 'Papan nama dusun',
  },
  {
    src: '/images/Gambar-4.jpeg',
    alt: 'Lanskap perbukitan berundak dengan jalan beraspal yang membelah ladang',
    caption: 'Perbukitan dan jalan dusun',
  },
  {
    src: '/images/Gambar-3.jpeg',
    alt: 'Ladang sayur berundak di lereng bukit dengan aliran sungai berbatu di bawahnya',
    caption: 'Ladang sayur di tepi sungai',
  },
  {
    src: '/images/dusun-jalan-utama.jpeg',
    alt: 'Jalan utama Dusun Sukomangun dengan rumah warga di kanan dan kiri',
    caption: 'Jalan utama dusun',
  },
  {
    src: '/images/dusun-jemur-gabah.jpeg',
    alt: 'Gabah dijemur di atas terpal di jalan dusun pada siang hari',
    caption: 'Menjemur gabah di jalan dusun',
  },
  {
    src: '/images/umkm-warung-kelontong.jpeg',
    alt: 'Warung kelontong milik warga dengan aneka barang dagangan',
    caption: 'Warung kelontong warga',
  },
  {
    src: '/images/umkm-gudang-keranjang-tembakau.jpeg',
    alt: 'Gudang bambu berisi tumpukan keranjang tembakau siap didistribusikan',
    caption: 'Gudang keranjang tembakau',
  },
  {
    src: '/images/umkm-pengolahan-singkong.jpeg',
    alt: 'Warga menyortir dan mengemas singkong ke dalam krat untuk didistribusikan',
    caption: 'Pengolahan singkong warga',
  },
]

export function HeroGallery() {
  return (
    <PhotoSlider
      photos={SLIDES}
      label="Galeri foto Dusun Sukomangun"
      slideClassName="aspect-[4/3] w-[86%] sm:aspect-[3/2] sm:w-[62%] lg:w-[46%]"
      sizes="(min-width: 1024px) 46vw, (min-width: 640px) 62vw, 86vw"
    />
  )
}

import { type PhotoData } from '@/components/photo'
import { PhotoSlider } from '@/components/photo-slider'

// ── FOTO ────────────────────────────────────────────────────────────
// Tambah foto dengan menyalin satu blok { ... } di bawah ini.
// Taruh file fotonya di folder public/images/
// ────────────────────────────────────────────────────────────────────
const SLIDES: PhotoData[] = [
  {
    src: '/images/Gambar-5.jpeg',
    alt: 'Papan nama Nahdlatul Ulama bertuliskan Dsn. Sukomangun, Genito, Windusari, Magelang, dengan rumah warga dan perbukitan di belakangnya',
    caption: 'Papan Nama',
  },
  {
    src: '/images/Gambar-4.jpeg',
    alt: 'Lanskap perbukitan hijau dengan ladang berundak dan jalan beraspal yang membelah dusun',
    caption: 'Perbukitan dan jalan dusun',
  },
  {
    src: '/images/Gambar-3.jpeg',
    alt: 'Ladang sayur berundak di lereng bukit dengan aliran sungai berbatu di bawahnya',
    caption: 'Ladang sayur di tepi sungai',
  },
  {
    src: '/images/Gambar-2.jpeg',
    alt: 'Sekelompok pemuda duduk mengelilingi api unggun di jalan dusun pada malam hari',
    caption: 'Kumpul malam pemuda dusun',
  },
  {
    src: '/images/Gambar-1.jpeg',
    alt: 'Warga berkumpul duduk bersila di dalam rumah sambil membaca kitab dalam pengajian rutin',
    caption: 'Pengajian rutin warga',
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

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
    alt: 'Anggota grup rebana Al Montra Montro / Sabillun Najah berfoto bersama mengenakan seragam batik dengan alat musiknya',
    caption: '',
  },
  {
    src: '/images/kesenian-rebana-latihan.jpeg',
    alt: 'Para pemain rebana berlatih bersama di ruang tamu rumah warga',
    caption: '',
  },
  {
    src: '/images/mas-madhon.jpeg',
    alt: 'Pemain menabuh kendang besar diapit dua kendang kecil saat latihan di rumah warga',
    caption: '',
  },
  {
    src: '/images/muntamontro1.jpeg',
    alt: 'Para pemuda berikat kepala putih bernyanyi dan menabuh kendang serta gamelan di atas panggung pada malam hari',
    caption: '',
  },
  // Salin blok di atas untuk menambah foto berikutnya.
]

const FOTO_TELOGOSUTO: PhotoData[] = [
  {
    src: '/images/kesenian-jatilan-pentas-1.jpeg',
    alt: 'Rombongan penari Telogo Suto berkostum merah-emas dan para pemuda berkaus putih berfoto bersama di depan panggung',
    caption: '',
  },
  {
    src: '/images/telogosuto1.jpeg',
    alt: 'Penari bertopeng raksasa bertaring dengan rambut panjang membungkuk rendah di atas panggung berkarpet merah',
    caption: '',
  },
  {
    src: '/images/telogosuto2.jpeg',
    alt: 'Penari bertopeng raksasa berambut lebat merentangkan tangan sambil mengangkat kaki berhias kerincingan',
    caption: '',
  },
  {
    src: '/images/telogosuto3.jpeg',
    alt: 'Penari bertopeng berambut hijau dan rekan-rekannya menari di panggung malam dengan bedug di belakang',
    caption: '',
  },
  {
    src: '/images/telogosuto4.jpeg',
    alt: 'Penari bertopeng berambut hijau menari diterangi lampu sorot biru, diiringi penabuh gamelan di belakang panggung',
    caption: '',
  },
  {
    src: '/images/telogosuto5.jpeg',
    alt: 'Penari bertopeng raksasa merendah di tepi panggung sementara anak-anak dan warga menonton dari dekat',
    caption: '',
  },
  {
    src: '/images/telogosuto7.jpeg',
    alt: 'Rombongan penari bertopeng beraksi di panggung malam diiringi penabuh gamelan berpeci putih',
    caption: '',
  },
  // Salin blok di atas untuk menambah foto berikutnya.
]
// ─────────────────────────────────────────────────────────────────


const ARTS = [
  {
    Icon: Drum,
    DetailIcon: Music,
    tag: 'Musik Religi',
    title: 'Al Montra Montro / Sabillun Najah',
    photos: FOTO_ALMONTRAMONTRO,
    body: 'Grup rebana dusun yang awalnya bernama Al-Kejawen. Namanya diganti oleh seorang Gus lewat ungkapan “wong-wongane iku mantra-mantru”, lalu Mbah Madhon menetapkannya menjadi Al Montra Montro / Sabillun Najah, nama yang bertahan hingga saat ini.',
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
    tag: 'Kesenian Khas',
    title: 'Telogo Suto',
    photos: FOTO_TELOGOSUTO,
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
    <Section id="kesenian">
      <SectionHeader
        eyebrow="Kesenian"
        title="Denyut Budaya yang Terus Dijaga"
        description="Dari rebana yang memadukan musik Arab, Jawa, dan Indonesia hingga tari tradisional yang dimodernisasi, kesenian menjadi jantung Sukomangun."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2 [&_p]:text-left">
        {ARTS.map(({ Icon, DetailIcon, tag, title, photos, body, detailTitle, detail }) => (
          <article
            key={title}
            className="flex flex-col gap-6 rounded-2xl border border-garis bg-kartu p-5 shadow-[0_8px_24px_-16px_var(--bayang)] sm:p-6"
          >
            <PhotoSlider photos={photos} label={`Foto ${title}`} sizes="(min-width: 1024px) 46vw, 100vw" />

            <div className="flex items-center justify-between gap-4">
              <span className="flex size-12 items-center justify-center rounded-full bg-lembut text-hijau ring-1 ring-emas/30">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <span className="rounded-full bg-lembut px-3 py-1 text-sm font-semibold text-emas">
                {tag}
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-semibold sm:text-3xl">{title}</h3>
              <p className="mt-3 leading-relaxed text-pudar">{body}</p>
            </div>

            <div className="mt-auto flex gap-4 rounded-xl border-l-4 border-emas bg-lembut p-5">
              <DetailIcon className="mt-1 size-5 shrink-0 text-emas" aria-hidden="true" />
              <div>
                <h4 className="text-lg font-semibold">{detailTitle}</h4>
                <p className="mt-1 leading-relaxed text-pudar">{detail}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

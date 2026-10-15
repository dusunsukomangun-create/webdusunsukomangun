import { CalendarDays, HandHeart, Moon, Users } from 'lucide-react'
import { type PhotoData } from '@/components/photo'
import { PhotoSlider } from '@/components/photo-slider'
import { Section, SectionHeader } from '@/components/section'

// ── FOTO ────────────────────────────────────────────────────────────
// Tiap kelompok di bawah ini tampil sebagai galeri yang bisa digeser
// ke kanan dan kiri. Untuk menambah foto, salin satu blok { ... } lalu
// ganti src dan alt-nya. Kalau isinya hanya satu foto, tombol geser
// otomatis tidak muncul.
//
// Taruh file fotonya di folder public/images/
// ────────────────────────────────────────────────────────────────────
const FOTO_1: PhotoData[] = [
  {
    src: '/images/Gambar-1.jpeg',
    alt: 'Warga duduk bersila di dalam rumah membaca kitab bersama dalam pengajian rutin',
    caption: 'Pengajian di rumah warga',
  },
  {
    src: '/images/tradisi-ibu-mengaji-serambi.jpeg',
    alt: 'Ibu-ibu dan anak-anak mengaji bersama di serambi masjid',
    caption: 'Mengaji di serambi masjid',
  },
  {
    src: '/images/tradisi-mujahadah-ibu.jpeg',
    alt: 'Majelis ibu-ibu berdiri membaca bersama pada malam hari',
    caption: 'Majelis ibu-ibu',
  },
]

const FOTO_2: PhotoData[] = [
  {
    src: '/images/tradisi-kenduri-ladang.jpeg',
    alt: 'Warga duduk melingkar menyantap hidangan beralas daun pisang di tepi ladang',
    caption: 'Kenduri di tepi ladang',
  },
  {
    src: '/images/tradisi-kumpul-malam.jpeg',
    alt: 'Warga berkumpul mengelilingi perapian kecil di jalan dusun pada malam hari',
    caption: 'Berkumpul malam hari',
  },
  {
    src: '/images/gotong-royong-pembangunan.jpeg',
    alt: 'Warga bahu-membahu mengerjakan pembangunan bangunan dusun',
    caption: 'Gotong royong membangun',
  },
]

const TRADISI = [
  {
    Icon: Moon,
    when: 'Menjelang Maulid Nabi',
    title: 'Diba’an',
    body: 'Awalnya hanya diikuti kaum perempuan di wilayah Ngarenan, sebelum berkembang dan menyebar ke dusun-dusun lain.',
  },
  {
    Icon: Users,
    when: 'Malam Selasa & Malam Kamis',
    title: 'Mujahadah',
    body: 'Dahulu rutin setiap Senin dan Kamis di kediaman Mbah Agung Sirat di Payaman. Kini digelar bergiliran di rumah warga dengan pembagian RT 01 dan RT 02: majelis pria malam Selasa, majelis wanita malam Kamis.',
  },
  {
    Icon: CalendarDays,
    when: '9 Syawal',
    title: 'Ziarah Kubur',
    body: 'Sudah dikenal sejak lama, namun pelaksanaannya secara bersama-sama ke pemakaman tergolong tradisi yang relatif baru.',
  },
  {
    Icon: Moon,
    when: 'Setiap Tahun',
    title: 'Maulid Nabi SAW',
    body: 'Diperingati setiap tahun, didahului pembacaan Diba’an selama 12 malam menjelang peringatan.',
  },
  {
    Icon: CalendarDays,
    when: 'Bulan Rabiul Awwal',
    title: 'Khataman TPQ',
    body: 'Kegiatan khataman Taman Pendidikan Al-Qur’an yang ikut dilaksanakan pada bulan Mulud.',
  },
  {
    Icon: Moon,
    when: 'Kegiatan Rutin',
    title: 'Tahlilan & Ruwahan',
    body: 'Keduanya telah menjadi bagian dari kehidupan keagamaan warga sejak zaman dahulu.',
  },
]

export function TraditionSection() {
  return (
    <Section id="tradisi" tone="hijau">
      <SectionHeader
        eyebrow="Tradisi Keagamaan"
        title="Kebersamaan yang Diwariskan"
        description="Di Dusun Sukomangun terdapat banyak tradisi keagamaan yang sudah dilaksanakan sejak zaman dahulu: pengajian, mujahadah, diba’an, ziarah kubur, tahlilan, ruwahan, dan maulid nabi."
        tone="gelap"
      />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 [&_p]:text-left">
        {TRADISI.map(({ Icon, when, title, body }) => (
          <li
            key={title}
            className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-emas/20 text-emas-muda">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold text-emas-muda">{when}</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-white/80">{body}</p>
          </li>
        ))}
      </ul>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <PhotoSlider
          photos={FOTO_1}
          label="Foto pengajian dan Diba’an"
          tone="gelap"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
        <PhotoSlider
          photos={FOTO_2}
          label="Foto kenduri dan gotong royong warga"
          tone="gelap"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>

      <article className="mt-12 flex flex-col gap-4 rounded-2xl border border-emas/40 bg-white/[0.04] p-6 sm:flex-row sm:p-8">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-emas text-white">
          <HandHeart className="size-6" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-2xl font-semibold">Gotong Royong di Balik Tradisi</h3>
          <p className="mt-2 leading-relaxed text-white/85">
            Di balik seluruh tradisi tersebut tersimpan nilai gotong royong yang sangat kuat.
            Warga selalu bahu-membahu mempersiapkan berbagai kegiatan secara bersama-sama.
            Semangat yang sama juga terlihat ketika ada pembangunan di dusun, di mana seluruh
            warga turut bekerja sama hingga tuntas.
          </p>
        </div>
      </article>
    </Section>
  )
}

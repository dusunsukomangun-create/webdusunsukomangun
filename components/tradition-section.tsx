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
    caption: '',
  },
  {
    src: '/images/tradisi-ibu-mengaji-serambi.jpeg',
    alt: 'Ibu-ibu dan anak-anak mengaji bersama di serambi masjid',
    caption: '',
  },
  {
    src: '/images/tradisi-mujahadah-ibu.jpeg',
    alt: 'Majelis ibu-ibu berdiri membaca bersama pada malam hari',
    caption: '',
  },
]

const FOTO_2: PhotoData[] = [
  {
    src: '/images/tradisi-kenduri-ladang.jpeg',
    alt: 'Warga duduk melingkar menyantap hidangan beralas daun pisang di tepi ladang',
    caption: '',
  },
  {
    src: '/images/tradisi-kumpul-malam.jpeg',
    alt: 'Warga berkumpul mengelilingi perapian kecil di jalan dusun pada malam hari',
    caption: '',
  },
  {
    src: '/images/gotong-royong-pembangunan.jpeg',
    alt: 'Warga bahu-membahu mengerjakan pembangunan bangunan dusun',
    caption: '',
  },
]

const TRADISI = [
  {
    Icon: Moon,
    when: 'Rutin',
    title: 'Diba’an',
    body: 'Awalnya hanya diikuti kaum perempuan di wilayah Ngarenan, sebelum berkembang dan menyebar ke dusun-dusun lain.',
  },
  {
    Icon: Users,
    when: 'Malam Selasa & malam Kamis',
    title: 'Mujahadah',
    body: 'Dahulu rutin setiap Senin dan Kamis di kediaman Mbah Agung Sirat di Payaman. Kini digelar bergiliran di rumah warga dengan pembagian RT 01 dan RT 02 — majelis pria malam Selasa, majelis wanita malam Kamis.',
  },
  {
    Icon: CalendarDays,
    when: '9 Syawal',
    title: 'Ziarah Kubur',
    body: 'Sudah dikenal sejak lama, namun pelaksanaannya secara bersama-sama ke pemakaman tergolong tradisi yang relatif baru.',
  },
  {
    Icon: Moon,
    when: 'Menjelang Maulid',
    title: 'Maulid Nabi SAW',
    body: 'Diperingati setiap tahun, didahului pembacaan Diba’an selama 12 malam menjelang peringatan.',
  },
  {
    Icon: CalendarDays,
    when: 'Bulan Mulud',
    title: 'Khataman TPA',
    body: 'Kegiatan khataman Taman Pendidikan Al-Qur’an yang ikut dilaksanakan pada bulan Mulud.',
  },
  {
    Icon: Moon,
    when: 'Turun-temurun',
    title: 'Tahlilan & Ruwahan',
    body: 'Keduanya telah menjadi bagian dari kehidupan keagamaan warga sejak zaman dahulu.',
  },
]

export function TraditionSection() {
  return (
    <Section id="tradisi">
      <SectionHeader
        eyebrow="Tradisi Keagamaan"
        title="Ritme kebersamaan yang diwariskan"
        description="Di Dusun Sukomangun terdapat banyak tradisi keagamaan yang sudah dilaksanakan sejak zaman dahulu: pengajian, mujahadah, diba’an, ziarah kubur, tahlilan, ruwahan, dan maulid nabi."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <div className="flex flex-col gap-6">
          <PhotoSlider
            photos={FOTO_1}
            label="Foto pengajian dan Diba’an"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
          <PhotoSlider
            photos={FOTO_2}
            label="Foto kegiatan Mujahadah"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {TRADISI.map(({ Icon, when, title, body }) => (
            <article
              key={title}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {when}
                </span>
                <h3 className="text-lg font-bold leading-snug">{title}</h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <article className="mt-6 flex gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm sm:gap-5 sm:p-7">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
          <HandHeart className="size-5" aria-hidden="true" />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">Gotong Royong di Balik Tradisi</h3>
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            Di balik seluruh tradisi tersebut tersimpan nilai gotong royong yang sangat
            kuat. Warga selalu bahu-membahu mempersiapkan berbagai kegiatan secara
            bersama-sama. Semangat yang sama juga terlihat ketika ada pembangunan di
            dusun, di mana seluruh warga turut bekerja sama hingga tuntas.
          </p>
        </div>
      </article>
    </Section>
  )
}

import { Building2, ChevronDown, HeartPulse } from 'lucide-react'
import { Photo } from '@/components/photo'
import { Section, SectionHeader } from '@/components/section'

// ── FOTO ────────────────────────────────────────────────────────────
// Ganti '/placeholder.svg' dengan '/images/nama-foto.jpg'.
// Petunjuk lengkap ada di components/photo.tsx
const FOTO_MASJID = {
  src: '/placeholder.svg',
  alt: 'Bangunan Masjid Dusun Sukomangun',
  caption: 'Masjid Dusun Sukomangun',
}
const FOTO_POSYANDU = {
  src: '/placeholder.svg',
  alt: 'Kegiatan Posyandu Dusun Sukomangun yang dihadiri warga',
  caption: 'Kegiatan Posyandu warga',
}
// ────────────────────────────────────────────────────────────────────

const FASILITAS = [
  {
    Icon: Building2,
    tag: 'Sejak 1969',
    title: 'Masjid',
    foto: FOTO_MASJID,
    body: 'Bermula dari mushola kecil berdinding bambu, lalu dibangun warga secara gotong royong menjadi masjid. Kini menjadi tempat ibadah sekaligus wadah musyawarah warga.',
    detail: [
      {
        when: 'Masa awal',
        body: 'Kehidupan keagamaan warga tumbuh dari sebuah mushola kecil berdinding bambu di tengah permukiman. Pada masa itu, warga yang hendak menunaikan sholat Jumat harus rela berjalan hingga ke Genito.',
      },
      {
        when: 'Tahun 1969',
        body: 'Mushola sederhana itu perlahan tumbuh menjadi sebuah masjid, terwujud karena tangan-tangan warga yang bahu-membahu membangunnya — bahkan pasir dan bahan bangunannya mereka ambil dari tanah ladang sendiri.',
      },
      {
        when: 'Kini',
        body: 'Meski bangunan yang kita lihat sekarang sudah jauh lebih baru, semangat dan ketulusan mereka tetap hidup di setiap sudutnya.',
      },
      {
        when: 'Tradisi yang lahir dari masjid',
        body: 'Sholat berjamaah, musyawarah warga, pengajian khataman pada bulan Rajab, perayaan Syawalan, selapanan setiap Jumat Kliwon, hingga Yasinan.',
      },
    ],
  },
  {
    Icon: HeartPulse,
    tag: 'Setiap tanggal 13',
    title: 'Posyandu',
    foto: FOTO_POSYANDU,
    body: 'Layanan kesehatan warga yang digerakkan lima orang kader, melayani seluruh kelompok usia dan merujuk ke Puskesmas atau Pustu bila diperlukan oleh warga Dusun Sukomangun.',
    detail: [
      {
        when: 'Berawal dari rumah warga',
        body: 'Posyandu telah berlangsung sejak lama. Awalnya dilaksanakan di rumah Bu Nur Imah atau Bu Rowi, kemudian berpindah lokasi karena rumah tersebut mengalami pembangunan.',
      },
      {
        when: 'Lima kader tanpa masa jabatan',
        body: 'Kegiatan didukung lima orang kader yang tidak memiliki masa jabatan tertentu — mereka menjalankan tugas hingga memutuskan untuk berhenti.',
      },
      {
        when: 'Jadwal pelaksanaan',
        body: 'Dilaksanakan setiap tanggal 13, meskipun jadwalnya dapat menyesuaikan kondisi masyarakat. Tingkat partisipasi warga masih beragam.',
      },
      {
        when: 'Dari bayi dan lansia ke semua usia',
        body: 'Pada awal didirikan, kegiatan lebih berfokus pada bayi dan lansia. Kini cakupannya semakin luas: memantau kondisi kesehatan dan status gizi, termasuk indeks massa tubuh (IMT) serta deteksi risiko obesitas maupun kekurangan gizi.',
      },
    ],
  },
]

export function FacilitiesSection() {
  return (
    <Section id="fasilitas">
      <SectionHeader
        eyebrow="Fasilitas Dusun"
        title="Sarana yang menopang kehidupan warga"
        align="center"
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-start">
        {FASILITAS.map(({ Icon, tag, title, body, foto, detail }) => (
          <article
            key={title}
            className="flex flex-col gap-6 rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-7"
          >
            <Photo
              {...foto}
              className="aspect-[16/10]"
              sizes="(min-width: 1024px) 46vw, 100vw"
            />

            <div className="flex items-center justify-between gap-4">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                <Icon className="size-7" aria-hidden="true" />
              </span>
              <span className="rounded-full bg-muted px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {tag}
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-balance text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                {title}
              </h3>
              <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                {body}
              </p>
            </div>

            {/* Rincian yang tersembunyi sampai tombol ditekan. */}
            <details className="group mt-auto">
              <summary className="flex w-fit cursor-pointer list-none items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring [&::-webkit-details-marker]:hidden">
                <span className="group-open:hidden">Baca selengkapnya</span>
                <span className="hidden group-open:inline">Tutup</span>
                <ChevronDown
                  className="size-4 transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>

              <ul className="mt-5 flex flex-col gap-4 border-t border-border pt-5">
                {detail.map((item) => (
                  <li key={item.when} className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {item.when}
                    </span>
                    <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </li>
                ))}
              </ul>
            </details>
          </article>
        ))}
      </div>
    </Section>
  )
}

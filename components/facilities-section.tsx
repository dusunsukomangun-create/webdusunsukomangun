import { Baby, Building2, ChevronDown } from 'lucide-react'
import { Photo } from '@/components/photo'
import { Section, SectionHeader } from '@/components/section'

// ── FOTO ────────────────────────────────────────────────────────────
// Ganti '/placeholder.svg' dengan '/images/nama-foto.jpg'.
// Petunjuk lengkap ada di components/photo.tsx
const FOTO_MASJID = {
  src: '/images/masjid-interior.jpeg',
  alt: 'Bagian dalam Masjid Dusun Sukomangun dengan mihrab, mimbar kayu ukir, dan karpet hijau',
  caption: 'Masjid Dusun Sukomangun',
}
const FOTO_POSYANDU = {
  src: '/images/posyandu.jpeg',
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
        body: 'Mushola sederhana itu perlahan tumbuh menjadi sebuah masjid, terwujud karena tangan-tangan warga yang bahu-membahu membangunnya. Bahkan pasir dan bahan bangunannya mereka ambil dari tanah ladang sendiri.',
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
    Icon: Baby,
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
        body: 'Kegiatan didukung lima orang kader yang tidak memiliki masa jabatan tertentu. Mereka menjalankan tugas hingga memutuskan untuk berhenti.',
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
    <Section id="fasilitas" tone="lembut">
      <SectionHeader
        eyebrow="Fasilitas Dusun"
        title="Sarana yang Menopang Kehidupan Warga"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-start">
        {FASILITAS.map(({ Icon, tag, title, body, foto, detail }) => (
          <article
            key={title}
            className="flex flex-col gap-5 rounded-2xl border border-garis bg-kartu p-5 shadow-[0_8px_24px_-16px_var(--bayang)] sm:p-6 [&_p]:text-left"
          >
            <Photo {...foto} className="aspect-[16/10]" sizes="(min-width: 1024px) 46vw, 100vw" />

            <div className="flex items-center justify-between gap-4">
              <h3 className="flex items-center gap-3 text-2xl font-semibold">
                <Icon className="size-6 text-hijau" aria-hidden="true" />
                {title}
              </h3>
              <span className="rounded-full bg-lembut px-3 py-1 text-sm font-semibold text-emas">
                {tag}
              </span>
            </div>

            <p className="leading-relaxed text-pudar">{body}</p>

            {/* Rincian yang tersembunyi sampai tombol ditekan. */}
            <details className="group">
              <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded-full bg-hijau px-5 py-2.5 font-semibold text-white transition-colors hover:bg-hijau-tua dark:bg-hijau-tua dark:hover:bg-hijau-gelap [&::-webkit-details-marker]:hidden">
                <span className="group-open:hidden">Baca selengkapnya</span>
                <span className="hidden group-open:inline">Tutup</span>
                <ChevronDown className="size-4 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>

              <ul className="mt-5 flex flex-col gap-4 border-l-2 border-emas/50 pl-5">
                {detail.map((item) => (
                  <li key={item.when}>
                    <span className="font-semibold text-hijau-kuat">{item.when}</span>
                    <p className="mt-1 leading-relaxed text-pudar">{item.body}</p>
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

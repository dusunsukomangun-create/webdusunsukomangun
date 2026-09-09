import { Building2, Handshake, Home, Users } from 'lucide-react'
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
// ────────────────────────────────────────────────────────────────────

const KEGIATAN = [
  'Sholat berjamaah',
  'Musyawarah warga',
  'Pengajian khataman bulan Rajab',
  'Perayaan Syawalan',
  'Selapanan setiap Jumat Kliwon',
  'Yasinan',
]

const LINIMASA = [
  {
    Icon: Home,
    when: 'Masa awal',
    title: 'Sebuah mushola bambu',
    body: 'Kehidupan keagamaan warga tumbuh dari tempat yang sangat sederhana di tengah permukiman: sebuah mushola kecil berdinding bambu. Pada masa itu, warga yang hendak menunaikan sholat Jumat harus rela berjalan hingga ke Genito.',
  },
  {
    Icon: Handshake,
    when: 'Tahun 1969',
    title: 'Tumbuh menjadi masjid',
    body: 'Mushola sederhana itu perlahan tumbuh menjadi sebuah masjid. Semua terwujud karena tangan-tangan warga yang bahu-membahu membangunnya — bahkan pasir dan bahan bangunannya mereka ambil dari tanah ladang sendiri.',
  },
  {
    Icon: Building2,
    when: 'Kini',
    title: 'Bangunan baru, semangat yang sama',
    body: 'Meski bangunan yang kita lihat sekarang sudah jauh lebih baru, semangat dan ketulusan mereka tetap hidup di setiap sudutnya.',
  },
]

export function MosqueSection() {
  return (
    <Section id="masjid" tone="soft">
      <SectionHeader
        eyebrow="Masjid"
        title="Dari mushola bambu menjadi pusat kehidupan warga"
        description="Masjid ini tidak hanya menjadi tempat ibadah, tetapi juga wadah musyawarah warga serta tempat berlangsungnya berbagai kegiatan keagamaan."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <Photo
          {...FOTO_MASJID}
          className="aspect-[4/3] lg:aspect-[3/4]"
          sizes="(min-width: 1024px) 42vw, 100vw"
        />

        <ol className="flex flex-col gap-4">
          {LINIMASA.map(({ Icon, when, title, body }) => (
            <li key={title}>
              <article className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {when}
                  </span>
                  <h3 className="text-lg font-bold leading-snug">{title}</h3>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>

      <article className="mt-6 flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-7">
        <div className="flex items-center gap-4">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Users className="size-5" aria-hidden="true" />
          </div>
          <h3 className="text-lg font-bold">Tradisi yang lahir dari masjid</h3>
        </div>
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {KEGIATAN.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 rounded-xl bg-secondary px-3 py-2.5 text-sm font-medium text-secondary-foreground"
            >
              <span className="size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </article>
    </Section>
  )
}

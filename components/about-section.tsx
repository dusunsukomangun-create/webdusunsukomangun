import { BookOpenText, Landmark, ShieldAlert } from 'lucide-react'
import { Photo } from '@/components/photo'
import { Section, SectionHeader } from '@/components/section'

// ── FOTO ────────────────────────────────────────────────────────────
// Ganti '/placeholder.svg' dengan '/images/nama-foto.jpg'.
// Petunjuk lengkap ada di components/photo.tsx
const FOTO_1 = {
  src: '/images/Gambar-5.jpeg',
  alt: 'Papan nama Nahdlatul Ulama bertuliskan Dsn. Sukomangun, Genito, Windusari, Magelang',
  caption: '',
}
const FOTO_2 = {
  src: '/images/dusun-gang-permukiman.jpeg',
  alt: 'Gang permukiman Dusun Sukomangun dengan rumah-rumah berdinding bata dan anak-anak bermain',
  caption: '',
}
// ────────────────────────────────────────────────────────────────────

const HISTORY_CARDS = [
  {
    icon: Landmark,
    title: 'Tokoh Babad (Pembuka Lahan)',
    body: (
      <>
        Wilayah Sukomangun dahulu dibuka melalui babad lahan oleh dua tokoh yang
        dihormati, yaitu <strong>Kiai Sunan Geseng</strong> dan{' '}
        <strong>Mbah Raden Wangsadarwin</strong>.
      </>
    ),
  },
  {
    icon: ShieldAlert,
    title: 'Masa Penjajahan Belanda',
    body: (
      <>
        Warga turut merasakan pahitnya perjuangan mempertahankan kemerdekaan &mdash;
        mulai dari rumah yang dibakar, warga yang disiksa, hingga mereka yang gugur
        dalam sebuah insiden penyerangan. Kisah-kisah ini menjadi bukti bahwa warga
        Sukomangun turut menanggung beban perjuangan di masa sulit tersebut.
      </>
    ),
  },
  {
    icon: BookOpenText,
    title: 'Asal Nama',
    body: (
      <>
        <em>Suko</em> berarti senang, <em>mangun</em> berarti membangun. Perpaduannya
        bermakna keinginan mewujudkan sesuatu dengan penuh sukacita dan sesegera
        mungkin, tanpa menunda-nunda &mdash; menjadi filosofi hidup dan semangat gotong
        royong warga hingga kini.
      </>
    ),
  },
]

export function AboutSection() {
  return (
    <Section id="tentang">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        <div className="flex flex-col gap-6">
          <SectionHeader
            eyebrow="Tentang & Sejarah"
            title="Dari semangat membangun, lahirlah sebuah nama"
            description="Dusun Sukomangun menyimpan jejak sejarah panjang sejak zaman kolonial Belanda, dan sebuah nama yang menjadi pesan turun-temurun."
          />
          <Photo {...FOTO_1} sizes="(min-width: 1024px) 45vw, 100vw" />
          <Photo {...FOTO_2} sizes="(min-width: 1024px) 45vw, 100vw" />
        </div>

        {/* Turun 138px di layar lebar supaya kartu pertama sejajar dengan
            paragraf "Dusun Sukomangun menyimpan jejak sejarah...".
            Rinciannya: pil eyebrow 24px + jarak 12px + judul dua baris
            (2 x 45px) + jarak 12px. Sesuaikan angkanya bila judulnya
            nanti diubah sehingga jumlah barisnya berbeda. */}
        <div className="flex flex-col gap-4 lg:mt-[138px]">
          {HISTORY_CARDS.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}

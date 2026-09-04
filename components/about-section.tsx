import Image from 'next/image'
import { BookOpenText, Landmark, TrendingUp } from 'lucide-react'
import { Section, SectionHeader } from '@/components/section'

const HISTORY_CARDS = [
  {
    icon: BookOpenText,
    title: 'Asal Nama',
    body: (
      <>
        &ldquo;Sukomangun&rdquo; berasal dari kata <em>suko</em> (senang) dan{' '}
        <em>mangun</em> (membangun). Maknanya: semangat untuk segera membangun dan
        mewujudkan sesuatu &mdash; jangan ditunda-tunda.
      </>
    ),
  },
  {
    icon: Landmark,
    title: 'Tokoh Babad (Pembuka Lahan)',
    body: (
      <>
        Sebelah barat (wilayah Sukup) dibuka oleh <strong>Kiai Sunan Geseng</strong>;
        sebelah timur oleh <strong>Mbah Raden Wangsadaniwiriya</strong>, yang konon
        merupakan pelarian dari Keraton Yogyakarta. Di Punden terdapat makam leluhur{' '}
        <strong>Simbah Danu</strong>, yang konon juga keturunan Keraton Yogyakarta.
      </>
    ),
  },
  {
    icon: TrendingUp,
    title: 'Perkembangan Dusun',
    body: (
      <>
        Dahulu hanya sekitar 21–22 rumah dengan satu langgar, kini berkembang menjadi
        sekitar 70 rumah. Setelah gempa Yogyakarta (2004/2006), banyak warga merantau
        sebagai buruh bangunan di Yogyakarta &mdash; membawa perubahan pada ekonomi,
        kepemilikan kendaraan dan elektronik, serta wawasan masyarakat.
      </>
    ),
  },
]

export function AboutSection() {
  return (
    <Section id="tentang">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        <div className="flex flex-col gap-8">
          <SectionHeader
            eyebrow="Tentang & Sejarah"
            title="Dari semangat membangun, lahirlah sebuah nama"
            description="Sukomangun bukan sekadar nama tempat, melainkan sebuah pesan yang diwariskan turun-temurun: bergerak, membangun, dan tidak menunda."
          />
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg shadow-primary/10 ring-1 ring-border">
            <Image
              src="/images/dusun-jalan.png"
              alt="Jalan utama Dusun Sukomangun dengan rumah-rumah warga dan pepohonan"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
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

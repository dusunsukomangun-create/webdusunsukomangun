import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Home } from 'lucide-react'
import { Section, SectionHeader } from '@/components/section'

const BORDERS = {
  utara: { label: 'Utara', place: 'Dusun Gopaan', Icon: ArrowUp },
  barat: { label: 'Barat', place: 'Dusun Dobrasan', Icon: ArrowLeft },
  timur: { label: 'Timur', place: 'Genito Lor', Icon: ArrowRight },
  selatan: { label: 'Selatan', place: 'Dusun Kwangsan', Icon: ArrowDown },
}

function BorderCard({ label, place, Icon }: { label: string; place: string; Icon: typeof ArrowUp }) {
  return (
    <div className="flex h-full flex-col justify-between gap-3 rounded-2xl border border-garis bg-kartu p-4 shadow-[0_8px_24px_-16px_var(--bayang)] sm:p-5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold uppercase tracking-wider text-emas">{label}</span>
        <Icon className="size-4 text-hijau" aria-hidden="true" />
      </div>
      <p className="text-left font-serif text-base font-semibold leading-snug sm:text-lg">{place}</p>
    </div>
  )
}

export function GeographySection() {
  return (
    <Section id="geografi" tone="lembut">
      <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:items-center lg:gap-16">
        <div className="flex flex-col gap-6">
          <SectionHeader
            eyebrow="Geografi & Batas Wilayah"
            title="Dikelilingi Bukit dan Perkebunan"
            description="Dusun Sukomangun berbatasan dengan empat wilayah tetangga, dengan permukiman warga berada tepat di tengahnya."
            align="left"
          />
          <p className="max-w-xl leading-relaxed text-pudar">
            Bentang alam seperti inilah yang membuat sebagian besar warga hidup dari bertani.
          </p>
        </div>

        <div
          className="grid grid-cols-3 grid-rows-3 gap-3 sm:gap-4"
          role="img"
          aria-label="Peta batas wilayah: Utara Dusun Gopaan, Barat Dusun Dobrasan, Timur Genito Lor, Selatan Dusun Kwangsan"
        >
          <div className="col-start-2 row-start-1">
            <BorderCard {...BORDERS.utara} />
          </div>
          <div className="col-start-1 row-start-2">
            <BorderCard {...BORDERS.barat} />
          </div>
          <div className="col-start-2 row-start-2 flex flex-col items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-hijau-tua to-hijau-gelap p-4 text-center text-white shadow-lg">
            <Home className="size-6 text-emas-muda" aria-hidden="true" />
            <span className="font-serif text-base font-semibold sm:text-lg">Sukomangun</span>
            <span className="text-xs text-white/75 sm:text-sm">Permukiman warga</span>
          </div>
          <div className="col-start-3 row-start-2">
            <BorderCard {...BORDERS.timur} />
          </div>
          <div className="col-start-2 row-start-3">
            <BorderCard {...BORDERS.selatan} />
          </div>
        </div>
      </div>
    </Section>
  )
}

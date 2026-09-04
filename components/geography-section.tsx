import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Home, Info } from 'lucide-react'
import { Section, SectionHeader } from '@/components/section'

const BORDERS = {
  utara: { label: 'Utara', place: 'Dusun Ngupaan', note: 'Batas di pertigaan', Icon: ArrowUp },
  barat: { label: 'Barat', place: 'Dusun Bahsan', note: 'Wilayah Sukup', Icon: ArrowLeft },
  timur: { label: 'Timur', place: 'Genito', note: 'Batas di jembatan dekat makam', Icon: ArrowRight },
  selatan: { label: 'Selatan', place: 'Gunung Giyanti', note: 'Lanskap pegunungan', Icon: ArrowDown },
}

function BorderCard({
  label,
  place,
  note,
  Icon,
}: {
  label: string
  place: string
  note: string
  Icon: typeof ArrowUp
}) {
  return (
    <div className="flex h-full flex-col justify-between gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md sm:p-5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
        <span className="flex size-8 items-center justify-center rounded-lg bg-secondary text-primary">
          <Icon className="size-4" aria-hidden="true" />
        </span>
      </div>
      <div>
        <p className="font-serif text-base font-bold sm:text-lg">{place}</p>
        <p className="text-xs text-muted-foreground sm:text-sm">{note}</p>
      </div>
    </div>
  )
}

export function GeographySection() {
  return (
    <Section id="geografi" tone="soft">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex flex-col gap-6 lg:w-2/5">
          <SectionHeader
            eyebrow="Geografi & Batas Wilayah"
            title="Di tengah hamparan sawah, di kaki Gunung Giyanti"
            description="Permukiman warga terpusat di bagian tengah dusun, sementara sisanya merupakan area persawahan yang membentang ke segala arah."
          />
          <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 text-sm leading-relaxed text-muted-foreground">
            <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <p>
              Jalan utama dusun telah diaspal dan menjadi bagian dari jalur wisata
              Temanggung–Kaliangkrik.
            </p>
          </div>
        </div>

        <div className="lg:w-3/5">
          <div
            className="grid grid-cols-3 grid-rows-3 gap-3 sm:gap-4"
            role="img"
            aria-label="Peta batas wilayah: Utara Dusun Ngupaan, Barat Dusun Bahsan, Timur Genito, Selatan Gunung Giyanti"
          >
            <div className="col-start-2 row-start-1">
              <BorderCard {...BORDERS.utara} />
            </div>
            <div className="col-start-1 row-start-2">
              <BorderCard {...BORDERS.barat} />
            </div>
            <div className="col-start-2 row-start-2 flex flex-col items-center justify-center gap-2 rounded-2xl bg-primary p-4 text-center text-primary-foreground shadow-lg shadow-primary/25">
              <Home className="size-6" aria-hidden="true" />
              <span className="font-serif text-sm font-bold leading-tight sm:text-base">
                Sukomangun
              </span>
              <span className="text-[11px] leading-tight opacity-80 sm:text-xs">
                Permukiman di tengah
              </span>
            </div>
            <div className="col-start-3 row-start-2">
              <BorderCard {...BORDERS.timur} />
            </div>
            <div className="col-start-2 row-start-3">
              <BorderCard {...BORDERS.selatan} />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

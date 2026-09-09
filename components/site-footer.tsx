import { MapPin, MessageCircle } from 'lucide-react'

// ── KONTAK ──────────────────────────────────────────────────────────
// Nomor ditulis dua kali dengan sengaja:
//   WA_NOMOR  -> hanya angka, dipakai untuk tautan wa.me
//   WA_TAMPIL -> berspasi, yang dibaca pengunjung
const KONTAK = {
  nama: 'Pak Dwi Rusmanto',
  jabatan: 'Kepala Dusun Sukomangun',
  waNomor: '6281770889686',
  waTampil: '+62 817 7088 9686',
}
// ────────────────────────────────────────────────────────────────────

const FOOTER_LINKS = [
  { href: '#potensi', label: 'Potensi' },
  { href: '#galeri', label: 'Galeri' },
  { href: '#tentang', label: 'Tentang' },
  { href: '#geografi', label: 'Geografi' },
  { href: '#peta', label: 'Peta' },
  { href: '#penduduk', label: 'Penduduk' },
  { href: '#tradisi', label: 'Tradisi' },
  { href: '#tpq', label: 'TPQ' },
  { href: '#kesenian', label: 'Kesenian' },
]

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-muted sm:mt-20 lg:mt-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex max-w-sm flex-col gap-4">
            <a href="#beranda" className="flex items-center gap-2 font-serif font-bold">
              <span>
                Dusun <span className="text-primary">Sukomangun</span>
              </span>
            </a>
            <address className="flex items-start gap-2 text-sm not-italic leading-relaxed text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>
                Dusun Sukomangun, Desa Genito, Kecamatan Windusari, Kabupaten Magelang,
                Jawa Tengah
              </span>
            </address>
          </div>

          <nav aria-label="Navigasi footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-foreground">
              Hubungi {KONTAK.jabatan}
            </span>
            <span className="text-sm text-muted-foreground">
              {KONTAK.nama} &middot; {KONTAK.waTampil}
            </span>
          </div>

          <a
            href={`https://wa.me/${KONTAK.waNomor}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-fit items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Chat WhatsApp {KONTAK.nama}
          </a>
        </div>

        <div className="flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Website profil resmi Dusun Sukomangun &middot;</p>
          <p>&copy; {new Date().getFullYear()} Dusun Sukomangun.</p>
        </div>
      </div>
    </footer>
  )
}

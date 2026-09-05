import { Leaf, MapPin } from 'lucide-react'

const FOOTER_LINKS = [
  { href: '#Potensi', label: 'Potensi' },
  { href: '#Galeri', label: 'Galeri' },
  { href: '#tentang', label: 'Tentang' },
  { href: '#geografi', label: 'Geografi' },
  { href: '#kesenian', label: 'Kesenian' },
  { href: '#fasilitas', label: 'Fasilitas' },
  { href: '#harapan', label: 'Harapan' },
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

        <div className="flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Website profil resmi Dusun Sukomangun &middot;</p>
          <p>&copy; {new Date().getFullYear()} Dusun Sukomangun.</p>
        </div>
      </div>
    </footer>
  )
}

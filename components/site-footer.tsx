import { MapPin, MessageCircle } from 'lucide-react'

// ── KONTAK ──────────────────────────────────────────────────────────
// Nomor ditulis dua kali dengan sengaja:
//   waNomor  -> hanya angka, dipakai untuk tautan wa.me
//   waTampil -> berspasi, yang dibaca pengunjung
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
  { href: '#tentang', label: 'Sejarah' },
  { href: '#geografi', label: 'Wilayah' },
  { href: '#peta', label: 'Peta' },
  { href: '#penduduk', label: 'Warga' },
  { href: '#tradisi', label: 'Tradisi' },
  { href: '#tpq', label: 'TPQ' },
  { href: '#fasilitas', label: 'Fasilitas' },
  { href: '#kesenian', label: 'Kesenian' },
]

export function SiteFooter() {
  return (
    <footer className="bg-hijau-gelap text-white">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <a href="#beranda" className="flex flex-col font-serif leading-none">
              <span className="text-sm text-white/70">Dusun</span>
              <span className="text-2xl font-semibold text-emas-muda">Sukomangun</span>
            </a>
            <address className="flex items-start gap-2 not-italic leading-relaxed text-white/75">
              <MapPin className="mt-1 size-4 shrink-0 text-emas-muda" aria-hidden="true" />
              Dusun Sukomangun, Desa Genito, Kecamatan Windusari, Kabupaten Magelang, Jawa Tengah
            </address>
          </div>

          <nav aria-label="Navigasi footer">
            <h2 className="text-lg font-semibold">Jelajahi</h2>
            <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/75 transition-colors hover:text-emas-muda">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold">Hubungi {KONTAK.jabatan}</h2>
            <p className="text-left text-white/75">
              {KONTAK.nama}
              <br />
              {KONTAK.waTampil}
            </p>
            <a
              href={`https://wa.me/${KONTAK.waNomor}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-fit items-center gap-2 rounded-full bg-emas px-5 font-semibold text-white dark:text-hijau-gelap transition-colors hover:bg-emas-muda hover:text-hijau-gelap"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Chat WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-sm text-white/60">
          &copy; {new Date().getFullYear()} Dusun Sukomangun. Website profil resmi Dusun Sukomangun.
        </div>
      </div>
    </footer>
  )
}

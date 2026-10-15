'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
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

export function SiteNavbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 text-white transition-colors duration-300',
        scrolled || open ? 'bg-hijau-gelap/95 shadow-lg backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#beranda" className="flex flex-col font-serif leading-none">
          <span className="text-sm text-white/80">Dusun</span>
          <span className="text-xl font-semibold text-emas-muda">Sukomangun</span>
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-2 text-[0.95rem] font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="-mr-2 flex items-center xl:ml-2">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="flex size-11 items-center justify-center rounded-full hover:bg-white/10 xl:hidden"
          >
            {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          'grid overflow-hidden transition-[grid-template-rows] duration-300 xl:hidden',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <ul className="min-h-0 overflow-hidden">
          <li className="grid grid-cols-2 gap-x-4 px-5 pb-5 sm:px-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-3 text-base font-medium text-white/90"
              >
                {link.label}
              </a>
            ))}
          </li>
        </ul>
      </div>
    </header>
  )
}

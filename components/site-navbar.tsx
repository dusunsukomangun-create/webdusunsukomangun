'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
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

export function SiteNavbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/90 shadow-sm backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <a href="#beranda" className="flex items-center gap-2 font-serif font-bold">
          <span className="text-lg leading-tight">
            Dusun <span className="text-primary">Sukomangun</span>
          </span>
        </a>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:bg-secondary xl:hidden"
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          'grid overflow-hidden border-border bg-background transition-all duration-300 xl:hidden',
          open ? 'grid-rows-[1fr] border-b' : 'grid-rows-[0fr]',
        )}
      >
        <ul className="min-h-0 overflow-hidden">
          <li className="flex flex-col gap-1 px-4 pb-4 pt-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
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

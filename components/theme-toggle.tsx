'use client'

import { useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

/**
 * Tombol pengalih mode terang/gelap.
 *
 * Pilihan pengunjung disimpan di browser (localStorage 'tema').
 * Selama pengunjung belum pernah memilih, situs mengikuti setelan
 * HP/laptopnya. Mode awal dipasang oleh skrip kecil di app/layout.tsx
 * sebelum halaman tampil, supaya tidak berkedip.
 *
 * Ikon dan labelnya ditentukan lewat CSS (kelas `dark:`), bukan state,
 * sehingga tampilan server dan browser selalu sama.
 */
export function ThemeToggle({ className = '' }: { className?: string }) {
  // Ikuti perubahan setelan sistem selama pengunjung belum memilih sendiri.
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      let saved: string | null = null
      try {
        saved = localStorage.getItem('tema')
      } catch {}
      if (!saved) document.documentElement.dataset.theme = media.matches ? 'dark' : 'light'
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  function toggle() {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('tema', next)
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className={`flex size-11 items-center justify-center rounded-full transition-colors hover:bg-white/10 ${className}`}
    >
      <Moon className="size-5 dark:hidden" aria-hidden="true" />
      <Sun className="hidden size-5 text-emas-muda dark:block" aria-hidden="true" />
      <span className="sr-only dark:hidden">Ganti ke mode gelap</span>
      <span className="sr-only hidden dark:inline">Ganti ke mode terang</span>
    </button>
  )
}

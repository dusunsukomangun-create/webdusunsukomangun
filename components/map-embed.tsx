'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

type Layer = 'peta' | 'satelit'

const LAYERS: { value: Layer; label: string }[] = [
  { value: 'peta', label: 'Peta' },
  { value: 'satelit', label: 'Satelit' },
]

/**
 * Google Maps sematan dengan pilihan lapisan Peta/Satelit buatan sendiri.
 *
 * Kenapa tidak memakai tombol lapisan bawaan Google: isi peta Google tidak
 * bisa dibaca dari situs ini, jadi situs tidak tahu kapan pengunjung pindah
 * ke satelit. Dengan tombol sendiri, situs tahu lapisan yang aktif:
 * - Peta + mode gelap: warna peta dibalik supaya gelap (air tetap biru).
 * - Satelit: selalu tampil apa adanya.
 * Tombol ini sengaja diletakkan menutupi tombol lapisan bawaan Google di
 * pojok kiri bawah, supaya pengunjung tidak berganti lapisan lewat sana.
 */
export function MapEmbed({ query, title }: { query: string; title: string }) {
  const [layer, setLayer] = useState<Layer>('peta')

  const src = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=17&hl=id&t=${
    layer === 'satelit' ? 'k' : 'm'
  }&output=embed`

  return (
    <div className="relative h-[340px] overflow-hidden rounded-2xl bg-garis shadow-[0_12px_32px_-12px_var(--bayang)] sm:h-[420px] lg:h-full lg:min-h-[460px]">
      <iframe
        key={layer}
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={cn(
          'size-full border-0',
          layer === 'peta' &&
            'dark:[filter:invert(0.9)_hue-rotate(180deg)_brightness(0.95)_contrast(0.9)]',
        )}
      />

      <div
        role="radiogroup"
        aria-label="Tampilan peta"
        className="absolute bottom-2 left-2 flex gap-1 rounded-xl border border-garis bg-kartu p-1 shadow-lg"
      >
        {LAYERS.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={layer === value}
            onClick={() => setLayer(value)}
            className={cn(
              'h-11 rounded-lg px-4 text-sm font-semibold transition-colors',
              layer === value ? 'bg-hijau text-white dark:bg-hijau-tua' : 'text-pudar hover:bg-lembut',
            )}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}

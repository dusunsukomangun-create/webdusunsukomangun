import Image from 'next/image'

/**
 * ═══════════════════════════════════════════════════════════════════
 *  CARA MENGGANTI FOTO
 * ═══════════════════════════════════════════════════════════════════
 *  1. Taruh file foto di folder  public/images/
 *     Nama file: huruf kecil, tanpa spasi. Contoh: masjid-lama.jpg
 *
 *  2. Buka file bagian yang ingin diganti (mis. components/mosque-section.tsx),
 *     cari blok bertanda  ── FOTO ──  di bagian atas file, lalu ganti
 *     '/placeholder.svg' menjadi '/images/masjid-lama.jpg'.
 *
 *  3. Sesuaikan juga teks `alt`-nya dengan isi foto yang sebenarnya.
 *     Teks itu dibaca pembaca layar dan muncul bila foto gagal dimuat.
 * ═══════════════════════════════════════════════════════════════════
 */

export const PLACEHOLDER = '/placeholder.svg'

export type PhotoData = {
  src: string
  alt: string
  /** Keterangan yang tampil di pojok kanan bawah foto. Boleh dikosongkan. */
  caption?: string
}

type PhotoProps = PhotoData & {
  /** Bentuk bingkai, mis. "aspect-[4/3]" atau "h-full". Default 4:3. */
  className?: string
  sizes?: string
  priority?: boolean
}

export function Photo({
  src,
  alt,
  caption,
  className = 'aspect-[4/3]',
  sizes = '(min-width: 1024px) 50vw, 100vw',
  priority = false,
}: PhotoProps) {
  const isPlaceholder = src === PLACEHOLDER

  return (
    <figure
      className={`relative overflow-hidden rounded-3xl bg-muted shadow-lg shadow-primary/10 ring-1 ring-border ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />

      {isPlaceholder && (
        <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/75 px-4 py-2 text-center text-xs font-semibold text-primary-foreground backdrop-blur-sm">
          Foto belum diisi
        </span>
      )}

      {caption && (
        <>
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-foreground/70 to-transparent"
            aria-hidden="true"
          />
          <figcaption className="pointer-events-none absolute bottom-3 right-4 max-w-[80%] text-balance font-serif text-right text-base font-bold leading-snug text-primary-foreground [text-shadow:0_1px_6px_rgb(0_0_0/0.55)] sm:bottom-4 sm:right-5 sm:text-lg">
            {caption}
          </figcaption>
        </>
      )}
    </figure>
  )
}

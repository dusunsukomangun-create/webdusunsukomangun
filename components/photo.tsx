import Image from 'next/image'

/**
 * ═══════════════════════════════════════════════════════════════════
 *  CARA MENGGANTI FOTO
 * ═══════════════════════════════════════════════════════════════════
 *  1. Taruh file foto di folder  public/images/
 *     Nama file: huruf kecil, tanpa spasi. Contoh: masjid-lama.jpg
 *     Kecilkan dulu fotonya (sisi terpanjang ±1600 px, di bawah 400 KB),
 *     misalnya lewat squoosh.app, supaya situs tetap ringan dibuka di HP.
 *
 *  2. Buka file bagian yang ingin diganti (mis. components/about-section.tsx),
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
  /** Keterangan yang tampil di pojok kiri bawah foto. Boleh dikosongkan. */
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
      className={`relative overflow-hidden rounded-2xl bg-garis shadow-[0_12px_32px_-12px_var(--bayang)] ${className}`}
    >
      <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />

      {isPlaceholder && (
        <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/70 px-4 py-2 text-sm font-semibold text-white">
          Foto belum diisi
        </span>
      )}

      {caption && (
        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-4 pt-12 text-base font-semibold text-white">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

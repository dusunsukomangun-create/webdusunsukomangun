'use client'

import { useEffect } from 'react'

/**
 * Animasi "muncul saat digulir" untuk seluruh halaman.
 *
 * Tidak menampilkan apa pun. Setelah halaman siap, komponen ini menandai isi
 * setiap bagian (judul, foto, kartu) lalu memunculkannya dari bawah ketika
 * masuk layar. Isi berupa kisi atau daftar (deretan kartu) muncul bergantian
 * satu per satu. Setiap elemen hanya beranimasi sekali.
 *
 * Bagian baru otomatis ikut beranimasi selama memakai komponen <Section>.
 * Aturan tampilannya ada di app/globals.css (bagian ANIMASI).
 */
export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!('IntersectionObserver' in window)) return

    // Isi langsung dari setiap bagian halaman dan footer.
    // Beranda (#beranda) punya animasi pembuka sendiri lewat CSS.
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        'main section:not(#beranda) > div > *, footer > div > *',
      ),
    )

    for (const el of targets) {
      const isList = ['UL', 'OL', 'DL'].includes(el.tagName)
      const isGrid = el.classList.contains('grid')
      if ((isList || isGrid) && el.children.length > 1) {
        el.setAttribute('data-muncul-bergantian', '')
        Array.from(el.children).forEach((child, i) => {
          ;(child as HTMLElement).style.setProperty('--urutan', String(Math.min(i, 6)))
        })
      } else {
        el.setAttribute('data-muncul', '')
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('terlihat')
          observer.unobserve(entry.target)
        }
      },
      // Muncul begitu elemen naik sedikit dari tepi bawah layar.
      { rootMargin: '0px 0px -40px 0px', threshold: 0.08 },
    )
    targets.forEach((el) => observer.observe(el))

    // Pengaman: elemen paling bawah (mis. baris hak cipta) bisa saja tidak
    // pernah naik cukup tinggi. Begitu halaman mentok di bawah, munculkan semua.
    const revealRest = () => {
      if (window.scrollY + window.innerHeight < document.documentElement.scrollHeight - 4) return
      for (const el of targets) el.classList.add('terlihat')
      observer.disconnect()
      window.removeEventListener('scroll', revealRest)
    }
    window.addEventListener('scroll', revealRest, { passive: true })

    // Pasang terakhir: sebelum ini semua isi tetap tampil normal.
    document.documentElement.classList.add('gerak')

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', revealRest)
      document.documentElement.classList.remove('gerak')
    }
  }, [])

  return null
}

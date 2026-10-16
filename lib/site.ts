/**
 * ═══════════════════════════════════════════════════════════════════
 *  DATA PENTING SITUS
 * ═══════════════════════════════════════════════════════════════════
 *  Data di file ini dipakai di beberapa tempat sekaligus (tampilan situs,
 *  peta, dan data untuk mesin pencari). Cukup ubah di sini, semua bagian
 *  ikut berubah. Petunjuk lengkap ada di PANDUAN.md.
 * ═══════════════════════════════════════════════════════════════════
 */

/**
 * Alamat resmi situs, dipakai oleh metadata halaman, peta situs,
 * dan robots.txt. Kalau nanti pakai domain sendiri, cukup ganti di sini.
 */
export const SITE_URL = 'https://dusunsukomangun.vercel.app'

// ── KONTAK ──────────────────────────────────────────────────────────
// Nomor ditulis dua kali dengan sengaja:
//   waNomor  -> hanya angka, diawali 62 (bukan 0), dipakai untuk tautan wa.me
//   waTampil -> berspasi, yang dibaca pengunjung
export const KONTAK = {
  nama: 'Pak Dwi Rusmanto',
  jabatan: 'Kepala Dusun Sukomangun',
  waNomor: '6281770889686',
  waTampil: '+62 817 7088 9686',
}

// ── LOKASI ──────────────────────────────────────────────────────────
// Titik di peta: tengah permukiman Dusun Sukomangun.
// Google Maps tidak punya tempat bernama "Dusun Sukomangun" (yang terdaftar
// hanya masjid dan makamnya), jadi titiknya memakai koordinat.
// Untuk menggeser titik: buka Google Maps, klik kanan pada lokasi yang
// diinginkan, klik angka koordinat yang muncul (otomatis tersalin), lalu
// tempel: angka pertama ke `lat`, angka kedua ke `lng`.
export const LOKASI = {
  lat: -7.4007,
  lng: 110.1524,
}

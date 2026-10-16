# Panduan Mengubah Isi Situs Dusun Sukomangun

Panduan ini untuk pengurus dusun yang ingin mengganti teks, foto, atau kontak di situs **[dusunsukomangun.vercel.app](https://dusunsukomangun.vercel.app)**, tanpa perlu menjadi programmer.

Semua perubahan bisa dikerjakan **lewat browser** di situs GitHub. Tidak perlu memasang aplikasi apa pun.

---

## Daftar isi

1. [Yang perlu disiapkan](#1-yang-perlu-disiapkan)
2. [Alur kerja yang aman](#2-alur-kerja-yang-aman)
3. [Di mana letak setiap isi](#3-di-mana-letak-setiap-isi)
4. [Mengubah teks](#4-mengubah-teks)
5. [Mengganti atau menambah foto](#5-mengganti-atau-menambah-foto)
6. [Mengganti kontak WhatsApp](#6-mengganti-kontak-whatsapp)
7. [Menggeser titik peta](#7-menggeser-titik-peta)
8. [Kalau ada yang salah](#8-kalau-ada-yang-salah)
9. [Bagian yang sebaiknya tidak diubah](#9-bagian-yang-sebaiknya-tidak-diubah)

---

## 1. Yang perlu disiapkan

- **Akun GitHub** yang sudah diberi akses ke repositori ini oleh pemiliknya (akun `dusunsukomangun-create`).
  Caranya: pemilik membuka repositori → **Settings** → **Collaborators** → **Add people**.
- Alamat repositori: **https://github.com/dusunsukomangun-create/webdusunsukomangun**

---

## 2. Alur kerja yang aman

Situs ini **langsung berubah** setiap kali ada perubahan di cabang (*branch*) `main`. Supaya kesalahan tidak langsung terlihat pengunjung, selalu ikuti alur ini:

**Ubah di cabang baru → cek pratinjau → gabungkan ke `main`.**

1. Buka file yang ingin diubah di GitHub, lalu klik ikon **pensil** (✏️ *Edit this file*) di kanan atas.
2. Lakukan perubahan.
3. Klik tombol hijau **Commit changes…**
4. Di jendela yang muncul:
   - Isi kotak pesan dengan keterangan singkat, misalnya `Ganti nomor WhatsApp kepala dusun`.
   - Pilih **Create a new branch for this commit and start a pull request**.
   - Klik **Propose changes**, lalu **Create pull request**.
5. Tunggu 1–2 menit. Di halaman *pull request* akan muncul komentar dari **Vercel** berisi tautan **Preview**. Buka tautan itu untuk melihat hasilnya sebelum tayang.
   - Tanda **centang hijau** ✅ berarti situs berhasil dibuat.
   - Tanda **silang merah** ❌ berarti ada kesalahan. Lihat [bagian 8](#8-kalau-ada-yang-salah).
6. Kalau hasil pratinjau sudah benar, klik **Merge pull request** → **Confirm merge**. Beberapa menit kemudian, perubahan tampil di situs utama.

> **Tips:** satu *pull request* boleh berisi beberapa perubahan. Setelah membuat cabang di langkah 4, buka file lain, pilih cabang yang sama di tombol pilihan cabang (kiri atas, bertuliskan `main`), lalu ubah dan *commit* langsung ke cabang itu.

---

## 3. Di mana letak setiap isi

Hampir semua isi situs ada di folder **`components/`**, satu file untuk setiap bagian halaman.

| Bagian di situs | File | Yang bisa diubah di dalamnya |
|---|---|---|
| Beranda (foto besar dan judul) | `components/hero-section.tsx` | `FOTO_UTAMA`, daftar `POTENSI` |
| Galeri foto beranda | `components/hero-gallery.tsx` | daftar `SLIDES` |
| Tentang & Sejarah | `components/about-section.tsx` | `FOTO_1`, `FOTO_2`, daftar `KISAH` |
| Batas wilayah | `components/geography-section.tsx` | `BORDERS` (nama dusun tetangga) |
| Lokasi & peta | `components/map-section.tsx` | daftar `DETAILS` (alamat, akses jalan) |
| Kependudukan | `components/population-section.tsx` | `FOTO_3`, angka `STATS`, daftar `DETAILS` |
| Tradisi keagamaan | `components/tradition-section.tsx` | `FOTO_1`, `FOTO_2`, daftar `TRADISI` |
| TPQ Darul Huda | `components/tpq-section.tsx` | foto, `RIWAYAT`, `PENGAJAR`, `MATERI` |
| Fasilitas (masjid, posyandu) | `components/facilities-section.tsx` | `FOTO_MASJID`, `FOTO_POSYANDU`, `FASILITAS` |
| Kesenian | `components/arts-section.tsx` | `FOTO_ALMONTRAMONTRO`, `FOTO_TELOGOSUTO`, `ARTS` |
| Kontak, titik peta, alamat situs | `lib/site.ts` | `KONTAK`, `LOKASI`, `SITE_URL` |
| Judul & deskripsi di hasil Google | `app/layout.tsx` | `title`, `description` |

Di bagian atas setiap file ada blok bertanda `── FOTO ──` berisi daftar foto bagian itu.

---

## 4. Mengubah teks

Teks di situs ditulis di antara tanda kutip, seperti ini:

```tsx
{
  title: 'Gotong Royong',
  body: 'Semangat guyub rukun warga sangat kuat dalam kegiatan kemasyarakatan.',
},
```

Cukup ganti kalimat **di dalam tanda kutip**. Ada beberapa aturan penting:

- **Jangan hapus tanda kutip** `'` di awal dan akhir kalimat, juga **koma** `,` sesudahnya.
- **Jangan memakai tanda petik lurus `'` di tengah kalimat.** Tanda itu dianggap sebagai akhir kalimat dan membuat situs gagal dibuat. Pakai petik melengkung **`’`** sebagai gantinya.
  - ❌ `'Diba'an'`
  - ✅ `'Diba’an'`

  Tips: salin saja tanda `’` dari teks yang sudah ada di file.
- Tanda kutip dua `"` boleh dipakai di tengah kalimat.

**Menambah satu isi ke daftar** (misalnya tradisi baru): salin satu blok lengkap dari `{` sampai `},`, tempel tepat di bawahnya, lalu ubah isinya.

```tsx
  {
    Icon: Moon,
    when: 'Setiap Malam Jumat',
    title: 'Yasinan',
    body: 'Pembacaan Surat Yasin bersama di rumah warga secara bergiliran.',
  },
```

Kalau blok yang disalin punya baris `Icon: ...`, biarkan saja seperti aslinya. Itu gambar ikon kecil di kartunya.

**Menghapus satu isi:** hapus satu blok lengkap dari `{` sampai `},`.

**Teks yang berisi huruf tebal atau miring** (misalnya di `about-section.tsx`) ditulis di antara tanda `<>` dan `</>`. Ubah kalimatnya saja dan jangan sentuh tanda `<strong>`, `</strong>`, `<em>`, atau `</em>`.

---

## 5. Mengganti atau menambah foto

### Langkah 1 — Kecilkan ukuran foto

Foto dari HP biasanya 2–5 MB, terlalu berat untuk situs. Kecilkan dulu:

1. Buka **https://squoosh.app** di browser.
2. Seret foto ke halaman itu.
3. Di panel kanan:
   - **Resize**: nyalakan, isi **Width** `1600`.
   - **Compress**: pilih **MozJPEG**, **Quality** `75`.
4. Klik tombol **unduh** di kanan bawah. Pastikan ukurannya di bawah **400 KB**.

### Langkah 2 — Beri nama file yang benar

- Pakai **huruf kecil semua**, **tanpa spasi**, dan pisahkan kata dengan tanda hubung `-`.
  - ✅ `posyandu-timbang-balita.jpeg`
  - ❌ `IMG 2024 Posyandu.JPG`
- Huruf besar dan kecil **dianggap berbeda** oleh server. `Foto.jpeg` dan `foto.jpeg` adalah dua file yang berbeda.

### Langkah 3 — Unggah ke GitHub

1. Buka folder **`public/images`** di repositori.
2. Klik **Add file** → **Upload files**, lalu seret fotonya.
3. Pilih **Create a new branch…** dan lanjutkan seperti [alur kerja di bagian 2](#2-alur-kerja-yang-aman).

### Langkah 4 — Pasang foto di bagian yang diinginkan

Buka file bagiannya (lihat [tabel di bagian 3](#3-di-mana-letak-setiap-isi)), cari blok `── FOTO ──`, lalu ubah:

```tsx
const FOTO_POSYANDU = {
  src: '/images/posyandu-timbang-balita.jpeg',   // nama file foto
  alt: 'Kader Posyandu menimbang balita di rumah warga',   // penjelasan isi foto
  caption: 'Kegiatan Posyandu warga',   // tulisan di atas foto (boleh '')
}
```

- **`src`**: selalu diawali `/images/`, lalu nama file persis seperti yang diunggah.
- **`alt`**: jelaskan isi foto dalam satu kalimat. Teks ini dibacakan untuk pengunjung tunanetra, dan muncul bila foto gagal dimuat.
- **`caption`**: tulisan kecil di bagian bawah foto. Kosongkan (`''`) bila tidak perlu.

**Menambah foto ke galeri yang bisa digeser** (galeri beranda, tradisi, kesenian): salin satu blok `{ src, alt, caption },`, tempel di bawahnya, lalu ganti isinya.

---

## 6. Mengganti kontak WhatsApp

Buka **`lib/site.ts`**, lalu ubah bagian `KONTAK`:

```ts
export const KONTAK = {
  nama: 'Pak Dwi Rusmanto',
  jabatan: 'Kepala Dusun Sukomangun',
  waNomor: '6281770889686',
  waTampil: '+62 817 7088 9686',
}
```

- **`waNomor`**: hanya angka, **diawali `62`**, bukan `0`. Contoh: `081234567890` ditulis `6281234567890`.
- **`waTampil`**: nomor yang dibaca pengunjung, boleh memakai spasi.

---

## 7. Menggeser titik peta

1. Buka **Google Maps**, cari lokasi yang diinginkan.
2. **Klik kanan** tepat di titiknya. Angka koordinat muncul paling atas, misalnya `-7.4007, 110.1524`. Klik angka itu agar tersalin.
3. Buka **`lib/site.ts`**, lalu ubah bagian `LOKASI`:

```ts
export const LOKASI = {
  lat: -7.4007,    // angka pertama
  lng: 110.1524,   // angka kedua
}
```

Jangan lupa **tanda minus** `-` pada angka pertama.

---

## 8. Kalau ada yang salah

**Pratinjau bertanda silang merah ❌ (situs gagal dibuat)**
Biasanya karena salah ketik: tanda kutip atau koma terhapus, atau ada petik lurus `'` di tengah kalimat (lihat [bagian 4](#4-mengubah-teks)). Buka kembali file yang diubah, bandingkan dengan aslinya, perbaiki, lalu *commit* lagi ke cabang yang sama. Situs utama **tidak terpengaruh** selama perubahan belum di-*merge*.

**Foto tidak muncul (kotak abu-abu)**
Periksa apakah nama di `src` **sama persis** dengan nama file di `public/images`, termasuk huruf besar-kecil dan ekstensinya (`.jpeg` dan `.jpg` itu berbeda).

**Perubahan sudah di-*merge* tetapi ternyata salah**
Buka tab **Pull requests** → **Closed** → pilih *pull request* tersebut → klik **Revert**. GitHub akan membuat *pull request* baru yang membatalkan perubahan itu. *Merge* *pull request* tersebut, dan situs kembali seperti sebelumnya.

**Masih bingung?** Hubungi pembuat situs, atau orang yang mengerti GitHub, sebelum melakukan *merge*.

---

## 9. Bagian yang sebaiknya tidak diubah

Kecuali Anda paham akibatnya, jangan ubah bagian-bagian ini:

- **`app/layout.tsx`**, selain `title` dan `description`. Di dalamnya ada kode verifikasi Google Search Console dan pengaturan mode gelap.
- **`app/globals.css`**: warna dan huruf seluruh situs.
- **`package.json`** dan **`pnpm-lock.yaml`**: daftar perangkat lunak yang dipakai situs.
- Baris **`import ...`** di bagian paling atas setiap file.

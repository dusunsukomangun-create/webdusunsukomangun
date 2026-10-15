/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Foto di public/images sudah dikecilkan (maks. 1600 px) sebelum diunggah,
    // jadi tidak perlu diolah ulang oleh server.
    unoptimized: true,
  },
}

export default nextConfig

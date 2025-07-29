import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Konfigurasi ini diperlukan agar Next.js dapat mengoptimalkan
  // gambar dari domain eksternal.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'presse.kepler-freiburg.de',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com', // Tambahkan ini untuk logo
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;

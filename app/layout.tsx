import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header"; // Impor komponen Header

// Mengoptimalkan pemuatan font Inter menggunakan next/font
const inter = Inter({ subsets: ["latin"] });

// Metadata untuk SEO dan tab browser
export const metadata: Metadata = {
  title: "SIMPAN - Profil Produk",
  description: "Sistem Integrasi Media Penyimpan yang Interoperabilitas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} text-gray-800`}>
        {/* Komponen Header akan muncul di semua halaman */}
        <Header />
        {/* children akan merender konten dari page.tsx atau halaman lainnya */}
        <main>{children}</main>
      </body>
    </html>
  );
}

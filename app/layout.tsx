import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header"; // Impor komponen Header
import Footer from "./components/Footer"; // Impor komponen Footer

// Mengoptimalkan pemuatan font Inter menggunakan next/font
const inter = Inter({ subsets: ["latin"] });

// Metadata untuk SEO dan tab browser
export const metadata: Metadata = {
  title: "SIMPAN - Sistem Integrasi Media Penyimpan Interoperabel",
  description: "Sistem Integrasi Media Penyimpan yang Interoperabilitas",
  icons: {
    icon: '/logo.jpeg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} text-gray-800 flex flex-col min-h-screen`}>
        {/* Komponen Header akan muncul di semua halaman */}
        <Header />
        {/* children akan merender konten dari page.tsx atau halaman lainnya */}
        <main className="flex-grow">{children}</main>
        {/* Komponen Footer akan muncul di semua halaman */}
        <Footer />
      </body>
    </html>
  );
}

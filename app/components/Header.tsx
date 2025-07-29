'use client'; // Menandakan ini adalah Client Component karena menggunakan state dan event listener

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  // State untuk mengelola visibilitas menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State untuk mengelola shadow pada header saat scroll
  const [isScrolled, setIsScrolled] = useState(false);

  // useEffect untuk menambahkan event listener saat scroll
  useEffect(() => {
    const handleScroll = () => {
      // Jika posisi scroll lebih dari 10px, tambahkan shadow
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Tambahkan event listener saat komponen dimuat
    window.addEventListener('scroll', handleScroll);

    // Hapus event listener saat komponen dibongkar (untuk mencegah memory leak)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Array dependensi kosong berarti efek ini hanya berjalan sekali saat mount

  return (
    <header 
      id="header" 
      // Kelas CSS dinamis berdasarkan state isScrolled
      className={`glassmorphism fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="#beranda">
          {/* Menggunakan komponen Image dari Next.js untuk optimasi */}
          <Image 
            src="/logo.jpeg" // Path ke logo di folder public
            alt="Logo SIMPAN" 
            width={160} // Tentukan lebar
            height={40} // Tentukan tinggi
            className="h-10 w-auto"
            priority // Prioritaskan pemuatan logo
          />
        </Link>
        
        {/* Menu untuk Desktop */}
        <ul className="hidden md:flex items-center space-x-8">
          <li><Link href="#beranda" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Beranda</Link></li>
          <li><Link href="#fitur" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Fitur</Link></li>
          <li><Link href="#tentang" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Tentang Kami</Link></li>
        </ul>

        {/* Tombol Menu Mobile */}
        <button 
          id="mobile-menu-button" 
          className="md:hidden text-gray-700 focus:outline-none"
          // Toggle state saat tombol diklik
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </nav>
      
      {/* Menu Mobile (Visibilitas dikontrol oleh state isMenuOpen) */}
      <div 
        id="mobile-menu" 
        // Kelas CSS dinamis berdasarkan state isMenuOpen
        className={`md:hidden bg-white/90 backdrop-blur-sm ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          {/* Saat link di klik, tutup menu */}
          <li><Link href="#beranda" onClick={() => setIsMenuOpen(false)} className="mobile-menu-link text-gray-600 hover:text-blue-600">Beranda</Link></li>
          <li><Link href="#fitur" onClick={() => setIsMenuOpen(false)} className="mobile-menu-link text-gray-600 hover:text-blue-600">Fitur</Link></li>
          <li><Link href="#tentang" onClick={() => setIsMenuOpen(false)} className="mobile-menu-link text-gray-600 hover:text-blue-600">Tentang Kami</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

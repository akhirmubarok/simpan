'use client'; // Menandakan ini adalah Client Component karena menggunakan state dan event listener

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  // State untuk mengelola visibilitas menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State untuk mengelola shadow pada header saat scroll
  const [isScrolled, setIsScrolled] = useState(false);
  // State untuk melacak bagian mana yang aktif
  const [activeSection, setActiveSection] = useState('beranda');

  // useEffect untuk event listener
  useEffect(() => {
    const handleScroll = () => {
      // Logika untuk shadow header
      setIsScrolled(window.scrollY > 10);

      // Logika untuk active navbar
      const sections = ['beranda', 'fitur', 'user-manual', 'tutorial-video', 'kontak-kami'];
      const scrollPosition = window.scrollY + 100; // Offset agar lebih akurat

      for (const sectionId of sections) {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const sectionHeight = sectionElement.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId);
            break; // Hentikan loop jika sudah ditemukan
          }
        }
      }
    };

    // Tambahkan event listener saat komponen dimuat
    window.addEventListener('scroll', handleScroll);

    // Hapus event listener saat komponen dibongkar
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#beranda', label: 'Beranda' },
    { href: '#fitur', label: 'Feature' },
    { href: '#user-manual', label: 'User Manual' },
    { href: '#tutorial-video', label: 'Tutorial Video' },
    { href: '#kontak-kami', label: 'Kontak Kami' },
  ];

  return (
    <header 
      id="header" 
      className={`glassmorphism fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="#beranda">
          <Image 
            src="/logo.jpeg"
            alt="Logo SIMPAN" 
            width={160}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>
        
        {/* Menu untuk Desktop */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className={`font-medium transition-colors ${
                  activeSection === link.href.substring(1) 
                    ? 'text-blue-600' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Tombol Menu Mobile */}
        <button 
          id="mobile-menu-button" 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </nav>
      
      {/* Menu Mobile */}
      <div 
        id="mobile-menu" 
        className={`md:hidden bg-white/90 backdrop-blur-sm ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className={`mobile-menu-link ${
                  activeSection === link.href.substring(1)
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;

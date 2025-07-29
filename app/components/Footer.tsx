import React from 'react';

const Footer = () => {
  return (
    <footer className="glassmorphism py-6">
      <div className="container mx-auto px-6">
        <div className="md:flex md:justify-between md:items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <p className="text-xl font-bold tracking-wider text-gray-800">SIMPAN</p>
            <p className="text-md text-gray-600">BPS Kabupaten Tulang Bawang</p>
          </div>
          <p className="text-xs text-gray-500">
            © 2025 Dibuat dengan ❤️ oleh Rahma Fajri Ramdhani. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

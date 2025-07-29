import Link from 'next/link';
import Image from 'next/image'; // Image tidak digunakan di sini, tapi bagus untuk disimpan jika diperlukan

export default function Home() {
  return (
    <>
      {/* Bagian Beranda (Hero Section) */}
      <section id="beranda" className="min-h-screen flex items-center bg-blue-50/80 pt-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-4">
            Sistem Integrasi Media Penyimpan yang Interoperabilitas
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Tingkatkan efisiensi, optimalkan alur kerja, dan capai target Anda lebih cepat dengan sistem yang interoperabilitas.
          </p>
          <div className="space-x-4">
            <Link href="#fitur" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-transform duration-300 hover:scale-105 inline-block">
              Pelajari Fitur
            </Link>
          </div>
        </div>
      </section>

      {/* Bagian Fitur */}
      <section id="fitur" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Fitur Unggulan Kami</h2>
            <p className="text-gray-500 mt-2">Semua yang Anda butuhkan dalam satu platform.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Kartu Fitur 1 */}
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Analitik Mendalam</h3>
              <p className="text-gray-600">Dapatkan wawasan berharga dari data Anda dengan dasbor analitik yang intuitif dan mudah dipahami.</p>
            </div>

            {/* Kartu Fitur 2 */}
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Integrasi Cepat</h3>
              <p className="text-gray-600">Hubungkan dengan mudah ke berbagai layanan pihak ketiga yang sudah Anda gunakan setiap hari.</p>
            </div>

            {/* Kartu Fitur 3 */}
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Keamanan Terjamin</h3>
              <p className="text-gray-600">Data Anda aman bersama kami dengan enkripsi tingkat lanjut dan standar keamanan tertinggi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bagian Tentang Kami */}
      <section id="tentang" className="py-20 bg-blue-50/80">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Tentang Kami</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kami adalah tim yang terdiri dari para ahli teknologi yang bersemangat dalam menciptakan solusi inovatif untuk memecahkan masalah kompleks. Misi kami adalah memberdayakan bisnis dari semua ukuran untuk berkembang di era digital melalui produk yang andal dan mudah digunakan.
          </p>
        </div>
      </section>
    </>
  );
}

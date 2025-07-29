import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Bagian Beranda (Hero Section) */}
      <section id="beranda" className="min-h-screen flex items-center justify-center relative bg-blue-50/80 pt-20">
        <div className="container mx-auto px-6 text-center">
          <Image
            src="/logo.jpeg"
            alt="Logo SIMPAN"
            width={200}
            height={200}
            className="mx-auto mb-6"
            priority
          />
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-4 animate-fade-in-down">
            Sistem Integrasi Media Penyimpan Interoperabel
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in-up">
            Tingkatkan efisiensi, optimalkan alur kerja, dan capai target Anda lebih cepat dengan sistem yang terintegrasi secara mulus.
          </p>
          <div className="space-x-4">
            <Link href="#fitur" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-block">
              Jelajahi Fitur
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </div>
      </section>

      {/* Bagian Fitur */}
      <section id="fitur" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Features</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Kartu Fitur 1: Collaborative */}
            <div className="glassmorphism-content p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center flex flex-col items-center transform hover:-translate-y-2">
              <div className="bg-blue-100 text-blue-600 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Collaborate</h3>
              <p className="text-gray-600">Bekerja sama dengan tim Anda secara real-time, bagikan file, dan berikan masukan dengan mudah.</p>
            </div>

            {/* Kartu Fitur 2: Private & Secure */}
            <div className="glassmorphism-content p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center flex flex-col items-center transform hover:-translate-y-2">
              <div className="bg-blue-100 text-blue-600 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Private & Secure</h3>
              <p className="text-gray-600">Data Anda terlindungi dengan enkripsi end-to-end dan kontrol akses yang ketat.</p>
            </div>

            {/* Kartu Fitur 3: Approval */}
            <div className="glassmorphism-content p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center flex flex-col items-center transform hover:-translate-y-2">
              <div className="bg-blue-100 text-blue-600 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Approval</h3>
              <p className="text-gray-600">Sederhanakan alur kerja persetujuan dengan sistem notifikasi dan jejak audit yang jelas.</p>
            </div>
            
            {/* Kartu Fitur 4: Multi-platform */}
            <div className="glassmorphism-content p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center flex flex-col items-center transform hover:-translate-y-2">
              <div className="bg-blue-100 text-blue-600 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Multi-Platform</h3>
              <p className="text-gray-600">Akses file Anda kapan saja, di mana saja, melalui desktop, tablet, maupun smartphone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bagian User Manual */}
      <section id="user-manual" className="py-20 bg-blue-50/80">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">User Manual</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Kartu Guide Book */}
            <a href="https://drive.google.com/file/d/1xEgO_mTzt2FqxAZXHenIsmFSIrXYTSke/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="glassmorphism-content p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center flex flex-col items-center justify-center transform hover:-translate-y-2">
              <div className="bg-blue-100 text-blue-600 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Guide Book</h3>
              <p className="text-gray-600">Panduan lengkap untuk memulai dan menguasai fitur-fitur kami.</p>
            </a>
            {/* Kartu User Management */}
            <a href="https://docs.google.com/spreadsheets/d/1ieVlpt6eVkJ4SI_pwCxPW1rgTIKwjX_hyrxrleOywgY/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="glassmorphism-content p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center flex flex-col items-center justify-center transform hover:-translate-y-2">
              <div className="bg-green-100 text-green-600 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Account Management</h3>
              <p className="text-gray-600">Akses daftar manajemen pengguna untuk login ke aplikasi.</p>
            </a>
            {/* Kartu Product App */}
            <div className="glassmorphism-content p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center flex flex-col items-center justify-start transform hover:-translate-y-2">
              <div className="bg-gray-200 text-gray-800 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Mobile App</h3>
              <p className="text-gray-600 mb-4 flex-grow">Unduh aplikasi kami di perangkat seluler Anda untuk akses di mana saja.</p>
              <div className="flex items-center justify-center space-x-4 w-full">
                <a href="https://apps.apple.com/id/app/nextcloud/id1125420102" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Image src="/apple.svg" alt="Apple App Store" width={32} height={32} />
                </a>
                <div className="w-px h-8 bg-gray-200"></div>
                <a href="https://play.google.com/store/apps/details?id=com.nextcloud.client" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Image src="/android.svg" alt="Google Play Store" width={32} height={32} />
                </a>
              </div>
            </div>
            {/* Kartu Website */}
            <a href="https://simpan.bpstuba.my.id" target="_blank" rel="noopener noreferrer" className="glassmorphism-content p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center flex flex-col items-center justify-center transform hover:-translate-y-2">
              <div className="bg-purple-100 text-purple-600 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Website</h3>
              <p className="text-gray-600">Kunjungi platform web kami untuk mengakses semua fitur melalui browser Anda.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Bagian Tutorial Video */}
      <section id="tutorial-video" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Video Tutorial</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video Tutorial Website */}
            <div className="glassmorphism-content p-4 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-center text-gray-700 mb-4">Tutorial via Website</h3>
              <div className="aspect-video">
                <iframe 
                  className="w-full h-full rounded-lg" 
                  src="https://www.youtube.com/embed/Bgaa7FG1DrQ" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>
            </div>
            {/* Video Tutorial Aplikasi */}
            <div className="glassmorphism-content p-4 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-center text-gray-700 mb-4">Tutorial via Aplikasi</h3>
              <div className="aspect-video">
                <iframe 
                  className="w-full h-full rounded-lg" 
                  src="https://www.youtube.com/embed/ItVyPZ8r1gA" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bagian Kontak Kami */}
      <section id="contact-us" className="pt-20 pb-20 bg-blue-50/80">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Jika Anda memiliki pertanyaan, jangan ragu untuk menghubungi Rahma Fajri Ramdhani.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://wa.me/6282135453380" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-500 transition-transform duration-300 hover:scale-110">
              <Image src="/whatsapp.svg" alt="WhatsApp" width={48} height={48} />
            </a>
            <a href="https://www.instagram.com/rahmafajrir/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 transition-transform duration-300 hover:scale-110">
              <Image src="/instagram.svg" alt="Instagram" width={48} height={48} />
            </a>
            <a href="mailto:ramdhanirahmafajri@gmail.com" className="text-gray-600 hover:text-red-500 transition-transform duration-300 hover:scale-110">
              <Image src="/gmail.svg" alt="Gmail" width={48} height={48} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

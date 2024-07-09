import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const lightBlueColor = '#D2D8F2'; // Warna biru muda yang diinginkan
  const lightBlueColorWithOpacity = 'rgba(210, 216, 242, 0.2)'; // Warna biru muda dengan opacity 20%

  return (
    <section id='Home'>
      <div className="container mx-auto my-8 bg-gray-100" style={{ backgroundColor: lightBlueColor }}>
        <section className="flex">
          <motion.div className="w-1/2 pl-20 bg-blue-200 p-6 rounded-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ backgroundColor: lightBlueColorWithOpacity }}
          >
            <h1 className="text-4xl font-bold text-gray-800">
              Sistem klasifikasi jenis aliran lukisan
            </h1>
            <p className="mt-4 text-gray-600">
              Selamat datang di website kami yang menggali lebih dalam tentang 
              klasifikasi jenis aliran lukisan! Di sini, kami menjelajahi keragaman 
              ekspresi seni melalui berbagai aliran lukisan yang mencerminkan keunikan 
              dan kreativitas manusia.
            </p>
            <a href="#Background">
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Selengkapnya
              </button>
            </a>
            <div>
              <h2 className="text-2xl font-bold mb-4">Tujuan</h2>
              <p className="text-gray-600">
                Tujuan kami adalah memberikan solusi inovatif dalam mengklasifikasikan 
                jenis aliran lukisan berdasarkan karakteristik visual. Teknologi kami 
                digunakan dalam berbagai industri untuk meningkatkan efisiensi dan 
                akurasi dalam pengenalan dan pemahaman seni lukis.
              </p>
            </div>
          </motion.div>
          <motion.div className="w-1/2 ml-20 rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-h-96 mx-auto rounded-lg shadow-lg" style={{ maxWidth: '400px', overflow: 'hidden' }}>
              <img src="/Realism.jpg" alt="Bunga" className="w-full h-full object-cover rounded-lg" />
            </div>
          </motion.div>
        </section>
      </div>
    </section>
  );
};

export default Home;

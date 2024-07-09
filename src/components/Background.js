import React from 'react';

const Background = () => {
  return (
    <section id='Background'>
    <section className="my-8 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 ml-4">Tentang Kami</h2>
      <div className="flex items-center justify-center w-full">
        <img src="/lukisan2.png" alt="Background" className="w-1/5 h-auto mr-4" />
        <p className="w-1/2 p-4 text-left ml-4">
        Kami berkomitmen untuk memahami dan mengapresiasi berbagai bentuk seni melalui teknologi inovatif. 
        Proyek kami bertujuan untuk mengembangkan sistem yang mampu mengidentifikasi aliran lukisan dari gambar karya seni dengan tingkat akurasi yang tinggi. Dengan memanfaatkan teknologi canggih, kami menganalisis elemen-elemen visual seperti warna, garis, dan bentuk untuk menentukan aliran lukisan seperti Ekspresionisme, Realisme, Abstrak, dan Romantisme.
        Teknologi yang kami kembangkan tidak hanya meningkatkan efisiensi dalam pengenalan seni lukis, tetapi juga memfasilitasi interaksi budaya melalui pemahaman mendalam terhadap karakteristik visual yang digunakan dalam karya seni. 
        Kami percaya bahwa penggunaan sistem ini dapat memberikan kontribusi signifikan dalam berbagai industri, termasuk museum, galeri seni, pendidikan, dan penelitian seni, dengan memperkuat pemahaman dan apresiasi terhadap seni lukis secara global.
        Bergabunglah dengan kami dalam menjelajahi keindahan dan kompleksitas ekspresi seni melalui teknologi yang menghubungkan tradisi dengan inovasi.
        </p>
      </div>
    </section></section>
  );
};

export default Background;

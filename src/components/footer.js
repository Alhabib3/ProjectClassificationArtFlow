import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold mb-4">Jelajahi ArtFlow</h2>
            <p className="text-sm max-w-lg">
              ArtFlow mengundang Anda untuk menjelajahi kekayaan seni, menawarkan pintu gerbang untuk terjun dalam berbagai gaya dan aliran yang menginspirasi kreativitas dan eksplorasi budaya. Baik Anda terpesona oleh sapuan kuas yang penuh emosi dari Ekspresionisme, realisme yang hidup dalam kehidupan sehari-hari dari Realisme, bentuk-bentuk abstrak yang menantang persepsi dalam Seni Abstrak, atau visi romantis tentang alam dan sejarah dalam Romantisme, ArtFlow merayakan keindahan dan kedalaman ekspresi seni melintasi waktu dan genre.
            </p>
          </div>
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-xl font-bold mb-4">Ikuti Kami</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500">Facebook</a></li>
              <li><a href="#" className="hover:text-blue-500">Twitter</a></li>
              <li><a href="#" className="hover:text-blue-500">Instagram</a></li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-xl font-bold mb-4">Kontak</h2>
            <ul className="space-y-2">
              <li>Email: albial22si@mahasiswa.pcr.ac.id<p>razan21si@mahasiswa.pcr.ac.id</p></li>
              <li>Telepon: 089509085140</li>
              <li>Alamat: Jl. Umban Sari no.1</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} ArtFlow. Hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

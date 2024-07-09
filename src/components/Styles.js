import React from 'react';
const paintingStyles = [
  {
    name: 'Expressionism',
    image: '/Expressionism.jpg',
    description: 'Ekspresionisme adalah gerakan seni yang menekankan emosi dan subjektivitas melalui distorsi, warna yang kuat, dan sapuan kuas yang ekspresif.'
  },
  {
    name: 'Realisme',
    image: '/Realism.jpg',
    description: 'Realisme adalah gerakan artistik yang dimulai di Prancis pada tahun 1850-an, yang ditandai dengan fokus pada penggambaran kehidupan sehari-hari secara naturalistik.'
  },
  {
    name: 'Abstrak',
    image: '/abstract.jpg',
    description: 'Seni abstrak menggunakan bahasa visual berupa bentuk, warna, dan garis untuk menciptakan komposisi yang mungkin ada dengan tingkat kemandirian dari referensi visual di dunia nyata.'
  },
  {
    name: 'Romanticism',
    image: '/Romanticism.jpg',
    description: 'Romantisme adalah gerakan artistik yang menekankan emosi dan individualisme serta memuliakan masa lalu dan alam, lebih memilih yang abad pertengahan daripada yang klasik.'
  }
];

const Styles = () => {
  return (
    <section id="Styles">
      <section className="my-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Jenis Aliran Lukisan yang Diproduksi</h2>
        <div className="overflow-x-auto px-4 ">
          <div className="flex space-x-8 " >
            {paintingStyles.map((style, index) => (
              <div key={index} className="min-w-[33%] bg-white p-4 rounded-lg shadow-lg border border-gray-200 text-center bg-[#DCE0EF]">
                <img src={style.image} alt={style.name} className="w-48 h-48 mx-auto" />
                <p className="font-bold mt-2">{style.name}</p>
                <p className="text-sm mt-1">{style.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Styles;

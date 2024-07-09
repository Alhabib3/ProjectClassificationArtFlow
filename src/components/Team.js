import React from 'react';

const Team = () => {
  return (
    <section className="container my-8 w-full flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 text-center">Anggota Team</h2>
      <div className="flex justify-center w-full flex-wrap">
        <div className="text-center bg-gray-100 p-4 rounded-lg shadow-md m-2 w-64">
          <img src="/habib.png" alt="Albial Habib" className="w-48 h-48 mx-auto mb-2" />
          <p className="font-semibold">Albial Habib</p>
          <p>Kelas: 2 SIA</p>
          <p>NIM: 2257301009</p>
        </div>
        <div className="text-center bg-gray-100 p-4 rounded-lg shadow-md m-2 w-64">
          <img src="/razan.jpeg" alt="Muhammad Razan Amiensyah" className="w-48 h-48 mx-auto mb-2" />
          <p className="font-semibold">Muhammad Razan Amiensyah</p>
          <p>Kelas: 2 SIA</p>
          <p>NIM: 2157301059</p>
        </div>
      </div>
    </section>
  );
};

export default Team;

import React from 'react';

const Professors = () => {
  return (
    <section className="my-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Dosen Pengampu</h2>
      <div className="flex justify-around">
        <div className="text-center flex flex-col items-center">
          <img src="/Dini1.png" alt="Dosen 1" className="w-32 h-32 object-cover rounded-lg" />
          <p className="mt-2">Dini Nurmalasari, S.T., M.T.</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <img src="/Mardhiah1.png" alt="Dosen 2" className="w-32 h-32 object-cover rounded-lg" />
          <p className="mt-2">Mardhiah Fadli, S.T., M.T.</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <img src="/Mahrus1.png" alt="Dosen 3" className="w-32 h-32 object-cover rounded-lg" />
          <p className="mt-2">Muhammad Mahrus Zain, S.S.T., M.T.I.</p>
        </div>
      </div>
    </section>
  );
};

export default Professors;

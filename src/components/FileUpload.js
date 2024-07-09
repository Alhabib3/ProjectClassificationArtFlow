import React, { useState } from 'react';

const Upload = ({ onFileChange }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [status, setStatus] = useState('');
  const [confidence, setConfidence] = useState('');
  const [hasil, setHasil] = useState('');
  const [description, setDescription] = useState('');

  const descriptions = {
    Abstract: 'Seni abstrak menggunakan bahasa visual dari bentuk, warna, dan garis untuk menciptakan komposisi yang mungkin ada dengan tingkat kemandirian dari referensi visual di dunia. Seni abstrak sering dianggap sebagai seni yang tidak berusaha untuk menggambarkan realitas objektif tetapi lebih menekankan pada ekspresi individu dari perasaan atau ide. Banyak seniman abstrak percaya bahwa seni tidak harus selalu menggambarkan dunia yang dapat dilihat, tetapi dapat juga mencerminkan dunia batin atau emosi manusia.',
    Expressionism: 'Ekspresionisme adalah gerakan modernis, awalnya dalam puisi dan lukisan, yang berasal dari Jerman pada awal abad ke-20. Gerakan ini menekankan representasi subjektif dari realitas melalui distorsi drastis untuk mengekspresikan emosi internal, sering kali kecemasan, ketakutan, atau gairah yang intens. Ekspresionisme melibatkan penggunaan warna-warna mencolok, bentuk-bentuk tidak wajar, dan komposisi yang dramatis untuk mencapai dampak emosional maksimum.',
    Realism: 'Realisme dalam seni adalah upaya untuk mewakili subjek secara jujur, tanpa artificialitas dan menghindari unsur spekulatif dan supernatural. Realisme berfokus pada penggambaran kehidupan sehari-hari dengan detail yang akurat dan jujur. Gerakan ini muncul sebagai reaksi terhadap romantisisme dan idealisme yang dianggap terlalu subjektif. Realisme mencoba menangkap realitas sosial, politik, dan ekonomi zamannya, sering kali menyoroti kehidupan kelas pekerja dan orang biasa.',
    Romanticism: 'Romantisisme adalah gerakan artistik, sastra, musik, dan intelektual yang berasal dari Eropa pada akhir abad ke-18. Romantisisme menekankan emosi, individualisme, dan penghargaan terhadap alam dan masa lalu. Gerakan ini sering dikaitkan dengan penekanan pada imajinasi dan subjektivitas, serta pencarian keindahan dan keagungan. Romantisisme juga menolak rasionalitas dan konvensi sosial, memilih untuk mengekspresikan perasaan mendalam dan kebebasan artistik.',
    'Tidak Terdeteksi': 'Gaya seni tidak dapat terdeteksi. Silakan coba lagi dengan gambar yang berbeda. Ini bisa disebabkan oleh kualitas gambar yang tidak sesuai, atau gaya seni yang tidak dikenali oleh sistem.'
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (typeof onFileChange === 'function') {
      onFileChange(file);
    }
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      setStatus('<div style="text-align:left;">Tidak ada file yang dipilih!</div>');
      return;
    }

    const apiUrl = 'https://74b6-34-86-41-131.ngrok-free.app/predict';
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
        cache: 'no-cache',
        headers: {
          Accept: 'application/json',
        },
      });

      const json = await response.json();
      console.log(json);

      if (json.success) {
        setStatus('<div style="text-align:left;">File berhasil diproses!</div>');
        setConfidence(json.confidence);

        let label;
        switch (json.label) {
          case 0:
            label = 'Abstract';
            break;
          case 1:
            label = 'Expressionism';
            break;
          case 2:
            label = 'Realism';
            break;
          case 3:
            label = 'Romanticism';
            break;
          default:
            label = 'Tidak Terdeteksi';
        }

        setHasil(label);
        setDescription(descriptions[label]);
      } else {
        setStatus('<div style="text-align:left;">File gagal diproses!</div>');
        setHasil('Tidak Terdeteksi');
        setDescription(descriptions['Tidak Terdeteksi']);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('<div style="text-align:left;">File gagal diproses!</div>');
      setHasil('Tidak Terdeteksi');
      setDescription(descriptions['Tidak Terdeteksi']);
    }
  };

  return (
    <div id="FileInput" className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-4xl font-bold text-center text-[#132E83] mb-4">
        Proses <span className="text-[#FF7648]">Data</span>
      </h1>
      <div className="flex w-full max-w-5xl">
        <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
          <label className="w-full flex flex-col items-center px-4 py-6 bg-blue-200 text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer">
            <svg
              className="w-8 h-8 mb-2"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 0a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6zM8 10a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
              />
            </svg>
            <span className="mt-2 text-base leading-normal">Pilih File</span>
            <input
              id="file"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </label>
          {selectedFile && (
            <div className="mt-4 flex flex-col items-center">
              <div className="overflow-hidden rounded-lg border border-gray-300 shadow-lg">
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Preview"
                  className="max-w-full h-auto"
                  style={{ maxHeight: '200px' }}
                />
              </div>
              <p className="text-sm mt-2 text-center">File yang dipilih: {selectedFile.name}</p>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                onClick={handleUpload}
              >
                Unggah dan Prediksi
              </button>
            </div>
          )}
        </div>
        {status && hasil && (
          <div className="ml-4 w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
            <div className="text-center">
              <p dangerouslySetInnerHTML={{ __html: status }} />
              <p className="text-sm mt-2">Hasil: {hasil}</p>
              <p className="text-sm mt-2">Confidence: {confidence}</p>
              <p className="text-sm mt-2">Deskripsi: {description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;

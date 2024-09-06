import React, { useState } from 'react';

const ReportProperty: React.FC = () => {
  const [address, setAddress] = useState('');
  const [issue, setIssue] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState<File[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para manejar el envío del formulario
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages([...images, ...Array.from(e.target.files)]);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Alta Propiedad Ocupada</h1>
      <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
            Dirección
          </label>
          <input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="issue">
            Problema
          </label>
          <input
            id="issue"
            type="text"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Descripción
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="images">
            Subir Imágenes
          </label>
          <input
            id="images"
            type="file"
            multiple
            onChange={handleImageChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <div className="mt-4">
            {images.map((image, index) => (
              <img key={index} src={URL.createObjectURL(image)} alt={`upload-${index}`} className="w-32 h-32 object-cover" />
            ))}
          </div>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Enviar
        </button>
      </form>
      <div className="p-4 bg-white shadow-md rounded mt-4">
        <h2 className="text-gray-700 text-sm font-bold mb-2">Mapa Interactivo</h2>
        {/* Aquí puedes integrar un mapa interactivo como Google Maps */}
        <div className="w-full h-64 bg-gray-200">Mapa</div>
      </div>
    </div>
  );
};

export default ReportProperty;

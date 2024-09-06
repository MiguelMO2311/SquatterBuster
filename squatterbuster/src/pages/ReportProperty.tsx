import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const ReportProperty: React.FC = () => {
  const [address, setAddress] = useState('');
  const [issue, setIssue] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [position, setPosition] = useState<{ lat: number, lng: number }>({ lat: 40.416775, lng: -3.703790 }); // Coordenadas iniciales (Madrid, España)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para manejar el envío del formulario
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages([...images, ...Array.from(e.target.files)]);
    }
  };

  const handleAddressChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
    try {
      const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
        params: {
          address: e.target.value,
          key: 'AIzaSyCXb91AbLRImyLSiWdcq8Xf6MCnv5iQJS4'
        }
      });
      if (response.data.results.length > 0) {
        const location = response.data.results[0].geometry.location;
        setPosition({ lat: location.lat, lng: location.lng });
      } else {
        console.error('No se encontraron resultados para la dirección proporcionada.');
      }
    } catch (error) {
      console.error('Error al geocodificar la dirección:', error);
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
            onChange={handleAddressChange}
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
        <LoadScript googleMapsApiKey="AIzaSyCXb91AbLRImyLSiWdcq8Xf6MCnv5iQJS4">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={position}
            zoom={13}
          >
            <Marker position={position} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default ReportProperty;

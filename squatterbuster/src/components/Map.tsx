import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map: React.FC = () => {
  const position: [number, number] = [40.416775, -3.703790]; // Coordenadas de ejemplo (Madrid, España)

  return (
    <MapContainer center={position} zoom={13} className="w-full h-64">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Aquí está la ubicación reportada.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;

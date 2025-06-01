
import React from 'react';

interface RouteMapProps {
  departureLocation: string;
  arrivalLocation: string;
  duration: string;
}

const RouteMap = ({ departureLocation, arrivalLocation, duration }: RouteMapProps) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-verde-escuro mb-3">Rota no Mapa</h3>
      <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
        <div className="text-center text-gray-600">
          <div className="text-lg mb-2">🗺️ Mapa da Rota</div>
          <p className="text-sm">{departureLocation} → {arrivalLocation}</p>
          <p className="text-xs mt-1">Duração: {duration}</p>
        </div>
      </div>
    </div>
  );
};

export default RouteMap;

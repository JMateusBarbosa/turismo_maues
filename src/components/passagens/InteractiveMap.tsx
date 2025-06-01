
import React from 'react';
import { MapPin } from 'lucide-react';

/**
 * Componente do mapa interativo das rotas
 * Placeholder para futura implementação de mapa real
 */
const InteractiveMap = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-verde-escuro mb-6 text-center font-serif">
          Mapa das Rotas
        </h2>
        <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-600">
            <MapPin size={48} className="mx-auto mb-4" />
            <p className="text-lg">Mapa interativo das rotas</p>
            <p className="text-sm">Manaus • Maués</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;

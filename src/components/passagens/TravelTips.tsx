
import React from 'react';

/**
 * Componente com dicas importantes para a viagem
 * Fornece informações úteis sobre o que levar e orientações gerais
 */
const TravelTips = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-verde-escuro mb-6 font-serif">
          Dicas de Viagem
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* O que levar */}
          <div>
            <h3 className="font-semibold text-verde-escuro mb-3">O que levar:</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Água e lanches para a viagem</li>
              <li>• Documentos de identificação</li>
              <li>• Roupas confortáveis</li>
              <li>• Protetor solar e repelente</li>
            </ul>
          </div>
          
          {/* Dicas importantes */}
          <div>
            <h3 className="font-semibold text-verde-escuro mb-3">Dicas importantes:</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Chegue com 1h de antecedência</li>
              <li>• Bagagem limitada conforme empresa</li>
              <li>• Crianças até 5 anos não pagam</li>
              <li>• Confirme horários na véspera</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelTips;

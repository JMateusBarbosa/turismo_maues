
import React from 'react';

/**
 * Componente de aviso sobre alterações de horários
 * Alerta importante para que usuários confirmem horários antes da viagem
 */
const WarningNotice = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-4">
      <div className="bg-yellow-300 text-gray-800 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <span className="text-2xl">⚠️</span>
          <div>
            <p className="font-medium">
              Horários sujeitos a alterações. Confirme sempre na véspera da viagem.
            </p>
            <button className="text-blue-700 hover:text-blue-900 underline text-sm mt-1">
              Mais detalhes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarningNotice;


import React from 'react';
import { Ship } from 'lucide-react';

/**
 * Componente que exibe resumo das principais rotas da Navegação PP
 * Mostra informações consolidadas sobre embarcações regulares e ajatos
 */
const RoutesSummary = () => {
  return (
    <section className="bg-[#A5D6A7]/20 rounded-xl p-6 mx-4 mt-6 shadow-md max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-verde-escuro mb-6 text-center font-serif">
        Rotas Navegação PP
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Embarcações Regulares */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center mb-3">
            <Ship className="text-verde-escuro mr-2" size={20} />
            <h3 className="font-semibold text-verde-escuro">Embarcações Regulares</h3>
          </div>
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>Maués → Manaus:</strong> Ter/Qua/Sex/Sáb/Dom 12:00h (Porto PP)</p>
            <p><strong>Manaus → Maués:</strong> Ter/Qua/Qui/Dom 17:00h | Sáb 12:00h (Balsa Amarela)</p>
            <p><strong>Duração:</strong> 19-22h | <strong>Preço:</strong> R$ 120</p>
          </div>
        </div>

        {/* Ajato (Alta Velocidade) */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center mb-3">
            <Ship className="text-verde-escuro mr-2" size={20} />
            <h3 className="font-semibold text-verde-escuro">Ajato (Alta Velocidade)</h3>
          </div>
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>Maués → Manaus:</strong> Dom/Qua 07:00h (Porto PP)</p>
            <p><strong>Manaus → Maués:</strong> Sex/Ter 07:00h (Balsa Amarela)</p>
            <p><strong>Duração:</strong> ~10h | <strong>Preço:</strong> R$ 250</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoutesSummary;

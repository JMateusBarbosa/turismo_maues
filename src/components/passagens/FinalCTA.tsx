
import React from 'react';
import { Button } from '@/components/ui/button';

/**
 * Componente de chamada final para ação
 * Direciona usuários para outras seções do site (hospedagem e passeios)
 */
const FinalCTA = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-verde-escuro to-verde-claro rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4 font-serif">
          Planeje sua estadia e passeios em Maués!
        </h2>
        <p className="mb-6 text-white/90">
          Descubra onde se hospedar e que passeios fazer na Terra do Guaraná
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            asChild
            className="bg-white text-verde-escuro hover:bg-gray-100 px-8 py-3"
          >
            <a href="/hospedagem">Ver Hospedagem</a>
          </Button>
          <Button 
            asChild
            className="bg-white text-verde-escuro hover:bg-gray-100 px-8 py-3"
          >
            <a href="/passeios">Explorar Passeios</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

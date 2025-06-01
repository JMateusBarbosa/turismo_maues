
import React from 'react';
import { Button } from '@/components/ui/button';

const FinalCallToAction = () => {
  return (
    <section className="py-16 bg-verde-escuro text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
          Pronto para reservar sua estada em Maués?
        </h2>
        
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Complete sua experiência em Maués com passagens e passeios incríveis. 
          Temos tudo que você precisa para uma viagem perfeita!
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            asChild 
            size="lg"
            className="bg-white text-verde-escuro hover:bg-gray-100 px-8 py-3 text-lg font-medium"
          >
            <a href="/passagens">
              🚢 Ver Passagens
            </a>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-verde-escuro px-8 py-3 text-lg font-medium"
          >
            <a href="/passeios">
              🌿 Explorar Passeios
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCallToAction;

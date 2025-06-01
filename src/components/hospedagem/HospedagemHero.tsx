
import React from 'react';

const HospedagemHero = () => {
  return (
    <section 
      className="relative h-[70vh] flex items-center justify-center px-4 md:px-8" 
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60"></div>
      
      <div className="relative z-10 text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 font-serif">
          🏨 Hospedagem em Maués
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Encontre hotéis e pousadas confortáveis para toda a sua viagem.
        </p>
      </div>
    </section>
  );
};

export default HospedagemHero;

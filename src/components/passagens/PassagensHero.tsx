
import React from 'react';

/**
 * Componente Hero da página de passagens
 * Exibe o título principal e introdução sobre as rotas fluviais
 */
const PassagensHero = () => {
  return (
    <section 
      className="relative h-[70vh] flex items-center justify-center px-4 md:px-8" 
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay para melhorar legibilidade do texto */}
      <div className="absolute inset-0 bg-white/60"></div>
      
      <div className="relative z-10 text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 font-serif">
          🛳️ Passagens Fluviais
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Navegação PP - Rotas regulares Manaus ↔ Maués
        </p>
      </div>
    </section>
  );
};

export default PassagensHero;

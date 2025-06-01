
import React from 'react';

const HeroSection = () => {
  return (
    <section 
      className="relative h-[80vh] flex items-center justify-center px-4 md:px-8" 
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-verde-escuro/80 to-transparent opacity-80"></div>
      
      <div className="relative z-10 text-center max-w-5xl">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-serif">
          Explore a Terra do Guaraná
        </h1>
        <p className="text-white/60 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Descubra cultura, natureza e roteiros exclusivos em Maués-AM
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/historia" className="button-primary">
            Ver História Completa
          </a>
          <a href="/pontos-turisticos" className="button-secondary">
            Explorar Pontos
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

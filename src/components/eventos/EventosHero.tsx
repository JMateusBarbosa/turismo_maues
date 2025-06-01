
import React from 'react';

/**
 * EventosHero Component
 * 
 * Hero section for the Events page with title and description
 */
const EventosHero = () => {
  return (
    <section className="bg-gradient-to-b from-verde-claro to-off-white py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-verde-escuro mb-4">
          🎉 Eventos Culturais & Religiosos
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Descubra as principais festas, manifestações culturais e celebrações que tornam 
          Maués uma cidade única durante o ano todo.
        </p>
      </div>
    </section>
  );
};

export default EventosHero;

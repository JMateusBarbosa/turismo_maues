
import React from 'react';
import { ArrowRight } from 'lucide-react';

const teasers = [
  {
    id: 'historia',
    title: 'História',
    description: 'Conheça as origens do município e sua importância na cultura do guaraná. Uma história rica e fascinante que remonta a séculos.',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    link: '/historia'
  },
  {
    id: 'pontos-turisticos',
    title: 'Pontos Turísticos',
    description: 'Descubra as belezas naturais, praias, igarapés, plantações de guaraná e os pontos imperdíveis da região.',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    link: '/pontos-turisticos'
  },
  {
    id: 'passeios',
    title: 'Passeios',
    description: 'Roteiros exclusivos para explorar a floresta amazônica, comunidades ribeirinhas e muito mais.',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    link: '/passeios'
  },
  {
    id: 'hospedagem-passagens',
    title: 'Hospedagem & Passagens',
    description: 'Encontre as melhores opções de hospedagem e como chegar à cidade pelos diversos meios de transporte.',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    doubleButtons: true
  }
];

const SectionTeasers = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-verde-escuro font-serif">Explore Maués</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {teasers.map((teaser) => (
          <div key={teaser.id} className="section-card overflow-hidden flex flex-col">
            <div className="h-52 overflow-hidden">
              <img 
                src={teaser.image} 
                alt={teaser.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-verde-escuro mb-2">{teaser.title}</h3>
              <p className="text-gray-700 mb-4 flex-grow">{teaser.description}</p>
              
              {teaser.doubleButtons ? (
                <div className="flex space-x-4">
                  <a 
                    href="/hospedagem" 
                    className="bg-verde-escuro text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors text-sm flex items-center justify-center flex-grow"
                  >
                    Hospedagem
                  </a>
                  <a 
                    href="/passagens" 
                    className="bg-vermelho-guarana text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors text-sm flex items-center justify-center flex-grow"
                  >
                    Passagens
                  </a>
                </div>
              ) : (
                <a 
                  href={teaser.link} 
                  className="text-vermelho-guarana hover:text-opacity-80 flex items-center gap-1 font-medium"
                >
                  Saiba Mais 
                  <ArrowRight size={16} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionTeasers;

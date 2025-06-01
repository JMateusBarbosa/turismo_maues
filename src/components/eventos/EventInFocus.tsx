
import React, { useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EventModal from './EventModal';

/**
 * EventInFocus Component
 * 
 * Highlights current or upcoming events
 */
const EventInFocus = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const focusEvent = {
    id: "festa-guarana-2025",
    name: "Festival do Guaraná",
    date: "15 a 25 de Maio",
    location: "Centro da Cidade",
    shortDescription: "A maior festa de Maués celebra o fruto símbolo da cidade com shows, danças típicas, comidas tradicionais e muito mais.",
    images: [
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=200&fit=crop"
    ],
    fullDescription: "O Festival do Guaraná é o evento mais aguardado do ano em Maués. Durante 10 dias, a cidade se transforma em um grande palco de celebração da cultura amazônica, com apresentações de grupos folclóricos, shows musicais, feira gastronômica e exposições sobre a história do guaraná.",
    program: [
      "15/05 - Abertura oficial com show pirotécnico",
      "16-18/05 - Apresentações culturais e folclóricas",
      "19-21/05 - Shows musicais regionais e nacionais",
      "22-24/05 - Feira gastronômica e artesanato",
      "25/05 - Encerramento com grande procissão"
    ],
    tips: "Chegue com antecedência para garantir os melhores lugares. Use roupas leves e confortáveis. Experimente as comidas típicas da região!",
    category: "Cultural"
  };

  return (
    <section className="py-12 bg-off-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 shadow-md rounded-xl p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Content */}
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-bold text-verde-escuro mb-3">
                🎊 Em Destaque: {focusEvent.name}
              </h2>
              
              <div className="flex flex-wrap gap-4 mb-4 text-gray-700">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{focusEvent.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>{focusEvent.location}</span>
                </div>
              </div>
              
              <p className="text-gray-800 mb-4 leading-relaxed">
                {focusEvent.shortDescription}
              </p>
              
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="bg-vermelho-guarana hover:bg-vermelho-guarana/90 text-white"
              >
                Saiba Mais
              </Button>
            </div>
            
            {/* Images */}
            <div className="lg:w-1/3">
              <div className="flex gap-2 overflow-x-auto">
                {focusEvent.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${focusEvent.name} - Foto ${index + 1}`}
                    className="w-24 h-24 lg:w-20 lg:h-20 object-cover rounded-lg flex-shrink-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <EventModal 
        event={focusEvent}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default EventInFocus;

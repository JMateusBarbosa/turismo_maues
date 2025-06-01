
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Events Data
 * 
 * Collection of upcoming events in Maués with their details.
 * Each event contains:
 * - id: Unique identifier
 * - title: Name of the event
 * - date: Formatted date range
 * - description: Brief overview of the event
 * - image: URL to event image
 * - link: Path to the event details page
 */
const events = [
  {
    id: 'festa-guarana',
    title: 'Festa do Guaraná',
    date: '15-22 de Maio, 2025',
    description: 'A maior celebração cultural de Maués, com apresentações, gastronomia e muito mais.',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    link: '/eventos/festa-guarana'
  },
  {
    id: 'festival-peixe',
    title: 'Festival do Peixe',
    date: '10-13 de Junho, 2025',
    description: 'Experimente os melhores pratos da culinária Amazônica e assista a competições culinárias.',
    image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    link: '/eventos/festival-peixe'
  },
  {
    id: 'exposicao-amazonia',
    title: 'Exposição Amazônia Viva',
    date: '01-30 de Julho, 2025',
    description: 'Mostra fotográfica com os mais belos cenários da floresta amazônica e sua biodiversidade.',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    link: '/eventos/amazonia-viva'
  },
  {
    id: 'festival-verao',
    title: 'Festival de Verão',
    date: '05-15 de Agosto, 2025',
    description: 'Música, arte e entretenimento nas praias de Maués, com artistas locais e regionais.',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    link: '/eventos/festival-verao'
  },
  {
    id: 'festa-cristo',
    title: 'Festa do Cristo Bom Pastor',
    date: '20-27 de Setembro, 2025',
    description: 'Celebração religiosa tradicional com procissão, missas e festividades na orla da cidade.',
    image: 'https://images.unsplash.com/photo-1519834089823-83e5f492e561?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    link: '/eventos/festa-cristo'
  },
  {
    id: 'aniversario-cidade',
    title: 'Aniversário da Cidade',
    date: '25 de Dezembro, 2025',
    description: 'Comemorações dos 191 anos de Maués, com desfile cívico, shows e atrações culturais.',
    image: 'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    link: '/eventos/aniversario-cidade'
  }
];

/**
 * EventsCarousel Component
 * 
 * Displays upcoming events in an auto-scrolling carousel with manual navigation controls.
 * Features:
 * - Automatic scrolling with 5-second interval
 * - Responsive design showing 1 card on mobile, 3 on desktop
 * - Manual navigation with previous/next arrows
 * - Indicator dots for direct navigation
 * - Visual feedback on current position
 */
const EventsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<number | null>(null);
  
  // For mobile, show one card at a time
  // For desktop, show up to 3 cards at a time
  const cardsToShow = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3;
  
  /**
   * Advances carousel to next slide
   */
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (events.length - (cardsToShow - 1)));
  };
  
  /**
   * Moves carousel to previous slide
   */
  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = events.length - (cardsToShow - 1);
      return (prev - 1 + maxIndex) % maxIndex;
    });
  };

  // Setup automatic carousel
  useEffect(() => {
    // Initialize auto-scroll timer
    timerRef.current = window.setInterval(() => {
      nextSlide();
    }, 5000); // Auto scroll every 5 seconds
    
    // Clean up timer on component unmount
    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
      }
    };
  }, [currentIndex]);

  /**
   * Handles manual navigation and resets the auto-scroll timer
   * @param {string} direction - Direction to navigate ('prev' or 'next')
   */
  const handleManualNavigation = (direction: 'prev' | 'next') => {
    // Clear existing timer
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
    }
    
    // Navigate in the requested direction
    if (direction === 'prev') {
      prevSlide();
    } else {
      nextSlide();
    }
    
    // Restart the timer
    timerRef.current = window.setInterval(() => {
      nextSlide();
    }, 5000);
  };

  // Create visible events array based on current index
  const visibleEvents = [];
  for (let i = 0; i < cardsToShow; i++) {
    const index = (currentIndex + i) % events.length;
    visibleEvents.push(events[index]);
  }
  
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-vermelho-guarana font-serif">Próximos Eventos</h2>
        
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={() => handleManualNavigation('prev')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-verde-claro transition-colors"
            aria-label="Evento anterior"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
              }}
            >
              {events.map((event) => (
                <div 
                  key={event.id}
                  className="flex-none w-full sm:w-1/2 lg:w-1/3 p-2"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-md h-full flex flex-col">
                    {/* Event Image with Date Badge */}
                    <div className="relative h-48">
                      <img 
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-verde-claro text-verde-escuro px-3 py-1 rounded-full text-sm font-medium">
                        {event.date}
                      </div>
                    </div>
                    
                    {/* Event Details with Flexbox for Button Positioning */}
                    <div className="p-4 flex flex-col h-full">
                      {/* Event Title and Description */}
                      <div className="flex-grow">
                        <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                      </div>
                      
                      {/* Details Button - Always at Bottom */}
                      <div className="mt-auto">
                        <a 
                          href={event.link}
                          className="block w-full bg-vermelho-guarana text-white text-center py-2 rounded-lg hover:bg-opacity-90 transition-colors"
                        >
                          Detalhes
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={() => handleManualNavigation('next')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-verde-claro transition-colors"
            aria-label="Próximo evento"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Carousel Indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: Math.max(1, events.length - (cardsToShow - 1)) }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                if (timerRef.current !== null) {
                  clearInterval(timerRef.current);
                }
                timerRef.current = window.setInterval(() => {
                  nextSlide();
                }, 5000);
              }}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-vermelho-guarana' : 'bg-gray-300'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsCarousel;

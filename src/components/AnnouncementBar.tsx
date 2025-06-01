
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const announcements = [
  { 
    text: "🎉 Festa do Guaraná começa em 15 de maio!", 
    link: "/eventos/festa-guarana" 
  },
  { 
    text: "🚢 Nova rota Manaus-Maués a partir de R$ 80!", 
    link: "/passagens/manaus-maues" 
  },
];

const AnnouncementBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<number | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);

  const nextAnnouncement = () => {
    setCurrentIndex(prev => (prev + 1) % announcements.length);
  };

  const prevAnnouncement = () => {
    setCurrentIndex(prev => (prev - 1 + announcements.length) % announcements.length);
  };

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = window.setInterval(() => {
      nextAnnouncement();
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const handleNavigationClick = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      prevAnnouncement();
    } else {
      nextAnnouncement();
    }
    resetTimer();
  };

  return (
    <div
      ref={barRef}
      className="relative w-full h-8 bg-verde-claro shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-live="polite"
    >
      <div className="max-w-5xl mx-auto h-full flex items-center justify-center relative px-12">
        <button 
          onClick={() => handleNavigationClick('prev')}
          className={cn(
            "absolute left-2 text-[#004d00] transition-opacity duration-200",
            isHovered ? "opacity-100" : "opacity-0 md:opacity-60"
          )}
          aria-label="Mensagem anterior"
        >
          <ChevronLeft size={20} />
        </button>
        
        <a 
          href={announcements[currentIndex].link}
          className="text-center text-sm md:text-base font-medium text-[#004d00] font-serif hover:text-vermelho-guarana transition-colors cursor-pointer animate-fade-in"
        >
          {announcements[currentIndex].text}
        </a>
        
        <button 
          onClick={() => handleNavigationClick('next')}
          className={cn(
            "absolute right-2 text-[#004d00] transition-opacity duration-200",
            isHovered ? "opacity-100" : "opacity-0 md:opacity-60"
          )}
          aria-label="Próxima mensagem"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;

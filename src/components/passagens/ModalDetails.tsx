
import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import PhotoCarousel from './modal/PhotoCarousel';
import RouteDescription from './modal/RouteDescription';
import ScheduleTable from './modal/ScheduleTable';
import RouteMap from './modal/RouteMap';
import ModalFooter from './modal/ModalFooter';

interface RouteData {
  id: number;
  company: string;
  route: string;
  type: string;
  vessel: string;
  departure: string;
  arrival: string;
  duration: string;
  price: string;
  days: string[];
  departureLocation: string;
  arrivalLocation: string;
  whatsapp: string;
  phone: string;
  image: string;
}

interface ModalDetailsProps {
  route: RouteData;
  isOpen: boolean;
  onClose: () => void;
}

const ModalDetails = ({ route, isOpen, onClose }: ModalDetailsProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Mock images for carousel - in real app, this would come from route data
  const images = [
    route.image,
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1570717170846-c8637d6a7f8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1541869545115-e12dee40fe28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1570717170846-c8637d6a7f8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ];

  // Focus trap and keyboard handling
  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
        
        // Focus trap
        if (e.key === 'Tab') {
          const focusableElements = modalRef.current?.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          
          if (focusableElements && focusableElements.length > 0) {
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
            
            if (e.shiftKey) {
              if (document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
              }
            } else {
              if (document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
              }
            }
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen, onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleViewFullPage = () => {
    console.log('Ir para página completa de detalhes', route);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 transition-opacity duration-200"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        ref={modalRef}
        className="max-w-2xl w-full bg-white rounded-2xl shadow-xl transform transition-transform duration-300 max-h-[90vh] overflow-y-auto"
        style={{ transform: isOpen ? 'translateY(0)' : 'translateY(-10px)' }}
      >
        {/* Cabeçalho do Modal */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-3">
            <h2 id="modal-title" className="text-2xl font-bold text-green-800">
              {route.vessel}
            </h2>
            <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              {route.route}
            </span>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="w-6 h-6 text-gray-600 hover:text-vermelho-guarana transition-colors duration-150"
            aria-label="Fechar detalhes"
          >
            <X size={24} />
          </button>
        </div>

        {/* Corpo do Modal */}
        <div className="p-6 space-y-6">
          {/* Galeria de Fotos */}
          <PhotoCarousel images={images} vesselName={route.vessel} />

          {/* Descrição Completa */}
          <RouteDescription 
            vessel={route.vessel}
            company={route.company}
            type={route.type}
            departureLocation={route.departureLocation}
            arrivalLocation={route.arrivalLocation}
          />

          {/* Tabela de Horários & Preços */}
          <ScheduleTable 
            days={route.days}
            departure={route.departure}
            arrival={route.arrival}
            price={route.price}
          />

          {/* Mapa Rápido */}
          <RouteMap 
            departureLocation={route.departureLocation}
            arrivalLocation={route.arrivalLocation}
            duration={route.duration}
          />
        </div>

        {/* Rodapé do Modal */}
        <ModalFooter 
          whatsapp={route.whatsapp}
          company={route.company}
          onViewFullPage={handleViewFullPage}
        />
      </div>
    </div>
  );
};

export default ModalDetails;

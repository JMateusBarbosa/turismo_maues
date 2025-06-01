
import React from 'react';
import { Calendar, MapPin, Info, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';


interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
  fullDescription: string;
  images: string[];
  category: string;
  program: string[];
  tips: string;
}

interface EventModalProps {
  event: Event;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * EventModal Component
 * 
 * Detailed modal view for individual events
 */
const EventModal = ({ event, isOpen, onClose }: EventModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto [&>button[data-state=closed]]:hidden [&>button[data-state=open]]:hidden">

        {/* Custom close button with better visibility */}
        <DialogClose asChild>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg border border-gray-200 transition-all duration-200 hover:scale-110"
          aria-label="Fechar modal"
        >
          <X size={30} className="text-gray-600 hover:text-gray-800" />
        </button>
      </DialogClose>

        
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-verde-escuro pr-12">
            {event.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Event Info */}
          <div className="flex flex-wrap gap-4 text-gray-700">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>{event.location}</span>
            </div>
          </div>
          
          {/* Images Gallery */}
          {event.images.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {event.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${event.name} - ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              ))}
            </div>
          )}
          
          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-verde-escuro mb-3">Descrição</h3>
            <p className="text-gray-800 leading-relaxed">{event.fullDescription}</p>
          </div>
          
          {/* Program */}
          {event.program.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-verde-escuro mb-3">Programação</h3>
              <ul className="space-y-2">
                {event.program.map((item, index) => (
                  <li key={index} className="text-gray-800 flex items-start gap-2">
                    <span className="text-vermelho-guarana">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Tips */}
          {event.tips && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <Info size={18} className="text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-800 mb-1">Dicas para Turistas</h4>
                  <p className="text-blue-700 text-sm">{event.tips}</p>
                </div>
              </div>
            </div>
          )}
          
          {/* Map Placeholder */}
          <div>
            <h3 className="text-lg font-semibold text-verde-escuro mb-3">Localização</h3>
            <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin size={24} className="mx-auto mb-2" />
                <p className="text-sm">Mapa de {event.location}</p>
                <p className="text-xs">(Integração com Google Maps em breve)</p>
              </div>
            </div>
          </div>
          
          {/* Action Button */}
          <div className="flex justify-center">
            <Button 
              className="bg-vermelho-guarana hover:bg-vermelho-guarana/90 text-white"
              onClick={() => alert('Página completa em desenvolvimento')}
            >
              Ver Página Completa
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventModal;

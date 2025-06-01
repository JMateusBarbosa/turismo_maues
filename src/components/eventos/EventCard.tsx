
import React, { useState } from 'react';
import { Calendar, MapPin, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import EventModal from './EventModal';

interface Event {
  id: string;
  name: string;
  date: string;
  month: string;
  location: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  category: string;
  program: string[];
  tips: string;
  isToday?: boolean;
  isFree?: boolean;
}

interface EventCardProps {
  event: Event;
}

/**
 * EventCard Component
 * 
 * Individual event card with basic information and modal trigger
 */
const EventCard = ({ event }: EventCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Cultural': return 'bg-blue-100 text-blue-800';
      case 'Religioso': return 'bg-purple-100 text-purple-800';
      case 'Esportivo': return 'bg-green-100 text-green-800';
      case 'Infantil': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <Card className="h-full hover:shadow-lg transition-shadow duration-200 flex flex-col">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-verde-escuro line-clamp-2">
              {event.name}
            </h3>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
              {event.category}
            </span>
          </div>
          
          {event.isToday && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-2 mb-2">
              <p className="text-red-700 text-sm font-medium">
                ⚠️ Este evento acontece hoje!
              </p>
            </div>
          )}
        </CardHeader>
        
        <CardContent className="pb-3 flex-1">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar size={16} />
              <span className="text-sm">{event.date}</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={16} />
              <span className="text-sm">{event.location}</span>
            </div>
            
            <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
              {event.shortDescription}
            </p>
            
            {event.images.length > 0 && (
              <div className="flex gap-1 overflow-x-auto">
                {event.images.slice(0, 3).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${event.name} - ${index + 1}`}
                    className="w-16 h-16 object-cover rounded flex-shrink-0"
                  />
                ))}
              </div>
            )}
            
            {event.isFree && (
              <div className="flex items-center gap-2">
                <Tag size={16} className="text-green-600" />
                <span className="text-green-600 text-sm font-medium">Entrada Gratuita</span>
              </div>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="mt-auto">
          <Button 
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-verde-escuro hover:bg-verde-escuro/90 text-white"
          >
            Ver Detalhes
          </Button>
        </CardFooter>
      </Card>
      
      <EventModal 
        event={event}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default EventCard;

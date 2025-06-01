
import React, { useState } from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ModalDetails from './ModalDetails';

// Interface para definir a estrutura de uma rota
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

interface RouteCardProps {
  route: RouteData;
}

/**
 * Componente que renderiza um card individual de rota
 * Exibe todas as informações da embarcação e botões de contato
 */
const RouteCard = ({ route }: RouteCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 border-marrom-terra">
        {/* Imagem da embarcação com badges informativos */}
        <div className="relative">
          <img
            src={route.image}
            alt={`${route.company} - ${route.vessel}`}
            className="w-full h-48 object-cover"
          />
          {/* Badge da rota */}
          <div className="absolute top-3 left-3">
            <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              {route.route}
            </span>
          </div>
          {/* Badge do tipo de embarcação */}
          <div className="absolute top-3 right-3">
            <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
              {route.type}
            </span>
          </div>
        </div>
        
        {/* Cabeçalho do card */}
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-verde-escuro">
            {route.vessel}
          </CardTitle>
          <p className="text-gray-600">{route.company}</p>
        </CardHeader>
        
        {/* Conteúdo principal do card */}
        <CardContent className="space-y-3">
          {/* Horários de saída e chegada */}
          <div className="flex items-center text-sm text-gray-700">
            <Clock size={16} className="mr-2 text-verde-escuro" />
            <span>Saída: {route.departure} | Chegada: {route.arrival}</span>
          </div>
          
          {/* Duração da viagem */}
          <div className="flex items-center text-sm text-gray-700">
            <span className="mr-2">⏱️</span>
            <span>Duração: {route.duration}</span>
          </div>
          
          {/* Locais de partida e chegada */}
          <div className="flex items-center text-sm text-gray-700">
            <MapPin size={16} className="mr-2 text-verde-escuro" />
            <span>{route.departureLocation} → {route.arrivalLocation}</span>
          </div>
          
          {/* Preço da passagem */}
          <div className="text-lg font-semibold text-vermelho-guarana">
            {route.price}/pessoa
          </div>
          
          {/* Dias de operação */}
          <div className="text-sm text-gray-600">
            <strong>Dias:</strong> {route.days.join(", ")}
          </div>
          
          {/* Botões de contato */}
          <div className="flex space-x-2 pt-3">
            <Button
              asChild
              className="flex-1 bg-green-600 hover:bg-green-700"
              size="sm"
            >
              <a
                href={`https://wa.me/${route.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="sm"
              className="flex-1"
            >
              <a href={`tel:${route.phone}`}>
                <Phone size={16} className="mr-1" />
                Ligar
              </a>
            </Button>
          </div>
          
          {/* Botão principal de detalhes */}
          <Button 
            onClick={openModal}
            className="w-full bg-vermelho-guarana hover:bg-vermelho-guarana/90 text-white rounded-full shadow-md"
          >
            Ver Detalhes
          </Button>
        </CardContent>
      </Card>

      {/* Modal de Detalhes */}
      <ModalDetails 
        route={route} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </>
  );
};

export default RouteCard;

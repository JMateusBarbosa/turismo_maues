
import React from 'react';
import RouteCard from './RouteCard';

// Interface para os dados das rotas - centralizada para reuso
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

interface RoutesGridProps {
  filteredRoutes: RouteData[];
}

/**
 * Componente que renderiza a grade de cards das rotas
 * Recebe as rotas já filtradas e as exibe em um layout responsivo
 */
const RoutesGrid = ({ filteredRoutes }: RoutesGridProps) => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRoutes.map(route => (
          <RouteCard key={route.id} route={route} />
        ))}
      </div>
    </section>
  );
};

export default RoutesGrid;

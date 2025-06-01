
import React, { useState } from 'react';
import Header from '../components/Header';
import AnnouncementBar from '../components/AnnouncementBar';
import Footer from '../components/Footer';

// Importação dos componentes refatorados
import PassagensHero from '../components/passagens/PassagensHero';
import RoutesSummary from '../components/passagens/RoutesSummary';
import SearchFilters from '../components/passagens/SearchFilters';
import RoutesGrid from '../components/passagens/RoutesGrid';
import InteractiveMap from '../components/passagens/InteractiveMap';
import WarningNotice from '../components/passagens/WarningNotice';
import TravelTips from '../components/passagens/TravelTips';
import FinalCTA from '../components/passagens/FinalCTA';

// Importação dos dados centralizados
import { routes, routeOptions, typeOptions, dayOptions, type RouteData } from '../data/routesData';

/**
 * Página principal de Passagens Fluviais
 * Organizada em componentes modulares para melhor manutenibilidade
 */
const Passagens = () => {
  // Estados para controle de filtros e busca
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRoute, setSelectedRoute] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  /**
   * Função para filtrar as rotas baseada nos critérios selecionados
   * @returns Array de rotas filtradas
   */
  const filteredRoutes = routes.filter((route: RouteData) => {
    // Filtro por texto de busca (empresa, tipo ou embarcação)
    const matchesSearch = route.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         route.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         route.vessel.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filtro por rota específica
    const matchesRoute = !selectedRoute || route.route === selectedRoute;
    
    // Filtro por tipo de embarcação
    const matchesType = !selectedType || route.type === selectedType;
    
    // Filtro por dias da semana
    const matchesDays = selectedDays.length === 0 || 
                       selectedDays.some(day => route.days.includes(day));
    
    return matchesSearch && matchesRoute && matchesType && matchesDays;
  });

  return (
    <>
      <Header />
      <AnnouncementBar />
      
      <main className="min-h-screen bg-off-white">
        {/* Seção Hero com título principal */}
        <PassagensHero />

        {/* Resumo das principais rotas */}
        <RoutesSummary />

        {/* Seção de busca e filtros */}
        <SearchFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedRoute={selectedRoute}
          setSelectedRoute={setSelectedRoute}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          selectedDays={selectedDays}
          setSelectedDays={setSelectedDays}
          routeOptions={routeOptions}
          typeOptions={typeOptions}
          dayOptions={dayOptions}
        />

        {/* Grade de cards das embarcações */}
        <RoutesGrid filteredRoutes={filteredRoutes} />

        {/* Mapa interativo das rotas */}
        <InteractiveMap />

        {/* Aviso sobre alterações de horários */}
        <WarningNotice />

        {/* Dicas de viagem */}
        <TravelTips />

        {/* Chamada final para outras seções */}
        <FinalCTA />
      </main>
      
      <Footer />
    </>
  );
};

export default Passagens;

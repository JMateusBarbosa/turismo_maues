
import React from 'react';
import { Search, Filter } from 'lucide-react';

interface SearchFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedRoute: string;
  setSelectedRoute: (route: string) => void;
  selectedType: string;
  setSelectedType: (type: string) => void;
  selectedDays: string[];
  setSelectedDays: (days: string[]) => void;
  routeOptions: string[];
  typeOptions: string[];
  dayOptions: string[];
}

/**
 * Componente de busca e filtros para as passagens
 * Permite filtrar rotas por texto, rota, tipo e dias da semana
 */
const SearchFilters = ({
  searchTerm,
  setSearchTerm,
  selectedRoute,
  setSelectedRoute,
  selectedType,
  setSelectedType,
  selectedDays,
  setSelectedDays,
  routeOptions,
  typeOptions,
  dayOptions
}: SearchFiltersProps) => {
  
  /**
   * Alterna a seleção de um dia da semana
   * @param day - Dia da semana a ser alternado
   */
  const toggleDay = (day: string) => {
    setSelectedDays(
      selectedDays.includes(day) 
        ? selectedDays.filter(d => d !== day)
        : [...selectedDays, day]
    );
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-verde-escuro mb-4">
          Buscar Passagens
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Campo de busca por texto */}
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Buscar embarcação ou tipo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verde-escuro focus:border-transparent"
            />
          </div>

          {/* Filtro por rota */}
          <select
            value={selectedRoute}
            onChange={(e) => setSelectedRoute(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verde-escuro focus:border-transparent"
          >
            <option value="">Todas as rotas</option>
            {routeOptions.map(route => (
              <option key={route} value={route}>{route}</option>
            ))}
          </select>

          {/* Filtro por tipo de embarcação */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verde-escuro focus:border-transparent"
          >
            <option value="">Todos os tipos</option>
            {typeOptions.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>

          {/* Filtro por dias da semana */}
          <div className="relative">
            <details className="cursor-pointer">
              <summary className="px-4 py-2 border border-gray-300 rounded-lg bg-white list-none flex items-center justify-between">
                <span>Dias da semana</span>
                <Filter size={18} className="text-gray-400" />
              </summary>
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg mt-1 p-3 shadow-lg z-10">
                <div className="grid grid-cols-2 gap-2">
                  {dayOptions.map(day => (
                    <label key={day} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedDays.includes(day)}
                        onChange={() => toggleDay(day)}
                        className="text-verde-escuro focus:ring-verde-escuro"
                      />
                      <span className="text-sm">{day}</span>
                    </label>
                  ))}
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFilters;

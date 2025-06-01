
import React, { useState } from 'react';
import EventCard from './EventCard';
import EventsFilter from './EventsFilter';
import { eventsData } from '../../data/eventsData';

/**
 * EventsList Component
 * 
 * Displays a filterable list of events throughout the year
 */
const EventsList = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedMonth, setSelectedMonth] = useState('Todos');

  const filteredEvents = eventsData.filter(event => {
    const categoryMatch = selectedCategory === 'Todos' || event.category === selectedCategory;
    const monthMatch = selectedMonth === 'Todos' || event.month === selectedMonth;
    return categoryMatch && monthMatch;
  });

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-verde-escuro text-center mb-8">
          📅 Calendário de Eventos
        </h2>
        
        <EventsFilter 
          selectedCategory={selectedCategory}
          selectedMonth={selectedMonth}
          onCategoryChange={setSelectedCategory}
          onMonthChange={setSelectedMonth}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              Nenhum evento encontrado para os filtros selecionados.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsList;

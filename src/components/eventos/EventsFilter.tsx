
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface EventsFilterProps {
  selectedCategory: string;
  selectedMonth: string;
  onCategoryChange: (category: string) => void;
  onMonthChange: (month: string) => void;
}

/**
 * EventsFilter Component
 * 
 * Filter controls for events by category and month
 */
const EventsFilter = ({ 
  selectedCategory, 
  selectedMonth, 
  onCategoryChange, 
  onMonthChange 
}: EventsFilterProps) => {
  const categories = ['Todos', 'Cultural', 'Religioso', 'Esportivo', 'Infantil'];
  const months = [
    'Todos', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Filtrar por Categoria
        </label>
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione uma categoria" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Filtrar por Mês
        </label>
        <Select value={selectedMonth} onValueChange={onMonthChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione um mês" />
          </SelectTrigger>
          <SelectContent>
            {months.map((month) => (
              <SelectItem key={month} value={month}>
                {month}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default EventsFilter;

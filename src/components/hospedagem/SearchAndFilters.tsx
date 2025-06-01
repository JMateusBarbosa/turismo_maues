
import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';

interface SearchAndFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filters: {
    priceRange: number[];
    type: string;
    rating: number;
  };
  setFilters: (filters: any) => void;
}

const SearchAndFilters = ({ searchTerm, setSearchTerm, filters, setFilters }: SearchAndFiltersProps) => {
  const [tempFilters, setTempFilters] = useState(filters);

  const accommodationTypes = [
    { value: '', label: 'Todos os tipos' },
    { value: 'hotel', label: 'Hotel' },
    { value: 'pousada', label: 'Pousada' },
    { value: 'ecolodge', label: 'Ecolodge' }
  ];

  const handleApplyFilters = () => {
    setFilters(tempFilters);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <button
        key={i}
        onClick={() => setTempFilters({ ...tempFilters, rating: i + 1 })}
        className={`text-2xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </button>
    ));
  };

  return (
    <section className="bg-white border-b border-gray-200 py-6">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              placeholder="Buscar nome ou bairro..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-gray-300 focus:border-verde-escuro"
            />
          </div>

          {/* Filters Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 border-verde-escuro text-verde-escuro hover:bg-verde-escuro hover:text-white">
                <Filter size={20} />
                Filtros
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-verde-escuro">Filtros de Busca</SheetTitle>
              </SheetHeader>
              
              <div className="mt-6 space-y-6">
                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Faixa de Preço: R${tempFilters.priceRange[0]} - R${tempFilters.priceRange[1]}
                  </label>
                  <Slider
                    value={tempFilters.priceRange}
                    onValueChange={(value) => setTempFilters({ ...tempFilters, priceRange: value })}
                    min={50}
                    max={500}
                    step={10}
                    className="w-full"
                  />
                </div>

                {/* Accommodation Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Tipo de Hospedagem
                  </label>
                  <div className="space-y-2">
                    {accommodationTypes.map((type) => (
                      <label key={type.value} className="flex items-center">
                        <input
                          type="radio"
                          value={type.value}
                          checked={tempFilters.type === type.value}
                          onChange={(e) => setTempFilters({ ...tempFilters, type: e.target.value })}
                          className="mr-2 text-verde-escuro focus:ring-verde-escuro"
                        />
                        {type.label}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Avaliação Mínima
                  </label>
                  <div className="flex gap-1">
                    {renderStars(tempFilters.rating)}
                  </div>
                </div>

                {/* Apply Button */}
                <SheetClose asChild>
                  <Button 
                    onClick={handleApplyFilters}
                    className="w-full bg-verde-escuro hover:bg-verde-escuro/90 text-white"
                  >
                    Aplicar Filtros
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
};

export default SearchAndFilters;

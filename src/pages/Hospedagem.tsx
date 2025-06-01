
import React, { useState } from 'react';
import Header from '../components/Header';
import AnnouncementBar from '../components/AnnouncementBar';
import Footer from '../components/Footer';
import HospedagemHero from '../components/hospedagem/HospedagemHero';
import SearchAndFilters from '../components/hospedagem/SearchAndFilters';
import AccommodationGrid from '../components/hospedagem/AccommodationGrid';
import InteractiveMap from '../components/hospedagem/InteractiveMap';
import PromotionsSection from '../components/hospedagem/PromotionsSection';
import TestimonialsSection from '../components/hospedagem/TestimonialsSection';
import FinalCallToAction from '../components/hospedagem/FinalCallToAction';

const Hospedagem = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    priceRange: [50, 500],
    type: '',
    rating: 0
  });

  return (
    <>
      <Header />
      <AnnouncementBar />
      <main className="min-h-screen bg-off-white">
        <HospedagemHero />
        <SearchAndFilters 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filters={filters}
          setFilters={setFilters}
        />
        <AccommodationGrid 
          searchTerm={searchTerm}
          filters={filters}
        />
        <InteractiveMap />
        <PromotionsSection />
        <TestimonialsSection />
        <FinalCallToAction />
      </main>
      <Footer />
    </>
  );
};

export default Hospedagem;

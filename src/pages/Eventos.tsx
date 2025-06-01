
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EventosHero from '../components/eventos/EventosHero';
import EventInFocus from '../components/eventos/EventInFocus';
import EventsList from '../components/eventos/EventsList';
import EventsGallery from '../components/eventos/EventsGallery';

/**
 * Eventos Page Component
 * 
 * Displays cultural and religious events throughout the year in Maués.
 * Features highlighted events, chronological listings, and past event galleries.
 */
const Eventos = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <EventosHero />
        <EventInFocus />
        <EventsList />
        <EventsGallery />
      </main>
      
      <Footer />
    </div>
  );
};

export default Eventos;

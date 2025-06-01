
import React from 'react';
import Header from '../components/Header';
import AnnouncementBar from '../components/AnnouncementBar';
import HeroSection from '../components/HeroSection';
import SectionTeasers from '../components/SectionTeasers';
import EventsCarousel from '../components/EventsCarousel';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

/**
 * Index (Homepage) Component
 * 
 * The main landing page for the Maués-AM tourism website.
 * Assembles all major page sections in their display order:
 * 
 * 1. Header - Main navigation with city logo
 * 2. AnnouncementBar - Rotating promotional messages
 * 3. HeroSection - Main visual showcase with call-to-action buttons
 * 4. SectionTeasers - Preview cards of main site sections
 * 5. EventsCarousel - Upcoming events in a auto-scrolling display
 * 6. Newsletter - Email subscription form
 * 7. Footer - Site map, contact info, and legal information
 * 
 * The structure follows a vertical stack layout using Flexbox
 * for proper spacing and responsive behavior.
 */
const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <AnnouncementBar />
      <main>
        <HeroSection />
        <SectionTeasers />
        <EventsCarousel />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

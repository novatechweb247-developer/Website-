import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BeautyConsultation } from './components/BeautyConsultation';
import { LocationSection } from './components/LocationSection';
import { BookingContact } from './components/BookingContact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1817] flex flex-col font-sans selection:bg-[#E8D5C8] selection:text-[#1A1817]">
      {/* Preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Main Page Layout */}
      <Header />
      
      <main className="flex-1">
        <Hero />
        <Introduction />
        <Services />
        <Gallery />
        <WhyChooseUs />
        <BeautyConsultation />
        <LocationSection />
        <BookingContact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

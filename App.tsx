import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VideoSection } from './components/VideoSection';
import { TrustedBy } from './components/TrustedBy';
import { AgencyDescription } from './components/AgencyDescription';
import { OurWorks } from './components/OurWorks';
import { HowWeWork } from './components/HowWeWork';
import { TalentShowcase } from './components/TalentShowcase';
import { Testimonials } from './components/Testimonials';
import { WhyChooseUs } from './components/WhyChooseUs';
import { WhatWeDo } from './components/WhatWeDo';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';

function App() {
  return (
    <>
      <Preloader />
      <div className="min-h-screen bg-white">
        <Navbar />
      <main>
        <div className="relative">
          <Hero />
          {/* Video Section acts as the bridge between Hero and TrustedBy */}
          <VideoSection />
          <TrustedBy />
        </div>
        <AgencyDescription />
        <OurWorks />
        <HowWeWork />
        <TalentShowcase />
        <Testimonials />
        <WhyChooseUs />
        <CTASection />
      </main>
      <Footer />
      
      {/* Floating Language Switcher Mockup */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-l-xl shadow-xl z-50 cursor-pointer hover:pr-4 transition-all border border-gray-100 hidden md:block">
         <span className="font-bold text-teal-600">文A</span>
      </div>
    </div>
    </>
  );
}

export default App;
import React, { useEffect, useState } from 'react';
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
import { CaseStudyPage } from './pages/CaseStudyPage';
import { CreativeInfrastructurePage } from './pages/CreativeInfrastructurePage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/case-study/')) {
        setCurrentPage('case-study');
      } else if (hash === '#/creative-infrastructure') {
        setCurrentPage('creative-infrastructure');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentPage === 'case-study') {
    return <CaseStudyPage />;
  }

  if (currentPage === 'creative-infrastructure') {
    return <CreativeInfrastructurePage />;
  }

  return (
    <>
      <Preloader />
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <div id="home" className="relative">
            <Hero />
            {/* Video Section acts as the bridge between Hero and TrustedBy */}
            <VideoSection />
            <TrustedBy />
          </div>
          <div id="about">
            <AgencyDescription />
          </div>
          <div id="work">
            <OurWorks />
          </div>
          <div id="services">
            <HowWeWork />
          </div>
          <div id="talent">
            <TalentShowcase />
          </div>
          <Testimonials />
          <WhyChooseUs />
          {/* <CTASection /> */}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;

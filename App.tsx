import React, { useEffect, useRef, useState } from 'react';
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
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { CreativeInfrastructurePage } from './pages/CreativeInfrastructurePage';

type Page = 'home' | 'case-study' | 'creative-infrastructure';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const savedScrollPos = useRef<number>(0);

  // Only handle hash routing for case-study (keep existing behaviour)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/case-study/')) {
        setCurrentPage('case-study');
      } else if (currentPage === 'case-study') {
        // Hash changed away from case-study → go home
        setCurrentPage('home');
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentPage]);

  const navigateToCreativeInfra = () => {
    savedScrollPos.current = window.scrollY;
    setCurrentPage('creative-infrastructure');
    // Instant scroll to top — no jarring animation
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  const goBackFromCreativeInfra = () => {
    setCurrentPage('home');
    // After React re-renders the home page, restore the scroll position
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: savedScrollPos.current, behavior: 'instant' as ScrollBehavior });
      });
    });
  };

  if (currentPage === 'case-study') {
    return <CaseStudyPage />;
  }

  if (currentPage === 'creative-infrastructure') {
    return <CreativeInfrastructurePage onBack={goBackFromCreativeInfra} />;
  }

  return (
    <>
      <Preloader />
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <div id="home" className="relative">
            <Hero />
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
            <HowWeWork onNavigateToInfrastructure={navigateToCreativeInfra} />
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

import React, { useEffect, useRef, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VideoSection } from './components/VideoSection';
import { TrustedBy } from './components/TrustedBy';
import { AgencyDescription } from './components/AgencyDescription';
import { OurWorks } from './components/OurWorks';
import { HowWeWork } from './components/HowWeWork';
import { ToolsAndWorkflows } from './components/ToolsAndWorkflows';
import { TalentShowcase } from './components/TalentShowcase';
import { Testimonials } from './components/Testimonials';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CTASection } from './components/CTASection';
import { HomeFAQ } from './components/HomeFAQ';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { CreativeInfrastructurePage } from './pages/CreativeInfrastructurePage';
import { FAQPage } from './pages/FAQPage';
import { PackagesPage } from './pages/PackagesPage';

type Page = 'home' | 'case-study' | 'creative-infrastructure' | 'faq' | 'packages';

// Derive initial page from URL path
function getPageFromPath(path: string): Page {
  if (path.startsWith('/creative-infrastructure')) return 'creative-infrastructure';
  if (path.startsWith('/packages')) return 'packages';
  if (path.startsWith('/faq')) return 'faq';
  if (path.startsWith('/case-study')) return 'case-study';
  return 'home';
}

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(() =>
    getPageFromPath(window.location.pathname)
  );
  const savedScrollPos = useRef<number>(0);

  // Keep browser URL in sync with page state
  useEffect(() => {
    const pathMap: Record<Page, string> = {
      'home': '/',
      'creative-infrastructure': '/creative-infrastructure',
      'faq': '/faq',
      'packages': '/packages',
      'case-study': window.location.pathname.startsWith('/case-study')
        ? window.location.pathname
        : '/case-study',
    };
    const newPath = pathMap[currentPage];
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
    }
  }, [currentPage]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateHomeToSection = (sectionId: string) => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    // After home renders, scroll to the section
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const navigateToFAQ = () => {
    savedScrollPos.current = window.scrollY;
    setCurrentPage('faq');
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  const goBackFromFAQ = () => {
    setCurrentPage('home');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: savedScrollPos.current, behavior: 'instant' as ScrollBehavior });
      });
    });
  };

  const navigateToCreativeInfra = () => {
    savedScrollPos.current = window.scrollY;
    setCurrentPage('creative-infrastructure');
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  const goBackFromCreativeInfra = () => {
    setCurrentPage('home');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: savedScrollPos.current, behavior: 'instant' as ScrollBehavior });
      });
    });
  };

  if (currentPage === 'case-study') return <CaseStudyPage />;
  if (currentPage === 'packages') return <PackagesPage />;
  if (currentPage === 'faq') return <FAQPage onBack={goBackFromFAQ} onNavigateToFAQ={navigateToFAQ} onNavigateHome={goBackFromFAQ} onNavigateToSection={navigateHomeToSection} />;
  if (currentPage === 'creative-infrastructure') {
    return <CreativeInfrastructurePage onBack={goBackFromCreativeInfra} onNavigateToFAQ={navigateToFAQ} onNavigateHome={goBackFromCreativeInfra} onNavigateToSection={navigateHomeToSection} />;
  }

  return (
    <>
      <Preloader />
      <div className="min-h-screen bg-white">
        <Navbar onNavigateToFAQ={navigateToFAQ} />
        <main>
          <div id="home" className="relative">
            <Hero />
            <VideoSection />
            <TrustedBy />
          </div>
          <div id="about"><AgencyDescription /></div>
          <div id="work"><OurWorks /></div>
          <div id="services">
            <HowWeWork onNavigateToInfrastructure={navigateToCreativeInfra} />
          </div>
          <ToolsAndWorkflows />
          <div id="talent"><TalentShowcase /></div>
          <Testimonials />
          <WhyChooseUs />
          <HomeFAQ onNavigateToFAQ={navigateToFAQ} />
          <CTASection />
        </main>
        <Footer onNavigateToFAQ={navigateToFAQ} />
      </div>
    </>
  );
}

export default App;

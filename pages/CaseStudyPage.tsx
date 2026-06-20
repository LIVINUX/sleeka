import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CaseStudyDetail } from '../components/CaseStudyDetail';
import { PagePreloader } from '../components/PagePreloader';
import { getCaseStudyById, CaseStudy } from '../data/caseStudies';

interface CaseStudyPageProps {
  onBack?: () => void;
  onNavigateToFAQ?: () => void;
  onNavigateHome?: () => void;
  onNavigateToSection?: (sectionId: string) => void;
  onNavigateToPackages?: () => void;
  onNavigateToPrivacy?: () => void;
  onNavigateToTerms?: () => void;
}

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({
  onBack,
  onNavigateToFAQ,
  onNavigateHome,
  onNavigateToSection,
  onNavigateToPackages,
  onNavigateToPrivacy,
  onNavigateToTerms,
}) => {
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);

  useEffect(() => {
    // Support both path-based (/case-study/premiabn) and hash-based (#/case-study/premiabn)
    const path = window.location.pathname;
    const hash = window.location.hash;
    let id = '';
    if (path.startsWith('/case-study/')) {
      id = path.replace('/case-study/', '');
    } else if (hash.includes('/case-study/')) {
      id = hash.replace('#/case-study/', '');
    }
    const study = getCaseStudyById(id);
    if (study) {
      setCaseStudy(study);
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    } else if (onNavigateHome) {
      onNavigateHome();
    }
  }, []);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-[#5c0386] flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <PagePreloader />
      <Navbar
        forceColored
        onNavigateToFAQ={onNavigateToFAQ}
        onNavigateHome={onNavigateHome}
        onNavigateToSection={onNavigateToSection}
        onNavigateToPackages={onNavigateToPackages}
      />
      <CaseStudyDetail
        title={caseStudy.title}
        subtitle={caseStudy.subtitle}
        tags={caseStudy.tags}
        overview={caseStudy.overview}
        problem={caseStudy.problem}
        solution={caseStudy.solution}
        results={caseStudy.results}
        image={caseStudy.image}
        showHeroImage={caseStudy.showHeroImage}
        businessImpact={caseStudy.businessImpact}
        introVideo={caseStudy.introVideo}
        videos={caseStudy.videos}
        finalVideo={caseStudy.finalVideo}
        additionalSections={caseStudy.additionalSections}
      />
      <Footer
        onNavigateToFAQ={onNavigateToFAQ}
        onNavigateToSection={onNavigateToSection}
        onNavigateToPackages={onNavigateToPackages}
        onNavigateToPrivacy={onNavigateToPrivacy}
        onNavigateToTerms={onNavigateToTerms}
      />
    </>
  );
};

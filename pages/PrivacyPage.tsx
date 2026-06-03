import React from 'react';
import { PagePreloader } from '../components/PagePreloader';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ArrowRight } from 'lucide-react';

interface PrivacyPageProps {
  onBack: () => void;
  onNavigateToFAQ?: () => void;
  onNavigateHome?: () => void;
  onNavigateToSection?: (sectionId: string) => void;
  onNavigateToPackages?: () => void;
  onNavigateToTerms?: () => void;
}

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-[#5c0386] mb-4">{title}</h2>
    <div className="text-gray-600 text-base leading-relaxed space-y-3">{children}</div>
  </div>
);

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onBack, onNavigateToFAQ, onNavigateHome, onNavigateToSection, onNavigateToPackages, onNavigateToTerms }) => (
  <div className="min-h-screen bg-white">
    <PagePreloader />
    <Navbar forceColored onNavigateToFAQ={onNavigateToFAQ} onNavigateHome={onNavigateHome} onNavigateToSection={onNavigateToSection} />

    {/* Hero */}
    <section className="pt-32 pb-16 px-6 text-center" style={{ backgroundColor: '#5c0386' }}>
      <span className="inline-block text-xs font-bold tracking-widest uppercase mb-5" style={{ color: '#47ff01', backgroundColor: 'rgba(255,255,255,0.1)', padding: '6px 18px', borderRadius: '999px', border: '1px solid rgba(71,255,1,0.2)' }}>
        Legal
      </span>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
      <p className="text-white/60 text-sm">Last updated: June 2025</p>
    </section>

    {/* Content */}
    <section className="py-16 px-6">
      <div className="max-w-2xl mx-auto">

        <Section title="1. Who We Are">
          <p>Sleeka is a creative infrastructure company based in Port Harcourt, Nigeria. We operate the website sleekahq.vercel.app and provide creative services to businesses on a monthly subscription basis.</p>
          <p>Contact: hello@sleekahq.com</p>
        </Section>

        <Section title="2. Information We Collect">
          <p>We collect information you provide directly to us, including:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Name and contact details when you book a discovery call or email us</li>
            <li>Business information shared during onboarding</li>
            <li>Communication records through email and Slack</li>
          </ul>
          <p>We also collect usage data automatically when you visit our website, including IP address, browser type, pages visited, and time spent.</p>
        </Section>

        <Section title="3. How We Use Your Information">
          <ul className="list-disc pl-5 space-y-1">
            <li>To respond to enquiries and book discovery calls</li>
            <li>To deliver our creative infrastructure services</li>
            <li>To send service updates and performance reports</li>
            <li>To improve our website and service quality</li>
            <li>To comply with legal obligations</li>
          </ul>
        </Section>

        <Section title="4. Legal Basis for Processing (GDPR)">
          <p>If you are located in the European Economic Area, our legal basis for collecting and using your personal information depends on the information concerned:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Contract:</strong> where processing is necessary to fulfil a contract with you</li>
            <li><strong>Legitimate interests:</strong> where processing is in our legitimate business interests</li>
            <li><strong>Consent:</strong> where you have given us explicit consent</li>
          </ul>
        </Section>

        <Section title="5. Data Sharing">
          <p>We do not sell your personal data. We may share it with:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Service providers who assist in delivering our services (e.g. Slack, Google Workspace)</li>
            <li>Legal or regulatory authorities if required by law</li>
          </ul>
        </Section>

        <Section title="6. Data Retention">
          <p>We retain your personal data for as long as necessary to fulfil the purposes described in this policy, or as required by law. Client project data is retained for a minimum of 12 months after the end of engagement.</p>
        </Section>

        <Section title="7. Your Rights">
          <p>Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to or restrict processing</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p>To exercise any of these rights, contact us at hello@sleekahq.com.</p>
        </Section>

        <Section title="8. Cookies">
          <p>Our website uses essential cookies to function correctly. We do not currently use tracking or advertising cookies. If this changes, we will update this policy and request your consent.</p>
        </Section>

        <Section title="9. Third Party Links">
          <p>Our website may contain links to third party websites. We are not responsible for the privacy practices of those sites and recommend you review their policies.</p>
        </Section>

        <Section title="10. Changes to This Policy">
          <p>We may update this policy from time to time. We will notify you of significant changes by posting the updated policy on this page with a revised date.</p>
        </Section>

        <Section title="11. Contact Us">
          <p>For any privacy related questions or requests, contact us at: <a href="mailto:hello@sleekahq.com" className="text-[#5c0386] font-semibold hover:underline">hello@sleekahq.com</a></p>
        </Section>

        <button onClick={onBack} className="mt-6 flex items-center gap-2 text-gray-400 hover:text-[#5c0386] transition-colors text-sm font-medium">
          <ArrowRight className="w-4 h-4 rotate-180" />
          Back
        </button>
      </div>
    </section>

    <Footer onNavigateToFAQ={onNavigateToFAQ} onNavigateToSection={onNavigateToSection} onNavigateToPackages={onNavigateToPackages} onNavigateToTerms={onNavigateToTerms} />
  </div>
);

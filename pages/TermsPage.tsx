import React from 'react';
import { PagePreloader } from '../components/PagePreloader';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ArrowRight } from 'lucide-react';

interface TermsPageProps {
  onBack: () => void;
  onNavigateToFAQ?: () => void;
  onNavigateHome?: () => void;
  onNavigateToSection?: (sectionId: string) => void;
  onNavigateToPackages?: () => void;
  onNavigateToPrivacy?: () => void;
}

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-[#5c0386] mb-4">{title}</h2>
    <div className="text-gray-600 text-base leading-relaxed space-y-3">{children}</div>
  </div>
);

export const TermsPage: React.FC<TermsPageProps> = ({ onBack, onNavigateToFAQ, onNavigateHome, onNavigateToSection, onNavigateToPackages, onNavigateToPrivacy }) => (
  <div className="min-h-screen bg-white">
    <PagePreloader />
    <Navbar forceColored onNavigateToFAQ={onNavigateToFAQ} onNavigateHome={onNavigateHome} onNavigateToSection={onNavigateToSection} />

    {/* Hero */}
    <section className="pt-32 pb-16 px-6 text-center" style={{ backgroundColor: '#5c0386' }}>
      <span className="inline-block text-xs font-bold tracking-widest uppercase mb-5" style={{ color: '#47ff01', backgroundColor: 'rgba(255,255,255,0.1)', padding: '6px 18px', borderRadius: '999px', border: '1px solid rgba(71,255,1,0.2)' }}>
        Legal
      </span>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
      <p className="text-white/60 text-sm">Last updated: June 2025</p>
    </section>

    {/* Content */}
    <section className="py-16 px-6">
      <div className="max-w-2xl mx-auto">

        <Section title="1. Agreement to Terms">
          <p>By accessing our website or engaging our services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
        </Section>

        <Section title="2. Our Services">
          <p>Sleeka provides creative infrastructure services including content strategy, design, video editing, and creative execution on a monthly subscription basis. The specific scope of services is defined in the service agreement signed at the start of each engagement.</p>
        </Section>

        <Section title="3. Subscriptions and Payment">
          <ul className="list-disc pl-5 space-y-1">
            <li>Services are billed monthly in advance</li>
            <li>Payment is due at the start of each billing cycle</li>
            <li>Unused creative request slots do not roll over to the following month</li>
            <li>Additional services outside the plan are billed separately with prior agreement</li>
          </ul>
        </Section>

        <Section title="4. Service Agreement">
          <p>All clients are required to sign a 6-month service agreement before onboarding begins. This agreement outlines the scope of work, deliverables, communication processes, and terms of engagement.</p>
        </Section>

        <Section title="5. Termination">
          <p>Either party may terminate the service agreement with at least 1 week written notice. Work completed up to the termination date remains billable. We recommend a minimum of 2 months to properly evaluate results.</p>
        </Section>

        <Section title="6. Intellectual Property">
          <p>All creative deliverables produced by Sleeka for a client become the property of the client upon full payment for the relevant billing period.</p>
          <p>Sleeka retains the right to showcase completed work in its portfolio unless the client requests otherwise in writing.</p>
        </Section>

        <Section title="7. Confidentiality">
          <p>Sleeka treats all client business information, strategies, and materials as strictly confidential. This obligation continues after the termination of the service agreement.</p>
        </Section>

        <Section title="8. Limitation of Liability">
          <p>Sleeka is not liable for indirect, incidental, or consequential damages arising from the use of our services. Our liability is limited to the fees paid for the relevant billing period.</p>
        </Section>

        <Section title="9. Governing Law">
          <p>These terms are governed by the laws of the Federal Republic of Nigeria. Any disputes will be resolved through good faith negotiation, and if necessary, through arbitration in Port Harcourt, Nigeria.</p>
        </Section>

        <Section title="10. Changes to These Terms">
          <p>We may update these terms from time to time. Continued use of our services after changes constitutes acceptance of the updated terms.</p>
        </Section>

        <Section title="11. Contact">
          <p>For questions about these terms, contact us at: <a href="mailto:hello@sleekahq.com" className="text-[#5c0386] font-semibold hover:underline">hello@sleekahq.com</a></p>
        </Section>

        <button onClick={onBack} className="mt-6 flex items-center gap-2 text-gray-400 hover:text-[#5c0386] transition-colors text-sm font-medium">
          <ArrowRight className="w-4 h-4 rotate-180" />
          Back
        </button>
      </div>
    </section>

    <Footer onNavigateToFAQ={onNavigateToFAQ} onNavigateToSection={onNavigateToSection} onNavigateToPackages={onNavigateToPackages} onNavigateToPrivacy={onNavigateToPrivacy} />
  </div>
);

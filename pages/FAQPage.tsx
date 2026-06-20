import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PagePreloader } from '../components/PagePreloader';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FAQSection {
  category: string;
  items: FAQItem[];
}

const faqData: FAQSection[] = [
  {
    category: "Getting Started",
    items: [
      {
        question: "How does Sleeka work?",
        answer: "Sleeka gives businesses access to a dedicated creative team that works seamlessly like an extension of their internal team. We help businesses turn content into a structured system for visibility, leads, customers, and revenue growth."
      },
      {
        question: "What plans does Sleeka offer?",
        answer: (
          <div className="space-y-3">
            <p>We currently offer two creative infrastructure plans:</p>
            <div className="space-y-2">
              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="font-semibold text-geko-dark">Growth Infrastructure — ₦300,000/month</p>
                <p className="text-gray-500 text-sm mt-1">Designed for businesses that need consistent content strategy, creative execution, and visibility support.</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="font-semibold text-geko-dark">Authority Infrastructure — ₦500,000/month</p>
                <p className="text-gray-500 text-sm mt-1">Designed for businesses that need faster execution, larger creative capacity, lead generation support, and higher-level marketing execution.</p>
              </div>
            </div>
            <p>Both plans operate on a monthly subscription model.</p>
          </div>
        )
      },
      {
        question: "What's the major difference between the two plans?",
        answer: (
          <div className="space-y-3">
            <p>The Authority Infrastructure plan includes everything in the Growth Infrastructure plan, but with expanded execution capacity and lead generation support. Some major differences include:</p>
            <ul className="space-y-2">
              {["Dedicated Video Editor and Designer as separate roles", "Faster turnaround times", "12 monthly creative request slots", "Two active tasks at the same time", "Lead generation support beyond social media"].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-geko-accent mt-2 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )
      },
      {
        question: "What does the dedicated team consist of?",
        answer: (
          <div className="space-y-3">
            <p>Our dedicated team typically includes a Project Manager, a Content Strategist, and a Creative Generalist.</p>
            <p>Businesses on the Authority Infrastructure plan also get a dedicated Video Editor separate from the designer for faster turnaround times and higher production capacity.</p>
          </div>
        )
      },
    ]
  },
  {
    category: "Process & Onboarding",
    items: [
      {
        question: "What's the next stage after the discovery call?",
        answer: "After the discovery call, you decide if you want to move forward. If you are ready, you send us an email confirming your chosen plan. We then send a 6-month agreement and begin onboarding once it is signed."
      },
      {
        question: "Can I change my decision after the discovery call?",
        answer: "Yes. The discovery call is for clarity, not pressure. You're free to take your time before making a decision or decide not to proceed at all."
      },
      {
        question: "What does onboarding look like?",
        answer: (
          <div className="space-y-3">
            <p>Onboarding lasts about one week. During this period, you will meet your team, get introduced to our systems, and learn how communication and workflows work, through Slack updates and occasional video calls.</p>
            <p>Behind the scenes, we also audit your current marketing, analyze your market and competitors, and define your strategy and positioning.</p>
            <p>By the end of onboarding, we present your content ideas and direction, strategic recommendations, and a monthly execution plan.</p>
          </div>
        )
      },
      {
        question: "How does the content system work?",
        answer: (
          <div className="space-y-3">
            <p>We use a content operating system which you will also have access to. All monthly content is logged so you can see what's in progress, under review, completed, or posted.</p>
            <p>We also track performance metrics like leads generated per content, engagement rates, best-performing content, and overall content performance. At the end of each month, you get a clear performance report with insights and next steps.</p>
          </div>
        )
      },
    ]
  },
  {
    category: "Contracts & Payment",
    items: [
      {
        question: "Do I need to sign a contract before starting?",
        answer: "Yes. We work with a 6-month agreement to ensure consistency, proper execution, and measurable results over time."
      },
      {
        question: "What if I want to terminate the contract later?",
        answer: "Either party can terminate the contract with at least 1 week notice. We recommend staying at least 2 months to properly evaluate results, since marketing improves with time and consistency."
      },
      {
        question: "How is payment structured?",
        answer: "Payment is on a monthly subscription basis depending on your chosen plan. There are no hidden charges within the plan, but additional services like ads or urgent weekend requests are billed separately."
      },
    ]
  },
  {
    category: "Creative & Execution",
    items: [
      {
        question: "What if I need extra creative work outside the monthly plan?",
        answer: (
          <div className="space-y-3">
            <p>We allow additional requests during the month. Each pricing tier includes request slots:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-geko-accent mt-2 shrink-0"></span><span><strong>Growth Infrastructure:</strong> 6 requests/month, 1 active task at a time</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-geko-accent mt-2 shrink-0"></span><span><strong>Authority Infrastructure:</strong> 12 requests/month, up to 2 active tasks at a time</span></li>
            </ul>
            <p className="text-gray-400 text-sm italic">Unused requests do not roll over to the next month.</p>
          </div>
        )
      },
      {
        question: "Do we need to provide content ideas every month?",
        answer: "Not necessarily. We handle the majority of strategy, ideation, and planning. However, we also collaborate with your team during monthly strategy sessions to align content direction with your business goals and insights."
      },
      {
        question: "Is content posting handled as part of the service?",
        answer: "No. Content and captions are provided, while internal teams handle publishing. Guidance and best practices are also shared to ensure smooth execution and consistency."
      },
      {
        question: "How does Sleeka ensure quality doesn't drop over time?",
        answer: "We operate with quality control systems and creative standards to ensure consistency across all deliverables. Every deliverable is reviewed internally before the client sees it. We also run ongoing upskilling, training, and performance review sessions to keep our team updated on best practices, creative trends, and execution standards."
      },
    ]
  },
  {
    category: "Results & Control",
    items: [
      {
        question: "How long before we start seeing results?",
        answer: "Results vary depending on the business, but most clients start seeing noticeable improvements in clarity, consistency, and engagement within the first 30 to 60 days. Stronger outcomes like leads and conversions usually build over time as the system compounds."
      },
      {
        question: "Will we lose control of our brand if we work with you?",
        answer: "No. You remain fully in control of your business. We operate as your creative infrastructure team, not your replacement. You approve direction, messaging, and strategy while we handle execution."
      },
      {
        question: "Is it possible to maintain privacy and keep internal staff in control of social media?",
        answer: "Yes, absolutely. This is very common. Full control of social accounts remains with the internal team. However, backend access is required for analytics and performance tracking since measurement is a key part of the process. Login details are not required directly as access can be granted securely through permissions."
      },
    ]
  },
  {
    category: "Operations & Policies",
    items: [
      {
        question: "How does communication work?",
        answer: "Communication and feedback happen primarily on Slack. Access is provided to the full team, while a Project Manager serves as the main point of contact and coordinates all execution internally."
      },
      {
        question: "What are the working hours?",
        answer: "Monday to Friday, 9AM to 5PM. Urgent weekend requests can be handled as overtime and are billed separately."
      },
      {
        question: "Do you handle SEO, email marketing, or other services?",
        answer: "No. The focus is primarily on strategy and content execution designed to build consistent results through structured content systems."
      },
      {
        question: "Are ads part of the service?",
        answer: "Yes, ads can be managed. However, they are not included in the subscription plans and are billed separately depending on campaign requirements."
      },
      {
        question: "Any confidentiality and privacy policy?",
        answer: "Confidentiality is strictly maintained. All business information, internal data, and sensitive materials remain private within the team. The team is also trained on operational confidentiality and data protection standards."
      },
    ]
  },
];

const FAQAccordion: React.FC<{ item: FAQItem; index: number }> = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-1 border-b border-gray-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span className={`text-base font-semibold transition-colors duration-200 ${isOpen ? 'text-[#5c0386]' : 'text-gray-900 group-hover:text-[#5c0386]'}`}>
          {item.question}
        </span>

        {/* Animated + / × icon — same as HomeFAQ */}
        <div
          className="shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300"
          style={{
            borderColor: isOpen ? '#5c0386' : '#d1d5db',
            backgroundColor: isOpen ? '#5c0386' : 'transparent',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <line x1="6" y1="0" x2="6" y2="12" stroke={isOpen ? 'white' : '#9ca3af'} strokeWidth="2" strokeLinecap="round" />
            <line x1="0" y1="6" x2="12" y2="6" stroke={isOpen ? 'white' : '#9ca3af'} strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </button>

      <div
        style={{
          overflow: 'hidden',
          maxHeight: isOpen ? '500px' : '0',
          opacity: isOpen ? 1 : 0,
          transition: 'max-height 0.4s ease-in-out, opacity 0.3s ease-in-out',
        }}
      >
        <div className="text-gray-600 text-base leading-relaxed pb-6 pr-12">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

interface FAQPageProps {
  onBack: () => void;
  onNavigateToFAQ?: () => void;
  onNavigateHome?: () => void;
  onNavigateToSection?: (sectionId: string) => void;
  onNavigateToPackages?: () => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onBack, onNavigateToFAQ, onNavigateHome, onNavigateToSection, onNavigateToPackages }) => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        .slk-faq-btn { animation: slkFaqBobble 2.2s ease-in-out infinite; }
        .slk-faq-btn:hover { animation: none; box-shadow: 0 8px 28px rgba(71,255,1,0.45); transform: scale(1.05); }
        @keyframes slkFaqBobble { 0% { box-shadow: 0 0 0 0 rgba(71,255,1,0.6); } 60% { box-shadow: 0 0 0 12px rgba(71,255,1,0); } 100% { box-shadow: 0 0 0 0 rgba(71,255,1,0); } }
      `}</style>
      <PagePreloader />
      <Navbar forceColored onNavigateToFAQ={onNavigateToFAQ} onNavigateHome={onNavigateHome} onNavigateToSection={onNavigateToSection} onNavigateToPackages={onNavigateToPackages} />

      {/* Hero */}
      <section className="bg-geko-dark pt-32 pb-20 px-6 text-center">
        <span
          className="inline-block text-xs font-bold tracking-widest uppercase mb-5"
          style={{
            color: '#47ff01',
            backgroundColor: 'rgba(255,255,255,0.1)',
            padding: '6px 18px',
            borderRadius: '999px',
            letterSpacing: '0.15em',
            border: '1px solid rgba(71,255,1,0.2)',
          }}
        >
          FAQ
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Questions &<br />Answers
        </h1>
        <p className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
          Everything you need to know about working with Sleeka. Can't find what you are looking for? Book a discovery call.
        </p>
      </section>

      {/* Category tabs + FAQ */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mb-12">
            {faqData.map((section, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(i)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === i
                    ? 'bg-geko-dark text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {section.category}
              </button>
            ))}
          </div>

          {/* Active category FAQs */}
          <div>
            <h2 className="text-2xl font-bold text-geko-dark mb-6">
              {faqData[activeCategory].category}
            </h2>
            <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm">
              {faqData[activeCategory].items.map((item, i) => (
                <FAQAccordion key={i} item={item} index={i} />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            className="mt-16 rounded-[2rem] p-8 md:p-12 text-center"
            style={{ background: '#e6d5f7' }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-geko-dark mb-3">Still have questions?</p>
            <h3 className="text-2xl md:text-3xl font-black text-geko-dark mb-4 leading-tight">
              Let's talk it through.
            </h3>
            <p className="text-gray-600 mb-8 max-w-sm mx-auto">
              Book a free discovery call and we will answer every question you have: no pressure, no obligation.
            </p>
            <a
              href="https://calendar.app.google/2nWbeLXuC52dvZtq5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-bold text-base transition-all hover:scale-105 duration-300 group"
              style={{ backgroundColor: '#47ff01', color: '#000', padding: '16px 32px' }}
            >
              Book a Discovery Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Back link */}
          <button
            onClick={onBack}
            className="mt-10 flex items-center gap-2 text-gray-400 hover:text-geko-dark transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </button>

        </div>
      </section>

      <Footer onNavigateToFAQ={onNavigateToFAQ} onNavigateToSection={onNavigateToSection} onNavigateToPackages={onNavigateToPackages} />
    </div>
  );
};

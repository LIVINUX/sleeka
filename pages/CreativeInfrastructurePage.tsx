import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Props {
  onBack: () => void;
}

type ActivePackage = 'growth' | 'authority' | null;

export const CreativeInfrastructurePage: React.FC<Props> = ({ onBack }) => {
  const [activePackage, setActivePackage] = useState<ActivePackage>(null);

  // Scroll to very top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  const handlePackageClick = (pkg: 'growth' | 'authority') => {
    setActivePackage(prev => (prev === pkg ? null : pkg));
  };

  const handlePackageHover = (pkg: 'growth' | 'authority') => {
    setActivePackage(pkg);
  };

  return (
    <>
      {/* Pulsing button styles */}
      <style>{`
        @keyframes pulse-green {
          0%, 100% { box-shadow: 0 0 0 0 rgba(71,255,1,0.55), 0 6px 20px rgba(71,255,1,0.25); }
          60%       { box-shadow: 0 0 0 10px rgba(71,255,1,0),  0 6px 20px rgba(71,255,1,0.25); }
        }
        .btn-pulse-cta {
          animation: pulse-green 2.2s ease-in-out infinite;
          transition: transform 0.2s ease, filter 0.2s ease;
        }
        .btn-pulse-cta:hover {
          transform: scale(1.06);
          filter: brightness(1.08);
          animation: none;
          box-shadow: 0 8px 28px rgba(71,255,1,0.45);
        }
        /* Expand panel transition */
        .pkg-panel {
          overflow: hidden;
          transition: max-height 0.5s ease-in-out, opacity 0.35s ease-in-out, margin-top 0.35s ease-in-out;
        }
        .pkg-panel.open  { max-height: 2400px; opacity: 1; margin-top: 12px; }
        .pkg-panel.closed{ max-height: 0;      opacity: 0; margin-top: 0;    }
      `}</style>

      <Navbar />

      <main className="min-h-screen bg-white">

        {/* ── HERO SECTION — faint purple bg, text left + image right ── */}
        <section
          style={{ background: 'linear-gradient(135deg, #f3eeff 0%, #e8d8ff 60%, #dfc8ff 100%)' }}
          className="pt-32 pb-16 md:pt-36 md:pb-20"
        >
          <div className="container mx-auto px-6 md:px-12">

            {/* Back button — sits below fixed navbar with enough clearance */}
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-[#5c0386] font-semibold mb-8 hover:gap-3 transition-all duration-200 text-sm md:text-base"
            >
              <span style={{ fontSize: '1.1em' }}>←</span>
              Back to How We Work
            </button>

            {/*
              Desktop: two-column flex — text left (55%), image right (40%)
              Mobile:  single column — image on top centered, text below centered
            */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12">

              {/* Left: Title + subtext — shown BELOW image on mobile, BESIDE on desktop */}
              <div
                className="order-2 md:order-1 text-center md:text-left"
                style={{ flex: '0 0 auto', width: '100%', maxWidth: '100%' }}
              >
                <div className="md:max-w-[420px] lg:max-w-[500px]">
                  <h1
                    className="font-black uppercase leading-none mb-5 text-[#5c0386]"
                    style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)', lineHeight: 1.05 }}
                  >
                    Creative<br />Infrastructure
                  </h1>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    Sleeka functions as your dedicated creative department, providing the design, video, and animation systems that help brands stay visible, build authority, and convert attention into revenue.
                  </p>
                </div>
              </div>

              {/* Right: Illustration — blends into the purple gradient bg */}
              <div
                className="order-1 md:order-2 flex justify-center md:justify-end flex-shrink-0"
                style={{ width: '100%', maxWidth: '100%' }}
              >
                <div
                  className="w-full rounded-3xl overflow-hidden"
                  style={{
                    maxWidth: 'clamp(200px, 45vw, 380px)',
                    /* No background — illustration bg blends with section bg naturally */
                  }}
                >
                  <img
                    src="/assets/creative-infrastructure.jpg"
                    alt="Creative Infrastructure"
                    className="w-full h-auto object-contain"
                    style={{ display: 'block' }}
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── PROBLEM SECTION ── */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 md:px-12 max-w-3xl">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              The Problem Most Growing Businesses Face
            </h2>
            <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed">
              <p>
                Marketing today requires constant creative output — including graphics, videos, campaigns, and storytelling — that keep your brand visible and competitive. But most companies struggle with how to support this consistently.
              </p>
              <p className="italic font-medium text-gray-500">
                Freelancers are unreliable, often juggling multiple clients with inconsistent availability and delivery.
              </p>
              <p className="italic font-medium text-gray-500">
                Building a full in-house creative team requires hiring designers, video editors, animators, and creative leads — a major payroll commitment.
              </p>
              <p className="italic font-medium text-gray-500">
                Traditional agencies are often expensive, slow to respond, and structured around project billing rather than ongoing creative support.
              </p>
              <p>
                Sleeka solves this by providing businesses with a structured creative department on a flexible monthly subscription — giving your marketing team reliable creative capacity without operational complexity. Here are our two creative infrastructure packages:
              </p>
            </div>
          </div>
        </section>

        {/* ── PACKAGES SECTION ── */}
        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-6 md:px-12 max-w-3xl">

            {/* ── Growth Infrastructure ── */}
            <div className="mb-4">
              <button
                onClick={() => handlePackageClick('growth')}
                onMouseEnter={() => handlePackageHover('growth')}
                className={`w-full text-left px-6 md:px-8 py-4 md:py-5 rounded-full font-bold text-lg md:text-xl
                  transition-all duration-300 flex items-center justify-between gap-4
                  ${activePackage === 'growth'
                    ? 'bg-[#5c0386] text-white shadow-xl shadow-purple-500/30 scale-[1.01]'
                    : 'bg-[#5c0386]/10 text-[#5c0386] hover:bg-[#5c0386] hover:text-white hover:scale-[1.01]'
                  }`}
              >
                <span>Growth Infrastructure</span>
                {activePackage === 'growth'
                  ? <ChevronUp className="w-5 h-5 flex-shrink-0" />
                  : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
              </button>

              <div className={`pkg-panel ${activePackage === 'growth' ? 'open' : 'closed'}`}>
                <div className="bg-[#5c0386] rounded-[2rem] p-6 md:p-10 text-white">
                  <div className="mb-6">
                    <p className="text-[#47ff01] text-2xl md:text-3xl font-black mb-1">₦300,000 / Month</p>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed">
                      For growing businesses that need consistent creative support to maintain visibility and support marketing activities.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8">
                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-2">What This Package Delivers</p>
                      <ul className="space-y-1 text-sm text-white/80">
                        <li>• Consistent brand visibility</li>
                        <li>• Professional visual communication</li>
                        <li>• Reliable creative support for ongoing marketing</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-2">Creative Support Includes</p>
                      <ul className="space-y-1 text-sm text-white/80">
                        <li>• Brand graphics and marketing visuals</li>
                        <li>• Short-form video editing</li>
                        <li>• Campaign visuals and promotional creatives</li>
                        <li>• Visual storytelling assets for brand communication</li>
                      </ul>
                      <p className="text-white/40 text-xs mt-2 italic">Instagram, LinkedIn, and more.</p>
                    </div>
                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-2">Monthly Creative Planning</p>
                      <ul className="space-y-1 text-sm text-white/80">
                        <li>• Structured content calendar</li>
                        <li>• Creative direction aligned with marketing goals</li>
                        <li>• Organized campaign planning</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-2">Creative Request Capacity</p>
                      <ul className="space-y-1 text-sm text-white/80">
                        <li>• 6 creative requests per month</li>
                        <li>• 1 active task at a time</li>
                        <li>• Additional requests move into a structured queue</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-2">Typical Delivery Time</p>
                      <ul className="space-y-1 text-sm text-white/80">
                        <li>• Graphic design: 24 – 48 hours</li>
                        <li>• Video editing: 48 – 72 hours</li>
                        <li>• Motion graphics / animation: 3 – 5 working days</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-2">Coordination & Reporting</p>
                      <ul className="space-y-1 text-sm text-white/80">
                        <li>• Dedicated Project Manager</li>
                        <li>• Monthly creative performance report</li>
                        <li>• Organized task coordination and workflow management</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 bg-white/10 rounded-2xl p-4 border border-white/20">
                    <p className="text-white/90 text-sm">
                      <span className="text-[#47ff01] font-bold">Best suited for: </span>
                      Growing companies that need consistent creative output without building an internal design team.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Authority Infrastructure ── */}
            <div className="mb-12">
              <button
                onClick={() => handlePackageClick('authority')}
                onMouseEnter={() => handlePackageHover('authority')}
                className={`w-full text-left px-6 md:px-8 py-4 md:py-5 rounded-full font-bold text-lg md:text-xl
                  transition-all duration-300 flex items-center justify-between gap-4
                  ${activePackage === 'authority'
                    ? 'bg-[#47ff01] text-black shadow-xl shadow-green-400/30 scale-[1.01]'
                    : 'bg-[#47ff01]/20 text-gray-800 hover:bg-[#47ff01] hover:text-black hover:scale-[1.01]'
                  }`}
              >
                <span>Authority Infrastructure</span>
                {activePackage === 'authority'
                  ? <ChevronUp className="w-5 h-5 flex-shrink-0" />
                  : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
              </button>

              <div className={`pkg-panel ${activePackage === 'authority' ? 'open' : 'closed'}`}>
                <div className="bg-[#5c0386] rounded-[2rem] p-6 md:p-10 text-white">
                  <div className="mb-6">
                    <p className="text-[#47ff01] text-2xl md:text-3xl font-black mb-1">₦500,000 / Month</p>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed">
                      For ambitious companies that want to strengthen brand authority, execute campaigns effectively, and scale their marketing presence. Greater creative capacity, faster delivery, and strategic oversight.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8">
                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-2">What This Package Delivers</p>
                      <ul className="space-y-1 text-sm text-white/80">
                        <li>• Stronger brand authority</li>
                        <li>• Higher-impact marketing campaigns</li>
                        <li>• Faster creative execution for growth initiatives</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-2">Premium Creative Support</p>
                      <ul className="space-y-1 text-sm text-white/80">
                        <li>• Advanced brand and marketing design</li>
                        <li>• High-quality short-form video production</li>
                        <li>• Motion graphics and visual storytelling</li>
                        <li>• Light animation for campaigns and brand messaging</li>
                        <li>• Creative support for product launches and promotions</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-2">Strategic Creative Direction</p>
                      <ul className="space-y-1 text-sm text-white/80">
                        <li>• Creative Director oversight</li>
                        <li>• Brand positioning guidance</li>
                        <li>• Campaign creative direction</li>
                        <li>• Messaging and creative strategy support</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-2">Enhanced Request Capacity</p>
                      <ul className="space-y-1 text-sm text-white/80">
                        <li>• 20 creative requests per month</li>
                        <li>• Up to 3 active tasks at the same time</li>
                        <li>• Priority task queue for faster execution</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-2">Priority Delivery Time</p>
                      <ul className="space-y-1 text-sm text-white/80">
                        <li>• Graphic design: Less than 12 hours</li>
                        <li>• Video editing: 24 – 48 hours</li>
                        <li>• Motion graphics / animation: 2 – 4 working days</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-2">Strategic Coordination</p>
                      <ul className="space-y-1 text-sm text-white/80">
                        <li>• Dedicated Project Manager</li>
                        <li>• Monthly growth and creative performance report</li>
                        <li>• Strategy review sessions</li>
                        <li>• Higher revision flexibility</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-6 text-white/60 text-sm italic">
                    Your project manager ensures your creative pipeline stays organized, prioritized, and delivered efficiently — enabling your marketing team to move faster.
                  </p>
                </div>
              </div>
            </div>

            {/* ── CTA ── */}
            <div
              className="rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
              style={{ background: 'linear-gradient(135deg, #f3eeff 0%, #e8d8ff 100%)' }}
            >
              <p className="text-gray-800 text-base md:text-lg leading-relaxed md:max-w-md">
                Get a dedicated creative department that delivers high-quality design, video, and animation on demand — boosting visibility, authority, and revenue without building an in-house team.
              </p>
              <a
                href="https://calendar.app.google/2nWbeLXuC52dvZtq5"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pulse-cta px-8 py-4 rounded-full font-bold text-lg flex-shrink-0 whitespace-nowrap text-center"
                style={{ backgroundColor: '#47ff01', color: '#000' }}
              >
                Book a Discovery Call
              </a>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

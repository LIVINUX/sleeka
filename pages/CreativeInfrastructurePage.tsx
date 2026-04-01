import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ChevronDown, ChevronUp } from 'lucide-react';

type ActivePackage = 'growth' | 'authority' | null;

export const CreativeInfrastructurePage: React.FC = () => {
  const [activePackage, setActivePackage] = useState<ActivePackage>(null);

  const handlePackageClick = (pkg: 'growth' | 'authority') => {
    // Click toggles: if same one is open, close it. Otherwise open new one (closing the other).
    setActivePackage(prev => (prev === pkg ? null : pkg));
  };

  const handlePackageHover = (pkg: 'growth' | 'authority') => {
    setActivePackage(pkg);
  };

  const goBack = () => {
    window.location.hash = '#services';
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-8 pb-24">
        <div className="container mx-auto px-6 md:px-12">

          {/* Back link */}
          <button
            onClick={goBack}
            className="flex items-center gap-2 text-[#5c0386] font-semibold mb-10 hover:underline transition-all duration-200 text-base"
          >
            ← Back to How We Work
          </button>

          {/* ── Hero: Title left, Image right ── */}
          <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10 mb-16">

            {/* Left: Title + subtext */}
            <div className="flex-1 md:max-w-[52%]">
              <h1
                className="font-black uppercase leading-none mb-6"
                style={{
                  fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                  color: '#5c0386',
                  lineHeight: 1.05,
                }}
              >
                Creative<br />Infrastructure
              </h1>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                Sleeka functions as your dedicated creative department, providing the design, video, and animation systems that help brands stay visible, build authority, and convert attention into revenue.
              </p>
            </div>

            {/* Right: Illustration */}
            <div className="flex-1 md:max-w-[44%]">
              <img
                src="/assets/creative-infrastructure.jpg"
                alt="Creative Infrastructure"
                className="w-full h-64 md:h-80 object-cover object-center rounded-3xl shadow-xl"
              />
            </div>

          </div>

          {/* ── Problem Section ── */}
          <div className="mb-16 max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
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

          {/* ── Package Buttons ── */}
          <div className="flex flex-col gap-4 max-w-3xl mb-16">

            {/* ── Growth Infrastructure ── */}
            <div>
              <button
                onClick={() => handlePackageClick('growth')}
                onMouseEnter={() => handlePackageHover('growth')}
                className={`w-full text-left px-8 py-5 rounded-full font-bold text-xl transition-all duration-300 flex items-center justify-between gap-4
                  ${activePackage === 'growth'
                    ? 'bg-[#5c0386] text-white shadow-xl shadow-purple-500/30 scale-[1.01]'
                    : 'bg-[#5c0386]/10 text-[#5c0386] hover:bg-[#5c0386] hover:text-white hover:shadow-xl hover:shadow-purple-500/20 hover:scale-[1.01]'
                  }`}
              >
                <span>Growth Infrastructure</span>
                {activePackage === 'growth'
                  ? <ChevronUp className="w-6 h-6 flex-shrink-0" />
                  : <ChevronDown className="w-6 h-6 flex-shrink-0" />}
              </button>

              {/* Growth Details */}
              <div
                style={{
                  maxHeight: activePackage === 'growth' ? '2400px' : '0px',
                  opacity: activePackage === 'growth' ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.5s ease-in-out, opacity 0.35s ease-in-out',
                  marginTop: activePackage === 'growth' ? '12px' : '0px',
                }}
              >
                <div className="bg-[#5c0386] rounded-[2rem] p-8 md:p-10 text-white">

                  <div className="mb-6">
                    <p className="text-[#47ff01] text-2xl md:text-3xl font-black mb-1">₦300,000 / Month</p>
                    <p className="text-white/80 text-base leading-relaxed">
                      For growing businesses that need consistent creative support to maintain visibility and support marketing activities.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">

                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-3">What This Package Delivers</p>
                      <ul className="space-y-1.5 text-sm text-white/80">
                        <li>• Consistent brand visibility</li>
                        <li>• Professional visual communication</li>
                        <li>• Reliable creative support for ongoing marketing</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-3">Creative Support Includes</p>
                      <ul className="space-y-1.5 text-sm text-white/80">
                        <li>• Brand graphics and marketing visuals</li>
                        <li>• Short-form video editing</li>
                        <li>• Campaign visuals and promotional creatives</li>
                        <li>• Visual storytelling assets for brand communication</li>
                      </ul>
                      <p className="text-white/40 text-xs mt-2 italic">Supports Instagram, LinkedIn, and more.</p>
                    </div>

                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-3">Monthly Creative Planning</p>
                      <ul className="space-y-1.5 text-sm text-white/80">
                        <li>• Structured content calendar</li>
                        <li>• Creative direction aligned with marketing goals</li>
                        <li>• Organized campaign planning</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-3">Creative Request Capacity</p>
                      <ul className="space-y-1.5 text-sm text-white/80">
                        <li>• 6 creative requests per month</li>
                        <li>• 1 active task at a time</li>
                        <li>• Additional requests move into a structured queue</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-3">Typical Delivery Time</p>
                      <ul className="space-y-1.5 text-sm text-white/80">
                        <li>• Graphic design: 24 – 48 hours</li>
                        <li>• Video editing: 48 – 72 hours</li>
                        <li>• Motion graphics / animation: 3 – 5 working days</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-3">Coordination & Reporting</p>
                      <ul className="space-y-1.5 text-sm text-white/80">
                        <li>• Dedicated Project Manager</li>
                        <li>• Monthly creative performance report</li>
                        <li>• Organized task coordination and workflow management</li>
                      </ul>
                    </div>

                  </div>

                  <div className="mt-6 bg-white/10 rounded-2xl p-5 border border-white/20">
                    <p className="text-white/90 text-sm">
                      <span className="text-[#47ff01] font-bold">Best suited for: </span>
                      Growing companies that need consistent creative output without building an internal design team.
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* ── Authority Infrastructure ── */}
            <div>
              <button
                onClick={() => handlePackageClick('authority')}
                onMouseEnter={() => handlePackageHover('authority')}
                className={`w-full text-left px-8 py-5 rounded-full font-bold text-xl transition-all duration-300 flex items-center justify-between gap-4
                  ${activePackage === 'authority'
                    ? 'bg-[#47ff01] text-black shadow-xl shadow-green-400/30 scale-[1.01]'
                    : 'bg-[#47ff01]/20 text-gray-800 hover:bg-[#47ff01] hover:text-black hover:shadow-xl hover:shadow-green-400/20 hover:scale-[1.01]'
                  }`}
              >
                <span>Authority Infrastructure</span>
                {activePackage === 'authority'
                  ? <ChevronUp className="w-6 h-6 flex-shrink-0" />
                  : <ChevronDown className="w-6 h-6 flex-shrink-0" />}
              </button>

              {/* Authority Details */}
              <div
                style={{
                  maxHeight: activePackage === 'authority' ? '2400px' : '0px',
                  opacity: activePackage === 'authority' ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.5s ease-in-out, opacity 0.35s ease-in-out',
                  marginTop: activePackage === 'authority' ? '12px' : '0px',
                }}
              >
                <div className="bg-[#5c0386] rounded-[2rem] p-8 md:p-10 text-white">

                  <div className="mb-6">
                    <p className="text-[#47ff01] text-2xl md:text-3xl font-black mb-1">₦500,000 / Month</p>
                    <p className="text-white/80 text-base leading-relaxed">
                      For ambitious companies that want to strengthen brand authority, execute campaigns effectively, and scale their marketing presence. Greater creative capacity, faster delivery, and strategic oversight.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">

                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-3">What This Package Delivers</p>
                      <ul className="space-y-1.5 text-sm text-white/80">
                        <li>• Stronger brand authority</li>
                        <li>• Higher-impact marketing campaigns</li>
                        <li>• Faster creative execution for growth initiatives</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-3">Premium Creative Support</p>
                      <ul className="space-y-1.5 text-sm text-white/80">
                        <li>• Advanced brand and marketing design</li>
                        <li>• High-quality short-form video production</li>
                        <li>• Motion graphics and visual storytelling</li>
                        <li>• Light animation for campaigns and brand messaging</li>
                        <li>• Creative support for product launches and promotions</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-3">Strategic Creative Direction</p>
                      <ul className="space-y-1.5 text-sm text-white/80">
                        <li>• Creative Director oversight</li>
                        <li>• Brand positioning guidance</li>
                        <li>• Campaign creative direction</li>
                        <li>• Messaging and creative strategy support</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-3">Enhanced Request Capacity</p>
                      <ul className="space-y-1.5 text-sm text-white/80">
                        <li>• 20 creative requests per month</li>
                        <li>• Up to 3 active tasks at the same time</li>
                        <li>• Priority task queue for faster execution</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-3">Priority Delivery Time</p>
                      <ul className="space-y-1.5 text-sm text-white/80">
                        <li>• Graphic design: Less than 12 hours</li>
                        <li>• Video editing: 24 – 48 hours</li>
                        <li>• Motion graphics / animation: 2 – 4 working days</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-3">Strategic Coordination</p>
                      <ul className="space-y-1.5 text-sm text-white/80">
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

          </div>

          {/* ── Bottom CTA ── */}
          <div
            className="rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 max-w-3xl"
            style={{ backgroundColor: '#f5f0ff' }}
          >
            <p className="text-gray-800 text-lg leading-relaxed md:max-w-lg">
              Get a dedicated creative department that delivers high-quality design, video, and animation on demand — boosting visibility, authority, and revenue without building an in-house team.
            </p>
            <button
              className="px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 duration-300 flex-shrink-0 shadow-xl whitespace-nowrap"
              style={{ backgroundColor: '#47ff01', color: '#000' }}
            >
              Book a Discovery Call
            </button>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
};

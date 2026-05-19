import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTASection } from '../components/CTASection';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Props {
  onBack: () => void;
}

type ActivePackage = 'growth' | 'authority' | null;

export const CreativeInfrastructurePage: React.FC<Props> = ({ onBack }) => {
  const [activePackage, setActivePackage] = useState<ActivePackage>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  const handleClick = (pkg: 'growth' | 'authority') =>
    setActivePackage(prev => (prev === pkg ? null : pkg));

  const handleHover = (pkg: 'growth' | 'authority') =>
    setActivePackage(pkg);

  return (
    <>
      <style>{`
        .pkg-panel {
          overflow: hidden;
          transition: max-height 0.5s ease-in-out, opacity 0.35s ease-in-out;
        }
        .pkg-panel.open   { max-height: 2400px; opacity: 1; }
        .pkg-panel.closed { max-height: 0;       opacity: 0; }
        .ci-root { overflow-x: hidden; }
      `}</style>

      <Navbar forceColored />

      <main className="ci-root min-h-screen bg-white">

        <div className="pt-24 bg-white">
          <div className="container mx-auto px-6 md:px-12">

            <button
              onClick={onBack}
              className="flex items-center gap-2 text-[#5c0386] font-semibold mb-8 hover:gap-3 transition-all duration-200 text-sm md:text-base"
            >
              ← Back to How We Work
            </button>

            {/* Hero card */}
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl max-w-lg mx-auto md:max-w-2xl lg:max-w-3xl">
              <div style={{ height: 'clamp(220px, 42vw, 340px)' }}>
                <img
                  src="/assets/creative-infrastructure.jpg"
                  alt="Creative Infrastructure"
                  className="w-full h-full object-cover object-top block"
                />
              </div>
              <div
                className="bg-[#5c0386] px-6 sm:px-8 md:px-12 pb-10 pt-8 relative z-10"
                style={{ marginTop: '-2rem', borderRadius: '2rem 2rem 0 0' }}
              >
                <h1 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-tight mb-4">
                  Creative Infrastructure
                </h1>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                  Sleeka functions as your dedicated creative department, providing the design and
                  video systems that help brands stay visible, build authority,
                  and convert attention into revenue.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Problem */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-6 md:px-12 max-w-3xl">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5 pb-3 border-b border-gray-200">
              A Growing Problem
            </h2>
            <div className="space-y-4 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              <p>Modern marketing is not just about creating more content. Without clear strategy, positioning, and structured execution, businesses end up spending money on marketing that fails to generate consistent leads, customers, and revenue.</p>
              <p className="italic font-medium text-gray-500">Freelancers are unreliable, building a full in-house marketing team is expensive and difficult to manage, and traditional agencies are often costly with slow turnaround times.</p>
              <p>Sleeka provides businesses with a dedicated creative infrastructure that combines strategy, design, video, and content execution to help brands stay visible, attract leads, build trust, and drive measurable growth through content designed to convert, not just exist.</p>
              <p className="font-semibold text-gray-800">Here are our creative infrastructure packages:</p>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="pb-8">
          <div className="container mx-auto px-6 md:px-12 max-w-3xl">

            {/* Growth */}
            <div className="mb-4">
              <button
                onClick={() => handleClick('growth')}
                onMouseEnter={() => handleHover('growth')}
                className={`w-full text-left px-6 md:px-8 py-4 md:py-5 rounded-full font-bold text-base md:text-xl transition-all duration-300 flex items-center justify-between gap-3
                  ${activePackage === 'growth'
                    ? 'bg-[#5c0386] text-white shadow-xl shadow-purple-500/30 scale-[1.01]'
                    : 'bg-[#5c0386]/10 text-[#5c0386] hover:bg-[#5c0386] hover:text-white hover:scale-[1.01]'}`}
              >
                <span>Growth Infrastructure</span>
                {activePackage === 'growth' ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
              </button>
              <div className={`pkg-panel ${activePackage === 'growth' ? 'open' : 'closed'}`}>
                <div className="bg-[#5c0386] rounded-[2rem] p-6 md:p-10 text-white mt-3">
                  <p className="text-[#47ff01] text-xl md:text-3xl font-black mb-1">₦300,000 / Month</p>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">For growing businesses that need structured creative execution to maintain visibility, support marketing activities, and build consistent brand presence.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8">
                    {[
                      { label: 'What This Package Supports', items: ['Consistent brand visibility','Professional brand communication','Ongoing creative execution'] },
                      { label: 'Creative Infrastructure Includes', items: ['Brand graphics and marketing visuals','Short-form video editing','Campaign and promotional creatives','Motion graphics and visual storytelling assets'] },
                      { label: 'Strategy & Planning', items: ['Structured content calendar','Creative direction aligned with business goals','Organized campaign planning and execution'] },
                      { label: 'Creative Capacity', items: ['6 creative requests per month','1 active task at a time','Additional requests managed through a structured queue'] },
                      { label: 'Typical Delivery Timeline', items: ['Graphic design: 24–48 hours','Video editing: 48–72 hours','Motion graphics / animation: 3–5 working days'] },
                      { label: 'Coordination & Reporting', items: ['Dedicated Project Manager','Monthly performance reporting','Organized workflow and task coordination'] },
                    ].map(({ label, items }) => (
                      <div key={label}>
                        <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-2">{label}</p>
                        <ul className="space-y-1 text-sm text-white/80">{items.map(i => <li key={i}>• {i}</li>)}</ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 bg-white/10 rounded-2xl p-4 border border-white/20">
                    <p className="text-white/90 text-sm"><span className="text-[#47ff01] font-bold">Best suited for: </span>Growing businesses that need consistent creative execution without building an expensive in-house creative team.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Authority */}
            <div className="mb-4">
              <button
                onClick={() => handleClick('authority')}
                onMouseEnter={() => handleHover('authority')}
                className={`w-full text-left px-6 md:px-8 py-4 md:py-5 rounded-full font-bold text-base md:text-xl transition-all duration-300 flex items-center justify-between gap-3
                  ${activePackage === 'authority'
                    ? 'bg-[#47ff01] text-black shadow-xl shadow-green-400/30 scale-[1.01]'
                    : 'bg-[#47ff01]/20 text-gray-800 hover:bg-[#47ff01] hover:text-black hover:scale-[1.01]'}`}
              >
                <span>Authority Infrastructure</span>
                {activePackage === 'authority' ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
              </button>
              <div className={`pkg-panel ${activePackage === 'authority' ? 'open' : 'closed'}`}>
                <div className="bg-[#5c0386] rounded-[2rem] p-6 md:p-10 text-white mt-3">
                  <p className="text-[#47ff01] text-xl md:text-3xl font-black mb-1">₦500,000 / Month</p>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">For brands focused on scaling visibility, building authority, and executing marketing at a higher level with deeper strategic and creative support.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8">
                    {[
                      { label: 'What This Package Supports', items: ['Stronger brand authority and positioning','Consistent multi-platform visibility','Higher-quality marketing execution','Lead generation','Scalable content operations'] },
                      { label: 'Creative Infrastructure Includes', items: ['Advanced brand and campaign visuals','High-volume short-form video editing','Motion graphics and animation support','Strategic content creatives for marketing campaigns','Visual storytelling assets across platforms'] },
                      { label: 'Strategy & Planning', items: ['Content strategy and positioning support','Structured monthly content planning','Campaign direction aligned with growth goals','Marketing performance review and optimization'] },
                      { label: 'Creative Capacity', items: ['12 creative requests per month','2 active tasks at a time','Priority workflow management'] },
                      { label: 'Typical Delivery Timeline', items: ['Graphic design: 24–48 hours','Video editing: 24–72 hours','Motion graphics / animation: 2–5 working days'] },
                      { label: 'Coordination & Reporting', items: ['Dedicated Project Manager','Priority communication and coordination','Monthly strategy and performance review','Organized workflow and approval systems'] },
                    ].map(({ label, items }) => (
                      <div key={label}>
                        <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-2">{label}</p>
                        <ul className="space-y-1 text-sm text-white/80">{items.map(i => <li key={i}>• {i}</li>)}</ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 bg-white/10 rounded-2xl p-4 border border-white/20">
                    <p className="text-white/90 text-sm"><span className="text-[#47ff01] font-bold">Best suited for: </span>Businesses ready to scale marketing with a dedicated creative infrastructure that supports authority, growth, and long-term brand visibility.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CTA — same component as home page for full consistency */}
        <CTASection />

      </main>
      <Footer />
    </>
  );
};

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
        @keyframes slk-pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(71,255,1,0.55), 0 6px 20px rgba(71,255,1,0.22); }
          60%      { box-shadow: 0 0 0 10px rgba(71,255,1,0), 0 6px 20px rgba(71,255,1,0.22); }
        }
        .slk-btn-cta {
          animation: slk-pulse 2.2s ease-in-out infinite;
          transition: transform 0.2s ease, filter 0.2s ease;
        }
        .slk-btn-cta:hover {
          transform: scale(1.06); filter: brightness(1.08);
          animation: none; box-shadow: 0 8px 28px rgba(71,255,1,0.45);
        }
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

            {/* Card — same overlap structure as HowWeWork */}
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl max-w-lg mx-auto md:max-w-2xl lg:max-w-3xl">

              {/* Image fills top fully */}
              <div style={{ height: 'clamp(220px, 42vw, 340px)' }}>
                <img
                  src="/assets/creative-infrastructure.jpg"
                  alt="Creative Infrastructure"
                  className="w-full h-full object-cover object-top block"
                />
              </div>

              {/* Purple overlaps image — negative margin + rounded top corners */}
              <div
                className="bg-[#5c0386] px-6 sm:px-8 md:px-12 pb-10 pt-8 relative z-10"
                style={{
                  marginTop: '-2rem',
                  borderRadius: '2rem 2rem 0 0',
                }}
              >
                <h1 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-tight mb-4">
                  Creative Infrastructure
                </h1>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                  Sleeka functions as your dedicated creative department, providing the design,
                  video, and animation systems that help brands stay visible, build authority,
                  and convert attention into revenue.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ── Problem ── */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-6 md:px-12 max-w-3xl">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5 pb-3 border-b border-gray-200">
              The Problem Most Growing Businesses Face
            </h2>
            <div className="space-y-4 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              <p>Marketing today requires constant creative output — graphics, videos, campaigns, and storytelling — that keep your brand visible and competitive. But most companies struggle to support this consistently.</p>
              <p className="italic font-medium text-gray-500">Freelancers are unreliable, often juggling multiple clients with inconsistent availability and delivery.</p>
              <p className="italic font-medium text-gray-500">Building a full in-house creative team requires hiring designers, video editors, animators, and creative leads — a major payroll commitment.</p>
              <p className="italic font-medium text-gray-500">Traditional agencies are often expensive, slow to respond, and structured around project billing rather than ongoing creative support.</p>
              <p>Sleeka solves this with a structured creative department on a flexible monthly subscription — reliable creative capacity without operational complexity. Here are our two creative infrastructure packages:</p>
            </div>
          </div>
        </section>

        {/* ── Packages ── */}
        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-6 md:px-12 max-w-3xl">

            {/* Growth */}
            <div className="mb-4">
              <button
                onClick={() => handleClick('growth')}
                onMouseEnter={() => handleHover('growth')}
                className={`w-full text-left px-6 md:px-8 py-4 md:py-5 rounded-full font-bold text-base md:text-xl transition-all duration-300 flex items-center justify-between gap-3
                  ${activePackage === 'growth' ? 'bg-[#5c0386] text-white shadow-xl shadow-purple-500/30 scale-[1.01]' : 'bg-[#5c0386]/10 text-[#5c0386] hover:bg-[#5c0386] hover:text-white hover:scale-[1.01]'}`}
              >
                <span>Growth Infrastructure</span>
                {activePackage === 'growth' ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
              </button>
              <div className={`pkg-panel ${activePackage === 'growth' ? 'open' : 'closed'}`}>
                <div className="bg-[#5c0386] rounded-[2rem] p-6 md:p-10 text-white mt-3">
                  <p className="text-[#47ff01] text-xl md:text-3xl font-black mb-1">₦300,000 / Month</p>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">For growing businesses that need consistent creative support to maintain visibility and support marketing activities.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8">
                    {[
                      { label: 'What This Package Delivers', items: ['Consistent brand visibility','Professional visual communication','Reliable creative support for ongoing marketing'] },
                      { label: 'Creative Support Includes', items: ['Brand graphics and marketing visuals','Short-form video editing','Campaign visuals and promotional creatives','Visual storytelling assets for brand communication'] },
                      { label: 'Monthly Creative Planning', items: ['Structured content calendar','Creative direction aligned with marketing goals','Organized campaign planning'] },
                      { label: 'Creative Request Capacity', items: ['6 creative requests per month','1 active task at a time','Additional requests move into a structured queue'] },
                      { label: 'Typical Delivery Time', items: ['Graphic design: 24 – 48 hours','Video editing: 48 – 72 hours','Motion graphics / animation: 3 – 5 working days'] },
                      { label: 'Coordination & Reporting', items: ['Dedicated Project Manager','Monthly creative performance report','Organized task coordination and workflow management'] },
                    ].map(({ label, items }) => (
                      <div key={label}>
                        <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-2">{label}</p>
                        <ul className="space-y-1 text-sm text-white/80">{items.map(i => <li key={i}>• {i}</li>)}</ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 bg-white/10 rounded-2xl p-4 border border-white/20">
                    <p className="text-white/90 text-sm"><span className="text-[#47ff01] font-bold">Best suited for: </span>Growing companies that need consistent creative output without building an internal design team.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Authority */}
            <div className="mb-12">
              <button
                onClick={() => handleClick('authority')}
                onMouseEnter={() => handleHover('authority')}
                className={`w-full text-left px-6 md:px-8 py-4 md:py-5 rounded-full font-bold text-base md:text-xl transition-all duration-300 flex items-center justify-between gap-3
                  ${activePackage === 'authority' ? 'bg-[#47ff01] text-black shadow-xl shadow-green-400/30 scale-[1.01]' : 'bg-[#47ff01]/20 text-gray-800 hover:bg-[#47ff01] hover:text-black hover:scale-[1.01]'}`}
              >
                <span>Authority Infrastructure</span>
                {activePackage === 'authority' ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
              </button>
              <div className={`pkg-panel ${activePackage === 'authority' ? 'open' : 'closed'}`}>
                <div className="bg-[#5c0386] rounded-[2rem] p-6 md:p-10 text-white mt-3">
                  <p className="text-[#47ff01] text-xl md:text-3xl font-black mb-1">₦500,000 / Month</p>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">For ambitious companies that want to strengthen brand authority, execute campaigns effectively, and scale their marketing presence with greater creative capacity, faster delivery, and strategic oversight.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8">
                    {[
                      { label: 'What This Package Delivers', items: ['Stronger brand authority','Higher-impact marketing campaigns','Faster creative execution for growth initiatives'] },
                      { label: 'Premium Creative Support', items: ['Advanced brand and marketing design','High-quality short-form video production','Motion graphics and visual storytelling','Light animation for campaigns and brand messaging','Creative support for product launches and promotions'] },
                      { label: 'Strategic Creative Direction', items: ['Creative Director oversight','Brand positioning guidance','Campaign creative direction','Messaging and creative strategy support'] },
                      { label: 'Enhanced Request Capacity', items: ['20 creative requests per month','Up to 3 active tasks at the same time','Priority task queue for faster execution'] },
                      { label: 'Priority Delivery Time', items: ['Graphic design: Less than 12 hours','Video editing: 24 – 48 hours','Motion graphics / animation: 2 – 4 working days'] },
                      { label: 'Strategic Coordination', items: ['Dedicated Project Manager','Monthly growth and creative performance report','Strategy review sessions','Higher revision flexibility'] },
                    ].map(({ label, items }) => (
                      <div key={label}>
                        <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-2">{label}</p>
                        <ul className="space-y-1 text-sm text-white/80">{items.map(i => <li key={i}>• {i}</li>)}</ul>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-white/60 text-sm italic">Your project manager ensures your creative pipeline stays organized, prioritized, and delivered efficiently — enabling your team to move faster.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6" style={{ background: 'linear-gradient(135deg,#f3eeff 0%,#e8d8ff 100%)' }}>
              <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed md:max-w-md">
                Get a dedicated creative department that delivers high-quality design, video, and animation on demand — boosting visibility, authority, and revenue without building an in-house team.
              </p>
              <a href="https://calendar.app.google/2nWbeLXuC52dvZtq5" target="_blank" rel="noopener noreferrer"
                className="slk-btn-cta px-8 py-4 rounded-full font-bold text-base md:text-lg flex-shrink-0 whitespace-nowrap text-center"
                style={{ backgroundColor: '#47ff01', color: '#000' }}>
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

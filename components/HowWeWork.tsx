import React from 'react';

interface HowWeWorkProps {
  onNavigateToInfrastructure: () => void;
}

/*
  THE ONLY CHANGE from the working version:
  - Outer card wrapper: removed bg-[#5c0386]
    This was causing purple to bleed through the top rounded corners.
  - The SVG curve between image and purple section: KEPT exactly as before.
  - Everything else: fonts, layout, centering — all unchanged.
*/

/* Gentle downward bow — purple fill curves into the content section */
const BowDivider: React.FC = () => (
  <svg
    viewBox="0 0 400 20"
    preserveAspectRatio="none"
    aria-hidden="true"
    style={{ width: '100%', height: '20px', display: 'block', marginBottom: '-1px' }}
  >
    <path d="M0,0 Q200,20 400,0 L400,20 L0,20 Z" fill="#5c0386" />
  </svg>
);

const GlobalStyles: React.FC = () => (
  <style>{`
    @keyframes slk-pulse {
      0%,100% { box-shadow: 0 0 0 0 rgba(71,255,1,0.55), 0 6px 20px rgba(71,255,1,0.22); }
      60%      { box-shadow: 0 0 0 10px rgba(71,255,1,0), 0 6px 20px rgba(71,255,1,0.22); }
    }
    @keyframes slk-pulse-soft {
      0%,100% { box-shadow: 0 0 0 0 rgba(71,255,1,0.35), 0 4px 14px rgba(71,255,1,0.18); }
      60%      { box-shadow: 0 0 0 8px rgba(71,255,1,0), 0 4px 14px rgba(71,255,1,0.18); }
    }
    .slk-btn-learn {
      animation: slk-pulse 2.2s ease-in-out infinite;
      transition: transform 0.2s ease, filter 0.2s ease;
    }
    .slk-btn-learn:hover {
      transform: scale(1.06); filter: brightness(1.08);
      animation: none; box-shadow: 0 8px 28px rgba(71,255,1,0.45);
    }
    .slk-btn-soon {
      animation: slk-pulse-soft 2.6s ease-in-out infinite;
    }
    .slk-card {
      transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease;
    }
    .slk-card:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 0 32px 64px rgba(92,3,134,0.22), 0 8px 24px rgba(0,0,0,0.12);
    }
  `}</style>
);

export const HowWeWork: React.FC<HowWeWorkProps> = ({ onNavigateToInfrastructure }) => (
  <section className="bg-white py-24 overflow-hidden">
    <GlobalStyles />
    <div className="container mx-auto px-6 md:px-12">

      {/* Section Header */}
      <div className="mb-16">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-geko-dark">How we work</h2>
        <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl leading-relaxed">
          We help growing businesses build creative capacity through flexible, outcome driven
          solutions that power visibility, authority, and revenue.
        </p>
      </div>

      {/* Cards — centred, constrained width */}
      <div className="flex flex-col gap-10 max-w-lg mx-auto md:max-w-2xl lg:max-w-3xl">

        {/* ── Card 1: Creative Infrastructure ── */}
        <div className="slk-card rounded-[2.5rem] overflow-hidden shadow-2xl">
          {/*
            Image fills the top.
            Outer card has NO background — overflow-hidden clips corners cleanly.
            Background here is the illustration's own light purple (#ede9f6)
            so corners look natural instead of white.
          */}
          <div
            className="w-full"
            style={{ height: 'clamp(240px, 42vw, 360px)', background: '#ede9f6' }}
          >
            <img
              src="/assets/creative-infrastructure.jpg"
              alt="Creative Infrastructure"
              className="w-full h-full object-cover object-top block"
            />
          </div>

          {/* SVG bow curves gently downward — image flows into purple */}
          <BowDivider />

          {/* Purple content section */}
          <div className="bg-[#5c0386] px-8 md:px-12 pb-12 pt-4">
            <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-5 tracking-tight leading-tight">
              Creative Infrastructure
            </h3>
            <p className="text-white/90 text-base leading-relaxed mb-3">
              Your full creative department on a flexible monthly subscription, delivering
              design, video, and animation systems that fuel marketing campaigns and brand growth.
            </p>
            <p className="text-white/80 text-base leading-relaxed mb-10">
              Perfect for startups and growing businesses that need consistent, high quality
              creative output without the cost or complexity of building an in house team.
            </p>
            <button
              onClick={onNavigateToInfrastructure}
              className="slk-btn-learn px-8 py-4 rounded-full font-bold text-lg w-fit"
              style={{ backgroundColor: '#47ff01', color: '#000' }}
            >
              Learn More!
            </button>
          </div>
        </div>

        {/* ── Card 2: Creative Talent Outsourcing ── */}
        <div className="slk-card rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div
            className="w-full"
            style={{ height: 'clamp(240px, 42vw, 360px)', background: '#ede9f6' }}
          >
            <img
              src="/assets/talent-outsourcing.jpg"
              alt="Creative Talent Outsourcing"
              className="w-full h-full object-cover object-top block"
            />
          </div>

          <BowDivider />

          <div className="bg-[#5c0386] px-8 md:px-12 pb-12 pt-4">
            <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-5 tracking-tight leading-tight">
              Creative Talent Outsourcing
            </h3>
            <p className="text-white/90 text-base leading-relaxed mb-3">
              Scale faster with vetted, multi skilled creative professionals trained in graphics
              design, animation, and video production, all in one.
            </p>
            <p className="text-white/80 text-base leading-relaxed mb-10">
              Our talents combine technical expertise, AI enabled workflows, and soft skills,
              integrating seamlessly with your team to execute work efficiently and effectively.
            </p>
            <button
              disabled
              className="slk-btn-soon px-8 py-4 rounded-full font-bold text-lg w-fit cursor-not-allowed"
              style={{ backgroundColor: '#47ff01', color: '#000' }}
            >
              Coming Soon
            </button>
          </div>
        </div>

      </div>
    </div>
  </section>
);

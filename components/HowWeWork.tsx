import React, { useState } from 'react';

interface HowWeWorkProps {
  onNavigateToInfrastructure: () => void;
}

/*
  CARD STRUCTURE:
  ┌─────────────────────────────────────┐  ← outer card: rounded-[2.5rem], NO bg
  │  ╔═════════════════════════════╗    │
  │  ║                             ║    │  ← image: rounded-[2rem] on ALL corners
  │  ║       illustration          ║    │    top corners clipped by outer overflow-hidden
  │  ║                             ║    │    bottom corners curve INTO the purple
  │  ╚══════════╝  ╚══════════════╝    │  ← image bottom corners (curved)
  │  ██████████████████████████████    │  ← purple section: flat top, no curve
  │  ██  Creative Infrastructure  ██    │
  │  ██  description text...      ██    │
  │  ██  [Learn More!]            ██    │
  └─────────────────────────────────────┘

  The image rounded-[2rem] at the bottom overlaps the purple bg,
  looking like a rounded-rectangle photo sitting on a purple panel.
  The outer card overflow-hidden clips the top corners of the image.
  No SVG, no fake curves — just border-radius doing its job.
*/

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
    /* Hover lift */
    .slk-card {
      transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1),
                  box-shadow 0.35s ease;
      cursor: pointer;
    }
    .slk-card:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 0 32px 64px rgba(92,3,134,0.22), 0 8px 24px rgba(0,0,0,0.12);
    }
    /* Click pop */
    @keyframes slk-pop {
      0%   { transform: scale(1); }
      35%  { transform: scale(1.06) translateY(-6px); }
      65%  { transform: scale(0.98) translateY(-2px); }
      100% { transform: scale(1)    translateY(0); }
    }
    .slk-card-popped {
      animation: slk-pop 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards;
    }
  `}</style>
);

interface CardProps {
  children: React.ReactNode;
  onPop?: () => void;
}

const Card: React.FC<CardProps> = ({ children, onPop }) => {
  const [popped, setPopped] = useState(false);

  const handleClick = () => {
    setPopped(true);
    if (onPop) onPop();
    // Reset after animation so it can pop again
    setTimeout(() => setPopped(false), 420);
  };

  return (
    <div
      onClick={handleClick}
      className={`slk-card rounded-[2.5rem] overflow-hidden shadow-2xl select-none
        ${popped ? 'slk-card-popped' : ''}`}
    >
      {children}
    </div>
  );
};

export const HowWeWork: React.FC<HowWeWorkProps> = ({ onNavigateToInfrastructure }) => (
  <section className="bg-white py-24 overflow-hidden">
    <GlobalStyles />
    <div className="container mx-auto px-6 md:px-12">

      <div className="mb-16">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-geko-dark">How we work</h2>
        <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl leading-relaxed">
          We help growing businesses build creative capacity through flexible, outcome driven
          solutions that power visibility, authority, and revenue.
        </p>
      </div>

      <div className="flex flex-col gap-10 max-w-lg mx-auto md:max-w-2xl lg:max-w-3xl">

        {/* ── Card 1: Creative Infrastructure ── */}
        <Card onPop={onNavigateToInfrastructure}>
          {/*
            Image container — rounded on ALL corners (2rem).
            Top corners are clipped by the outer card's overflow-hidden.
            Bottom corners curve downward into the purple below.
            The purple bg shows through those bottom curves naturally.
            No SVG, no fake divider needed.
          */}
          <div className="bg-[#5c0386]">
            <div
              className="w-full rounded-[2rem] overflow-hidden"
              style={{ height: 'clamp(240px, 42vw, 360px)' }}
            >
              <img
                src="/assets/creative-infrastructure.jpg"
                alt="Creative Infrastructure"
                className="w-full h-full object-cover object-top block"
              />
            </div>
          </div>

          {/* Purple content — flat top, no curve */}
          <div className="bg-[#5c0386] px-8 md:px-12 pb-12 pt-6">
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
              onClick={(e) => { e.stopPropagation(); onNavigateToInfrastructure(); }}
              className="slk-btn-learn px-8 py-4 rounded-full font-bold text-lg w-fit"
              style={{ backgroundColor: '#47ff01', color: '#000' }}
            >
              Learn More!
            </button>
          </div>
        </Card>

        {/* ── Card 2: Creative Talent Outsourcing ── */}
        <Card>
          <div className="bg-[#5c0386]">
            <div
              className="w-full rounded-[2rem] overflow-hidden"
              style={{ height: 'clamp(240px, 42vw, 360px)' }}
            >
              <img
                src="/assets/talent-outsourcing.jpg"
                alt="Creative Talent Outsourcing"
                className="w-full h-full object-cover object-top block"
              />
            </div>
          </div>

          <div className="bg-[#5c0386] px-8 md:px-12 pb-12 pt-6">
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
        </Card>

      </div>
    </div>
  </section>
);

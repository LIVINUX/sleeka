import React from 'react';

interface HowWeWorkProps {
  onNavigateToInfrastructure: () => void;
}

/*
  The card is a rounded rectangle (rounded-[2.5rem]).
  The image fills the top of the card.
  To make the boundary between image and purple feel natural
  to the card shape, we give the image container rounded bottom
  corners (rounded-b-[2rem]) so the photo appears as a picture
  with its own gently curved lower edge — as if the image itself
  has been shaped to sit inside the card.
  The outer card's overflow:hidden handles the outer corners.
  No SVG, no fake curve — just the card's own border-radius language.
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

      {/* Cards */}
      <div className="flex flex-col gap-10 max-w-lg mx-auto md:max-w-2xl lg:max-w-3xl">

        {/* ── Card 1: Creative Infrastructure ── */}
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#5c0386]">

          {/*
            Image sits inside the card.
            rounded-b-[2rem] gives the image gentle rounded bottom corners
            that match the card's own visual language — no harsh straight cut.
            The purple background of the card section shows through those corners,
            creating a natural inset-photo look.
          */}
          <div
            className="w-full rounded-b-[2rem] overflow-hidden"
            style={{ height: 'clamp(240px, 42vw, 360px)' }}
          >
            <img
              src="/assets/creative-infrastructure.jpg"
              alt="Creative Infrastructure"
              className="w-full h-full object-cover object-top block"
            />
          </div>

          {/* Purple content */}
          <div className="px-8 md:px-12 pb-12 pt-6">
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
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#5c0386]">

          <div
            className="w-full rounded-b-[2rem] overflow-hidden"
            style={{ height: 'clamp(240px, 42vw, 360px)' }}
          >
            <img
              src="/assets/talent-outsourcing.jpg"
              alt="Creative Talent Outsourcing"
              className="w-full h-full object-cover object-top block"
            />
          </div>

          <div className="px-8 md:px-12 pb-12 pt-6">
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

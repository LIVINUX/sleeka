import React from 'react';

interface HowWeWorkProps {
  onNavigateToInfrastructure: () => void;
}

export const HowWeWork: React.FC<HowWeWorkProps> = ({ onNavigateToInfrastructure }) => {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      {/* Pulsing button animation styles */}
      <style>{`
        @keyframes pulse-green {
          0%, 100% { box-shadow: 0 0 0 0 rgba(71,255,1,0.55), 0 6px 20px rgba(71,255,1,0.25); }
          60%       { box-shadow: 0 0 0 10px rgba(71,255,1,0),  0 6px 20px rgba(71,255,1,0.25); }
        }
        @keyframes pulse-green-soft {
          0%, 100% { box-shadow: 0 0 0 0 rgba(71,255,1,0.35), 0 4px 14px rgba(71,255,1,0.2); }
          60%       { box-shadow: 0 0 0 8px rgba(71,255,1,0),  0 4px 14px rgba(71,255,1,0.2); }
        }
        .btn-pulse-green {
          animation: pulse-green 2.2s ease-in-out infinite;
          transition: transform 0.2s ease, filter 0.2s ease;
        }
        .btn-pulse-green:hover {
          transform: scale(1.06);
          filter: brightness(1.08);
          animation: none;
          box-shadow: 0 8px 28px rgba(71,255,1,0.45);
        }
        .btn-pulse-green-soft {
          animation: pulse-green-soft 2.5s ease-in-out infinite;
          transition: transform 0.2s ease, filter 0.2s ease;
          cursor: default;
        }
      `}</style>

      <div className="container mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-geko-dark">
            How we work
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl leading-relaxed">
            We help growing businesses build creative capacity through flexible, outcome driven solutions that power visibility, authority, and revenue.
          </p>
        </div>

        {/* Cards — single column, max width on desktop for a card-style look */}
        <div className="flex flex-col gap-10 max-w-lg mx-auto md:max-w-2xl lg:max-w-3xl">

          {/* ── Card 1: Creative Infrastructure ── */}
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">

            {/* Image area — object-contain keeps full illustration visible, bg matches illustration */}
            <div
              className="w-full overflow-hidden"
              style={{ background: '#ede9f6', height: 'clamp(240px, 40vw, 360px)' }}
            >
              <img
                src="/assets/creative-infrastructure.jpg"
                alt="Creative Infrastructure"
                className="w-full h-full object-contain object-center"
                style={{ display: 'block' }}
              />
            </div>

            {/* Purple content — rounded top scoops UP into image (curve into purple) */}
            <div
              className="bg-[#5c0386] px-8 md:px-12 pt-10 pb-12"
              style={{
                borderRadius: '2.5rem 2.5rem 0 0',
                marginTop: '-2.5rem',
                position: 'relative',
              }}
            >
              <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-5 tracking-tight leading-tight">
                Creative Infrastructure
              </h3>
              <p className="text-white/90 text-base leading-relaxed mb-3">
                Your full creative department on a flexible monthly subscription, delivering design, video, and animation systems that fuel marketing campaigns and brand growth.
              </p>
              <p className="text-white/80 text-base leading-relaxed mb-10">
                Perfect for startups and growing businesses that need consistent, high quality creative output without the cost or complexity of building an in house team.
              </p>
              <button
                onClick={onNavigateToInfrastructure}
                className="btn-pulse-green px-8 py-4 rounded-full font-bold text-lg w-fit"
                style={{ backgroundColor: '#47ff01', color: '#000' }}
              >
                Learn More!
              </button>
            </div>
          </div>

          {/* ── Card 2: Creative Talent Outsourcing ── */}
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">

            <div
              className="w-full overflow-hidden"
              style={{ background: '#ede9f6', height: 'clamp(240px, 40vw, 360px)' }}
            >
              <img
                src="/assets/talent-outsourcing.jpg"
                alt="Creative Talent Outsourcing"
                className="w-full h-full object-contain object-center"
                style={{ display: 'block' }}
              />
            </div>

            <div
              className="bg-[#5c0386] px-8 md:px-12 pt-10 pb-12"
              style={{
                borderRadius: '2.5rem 2.5rem 0 0',
                marginTop: '-2.5rem',
                position: 'relative',
              }}
            >
              <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-5 tracking-tight leading-tight">
                Creative Talent Outsourcing
              </h3>
              <p className="text-white/90 text-base leading-relaxed mb-3">
                Scale faster with vetted, multi skilled creative professionals trained in graphics design, animation, and video production, all in one.
              </p>
              <p className="text-white/80 text-base leading-relaxed mb-10">
                Our talents combine technical expertise, AI enabled workflows, and soft skills, integrating seamlessly with your team to execute work efficiently and effectively.
              </p>
              <button
                disabled
                className="btn-pulse-green-soft px-8 py-4 rounded-full font-bold text-lg w-fit opacity-95"
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
};

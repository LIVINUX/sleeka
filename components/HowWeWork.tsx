import React from 'react';

export const HowWeWork: React.FC = () => {
  const goToInfrastructure = () => {
    window.location.hash = '#/creative-infrastructure';
    window.scrollTo(0, 0);
  };

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-geko-dark">
            How we work
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl leading-relaxed">
            We help growing businesses build creative capacity through flexible, outcome driven solutions that power visibility, authority, and revenue.
          </p>
        </div>

        {/* Two Cards */}
        <div className="flex flex-col gap-10 max-w-2xl mx-auto md:max-w-none">

          {/* ── Card 1: Creative Infrastructure ── */}
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
            {/* Image fills full width, fixed height */}
            <div className="relative w-full h-72 md:h-80 overflow-hidden">
              <img
                src="/assets/creative-infrastructure.jpg"
                alt="Creative Infrastructure"
                className="w-full h-full object-cover object-center"
              />
              {/* Curved overlap - purple arc at bottom of image */}
              <div
                className="absolute bottom-0 left-0 right-0 h-16"
                style={{
                  background: '#5c0386',
                  borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
                  transform: 'scaleX(1.1)',
                }}
              />
            </div>

            {/* Purple Content */}
            <div className="bg-[#5c0386] px-8 md:px-12 pt-4 pb-12">
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
                onClick={goToInfrastructure}
                className="px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 duration-300 w-fit shadow-xl"
                style={{ backgroundColor: '#47ff01', color: '#000' }}
              >
                Learn More!
              </button>
            </div>
          </div>

          {/* ── Card 2: Creative Talent Outsourcing ── */}
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
            {/* Image fills full width, fixed height */}
            <div className="relative w-full h-72 md:h-80 overflow-hidden">
              <img
                src="/assets/talent-outsourcing.jpg"
                alt="Creative Talent Outsourcing"
                className="w-full h-full object-cover object-center"
              />
              {/* Curved overlap */}
              <div
                className="absolute bottom-0 left-0 right-0 h-16"
                style={{
                  background: '#5c0386',
                  borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
                  transform: 'scaleX(1.1)',
                }}
              />
            </div>

            {/* Purple Content */}
            <div className="bg-[#5c0386] px-8 md:px-12 pt-4 pb-12">
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
                className="px-8 py-4 rounded-full font-bold text-lg cursor-not-allowed w-fit opacity-95"
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

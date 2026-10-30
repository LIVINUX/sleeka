import React, { useState } from 'react';

interface HowWeWorkProps {
  onNavigateToInfrastructure: () => void;
}

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
    .slk-btn-soon { animation: slk-pulse-soft 2.6s ease-in-out infinite; }
    .slk-card {
      transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease;
    }
    .slk-card:hover {
      transform: translateY(-8px) scale(1.015);
      box-shadow: 0 28px 56px rgba(92,3,134,0.2), 0 8px 20px rgba(0,0,0,0.1);
    }
    @keyframes slk-pop {
      0%   { transform: scale(1); }
      40%  { transform: scale(1.05) translateY(-4px); }
      70%  { transform: scale(0.98); }
      100% { transform: scale(1); }
    }
    .slk-popped { animation: slk-pop 0.38s cubic-bezier(0.34,1.56,0.64,1) forwards; }
  `}</style>
);

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [popped, setPopped] = useState(false);
  const handleClick = () => {
    setPopped(true);
    setTimeout(() => setPopped(false), 420);
  };
  return (
    <div
      onClick={handleClick}
      className={`slk-card rounded-[2.5rem] overflow-hidden shadow-2xl cursor-pointer ${popped ? 'slk-popped' : ''}`}
    >
      {children}
    </div>
  );
};

export const HowWeWork: React.FC<HowWeWorkProps> = ({ onNavigateToInfrastructure }) => (
  <section className="bg-white py-16 overflow-hidden">
    <GlobalStyles />
    <div className="container mx-auto px-6 md:px-12">

      <div className="mb-12">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-geko-dark">Plug Into a Complete Marketing Department</h2>
        <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl leading-relaxed">
          Instead of juggling freelancers or building an expensive in-house team, you get access to
          a dedicated team that delivers measurable results through a flexible monthly subscription.
        </p>
      </div>

      <div className="flex flex-col gap-10 max-w-lg mx-auto md:max-w-2xl lg:max-w-3xl">

        {/* Card 1 */}
        <Card>
          <div style={{ height: 'clamp(260px, 45vw, 380px)' }}>
            <img src="/assets/creative-infrastructure.jpg" alt="Creative Infrastructure"
              className="w-full h-full object-cover object-top block" />
          </div>
          <div className="bg-[#5c0386] px-8 md:px-12 pb-12 pt-8 relative z-10"
            style={{ marginTop: '-2rem', borderRadius: '2rem 2rem 0 0' }}>
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-5 tracking-tight leading-tight">
              Dedicated To Your Business
            </h3>
            <p className="text-white/90 text-base leading-relaxed mb-3">
              Unlike traditional agencies where teams are shared across multiple clients, you get a
              team of marketing specialists focused entirely on your business. They learn your
              business, understand your goals, and work as a seamless extension of your internal team.
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

        {/* Card 2 */}
        <Card>
          <div style={{ height: 'clamp(260px, 45vw, 380px)' }}>
            <img src="/assets/talent-outsourcing.jpg" alt="Creative Talent Outsourcing"
              className="w-full h-full object-cover object-top block" />
          </div>
          <div className="bg-[#5c0386] px-8 md:px-12 pb-12 pt-8 relative z-10"
            style={{ marginTop: '-2rem', borderRadius: '2rem 2rem 0 0' }}>
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-5 tracking-tight leading-tight">
              Work Directly With Your Team
            </h3>
            <p className="text-white/90 text-base leading-relaxed mb-3">
              Collaborate directly with your Project Manager, Growth and Performance Marketer, Lead
              Generation Specialist, Content Strategist, Graphic Designer and Video Editor in one
              shared workspace. No long email chains. No communication bottlenecks. Just faster
              feedback, smoother collaboration, and consistent execution.
            </p>
            <button disabled
              className="slk-btn-soon px-8 py-4 rounded-full font-bold text-lg w-fit cursor-not-allowed"
              style={{ backgroundColor: '#47ff01', color: '#000' }}>
              Coming Soon
            </button>
          </div>
        </Card>

        {/* Card 3 */}
        <Card>
          <div style={{ height: 'clamp(260px, 45vw, 380px)' }}>
            <img src="/assets/creative-infrastructure.jpg" alt="SleekaOS operating system" className="w-full h-full object-cover object-top block" />
          </div>
          <div className="bg-[#5c0386] px-8 md:px-12 pb-12 pt-8 relative z-10" style={{ marginTop: '-2rem', borderRadius: '2rem 2rem 0 0' }}>
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-5 tracking-tight leading-tight">Operating System<br />Powered By SleekaOS</h3>
            <p className="text-white/90 text-base leading-relaxed mb-10">Track what&apos;s planned, what&apos;s in progress and how your marketing activities are performing, with clear visibility into the work being done. Your marketing stays organized, measurable, and focused on driving business results.</p>
            <button disabled className="slk-btn-soon px-8 py-4 rounded-full font-bold text-lg w-fit cursor-not-allowed" style={{ backgroundColor: '#47ff01', color: '#000' }}>Coming Soon</button>
          </div>
        </Card>

        {/* Card 4 */}
        <Card>
          <div style={{ height: 'clamp(260px, 45vw, 380px)' }}>
            <img src="/assets/talent-outsourcing.jpg" alt="Marketing team scaling" className="w-full h-full object-cover object-top block" />
          </div>
          <div className="bg-[#5c0386] px-8 md:px-12 pb-12 pt-8 relative z-10" style={{ marginTop: '-2rem', borderRadius: '2rem 2rem 0 0' }}>
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-5 tracking-tight leading-tight">Scale Without Hiring</h3>
            <p className="text-white/90 text-base leading-relaxed mb-10">Access the capabilities of a full marketing department without recruitment costs, payroll overhead, or management stress of building one yourself. Simply plug in and get the execution your business needs.</p>
            <button disabled className="slk-btn-soon px-8 py-4 rounded-full font-bold text-lg w-fit cursor-not-allowed" style={{ backgroundColor: '#47ff01', color: '#000' }}>Coming Soon</button>
          </div>
        </Card>

      </div>
    </div>
  </section>
);

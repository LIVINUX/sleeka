import React from 'react';

interface HowWeWorkProps {
  onNavigateToInfrastructure: () => void;
}

const GlobalStyles: React.FC = () => (
  <style>{`
    @keyframes slk-pulse {
      0%,100% { box-shadow: 0 0 0 0 rgba(71,255,1,0.55), 0 6px 20px rgba(71,255,1,0.22); }
      60%      { box-shadow: 0 0 0 10px rgba(71,255,1,0), 0 6px 20px rgba(71,255,1,0.22); }
    }
    .slk-btn-learn {
      animation: slk-pulse 2.2s ease-in-out infinite;
      transition: transform 0.2s ease;
    }
    .slk-btn-learn:hover {
      transform: scale(1.06);
      animation: none;
      box-shadow: 0 8px 28px rgba(71,255,1,0.45);
    }
  `}</style>
);

export const HowWeWork: React.FC<HowWeWorkProps> = ({ onNavigateToInfrastructure }) => (
  <section className="bg-white py-16 overflow-hidden">
    <GlobalStyles />
    <div className="container mx-auto px-6 md:px-12 max-w-2xl">

      {/* Header — no Slide transition */}
      <h2 className="text-4xl md:text-6xl font-bold text-geko-dark mb-4">Packages</h2>
      <p className="text-lg md:text-xl text-gray-600 font-normal max-w-3xl leading-relaxed mb-12">
        Flexible monthly plans built for you if you need more content, faster execution, and better marketing results.
      </p>

      {/* Card — purple gradient, no number, no green accent line, no Slide */}
      <div
        className="relative rounded-[2.5rem] overflow-hidden p-8 md:p-12 text-center"
        style={{
          background: 'linear-gradient(135deg, #5c0386 0%, #4a0270 100%)',
          boxShadow: '0 32px 80px rgba(92,3,134,0.2)',
        }}
      >
        {/* Icon */}
        <div className="relative z-10 flex justify-center mb-5">
          <div
            className="w-20 h-20 rounded-2xl overflow-hidden flex items-center justify-center"
            style={{ backgroundColor: 'rgba(71,255,1,0.12)', border: '1px solid rgba(71,255,1,0.25)' }}
          >
            <img
              src="/assets/icons/packages/money.png"
              alt="Packages"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Badge label only — no title header */}
        <div className="flex justify-center mb-6 relative z-10">
          <span
            className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
            style={{ backgroundColor: 'rgba(71,255,1,0.15)', color: '#47ff01', border: '1px solid rgba(71,255,1,0.3)' }}
          >
            Risk-Free Model
          </span>
        </div>

        {/* Subtext — spaced out since no header above */}
        <p className="text-white/90 text-base leading-relaxed mb-4 relative z-10">
          Work with your dedicated creative department throughout the month, experience the value delivered, and pay at month end.
        </p>
        <p className="text-white/70 text-base leading-relaxed mb-12 relative z-10">
          No recruitment costs. No long-term commitments. Just a flexible model designed to grow with your business.
        </p>

        {/* Button */}
        <button
          onClick={onNavigateToInfrastructure}
          className="slk-btn-learn px-8 py-4 rounded-full font-bold text-base whitespace-nowrap inline-flex items-center justify-center relative z-10"
          style={{ backgroundColor: '#47ff01', color: '#000' }}
        >
          View Packages
        </button>
      </div>

    </div>
  </section>
);

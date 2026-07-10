import React, { useState } from 'react';
import { Slide } from './PlugIntoSection';

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

      {/* Header */}
      <Slide delay={0} className="mb-4">
        <h2 className="text-4xl md:text-6xl font-bold text-geko-dark">Packages</h2>
      </Slide>
      <Slide delay={0.08} className="mb-12">
        <p className="text-lg md:text-xl text-gray-600 font-normal max-w-3xl leading-relaxed">
          Flexible monthly plans built for businesses that need more content, faster execution, and better marketing results.
        </p>
      </Slide>

      {/* Card — plug-into style */}
      <Slide delay={0.14}>
        <div
          className="relative rounded-[2.5rem] overflow-hidden p-8 md:p-12 text-center"
          style={{
            backgroundColor: '#ffffff',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            border: '1px solid rgba(0,0,0,0.06)',
          }}
        >
          {/* Faded background text */}
          <span
            className="absolute right-4 top-0 font-black select-none pointer-events-none leading-none"
            style={{ fontSize: 'clamp(5rem, 16vw, 9rem)', color: 'rgba(92,3,134,0.04)', letterSpacing: '-0.04em' }}
          >
            01
          </span>

          {/* Icon */}
          <div className="relative z-10 flex justify-center mb-5">
            <div
              className="w-20 h-20 rounded-2xl overflow-hidden flex items-center justify-center"
              style={{ backgroundColor: 'rgba(92,3,134,0.08)', border: '1px solid rgba(92,3,134,0.15)' }}
            >
              <img
                src="/assets/icons/packages/money.png"
                alt="Packages"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Badge */}
          <div className="flex justify-center mb-4 relative z-10">
            <span
              className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
              style={{ backgroundColor: 'rgba(92,3,134,0.08)', color: '#5c0386', border: '1px solid rgba(92,3,134,0.2)' }}
            >
              Risk-Free Model
            </span>
          </div>

          {/* Title */}
          <h3
            className="text-2xl md:text-3xl font-black mb-4 leading-tight relative z-10"
            style={{ color: '#5c0386' }}
          >
            Creative Infrastructure
          </h3>

          {/* Subtext — same style difference as original */}
          <p className="text-gray-700 text-base leading-relaxed mb-3 relative z-10">
            Work with your dedicated creative department throughout the month, experience the value delivered, and pay at month end.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-10 relative z-10">
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
      </Slide>

    </div>
  </section>
);

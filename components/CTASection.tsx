import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div
          className="relative rounded-[2rem] overflow-hidden max-w-4xl mx-auto"
          style={{
            background: '#e6d5f7',
            boxShadow: '0 8px 40px rgba(92,3,134,0.12)',
          }}
        >
          <div className="px-10 md:px-14 py-12 md:py-16 flex flex-col items-center text-center">

            <p
              className="font-bold uppercase tracking-wide mb-4"
              style={{
                fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
                color: '#1a1a2e',
                letterSpacing: '0.08em',
              }}
            >
              Stop Posting Without Results.
            </p>

            <h2
              className="font-black leading-tight mb-8"
              style={{
                fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
                color: '#5c0386',
              }}
            >
              Plug Into a System That Drives Growth.
            </h2>

            <p
              className="text-base md:text-lg leading-relaxed mb-10 max-w-xl"
              style={{ color: '#4a4a6a' }}
            >
              Turn your content into a predictable engine for visibility, leads, and revenue —
              without the cost of building an in-house team, the stress of managing creatives,
              or dealing with inconsistent output.
            </p>

            {/* Button with border pop effect */}
            <style>{`
              .cta-btn {
                position: relative;
                background-color: #47ff01;
                color: #000;
                padding: 16px 36px;
                border-radius: 9999px;
                font-weight: 700;
                font-size: 1rem;
                display: inline-flex;
                align-items: center;
                gap: 10px;
                white-space: nowrap;
                box-shadow: 0 0 0 0 rgba(71,255,1,0.5);
                animation: borderPop 2s ease-in-out infinite;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                text-decoration: none;
              }
              .cta-btn:hover {
                transform: scale(1.05);
                animation: none;
                box-shadow: 0 0 0 6px rgba(71,255,1,0.3), 0 20px 40px rgba(0,0,0,0.15);
              }
              @keyframes borderPop {
                0%   { box-shadow: 0 0 0 0 rgba(71,255,1,0.6); }
                60%  { box-shadow: 0 0 0 12px rgba(71,255,1,0); }
                100% { box-shadow: 0 0 0 0 rgba(71,255,1,0); }
              }
            `}</style>

            <a
              href="https://calendar.app.google/2nWbeLXuC52dvZtq5"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn group"
            >
              Book a Discovery Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

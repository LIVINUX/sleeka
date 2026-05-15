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

            {/* Small intro line — slightly bigger than a label */}
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

            {/* Main headline — big */}
            <h2
              className="font-black leading-tight mb-8"
              style={{
                fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
                color: '#5c0386',
              }}
            >
              Plug Into a System That Drives Growth.
            </h2>

            {/* Body text */}
            <p
              className="text-base md:text-lg leading-relaxed mb-10 max-w-xl"
              style={{ color: '#4a4a6a' }}
            >
              Turn your content into a predictable engine for visibility, leads, and revenue —
              without the cost of building an in-house team, the stress of managing creatives,
              or dealing with inconsistent output.
            </p>

            {/* Button — exact copy from Hero */}
            <a
              href="https://calendar.app.google/2nWbeLXuC52dvZtq5"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-bold text-base sm:text-lg transition-all flex items-center gap-2 md:gap-3 group shadow-xl hover:shadow-2xl hover:scale-105 duration-300 justify-center whitespace-nowrap"
              style={{ backgroundColor: '#47ff01', color: '#000' }}
            >
              Book a Discovery Call
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

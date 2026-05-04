import React from 'react';

export const CTASection: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div
          className="relative rounded-[2rem] overflow-hidden max-w-4xl mx-auto"
          style={{
            background: 'linear-gradient(135deg, #fdf8ff 0%, #f0e6ff 50%, #e8d5ff 100%)',
            boxShadow: '0 8px 40px rgba(92,3,134,0.12)',
          }}
        >
          {/* Left accent stripe */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1.5"
            style={{ background: 'linear-gradient(to bottom, #47ff01, #5c0386)' }}
          />

          <div className="px-10 md:px-14 py-10 md:py-12">
            {/* Small header */}
            <p
              className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
              style={{ color: '#5c0386' }}
            >
              Ready to Scale Your Creative?
            </p>

            {/* Main headline */}
            <h2
              className="font-black leading-tight mb-4"
              style={{
                fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
                color: '#1a1a2e',
              }}
            >
              Stop Posting Without Results.<br />
              <span style={{ color: '#5c0386' }}>
                Plug Into a System That Drives Growth.
              </span>
            </h2>

            {/* Body text */}
            <p
              className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl"
              style={{ color: '#4a4a6a' }}
            >
              Turn your content into a predictable engine for visibility, leads, and revenue —
              without the cost of building an in-house team, the stress of managing creatives,
              or dealing with inconsistent output.
            </p>

            {/* Button — single line, no arrow */}
            <a
              href="https://calendar.app.google/2nWbeLXuC52dvZtq5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full font-bold text-base transition-all hover:scale-105 duration-300 shadow-xl hover:shadow-2xl"
              style={{ backgroundColor: '#47ff01', color: '#000', padding: '16px 32px' }}
            >
              Book a Discovery Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

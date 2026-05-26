import React from 'react';

const logoSet = [
  "/assets/Client logos/1.png",
  "/assets/Client logos/2.png",
  "/assets/Client logos/3.png",
  "/assets/Client logos/4.png",
  "/assets/Client logos/5.png",
  "/assets/Client logos/6.png",
  "/assets/Client logos/7.png",
];

export const TrustedBy: React.FC = () => {
  return (
    <section className="bg-geko-dark pb-24 pt-0 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <p className="text-center text-white/50 text-xs uppercase tracking-[0.2em] font-medium">
          Trusted by world class brands
        </p>
      </div>

      <div className="w-full relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-geko-dark to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-geko-dark to-transparent z-20 pointer-events-none"></div>

        {/* Seamless marquee — two identical sets, second one picks up exactly where first ends */}
        <div className="flex items-center" style={{ animation: 'marqueeScroll 28s linear infinite' }}>
          {/* Set 1 */}
          {logoSet.map((logo, index) => (
            <div
              key={`a-${index}`}
              className="mx-8 md:mx-12 flex-shrink-0 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              <img
                src={logo}
                alt={`Client logo ${index + 1}`}
                className="w-auto object-contain"
                style={{ height: '40px', maxWidth: '120px' }}
              />
            </div>
          ))}
          {/* Set 2 — exact duplicate, creates seamless loop */}
          {logoSet.map((logo, index) => (
            <div
              key={`b-${index}`}
              className="mx-8 md:mx-12 flex-shrink-0 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              <img
                src={logo}
                alt={`Client logo ${index + 1}`}
                className="w-auto object-contain"
                style={{ height: '40px', maxWidth: '120px' }}
              />
            </div>
          ))}
        </div>

        <style>{`
          @keyframes marqueeScroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </section>
  );
};

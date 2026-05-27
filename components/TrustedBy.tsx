import React from 'react';

// ─── LOGO SIZES — edit each height here anytime ───────────────────────────
const logoConfig = [
  { file: "1.png", name: "Bluechip",     height: 110 },
  { file: "2.png", name: "JHDC",         height: 110 },
  { file: "3.png", name: "Citisquare",   height: 110 },
  { file: "4.png", name: "PBN",          height:  96 },
  { file: "5.png", name: "Felicia",      height:  36 },
  { file: "6.png", name: "Socialander",  height: 110 },
  { file: "7.png", name: "Presta",       height:  96 },
];
// ──────────────────────────────────────────────────────────────────────────

// Doubled for seamless -50% loop
const logos = [...logoConfig, ...logoConfig];

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
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-geko-dark to-transparent z-20"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-geko-dark to-transparent z-20"></div>

        <div className="flex w-max animate-marquee items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="mx-8 md:mx-12 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"
            >
              <img
                src={`/assets/Client logos/${logo.file}`}
                alt={logo.name}
                className="w-auto object-contain"
                style={{ height: `${logo.height}px` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

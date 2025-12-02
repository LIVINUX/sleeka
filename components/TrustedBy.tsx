import React from 'react';

// Triple the logos to ensure enough content for smooth scrolling on large screens
const logos = [
  "LettuceWork", "MedEase", "SATO", "Solvex", "Tetracore", "CROWN",
  "LettuceWork", "MedEase", "SATO", "Solvex", "Tetracore", "CROWN",
  "LettuceWork", "MedEase", "SATO", "Solvex", "Tetracore", "CROWN"
];

export const TrustedBy: React.FC = () => {
  return (
    <section className="bg-geko-dark pb-24 pt-0 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <p className="text-center text-white/50 text-xs uppercase tracking-[0.2em] font-medium">Trusted by world class brands</p>
      </div>
      
      <div className="w-full relative overflow-hidden">
         {/* Gradient masks for smooth fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-geko-dark to-transparent z-20"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-geko-dark to-transparent z-20"></div>

        <div className="flex w-max animate-marquee items-center">
          {logos.map((logo, index) => (
            <div key={index} className="mx-8 md:mx-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default">
               <div className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
                   {/* Simulating logo icons with diverse shapes */}
                   {index % 3 === 0 && <div className="w-8 h-8 rounded-full bg-white/20"></div>}
                   {index % 3 === 1 && <div className="w-8 h-8 rotate-45 bg-white/20"></div>}
                   {index % 3 === 2 && <div className="w-8 h-8 rounded-md bg-white/20"></div>}
                   <span>{logo}</span>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
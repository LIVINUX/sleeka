import React from 'react';

// Triple the logos to ensure enough content for smooth scrolling on large screens
const logos = [
  "/assets/Client logos/1.png",
  "/assets/Client logos/2.png",
  "/assets/Client logos/3.png",
  "/assets/Client logos/4.png",
  "/assets/Client logos/5.png",
  "/assets/Client logos/6.png",
  "/assets/Client logos/7.png",
  "/assets/Client logos/1.png",
  "/assets/Client logos/2.png",
  "/assets/Client logos/3.png",
  "/assets/Client logos/4.png",
  "/assets/Client logos/5.png",
  "/assets/Client logos/6.png",
  "/assets/Client logos/7.png",
  "/assets/Client logos/1.png",
  "/assets/Client logos/2.png",
  "/assets/Client logos/3.png",
  "/assets/Client logos/4.png",
  "/assets/Client logos/5.png",
  "/assets/Client logos/6.png",
  "/assets/Client logos/7.png"
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
            <div key={index} className="mx-8 md:mx-12 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default">
               <img src={logo} alt={`Client ${index + 1}`} className="h-24 md:h-24 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
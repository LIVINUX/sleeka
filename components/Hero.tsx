import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-geko-dark text-white md:pt-32 pb-0 overflow-hidden py-28 md:min-h-screen flex flex-col justify-between">
      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-12 text-center relative z-10 flex-grow flex flex-col justify-center pt- md:pt-20">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 md:mb-8 px-2">
          Your creative department <br className="hidden sm:block" />
          on demand.
        </h1>

        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-200 font-light leading-relaxed mb-10 md:mb-16 px-4">
          Unlock consistent visibility, stronger brand authority, and revenue growth with a flexible on demand creative team powered by top African talent.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mb-8 md:mb-12 px-4">
          <a 
            href="https://calendar.app.google/2nWbeLXuC52dvZtq5"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-bold text-base sm:text-lg transition-all flex items-center gap-2 md:gap-3 group shadow-xl hover:shadow-2xl hover:scale-105 duration-300 w-full sm:w-auto justify-center" 
            style={{ backgroundColor: '#47ff01', color: '#000' }}
          >
            Book a Discovery Call
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Decorative Curve at Bottom - Updated color to accent/teal */}
      <div className="relative w-full h-20 md:h-24 mt-auto z-10">
        <div className="absolute bottom-0 left-0 right-0 h-full bg-geko-accent rounded-t-[50%] md:rounded-t-[100%] transform scale-x-150 translate-y-1/2 opacity-20 z-0"></div>
        <div className="absolute bottom-0 left-0 right-0 h-full bg-geko-accent rounded-t-[50%] md:rounded-t-[100%] transform scale-x-110 translate-y-2/3 opacity-10 z-0"></div>
      </div>

      {/* Bottom overlay to transition to next section smoothly */}
      <div className="w-full h-16 bg-geko-dark absolute bottom-0 z-0"></div>
    </section>
  );
};

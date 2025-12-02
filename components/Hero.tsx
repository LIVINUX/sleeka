import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-geko-dark text-white pt-32 pb-0 overflow-hidden min-h-screen flex flex-col justify-between">
      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 text-center relative z-10 flex-grow flex flex-col justify-center pt-16 md:pt-20">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
          Design & Marketing That <br />
          <span className="italic font-light">Hooks</span> Your Audience.
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-lg text-gray-200 font-light leading-relaxed mb-16">
          From Branding to App Design and Marketing, forward-thinking brands 
          are always intentional about captivating the right audience. 
          <br className="hidden md:block" />
          <span className="font-bold text-white">BrandGeko helps them win.</span>
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mb-12">
            <button className="px-10 py-5 rounded-full font-bold text-lg transition-all flex items-center gap-3 group shadow-xl hover:shadow-2xl hover:scale-105 duration-300" style={{ backgroundColor: '#47ff01', color: '#000' }}>
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
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
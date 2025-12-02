import React from 'react';
import { Play } from 'lucide-react';

export const VideoSection: React.FC = () => {
  return (
    <section className="bg-geko-dark relative z-20 pb-20">
      {/* Container that overlaps slightly with the Hero's bottom curve area */}
      <div className="container mx-auto px-6 md:px-12 -mt-12 md:-mt-16 relative z-30">
        <div className="w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-[6px] border-white/10 relative group aspect-video bg-black">
            {/* Poster Image */}
            <img 
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2400&auto=format&fit=crop" 
                alt="BrandGeko Showreel" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                 <button className="w-20 h-20 md:w-28 md:h-28 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/30 shadow-[0_0_30px_rgba(0,0,0,0.3)]">
                    <div className="w-14 h-14 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:shadow-xl transition-shadow">
                        <Play className="fill-geko-dark text-geko-dark w-6 h-6 md:w-8 md:h-8" />
                    </div>
                </button>
            </div>
            
            {/* Video Label */}
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                <span className="bg-white/90 backdrop-blur text-geko-dark px-4 py-2 rounded-full text-xs md:text-sm font-bold tracking-wide uppercase">
                    Agency Showreel
                </span>
            </div>
        </div>
      </div>
      
      {/* Background blend element - Updated to dark to blend with hero */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-geko-dark -z-10"></div>
    </section>
  );
};
import React from 'react';
import { Play } from 'lucide-react';

export const VideoSection: React.FC = () => {
  return (
    <section className="bg-geko-dark relative z-20 pb-20">
      {/* Container that overlaps slightly with the Hero's bottom curve area */}
      <div className="container mx-auto px-6 md:px-12 -mt-12 md:-mt-16 relative z-30">
        <div className="w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative group aspect-video bg-black">
            {/* Video Player */}
            <video 
                src="/assets/Sleeka Showreel.mp4" 
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
            />
            
            {/* Video Label */}
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                <span className="bg-white/90 backdrop-blur text-geko-dark px-4 py-2 rounded-full text-xs md:text-sm font-bold tracking-wide camelCase">
                    Our System
                </span>
            </div>
        </div>
      </div>
      
      {/* Background blend element - Updated to dark to blend with hero */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-geko-dark -z-10"></div>
    </section>
  );
};

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const talents = [
  {
    name: "Sarah Jenkins",
    role: "Visual & Motion Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
    skills: "Brand Identity • After Effects • Figma",
    available: true
  },
  {
    name: "David Chen",
    role: "Product & UI Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    skills: "UI/UX • Prototyping • Webflow",
    available: true
  },
  {
    name: "Elena Rodriguez",
    role: "Creative Generalist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
    skills: "Illustration • Animation • Social",
    available: false
  },
  {
    name: "Michael Ross",
    role: "Senior Art Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
    skills: "Art Direction • Strategy • 3D",
    available: true
  }
];

export const TalentShowcase: React.FC = () => {
  return (
    <section className="bg-[#F8F9FA] py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20">
           <h2 className="text-5xl md:text-7xl font-bold text-geko-dark mb-6">
             Our Talent
           </h2>
           <p className="text-lg md:text-xl text-gray-600 max-w-4xl">
             Meet some of our best creative talents, innovative minds dedicated to helping brands grow through visual storytelling.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {talents.map((talent, index) => (
             <div key={index} className="group cursor-pointer">
                {/* Image Container */}
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 bg-gray-200">
                   {/* Availability Badge */}
                   {talent.available && (
                     <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur text-geko-dark text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                        OPEN FOR WORK
                     </div>
                   )}
                   
                   <img 
                     src={talent.image} 
                     alt={talent.name} 
                     className="w-full h-full object-cover transition-all duration-700 filter grayscale group-hover:grayscale-0 group-hover:scale-105"
                   />
                   
                   {/* Overlay Gradient */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                   {/* Hover Action */}
                   <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <button className="w-full bg-white text-geko-dark py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-geko-accent transition-colors">
                        View Profile
                      </button>
                   </div>
                </div>

                {/* Typography */}
                <div className="space-y-1">
                   <h3 className="text-2xl font-serif font-bold text-geko-dark group-hover:text-geko-accent transition-colors">{talent.name}</h3>
                   <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{talent.role}</p>
                   <p className="text-xs text-gray-400 pt-2 border-t border-gray-200 mt-3 inline-block w-full">
                     {talent.skills}
                   </p>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
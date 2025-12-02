import React from 'react';
import { Layout, PenTool, MonitorPlay, Printer, Smartphone, CheckCircle2 } from 'lucide-react';

const services = [
  { icon: <Layout className="w-5 h-5" />, label: 'Brand Strategy' },
  { icon: <PenTool className="w-5 h-5" />, label: 'Brand Identity Design' },
  { icon: <MonitorPlay className="w-5 h-5" />, label: 'Motion & Interactive Design' },
  { icon: <Printer className="w-5 h-5" />, label: 'Print & Marketing Collateral' },
  { icon: <Smartphone className="w-5 h-5" />, label: 'Digital Design' },
];

export const WhatWeDo: React.FC = () => {
  return (
    <section id="services" className="bg-white py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20">
           <h2 className="text-5xl md:text-7xl font-serif font-bold text-geko-dark mb-6">What We Do</h2>
           <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl leading-relaxed">
             We shift perceptions and position brands exactly where they want to be — 
             in the hearts and minds of the right audience.
           </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Left: Illustration Area */}
          <div className="flex-1 flex items-center justify-center p-8">
             <div className="relative w-full max-w-md aspect-square">
                 {/* Decorative graphic elements approximating the screenshot */}
                 <div className="absolute inset-0 bg-teal-50 rounded-full transform -translate-x-4 translate-y-4"></div>
                 <div className="relative z-10 w-full h-full p-8 border-2 border-dashed border-teal-100 rounded-3xl bg-white shadow-lg rotate-[-2deg]">
                     <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                     </div>
                     <div className="space-y-4 mt-8">
                        {[1, 2, 3, 4].map((i) => (
                           <div key={i} className="flex items-center gap-3">
                              <div className="w-5 h-5 rounded border border-teal-500 flex items-center justify-center text-teal-500">
                                 <CheckCircle2 size={14} />
                              </div>
                              <div className="h-2 bg-gray-100 rounded w-full"></div>
                           </div>
                        ))}
                     </div>
                     {/* Magnifying Glass */}
                     <div className="absolute bottom-10 right-10 w-24 h-24 border-4 border-gray-800 rounded-full flex items-center justify-center bg-white/80 backdrop-blur shadow-2xl z-20">
                         <div className="w-16 h-16 bg-blue-100 rounded-full opacity-50"></div>
                     </div>
                     <div className="absolute bottom-4 right-4 w-12 h-32 bg-gray-800 rounded-full transform rotate-45 origin-top-left -z-10"></div>
                 </div>
             </div>
          </div>

          {/* Right: Service Card */}
          <div className="flex-1 bg-geko-mist rounded-[3rem] p-10 md:p-16 relative overflow-hidden group hover:bg-gray-100 transition-colors duration-500">
             {/* Large Number Background */}
             <div className="absolute top-0 left-0 text-[15rem] md:text-[20rem] font-serif leading-none text-geko-dark opacity-[0.03] select-none -translate-y-12 translate-x-4">01</div>
             
             <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-baseline gap-4 mb-6">
                     <span className="text-6xl md:text-8xl font-serif text-transparent stroke-text opacity-30">01</span>
                     <div className="h-[1px] bg-geko-dark/20 flex-grow"></div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-geko-dark mb-6 font-serif leading-tight">
                    Branding & <br/>Creative Design
                  </h3>
                  
                  <p className="text-gray-600 mb-10 text-lg">
                    Through branding & design, we turn your values into visuals that connect and resonate.
                  </p>
                </div>

                <div className="space-y-4">
                   {services.map((s, idx) => (
                     <div key={idx} className="flex items-center gap-4 py-3 border-b border-gray-300/50 group/item cursor-pointer hover:translate-x-2 transition-transform">
                        <span className="text-gray-400 group-hover/item:text-geko-accent transition-colors">
                            {s.icon}
                        </span>
                        <span className="text-lg font-medium text-gray-700 group-hover/item:text-geko-dark transition-colors">{s.label}</span>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </div>

      <style>{`
        .stroke-text {
            -webkit-text-stroke: 2px #0B4635;
            color: transparent;
        }
      `}</style>
    </section>
  );
};
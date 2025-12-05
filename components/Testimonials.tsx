import React, { useState } from 'react';
import { Star, Play, X } from 'lucide-react';

const reviews = [
  {
    text: "The talent we hired from Sleeka blended seamlessly into our team. He handled design, animation, and video editing with impressive speed and quality, saving us both time and budget.",
    author: "Emmanuel Okoye",
    role: "CEO, Felicia Transport",
    logo: "Felicia Transport",
    rating: 5,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
    {
    text: "The talent we hired from Sleeka blended seamlessly into our team. He handled design, animation, and video editing with impressive speed and quality, saving us both time and budget.",
    author: "Emmanuel Okoye",
    role: "CEO, Felicia Transport",
    logo: "Felicia Transport",
    rating: 5,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
    {
    text: "The talent we hired from Sleeka blended seamlessly into our team. He handled design, animation, and video editing with impressive speed and quality, saving us both time and budget.",
    author: "Emmanuel Okoye",
    role: "CEO, Felicia Transport",
    logo: "Felicia Transport",
    rating: 5,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

export const Testimonials: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="bg-geko-dark py-32 relative overflow-hidden text-white">
       {/* Abstract Background Shapes */}
       <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-white opacity-[0.03] rounded-full blur-3xl pointer-events-none"></div>
       <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-geko-accent opacity-[0.05] rounded-full blur-3xl pointer-events-none"></div>

       <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-start justify-between mb-20">
             <h2 className="text-5xl md:text-6xl font-bold leading-tight max-w-2xl">
                What our Clients Say
             </h2>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-stretch max-w-2xl mx-auto">
             {reviews.map((review, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col p-10 rounded-[2.5rem] transition-transform duration-300 hover:-translate-y-2
                    bg-white text-geko-dark shadow-xl
                  `}
                >
                   <div className="mb-8">
                       <span className="text-6xl font-serif font-bold leading-none block h-8 overflow-visible text-[#47ff01]">
                         “
                       </span>
                   </div>
                   
                   <p className="text-xl font-medium leading-relaxed mb-8 flex-grow text-geko-dark">
                      {review.text}
                   </p>
                   
                   <div className="border-t border-gray-100 pt-6 mt-auto flex items-center justify-between">
                      <div>
                         <h4 className="font-bold text-lg text-geko-dark">{review.author}</h4>
                         <p className="text-sm text-gray-500">{review.role}</p>
                      </div>
                      <button
                        onClick={() => setSelectedVideo(review.videoUrl)}
                        className="relative w-12 h-12 rounded-full bg-[#47ff01] flex items-center justify-center hover:scale-110 transition-transform group"
                      >
                        <div className="absolute inset-0 rounded-full bg-[#47ff01] animate-ping opacity-75"></div>
                        <Play size={20} className="text-[#5c0386] fill-[#5c0386] relative z-10" />
                      </button>
                   </div>
                </div>
             ))}
          </div>
       </div>

       {/* Video Modal */}
       {selectedVideo && (
         <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
           <div className="relative w-full max-w-4xl aspect-video">
             <button
               onClick={() => setSelectedVideo(null)}
               className="absolute -top-12 right-0 text-white hover:text-[#47ff01] transition-colors"
             >
               <X size={32} />
             </button>
             <iframe
               src={selectedVideo}
               className="w-full h-full rounded-lg"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen
             ></iframe>
           </div>
         </div>
       )}
    </section>
  );
};
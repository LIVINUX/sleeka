import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    text: "BrandGeko completely transformed how we present our medical solutions. The talent they provided integrated seamlessly with our dev team.",
    author: "Dr. Chioma A.",
    role: "Founder, MedEase",
    logo: "MedEase",
    rating: 5
  },
  {
    text: "We needed a full rebrand in 2 weeks and their team didn't just meet the deadline, they crushed it. Unmatched speed.",
    author: "James Wilson",
    role: "CEO, LettuceWork",
    logo: "LettuceWork",
    rating: 5
  },
  {
    text: "Hiring their talent was the best decision. It's like having a senior creative director and a production team in one.",
    author: "Sarah O.",
    role: "Marketing Lead, SATO",
    logo: "SATO",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="bg-geko-dark py-32 relative overflow-hidden text-white">
       {/* Abstract Background Shapes */}
       <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-white opacity-[0.03] rounded-full blur-3xl pointer-events-none"></div>
       <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-geko-accent opacity-[0.05] rounded-full blur-3xl pointer-events-none"></div>

       <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-start justify-between mb-20">
             <h2 className="text-5xl md:text-6xl font-serif font-bold leading-tight max-w-2xl">
                Loved by fast-growing <br/>
                <span className="text-geko-accent italic">teams & startups.</span>
             </h2>
             <div className="flex items-center gap-4 bg-white/10 backdrop-blur px-6 py-3 rounded-full border border-white/10">
                <div className="flex gap-1">
                   {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} className="fill-geko-accent text-geko-accent" />)}
                </div>
                <span className="font-bold text-sm">5.0 Star Rating</span>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
             {reviews.map((review, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col p-10 rounded-[2.5rem] transition-transform duration-300 hover:-translate-y-2
                    ${index === 1 ? 'bg-[#0E5240] text-white border-none shadow-2xl scale-y-105 z-10' : 'bg-white text-geko-dark'}
                  `}
                >
                   <div className="mb-8">
                       <span className={`text-6xl font-serif font-bold leading-none block h-8 overflow-visible
                         ${index === 1 ? 'text-geko-accent' : 'text-geko-accent'}
                       `}>
                         “
                       </span>
                   </div>
                   
                   <p className="text-xl font-medium leading-relaxed mb-8 flex-grow">
                      {review.text}
                   </p>
                   
                   <div className="border-t pt-6 mt-auto flex items-center justify-between"
                        style={{ borderColor: index === 1 ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)' }}
                   >
                      <div>
                         <h4 className="font-bold text-lg">{review.author}</h4>
                         <p className={`text-sm ${index === 1 ? 'text-gray-400' : 'text-gray-500'}`}>{review.role}</p>
                      </div>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold italic text-lg
                          ${index === 1 ? 'bg-white/10 text-white' : 'bg-gray-100 text-geko-dark'}
                      `}>
                          {review.logo.substring(0,2)}
                      </div>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
};
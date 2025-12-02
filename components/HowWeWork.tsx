import React from 'react';
import { Users, Star } from 'lucide-react';

export const HowWeWork: React.FC = () => {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-geko-dark">
            How we work
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl leading-relaxed">
            We offer two powerful ways to build your creative infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: Hire Our Team */}
          <div className="bg-[#5c0386] rounded-[2.5rem] p-10 md:p-12 flex flex-col shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02]">
            <div className="w-20 h-20 mb-8">
              <Users size={80} strokeWidth={1.5} className="text-white" />
            </div>

            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              1. Hire Our Team
            </h3>

            <p className="text-white/90 text-lg leading-relaxed mb-6">
              Your complete creative department from graphics design to video
              editing, social media management, and content strategy, all in one
              affordable monthly subscription.
            </p>

            <p className="text-white/90 text-lg leading-relaxed mb-10 flex-grow">
              Perfect for startups, growing brands and entrepreneurs that need
              consistent creative support without the high cost of hiring
              in-house or the stress of managing a team, giving you more time to
              focus on growing your business.
            </p>

            <button className="bg-[#47ff01] text-black px-8 py-4 rounded-full font-bold text-lg hover:brightness-110 transition-all w-fit">
              Learn More!
            </button>
          </div>

          {/* Card 2: Hire Our Talent */}
          <div className="bg-[#5c0386] rounded-[2.5rem] p-10 md:p-12 flex flex-col shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02]">
            <div className="w-20 h-20 mb-8">
              <Star size={80} strokeWidth={1.5} className="text-white" />
            </div>

            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              2. Hire Our Talent
            </h3>

            <p className="text-white/90 text-lg leading-relaxed mb-6">
              Scale faster with our vetted, multi-skilled creative talent,
              professionals skilled in graphics design, animation, and video
              editing (three skills in one).
            </p>

            <p className="text-white/90 text-lg leading-relaxed mb-10 flex-grow">
              Beyond technical expertise, our talents are also trained in
              essential soft skills and AI-readiness, enabling them to work
              smarter, faster, and more productively within modern teams.
            </p>

            <button className="bg-[#47ff01] text-black px-8 py-4 rounded-full font-bold text-lg hover:brightness-110 transition-all w-fit">
              Learn More!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
import React from 'react';

const talents = [
  {
    name: "Blossom Uzoho",
    role: "Creative Generalist",
    image: "/assets/Blossom Uzoho.jpg",
    skills: "Design • Video Editing • 2D Animation",
    available: true
  },
  {
    name: "Dusom Oputa",
    role: "AI Animator & Social Media Manager",
    image: "/assets/Dusom Oputa.jpg",
    skills: "AI Animation • Social",
    available: true
  },
  {
    name: "Caleb Ohiro",
    role: "Visual and Motion Designer",
    image: "/assets/Caleb Ohiro.jpg",
    skills: "UI/UX • Design • Motion Graphics",
    available: true
  },
  {
    name: "Peter Samuel",
    role: "Creative Generalist",
    image: "/assets/Peter Samuel.jpg",
    skills: "Design • Video Editing • Animation",
    available: true
  }
];

export const TalentShowcase: React.FC = () => {
  return (
    <section className="bg-[#F8F9FA] py-16">
      <div className="container mx-auto px-6 md:px-12">

        <div className="mb-14">
          <h2 className="text-4xl md:text-6xl font-bold text-geko-dark mb-6">
            The Creative Engine
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl">
            Real people, structured into a system that delivers consistent creative output
            and drives results for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {talents.map((talent, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 bg-gray-200">
                {/* Open for work badge hidden — talent outsourcing paused */}
                <img
                  src={talent.image}
                  alt={talent.name}
                  className="w-full h-full object-cover transition-all duration-700 filter grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <button className="w-full bg-white text-geko-dark py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-geko-accent transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-[#5c0386]">{talent.name}</h3>
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

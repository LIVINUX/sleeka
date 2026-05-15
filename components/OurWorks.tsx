import React, { useState } from 'react';

const works = [
  {
    id: 'premiabn',
    title: 'PremiaBN',
    tags: 'Illustration, Animated explainer video',
    image: '/assets/works/2.png',
  },
  {
    id: 'bluechip-technologies',
    title: 'Bluechip Technologies',
    tags: 'Motion, Video editing',
    image: '/assets/works/Olumide Soyombo Bluechip_1000.jpg',
  },
  {
    id: 'emsxchange',
    title: 'EmsXchange',
    tags: 'Design, Motion, Video editing',
    image: '/assets/works/3.jpg',
  },
  {
    id: 'felicia-transport',
    title: 'Felicia Transport',
    tags: 'Branding, Identity design, Merchandise',
    image: '/assets/works/1.jpg',
  },
];

export const OurWorks: React.FC = () => {
  const [clickedId, setClickedId] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setClickedId(id);
    setTimeout(() => {
      window.location.hash = `#/case-study/${id}`;
      setClickedId(null);
    }, 220);
  };

  return (
    <section id="work" className="bg-[#F9F9F9] py-16 relative overflow-hidden">
      <style>{`
        @keyframes card-pop {
          0%   { transform: scale(1); }
          40%  { transform: scale(1.04); box-shadow: 0 20px 60px rgba(92,3,134,0.25); }
          100% { transform: scale(0.97); opacity: 0.85; }
        }
        .card-popping { animation: card-pop 0.22s ease-out forwards; }
      `}</style>

      <div className="container mx-auto px-6 md:px-12 mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-geko-dark mb-4">Real Results</h2>
        <p className="text-xl text-gray-600 font-light">
          Here are some of the campaigns and assets produced by our creative teams
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {works.map((work, index) => (
            <div
              key={work.id}
              onClick={() => handleCardClick(work.id)}
              className={`group cursor-pointer ${clickedId === work.id ? 'card-popping' : ''}`}
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="rounded-3xl overflow-hidden mb-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-[#5c0386] transition-colors duration-300">
                {work.title}
              </h3>
              <p className="text-lg text-gray-600">- {work.tags}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

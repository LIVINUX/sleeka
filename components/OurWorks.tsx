import React from 'react';

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
  return (
    <section id="work" className="bg-white py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-geko-dark mb-4 animate-fade-in-up">
          Our Works
        </h2>
        <p className="text-xl text-gray-600 font-light animate-fade-in-up animation-delay-200">
          Here are some of the campaigns and assets produced by our creative teams.   
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {works.map((work, index) => (
            <a
              key={work.id}
              href={`#/case-study/${work.id}`}
              className="group animate-fade-in-up block"
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="rounded-3xl overflow-hidden mb-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

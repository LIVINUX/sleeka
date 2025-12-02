import React from 'react';

const works = [
  {
    id: 1,
    title: 'PremiaBN',
    tags: 'Illustration, Animated explainer video',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    title: 'Bluechip Technologies',
    tags: 'Motion, Video editing',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'EmsXchange',
    tags: 'Design, Motion, Video editing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    title: 'MedEase',
    tags: 'UI/UX, Branding',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
  },
];

export const OurWorks: React.FC = () => {
  return (
    <section id="work" className="bg-[#F9F9F9] py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-geko-dark mb-4 animate-fade-in-up">
          Our Works
        </h2>
        <p className="text-xl text-gray-600 font-light animate-fade-in-up animation-delay-200">
          Here are recent works from our talents.
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {works.map((work, index) => (
            <div
              key={work.id}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="rounded-3xl overflow-hidden mb-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-geko-primary transition-colors duration-300">
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
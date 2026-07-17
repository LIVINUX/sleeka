import React, { useEffect, useRef, useState } from 'react';
import { Slide } from './PlugIntoSection';

const talents = [
  {
    name: "Livinus Ekeh",
    role: "Content Strategist & Lead Specialist",
    image: "/assets/Livinus Ekeh.jpg",
    skills: "Strategy • Lead Generation • Growth",
  },
  {
    name: "Dusom Oputa",
    role: "Project Manager & Content Operations",
    image: "/assets/Dusom Oputa.jpg",
    skills: "Content Systems • Coordination",
  },
  {
    name: "Blossom Uzoho",
    role: "Creative Generalist",
    image: "/assets/Blossom Uzoho.jpg",
    skills: "Design • Video Editing • Animation",
  },
  {
    name: "Peter Samuel",
    role: "Visual and Motion Designer",
    image: "/assets/Peter Samuel.jpg",
    skills: "Design • Video Editing • Motion Graphics",
  },
];

// ── Card with photo-first then name/role pop-in ───────────────────────────
const TalentCard: React.FC<{ talent: typeof talents[0]; index: number }> = ({ talent, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [photoVisible, setPhotoVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhotoVisible(true);
          // Name and role appear shortly after the photo
          setTimeout(() => setInfoVisible(true), 220);
        } else {
          const rect = el.getBoundingClientRect();
          if (rect.top > 0) {
            // Scrolled back up — reset so it re-animates
            setPhotoVisible(false);
            setInfoVisible(false);
          }
        }
      },
      { threshold: 0.2, rootMargin: '-5% 0px -5% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="group cursor-pointer">
      {/* Photo — slides up first */}
      <div
        className="relative aspect-[3/4] rounded-[2rem] overflow-hidden mb-4 bg-gray-200"
        style={{
          opacity: photoVisible ? 1 : 0,
          transform: photoVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: `opacity 0.55s cubic-bezier(0.22,1,0.36,1) ${index * 0.08}s, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${index * 0.08}s`,
        }}
      >
        <img
          src={talent.image}
          alt={talent.name}
          className="w-full h-full object-cover transition-all duration-700 filter grayscale group-hover:grayscale-0 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Name + role — pops in right after photo */}
      <div
        className="space-y-1"
        style={{
          opacity: infoVisible ? 1 : 0,
          transform: infoVisible ? 'translateY(0)' : 'translateY(16px)',
          transition: `opacity 0.4s cubic-bezier(0.22,1,0.36,1), transform 0.4s cubic-bezier(0.22,1,0.36,1)`,
        }}
      >
        <h3 className="text-2xl font-bold text-[#5c0386]">{talent.name}</h3>
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{talent.role}</p>
        <p className="text-xs text-gray-400 pt-2 border-t border-gray-200 mt-3 inline-block w-full">
          {talent.skills}
        </p>
      </div>
    </div>
  );
};

export const TalentShowcase: React.FC = () => (
  <section className="bg-[#F8F9FA] py-16">
    <div className="container mx-auto px-6 md:px-12">

      <div className="mb-14">
        <Slide delay={0}>
          <h2 className="text-4xl md:text-6xl font-bold text-geko-dark mb-6">
            The Creative Engine
          </h2>
        </Slide>
        <Slide delay={0.08}>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl">
            Trained in graphics design, video editing and animation, all in one.
          </p>
        </Slide>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {talents.map((talent, index) => (
          <TalentCard key={index} talent={talent} index={index} />
        ))}
      </div>

    </div>
  </section>
);

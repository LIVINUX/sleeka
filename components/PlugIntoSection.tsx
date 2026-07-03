import React, { useEffect, useRef, useState } from 'react';

const cards = [
  {
    icon: '🏢',
    title: 'Dedicated To Your Business',
    body: 'Unlike traditional agencies where teams are shared across multiple clients, Sleeka assigns a dedicated team focused on your business. They learn your brand, understand your goals, and work as a seamless extension of your internal team.',
    accent: '#47ff01',
    bg: '#5c0386',
  },
  {
    icon: '💬',
    title: 'Direct Access To Your Team',
    body: 'Collaborate directly with your Project Manager, Content Strategist, Graphic Designer, and Video Editor in one shared workspace. No long email chains. No communication bottlenecks. Just faster feedback, smoother collaboration, and consistent execution.',
    accent: '#47ff01',
    bg: '#3d0261',
  },
  {
    icon: '⚙️',
    title: 'Powered By A Proven Content System',
    body: 'Every deliverable is managed through our Content OS, giving you complete visibility into what is planned, in production, ready for review, and published. Your content stays organized, measurable, and focused on driving business results.',
    accent: '#47ff01',
    bg: '#2a0145',
  },
  {
    icon: '📈',
    title: 'Scale Without Hiring',
    body: 'Access the creative capacity of a full department without recruitment costs, payroll overhead, or management stress. Simply plug in and start executing.',
    accent: '#47ff01',
    bg: '#1a0030',
  },
];

export const PlugIntoSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      // How far we've scrolled into the section
      const scrolled = -sectionTop;
      const scrollable = sectionHeight - windowHeight;
      const progress = Math.max(0, Math.min(1, scrolled / scrollable));

      const index = Math.min(
        cards.length - 1,
        Math.floor(progress * cards.length)
      );
      setActiveIndex(index);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-white py-20 px-6">
      {/* Section header */}
      <div className="container mx-auto mb-16">
        <span
          className="inline-block text-xs font-bold tracking-widest uppercase mb-4"
          style={{ color: '#5c0386' }}
        >
          How It Works
        </span>
        <h2 className="text-4xl md:text-6xl font-bold text-geko-dark mb-6 max-w-3xl">
          Plug Into a Complete Creative Department
        </h2>
        <p className="text-lg md:text-xl text-gray-600 font-normal max-w-3xl leading-relaxed">
          Instead of juggling freelancers or building an expensive in-house team, businesses get access to a dedicated team that delivers measurable results through a flexible monthly subscription.
        </p>
      </div>

      {/* Sticky scroll cards — desktop */}
      <div
        ref={sectionRef}
        className="hidden md:block relative"
        style={{ height: `${cards.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-2xl mx-auto px-6">
            {cards.map((card, i) => (
              <div
                key={i}
                className="absolute inset-0 flex items-center"
                style={{
                  opacity: activeIndex === i ? 1 : 0,
                  transform: activeIndex === i
                    ? 'translateY(0) scale(1)'
                    : activeIndex > i
                    ? 'translateY(-40px) scale(0.95)'
                    : 'translateY(60px) scale(0.95)',
                  transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                  pointerEvents: activeIndex === i ? 'auto' : 'none',
                }}
              >
                <div
                  className="w-full rounded-[2.5rem] p-10 md:p-14 shadow-2xl"
                  style={{ backgroundColor: card.bg }}
                >
                  {/* Step indicator */}
                  <div className="flex items-center gap-3 mb-8">
                    {cards.map((_, dot) => (
                      <div
                        key={dot}
                        className="rounded-full transition-all duration-300"
                        style={{
                          width: dot === i ? '28px' : '8px',
                          height: '8px',
                          backgroundColor: dot === i ? card.accent : 'rgba(255,255,255,0.3)',
                        }}
                      />
                    ))}
                  </div>
                  <div
                    className="text-5xl mb-6 w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  >
                    {card.icon}
                  </div>
                  <h3
                    className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight"
                  >
                    {card.title}
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    {card.body}
                  </p>
                  <div className="mt-10 text-sm font-semibold" style={{ color: card.accent }}>
                    {i + 1} of {cards.length}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile — stacked cards */}
      <div className="md:hidden flex flex-col gap-6 max-w-lg mx-auto">
        {cards.map((card, i) => (
          <div
            key={i}
            className="rounded-[2rem] p-8 shadow-xl"
            style={{ backgroundColor: card.bg }}
          >
            <div
              className="text-4xl mb-4 w-14 h-14 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
            >
              {card.icon}
            </div>
            <h3 className="text-2xl font-black text-white mb-4 leading-tight">
              {card.title}
            </h3>
            <p className="text-white/80 text-base leading-relaxed">
              {card.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

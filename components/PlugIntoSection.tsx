import React, { useEffect, useRef, useState } from 'react';

// ── Shared slide-reveal hook used across sections ─────────────────────────
export const useSlideReveal = (rootMargin = '-8% 0px -8% 0px') => {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<'below' | 'visible' | 'above'>('below');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState('visible');
        } else {
          const rect = el.getBoundingClientRect();
          setState(rect.top < 0 ? 'above' : 'below');
        }
      },
      { threshold: 0.12, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  const style: React.CSSProperties = {
    transition: 'opacity 0.55s cubic-bezier(0.22,1,0.36,1), transform 0.55s cubic-bezier(0.22,1,0.36,1)',
    willChange: 'opacity, transform',
    opacity: state === 'visible' ? 1 : 0,
    transform: state === 'visible' ? 'translateY(0)' : state === 'above' ? 'translateY(-36px)' : 'translateY(44px)',
  };

  return { ref, style };
};

// ── Slide wrapper ─────────────────────────────────────────────────────────
export const Slide: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = '' }) => {
  const { ref, style } = useSlideReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

const cards = [
  {
    number: '01',
    iconFile: 'dedicated.png',
    iconLabel: 'Dedicated Team',
    title: 'Dedicated To Your Business',
    body: 'Unlike traditional agencies where teams are shared across multiple clients, Sleeka assigns a dedicated team focused entirely on your business. They learn your brand, understand your goals, and work as a seamless extension of your internal team.',
  },
  {
    number: '02',
    iconFile: 'direct-access.png',
    iconLabel: 'Direct Access',
    title: 'Direct Access To Your Team',
    body: 'Collaborate directly with your Project Manager, Content Strategist, Graphic Designer, and Video Editor in one shared workspace. No long email chains. No communication bottlenecks. Just faster feedback, smoother collaboration, and consistent execution.',
  },
  {
    number: '03',
    iconFile: 'content-system.png',
    iconLabel: 'Content System',
    title: 'Powered By A Proven Content System',
    body: 'Every deliverable is managed through our Content OS, giving you complete visibility into what is planned, in production, ready for review, and published. Your content stays organized, measurable, and focused on driving business results.',
  },
  {
    number: '04',
    iconFile: 'scale.png',
    iconLabel: 'Scale Up',
    title: 'Scale Without Hiring',
    body: 'Access the creative capacity of a full department without recruitment costs, payroll overhead, or management stress. Simply plug in and start executing.',
  },
];

export const PlugIntoSection: React.FC = () => (
  <section className="bg-white px-6 py-20">
    <div className="max-w-2xl mx-auto text-center">

      <Slide delay={0}>
        <span className="text-xs font-black uppercase tracking-widest" style={{ color: '#000' }}>
          How It Works
        </span>
      </Slide>

      <Slide delay={0.08} className="mt-4">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight" style={{ color: '#5c0386' }}>
          Plug Into a Complete<br className="hidden md:block" /> Creative Department
        </h2>
      </Slide>

      <Slide delay={0.14} className="mt-5 mb-20">
        <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto" style={{ color: '#000' }}>
          Instead of juggling freelancers or building an expensive in-house team, businesses get access to a dedicated team that delivers measurable results through a flexible monthly subscription.
        </p>
      </Slide>

      <div className="flex flex-col gap-14">
        {cards.map((card, i) => (
          <Slide key={i} delay={0}>
            <div
              className="relative rounded-[2.5rem] overflow-hidden p-8 md:p-12 text-center"
              style={{
                backgroundColor: '#ffffff',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                border: '1px solid rgba(0,0,0,0.06)',
              }}
            >
              <span
                className="absolute right-4 top-0 font-black select-none pointer-events-none leading-none"
                style={{ fontSize: 'clamp(6rem, 20vw, 10rem)', color: 'rgba(92,3,134,0.06)', letterSpacing: '-0.04em' }}
              >
                {card.number}
              </span>

              <div className="relative z-10 flex justify-center mb-5">
                <div
                  className="w-20 h-20 rounded-2xl overflow-hidden flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(92,3,134,0.08)', border: '1px solid rgba(92,3,134,0.15)' }}
                >
                  <img
                    src={`/assets/icons/plug-into/${card.iconFile}`}
                    alt={card.iconLabel}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex justify-center mb-4 relative z-10">
                <span
                  className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                  style={{ backgroundColor: 'rgba(92,3,134,0.08)', color: '#5c0386', border: '1px solid rgba(92,3,134,0.2)' }}
                >
                  {card.iconLabel}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black mb-4 leading-tight relative z-10" style={{ color: '#5c0386' }}>
                {card.title}
              </h3>
              <p className="text-base md:text-lg leading-relaxed relative z-10" style={{ color: '#4b5563' }}>
                {card.body}
              </p>

              <div className="mt-8 h-px w-full relative z-10" style={{ backgroundColor: 'rgba(92,3,134,0.08)' }}>
                
              </div>
            </div>
          </Slide>
        ))}
      </div>
    </div>
  </section>
);

import React, { useEffect, useRef, useState } from 'react';

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

// ── Scroll-fade hook ──────────────────────────────────────────────────────
function useScrollFade(threshold = 0.5) {
  const ref = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0);
  const [translateY, setTranslateY] = useState(30);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const winH = window.innerHeight;
      const center = rect.top + rect.height / 2;
      const distFromCenter = Math.abs(center - winH / 2);
      const maxDist = winH * 0.55;
      const progress = Math.max(0, 1 - distFromCenter / maxDist);
      setOpacity(progress);
      setTranslateY((1 - progress) * 30);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return { ref, opacity, translateY };
}

// ── Fade element wrapper ──────────────────────────────────────────────────
const FadeEl: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = '' }) => {
  const { ref, opacity, translateY } = useScrollFade();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        transition: `opacity 0.55s ease ${delay}s, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};

// ── Single card ───────────────────────────────────────────────────────────
const PlugCard: React.FC<{ card: typeof cards[0] }> = ({ card }) => {
  const { ref, opacity, translateY } = useScrollFade();

  return (
    <div
      ref={ref}
      className="w-full max-w-2xl mx-auto"
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        transition: 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.22,1,0.36,1)',
        willChange: 'opacity, transform',
      }}
    >
      <div
        className="relative rounded-[2.5rem] overflow-hidden p-8 md:p-12"
        style={{
          background: 'linear-gradient(135deg, #5c0386 0%, #4a0270 100%)',
          boxShadow: '0 32px 80px rgba(92,3,134,0.25)',
        }}
      >
        {/* Large background number */}
        <span
          className="absolute right-6 top-2 font-black select-none pointer-events-none leading-none"
          style={{ fontSize: 'clamp(6rem, 18vw, 10rem)', color: 'rgba(255,255,255,0.06)', letterSpacing: '-0.04em' }}
        >
          {card.number}
        </span>

        {/* Icon */}
        <div className="relative z-10 mb-6 flex justify-center">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: 'rgba(71,255,1,0.12)', border: '1px solid rgba(71,255,1,0.25)' }}
          >
            <img
              src={`/assets/icons/plug-into/${card.iconFile}`}
              alt={card.iconLabel}
              className="w-12 h-12 object-contain"
            />
          </div>
        </div>

        {/* Badge */}
        <div className="flex justify-center mb-5 relative z-10">
          <span
            className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
            style={{ backgroundColor: 'rgba(71,255,1,0.15)', color: '#47ff01', border: '1px solid rgba(71,255,1,0.3)' }}
          >
            {card.iconLabel}
          </span>
        </div>

        {/* Text */}
        <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight text-center relative z-10">
          {card.title}
        </h3>
        <p className="text-white/70 text-base md:text-lg leading-relaxed text-center relative z-10">
          {card.body}
        </p>

        {/* Accent line */}
        <div className="mt-8 h-px w-full relative z-10" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
          <div
            className="h-full rounded-full"
            style={{
              width: `${opacity * 100}%`,
              backgroundColor: '#47ff01',
              transition: 'width 0.3s ease',
            }}
          />
        </div>
      </div>
    </div>
  );
};

// ── Main export ───────────────────────────────────────────────────────────
export const PlugIntoSection: React.FC = () => (
  <section className="bg-white py-12 px-6">
    <div className="max-w-2xl mx-auto text-center">

      {/* Label fades in first */}
      <FadeEl delay={0}>
        <span className="text-xs font-black uppercase tracking-widest text-black">
          How It Works
        </span>
      </FadeEl>

      {/* Headline fades in second */}
      <FadeEl delay={0.05} className="mt-4">
        <h2 className="text-4xl md:text-6xl font-bold text-geko-dark leading-tight">
          Plug Into a Complete<br className="hidden md:block" /> Creative Department
        </h2>
      </FadeEl>

      {/* Subtext fades in third */}
      <FadeEl delay={0.1} className="mt-5 mb-20">
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto">
          Instead of juggling freelancers or building an expensive in-house team, businesses get access to a dedicated team that delivers measurable results through a flexible monthly subscription.
        </p>
      </FadeEl>

      {/* Cards — each one fades in/out independently as you scroll */}
      <div className="flex flex-col gap-16 pb-12">
        {cards.map((card, i) => (
          <PlugCard key={i} card={card} />
        ))}
      </div>

    </div>
  </section>
);

import React, { useEffect, useRef, useState } from 'react';

const cards = [
  {
    number: '01',
    icon: '🏢',
    iconLabel: 'Dedicated Team',
    title: 'Dedicated To Your Business',
    body: 'Unlike traditional agencies where teams are shared across multiple clients, Sleeka assigns a dedicated team focused entirely on your business. They learn your brand, understand your goals, and work as a seamless extension of your internal team.',
    from: '#5c0386',
    to: '#4a0270',
  },
  {
    number: '02',
    icon: '💬',
    iconLabel: 'Direct Access',
    title: 'Direct Access To Your Team',
    body: 'Collaborate directly with your Project Manager, Content Strategist, Graphic Designer, and Video Editor in one shared workspace. No long email chains. No communication bottlenecks. Just faster feedback, smoother collaboration, and consistent execution.',
    from: '#4a0270',
    to: '#380158',
  },
  {
    number: '03',
    icon: '⚙️',
    iconLabel: 'Content System',
    title: 'Powered By A Proven Content System',
    body: 'Every deliverable is managed through our Content OS, giving you complete visibility into what is planned, in production, ready for review, and published. Your content stays organized, measurable, and focused on driving business results.',
    from: '#380158',
    to: '#260040',
  },
  {
    number: '04',
    icon: '📈',
    iconLabel: 'Scale Up',
    title: 'Scale Without Hiring',
    body: 'Access the creative capacity of a full department without recruitment costs, payroll overhead, or management stress. Simply plug in and start executing.',
    from: '#260040',
    to: '#14002a',
  },
];

const MobileCard: React.FC<{ card: typeof cards[0]; index: number }> = ({ card, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative rounded-[2rem] overflow-hidden p-8"
      style={{
        background: `linear-gradient(135deg, ${card.from}, ${card.to})`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(48px)',
        transition: `opacity 0.7s ease ${index * 0.1}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${index * 0.1}s`,
      }}
    >
      <span
        className="absolute right-6 top-4 font-black select-none pointer-events-none"
        style={{ fontSize: '7rem', lineHeight: 1, color: 'rgba(255,255,255,0.06)', letterSpacing: '-0.04em' }}
      >
        {card.number}
      </span>
      <div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
        style={{ backgroundColor: 'rgba(71,255,1,0.15)', border: '1px solid rgba(71,255,1,0.3)' }}
      >
        <span className="text-base">{card.icon}</span>
        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#47ff01' }}>
          {card.iconLabel}
        </span>
      </div>
      <h3 className="text-2xl font-black text-white mb-4 leading-tight relative z-10">{card.title}</h3>
      <p className="text-white/70 text-base leading-relaxed relative z-10">{card.body}</p>
      <div className="mt-8 h-0.5 w-full rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
        <div
          className="h-full rounded-full"
          style={{
            width: visible ? '100%' : '0%',
            backgroundColor: '#47ff01',
            transition: `width 1.2s ease ${index * 0.1 + 0.4}s`,
          }}
        />
      </div>
    </div>
  );
};

const DesktopCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      setProgress(Math.max(0, Math.min(1, scrolled / total)));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeIndex = Math.min(cards.length - 1, Math.floor(progress * cards.length));
  const cardProgress = (progress * cards.length) % 1;

  return (
    <div ref={containerRef} style={{ height: `${cards.length * 100}vh` }} className="relative">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-6">
        <div className="flex gap-2 mb-12">
          {cards.map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-500"
              style={{
                width: i === activeIndex ? '32px' : '8px',
                height: '8px',
                backgroundColor: i === activeIndex ? '#47ff01' : 'rgba(255,255,255,0.2)',
              }}
            />
          ))}
        </div>

        <div className="relative w-full max-w-2xl" style={{ height: '420px' }}>
          {cards.map((card, i) => {
            const diff = i - activeIndex;
            const isActive = diff === 0;
            const isPrev = diff < 0;

            let opacity = 0;
            let translateY = 80;
            let scale = 0.92;

            if (isActive) { opacity = 1; translateY = 0; scale = 1; }
            else if (isPrev) { opacity = 0; translateY = -60; scale = 0.9; }
            else if (diff === 1) { opacity = 0.15; translateY = 60; scale = 0.96; }

            return (
              <div
                key={i}
                className="absolute inset-0 rounded-[2.5rem] overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${card.from}, ${card.to})`,
                  opacity,
                  transform: `translateY(${translateY}px) scale(${scale})`,
                  transition: 'all 0.65s cubic-bezier(0.22, 1, 0.36, 1)',
                  pointerEvents: isActive ? 'auto' : 'none',
                  zIndex: isActive ? 10 : diff === 1 ? 5 : 1,
                }}
              >
                <span
                  className="absolute right-8 top-4 font-black select-none pointer-events-none"
                  style={{ fontSize: '11rem', lineHeight: 1, color: 'rgba(255,255,255,0.06)', letterSpacing: '-0.04em' }}
                >
                  {card.number}
                </span>
                <div className="relative z-10 h-full flex flex-col justify-between p-10 md:p-14">
                  <div>
                    <div
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                      style={{ backgroundColor: 'rgba(71,255,1,0.15)', border: '1px solid rgba(71,255,1,0.3)' }}
                    >
                      <span className="text-lg">{card.icon}</span>
                      <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#47ff01' }}>
                        {card.iconLabel}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">{card.title}</h3>
                    <p className="text-white/70 text-lg leading-relaxed max-w-xl">{card.body}</p>
                  </div>
                  <div className="mt-8 h-0.5 w-full rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: isActive ? `${Math.min(100, cardProgress * 120)}%` : '0%',
                        backgroundColor: '#47ff01',
                        transition: isActive ? 'width 0.1s linear' : 'width 0.4s ease',
                        maxWidth: '100%',
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p
          className="mt-10 text-sm font-medium transition-opacity duration-700"
          style={{ color: 'rgba(255,255,255,0.3)', opacity: progress > 0.05 ? 0 : 1 }}
        >
          Scroll to explore
        </p>
      </div>
    </div>
  );
};

export const PlugIntoSection: React.FC = () => (
  <section style={{ backgroundColor: '#5c0386' }}>
    <div className="container mx-auto px-6 pt-20 pb-10">
      <span
        className="inline-block text-xs font-bold tracking-widest uppercase mb-5"
        style={{ color: '#47ff01', backgroundColor: 'rgba(255,255,255,0.1)', padding: '6px 18px', borderRadius: '999px', border: '1px solid rgba(71,255,1,0.2)' }}
      >
        How It Works
      </span>
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-3xl leading-tight">
        Plug Into a Complete Creative Department
      </h2>
      <p className="text-lg md:text-xl text-white/70 font-normal max-w-2xl leading-relaxed">
        Instead of juggling freelancers or building an expensive in-house team, businesses get access to a dedicated team that delivers measurable results through a flexible monthly subscription.
      </p>
    </div>
    <div className="hidden md:block"><DesktopCards /></div>
    <div className="md:hidden container mx-auto px-6 pb-20 flex flex-col gap-6">
      {cards.map((card, i) => <MobileCard key={i} card={card} index={i} />)}
    </div>
  </section>
);

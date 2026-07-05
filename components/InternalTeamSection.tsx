import React, { useEffect, useRef, useState } from 'react';

export const InternalTeamSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div
          className="transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)' }}
        >
          <span className="inline-block text-xs font-bold tracking-widest uppercase mb-5" style={{ color: '#5c0386' }}>
            For Teams With Internal Resources
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-geko-dark mb-4 leading-tight">
            Already Have An Internal Team?
          </h2>
          <p className="text-xl md:text-2xl font-bold text-geko-dark mb-12">
            We Don't Replace Great Teams. We Help Them Do More.
          </p>
        </div>

        <div
          className="rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(40px)',
            transitionDelay: '0.2s',
            backgroundColor: '#5c0386',
          }}
        >
          <div className="p-10 md:p-14">
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Your marketing team does not need replacing. They need more creative capacity, specialized expertise, and strategic support to execute consistently at a high level.
            </p>
            <p className="text-white font-semibold text-lg leading-relaxed mb-6">
              Sleeka works alongside your existing team, not against it, helping you launch campaigns faster, produce more content, and drive better results without increasing headcount.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-10">
              Think of us as the missing piece between your team's current capacity and your growth goals.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: '⚡', label: 'Launch faster' },
                { icon: '📦', label: 'More content output' },
                { icon: '📊', label: 'Better results' },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl px-5 py-4"
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(71,255,1,0.2)' }}
                >
                  <span className="text-2xl">{icon}</span>
                  <span className="text-white font-semibold text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

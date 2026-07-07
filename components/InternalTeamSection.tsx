import React from 'react';
import { Slide } from './PlugIntoSection';

export const InternalTeamSection: React.FC = () => (
  <section className="py-20 px-6 bg-white">
    <div className="container mx-auto max-w-4xl">

      <Slide delay={0}>
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4" style={{ color: '#5c0386' }}>
          Already Have An Internal Team?
        </h2>
      </Slide>

      <Slide delay={0.08}>
        <p className="text-xl md:text-2xl font-bold mb-10" style={{ color: '#000' }}>
          We Don't Replace Great Teams. We Help Them Do More.
        </p>
      </Slide>

      <Slide delay={0.14}>
        <div
          className="rounded-[2.5rem] overflow-hidden shadow-xl"
          style={{ backgroundColor: '#5c0386' }}
        >
          <div className="p-10 md:p-14">
            <Slide delay={0}>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Your marketing team does not need replacing. They need more creative capacity, specialized expertise, and strategic support to execute consistently at a high level.
              </p>
            </Slide>
            <Slide delay={0.06}>
              <p className="text-white font-semibold text-lg leading-relaxed mb-6">
                Sleeka works alongside your existing team, not against it, helping you launch campaigns faster, produce more content, and drive better results without increasing headcount.
              </p>
            </Slide>
            <Slide delay={0.12}>
              <p className="text-white/60 text-base leading-relaxed mb-10">
                Think of us as the missing piece between your team's current capacity and your growth goals.
              </p>
            </Slide>
            <Slide delay={0.18}>
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
            </Slide>
          </div>
        </div>
      </Slide>

    </div>
  </section>
);

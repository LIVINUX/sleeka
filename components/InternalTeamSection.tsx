import React from 'react';
import { Slide } from './PlugIntoSection';

export const InternalTeamSection: React.FC = () => (
  <section className="py-20 px-6 bg-white">
    <div className="container mx-auto max-w-4xl">

      <Slide delay={0}>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ color: '#5c0386' }}>
          Already Have An Internal Team?
        </h2>
      </Slide>

      <Slide delay={0.08}>
        <p className="text-lg md:text-xl font-semibold mb-12" style={{ color: '#000' }}>
          We Don't Replace Great Teams. We Help Them Do More.
        </p>
      </Slide>

      {/* White card */}
      <Slide delay={0.14}>
        <div
          className="rounded-[2.5rem] overflow-hidden"
          style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.06)' }}
        >
          <div className="p-10 md:p-14">

            {/* Transition 1 — first paragraph */}
            <Slide delay={0}>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Your marketing team does not need replacing. They need more creative capacity, specialized expertise, and strategic support to execute consistently at a high level.
              </p>
            </Slide>

            {/* Transition 2 — bold paragraph + muted text together */}
            <Slide delay={0.1}>
              <div>
                <p className="font-semibold text-lg leading-relaxed mb-6" style={{ color: '#5c0386' }}>
                  Sleeka works alongside your existing team, not against it, helping you launch campaigns faster, produce more content, and drive better results without increasing headcount.
                </p>
                <p className="text-gray-400 text-base leading-relaxed mb-10">
                  Think of us as the missing piece between your team's current capacity and your growth goals.
                </p>
              </div>
            </Slide>

            {/* Transition 3 — icons */}
            <Slide delay={0.18}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { iconFile: 'launch-faster.png',  label: 'Launch faster' },
                  { iconFile: 'more-content.png',   label: 'More content output' },
                  { iconFile: 'better-results.png', label: 'Better results' },
                ].map(({ iconFile, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-2xl px-5 py-4"
                    style={{ backgroundColor: 'rgba(92,3,134,0.05)', border: '1px solid rgba(92,3,134,0.1)' }}
                  >
                    <img
                      src={`/assets/icons/internal-team/${iconFile}`}
                      alt={label}
                      className="w-8 h-8 object-contain shrink-0"
                    />
                    <span className="font-semibold text-sm" style={{ color: '#5c0386' }}>{label}</span>
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

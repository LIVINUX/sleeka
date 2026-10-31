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

      <Slide delay={0.14}>
        <div
          className="rounded-[2.5rem] overflow-hidden"
          style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.06)' }}
        >
          <div className="p-10 md:p-14">

            <Slide delay={0}>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Your team may have the ideas and direction but lack the capacity, specialized skills or execution needed to keep marketing moving.
              </p>
            </Slide>

            <Slide delay={0.1}>
              <div>
                <p className="font-semibold text-lg leading-relaxed mb-6" style={{ color: '#5c0386' }}>
                  Sleeka works alongside your existing team, bringing additional marketing expertise and execution across strategy, campaigns, lead generation and creative production.
                </p>
                <p className="text-gray-400 text-base leading-relaxed mb-10">
                  Think of us as the missing piece between your team's current capacity and your growth goals.
                </p>
              </div>
            </Slide>

            {/* Icons — black background, green icon, white text */}
            <Slide delay={0.18}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { iconFile: 'launch-faster.png',  label: 'Launch Campaigns Faster' },
                  { iconFile: 'more-content.png',   label: 'Get More Done' },
                  { iconFile: 'better-results.png', label: 'Scale Smarter' },
                ].map(({ iconFile, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-2xl px-5 py-4"
                    style={{ backgroundColor: '#000000', border: '1px solid #000000' }}
                  >
                    <img
                      src={`/assets/icons/internal-team/${iconFile}`}
                      alt={label}
                      className="w-8 h-8 object-contain shrink-0"
                      style={{ filter: 'brightness(0) saturate(100%) invert(78%) sepia(96%) saturate(1041%) hue-rotate(46deg) brightness(105%) contrast(103%)' }}
                    />
                    <span className="font-bold text-sm" style={{ color: '#ffffff' }}>{label}</span>
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

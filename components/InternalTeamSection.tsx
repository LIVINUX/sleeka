import React from 'react';
import { Slide } from './PlugIntoSection';

export const InternalTeamSection: React.FC = () => (
  <section className="py-20 px-6 bg-white">
    <div className="container mx-auto max-w-4xl">

      <Slide delay={0}>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ color: '#5c0386' }}>
          Already Have An Internal Team?
        </h2>
      </Slide>

      <Slide delay={0.08}>
        <p className="text-base md:text-lg font-semibold mb-12" style={{ color: '#000' }}>
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

            <Slide delay={0.18}>
              <div className="space-y-4">
                {[
                  { iconFile: 'launch-faster.png', label: 'Launch Campaigns Faster' },
                  { iconFile: 'more-content.png', label: 'Get More Done' },
                  { iconFile: 'better-results.png', label: 'Scale Smarter' },
                ].map(({ iconFile, label }) => (
                  <div
                    key={label}
                    className="flex w-full h-[132px] sm:h-[148px] md:h-[160px] items-center gap-4 sm:gap-6 overflow-hidden rounded-[2rem] px-5 sm:px-7 text-white shadow-[0_16px_30px_rgba(92,3,134,0.14)]"
                    style={{ backgroundColor: '#25004d' }}
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#7117cf' }}>
                      <img
                        src={`/assets/icons/internal-team/${iconFile}`}
                        alt=""
                        aria-hidden="true"
                        className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                      />
                    </div>
                    <div className="h-12 sm:h-14 w-px bg-[#a65cff]/70 shrink-0" aria-hidden="true" />
                    <span className="text-base sm:text-xl md:text-2xl font-bold leading-tight">{label}</span>
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

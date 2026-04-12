import React from 'react';
import { Zap, TrendingUp, Check, X } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Speed, Consistency and Scale',
    description:
      "We act as your full creative department, delivering content exactly when you need them. With our scalable model, you can adjust creative capacity based on campaign demand, without the stress of hiring, management, or delays.",
  },
  {
    icon: TrendingUp,
    title: 'Revenue-Driven Talent',
    description:
      "Our talents don't just create content - they're business partners. Vetted professionals who understand marketing, KPIs, and revenue, they integrate seamlessly, work independently, and deliver content that accelerates campaigns and drives measurable growth.",
  },
];

const tableRows = [
  {
    option: 'Hiring an In-House Creative Team',
    challenge: 'Expensive salaries, recruitment time, management overhead, and long-term payroll commitments.',
    isSleeka: false,
  },
  {
    option: 'Freelancers',
    challenge: 'Unreliable availability, inconsistent quality, communication delays, and difficulty managing multiple specialists.',
    isSleeka: false,
  },
  {
    option: 'Traditional Agencies',
    challenge: 'High project costs, slower turnaround times, and limited flexibility for ongoing creative needs.',
    isSleeka: false,
  },
  {
    option: 'DIY with AI Tools',
    challenge: 'Requires time to learn tools, inconsistent quality, lack of creative strategy, and internal teams still spending valuable time producing content instead of focusing on growth.',
    isSleeka: false,
  },
  {
    option: 'Sleeka Creative Infrastructure',
    challenge: 'Dedicated creative department, predictable delivery, structured creative workflow, and strategic creative support that integrates seamlessly with your marketing team.',
    isSleeka: true,
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-[#5c0386] py-24 text-white relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7a04b3] rounded-full blur-[120px] opacity-30 pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7a04b3] rounded-full blur-[120px] opacity-30 pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-[#47ff01]/10 text-[#47ff01] font-semibold text-sm mb-6 tracking-wide uppercase border border-[#47ff01]/20">
            The Sleeka Advantage
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Why Businesses Choose Sleeka
          </h2>
          <p className="text-white/70 text-lg">
            Scalable creative solutions designed for performance and growth.
          </p>
        </div>

        {/* ── Feature Cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-[#7a04b3] rounded-3xl p-8 md:p-12 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-[#47ff01] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 bg-[#47ff01] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon size={32} className="text-[#5c0386]" strokeWidth={2.5} />
                  </div>
                  <span className="text-6xl font-bold text-white/5 select-none">0{index + 1}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 group-hover:text-[#47ff01] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-base md:text-lg leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Comparison Table ── */}
        <div className="max-w-5xl mx-auto">

          {/* Table headline */}
          <div className="text-center mb-10">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white/50 font-semibold text-xs tracking-widest uppercase border border-white/10 mb-4">
              Sleeka vs. The Alternatives
            </span>
            <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
              Hiring or outsourcing?{' '}
              <em className="text-[#47ff01] not-italic">Neither.</em>
            </h3>
          </div>

          {/*
            Scroll hint shown only on small screens.
            The table wrapper below is horizontally scrollable.
            min-w forces BOTH columns to remain visible at all times —
            no column ever goes off screen without the user choosing to scroll.
          */}
          <p className="text-white/30 text-xs text-center mb-3 md:hidden tracking-wide">
            ← Scroll to see full table →
          </p>

          {/* Scrollable wrapper */}
          <div
            className="w-full overflow-x-auto rounded-3xl"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {/*
              min-w-[600px] ensures both columns are always readable.
              On small phones the wrapper scrolls horizontally so the user
              can see all content — nothing is hidden behind an off-screen edge.
            */}
            <table
              className="border-collapse"
              style={{ minWidth: '600px', width: '100%' }}
            >
              {/* Column headers */}
              <thead>
                <tr className="bg-white/5">
                  <th
                    className="text-left px-7 py-5 text-white/50 text-xs font-bold uppercase tracking-widest border-b border-r border-white/10"
                    style={{ width: '35%' }}
                  >
                    Option
                  </th>
                  <th
                    className="text-left px-7 py-5 text-white/50 text-xs font-bold uppercase tracking-widest border-b border-white/10"
                    style={{ width: '65%' }}
                  >
                    Challenges
                  </th>
                </tr>
              </thead>

              <tbody>
                {tableRows.map((row, i) => {
                  const isLast = i === tableRows.length - 1;
                  return (
                    <tr
                      key={i}
                      className={`transition-colors duration-200 ${
                        row.isSleeka
                          ? 'bg-[#47ff01]'
                          : 'hover:bg-white/5'
                      }`}
                    >
                      {/* Option cell */}
                      <td
                        className={`px-7 py-5 align-top border-r ${
                          isLast ? '' : 'border-b'
                        } ${
                          row.isSleeka
                            ? 'border-[#2dc200]'
                            : 'border-white/10'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          {/* Check / X icon */}
                          <span
                            className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                              row.isSleeka
                                ? 'bg-[#5c0386]'
                                : 'bg-white/10'
                            }`}
                          >
                            {row.isSleeka
                              ? <Check size={11} className="text-[#47ff01]" strokeWidth={3} />
                              : <X size={11} className="text-white/35" strokeWidth={2.5} />
                            }
                          </span>
                          <span
                            className={`font-bold text-sm md:text-base leading-snug ${
                              row.isSleeka ? 'text-[#1a1a1a]' : 'text-white'
                            }`}
                          >
                            {row.option}
                          </span>
                        </div>
                      </td>

                      {/* Challenge cell */}
                      <td
                        className={`px-7 py-5 align-top text-sm md:text-base leading-relaxed ${
                          isLast ? '' : 'border-b border-white/10'
                        } ${
                          row.isSleeka
                            ? 'text-[#1a1a1a]/80'
                            : 'text-white/60'
                        }`}
                      >
                        {row.challenge}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>
  );
};

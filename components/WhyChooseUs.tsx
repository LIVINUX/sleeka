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
      <style>{`
        /* Hide scrollbar completely — all browsers */
        .slk-table-scroll { overflow-x: auto; }
        .slk-table-scroll::-webkit-scrollbar { display: none; }
        .slk-table-scroll { -ms-overflow-style: none; scrollbar-width: none; }

        /* Sticky first column */
        .slk-sticky {
          position: sticky;
          left: 0;
          z-index: 2;
        }
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .animate-bounce-x { animation: bounce-x 1s ease-in-out infinite; }
      `}</style>

      {/* Background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7a04b3] rounded-full blur-[120px] opacity-30 pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7a04b3] rounded-full blur-[120px] opacity-30 pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
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

        {/* Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-[#7a04b3] rounded-3xl p-8 md:p-12 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-[#47ff01] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 bg-[#47ff01] rounded-2xl flex items-center justify-center shadow-lg shadow-[#5c0386]/30 group-hover:scale-110 transition-transform duration-300">
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

        {/* ── COMPARISON TABLE ── */}
        <div className="max-w-4xl mx-auto">

          {/* Table intro */}
          <div className="text-center mb-10">
            <span className="inline-block py-1 px-3 rounded-full bg-[#47ff01]/10 text-[#47ff01] font-semibold text-sm tracking-wide uppercase border border-[#47ff01]/20">
              Sleeka vs. The Alternatives
            </span>
            <h3 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
              Hiring or outsourcing?{' '}
              <em className="not-italic text-[#47ff01]">Neither.</em>
            </h3>
            <p className="text-white/60 text-base">
              See how Sleeka compares to every other option on the table.
            </p>
          </div>

          {/* Swipe hint — mobile only */}
          <div className="flex items-center justify-center gap-2 text-white/40 text-xs mb-3 md:hidden">
            <svg className="w-4 h-4 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span>Swipe to read challenges</span>
            <svg className="w-4 h-4 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Scroll wrapper — invisible scrollbar, no fade */}
          <div className="slk-table-scroll rounded-3xl border border-white/10">
            <table className="w-full border-collapse" style={{ minWidth: '480px' }}>

              {/* Column widths */}
              <colgroup>
                <col style={{ width: '44%' }} />
                <col style={{ width: '56%' }} />
              </colgroup>

              {/* Sticky header row */}
              <thead>
                <tr className="bg-[#3d005c]">
                  {/* Sticky "Option" header */}
                  <th
                    className="slk-sticky bg-[#3d005c] px-6 py-4 text-left text-xs font-black uppercase tracking-widest text-white/40 border-b border-white/10"
                  >
                    Option
                  </th>
                  {/* "Challenges" header — scrolls with the table on mobile */}
                  <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-widest text-white/40 border-b border-white/10 border-l border-white/10">
                    Challenges
                  </th>
                </tr>
              </thead>

              <tbody>
                {tableRows.map((row, i) => {
                  const bg = row.isSleeka ? '#47ff01' : 'transparent';
                  const stickyBg = row.isSleeka ? '#47ff01' : '#4a007a'; // solid colour for sticky cell

                  return (
                    <tr
                      key={i}
                      className={`${
                        row.isSleeka ? '' : 'border-b border-white/10 hover:bg-white/5 transition-colors'
                      }`}
                      style={{ background: bg }}
                    >
                      {/* ── STICKY Option cell ── */}
                      <td
                        className="slk-sticky px-6 py-5 align-top"
                        style={{ background: stickyBg }}
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                              row.isSleeka ? 'bg-[#1a0030]' : 'bg-white/10'
                            }`}
                          >
                            {row.isSleeka
                              ? <Check className="w-3.5 h-3.5 text-[#47ff01]" strokeWidth={3} />
                              : <X className="w-3.5 h-3.5 text-white/40" strokeWidth={2.5} />
                            }
                          </span>
                          <span
                            className={`text-sm font-bold leading-snug ${
                              row.isSleeka ? 'text-[#1a0030]' : 'text-white/90'
                            }`}
                          >
                            {row.option}
                          </span>
                        </div>
                      </td>

                      {/* ── Scrollable Challenge cell ── */}
                      <td
                        className={`px-6 py-5 align-middle text-sm leading-relaxed border-l border-white/10 ${
                          row.isSleeka ? 'text-[#1a0030] font-medium' : 'text-white/65'
                        }`}
                        style={{ minWidth: '260px' }}
                      >
                        {row.challenge}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Bottom nudge */}
          <p className="text-center text-white/40 text-sm mt-6 italic">
            Sleeka is the only option that gives you all of it — without the overhead.
          </p>
        </div>

      </div>
    </section>
  );
};

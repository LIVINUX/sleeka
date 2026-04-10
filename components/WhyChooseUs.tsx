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
    challenge:
      'Expensive salaries, recruitment time, management overhead, and long-term payroll commitments.',
    isSleeka: false,
  },
  {
    option: 'Freelancers',
    challenge:
      'Unreliable availability, inconsistent quality, communication delays, and difficulty managing multiple specialists.',
    isSleeka: false,
  },
  {
    option: 'Traditional Agencies',
    challenge:
      'High project costs, slower turnaround times, and limited flexibility for ongoing creative needs.',
    isSleeka: false,
  },
  {
    option: 'DIY with AI Tools',
    challenge:
      'Requires time to learn tools, inconsistent quality, lack of creative strategy, and internal teams still spending valuable time producing content instead of focusing on growth.',
    isSleeka: false,
  },
  {
    option: 'Sleeka Creative Infrastructure',
    challenge:
      'Dedicated creative department, predictable delivery, structured creative workflow, and strategic creative support that integrates seamlessly with your marketing team.',
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

          {/* Table label */}
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

          {/* Table */}
          <div className="rounded-3xl overflow-hidden border border-white/10">

            {/* Header row */}
            <div className="grid grid-cols-[1fr_1.6fr] bg-white/5 border-b border-white/10">
              <div className="px-6 py-4 text-sm font-black uppercase tracking-widest text-white/50">
                Option
              </div>
              <div className="px-6 py-4 text-sm font-black uppercase tracking-widest text-white/50 border-l border-white/10">
                Challenges
              </div>
            </div>

            {/* Data rows */}
            {tableRows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-[1fr_1.6fr] transition-colors duration-200 ${
                  row.isSleeka
                    ? 'bg-[#47ff01] text-[#1a0030]'
                    : 'bg-white/[0.03] hover:bg-white/[0.07] border-b border-white/10'
                }`}
              >
                {/* Option column */}
                <div
                  className={`px-6 py-5 flex items-center gap-3 ${
                    row.isSleeka ? 'border-b-0' : ''
                  }`}
                >
                  {row.isSleeka ? (
                    <span className="w-6 h-6 rounded-full bg-[#1a0030] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#47ff01]" strokeWidth={3} />
                    </span>
                  ) : (
                    <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <X className="w-3.5 h-3.5 text-white/40" strokeWidth={2.5} />
                    </span>
                  )}
                  <span
                    className={`text-sm sm:text-base font-bold leading-snug ${
                      row.isSleeka ? 'text-[#1a0030]' : 'text-white/90'
                    }`}
                  >
                    {row.option}
                  </span>
                </div>

                {/* Challenge column */}
                <div
                  className={`px-6 py-5 flex items-center text-sm sm:text-base leading-relaxed ${
                    row.isSleeka
                      ? 'text-[#1a0030] font-medium border-l border-[#1a0030]/15'
                      : 'text-white/65 border-l border-white/10'
                  }`}
                >
                  {row.challenge}
                </div>
              </div>
            ))}

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

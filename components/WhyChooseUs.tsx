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
        /* Hide scrollbar visually but keep it functional */
        .sleeka-scroll::-webkit-scrollbar { height: 4px; }
        .sleeka-scroll::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); border-radius: 99px; }
        .sleeka-scroll::-webkit-scrollbar-thumb { background: #47ff01; border-radius: 99px; }
        /* Fade hint on the right edge — mobile only */
        @media (max-width: 767px) {
          .sleeka-scroll-wrap::after {
            content: '';
            position: absolute;
            top: 0; right: 0; bottom: 0;
            width: 48px;
            background: linear-gradient(to right, transparent, #5c0386);
            pointer-events: none;
            border-radius: 0 1.5rem 1.5rem 0;
          }
        }
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

          {/* Table header text */}
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

          {/*
            Mobile: relative wrapper with fade-hint class + horizontal scroll.
            Desktop (md+): overflow visible, table stretches naturally.
          */}
          <div className="relative sleeka-scroll-wrap">

            {/* Swipe hint — mobile only */}
            <p className="flex items-center justify-center gap-2 text-white/40 text-xs mb-3 md:hidden">
              <svg className="w-4 h-4 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Swipe to explore
            </p>

            {/* Scroll container — active only on mobile */}
            <div className="sleeka-scroll overflow-x-auto md:overflow-x-visible -mx-2 px-2">

              {/* Table itself — min-width forces scroll on small screens */}
              <div
                className="rounded-3xl overflow-hidden border border-white/10"
                style={{ minWidth: '520px' }}
              >
                {/* Header row */}
                <div
                  className="grid border-b border-white/10 bg-white/5"
                  style={{ gridTemplateColumns: '1fr 1.7fr' }}
                >
                  <div className="px-6 py-4 text-xs font-black uppercase tracking-widest text-white/40">
                    Option
                  </div>
                  <div className="px-6 py-4 text-xs font-black uppercase tracking-widest text-white/40 border-l border-white/10">
                    Challenges
                  </div>
                </div>

                {/* Data rows */}
                {tableRows.map((row, i) => (
                  <div
                    key={i}
                    className={`grid transition-colors duration-200 ${
                      row.isSleeka
                        ? 'bg-[#47ff01]'
                        : 'bg-white/[0.03] hover:bg-white/[0.07] border-b border-white/10'
                    }`}
                    style={{ gridTemplateColumns: '1fr 1.7fr' }}
                  >
                    {/* Option */}
                    <div className="px-6 py-5 flex items-start gap-3">
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

                    {/* Challenge */}
                    <div
                      className={`px-6 py-5 text-sm leading-relaxed flex items-center ${
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
            </div>
          </div>

          {/* Bottom nudge */}
          <p className="text-center text-white/40 text-sm mt-6 italic">
            Sleeka is the only option that gives you all of it — without the overhead.
          </p>
        </div>

      </div>

      <style>{`
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        .animate-bounce-x { animation: bounce-x 1.2s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

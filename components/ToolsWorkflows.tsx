import React from 'react';

export const ToolsWorkflows: React.FC = () => (
  <section
    className="relative overflow-hidden text-white py-20 md:py-28"
    style={{ backgroundColor: '#5c0386' }}
  >
    <style>{`
      @keyframes slk-tools-float {
        0%, 100% { transform: translateY(0); }
        50%      { transform: translateY(-10px); }
      }
      .slk-tools-img {
        animation: slk-tools-float 6s ease-in-out infinite;
        will-change: transform;
      }
    `}</style>

    {/* Decorative blurs to match Testimonials/How We Work styling */}
    <div className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] bg-[#7a04b3] opacity-30 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#7a04b3] opacity-30 rounded-full blur-3xl pointer-events-none" />

    <div className="container mx-auto px-6 md:px-12 relative z-10">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        {/* Small header pill */}
        <span
          className="inline-block px-5 py-2 rounded-full text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-6"
          style={{ backgroundColor: 'rgba(71,255,1,0.12)', color: '#47ff01' }}
        >
          Tools &amp; Workflows
        </span>

        {/* Big header */}
        <h2 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6 text-balance">
          Systemized <br className="hidden md:block" /> and Flexible
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-white/85 font-light leading-relaxed max-w-2xl text-pretty">
          Sleeka runs on a proven internal workflow while seamlessly integrating
          with your team&apos;s existing tools. You don&apos;t have to change how
          you work, we simply make it more efficient.
        </p>

        {/* Phone mockup image */}
        <div className="mt-12 md:mt-16 w-full flex justify-center">
          <img
            src="/assets/tools-workflows.png"
            alt="Sleeka integrates with Slack, ClickUp, Asana, Notion, Google Sheets, and Zapier"
            className="slk-tools-img w-full max-w-md md:max-w-lg lg:max-w-xl h-auto select-none"
            draggable={false}
          />
        </div>
      </div>
    </div>
  </section>
);

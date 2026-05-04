import React from 'react';

export const ToolsAndWorkflows: React.FC = () => (
  <section
    style={{ backgroundColor: '#7B00D4' }}
    className="py-20 px-6 flex flex-col items-center text-center overflow-hidden"
  >
    {/* Label */}
    <span
      className="inline-block text-xs font-bold tracking-widest uppercase mb-5"
      style={{
        color: '#39FF14',
        backgroundColor: 'rgba(0,0,0,0.25)',
        padding: '6px 18px',
        borderRadius: '999px',
        letterSpacing: '0.15em',
      }}
    >
      Tools &amp; Workflows
    </span>

    {/* Heading — matches site-wide h2: text-4xl md:text-5xl */}
    <h2
      className="font-black text-white mb-6 text-4xl md:text-5xl leading-tight"
      style={{ maxWidth: '560px' }}
    >
      Systemized and Flexible
    </h2>

    {/* Subtext — matches site-wide: text-lg, muted */}
    <p
      className="text-white/80 leading-relaxed mb-14 text-lg"
      style={{ maxWidth: '480px' }}
    >
      Sleeka runs on a proven internal workflow while seamlessly integrating
      with your team's existing tools. You don't have to change how you work,
      we simply make it more efficient.
    </p>

    {/* Phone Mockup — white card to match UI design */}
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '32px',
        padding: '24px',
        maxWidth: '320px',
        width: '100%',
        boxShadow: '0 32px 80px rgba(0,0,0,0.25)',
      }}
    >
      <img
        src="/assets/tools-mockup.png"
        alt="Sleeka integrates with Slack, Notion, Google Sheets, ClickUp, DaVinci Resolve and more"
        style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block' }}
      />
    </div>
  </section>
);

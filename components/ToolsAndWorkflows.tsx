import React from 'react';

export const ToolsAndWorkflows: React.FC = () => (
  <section
    className="relative overflow-hidden flex flex-col items-center text-center"
    style={{
      background: 'linear-gradient(135deg, #5c0386 0%, #7B00D4 50%, #5c0386 100%)',
      paddingTop: '80px',
      paddingLeft: '24px',
      paddingRight: '24px',
      paddingBottom: '0',
    }}
  >
    {/* Label */}
    <span
      className="inline-block text-xs font-bold tracking-widest uppercase mb-5"
      style={{
        color: '#47ff01',
        backgroundColor: 'rgba(255,255,255,0.1)',
        padding: '6px 18px',
        borderRadius: '999px',
        letterSpacing: '0.15em',
        border: '1px solid rgba(71,255,1,0.2)',
      }}
    >
      Tools &amp; Workflows
    </span>

    {/* Heading — consistent with all other sections: text-4xl md:text-5xl */}
    <h2
      className="font-bold text-white mb-6 text-4xl md:text-5xl leading-tight"
      style={{ maxWidth: '560px' }}
    >
      Systemized and Flexible
    </h2>

    {/* Subtext */}
    <p
      className="text-white/75 leading-relaxed mb-14 text-lg"
      style={{ maxWidth: '480px' }}
    >
      Sleeka runs on a proven internal workflow while seamlessly integrating
      with your team's existing tools. You don't have to change how you work,
      we simply make it more efficient.
    </p>

    {/* Phone Mockup — sits at bottom, base flush with section edge */}
    <div style={{ maxWidth: '300px', width: '100%' }}>
      <img
        src="/assets/tools-mockup.png"
        alt="Sleeka integrates with Slack, Notion, Google Sheets, ClickUp, DaVinci Resolve and more"
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'contain',
          display: 'block',
          verticalAlign: 'bottom',
        }}
      />
    </div>
  </section>
);

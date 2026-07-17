import React, { useState } from 'react';
import { Slide } from './PlugIntoSection';

const navItems = [
  { iconFile: 'dashboard.png', label: 'Dashboard', id: 'dashboard' },
  { iconFile: 'content.png',   label: 'Content',   id: 'content'   },
  { iconFile: 'reports.png',   label: 'Reports',   id: 'reports'   },
  { iconFile: 'chat.png',      label: 'Chat',      id: 'chat'      },
];

// ── Screens ───────────────────────────────────────────────────────────────
const DashboardScreen = () => (
  <div className="flex flex-col h-full overflow-hidden">
    <div className="flex items-center justify-between px-4 pt-3 pb-2 bg-white border-b border-gray-100 shrink-0">
      <div>
        <p className="font-semibold text-gray-800" style={{ fontSize: '11px' }}>Good morning 👋</p>
        <p className="text-gray-400" style={{ fontSize: '10px' }}>TechNaija Solutions</p>
      </div>
      <div className="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#5c0386', fontSize: '10px' }}>TN</div>
    </div>
    <div className="px-3 pt-2 grid grid-cols-2 gap-1.5 shrink-0">
      {[
        { label: 'Active Clients', value: '4',    sub: '+25%',     color: '#5c0386' },
        { label: 'Leads',          value: '45',   sub: '+8%',      color: '#16a34a' },
        { label: 'Total Reach',    value: '13.8K',sub: 'Jun 2026', color: '#7c3aed' },
        { label: 'Engagement',     value: '14.4%',sub: 'Above avg',color: '#d97706' },
      ].map(({ label, value, sub, color }) => (
        <div key={label} className="bg-gray-50 rounded-xl p-2.5 border border-gray-100">
          <p className="font-black text-gray-800" style={{ fontSize: '13px' }}>{value}</p>
          <p className="text-gray-500 mt-0.5" style={{ fontSize: '9px' }}>{label}</p>
          <p className="font-medium mt-0.5" style={{ fontSize: '9px', color }}>{sub}</p>
        </div>
      ))}
    </div>
    <div className="px-3 pt-2 flex-1 min-h-0">
      <p className="font-semibold text-gray-700 mb-1.5" style={{ fontSize: '10px' }}>Recent Activity</p>
      <div className="space-y-1.5">
        {[
          { title: 'Mama Cass Case Study', status: 'Live',      dot: '#16a34a' },
          { title: 'SME Cloud Tools post', status: 'Posted',    dot: '#5c0386' },
          { title: 'Product Squad reel',   status: 'In Review', dot: '#d97706' },
        ].map(({ title, status, dot }) => (
          <div key={title} className="flex items-center justify-between bg-white rounded-xl px-2.5 py-2 border border-gray-100">
            <p className="text-gray-700 font-medium" style={{ fontSize: '10px' }}>{title}</p>
            <div className="flex items-center gap-1 shrink-0 ml-1">
              <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: dot }} />
              <span className="font-medium" style={{ fontSize: '9px', color: dot }}>{status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ContentScreen = () => (
  <div className="flex flex-col h-full overflow-hidden">
    <div className="px-4 pt-3 pb-2 bg-white border-b border-gray-100 shrink-0">
      <p className="font-semibold text-gray-800" style={{ fontSize: '11px' }}>Content Pipeline</p>
      <p className="text-gray-400 mb-1.5" style={{ fontSize: '10px' }}>TechNaija Solutions</p>
      <div className="flex gap-1">
        {['All', 'Live', 'Scheduled', 'Review'].map((t, i) => (
          <span key={t} className="rounded-full font-medium px-2 py-0.5" style={{ backgroundColor: i === 0 ? '#5c0386' : '#f3f4f6', color: i === 0 ? '#fff' : '#6b7280', fontSize: '9px' }}>{t}</span>
        ))}
      </div>
    </div>
    <div className="px-3 pt-2 flex-1 min-h-0 space-y-1.5 overflow-hidden">
      {[
        { id: 'SLE-001', title: 'Why SMEs Need Cloud Tools',     platform: 'LinkedIn',  status: 'Live',       color: '#16a34a' },
        { id: 'SLE-002', title: 'Meet the Team: Product Squad',  platform: 'Instagram', status: 'Posted',     color: '#5c0386' },
        { id: 'SLE-003', title: 'Mama Cass Success Story',       platform: 'LinkedIn',  status: 'Scheduled',  color: '#d97706' },
        { id: 'SLE-004', title: 'Signs You\'ve Outgrown Excel',  platform: 'Instagram', status: 'In Review',  color: '#7c3aed' },
      ].map(({ id, title, platform, status, color }) => (
        <div key={id} className="bg-white rounded-xl border border-gray-100 px-2.5 py-2">
          <div className="flex items-center justify-between mb-0.5">
            <span className="text-gray-400" style={{ fontSize: '9px' }}>{id}</span>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
              <span className="font-medium" style={{ fontSize: '9px', color }}>{status}</span>
            </div>
          </div>
          <p className="font-medium text-gray-800 leading-tight" style={{ fontSize: '10px' }}>{title}</p>
          <span className="text-gray-400" style={{ fontSize: '9px' }}>{platform}</span>
        </div>
      ))}
    </div>
  </div>
);

const ReportsScreen = () => (
  <div className="flex flex-col h-full overflow-hidden">
    <div className="px-4 pt-3 pb-2 bg-white border-b border-gray-100 shrink-0">
      <p className="font-semibold text-gray-800" style={{ fontSize: '11px' }}>Monthly Report</p>
      <p className="text-gray-400" style={{ fontSize: '10px' }}>Jun 2026 · TechNaija Solutions</p>
    </div>
    <div className="px-3 pt-2 flex-1 min-h-0 overflow-hidden">
      {/* Executive summary */}
      <div className="bg-gray-50 rounded-xl p-2.5 mb-2 border border-gray-100">
        <p className="font-semibold text-gray-700 mb-1" style={{ fontSize: '10px' }}>Executive Summary</p>
        <p className="text-gray-600 leading-relaxed" style={{ fontSize: '9.5px' }}>
          In Jun 2026, we published <span className="font-bold">22 pieces of content</span> reaching <span className="font-bold">13,880 accounts</span>, generating <span className="font-bold">45 qualified leads</span> at a <span className="font-bold text-[#5c0386]">14.47% engagement rate</span> — above industry average of 3.5%.
        </p>
      </div>
      {/* Metrics row */}
      <div className="grid grid-cols-3 gap-1.5 mb-2">
        {[
          { label: 'Reach',       value: '13,880' },
          { label: 'Leads',       value: '45'     },
          { label: 'Engagement',  value: '14.47%' },
        ].map(({ label, value }) => (
          <div key={label} className="bg-white rounded-xl p-2 border border-gray-100 text-center">
            <p className="font-black text-[#5c0386]" style={{ fontSize: '11px' }}>{value}</p>
            <p className="text-gray-400" style={{ fontSize: '8.5px' }}>{label}</p>
          </div>
        ))}
      </div>
      {/* Rating */}
      <div className="rounded-xl p-2.5 mb-2 text-white" style={{ backgroundColor: '#5c0386' }}>
        <p className="font-bold mb-0.5" style={{ fontSize: '9px', color: '#47ff01' }}>Rating: Excellent</p>
        <p className="text-white/80" style={{ fontSize: '9px' }}>5 posts · 997 likes · 588 saves · 424 comments</p>
      </div>
      {/* Top content */}
      <p className="font-semibold text-gray-700 mb-1" style={{ fontSize: '10px' }}>Top Content</p>
      {[
        { rank: '#1', title: 'Mama Cass Case Study', reach: '6,120', leads: '28' },
        { rank: '#2', title: 'Cloud Tools post',      reach: '4,820', leads: '14' },
        { rank: '#3', title: 'Product Squad reel',    reach: '2,940', leads: '3'  },
      ].map(({ rank, title, reach, leads }) => (
        <div key={rank} className="flex items-center gap-2 mb-1.5">
          <span className="font-black w-5 shrink-0" style={{ fontSize: '9px', color: '#5c0386' }}>{rank}</span>
          <p className="text-gray-700 flex-1" style={{ fontSize: '9.5px' }}>{title}</p>
          <span className="text-gray-400 shrink-0" style={{ fontSize: '9px' }}>{reach} · {leads} leads</span>
        </div>
      ))}
    </div>
  </div>
);

const ChatScreen = () => (
  <div className="flex flex-col h-full overflow-hidden">
    {/* Chat header */}
    <div className="px-3 pt-3 pb-2 bg-white border-b border-gray-100 shrink-0">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold shrink-0" style={{ backgroundColor: '#5c0386', fontSize: '9px' }}>TN</div>
        <div>
          <p className="font-semibold text-gray-800" style={{ fontSize: '11px' }}>TechNaija Team</p>
          <p className="text-gray-400" style={{ fontSize: '9px' }}>Livinus, Dusom, 2 others · 5 members</p>
        </div>
      </div>
    </div>
    {/* Messages */}
    <div className="flex-1 overflow-hidden px-2 pt-2 space-y-2 flex flex-col">
      {/* Livinus message */}
      <div className="flex gap-1.5 items-end">
        <div className="w-5 h-5 rounded-full flex items-center justify-center text-white shrink-0" style={{ backgroundColor: '#5c0386', fontSize: '7px', fontWeight: 700 }}>LE</div>
        <div>
          <p className="text-gray-500 mb-0.5 ml-1" style={{ fontSize: '8px' }}>Livinus · Content Strategist</p>
          <div className="bg-white rounded-2xl rounded-bl-none px-2.5 py-1.5 border border-gray-100 max-w-[160px]">
            <p className="text-gray-700" style={{ fontSize: '9.5px' }}>Hey! Your June content calendar is ready. Check the pipeline tab 👍</p>
            <p className="text-gray-400 mt-0.5 text-right" style={{ fontSize: '8px' }}>9:32 AM ✓</p>
          </div>
        </div>
      </div>
      {/* Client reply */}
      <div className="flex gap-1.5 items-end justify-end">
        <div className="rounded-2xl rounded-br-none px-2.5 py-1.5 max-w-[160px]" style={{ backgroundColor: '#5c0386' }}>
          <p className="text-white" style={{ fontSize: '9.5px' }}>Looks great! Can we swap post 3 and 4?</p>
          <p className="text-white/50 mt-0.5 text-right" style={{ fontSize: '8px' }}>9:45 AM ✓✓</p>
        </div>
        <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#47ff01', fontSize: '7px', fontWeight: 700, color: '#000' }}>TN</div>
      </div>
      {/* Dusom message */}
      <div className="flex gap-1.5 items-end">
        <div className="w-5 h-5 rounded-full flex items-center justify-center text-white shrink-0" style={{ backgroundColor: '#7c3aed', fontSize: '7px', fontWeight: 700 }}>DS</div>
        <div>
          <p className="text-gray-500 mb-0.5 ml-1" style={{ fontSize: '8px' }}>Dusom · Project Manager</p>
          <div className="bg-white rounded-2xl rounded-bl-none px-2.5 py-1.5 border border-gray-100 max-w-[160px]">
            <p className="text-gray-700" style={{ fontSize: '9.5px' }}>Done! Updated the order. Graphics coming in 2hrs 🎨</p>
            <p className="text-gray-400 mt-0.5 text-right" style={{ fontSize: '8px' }}>9:48 AM ✓</p>
          </div>
        </div>
      </div>
      {/* Voice note from Livinus */}
      <div className="flex gap-1.5 items-end">
        <div className="w-5 h-5 rounded-full flex items-center justify-center text-white shrink-0" style={{ backgroundColor: '#5c0386', fontSize: '7px', fontWeight: 700 }}>LE</div>
        <div>
          <p className="text-gray-500 mb-0.5 ml-1" style={{ fontSize: '8px' }}>Livinus · Content Strategist</p>
          <div className="bg-white rounded-2xl rounded-bl-none px-2.5 py-1.5 border border-gray-100 flex items-center gap-1.5" style={{ minWidth: '130px' }}>
            <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#5c0386' }}>
              <span className="text-white" style={{ fontSize: '10px' }}>▶</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-0.5 mb-0.5">
                {[3,5,4,6,3,5,4,3,6,5,4,3].map((h, i) => (
                  <div key={i} className="w-0.5 rounded-full" style={{ height: `${h * 2}px`, backgroundColor: i < 5 ? '#5c0386' : '#d1d5db' }} />
                ))}
              </div>
              <p className="text-gray-400" style={{ fontSize: '8px' }}>0:23</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* WhatsApp-style input bar */}
    <div className="px-2 py-2 bg-white border-t border-gray-100 shrink-0">
      <div className="flex items-center gap-1.5">
        {/* Attachment icon */}
        <button className="w-7 h-7 flex items-center justify-center text-gray-400 shrink-0">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/>
          </svg>
        </button>
        {/* Text input */}
        <div className="flex-1 bg-gray-100 rounded-full px-3 py-1.5">
          <p className="text-gray-400" style={{ fontSize: '10px' }}>Message</p>
        </div>
        {/* Camera */}
        <button className="w-7 h-7 flex items-center justify-center text-gray-400 shrink-0">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
            <circle cx="12" cy="13" r="4"/>
          </svg>
        </button>
        {/* Mic */}
        <button className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#5c0386' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1">
            <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/>
            <path d="M19 10v2a7 7 0 01-14 0v-2" fill="none" strokeWidth="2"/>
            <line x1="12" y1="19" x2="12" y2="23" strokeWidth="2"/>
            <line x1="8" y1="23" x2="16" y2="23" strokeWidth="2"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
);

// ── Main ──────────────────────────────────────────────────────────────────
export const ContentOSSection: React.FC = () => {
  const [activeNav, setActiveNav] = useState('dashboard');

  const screens: Record<string, React.ReactNode> = {
    dashboard: <DashboardScreen />,
    content:   <ContentScreen />,
    reports:   <ReportsScreen />,
    chat:      <ChatScreen />,
  };

  return (
    <section className="py-20 px-6 text-center" style={{ backgroundColor: '#5c0386' }}>
      <div className="max-w-2xl mx-auto">

        <Slide delay={0}>
          <span className="inline-block text-xs font-bold tracking-widest uppercase mb-5" style={{ color: '#47ff01', backgroundColor: 'rgba(255,255,255,0.1)', padding: '6px 18px', borderRadius: '999px', border: '1px solid rgba(71,255,1,0.2)' }}>
            Content Operating System
          </span>
        </Slide>

        <Slide delay={0.08} className="mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Powered by SleekaOS
          </h2>
        </Slide>

        <Slide delay={0.14} className="mb-16">
          <p className="text-white/70 text-lg leading-relaxed max-w-xl mx-auto">
            SleekaOS gives you complete visibility into your content, approvals, deliverables, performance tracking, and monthly reports from one central dashboard.
          </p>
        </Slide>

        {/* Phone mockup */}
        <Slide delay={0.2}>
          <div className="flex justify-center">
            <div
              className="relative overflow-hidden"
              style={{
                width: '260px',
                height: '520px',
                borderRadius: '3rem',
                border: '7px solid #ffffff',
                backgroundColor: '#1a1a2e',
                boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
              }}
            >
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
                <div className="w-16 h-4 rounded-b-xl" style={{ backgroundColor: '#1a1a2e' }} />
              </div>

              {/* Screen */}
              <div className="absolute inset-0 bg-gray-50 flex flex-col" style={{ borderRadius: '2.6rem' }}>
                {/* Status bar with logo */}
                <div className="flex items-center justify-between px-4 pt-6 pb-2 bg-white border-b border-gray-100 shrink-0">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <img src="/assets/favicon/favicon.png" alt="SleekaOS" style={{ width: '14px', height: '14px', objectFit: 'contain', borderRadius: '3px', display: 'block' }} />
                    <span style={{ color: '#5c0386', fontSize: '11px', fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1, display: 'block' }}>SleekaOS</span>
                  </div>
                  <span className="text-gray-400" style={{ fontSize: '10px' }}>9:41</span>
                </div>

                {/* Active screen */}
                <div className="flex-1 overflow-hidden bg-gray-50">
                  {screens[activeNav]}
                </div>

                {/* Bottom nav — WhatsApp style flat icons */}
                <div className="bg-white border-t border-gray-100 pt-1.5 pb-2 shrink-0">
                  <div className="flex items-center justify-around px-2">
                    {navItems.map(({ iconFile, label, id }) => {
                      const isActive = activeNav === id;
                      return (
                        <button
                          key={id}
                          onClick={() => setActiveNav(id)}
                          className="flex flex-col items-center gap-0.5 py-1"
                          style={{ flex: 1 }}
                        >
                          <img
                            src={`/assets/icons/sleeka-os/${iconFile}`}
                            alt={label}
                            className="w-5 h-5 object-contain"
                            style={{
                              filter: isActive
                                ? 'invert(11%) sepia(99%) saturate(7492%) hue-rotate(273deg) brightness(70%) contrast(114%)'
                                : 'invert(60%) sepia(5%) saturate(300%) hue-rotate(240deg) brightness(85%)',
                            }}
                          />
                          <span
                            style={{
                              fontSize: '9px',
                              fontWeight: 400,
                              color: isActive ? '#5c0386' : '#6b7280',
                            }}
                          >
                            {label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* Instruction */}
        <Slide delay={0.26} className="mt-5">
          <p className="text-white/40 text-xs">Tap the icons to explore the interface</p>
        </Slide>

      </div>
    </section>
  );
};

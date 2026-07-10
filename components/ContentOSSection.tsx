import React, { useState } from 'react';
import { Slide } from './PlugIntoSection';

const navItems = [
  { iconFile: 'dashboard.png', label: 'Dashboard', id: 'dashboard' },
  { iconFile: 'content.png',   label: 'Content',   id: 'content'   },
  { iconFile: 'reports.png',   label: 'Reports',   id: 'reports'   },
  { iconFile: 'chat.png',      label: 'Chat',      id: 'chat'      },
];

const DashboardScreen = () => (
  <div className="flex flex-col h-full">
    <div className="flex items-center justify-between px-4 pt-4 pb-3 bg-white border-b border-gray-100">
      <div>
        <p className="text-xs font-black" style={{ color: '#5c0386' }}>Good morning 👋</p>
        <p className="text-xs text-gray-400">TechNaija Solutions</p>
      </div>
      <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-black" style={{ backgroundColor: '#5c0386' }}>TN</div>
    </div>
    <div className="px-3 pt-3 grid grid-cols-2 gap-2 mb-3">
      {[
        { label: 'Active Clients', value: '4',     sub: '+25%',   color: '#5c0386' },
        { label: 'Leads',          value: '4',     sub: '+8%',    color: '#16a34a' },
        { label: 'Total Reach',    value: '13.8K', sub: 'Jun 25', color: '#7c3aed' },
        { label: 'Engagement',     value: '14.4%', sub: 'Above avg', color: '#d97706' },
      ].map(({ label, value, sub, color }) => (
        <div key={label} className="bg-gray-50 rounded-2xl p-3 border border-gray-100">
          <p className="text-sm font-black text-gray-800">{value}</p>
          <p className="text-xs text-gray-500 mt-0.5">{label}</p>
          <p className="text-xs font-semibold mt-0.5" style={{ color }}>{sub}</p>
        </div>
      ))}
    </div>
    <div className="px-3">
      <p className="text-xs font-bold text-gray-700 mb-2">Recent Activity</p>
      <div className="space-y-1.5">
        {[
          { title: 'Mama Cass Case Study', status: 'Live',      dot: '#16a34a' },
          { title: 'SME Cloud Tools post', status: 'Posted',    dot: '#5c0386' },
          { title: 'Product Squad reel',   status: 'In Review', dot: '#d97706' },
        ].map(({ title, status, dot }) => (
          <div key={title} className="flex items-center justify-between bg-white rounded-xl px-3 py-2 border border-gray-100">
            <p className="text-xs font-medium text-gray-700">{title}</p>
            <div className="flex items-center gap-1 shrink-0 ml-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: dot }} />
              <span className="text-xs font-semibold" style={{ color: dot }}>{status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ContentScreen = () => (
  <div className="flex flex-col h-full">
    <div className="px-4 pt-4 pb-2 bg-white border-b border-gray-100">
      <p className="text-xs font-black text-gray-800">Content Pipeline</p>
      <p className="text-xs text-gray-400 mb-2">TechNaija Solutions</p>
      <div className="flex gap-1.5">
        {['All', 'Live', 'Scheduled', 'Review'].map((t, i) => (
          <span key={t} className="text-xs px-2.5 py-1 rounded-full font-semibold" style={{ backgroundColor: i === 0 ? '#5c0386' : '#f3f4f6', color: i === 0 ? '#fff' : '#6b7280' }}>{t}</span>
        ))}
      </div>
    </div>
    <div className="px-3 pt-3 space-y-2">
      {[
        { id: 'SLE-001', title: 'Why SMEs Need Cloud Tools',  platform: 'LinkedIn',  status: 'Live',       color: '#16a34a' },
        { id: 'SLE-002', title: 'Meet the Team: Product Squad', platform: 'Instagram', status: 'Posted',     color: '#5c0386' },
        { id: 'SLE-003', title: 'Mama Cass Success Story',    platform: 'LinkedIn',  status: 'Scheduled',  color: '#d97706' },
        { id: 'SLE-004', title: '5 Signs You\'ve Outgrown Excel', platform: 'Instagram', status: 'In Review', color: '#7c3aed' },
      ].map(({ id, title, platform, status, color }) => (
        <div key={id} className="bg-white rounded-xl border border-gray-100 px-3 py-2.5">
          <div className="flex items-center justify-between mb-0.5">
            <span className="text-xs text-gray-400">{id}</span>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
              <span className="text-xs font-semibold" style={{ color }}>{status}</span>
            </div>
          </div>
          <p className="text-xs font-semibold text-gray-800 leading-tight">{title}</p>
          <span className="text-xs text-gray-400">{platform}</span>
        </div>
      ))}
    </div>
  </div>
);

const ReportsScreen = () => (
  <div className="flex flex-col h-full">
    <div className="px-4 pt-4 pb-3 bg-white border-b border-gray-100">
      <p className="text-xs font-black text-gray-800">Monthly Report</p>
      <p className="text-xs text-gray-400">Jun 2025 · TechNaija Solutions</p>
    </div>
    <div className="px-3 pt-3">
      <div className="rounded-2xl p-4 mb-3 text-white" style={{ backgroundColor: '#5c0386' }}>
        <p className="text-xs font-bold mb-1" style={{ color: '#47ff01' }}>Rating: Excellent</p>
        <p className="text-xs text-white/80 leading-relaxed">5 posts · 13,880 reach · 45 leads · 14.47% engagement</p>
      </div>
      <p className="text-xs font-bold text-gray-700 mb-2">Top Content</p>
      {[
        'Mama Cass Case Study — 6,120 reach',
        'Cloud Tools post — 4,820 reach',
        'Product Squad reel — 2,940 reach',
      ].map((item, i) => (
        <div key={item} className="flex items-center gap-2 mb-2">
          <span className="text-xs font-black w-5" style={{ color: '#5c0386' }}>#{i + 1}</span>
          <p className="text-xs text-gray-700">{item}</p>
        </div>
      ))}
    </div>
  </div>
);

const ChatScreen = () => (
  <div className="flex flex-col h-full">
    <div className="px-4 pt-4 pb-3 bg-white border-b border-gray-100">
      <p className="text-xs font-black text-gray-800">Team Chat</p>
      <p className="text-xs text-gray-400">TechNaija Solutions</p>
    </div>
    <div className="flex-1 px-3 pt-3 space-y-2 overflow-hidden">
      {/* PM message */}
      <div className="flex gap-2">
        <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5" style={{ backgroundColor: '#5c0386' }}>PM</div>
        <div className="bg-white rounded-2xl rounded-tl-none px-3 py-2 border border-gray-100 max-w-[75%]">
          <p className="text-xs font-semibold text-gray-500 mb-0.5">Project Manager</p>
          <p className="text-xs text-gray-700">Hey! Your June content calendar is ready for review. Check the pipeline tab.</p>
          <p className="text-xs text-gray-400 mt-1">9:32 AM</p>
        </div>
      </div>
      {/* Client reply */}
      <div className="flex gap-2 justify-end">
        <div className="rounded-2xl rounded-tr-none px-3 py-2 max-w-[75%]" style={{ backgroundColor: '#5c0386' }}>
          <p className="text-xs text-white/90">Looks great! Can we swap post 3 and 4?</p>
          <p className="text-xs text-white/50 mt-1">9:45 AM</p>
        </div>
        <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5" style={{ backgroundColor: '#47ff01' }}>
          <span style={{ color: '#000' }}>TN</span>
        </div>
      </div>
      {/* PM response */}
      <div className="flex gap-2">
        <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5" style={{ backgroundColor: '#5c0386' }}>PM</div>
        <div className="bg-white rounded-2xl rounded-tl-none px-3 py-2 border border-gray-100 max-w-[75%]">
          <p className="text-xs text-gray-700">Done! Updated the order. Designer is on the graphics now.</p>
          <p className="text-xs text-gray-400 mt-1">9:47 AM</p>
        </div>
      </div>
      {/* Status */}
      <div className="flex gap-2 justify-end">
        <div className="rounded-2xl rounded-tr-none px-3 py-2 max-w-[75%]" style={{ backgroundColor: '#5c0386' }}>
          <p className="text-xs text-white/90">Perfect. Thanks!</p>
          <p className="text-xs text-white/50 mt-1">9:48 AM</p>
        </div>
        <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5" style={{ backgroundColor: '#47ff01' }}>
          <span style={{ color: '#000' }}>TN</span>
        </div>
      </div>
    </div>
    {/* Input bar */}
    <div className="px-3 py-2 border-t border-gray-100 bg-white">
      <div className="flex items-center gap-2 bg-gray-50 rounded-full px-3 py-2 border border-gray-100">
        <p className="text-xs text-gray-400 flex-1">Type a message...</p>
        <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#5c0386' }}>
          <span className="text-white" style={{ fontSize: '10px' }}>↑</span>
        </div>
      </div>
    </div>
  </div>
);

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
                border: '6px solid #ffffff',
                backgroundColor: '#1a1a2e',
                boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
              }}
            >
              {/* Front camera notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 pt-1">
                <div className="w-14 h-4 rounded-b-xl" style={{ backgroundColor: '#1a1a2e' }} />
              </div>

              {/* Screen */}
              <div className="absolute inset-0 bg-gray-50 flex flex-col" style={{ borderRadius: '2.6rem' }}>
                {/* Status bar */}
                <div className="flex items-center justify-between px-4 pt-7 pb-2 bg-white border-b border-gray-100 shrink-0">
                  <div className="flex items-center gap-1.5">
                    <img src="/assets/favicon/favicon.png" alt="SleekaOS" className="w-4 h-4 object-contain rounded" />
                    <span className="text-xs font-black" style={{ color: '#5c0386' }}>SleekaOS</span>
                  </div>
                  <span className="text-xs text-gray-400">9:41</span>
                </div>

                {/* Active screen */}
                <div className="flex-1 overflow-hidden bg-gray-50">
                  {screens[activeNav]}
                </div>

                {/* Bottom nav */}
                <div className="bg-white border-t border-gray-100 pt-2 pb-3 shrink-0">
                  <div className="flex items-center justify-around px-4">
                    {navItems.map(({ iconFile, label, id }) => {
                      const isActive = activeNav === id;
                      return (
                        <button
                          key={id}
                          onClick={() => setActiveNav(id)}
                          className="flex flex-col items-center gap-0.5 py-1 min-w-0"
                          style={{ flex: 1 }}
                        >
                          <img
                            src={`/assets/icons/sleeka-os/${iconFile}`}
                            alt={label}
                            className="w-5 h-5 object-contain"
                            style={{
                              filter: isActive
                                ? 'invert(11%) sepia(99%) saturate(7492%) hue-rotate(273deg) brightness(70%) contrast(114%)'
                                : 'invert(50%) sepia(10%) saturate(500%) hue-rotate(240deg) brightness(80%)',
                            }}
                          />
                          <span
                            className="text-center font-semibold leading-tight"
                            style={{ fontSize: '9px', color: '#000' }}
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

        {/* Instruction text */}
        <Slide delay={0.26} className="mt-6">
          <p className="text-white/40 text-xs">
            Tap the icons to explore the interface
          </p>
        </Slide>

      </div>
    </section>
  );
};

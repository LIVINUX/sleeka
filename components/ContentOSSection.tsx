import React, { useState } from 'react';
import { Slide } from './PlugIntoSection';

const navItems = [
  { icon: '📊', label: 'Dashboard', id: 'dashboard' },
  { icon: '📝', label: 'Content', id: 'content' },
  { icon: '📈', label: 'Reports', id: 'reports' },
  { icon: '✉️', label: 'Messages', id: 'messages' },
];

const DashboardScreen = () => (
  <div className="flex flex-col h-full">
    {/* Top bar */}
    <div className="flex items-center justify-between px-4 pt-4 pb-3">
      <div>
        <p className="text-xs font-black text-gray-800">Good morning 👋</p>
        <p className="text-xs text-gray-400">TechNaija Solutions</p>
      </div>
      <div className="w-8 h-8 rounded-full bg-[#5c0386] flex items-center justify-center text-white text-xs font-black">TN</div>
    </div>

    {/* Metric cards */}
    <div className="px-3 grid grid-cols-2 gap-2 mb-3">
      {[
        { label: 'Active Clients', value: '4', sub: '+25% this month', color: '#5c0386' },
        { label: 'Leads Pipeline', value: '4', sub: '+8% this month', color: '#16a34a' },
        { label: 'Total Reach', value: '13.8K', sub: 'Jun 2025', color: '#7c3aed' },
        { label: 'Engagement', value: '14.4%', sub: 'Above avg', color: '#d97706' },
      ].map(({ label, value, sub, color }) => (
        <div key={label} className="bg-gray-50 rounded-2xl p-3 border border-gray-100">
          <div className="w-6 h-6 rounded-lg mb-2" style={{ backgroundColor: `${color}20` }}>
            <div className="w-3 h-3 rounded-sm m-1.5" style={{ backgroundColor: color }} />
          </div>
          <p className="text-sm font-black text-gray-800">{value}</p>
          <p className="text-xs text-gray-500 mt-0.5">{label}</p>
          <p className="text-xs mt-0.5" style={{ color }}>{sub}</p>
        </div>
      ))}
    </div>

    {/* Recent activity */}
    <div className="px-3 flex-1">
      <p className="text-xs font-bold text-gray-700 mb-2">Recent Activity</p>
      <div className="space-y-1.5">
        {[
          { title: 'Mama Cass Case Study', status: 'Live', dot: '#16a34a' },
          { title: 'SME Cloud Tools post', status: 'Posted', dot: '#5c0386' },
          { title: 'Product Squad reel', status: 'In Review', dot: '#d97706' },
        ].map(({ title, status, dot }) => (
          <div key={title} className="flex items-center justify-between bg-white rounded-xl px-3 py-2 border border-gray-100">
            <p className="text-xs font-medium text-gray-700 leading-tight">{title}</p>
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
    <div className="px-4 pt-4 pb-2">
      <p className="text-xs font-black text-gray-800">Content Pipeline</p>
      <p className="text-xs text-gray-400 mb-3">TechNaija Solutions</p>
      <div className="flex gap-1.5 mb-3">
        {['All', 'Live', 'Scheduled', 'Review'].map((t, i) => (
          <span key={t} className="text-xs px-2.5 py-1 rounded-full font-semibold" style={{ backgroundColor: i === 0 ? '#5c0386' : '#f3f4f6', color: i === 0 ? '#fff' : '#6b7280' }}>{t}</span>
        ))}
      </div>
    </div>
    <div className="px-3 flex-1 space-y-2 overflow-hidden">
      {[
        { id: 'SLE-001', title: 'Why SMEs Need Cloud Tools', platform: 'LinkedIn', status: 'Live', color: '#16a34a' },
        { id: 'SLE-002', title: 'Meet the Team: Product Squad', platform: 'Instagram', status: 'Posted', color: '#5c0386' },
        { id: 'SLE-003', title: 'Mama Cass Success Story', platform: 'LinkedIn', status: 'Scheduled', color: '#d97706' },
        { id: 'SLE-004', title: '5 Signs You\'ve Outgrown Excel', platform: 'Instagram', status: 'In Review', color: '#7c3aed' },
      ].map(({ id, title, platform, status, color }) => (
        <div key={id} className="bg-white rounded-xl border border-gray-100 px-3 py-2.5">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-gray-400">{id}</span>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
              <span className="text-xs font-semibold" style={{ color }}>{status}</span>
            </div>
          </div>
          <p className="text-xs font-semibold text-gray-800 leading-tight">{title}</p>
          <span className="text-xs text-gray-400 mt-0.5 block">{platform}</span>
        </div>
      ))}
    </div>
  </div>
);

const ReportsScreen = () => (
  <div className="flex flex-col h-full">
    <div className="px-4 pt-4 pb-3">
      <p className="text-xs font-black text-gray-800">Monthly Report</p>
      <p className="text-xs text-gray-400">Jun 2025 · TechNaija Solutions</p>
    </div>
    <div className="px-3 flex-1">
      <div className="bg-[#5c0386] rounded-2xl p-4 mb-3 text-white">
        <p className="text-xs font-bold mb-1" style={{ color: '#47ff01' }}>Performance Rating: Excellent</p>
        <p className="text-xs text-white/80 leading-relaxed">5 posts · 13,880 reach · 45 leads · 14.47% engagement</p>
      </div>
      <p className="text-xs font-bold text-gray-700 mb-2">Top Content</p>
      {['Mama Cass Case Study — 6,120 reach', 'Cloud Tools post — 4,820 reach', 'Product Squad reel — 2,940 reach'].map((item, i) => (
        <div key={item} className="flex items-center gap-2 mb-2">
          <span className="text-xs font-black text-[#5c0386] w-5">#{i + 1}</span>
          <p className="text-xs text-gray-700">{item}</p>
        </div>
      ))}
    </div>
  </div>
);

const MessagesScreen = () => (
  <div className="flex flex-col h-full">
    <div className="px-4 pt-4 pb-3">
      <p className="text-xs font-black text-gray-800">Messages</p>
      <p className="text-xs text-gray-400">Team communication</p>
    </div>
    <div className="px-3 flex-1 flex flex-col items-center justify-center gap-3">
      <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-2xl">✉️</div>
      <p className="text-sm font-bold text-gray-700">Coming Soon</p>
      <p className="text-xs text-gray-400 text-center">Full messaging module launching in Phase 3</p>
      <span className="text-xs bg-orange-100 text-orange-600 font-bold px-3 py-1 rounded-full">Phase 3</span>
    </div>
  </div>
);

export const ContentOSSection: React.FC = () => {
  const [activeNav, setActiveNav] = useState('dashboard');

  const screens: Record<string, React.ReactNode> = {
    dashboard: <DashboardScreen />,
    content: <ContentScreen />,
    reports: <ReportsScreen />,
    messages: <MessagesScreen />,
  };

  return (
    <section className="py-20 px-6 text-center" style={{ backgroundColor: '#5c0386' }}>
      <div className="max-w-2xl mx-auto">

        {/* Label */}
        <Slide delay={0}>
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-5"
            style={{ color: '#47ff01', backgroundColor: 'rgba(255,255,255,0.1)', padding: '6px 18px', borderRadius: '999px', border: '1px solid rgba(71,255,1,0.2)' }}
          >
            Content Operating System
          </span>
        </Slide>

        {/* Headline */}
        <Slide delay={0.08} className="mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Powered by SleekaOS
          </h2>
        </Slide>

        {/* Subtext */}
        <Slide delay={0.14} className="mb-16">
          <p className="text-white/70 text-lg leading-relaxed max-w-xl mx-auto">
            SleekaOS gives you complete visibility into your content, approvals, deliverables, performance tracking, and monthly reports from one central dashboard.
          </p>
        </Slide>

        {/* Phone mockup */}
        <Slide delay={0.2}>
          <div className="flex justify-center">
            {/* Phone outer frame */}
            <div
              className="relative rounded-[3rem] overflow-hidden shadow-2xl"
              style={{
                width: '280px',
                height: '560px',
                backgroundColor: '#1a1a2e',
                border: '8px solid #2d2d4e',
                boxShadow: '0 40px 100px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.05)',
              }}
            >
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#1a1a2e] rounded-b-2xl z-20" />

              {/* Screen */}
              <div className="absolute inset-0 bg-gray-50 overflow-hidden flex flex-col" style={{ borderRadius: '2.5rem' }}>
                {/* Status bar */}
                <div className="flex items-center justify-between px-5 pt-8 pb-1 bg-white border-b border-gray-100 shrink-0">
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-md bg-[#5c0386] flex items-center justify-center">
                      <span className="text-white font-black" style={{ fontSize: '8px' }}>S</span>
                    </div>
                    <span className="text-xs font-black text-[#5c0386]">SLEEKA OS</span>
                  </div>
                  <span className="text-xs text-gray-400">9:41</span>
                </div>

                {/* Screen content */}
                <div className="flex-1 overflow-hidden bg-gray-50">
                  {screens[activeNav]}
                </div>

                {/* Bottom nav */}
                <div className="bg-white border-t border-gray-100 px-2 py-2 shrink-0">
                  <div className="flex items-center justify-around">
                    {navItems.map(({ icon, label, id }) => (
                      <button
                        key={id}
                        onClick={() => setActiveNav(id)}
                        className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all"
                        style={{ backgroundColor: activeNav === id ? '#5c038615' : 'transparent' }}
                      >
                        <span style={{ fontSize: '18px', filter: activeNav === id ? 'none' : 'grayscale(1) opacity(0.5)' }}>{icon}</span>
                        <span className="text-xs font-semibold" style={{ color: activeNav === id ? '#5c0386' : '#9ca3af', fontSize: '9px' }}>{label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>

      </div>
    </section>
  );
};

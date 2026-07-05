import React, { useEffect, useRef, useState } from 'react';

export const ContentOSSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const tabs = ['Dashboard', 'My Content', 'Monthly Report'];

  const dashboardUI = (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs font-bold text-gray-800">Good morning, TechNaija 👋</p>
          <p className="text-xs text-gray-400">Here is what is happening across Sleeka today.</p>
        </div>
        <div className="w-7 h-7 rounded-full bg-[#5c0386] flex items-center justify-center text-white text-xs font-bold">TN</div>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {[
          { label: 'Active Clients', value: '4', change: '+25%', up: true },
          { label: 'Monthly Revenue', value: '₦1.7M', change: '+12%', up: true },
          { label: 'Total Reach', value: '13,880', change: '-64%', up: false },
          { label: 'Leads in Pipeline', value: '4', change: '+8%', up: true },
        ].map(({ label, value, change, up }) => (
          <div key={label} className="bg-gray-50 rounded-xl p-3 border border-gray-100">
            <p className="text-xs text-gray-500 mb-1">{label}</p>
            <p className="text-sm font-black text-gray-800">{value}</p>
            <p className={`text-xs font-semibold mt-1 ${up ? 'text-green-600' : 'text-red-500'}`}>{change} vs last month</p>
          </div>
        ))}
      </div>
      <p className="text-xs font-bold text-gray-700 mb-2">Client Portfolio</p>
      <div className="space-y-1.5">
        {[
          { name: 'TechNaija Solutions', pkg: 'Growth Package', amount: '₦450K', color: '#5c0386' },
          { name: 'Afrobeats Hub', pkg: 'Starter Package', amount: '₦280K', color: '#7c3aed' },
          { name: 'Lagos Gourmet', pkg: 'Premium Package', amount: '₦600K', color: '#16a34a' },
        ].map(({ name, pkg, amount, color }) => (
          <div key={name} className="flex items-center justify-between bg-white rounded-lg px-3 py-2 border border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: color }}>{name[0]}</div>
              <div>
                <p className="text-xs font-semibold text-gray-800">{name}</p>
                <p className="text-xs text-gray-400">{pkg}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold text-gray-700">{amount}</p>
              <span className="text-xs text-green-600 font-semibold">Active</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const contentUI = (
    <div className="w-full">
      <p className="text-sm font-bold text-gray-800 mb-1">Content Operating System</p>
      <p className="text-xs text-gray-400 mb-3">Manage, track and optimise content for your client</p>
      <div className="flex gap-1 mb-3 flex-wrap">
        {['Content Pipeline', 'Content Bank', 'Client View'].map((t, i) => (
          <span key={t} className="text-xs px-2 py-1 rounded-lg" style={{ backgroundColor: i === 2 ? '#5c0386' : '#f3f4f6', color: i === 2 ? 'white' : '#374151' }}>{t}</span>
        ))}
      </div>
      <div className="space-y-2">
        {[
          { id: 'SLE-001', platform: 'LinkedIn', title: 'Why African SMEs Need Cloud Tools', status: 'Posted', statusColor: '#16a34a', reach: '4,820 reach · 14 leads' },
          { id: 'SLE-002', platform: 'Instagram', title: 'Meet the Team: Product Squad', status: 'Posted', statusColor: '#16a34a', reach: '2,940 reach · 3 leads' },
          { id: 'SLE-003', platform: 'LinkedIn', title: 'Client Success Story: Mama Cass', status: 'Live', statusColor: '#7c3aed', reach: '6,120 reach · 28 leads' },
          { id: 'SLE-004', platform: 'Instagram', title: '5 Signs Your Business Has Outgrown Excel', status: 'Scheduled', statusColor: '#d97706', reach: '' },
        ].map(({ id, platform, title, status, statusColor, reach }) => (
          <div key={id} className="bg-white rounded-xl border border-gray-100 p-3">
            <div className="flex items-center justify-between mb-1">
              <div className="flex gap-1 items-center">
                <span className="text-xs text-gray-400">{id}</span>
                <span className="text-xs px-1.5 py-0.5 rounded-md font-semibold" style={{ backgroundColor: platform === 'LinkedIn' ? '#e8f0fe' : '#fce7f3', color: platform === 'LinkedIn' ? '#1d4ed8' : '#be185d' }}>{platform}</span>
              </div>
              <span className="text-xs font-semibold" style={{ color: statusColor }}>● {status}</span>
            </div>
            <p className="text-xs font-semibold text-gray-800 leading-tight">{title}</p>
            {reach && <p className="text-xs text-green-600 mt-1">{reach}</p>}
          </div>
        ))}
      </div>
    </div>
  );

  const reportUI = (
    <div className="w-full">
      <p className="text-sm font-bold text-gray-800 mb-1">Monthly Performance Report</p>
      <p className="text-xs text-gray-400 mb-4">Jun 2025 · Prepared by Sleeka Creative</p>
      <div className="bg-gray-50 rounded-xl p-3 mb-3 border border-gray-100">
        <p className="text-xs font-bold text-gray-700 mb-1">Executive Summary</p>
        <p className="text-xs text-gray-600 leading-relaxed">In Jun 2025, we published <strong>5 pieces of content</strong> reaching <strong>13,880 accounts</strong>, generating <strong>45 qualified leads</strong> at a 14.47% engagement rate.</p>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[{ label: 'Total Reach', value: '13,880' }, { label: 'Leads', value: '45' }, { label: 'Engagement', value: '14.47%' }].map(({ label, value }) => (
          <div key={label} className="bg-white rounded-xl p-2 border border-gray-100 text-center">
            <p className="text-sm font-black text-[#5c0386]">{value}</p>
            <p className="text-xs text-gray-400">{label}</p>
          </div>
        ))}
      </div>
      <p className="text-xs font-bold text-gray-700 mb-2">Top Performing Content</p>
      {['Client Success Story: Mama Cass scaled 3x', 'Why African SMEs Need Cloud Tools', 'Meet the Team: Product Squad'].map((title, i) => (
        <div key={title} className="flex items-center gap-2 mb-1.5">
          <span className="text-xs font-black text-[#5c0386] w-4">#{i + 1}</span>
          <p className="text-xs text-gray-700 leading-tight">{title}</p>
        </div>
      ))}
    </div>
  );

  const uiContent = [dashboardUI, contentUI, reportUI];

  return (
    <section ref={ref} className="py-20 px-6 relative overflow-hidden" style={{ backgroundColor: '#5c0386' }}>
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 transition-all duration-700" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-40px)' }}>
            <span className="inline-block text-xs font-bold tracking-widest uppercase mb-5" style={{ color: '#47ff01', backgroundColor: 'rgba(255,255,255,0.1)', padding: '6px 18px', borderRadius: '999px', border: '1px solid rgba(71,255,1,0.2)' }}>
              Content Operating System
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Powered by SleekaOS</h2>
            <p className="text-white/75 text-lg leading-relaxed mb-4">
              SleekaOS gives you complete visibility into your content, approvals, deliverables, performance tracking, and monthly reports from one central dashboard.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              Every task moves through a structured workflow, allowing you to track progress in real time while keeping your team aligned and your marketing execution organized.
            </p>
            <div className="flex gap-2 flex-wrap">
              {tabs.map((tab, i) => (
                <button key={tab} onClick={() => setActiveTab(i)} className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200" style={{ backgroundColor: activeTab === i ? '#47ff01' : 'rgba(255,255,255,0.1)', color: activeTab === i ? '#000' : 'rgba(255,255,255,0.7)' }}>
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 transition-all duration-700 w-full" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(40px)', transitionDelay: '0.2s' }}>
            <div className="rounded-[1.5rem] overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100" style={{ backgroundColor: '#1a1a2e' }}>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 mx-3 bg-white/10 rounded-lg px-3 py-1 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#5c0386]"></div>
                  <span className="text-white/60 text-xs">cos.sleekahq.com</span>
                </div>
              </div>
              <div className="flex bg-white" style={{ minHeight: '420px' }}>
                <div className="w-32 border-r border-gray-100 p-3 flex flex-col gap-1" style={{ backgroundColor: '#f8f9ff' }}>
                  <div className="flex items-center gap-1.5 mb-3">
                    <div className="w-5 h-5 rounded-md bg-[#5c0386] flex items-center justify-center"><span className="text-white text-xs font-black">S</span></div>
                    <span className="text-xs font-black text-[#5c0386]">SLEEKA OS</span>
                  </div>
                  <p className="text-gray-400 mb-1 uppercase tracking-wider" style={{ fontSize: '9px' }}>Client</p>
                  {tabs.map((tab, i) => (
                    <button key={tab} onClick={() => setActiveTab(i)} className="w-full text-left px-2 py-1.5 rounded-lg text-xs font-medium transition-all" style={{ backgroundColor: activeTab === i ? '#5c0386' : 'transparent', color: activeTab === i ? 'white' : '#6b7280' }}>
                      {tab === 'Dashboard' ? '📊 Dashboard' : tab === 'My Content' ? '📝 My Content' : '📈 Monthly Report'}
                    </button>
                  ))}
                  <div className="mt-auto">
                    <button className="w-full text-left px-2 py-1.5 rounded-lg text-xs text-gray-400">✉️ Messages <span className="bg-orange-400 text-white rounded px-1" style={{ fontSize: '9px' }}>Soon</span></button>
                  </div>
                </div>
                <div className="flex-1 p-4 overflow-hidden">{uiContent[activeTab]}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

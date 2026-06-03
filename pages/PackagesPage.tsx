import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { PagePreloader } from '../components/PagePreloader';
import { Footer } from '../components/Footer';

type ActivePackage = 'growth' | 'authority' | null;

// ─── SHARED: Exact Hero Button ─────────────────────────────────────────────
const HeroButton: React.FC = () => (
  <a
    href="https://calendar.app.google/2nWbeLXuC52dvZtq5"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-bold text-base sm:text-lg transition-all inline-flex items-center gap-2 md:gap-3 group shadow-xl hover:shadow-2xl hover:scale-105 duration-300 whitespace-nowrap"
    style={{ backgroundColor: '#47ff01', color: '#000' }}
  >
    Book a Discovery Call
    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
  </a>
);

// ─── SHARED: Back to Home ──────────────────────────────────────────────────
const BackToHome: React.FC<{ onNavigateHome?: () => void }> = ({ onNavigateHome }) => (
  <button
    onClick={onNavigateHome}
    className="mt-10 flex items-center gap-2 text-gray-400 hover:text-[#5c0386] transition-colors text-sm font-medium"
  >
    <ArrowRight className="w-4 h-4 rotate-180" />
    Back to home
  </button>
);

// ─── SHARED: Minimal Header ────────────────────────────────────────────────
const MinimalHeader: React.FC<{ onNavigateHome?: () => void }> = ({ onNavigateHome }) => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-[#5c0386] px-6 py-4 flex items-center justify-between shadow-lg">
    <button onClick={onNavigateHome} className="flex items-center">
      <img src="/assets/Logo white.png" alt="Sleeka" className="h-8 w-auto" />
    </button>
    <a
      href="https://calendar.app.google/2nWbeLXuC52dvZtq5"
      target="_blank"
      rel="noopener noreferrer"
      className="px-5 py-2 rounded-full font-bold text-sm transition-all hover:scale-105 duration-300 whitespace-nowrap"
      style={{ backgroundColor: '#47ff01', color: '#000' }}
    >
      Book a Call
    </a>
  </header>
);

// ─── SHARED: Trust Logos — two layout versions ────────────────────────────
// Change trustLayout below: 'grid' = 2x2, 'row' = single row standalone
const trustLayout: 'grid' | 'row' = 'grid';

const logos = [
  { file: '1.png', name: 'Bluechip', hGrid: 80, hRow: 70 },
  { file: '3.png', name: 'Ems',      hGrid: 72, hRow: 62 },
  { file: '4.png', name: 'PBN',      hGrid: 72, hRow: 62 },
  { file: '5.png', name: 'Felicia',  hGrid: 48, hRow: 40 },
];

const TrustLogos: React.FC = () => {
  if (trustLayout === 'grid') {
    return (
      <div className="grid grid-cols-2 gap-6 max-w-xs mx-auto">
        {logos.map(({ file, name, hGrid }) => (
          <div key={name} className="flex items-center justify-center p-4">
            <img
              src={`/assets/Client logos/${file}`}
              alt={name}
              style={{ height: `${hGrid}px` }}
              className="w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="flex flex-wrap items-center justify-center gap-10">
      {logos.map(({ file, name, hRow }) => (
        <img
          key={name}
          src={`/assets/Client logos/${file}`}
          alt={name}
          style={{ height: `${hRow}px` }}
          className="w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        />
      ))}
    </div>
  );
};

// ─── SHARED: Package Accordion (same as CI page) ──────────────────────────
const PackageAccordion: React.FC<{
  active: ActivePackage;
  onHover: (p: 'growth' | 'authority') => void;
  onClick: (p: 'growth' | 'authority') => void;
}> = ({ active, onHover, onClick }) => (
  <div>
    <style>{`
      .pkg-panel { overflow: hidden; transition: max-height 0.5s ease-in-out, opacity 0.35s ease-in-out; }
      .pkg-panel.open   { max-height: 2400px; opacity: 1; }
      .pkg-panel.closed { max-height: 0; opacity: 0; }
    `}</style>

    {/* Growth */}
    <div className="mb-4">
      <button
        onClick={() => onClick('growth')}
        onMouseEnter={() => onHover('growth')}
        className={`w-full text-left px-6 md:px-8 py-4 md:py-5 rounded-full font-bold text-base md:text-xl transition-all duration-300 flex items-center justify-between gap-3 ${
          active === 'growth'
            ? 'bg-[#5c0386] text-white shadow-xl shadow-purple-500/30 scale-[1.01]'
            : 'bg-[#5c0386]/10 text-[#5c0386] hover:bg-[#5c0386] hover:text-white hover:scale-[1.01]'
        }`}
      >
        <span>Growth Infrastructure</span>
        {active === 'growth' ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
      </button>
      <div className={`pkg-panel ${active === 'growth' ? 'open' : 'closed'}`}>
        <div className="bg-[#5c0386] rounded-[2rem] p-6 md:p-10 text-white mt-3">
          <p className="text-[#47ff01] text-xl md:text-3xl font-black mb-1">₦300,000 / Month</p>
          <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
            For growing businesses that need structured creative execution to maintain visibility, support marketing activities, and build consistent brand presence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8">
            {[
              { label: 'What This Package Supports', items: ['Consistent brand visibility', 'Professional brand communication', 'Ongoing creative execution'] },
              { label: 'Creative Infrastructure Includes', items: ['Brand graphics and marketing visuals', 'Short-form video editing', 'Campaign and promotional creatives', 'Motion graphics and visual storytelling assets'] },
              { label: 'Strategy & Planning', items: ['Structured content calendar', 'Creative direction aligned with business goals', 'Organized campaign planning and execution'] },
              { label: 'Creative Capacity', items: ['6 creative requests per month', '1 active task at a time', 'Additional requests managed through a structured queue'] },
              { label: 'Typical Delivery Timeline', items: ['Graphic design: 24-48 hours', 'Video editing: 48-72 hours', 'Motion graphics / animation: 3-5 working days'] },
              { label: 'Coordination & Reporting', items: ['Dedicated Project Manager', 'Monthly performance reporting', 'Organized workflow and task coordination'] },
            ].map(({ label, items }) => (
              <div key={label}>
                <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-2">{label}</p>
                <ul className="space-y-1 text-sm text-white/80">{items.map(i => <li key={i}>• {i}</li>)}</ul>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-white/10 rounded-2xl p-4 border border-white/20">
            <p className="text-white/90 text-sm">
              <span className="text-[#47ff01] font-bold">Best suited for: </span>
              Growing businesses that need consistent creative execution without building an expensive in-house creative team.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Authority */}
    <div className="mb-4">
      <button
        onClick={() => onClick('authority')}
        onMouseEnter={() => onHover('authority')}
        className={`w-full text-left px-6 md:px-8 py-4 md:py-5 rounded-full font-bold text-base md:text-xl transition-all duration-300 flex items-center justify-between gap-3 ${
          active === 'authority'
            ? 'bg-[#47ff01] text-black shadow-xl shadow-green-400/30 scale-[1.01]'
            : 'bg-[#47ff01]/20 text-gray-800 hover:bg-[#47ff01] hover:text-black hover:scale-[1.01]'
        }`}
      >
        <span>Authority Infrastructure</span>
        {active === 'authority' ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
      </button>
      <div className={`pkg-panel ${active === 'authority' ? 'open' : 'closed'}`}>
        <div className="bg-[#5c0386] rounded-[2rem] p-6 md:p-10 text-white mt-3">
          <p className="text-[#47ff01] text-xl md:text-3xl font-black mb-1">₦500,000 / Month</p>
          <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
            For brands focused on scaling visibility, building authority, and executing marketing at a higher level with deeper strategic and creative support.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8">
            {[
              { label: 'What This Package Supports', items: ['Stronger brand authority and positioning', 'Consistent multi-platform visibility', 'Higher-quality marketing execution', 'Lead generation', 'Scalable content operations'] },
              { label: 'Creative Infrastructure Includes', items: ['Advanced brand and campaign visuals', 'High-volume short-form video editing', 'Motion graphics and animation support', 'Strategic content creatives for marketing campaigns', 'Visual storytelling assets across platforms'] },
              { label: 'Strategy & Planning', items: ['Content strategy and positioning support', 'Structured monthly content planning', 'Campaign direction aligned with growth goals', 'Marketing performance review and optimization'] },
              { label: 'Creative Capacity', items: ['12 creative requests per month', '2 active tasks at a time', 'Priority workflow management'] },
              { label: 'Typical Delivery Timeline', items: ['Graphic design: 24-48 hours', 'Video editing: 24-72 hours', 'Motion graphics / animation: 2-5 working days'] },
              { label: 'Coordination & Reporting', items: ['Dedicated Project Manager', 'Priority communication and coordination', 'Monthly strategy and performance review', 'Organized workflow and approval systems'] },
            ].map(({ label, items }) => (
              <div key={label}>
                <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-2">{label}</p>
                <ul className="space-y-1 text-sm text-white/80">{items.map(i => <li key={i}>• {i}</li>)}</ul>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-white/10 rounded-2xl p-4 border border-white/20">
            <p className="text-white/90 text-sm">
              <span className="text-[#47ff01] font-bold">Best suited for: </span>
              Businesses ready to scale marketing with a dedicated creative infrastructure that supports authority, growth, and long-term brand visibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ─── SHARED: Final CTA Block ───────────────────────────────────────────────
const FinalCTA: React.FC<{ onNavigateHome?: () => void; headlineA?: boolean }> = ({ onNavigateHome, headlineA }) => (
  <section className="py-16 px-6">
    <div className="max-w-3xl mx-auto">
      <div className="rounded-[2rem] p-8 md:p-14 flex flex-col items-center text-center" style={{ background: '#e6d5f7' }}>
        <h2 className="font-black text-[#5c0386] leading-tight mb-4" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.6rem)' }}>
          {headlineA
            ? 'The gap between where you are and where you want to be is execution.'
            : 'Let us talk about what consistent creative execution looks like for your business.'}
        </h2>
        <p className="text-gray-600 mb-3 max-w-sm leading-relaxed">
          {headlineA
            ? 'One call. Thirty minutes. We will show you exactly how we would build your system and what results to expect.'
            : 'Twenty minutes. No pressure. Just clarity on whether Sleeka is the right fit and what results you can realistically expect.'}
        </p>
        <p className="text-gray-400 text-sm mb-8 max-w-xs">
          Not ready yet? The call costs nothing. Waiting costs you visibility.
        </p>
        <HeroButton />
      </div>
      <div className="flex justify-center">
        <BackToHome onNavigateHome={onNavigateHome} />
      </div>
    </div>
  </section>
);

// ══════════════════════════════════════════════════════════════════════════════
// VERSION A — Contrast-based. Cost of inaction architecture.
// ══════════════════════════════════════════════════════════════════════════════
const VersionA: React.FC<{
  active: ActivePackage;
  onHover: (p: 'growth' | 'authority') => void;
  onClick: (p: 'growth' | 'authority') => void;
  onNavigateHome?: () => void;
}> = ({ active, onHover, onClick, onNavigateHome }) => (
  <div className="min-h-screen bg-white">
    <MinimalHeader onNavigateHome={onNavigateHome} />

    {/* Hero */}
    <section className="pt-28 pb-20 px-6 text-center" style={{ backgroundColor: '#5c0386' }}>
      <p className="text-[#47ff01] text-xs font-bold uppercase tracking-widest mb-3">For businesses serious about growth</p>
      <h1 className="font-black text-white px-2" style={{ fontSize: 'clamp(2.4rem, 8vw, 6rem)', letterSpacing: '-0.02em', lineHeight: 1.05 }}>
        You are already spending on content.<br />
        <span style={{ color: '#47ff01', display: 'block', marginTop: '0.4em' }}>Is it working?</span>
      </h1>
      <p className="text-white/70 text-lg max-w-lg mx-auto leading-relaxed mb-10">
        Most businesses create content. Few have a system behind it. Sleeka builds the system.
      </p>
      <div className="flex justify-center">
        <HeroButton />
      </div>
    </section>

    {/* Cost of inconsistent marketing */}
    <section className="py-16 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 text-center">What inconsistent marketing actually costs you</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[
            { cost: 'Visibility', pain: 'Competitors stay top of mind. You do not.', icon: 'visibility.png' },
            { cost: 'Leads', pain: 'Content goes out. Enquiries do not come in.', icon: 'leads.png' },
            { cost: 'Revenue', pain: 'Working hard but growth stays inconsistent.', icon: 'revenue.png' },
          ].map(({ cost, pain, icon }) => (
            <div key={cost} className="p-5 rounded-2xl border border-gray-100 bg-gray-50 text-center">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#47ff01' }}>
                <img src={`/assets/icons/${icon}`} alt={cost} className="w-5 h-5 object-contain" />
              </div>
              <p className="font-black text-[#5c0386] text-lg mb-2">Lost {cost}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{pain}</p>
            </div>
          ))}
        </div>

        {/* Solution block */}
        <div className="rounded-[2rem] p-8 text-white text-center" style={{ backgroundColor: '#5c0386' }}>
          <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-3">The Sleeka difference</p>
          <p className="text-xl md:text-2xl font-bold leading-snug mb-4">
            A dedicated creative team. Strategy, Design, Video, and Execution. Structured as a monthly system that builds and compounds over time.
          </p>
          <p className="text-white/60 text-sm">No freelancer chaos. No in-house overhead. No agency delays.</p>
        </div>
      </div>
    </section>

    {/* What every plan includes */}
    <section className="pb-14 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest text-[#5c0386] mb-6 text-center">Every plan includes</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            'Dedicated Project Manager',
            'Monthly content strategy and execution',
            'Brand graphics and campaign visuals',
            'Short-form video editing',
            'Motion graphics and animation',
            'Monthly performance reporting',
            'Structured creative request system',
            'Organized workflow and task coordination',
          ].map(item => (
            <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
              <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#47ff01' }}>
                <Check className="w-3 h-3 text-black" strokeWidth={3} />
              </div>
              <p className="text-gray-700 text-sm font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Trust logos */}
    <section className="pb-10 px-6 bg-white">
      <div className="max-w-2xl mx-auto p-8 rounded-2xl text-center" style={{ backgroundColor: '#47ff01' }}>
        <p className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-6">Brands already running on our system</p>
        <TrustLogos />
      </div>
    </section>

    {/* Packages */}
    <section className="py-10 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest text-[#5c0386] mb-2">Choose your infrastructure</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Two plans. One system.</h2>
        <p className="text-gray-500 mb-8 text-base">Tap a plan to see exactly what is included.</p>
        <PackageAccordion active={active} onHover={onHover} onClick={onClick} />
      </div>
    </section>

    {/* Urgency */}
    <section className="pb-6 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-start gap-3 p-4 rounded-2xl border border-[#47ff01]/30 bg-[#47ff01]/5">
          <div className="w-2 h-2 rounded-full bg-[#47ff01] animate-pulse shrink-0 mt-1.5"></div>
          <p className="text-sm text-gray-700 leading-relaxed">We onboard a limited number of clients each month to maintain execution quality and team focus. If you are considering it, do not wait.</p>
        </div>
      </div>
    </section>

    <FinalCTA onNavigateHome={onNavigateHome} headlineA={true} />
  </div>
);

// ══════════════════════════════════════════════════════════════════════════════
// VERSION B — Story-driven. Linear persuasion flow.
// ══════════════════════════════════════════════════════════════════════════════
const VersionB: React.FC<{
  active: ActivePackage;
  onHover: (p: 'growth' | 'authority') => void;
  onClick: (p: 'growth' | 'authority') => void;
  onNavigateHome?: () => void;
}> = ({ active, onHover, onClick, onNavigateHome }) => (
  <div className="min-h-screen bg-white">
    <MinimalHeader onNavigateHome={onNavigateHome} />

    {/* Hook */}
    <section className="pt-28 pb-20 px-6 text-center" style={{ backgroundColor: '#5c0386' }}>
      <span
        className="inline-block text-xs font-bold tracking-widest uppercase mb-6"
        style={{ color: '#47ff01', backgroundColor: 'rgba(255,255,255,0.1)', padding: '6px 18px', borderRadius: '999px', border: '1px solid rgba(71,255,1,0.2)' }}
      >
        Creative Infrastructure
      </span>
      <h1 className="font-black text-white leading-none mb-6 px-2" style={{ fontSize: 'clamp(2.4rem, 8vw, 6rem)', letterSpacing: '-0.02em' }}>
        Content that converts.<br />
        <span style={{ color: '#47ff01' }}>Not just exists.</span>
      </h1>
      <p className="text-white/70 text-lg max-w-lg mx-auto leading-relaxed">
        Your business deserves a creative team that actually delivers — without the overhead of building one in-house.
      </p>
    </section>

    {/* Problem */}
    <section className="py-16 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest text-[#5c0386] mb-6">The problem most businesses face</p>
        <div className="space-y-4">
          {[
            { label: 'Freelancers', text: 'Unreliable, inconsistent, and always juggling other clients. Quality drops. Deadlines slip.' },
            { label: 'In-house team', text: 'Expensive to build, slow to hire, and difficult to manage at a consistent output level.' },
            { label: 'Traditional agencies', text: 'High retainers, slow turnaround, and built for projects — not ongoing creative execution.' },
          ].map(({ label, text }) => (
            <div key={label} className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <span className="font-black text-[#5c0386] text-sm uppercase tracking-wide shrink-0 pt-0.5">{label}</span>
              <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Solution */}
    <section className="py-10 px-6" style={{ backgroundColor: '#5c0386' }}>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[#47ff01] text-xs font-bold uppercase tracking-widest mb-4">The Sleeka solution</p>
        <h2 className="text-2xl md:text-4xl font-black text-white leading-snug mb-6">
          A dedicated creative infrastructure that works like your internal team — on a flexible monthly subscription.
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
          {['Strategy', 'Design', 'Video', 'Execution'].map(item => (
            <div key={item} className="bg-white/10 rounded-2xl p-4 border border-white/10 text-center">
              <p className="text-white font-bold text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Packages */}
    <section className="py-14 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest text-[#5c0386] mb-2">Our packages</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Pick the level that fits where you are.</h2>
        <p className="text-gray-500 mb-8">Tap either plan to see everything that is included.</p>
        <PackageAccordion active={active} onHover={onHover} onClick={onClick} />
      </div>
    </section>

    {/* Trust logos */}
    <section className="pb-10 px-6 bg-white">
      <div className="max-w-3xl mx-auto p-8 rounded-2xl text-center" style={{ backgroundColor: '#47ff01' }}>
        <p className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-6">Brands already running on our system</p>
        <TrustLogos />
      </div>
    </section>

    {/* Urgency */}
    <section className="pb-6 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-start gap-3 p-4 rounded-2xl border border-[#47ff01]/30 bg-[#47ff01]/5">
          <div className="w-2 h-2 rounded-full bg-[#47ff01] animate-pulse shrink-0 mt-1.5"></div>
          <p className="text-sm text-gray-700 leading-relaxed">We keep client numbers intentionally small so every business gets proper attention and execution quality. If you are considering it, sooner is always better.</p>
        </div>
      </div>
    </section>

    <FinalCTA onNavigateHome={onNavigateHome} headlineA={false} />
  </div>
);

// ─── Main Export ───────────────────────────────────────────────────────────
interface PackagesPageProps {
  onNavigateToFAQ?: () => void;
  onNavigateHome?: () => void;
  onNavigateToSection?: (sectionId: string) => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({
  onNavigateToFAQ,
  onNavigateHome,
  onNavigateToSection,
}) => {
  const [active, setActive] = useState<ActivePackage>(null);

  // ← Change 'A' to 'B' to switch versions
  const version: 'A' | 'B' = 'A';

  const handleClick = (pkg: 'growth' | 'authority') =>
    setActive(prev => (prev === pkg ? null : pkg));
  const handleHover = (pkg: 'growth' | 'authority') =>
    setActive(pkg);

  return (
    <>
      <PagePreloader />
      {version === 'A'
        ? <VersionA active={active} onHover={handleHover} onClick={handleClick} onNavigateHome={onNavigateHome} />
        : <VersionB active={active} onHover={handleHover} onClick={handleClick} onNavigateHome={onNavigateHome} />
      }
      <Footer
        onNavigateToFAQ={onNavigateToFAQ}
        onNavigateToSection={onNavigateToSection}
      />
    </>
  );
};

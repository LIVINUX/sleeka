import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

type View = 'home' | 'infrastructure';

export const HowWeWork: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [hoveredPackage, setHoveredPackage] = useState<'growth' | 'authority' | null>(null);

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* ────────────────────────────────────────
            VIEW 1 — HOME: Two Cards
        ──────────────────────────────────────── */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            view === 'home' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 absolute pointer-events-none'
          }`}
        >
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-geko-dark">
              How we work
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl leading-relaxed">
              We help growing businesses build creative capacity through flexible, outcome driven solutions that power visibility, authority, and revenue.
            </p>
          </div>

          {/* Two Cards */}
          <div className="flex flex-col gap-8 max-w-2xl mx-auto md:max-w-none">

            {/* Card 1 — Creative Infrastructure */}
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
              <div className="bg-[#ede9f6] flex items-center justify-center py-10 px-8 min-h-[280px]">
                <img
                  src="/assets/creative-infrastructure.jpg"
                  alt="Creative Infrastructure"
                  className="w-full max-w-sm object-contain"
                />
              </div>
              <div className="bg-[#5c0386] px-8 md:px-12 pt-10 pb-12">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-5 tracking-tight leading-tight">
                  Creative Infrastructure
                </h3>
                <p className="text-white/90 text-base leading-relaxed mb-3">
                  Your full creative department on a flexible monthly subscription, delivering design, video, and animation systems that fuel marketing campaigns and brand growth.
                </p>
                <p className="text-white/80 text-base leading-relaxed mb-10">
                  Perfect for startups and growing businesses that need consistent, high quality creative output without the cost or complexity of building an in house team.
                </p>
                <button
                  onClick={() => setView('infrastructure')}
                  className="px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 duration-300 w-fit shadow-xl"
                  style={{ backgroundColor: '#47ff01', color: '#000' }}
                >
                  Learn More!
                </button>
              </div>
            </div>

            {/* Card 2 — Creative Talent Outsourcing */}
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
              <div className="bg-[#ede9f6] flex items-center justify-center py-10 px-8 min-h-[280px]">
                <img
                  src="/assets/talent-outsourcing.jpg"
                  alt="Creative Talent Outsourcing"
                  className="w-full max-w-sm object-contain"
                />
              </div>
              <div className="bg-[#5c0386] px-8 md:px-12 pt-10 pb-12">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-5 tracking-tight leading-tight">
                  Creative Talent Outsourcing
                </h3>
                <p className="text-white/90 text-base leading-relaxed mb-3">
                  Scale faster with vetted, multi skilled creative professionals trained in graphics design, animation, and video production, all in one.
                </p>
                <p className="text-white/80 text-base leading-relaxed mb-10">
                  Our talents combine technical expertise, AI enabled workflows, and soft skills, integrating seamlessly with your team to execute work efficiently and effectively.
                </p>
                <button
                  disabled
                  className="px-8 py-4 rounded-full font-bold text-lg cursor-not-allowed w-fit"
                  style={{ backgroundColor: '#47ff01', color: '#000' }}
                >
                  Coming Soon
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* ────────────────────────────────────────
            VIEW 2 — CREATIVE INFRASTRUCTURE DETAIL
        ──────────────────────────────────────── */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            view === 'infrastructure'
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-10 absolute pointer-events-none'
          }`}
        >
          {/* Back Button */}
          <button
            onClick={() => { setView('home'); setHoveredPackage(null); }}
            className="flex items-center gap-2 text-[#5c0386] font-semibold mb-10 hover:gap-3 transition-all duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>

          {/* ── Top Hero: Title + Illustration ── */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
            <div className="md:max-w-lg">
              <h2 className="text-5xl md:text-6xl font-black text-[#5c0386] uppercase leading-tight mb-4">
                Creative<br />Infrastructure
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Sleeka functions as your dedicated creative department, providing the design, video, and animation systems that help brands stay visible, build authority, and convert attention into revenue.
              </p>
            </div>
            <div className="md:w-80 flex-shrink-0">
              <img
                src="/assets/creative-infrastructure.jpg"
                alt="Creative Infrastructure"
                className="w-full object-contain rounded-3xl"
              />
            </div>
          </div>

          {/* ── Problem Section ── */}
          <div className="mb-12 max-w-3xl">
            <h4 className="text-xl font-bold text-gray-900 mb-5 border-b border-gray-200 pb-3">
              The Problem Most Growing Businesses Face
            </h4>
            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p>
                Marketing today requires constant creative output including graphics, videos, campaigns, and storytelling that keep your brand visible and competitive. But most companies struggle with how to support this consistently.
              </p>
              <p className="italic">
                Freelancers are unreliable, often juggling multiple clients with inconsistent availability and delivery.
              </p>
              <p className="italic">
                Building a full in-house creative team requires hiring designers, video editors, animators, and creative leads — a major payroll commitment.
              </p>
              <p className="italic">
                Traditional agencies are often expensive, slow to respond, and structured around project billing rather than ongoing creative support.
              </p>
              <p>
                Sleeka solves this by providing businesses with a structured creative department on a flexible monthly subscription — giving your marketing team reliable creative capacity without operational complexity. Here are our two creative infrastructure packages:
              </p>
            </div>
          </div>

          {/* ── Package Buttons with Hover Reveal ── */}
          <div className="flex flex-col gap-4 mb-16 max-w-3xl">

            {/* Growth Infrastructure */}
            <div>
              <button
                onMouseEnter={() => setHoveredPackage('growth')}
                onMouseLeave={() => setHoveredPackage(null)}
                className="w-full text-left px-8 py-5 rounded-full font-bold text-xl transition-all duration-300 bg-[#5c0386] text-white hover:shadow-xl hover:shadow-purple-500/30 hover:scale-[1.01]"
              >
                Growth Infrastructure
              </button>

              <div
                onMouseEnter={() => setHoveredPackage('growth')}
                onMouseLeave={() => setHoveredPackage(null)}
                style={{
                  maxHeight: hoveredPackage === 'growth' ? '2000px' : '0px',
                  opacity: hoveredPackage === 'growth' ? 1 : 0,
                  marginTop: hoveredPackage === 'growth' ? '12px' : '0px',
                  overflow: 'hidden',
                  transition: 'max-height 0.5s ease-in-out, opacity 0.3s ease-in-out, margin-top 0.3s ease-in-out',
                }}
              >
                <div className="bg-[#5c0386] rounded-[2rem] p-8 text-white space-y-6">
                  <div>
                    <p className="text-[#47ff01] text-2xl font-black">₦300,000 / Month</p>
                    <p className="text-white/80 text-sm mt-2">
                      For growing businesses that need consistent creative support to maintain visibility and support marketing activities.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-2">What This Package Delivers</p>
                      <ul className="space-y-1 text-sm text-white/80">
                        <li>• Consistent brand visibility</li>
                        <li>• Professional visual communication</li>
                        <li>• Reliable creative support for ongoing marketing</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-2">Creative Support Includes</p>
                      <ul className="space-y-1 text-sm text-white/80">
                        <li>• Brand graphics and marketing visuals</li>
                        <li>• Short-form video editing</li>
                        <li>• Campaign visuals and promotional creatives</li>
                        <li>• Visual storytelling assets for brand communication</li>
                      </ul>
                      <p className="text-white/40 text-xs mt-2 italic">Instagram, LinkedIn, and more.</p>
                    </div>

                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-2">Monthly Creative Planning</p>
                      <ul className="space-y-1 text-sm text-white/80">
                        <li>• Structured content calendar</li>
                        <li>• Creative direction aligned with marketing goals</li>
                        <li>• Organized campaign planning</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-2">Creative Request Capacity</p>
                      <ul className="space-y-1 text-sm text-white/80">
                        <li>• 6 creative requests per month</li>
                        <li>• 1 active task at a time</li>
                        <li>• Additional requests move into a structured queue</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-2">Typical Delivery Time</p>
                      <ul className="space-y-1 text-sm text-white/80">
                        <li>• Graphic design: 24 – 48 hours</li>
                        <li>• Video editing: 48 – 72 hours</li>
                        <li>• Motion graphics / animation: 3 – 5 working days</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-2">Coordination & Reporting</p>
                      <ul className="space-y-1 text-sm text-white/80">
                        <li>• Dedicated Project Manager</li>
                        <li>• Monthly creative performance report</li>
                        <li>• Organized task coordination and workflow management</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-4 border border-white/20">
                    <p className="text-white/90 text-sm">
                      <span className="text-[#47ff01] font-bold">Best suited for: </span>
                      Growing companies that need consistent creative output without building an internal design team.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Authority Infrastructure */}
            <div>
              <button
                onMouseEnter={() => setHoveredPackage('authority')}
                onMouseLeave={() => setHoveredPackage(null)}
                className="w-full text-left px-8 py-5 rounded-full font-bold text-xl transition-all duration-300 bg-[#47ff01] text-black hover:brightness-90 hover:shadow-xl hover:shadow-green-400/30 hover:scale-[1.01]"
              >
                Authority Infrastructure
              </button>

              <div
                onMouseEnter={() => setHoveredPackage('authority')}
                onMouseLeave={() => setHoveredPackage(null)}
                style={{
                  maxHeight: hoveredPackage === 'authority' ? '2000px' : '0px',
                  opacity: hoveredPackage === 'authority' ? 1 : 0,
                  marginTop: hoveredPackage === 'authority' ? '12px' : '0px',
                  overflow: 'hidden',
                  transition: 'max-height 0.5s ease-in-out, opacity 0.3s ease-in-out, margin-top 0.3s ease-in-out',
                }}
              >
                <div className="bg-[#5c0386] rounded-[2rem] p-8 text-white space-y-6">
                  <div>
                    <p className="text-[#47ff01] text-2xl font-black">₦500,000 / Month</p>
                    <p className="text-white/80 text-sm mt-2">
                      For ambitious companies that want to strengthen brand authority, execute campaigns effectively, and scale their marketing presence. Greater creative capacity, faster delivery, and strategic oversight.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-2">What This Package Delivers</p>
                      <ul className="space-y-1 text-sm text-white/80">
                        <li>• Stronger brand authority</li>
                        <li>• Higher-impact marketing campaigns</li>
                        <li>• Faster creative execution for growth initiatives</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-2">Premium Creative Support</p>
                      <ul className="space-y-1 text-sm text-white/80">
                        <li>• Advanced brand and marketing design</li>
                        <li>• High-quality short-form video production</li>
                        <li>• Motion graphics and visual storytelling</li>
                        <li>• Light animation for campaigns and brand messaging</li>
                        <li>• Creative support for product launches and promotions</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-2">Strategic Creative Direction</p>
                      <ul className="space-y-1 text-sm text-white/80">
                        <li>• Creative Director oversight</li>
                        <li>• Brand positioning guidance</li>
                        <li>• Campaign creative direction</li>
                        <li>• Messaging and creative strategy support</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-2">Enhanced Request Capacity</p>
                      <ul className="space-y-1 text-sm text-white/80">
                        <li>• 20 creative requests per month</li>
                        <li>• Up to 3 active tasks at the same time</li>
                        <li>• Priority task queue for faster execution</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-2">Priority Delivery Time</p>
                      <ul className="space-y-1 text-sm text-white/80">
                        <li>• Graphic design: Less than 12 hours</li>
                        <li>• Video editing: 24 – 48 hours</li>
                        <li>• Motion graphics / animation: 2 – 4 working days</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-[#47ff01] font-bold text-xs uppercase tracking-widest mb-2">Strategic Coordination</p>
                      <ul className="space-y-1 text-sm text-white/80">
                        <li>• Dedicated Project Manager</li>
                        <li>• Monthly growth and creative performance report</li>
                        <li>• Strategy review sessions</li>
                        <li>• Higher revision flexibility</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-white/60 text-sm italic">
                    Your project manager ensures your creative pipeline stays organized, prioritized, and delivered efficiently — enabling your marketing team to move faster.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* ── Bottom CTA ── */}
          <div className="bg-gray-50 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 max-w-3xl">
            <p className="text-gray-800 text-lg leading-relaxed md:max-w-lg">
              Get a dedicated creative department that delivers high-quality design, video, and animation on demand — boosting visibility, authority, and revenue without building an in-house team.
            </p>
            <button
              className="px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 duration-300 flex-shrink-0 shadow-xl"
              style={{ backgroundColor: '#47ff01', color: '#000' }}
            >
              Book a Discovery Call
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

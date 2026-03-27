import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type ActivePackage = 'growth' | 'authority' | null;

export const HowWeWork: React.FC = () => {
  const [activePackage, setActivePackage] = useState<ActivePackage>(null);

  const toggle = (pkg: ActivePackage) => {
    setActivePackage(prev => (prev === pkg ? null : pkg));
  };

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-geko-dark">
            How we work
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl leading-relaxed">
            We help growing businesses build creative capacity through flexible, outcome driven solutions that power visibility, authority, and revenue.
          </p>
        </div>

        {/* Cards Stack */}
        <div className="flex flex-col gap-8 max-w-2xl mx-auto md:max-w-3xl lg:max-w-4xl">

          {/* ── Card 1: Creative Infrastructure ── */}
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">

            {/* Image Area - light purple background */}
            <div className="bg-[#ede9f6] flex items-center justify-center py-10 px-8 min-h-[280px]">
              <img
                src="/assets/creative-infrastructure.jpg"
                alt="Creative Infrastructure"
                className="w-full max-w-sm object-contain"
              />
            </div>

            {/* Purple Content Area */}
            <div className="bg-[#5c0386] px-8 md:px-12 pt-10 pb-12">

              <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-5 tracking-tight leading-tight">
                Creative Infrastructure
              </h3>

              <p className="text-white/90 text-base leading-relaxed mb-3">
                Your full creative department on a flexible monthly subscription, delivering design, video, and animation systems that fuel marketing campaigns and brand growth.
              </p>
              <p className="text-white/80 text-base leading-relaxed mb-8">
                Perfect for startups and growing businesses that need consistent, high quality creative output without the cost or complexity of building an in house team.
              </p>

              {/* Accordion Buttons */}
              <div className="flex flex-col gap-3 mb-8">

                {/* Growth Infrastructure Toggle */}
                <div>
                  <button
                    onClick={() => toggle('growth')}
                    className={`w-full flex items-center justify-between px-6 py-4 rounded-full font-bold text-base transition-all duration-300 ${
                      activePackage === 'growth'
                        ? 'bg-white text-[#5c0386]'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    <span>Growth Infrastructure — ₦300,000/month</span>
                    {activePackage === 'growth'
                      ? <ChevronUp className="w-5 h-5 flex-shrink-0" />
                      : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                  </button>

                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      activePackage === 'growth' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="bg-white/10 rounded-3xl mt-3 p-6 space-y-5">
                      <p className="text-white text-sm leading-relaxed">
                        For growing businesses that need consistent creative support to maintain visibility and support marketing activities.
                      </p>
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
                        <p className="text-white/50 text-xs mt-2 italic">Supports Instagram, LinkedIn, and more.</p>
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
                      <div className="bg-white/10 rounded-2xl p-4 border border-white/20">
                        <p className="text-white/90 text-sm">
                          <span className="text-[#47ff01] font-bold">Best suited for: </span>
                          Growing companies that need consistent creative output without building an internal design team.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Authority Infrastructure Toggle */}
                <div>
                  <button
                    onClick={() => toggle('authority')}
                    className={`w-full flex items-center justify-between px-6 py-4 rounded-full font-bold text-base transition-all duration-300 ${
                      activePackage === 'authority'
                        ? 'bg-[#47ff01] text-black'
                        : 'bg-[#47ff01]/20 text-white hover:bg-[#47ff01]/30'
                    }`}
                  >
                    <span>Authority Infrastructure — ₦500,000/month</span>
                    {activePackage === 'authority'
                      ? <ChevronUp className="w-5 h-5 flex-shrink-0" />
                      : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                  </button>

                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      activePackage === 'authority' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="bg-white/10 rounded-3xl mt-3 p-6 space-y-5">
                      <p className="text-white text-sm leading-relaxed">
                        For ambitious companies that want to strengthen brand authority, execute campaigns effectively, and scale their marketing presence. Greater creative capacity, faster delivery, and strategic oversight.
                      </p>
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
                  </div>
                </div>

              </div>

              {/* Learn More Button */}
              <button
                className="px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 duration-300 w-fit shadow-xl"
                style={{ backgroundColor: '#47ff01', color: '#000' }}
              >
                Learn More!
              </button>

            </div>
          </div>

          {/* ── Card 2: Creative Talent Outsourcing ── */}
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">

            {/* Image Area - light purple background */}
            <div className="bg-[#ede9f6] flex items-center justify-center py-10 px-8 min-h-[280px]">
              <img
                src="/assets/talent-outsourcing.jpg"
                alt="Creative Talent Outsourcing"
                className="w-full max-w-sm object-contain"
              />
            </div>

            {/* Purple Content Area */}
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

              {/* Coming Soon Button */}
              <button
                disabled
                className="px-8 py-4 rounded-full font-bold text-lg cursor-not-allowed w-fit opacity-95"
                style={{ backgroundColor: '#47ff01', color: '#000' }}
              >
                Coming Soon
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

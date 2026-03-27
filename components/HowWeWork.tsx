import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type Package = 'growth' | 'authority' | null;

export const HowWeWork: React.FC = () => {
  const [activePackage, setActivePackage] = useState<Package>('growth');

  const toggle = (pkg: Package) => {
    setActivePackage(prev => (prev === pkg ? null : pkg));
  };

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="mb-14">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-geko-dark">
            How we work
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl leading-relaxed">
            Sleeka functions as your dedicated creative department, providing the design, video, and animation systems that help brands stay visible, build authority, and convert attention into revenue.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <button
            onClick={() => toggle('growth')}
            className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-between gap-6 ${
              activePackage === 'growth'
                ? 'bg-[#5c0386] text-white shadow-lg shadow-purple-500/30'
                : 'bg-gray-100 text-gray-700 hover:bg-[#5c0386]/10'
            }`}
          >
            <span>Growth Infrastructure</span>
            {activePackage === 'growth'
              ? <ChevronUp className="w-5 h-5 flex-shrink-0" />
              : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
          </button>

          <button
            onClick={() => toggle('authority')}
            className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-between gap-6 ${
              activePackage === 'authority'
                ? 'bg-[#47ff01] text-black shadow-lg shadow-green-400/30'
                : 'bg-gray-100 text-gray-700 hover:bg-[#47ff01]/20'
            }`}
          >
            <span>Authority Infrastructure</span>
            {activePackage === 'authority'
              ? <ChevronUp className="w-5 h-5 flex-shrink-0" />
              : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
          </button>
        </div>

        {/* Growth Infrastructure Card */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            activePackage === 'growth' ? 'max-h-[3000px] opacity-100 mb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-[#5c0386] rounded-[2.5rem] p-10 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

              {/* Left: Content */}
              <div>
                <div className="mb-6">
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    Growth Infrastructure
                  </h3>
                  <p className="text-[#47ff01] text-2xl font-bold">₦300,000 / Month</p>
                </div>

                <p className="text-white/90 text-lg leading-relaxed mb-8">
                  For growing businesses that need consistent creative support to maintain visibility and support marketing activities.
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-bold text-base mb-2 uppercase tracking-wide">What This Package Delivers</h4>
                    <ul className="space-y-1 text-white/80 text-base">
                      <li>• Consistent brand visibility</li>
                      <li>• Professional visual communication</li>
                      <li>• Reliable creative support for ongoing marketing</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-bold text-base mb-2 uppercase tracking-wide">Creative Support Includes</h4>
                    <ul className="space-y-1 text-white/80 text-base">
                      <li>• Brand graphics and marketing visuals</li>
                      <li>• Short-form video editing</li>
                      <li>• Campaign visuals and promotional creatives</li>
                      <li>• Visual storytelling assets for brand communication</li>
                    </ul>
                    <p className="text-white/60 text-sm mt-2 italic">Supports marketing across Instagram, LinkedIn, and more.</p>
                  </div>

                  <div>
                    <h4 className="text-white font-bold text-base mb-2 uppercase tracking-wide">Creative Request Capacity</h4>
                    <ul className="space-y-1 text-white/80 text-base">
                      <li>• 6 creative requests per month</li>
                      <li>• 1 active task at a time</li>
                      <li>• Additional requests move into a structured queue</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-bold text-base mb-2 uppercase tracking-wide">Typical Delivery Time</h4>
                    <ul className="space-y-1 text-white/80 text-base">
                      <li>• Graphic design: 24 – 48 hours</li>
                      <li>• Video editing: 48 – 72 hours</li>
                      <li>• Motion graphics / animation: 3 – 5 working days</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-bold text-base mb-2 uppercase tracking-wide">Coordination & Reporting</h4>
                    <ul className="space-y-1 text-white/80 text-base">
                      <li>• Dedicated Project Manager</li>
                      <li>• Monthly creative performance report</li>
                      <li>• Organized task coordination and workflow management</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-4 rounded-2xl bg-white/10 border border-white/20">
                  <p className="text-white/90 text-sm">
                    <span className="text-[#47ff01] font-bold">Best suited for: </span>
                    Growing companies that need consistent creative output without building an internal design team.
                  </p>
                </div>

                <button
                  className="mt-8 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-3 shadow-xl hover:shadow-2xl hover:scale-105 duration-300 w-fit"
                  style={{ backgroundColor: '#47ff01', color: '#000' }}
                >
                  Book a Discovery Call
                </button>
              </div>

              {/* Right: Image */}
              <div className="flex items-center justify-center">
                <img
                  src="/assets/growth-package.jpg"
                  alt="Growth Infrastructure Package"
                  className="w-full max-w-md rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Authority Infrastructure Card */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            activePackage === 'authority' ? 'max-h-[3000px] opacity-100 mb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-[#5c0386] rounded-[2.5rem] p-10 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

              {/* Left: Content */}
              <div>
                <div className="mb-6">
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    Authority Infrastructure
                  </h3>
                  <p className="text-[#47ff01] text-2xl font-bold">₦500,000 / Month</p>
                </div>

                <p className="text-white/90 text-lg leading-relaxed mb-8">
                  For ambitious companies that want to strengthen brand authority, execute campaigns effectively, and scale their marketing presence. Greater creative capacity, faster delivery, and strategic oversight.
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-bold text-base mb-2 uppercase tracking-wide">What This Package Delivers</h4>
                    <ul className="space-y-1 text-white/80 text-base">
                      <li>• Stronger brand authority</li>
                      <li>• Higher-impact marketing campaigns</li>
                      <li>• Faster creative execution for growth initiatives</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-bold text-base mb-2 uppercase tracking-wide">Premium Creative Support</h4>
                    <ul className="space-y-1 text-white/80 text-base">
                      <li>• Advanced brand and marketing design</li>
                      <li>• High-quality short-form video production</li>
                      <li>• Motion graphics and visual storytelling</li>
                      <li>• Light animation for campaigns and brand messaging</li>
                      <li>• Creative support for product launches and promotions</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-bold text-base mb-2 uppercase tracking-wide">Strategic Creative Direction</h4>
                    <ul className="space-y-1 text-white/80 text-base">
                      <li>• Creative Director oversight</li>
                      <li>• Brand positioning guidance</li>
                      <li>• Campaign creative direction</li>
                      <li>• Messaging and creative strategy support</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-bold text-base mb-2 uppercase tracking-wide">Enhanced Request Capacity</h4>
                    <ul className="space-y-1 text-white/80 text-base">
                      <li>• 20 creative requests per month</li>
                      <li>• Up to 3 active tasks at the same time</li>
                      <li>• Priority task queue for faster execution</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-bold text-base mb-2 uppercase tracking-wide">Priority Delivery Time</h4>
                    <ul className="space-y-1 text-white/80 text-base">
                      <li>• Graphic design: Less than 12 hours</li>
                      <li>• Video editing: 24 – 48 hours</li>
                      <li>• Motion graphics / animation: 2 – 4 working days</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-bold text-base mb-2 uppercase tracking-wide">Strategic Coordination</h4>
                    <ul className="space-y-1 text-white/80 text-base">
                      <li>• Dedicated Project Manager</li>
                      <li>• Monthly growth and creative performance report</li>
                      <li>• Strategy review sessions</li>
                      <li>• Higher revision flexibility</li>
                    </ul>
                  </div>
                </div>

                <button
                  className="mt-8 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-3 shadow-xl hover:shadow-2xl hover:scale-105 duration-300 w-fit"
                  style={{ backgroundColor: '#47ff01', color: '#000' }}
                >
                  Book a Discovery Call
                </button>
              </div>

              {/* Right: Image */}
              <div className="flex items-center justify-center">
                <img
                  src="/assets/authority-package.jpg"
                  alt="Authority Infrastructure Package"
                  className="w-full max-w-md rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

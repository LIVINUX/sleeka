import React from 'react';

export const AgencyDescription: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
            <div className="lg:w-1/3 shrink-0">
                <h2 className="text-5xl md:text-6xl font-serif font-bold text-geko-dark leading-tight sticky top-24">
                    What We Do
                </h2>
            </div>
            <div className="lg:w-2/3">
                <p className="text-xl md:text-2xl md:leading-relaxed text-gray-600 font-light mb-8">
                    We provide end-to-end creative support
                    from design, motion, and social media
                    management to content strategy all
                    delivered through a flexible monthly plan.
                </p>
                <p className="text-xl md:text-2xl md:leading-relaxed text-gray-600 font-light">
                    For organizations that demand deeper
                    brand alignment and faster turnaround,
                    we also provide trained creative talent
                    who integrate directly into in-house teams,
                    ensuring consistency, speed, and growth.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};
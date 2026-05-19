import React from 'react';

export const AgencyDescription: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold text-geko-dark mb-6">
            Built for Modern Marketing
          </h2>
          <p className="text-xl md:text-2xl md:leading-relaxed text-gray-600 font-light max-w-4xl mb-6">
            We provide end-to-end creative support —
            from design, motion, and social media
            management to content strategy — all
            delivered through a flexible monthly plan.
          </p>
          <p className="text-xl md:text-2xl md:leading-relaxed text-gray-600 font-light max-w-4xl">
            For organizations that demand deeper
            brand alignment and faster turnaround,
            we also provide trained creative talent
            who integrate directly into in-house teams,
            ensuring consistency, speed, and growth.
          </p>
        </div>
      </div>
    </section>
  );
};

import React from 'react';

export const AgencyDescription: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold text-geko-dark mb-6">
            Built for Modern Marketing
          </h2>
          <p className="text-xl md:text-2xl md:leading-relaxed text-gray-600 font-normal max-w-4xl mb-6">
            At Sleeka, we provide the creative infrastructure that helps businesses turn content into a predictable system for visibility, lead generation, and revenue growth.
          </p>
          <p className="text-xl md:text-2xl md:leading-relaxed text-gray-600 font-normal max-w-4xl">
            Instead of juggling freelancers or building an expensive in-house team, businesses get access to a dedicated team that delivers measurable results through a flexible monthly subscription.
          </p>
        </div>
      </div>
    </section>
  );
};

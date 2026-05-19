import React from 'react';

export const AgencyDescription: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          <div className="lg:w-1/3 shrink-0">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-geko-dark leading-tight sticky top-24">
              Built for<br />Modern Marketing
            </h2>
          </div>
          <div className="lg:w-2/3">
            <p className="text-xl md:text-2xl md:leading-relaxed text-gray-600 font-light mb-8">
              At Sleeka, we provide the creative infrastructure that helps businesses turn content into a predictable system for visibility, lead generation, and revenue growth.
            </p>
            <p className="text-xl md:text-2xl md:leading-relaxed text-gray-600 font-light">
              Instead of juggling freelancers or building an expensive in-house team, businesses get access to a dedicated team that delivers measurable results through a flexible monthly subscription.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

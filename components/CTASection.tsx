import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        {/*
          Light purple gradient card — matches the screenshot exactly.
          Same card as the one on the Creative Infrastructure page.
        */}
        <div
          className="rounded-[2rem] p-8 md:p-12 max-w-3xl mx-auto"
          style={{ background: 'linear-gradient(135deg, #f3eeff 0%, #e8d8ff 100%)' }}
        >
          <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-8">
            Get a dedicated creative department that delivers high-quality design, video,
            and animation on demand — boosting visibility, authority, and revenue without
            building an in-house team.
          </p>
          <a
            href="https://calendar.app.google/2nWbeLXuC52dvZtq5"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 px-8 py-5 rounded-full font-bold text-lg transition-all hover:scale-105 duration-300 shadow-lg hover:shadow-xl group"
            style={{ backgroundColor: '#47ff01', color: '#000' }}
          >
            Book a Discovery Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

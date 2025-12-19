import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface CaseStudyDetailProps {
  title: string;
  subtitle: string;
  overview: string;
  problem: string;
  solution: string;
  results: string[];
  image: string;
  tags: string;
  businessImpact?: string;
  additionalSections?: {
    title: string;
    description: string;
    images: string[];
  }[];
}

export const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({
  title,
  subtitle,
  overview,
  problem,
  solution,
  results,
  image,
  tags,
  businessImpact,
  additionalSections,
}) => {
  return (
    <div className="min-h-screen bg-[#5c0386] text-white">
      {/* Header Section */}
      <div className="container mx-auto px-6 md:px-12 pt-32 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Case Study:<br />
          {title}
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 md:px-12 pb-24 max-w-3xl">
        {/* Header Image */}
        <div className="rounded-[3rem] overflow-hidden mb-16">
          <img
            src={image}
            alt={title}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        <div className="space-y-12">
          {/* Overview */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Overview
            </h2>
            <p className="text-white/90 text-base md:text-lg leading-relaxed">
              {overview}
            </p>
          </div>

          {/* The Challenge (Problem) */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Challenge
            </h2>
            <p className="text-white/90 text-base md:text-lg leading-relaxed">
              {problem}
            </p>
          </div>

          {/* Our Approach (Solution) */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Approach
            </h2>
            <p className="text-white/90 text-base md:text-lg leading-relaxed">
              {solution}
            </p>
          </div>

          {/* Results */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Outcomes
            </h2>
            <ul className="space-y-4">
              {results.map((result, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-white/90 text-base md:text-lg leading-relaxed"
                >
                  <span className="text-white font-bold text-xl flex-shrink-0">
                    {index + 1}.
                  </span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Impact */}
          {businessImpact && (
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Business Impact
              </h2>
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                {businessImpact}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Additional Sections - Full Width White Background */}
      {additionalSections && additionalSections.map((section, index) => (
        <div key={index} className="bg-white py-12 md:py-16">
          <div className="container mx-auto px-6 md:px-12 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {section.title}
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
              {section.description}
            </p>
            
            {/* Images Grid */}
            <div className="space-y-6">
              {section.images.map((img, imgIndex) => (
                <div key={imgIndex} className="rounded-2xl overflow-hidden">
                  <img
                    src={img}
                    alt={`${section.title} ${imgIndex + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      
      <div className="h-1">
      </div>
    </div>
  );
};

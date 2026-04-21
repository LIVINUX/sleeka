import React from 'react';
import { VideoAsset } from '../data/caseStudies';

// ── Video player ─────────────────────────────────────────────────────────────
// Uses native <video> — shows player when file is uploaded, invisible until then.
const VideoSlot: React.FC<{ video: VideoAsset; dark?: boolean }> = ({
  video,
  dark = true,
}) => (
  <div className="w-full">
    {dark && (
      <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-3">
        {video.label}
      </p>
    )}
    {!dark && (
      <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-3">
        {video.label}
      </p>
    )}
    <video
      src={video.file}
      poster={video.poster}
      controls
      playsInline
      className="w-full rounded-[1.8rem] block"
      style={{
        background: dark ? 'rgba(0,0,0,0.35)' : '#f0f0f0',
        minHeight: '180px',
      }}
    />
  </div>
);

// ── Props ────────────────────────────────────────────────────────────────────
interface CaseStudyDetailProps {
  title: string;
  subtitle: string;
  overview: string;
  problem: string;
  solution: string;
  results: string[];
  image: string;
  tags: string;
  showHeroImage?: boolean;
  businessImpact?: string;
  introVideo?: VideoAsset;
  videos?: VideoAsset[];
  finalVideo?: VideoAsset;
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
  showHeroImage = true,
  businessImpact,
  introVideo,
  videos,
  finalVideo,
  additionalSections,
}) => {
  return (
    <div className="min-h-screen overflow-x-hidden">

      {/* ══════════════════════════════════════════
          PURPLE HEADER + MEDIA
      ══════════════════════════════════════════ */}
      <div className="bg-[#5c0386] text-white">

        {/* Title */}
        <div className="container mx-auto px-6 md:px-12 pt-32 pb-10 text-center max-w-3xl">
          <p className="text-white/50 uppercase tracking-widest text-xs font-bold mb-3">
            Case Study
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            {title}
          </h1>
          <p className="text-white/80 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {tags.split(',').map(t => (
              <span
                key={t}
                className="px-4 py-1.5 rounded-full text-xs font-bold bg-white/15 text-white/85 tracking-wide uppercase"
              >
                {t.trim()}
              </span>
            ))}
          </div>
        </div>

        {/* Hero image — only shown when showHeroImage is true */}
        {showHeroImage && (
          <div className="container mx-auto px-6 md:px-12 pb-6 max-w-3xl">
            <div className="rounded-[2rem] overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-64 md:h-96 object-cover block"
              />
            </div>
          </div>
        )}

        {/* Single intro video (PBN: directly after title; EmsXchange: after hero image) */}
        {introVideo && (
          <div className="container mx-auto px-6 md:px-12 pb-14 max-w-3xl">
            <VideoSlot video={introVideo} dark />
          </div>
        )}

        {/* Multiple stacked videos (Bluechip: Event Video then Founder Video) */}
        {videos && videos.length > 0 && (
          <div className="container mx-auto px-6 md:px-12 pb-14 max-w-3xl space-y-8">
            {videos.map((v, i) => (
              <VideoSlot key={i} video={v} dark />
            ))}
          </div>
        )}
      </div>

      {/* ══════════════════════════════════════════
          WHITE TEXT SECTIONS
      ══════════════════════════════════════════ */}
      <div className="bg-white py-16 md:py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-3xl space-y-14">

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-geko-dark mb-5">Overview</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">{overview}</p>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-geko-dark mb-5">The Challenge</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">{problem}</p>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-geko-dark mb-5">Our Approach</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">{solution}</p>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-geko-dark mb-6">The Outcomes</h2>
            <ul className="space-y-4">
              {results.map((result, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#5c0386] text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">{result}</p>
                </li>
              ))}
            </ul>
          </div>

          {businessImpact && (
            <div className="bg-[#f3eeff] rounded-[2rem] p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-black text-[#5c0386] mb-5">
                Business Impact
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {businessImpact}
              </p>
            </div>
          )}

        </div>
      </div>

      {/* ══════════════════════════════════════════
          ADDITIONAL SECTIONS — images stacked one by one
          Each image is full width, displayed as a block.
          No grid, no columns — every image on its own row.
      ══════════════════════════════════════════ */}
      {additionalSections && additionalSections.map((section, sIdx) => (
        <div
          key={sIdx}
          className={`py-14 md:py-20 px-6 md:px-12 ${sIdx % 2 === 0 ? 'bg-[#F9F9F9]' : 'bg-white'}`}
        >
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-black text-geko-dark mb-3">
              {section.title}
            </h2>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10">
              {section.description}
            </p>

            {/* Stacked one per row — every image full width */}
            <div className="flex flex-col gap-6">
              {section.images.map((img, iIdx) => (
                <div key={iIdx} className="w-full rounded-2xl overflow-hidden">
                  <img
                    src={img}
                    alt={`${section.title} ${iIdx + 1}`}
                    className="w-full h-auto object-cover block"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* ══════════════════════════════════════════
          FINAL VIDEO — shown below all extra sections (PBN only)
      ══════════════════════════════════════════ */}
      {finalVideo && (
        <div className="bg-white py-14 md:py-20 px-6 md:px-12">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-black text-geko-dark mb-3">
              Final Video
            </h2>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8">
              The animated video communicated the offering clearly and was ready for both
              digital and presentation use.
            </p>
            <VideoSlot video={finalVideo} dark={false} />
          </div>
        </div>
      )}

      <div className="h-1 bg-white" />
    </div>
  );
};

import React from 'react';
import { VideoAsset } from '../data/caseStudies';

// ─────────────────────────────────────────────────────────────────────────────
// VideoSlot
// Shows a video player if the file exists, or a clearly labelled placeholder
// with the exact path you need to upload to. No code changes needed once
// you've uploaded the file — it will just work.
// ─────────────────────────────────────────────────────────────────────────────
const VideoSlot: React.FC<{ video: VideoAsset; dark?: boolean; poster?: string }> = ({
  video, dark = true, poster,
}) => (
  <div className="w-full">
    <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${dark ? 'text-white/50' : 'text-gray-400'}`}>
      {video.label}
    </p>
    {/*
      The <video> tag is always rendered. While the file is not yet uploaded,
      the browser shows nothing (graceful degradation). Once you upload the
      file to the path shown, the video appears automatically.
      Upload path: {video.file}
    */}
    <video
      src={video.file}
      controls
      poster={poster}
      playsInline
      className={`w-full rounded-[1.8rem] object-cover block ${dark ? '' : 'shadow-lg'}`}
      style={{ background: dark ? 'rgba(0,0,0,0.4)' : '#f3f3f3', minHeight: '180px' }}
    >
      {/* Fallback shown only if browser can't render video at all */}
      <div className={`w-full aspect-video rounded-[1.8rem] flex items-center justify-center ${dark ? 'bg-black/40 border border-white/10' : 'bg-gray-100 border border-gray-200'}`}>
        <div className="text-center px-6">
          <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 ${dark ? 'bg-white/20' : 'bg-[#5c0386]/15'}`}>
            <svg className={`w-7 h-7 ml-1 ${dark ? 'text-white' : 'text-[#5c0386]'}`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <p className={`font-semibold text-sm ${dark ? 'text-white/70' : 'text-gray-500'}`}>{video.label}</p>
          <p className={`text-xs mt-1 font-mono ${dark ? 'text-white/35' : 'text-gray-400'}`}>{video.file}</p>
        </div>
      </div>
    </video>
  </div>
);

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
  introVideo?: VideoAsset;
  videos?: VideoAsset[];
  finalVideo?: VideoAsset;
  additionalSections?: {
    title: string;
    description: string;
    images: string[];
    grid?: 'stack' | '2col' | '3col';
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
  introVideo,
  videos,
  finalVideo,
  additionalSections,
}) => {
  return (
    <div className="min-h-screen overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════
          PURPLE HEADER + MEDIA SECTION
      ═══════════════════════════════════════════════════════ */}
      <div className="bg-[#5c0386] text-white">

        {/* Title block */}
        <div className="container mx-auto px-6 md:px-12 pt-32 pb-10 text-center max-w-3xl">
          <p className="text-white/50 uppercase tracking-widest text-xs font-bold mb-3">Case Study</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            {title}
          </h1>
          <p className="text-white/80 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {tags.split(',').map(t => (
              <span key={t} className="px-4 py-1.5 rounded-full text-xs font-bold bg-white/15 text-white/85 tracking-wide uppercase">
                {t.trim()}
              </span>
            ))}
          </div>
        </div>

        {/* Hero image (always shown) */}
        <div className="container mx-auto px-6 md:px-12 pb-6 max-w-3xl">
          <div className="rounded-[2rem] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-64 md:h-96 object-cover block"
            />
          </div>
        </div>

        {/* Intro video (PBN, EmsXchange) */}
        {introVideo && (
          <div className="container mx-auto px-6 md:px-12 pb-14 max-w-3xl">
            <VideoSlot video={introVideo} dark poster={image} />
          </div>
        )}

        {/* Multiple stacked videos (Bluechip) */}
        {videos && videos.length > 0 && (
          <div className="container mx-auto px-6 md:px-12 pb-14 max-w-4xl space-y-6">
            {videos.map((v, i) => (
              <VideoSlot key={i} video={v} dark poster={image} />
            ))}
          </div>
        )}
      </div>

      {/* ═══════════════════════════════════════════════════════
          WHITE TEXT SECTIONS
      ═══════════════════════════════════════════════════════ */}
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
              {results.map((result, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#5c0386] text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">{result}</p>
                </li>
              ))}
            </ul>
          </div>

          {businessImpact && (
            <div className="bg-[#f3eeff] rounded-[2rem] p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-black text-[#5c0386] mb-5">Business Impact</h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">{businessImpact}</p>
            </div>
          )}

        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          ADDITIONAL SECTIONS (images, sketches, campaign designs)
          Each section alternates white / light-grey background
      ═══════════════════════════════════════════════════════ */}
      {additionalSections && additionalSections.map((section, index) => (
        <div
          key={index}
          className={`py-14 md:py-20 px-6 md:px-12 ${index % 2 === 0 ? 'bg-[#F9F9F9]' : 'bg-white'}`}
        >
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-black text-geko-dark mb-3">
              {section.title}
            </h2>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10">
              {section.description}
            </p>

            {/* Grid layout driven by section.grid */}
            <div
              className={
                section.grid === '2col'
                  ? 'grid grid-cols-2 gap-4 md:gap-6'
                  : section.grid === '3col'
                  ? 'grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5'
                  : 'space-y-6'
              }
            >
              {section.images.map((img, imgIndex) => (
                <div
                  key={imgIndex}
                  className={`rounded-2xl overflow-hidden bg-gray-200 ${
                    section.grid === '2col' ? 'aspect-[4/3]' :
                    section.grid === '3col' ? 'aspect-square' : ''
                  }`}
                >
                  <img
                    src={img}
                    alt={`${section.title} ${imgIndex + 1}`}
                    className="w-full h-full object-cover block"
                    onError={(e) => {
                      // If image not yet uploaded, show a subtle placeholder
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.img-placeholder')) {
                        const ph = document.createElement('div');
                        ph.className = 'img-placeholder w-full h-full min-h-[120px] flex items-center justify-center';
                        ph.innerHTML = `<p style="font-size:11px;color:#aaa;text-align:center;padding:8px;">Upload: ${img}</p>`;
                        parent.appendChild(ph);
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* ═══════════════════════════════════════════════════════
          FINAL VIDEO (PBN only)
          Shown after all additionalSections on a white background
      ═══════════════════════════════════════════════════════ */}
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

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, X, ArrowLeft, ArrowRight } from 'lucide-react';

const reviews = [
  {
    text: "The talent we hired from Sleeka blended seamlessly into our team. He handled design, animation, and video editing with impressive speed and quality, saving us both time and budget.",
    author: "Emmanuel Okoye",
    role: "CEO, Felicia Transport",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    text: "Our engagement rate jumped by 38% after Sleeka took over design and motion graphics. Reliable turnaround, zero creative burnout on our end.",
    author: "Joy Chinwe",
    role: "Growth Manager, Atlas",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    text: "We scaled our creative output overnight. No hiring stress, no onboarding delays — Sleeka just plugged in and executed. In just 45 days, our output doubled, and conversions jumped 23%, adding $25,000 in Q3 revenue.",
    author: "Adelewa Segun",
    role: "Head of Marketing, Cardiff",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

const AUTO_DELAY = 9000;

export const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);
  const [video, setVideo] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = reviews.length;

  const go = useCallback((dir: 1 | -1) => {
    setActive(prev => (prev + dir + total) % total);
  }, [total]);

  useEffect(() => {
    if (paused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => go(1), AUTO_DELAY);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [active, paused, go]);

  return (
    <section
      className="bg-[#5c0386] py-32 relative overflow-hidden text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setTimeout(() => setPaused(false), 1200)}
    >
      <style>{`
        .slk-track {
          display: flex;
          transition: transform 700ms cubic-bezier(0.77,0,0.18,1);
          will-change: transform;
        }
        .slk-card-wrap {
          flex: 0 0 100%;
          padding: 0 8px;
        }
        @media (min-width: 768px) {
          .slk-card-wrap { flex: 0 0 72%; padding: 0 16px; }
        }
        @keyframes slk-bar {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .slk-bar {
          transform-origin: left;
          animation: slk-bar ${AUTO_DELAY}ms linear forwards;
        }
        .slk-bar-paused { animation-play-state: paused; }
      `}</style>

      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-white opacity-[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-geko-accent opacity-[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header + nav */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight max-w-xl">
            What our Clients Say
          </h2>
          <div className="flex items-center gap-3">
            <span className="text-white/30 text-sm font-mono tabular-nums mr-1 select-none">
              {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <button
              onClick={() => go(-1)}
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => go(1)}
              className="w-11 h-11 rounded-full bg-[#47ff01] flex items-center justify-center text-[#5c0386] hover:scale-110 transition-transform duration-200"
              aria-label="Next testimonial"
            >
              <ArrowRight size={16} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden -mx-4 md:-mx-0">
          <div
            className="slk-track"
            style={{
              transform: `translateX(${
                typeof window !== 'undefined' && window.innerWidth >= 768
                  ? `calc(14% + ${-active * 72}%)`
                  : `${-active * 100}%`
              })`,
            }}
          >
            {reviews.map((r, i) => (
              <div key={i} className="slk-card-wrap">
                <div
                  className="bg-white text-geko-dark rounded-[2.5rem] p-8 md:p-12 shadow-2xl transition-all duration-700"
                  style={{
                    opacity:   i === active ? 1 : 0.4,
                    transform: i === active ? 'scale(1)' : 'scale(0.95)',
                  }}
                >
                  <span className="text-6xl font-serif font-bold leading-none block mb-5 text-[#47ff01] h-8 overflow-visible">"</span>
                  <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-geko-dark">
                    {r.text}
                  </p>
                  <div className="border-t border-gray-100 pt-6 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-lg text-geko-dark">{r.author}</h4>
                      <p className="text-sm text-gray-500 mt-0.5">{r.role}</p>
                    </div>
                    <button
                      onClick={() => setVideo(r.videoUrl)}
                      className="relative w-12 h-12 flex-shrink-0 rounded-full bg-[#47ff01] flex items-center justify-center hover:scale-110 transition-transform"
                      aria-label="Watch video testimonial"
                    >
                      <div className="absolute inset-0 rounded-full bg-[#47ff01] animate-ping opacity-60" />
                      <Play size={18} className="text-[#5c0386] fill-[#5c0386] relative z-10 ml-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress bar — no text, just the visual bar */}
        <div className="max-w-md mx-auto mt-8">
          <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
            <div
              key={`${active}-${paused}`}
              className={`slk-bar h-full bg-[#47ff01] rounded-full ${paused ? 'slk-bar-paused' : ''}`}
            />
          </div>
        </div>

      </div>

      {/* Video Modal */}
      {video && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <button
              onClick={() => setVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#47ff01] transition-colors"
            >
              <X size={32} />
            </button>
            <iframe
              src={video}
              className="w-full h-full rounded-2xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

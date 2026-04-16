import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, X, ArrowLeft, ArrowRight } from 'lucide-react';

const reviews = [
  {
    text: "The talent we hired from Sleeka blended seamlessly into our team. He handled design, animation, and video editing with impressive speed and quality, saving us both time and budget.",
    author: "Emmanuel Okoye",
    role: "CEO, Felicia Transport",
    rating: 5,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    text: "Our engagement rate jumped by 38% after Sleeka took over design and motion graphics. Reliable turnaround, zero creative burnout on our end.",
    author: "Joy Chinwe",
    role: "Growth Manager, Atlas",
    rating: 5,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    text: "We scaled our creative output overnight. No hiring stress, no onboarding delays — Sleeka just plugged in and executed. In just 45 days, our output doubled, and conversions jumped 23%, adding $25,000 in Q3 revenue.",
    author: "Adelewa Segun",
    role: "Head of Marketing, Cardiff",
    rating: 5,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

/*
  Animation: "Card Deal"
  - EXIT:   current card flings away — slides right + rotates + fades out (fast, 320ms)
  - ENTER:  next card shoots in from LEFT — overshoots slightly then settles (spring bounce, 420ms)
  - Going backward: mirrors the direction
  Keys: direction (-1 = prev, 1 = next) drives the exit/enter sides
*/

type Phase = 'idle' | 'exit' | 'enter';

export const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>('idle');
  const [direction, setDirection] = useState<1 | -1>(1);
  const [nextIndex, setNextIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navigate = useCallback((dir: 1 | -1) => {
    if (phase !== 'idle') return;
    const next = (index + dir + reviews.length) % reviews.length;
    setDirection(dir);
    setNextIndex(next);
    setPhase('exit');
  }, [phase, index]);

  // Auto-advance every 5s
  useEffect(() => {
    timerRef.current = setTimeout(() => navigate(1), 5000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [index, navigate]);

  // Phase sequencing
  useEffect(() => {
    if (phase === 'exit') {
      // After exit anim completes, swap card and start enter
      const t = setTimeout(() => {
        setIndex(nextIndex);
        setPhase('enter');
      }, 340);
      return () => clearTimeout(t);
    }
    if (phase === 'enter') {
      const t = setTimeout(() => setPhase('idle'), 450);
      return () => clearTimeout(t);
    }
  }, [phase, nextIndex]);

  // Dynamic inline styles for each phase
  const cardStyle = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      transition: 'none',
      willChange: 'transform, opacity',
    };

    if (phase === 'idle') {
      return { ...base, transform: 'translateX(0) rotate(0deg)', opacity: 1, transition: 'none' };
    }
    if (phase === 'exit') {
      // Flings out to the opposite direction of travel
      const xOut = direction === 1 ? '110%' : '-110%';
      const rot = direction === 1 ? '8deg' : '-8deg';
      return {
        ...base,
        transform: `translateX(${xOut}) rotate(${rot})`,
        opacity: 0,
        transition: 'transform 320ms cubic-bezier(0.55, 0, 1, 0.45), opacity 280ms ease',
      };
    }
    if (phase === 'enter') {
      // Snaps in from opposite side, slightly overshoots then settles
      return {
        ...base,
        transform: 'translateX(0) rotate(0deg)',
        opacity: 1,
        transition: 'transform 440ms cubic-bezier(0.18, 1.4, 0.4, 1), opacity 200ms ease',
        // Card starts from off-screen (set via keyframe override below)
      };
    }
    return base;
  };

  // Entry start position (applied for 1 frame before enter transition fires)
  const enterStartStyle: React.CSSProperties = phase === 'enter'
    ? {}
    : {};

  const review = reviews[index];

  return (
    <section className="bg-geko-dark py-32 relative overflow-hidden text-white">
      <style>{`
        @keyframes slk-enter-left {
          from { transform: translateX(-100%) rotate(-6deg); opacity: 0; }
          to   { transform: translateX(0)    rotate(0deg);   opacity: 1; }
        }
        @keyframes slk-enter-right {
          from { transform: translateX(100%) rotate(6deg);  opacity: 0; }
          to   { transform: translateX(0)    rotate(0deg);  opacity: 1; }
        }
        @keyframes slk-exit-right {
          from { transform: translateX(0)    rotate(0deg);   opacity: 1; }
          to   { transform: translateX(110%) rotate(8deg);   opacity: 0; }
        }
        @keyframes slk-exit-left {
          from { transform: translateX(0)    rotate(0deg);   opacity: 1; }
          to   { transform: translateX(-110%) rotate(-8deg); opacity: 0; }
        }
        .slk-card-exit-right {
          animation: slk-exit-right 320ms cubic-bezier(0.55,0,1,0.45) forwards;
        }
        .slk-card-exit-left {
          animation: slk-exit-left 320ms cubic-bezier(0.55,0,1,0.45) forwards;
        }
        .slk-card-enter-left {
          animation: slk-enter-left 440ms cubic-bezier(0.18,1.4,0.4,1) forwards;
        }
        .slk-card-enter-right {
          animation: slk-enter-right 440ms cubic-bezier(0.18,1.4,0.4,1) forwards;
        }
      `}</style>

      {/* Background glows */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-white opacity-[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-geko-accent opacity-[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header + Nav arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight max-w-xl">
            What our Clients Say
          </h2>

          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Counter */}
            <span className="text-white/30 text-sm font-mono mr-2 select-none">
              {String(index + 1).padStart(2, '0')} / {String(reviews.length).padStart(2, '0')}
            </span>

            <button
              onClick={() => navigate(-1)}
              disabled={phase !== 'idle'}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all duration-200 disabled:opacity-30"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => navigate(1)}
              disabled={phase !== 'idle'}
              className="w-12 h-12 rounded-full bg-[#47ff01] flex items-center justify-center text-[#5c0386] hover:scale-110 transition-all duration-200 disabled:opacity-30"
              aria-label="Next testimonial"
            >
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Card stage — overflow hidden clips the fling animation */}
        <div
          className="relative overflow-hidden"
          style={{ minHeight: '320px' }}
        >
          <div
            key={`${index}-${phase}`}
            className={`
              ${phase === 'exit' && direction === 1  ? 'slk-card-exit-right'  : ''}
              ${phase === 'exit' && direction === -1 ? 'slk-card-exit-left'   : ''}
              ${phase === 'enter' && direction === 1 ? 'slk-card-enter-right' : ''}
              ${phase === 'enter' && direction === -1? 'slk-card-enter-left'  : ''}
              max-w-2xl mx-auto
            `}
          >
            <div className="bg-white text-geko-dark rounded-[2.5rem] p-10 md:p-12 shadow-2xl">

              {/* Opening quote */}
              <span className="text-6xl font-serif font-bold leading-none block mb-6 text-[#47ff01] h-8 overflow-visible">
                "
              </span>

              {/* Review text */}
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-geko-dark">
                {review.text}
              </p>

              {/* Author + video button */}
              <div className="border-t border-gray-100 pt-6 flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-lg text-geko-dark">{review.author}</h4>
                  <p className="text-sm text-gray-500 mt-0.5">{review.role}</p>
                </div>

                <button
                  onClick={() => setSelectedVideo(review.videoUrl)}
                  className="relative w-12 h-12 flex-shrink-0 rounded-full bg-[#47ff01] flex items-center justify-center hover:scale-110 transition-transform group"
                  aria-label="Watch video testimonial"
                >
                  <div className="absolute inset-0 rounded-full bg-[#47ff01] animate-ping opacity-60" />
                  <Play size={18} className="text-[#5c0386] fill-[#5c0386] relative z-10 ml-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Progress bar — thin green line that resets on each slide */}
        <div className="max-w-2xl mx-auto mt-6">
          <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
            <div
              key={index}
              className="h-full bg-[#47ff01] rounded-full"
              style={{
                animation: 'slk-progress 5s linear forwards',
              }}
            />
          </div>
          <style>{`
            @keyframes slk-progress {
              from { width: 0%; }
              to   { width: 100%; }
            }
          `}</style>
        </div>

      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#47ff01] transition-colors"
            >
              <X size={32} />
            </button>
            <iframe
              src={selectedVideo}
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

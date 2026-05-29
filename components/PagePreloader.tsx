import React, { useEffect, useState } from 'react';

// Faster preloader for secondary pages (CI, FAQ, Packages)
// 1.2s vs 2s on home — pages load quicker, feel snappy
export const PagePreloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsExiting(true), 1200);
    const removeTimer = setTimeout(() => setIsLoading(false), 2000);
    return () => { clearTimeout(timer); clearTimeout(removeTimer); };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-geko-dark flex items-center justify-center transition-transform duration-[800ms] ease-in-out ${
        isExiting ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className={`text-center transition-all duration-500 ${isExiting ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
        <div className="mb-8 animate-pulse">
          <img src="/assets/1.png" alt="Sleeka" className="h-16 md:h-20 w-auto mx-auto" />
        </div>
        <p className="text-white/70 mt-6 text-sm tracking-wider">Loading...</p>
      </div>
    </div>
  );
};

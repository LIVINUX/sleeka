import React, { useEffect, useState } from 'react';

export const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-geko-dark flex items-center justify-center transition-opacity duration-500">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8 animate-pulse">
          <img 
            src="/assets/1.png" 
            alt="Sleeka" 
            className="h-16 md:h-20 w-auto mx-auto"
          />
        </div>
        
        
        {/* Loading text */}
        <p className="text-white/70 mt-6 text-sm tracking-wider">Loading...</p>
      </div>
    </div>
  );
};

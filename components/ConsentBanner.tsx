import React, { useState, useEffect } from 'react';

interface ConsentBannerProps {
  onNavigateToPrivacy?: () => void;
}

export const ConsentBanner: React.FC<ConsentBannerProps> = ({ onNavigateToPrivacy }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('sleeka_consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('sleeka_consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('sleeka_consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9998] px-4 pb-4">
      <div
        className="max-w-2xl mx-auto rounded-2xl p-5 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4"
        style={{ backgroundColor: '#1a1a2e', border: '1px solid rgba(92,3,134,0.4)' }}
      >
        <p className="text-white/80 text-sm leading-relaxed flex-1">
          We use cookies to improve your experience on our site. By continuing, you agree to our{' '}
          <button onClick={onNavigateToPrivacy} className="text-[#47ff01] font-semibold hover:underline">
            Privacy Policy
          </button>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 rounded-full text-sm font-semibold text-white/60 hover:text-white transition-colors border border-white/20"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 rounded-full text-sm font-bold transition-all hover:scale-105"
            style={{ backgroundColor: '#47ff01', color: '#000' }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

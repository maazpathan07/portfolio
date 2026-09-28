import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;

      if (windowHeight > 0) {
        const scrollPercent = (totalScroll / windowHeight) * 100;
        setProgress(Math.min(100, Math.max(0, scrollPercent)));
      }

      setIsVisible(totalScroll > 320);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // SVG Circle parameters for progress ring
  const size = 44;
  const strokeWidth = 2.5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-400 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
          : 'opacity-0 translate-y-6 pointer-events-none scale-90'
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Scroll back to top of page"
        className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-[#12121A]/90 hover:bg-[#1A1A26] border border-white/10 hover:border-[#8B5CF6]/60 backdrop-blur-xl text-[#A1A1AA] hover:text-white shadow-[0_8px_24px_rgba(0,0,0,0.5),0_0_15px_rgba(139,92,246,0.2)] hover:shadow-[0_8px_30px_rgba(139,92,246,0.35)] transition-all duration-300 active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
      >
        {/* SVG Circular Progress Ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
          viewBox={`0 0 ${size} ${size}`}
        >
          {/* Background Track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth={strokeWidth}
          />
          {/* Active Gradient Progress Stroke */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="url(#scrollProgressGradient)"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-150 ease-out"
          />
          <defs>
            <linearGradient id="scrollProgressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#A78BFA" />
            </linearGradient>
          </defs>
        </svg>

        {/* Arrow Icon */}
        <ArrowUp
          size={16}
          className="relative z-10 text-[#A78BFA] group-hover:text-white group-hover:-translate-y-0.5 transition-all duration-200"
        />
      </button>
    </div>
  );
};

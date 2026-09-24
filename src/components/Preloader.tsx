import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Elegant fast timer
    const timer1 = setTimeout(() => {
      setFade(true);
    }, 1100);

    const timer2 = setTimeout(() => {
      onComplete();
    }, 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF8F5] text-[#1A1817] transition-opacity duration-500 ${
        fade ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center px-6 text-center">
        {/* Animated Brand Emblem */}
        <div className="relative mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#E8D5C8] via-[#F3EFE9] to-[#D4B8A5] flex items-center justify-center shadow-md animate-pulse">
            <Sparkles className="w-8 h-8 text-[#A67C52]" />
          </div>
          <div className="absolute -inset-1 rounded-full border border-[#D4B8A5]/40 animate-ping opacity-75" />
        </div>

        {/* Wordmark */}
        <h1 className="font-serif text-3xl sm:text-4xl tracking-tight text-[#1A1817] font-semibold">
          Owen4Nails
        </h1>

        {/* Tagline */}
        <p className="mt-2 text-xs uppercase tracking-widest text-[#A67C52] font-medium">
          Wuse 2 • Abuja
        </p>

        {/* Delicate loading bar */}
        <div className="w-36 h-[2px] bg-[#E8D5C8]/50 mt-6 overflow-hidden rounded-full relative">
          <div className="absolute inset-y-0 left-0 bg-[#A67C52] w-full animate-[shimmer_1.2s_infinite]" />
        </div>
      </div>
    </div>
  );
};

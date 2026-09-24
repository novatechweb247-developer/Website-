import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const statusMessages = [
    'Curating nail artistry...',
    'Polishing perfection...',
    'Preparing beauty studio...',
    'Owen4Nails • Wuse 2, Abuja',
  ];

  const brandName = 'Owen4Nails'.split('');

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 28);

    const statusInterval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statusMessages.length);
    }, 450);

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 1800);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2300);

    return () => {
      clearInterval(progressInterval);
      clearInterval(statusInterval);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF8F5] text-[#1A1817] overflow-hidden"
        >
          {/* Subtle background ambient pulses */}
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.2, 0.45, 0.2],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-96 h-96 rounded-full bg-gradient-to-tr from-[#E8D5C8] via-[#D4B8A5] to-[#F3EFE9] blur-3xl pointer-events-none"
          />

          <div className="relative z-10 flex flex-col items-center px-6 text-center max-w-sm">
            
            {/* Animated Logo Ring */}
            <div className="relative mb-8 flex items-center justify-center">
              {/* Outer rotating dashed gold ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-full border-2 border-dashed border-[#A67C52]/40"
              />

              {/* Pulsing glow ring */}
              <motion.div
                animate={{ scale: [0.95, 1.1, 0.95] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#E8D5C8] to-[#D4B8A5] opacity-60 blur-md"
              />

              {/* Core Badge */}
              <div className="relative w-20 h-20 rounded-full bg-[#FAF8F5] border-2 border-[#E8D5C8] flex items-center justify-center shadow-xl">
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Sparkles className="w-9 h-9 text-[#A67C52]" />
                </motion.div>
              </div>
            </div>

            {/* Staggered Wordmark Letter Entrance */}
            <div className="flex items-center justify-center space-x-0.5 overflow-hidden py-1 mb-2">
              {brandName.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 40, opacity: 0, rotateX: 90 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1817] inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="text-[11px] uppercase tracking-[0.25em] text-[#A67C52] font-semibold mb-6"
            >
              Wuse 2 • Abuja • Nigeria
            </motion.p>

            {/* Progress Percentage Display */}
            <div className="w-full space-y-2">
              <div className="flex items-center justify-between text-xs text-[#6B6560] font-mono tabular-nums">
                <span className="font-sans text-[11px] font-medium text-[#2D2825] h-4">
                  {statusMessages[statusIndex]}
                </span>
                <span className="font-bold text-[#A67C52]">{progress}%</span>
              </div>

              {/* Progress Line Bar */}
              <div className="w-full h-[3px] bg-[#E8D5C8]/40 rounded-full overflow-hidden relative">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#D4B8A5] via-[#A67C52] to-[#1A1817] rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>
            </div>

            {/* Quick Skip button if user prefers instant view */}
            <button
              onClick={onComplete}
              className="mt-8 text-[10px] font-semibold uppercase tracking-wider text-[#A67C52] hover:text-[#1A1817] underline underline-offset-4 transition-colors"
            >
              Enter Site
            </button>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

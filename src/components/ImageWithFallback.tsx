import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  aspectRatioClass?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle,
  aspectRatioClass = '',
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${aspectRatioClass} bg-[#F3EFE9]`}>
      {/* Loading state shimmer */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 animate-shimmer flex items-center justify-center z-10">
          <Sparkles className="w-6 h-6 text-[#D4B8A5]/60 animate-pulse" />
        </div>
      )}

      {/* Actual image */}
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          className={`${className} ${isLoading ? 'opacity-0 scale-98' : 'opacity-100 scale-100'} transition-all duration-500`}
          {...props}
        />
      ) : (
        /* Styled CSS Fallback container */
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAF8F5] via-[#F3EFE9] to-[#E8D5C8]/40 flex flex-col items-center justify-center p-6 text-center border border-[#E8D5C8]/50">
          <div className="w-12 h-12 rounded-full bg-[#E8D5C8]/40 flex items-center justify-center mb-3 text-[#A67C52]">
            <Sparkles className="w-6 h-6" />
          </div>
          <span className="font-serif text-lg font-semibold text-[#1A1817]">
            {fallbackTitle || 'Owen4Nails'}
          </span>
          <span className="text-xs text-[#6B6560] mt-1 font-sans">
            Professional Nail Art & Care
          </span>
        </div>
      )}
    </div>
  );
};

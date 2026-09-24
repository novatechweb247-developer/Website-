import React from 'react';
import { X, MessageSquare, Sparkles, Tag } from 'lucide-react';
import { GalleryItem } from '../types';
import { getWhatsAppUrl } from '../data/business';
import { ImageWithFallback } from './ImageWithFallback';

interface GalleryLightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1A1817]/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Lightbox Content Container */}
      <div className="relative z-10 bg-[#FAF8F5] rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl border border-[#E8D5C8] grid grid-cols-1 md:grid-cols-12 max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#1A1817]/70 text-white hover:bg-[#1A1817] transition-colors"
          aria-label="Close image lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Container */}
        <div className="md:col-span-7 bg-[#1A1817] flex items-center justify-center relative overflow-hidden min-h-[280px] sm:min-h-[400px]">
          <ImageWithFallback
            src={item.image}
            alt={item.title}
            aspectRatioClass="w-full h-full min-h-[300px]"
            className="w-full h-full object-contain max-h-[80vh]"
            fallbackTitle={item.title}
          />
        </div>

        {/* Info Column */}
        <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto">
          <div className="space-y-4">
            
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EFE9] border border-[#E8D5C8] text-xs font-semibold text-[#A67C52]">
                <Tag className="w-3 h-3" />
                {item.category}
              </span>
              <span className="text-xs text-[#6B6560]">
                {item.tag}
              </span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#1A1817]">
              {item.title}
            </h3>

            <p className="text-sm text-[#524B46] leading-relaxed">
              {item.description}
            </p>

            <div className="p-4 rounded-2xl bg-[#F3EFE9]/70 border border-[#E8D5C8]/60 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1A1817]">
                <Sparkles className="w-3.5 h-3.5 text-[#A67C52]" />
                <span>Owen4Nails Service Guarantee</span>
              </div>
              <p className="text-[11px] text-[#6B6560]">
                Personalized nail technician care in Wuse 2, Abuja. Inquire directly on WhatsApp to request this style or custom variation.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#E8D5C8]/60 space-y-3">
            <a
              href={getWhatsAppUrl(`Hello Owen4Nails, I saw the photo "${item.title}" (${item.category}) in your gallery and would like to inquire about getting a similar service.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-5 text-xs font-bold uppercase tracking-wider text-white bg-[#1A1817] hover:bg-[#383330] rounded-full shadow-md transition-all"
            >
              <MessageSquare className="w-4 h-4 text-[#E8D5C8]" />
              <span>Book This Look on WhatsApp</span>
            </a>

            <button
              onClick={onClose}
              className="w-full py-2 text-xs font-medium text-[#6B6560] hover:text-[#1A1817] transition-colors"
            >
              Back to Gallery
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

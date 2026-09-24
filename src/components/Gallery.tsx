import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/business';
import { GalleryItem } from '../types';
import { GalleryLightbox } from './GalleryLightbox';
import { ImageWithFallback } from './ImageWithFallback';
import { Eye, Sparkles } from 'lucide-react';
import { ScrollPop, ScrollStaggerContainer, ScrollStaggerItem } from './ScrollPop';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Nail Art', 'Manicures', 'Pedicures', 'Foot Care'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-[#F3EFE9] relative border-t border-[#E8D5C8]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollPop scaleStart={0.9} className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#A67C52]">
            Studio Showcase
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1817] [text-wrap:balance]">
            Nail Art & Beauty Gallery
          </h2>
          <p className="text-base text-[#524B46]">
            Explore custom nail artistry, clean manicures, and soothing pedicure care created by Owen4Nails.
          </p>
        </ScrollPop>

        {/* Category Interactive Filter Tabs */}
        <ScrollPop delay={0.15} scaleStart={0.95}>
          <div className="flex items-center justify-center flex-wrap gap-2 mb-12 p-1.5 bg-[#FAF8F5] rounded-full border border-[#E8D5C8] w-fit mx-auto shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-xs font-semibold rounded-full transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#1A1817] text-white shadow-xs'
                    : 'text-[#524B46] hover:text-[#1A1817] hover:bg-[#E8D5C8]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollPop>

        {/* Responsive Gallery Grid with Stagger Pop-Up */}
        <ScrollStaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <ScrollStaggerItem key={item.id}>
              <div
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer bg-[#FAF8F5] rounded-3xl overflow-hidden border border-[#E8D5C8] shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    aspectRatioClass="w-full h-full"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    fallbackTitle={item.title}
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1817]/80 via-[#1A1817]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="flex items-center justify-between text-white">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-[#E8D5C8]">
                          {item.category}
                        </span>
                        <h4 className="font-serif text-lg font-bold text-white leading-tight">
                          {item.title}
                        </h4>
                      </div>
                      <div className="p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white">
                        <Eye className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider bg-[#FAF8F5]/90 backdrop-blur-md text-[#1A1817] rounded-full border border-[#E8D5C8]">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Title under image */}
                <div className="p-4 bg-[#FAF8F5] flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#1A1817] group-hover:text-[#A67C52] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#6B6560] line-clamp-1">
                      {item.description}
                    </p>
                  </div>
                  <Sparkles className="w-4 h-4 text-[#A67C52] shrink-0 ml-2" />
                </div>
              </div>
            </ScrollStaggerItem>
          ))}
        </ScrollStaggerContainer>

      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
};

import React from 'react';
import { SERVICES, getWhatsAppUrl } from '../data/business';
import { Sparkles, Hand, Footprints, Heart, MessageCircleHeart, Check, MessageSquare } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#A67C52]" />;
      case 'Hand':
        return <Hand className="w-5 h-5 text-[#A67C52]" />;
      case 'Footprints':
        return <Footprints className="w-5 h-5 text-[#A67C52]" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-[#A67C52]" />;
      case 'MessageCircleHeart':
        return <MessageCircleHeart className="w-5 h-5 text-[#A67C52]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#A67C52]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#A67C52]">
            Our Services
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1817] [text-wrap:balance]">
            Expert Beauty & Nail Care
          </h2>
          <p className="text-base text-[#524B46]">
            Every service at Owen4Nails is provided with dedicated attention, quality care, and artistic precision in Wuse 2, Abuja.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`group bg-[#FAF8F5] rounded-3xl overflow-hidden border border-[#E8D5C8]/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Image Header */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <ImageWithFallback
                  src={service.image}
                  alt={service.name}
                  aspectRatioClass="w-full h-full"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  fallbackTitle={service.name}
                />
                <div className="absolute top-4 left-4 p-2.5 rounded-full bg-[#FAF8F5]/90 backdrop-blur-md shadow-xs border border-[#E8D5C8]">
                  {getIcon(service.iconName)}
                </div>
              </div>

              {/* Service Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl font-bold text-[#1A1817]">
                    {service.name}
                  </h3>
                  <p className="text-sm text-[#524B46] leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="pt-2 space-y-2">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#2D2825]">
                        <Check className="w-3.5 h-3.5 text-[#A67C52] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Button */}
                <div className="pt-4 border-t border-[#E8D5C8]/40">
                  <a
                    href={getWhatsAppUrl(`Hello Owen4Nails, I would like to inquire about booking: ${service.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#1A1817] bg-[#F3EFE9] hover:bg-[#1A1817] hover:text-white border border-[#E8D5C8] rounded-full transition-all duration-300"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#A67C52] group-hover:text-[#E8D5C8]" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

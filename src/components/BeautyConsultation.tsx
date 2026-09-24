import React from 'react';
import { MessageCircleHeart, Sparkles, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl } from '../data/business';
import { ImageWithFallback } from './ImageWithFallback';
import consultationImg from '../assets/images/about_beauty_consultation_1790273252146.jpg';

export const BeautyConsultation: React.FC = () => {
  return (
    <section className="py-20 bg-[#F3EFE9] border-y border-[#E8D5C8]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-12 border border-[#E8D5C8] shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Image side */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-md">
            <ImageWithFallback
              src={consultationImg}
              alt="Personalized Beauty Consultation at Owen4Nails Wuse 2 Abuja"
              aspectRatioClass="aspect-[4/3]"
              className="w-full h-full object-cover"
              fallbackTitle="Owen4Nails Consultation"
            />
          </div>

          {/* Text side */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3EFE9] border border-[#E8D5C8] text-xs font-semibold text-[#A67C52]">
              <MessageCircleHeart className="w-3.5 h-3.5" />
              <span>Personalized Beauty & Nail Health</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1817] [text-wrap:balance]">
              Personalized Beauty Consultations
            </h2>

            <p className="text-base text-[#524B46] leading-relaxed">
              Not sure which nail shape, art design, or foot care treatment suits you best? Owen4Nails offers 1-on-1 consultations to assess your natural nail condition, discuss color palettes, and recommend tailored care routines for your lifestyle.
            </p>

            <div className="space-y-2.5 text-xs text-[#2D2825]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#A67C52]" />
                <span>Nail health analysis & shape recommendation</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#A67C52]" />
                <span>Custom color palette and art design consultation</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#A67C52]" />
                <span>At-home cuticle and hydration maintenance guidance</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl("Hello Owen4Nails, I would like to request a Beauty Consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white bg-[#1A1817] hover:bg-[#383330] rounded-full shadow-md transition-all duration-300"
              >
                <Sparkles className="w-4 h-4 text-[#E8D5C8]" />
                <span>Talk to Owen4Nails</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

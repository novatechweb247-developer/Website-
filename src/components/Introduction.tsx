import React from 'react';
import { Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const Introduction: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#F3EFE9] border-y border-[#E8D5C8]/60 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF8F5] border border-[#E8D5C8] text-xs font-semibold text-[#A67C52]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Personal Beauty & Foot Care</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1817] leading-tight [text-wrap:balance]">
            Dedicated Personal Care & Precision Nail Artistry
          </h2>

          <p className="text-base sm:text-lg text-[#524B46] max-w-3xl mx-auto leading-relaxed font-sans">
            {BUSINESS_INFO.name} is a personal beauty and nail-care service operating in Wuse 2, Abuja. We specialize in professional nail artistry, meticulously executed manicures, refreshing pedicures, deep foot care, and customized beauty consultations.
          </p>

          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
            <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8D5C8]/80 shadow-xs">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="w-5 h-5 text-[#A67C52]" />
                <h3 className="font-serif font-bold text-lg text-[#1A1817]">Nail Artistry</h3>
              </div>
              <p className="text-xs text-[#6B6560] leading-relaxed">
                Tailored nail art designs crafted with fine attention to color, shape, and aesthetic detail.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8D5C8]/80 shadow-xs">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="w-5 h-5 text-[#A67C52]" />
                <h3 className="font-serif font-bold text-lg text-[#1A1817]">Hands & Feet Care</h3>
              </div>
              <p className="text-xs text-[#6B6560] leading-relaxed">
                Hygienic manicures, restorative pedicures, and soothing treatments for healthy hands and feet.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8D5C8]/80 shadow-xs">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="w-5 h-5 text-[#A67C52]" />
                <h3 className="font-serif font-bold text-lg text-[#1A1817]">Personalized Touch</h3>
              </div>
              <p className="text-xs text-[#6B6560] leading-relaxed">
                Attentive 1-on-1 consultations in a quiet, welcoming setting located in Wuse 2, Abuja.
              </p>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-center gap-2 text-xs font-medium text-[#2D2825]">
            <MapPin className="w-4 h-4 text-[#A67C52]" />
            <span>Located at {BUSINESS_INFO.location.address}</span>
          </div>

        </div>
      </div>
    </section>
  );
};

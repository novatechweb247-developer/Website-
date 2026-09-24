import React from 'react';
import { WHY_CHOOSE_US } from '../data/business';
import { ShieldCheck, UserCheck, Palette, Sparkles, MapPin } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#A67C52]" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-[#A67C52]" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-[#A67C52]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#A67C52]" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-[#A67C52]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#A67C52]" />;
    }
  };

  return (
    <section className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#A67C52]">
            The Owen4Nails Experience
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1817] [text-wrap:balance]">
            Why Choose Owen4Nails
          </h2>
          <p className="text-base text-[#524B46]">
            Every appointment is crafted with individualized attention, clean technique, and creative nail artistry in Wuse 2, Abuja.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F5] p-8 rounded-3xl border border-[#E8D5C8]/80 shadow-xs hover:border-[#A67C52]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F3EFE9] border border-[#E8D5C8] flex items-center justify-center mb-6">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1A1817] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#524B46] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8D5C8]/30 text-xs text-[#A67C52] font-medium flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Standard of Excellence</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

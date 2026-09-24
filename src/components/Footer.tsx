import React from 'react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/business';
import { MapPin, Phone, MessageSquare, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1817] text-[#FAF8F5] pt-16 pb-12 border-t border-[#383330]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#383330]">
          
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <a href="#home" className="inline-block">
              <span className="font-serif text-3xl font-bold tracking-tight text-white">
                {BUSINESS_INFO.name}
              </span>
            </a>
            
            <p className="text-xs uppercase tracking-widest text-[#E8D5C8] font-medium">
              {BUSINESS_INFO.tagline}
            </p>

            <p className="text-xs text-[#A89F97] max-w-md leading-relaxed">
              {BUSINESS_INFO.description}
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-lg font-semibold text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#C8BFB8]">
              <li>
                <a href="#home" className="hover:text-[#E8D5C8] transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#E8D5C8] transition-colors">Services</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#E8D5C8] transition-colors">Nail Art Gallery</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#E8D5C8] transition-colors">About Owen4Nails</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#E8D5C8] transition-colors">Location & Contact</a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-lg font-semibold text-white">
              Location & Phone
            </h4>
            
            <div className="space-y-2 text-xs text-[#C8BFB8]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E8D5C8] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.location.address}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E8D5C8] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-[#1A1817] bg-[#E8D5C8] hover:bg-white rounded-full transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A8179] gap-4">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[11px]">
            <Sparkles className="w-3.5 h-3.5 text-[#E8D5C8]" />
            <span>Professional Beauty & Foot Care • Wuse 2, Abuja</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

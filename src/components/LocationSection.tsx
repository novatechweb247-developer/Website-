import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { ScrollPop } from './ScrollPop';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.location.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollPop scaleStart={0.9} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#A67C52]">
            Location
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1817] [text-wrap:balance]">
            Visit Owen4Nails in Wuse 2, Abuja
          </h2>
          <p className="text-base text-[#524B46]">
            Conveniently located in Wuse 2, Abuja for your nail art, manicure, pedicure, and personal beauty care appointments.
          </p>
        </ScrollPop>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Address Details Box */}
          <div className="lg:col-span-5 h-full">
            <ScrollPop delay={0.1} scaleStart={0.9} className="h-full">
              <div className="bg-[#F3EFE9] p-8 sm:p-10 rounded-3xl border border-[#E8D5C8] shadow-xs flex flex-col justify-between space-y-8 h-full">
                <div className="space-y-6">
                  
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#E8D5C8] flex items-center justify-center text-[#A67C52]">
                    <MapPin className="w-6 h-6" />
                  </div>

                  <div>
                    <p className="text-xs uppercase font-bold tracking-wider text-[#A67C52]">
                      Address
                    </p>
                    <p className="font-serif text-2xl font-bold text-[#1A1817] mt-1">
                      6 Lobito Crescent
                    </p>
                    <p className="text-lg text-[#2D2825] font-serif">
                      Wuse 2, Abuja, Nigeria
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8D5C8]/80 text-xs text-[#524B46] space-y-2">
                    <p className="font-medium text-[#1A1817]">Business Notice:</p>
                    <p>
                      Owen4Nails provides personal beauty care and nail services by appointment. Please reach out via WhatsApp or phone call prior to visiting.
                    </p>
                  </div>

                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-[#E8D5C8]/60 space-y-3">
                  <a
                    href={BUSINESS_INFO.location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-5 text-xs font-bold uppercase tracking-wider text-white bg-[#1A1817] hover:bg-[#383330] rounded-full shadow-xs transition-all"
                  >
                    <Navigation className="w-4 h-4 text-[#E8D5C8]" />
                    <span>Open Directions in Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#E8D5C8]/80 ml-auto" />
                  </a>

                  <button
                    onClick={handleCopyAddress}
                    className="w-full flex items-center justify-center gap-2 py-3 px-5 text-xs font-semibold text-[#1A1817] bg-[#FAF8F5] hover:bg-[#E8D5C8]/40 border border-[#E8D5C8] rounded-full transition-all"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-[#A67C52]" />}
                    <span>{copied ? 'Address Copied!' : 'Copy Address'}</span>
                  </button>
                </div>

              </div>
            </ScrollPop>
          </div>

          {/* Map Interactive Visual Representation */}
          <div className="lg:col-span-7 h-full">
            <ScrollPop delay={0.2} scaleStart={0.9} className="h-full">
              <div className="bg-[#F3EFE9] rounded-3xl overflow-hidden border border-[#E8D5C8] relative shadow-xs min-h-[340px] h-full flex flex-col justify-between p-6 sm:p-8">
                
                {/* Styled Map Background */}
                <div className="absolute inset-0 bg-[#FAF7F2] opacity-90 overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#E8D5C8_1px,transparent_1px),linear-gradient(to_bottom,#E8D5C8_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />
                  <div className="absolute top-1/2 left-0 right-0 h-12 bg-[#E8D5C8]/40 transform -rotate-6" />
                  <div className="absolute top-0 bottom-0 left-1/3 w-10 bg-[#E8D5C8]/30 transform rotate-12" />
                </div>

                {/* Map Pin Anchor Card */}
                <div className="relative z-10 my-auto mx-auto bg-[#FAF8F5] p-6 rounded-3xl shadow-xl border-2 border-[#E8D5C8] max-w-sm text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#1A1817] text-[#E8D5C8] flex items-center justify-center mx-auto shadow-md animate-bounce">
                    <MapPin className="w-7 h-7 text-[#E8D5C8]" />
                  </div>

                  <div>
                    <h4 className="font-serif text-xl font-bold text-[#1A1817]">
                      Owen4Nails Studio
                    </h4>
                    <p className="text-xs text-[#6B6560] font-medium mt-1">
                      6 Lobito Crescent, Wuse 2
                    </p>
                    <p className="text-[11px] text-[#A67C52] font-semibold">
                      Abuja, Nigeria
                    </p>
                  </div>

                  <a
                    href={BUSINESS_INFO.location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1A1817] hover:text-[#A67C52] underline underline-offset-4 pt-1"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Map Footer Note */}
                <div className="relative z-10 text-center text-xs text-[#6B6560] font-sans pt-4">
                  Visit Owen4Nails in Wuse 2, Abuja.
                </div>

              </div>
            </ScrollPop>
          </div>

        </div>

      </div>
    </section>
  );
};

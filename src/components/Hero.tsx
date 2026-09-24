import React from 'react';
import { MessageSquare, ArrowRight, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/business';
import { ImageWithFallback } from './ImageWithFallback';
import { ScrollPop } from './ScrollPop';
import heroImg from '../assets/images/hero_nail_art_studio_1790273199912.jpg';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-[#FAF8F5]">
      {/* Decorative ambient glows */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#E8D5C8]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4B8A5]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 text-left">
            
            <ScrollPop delay={0.1} direction="up" scaleStart={0.92}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EFE9] border border-[#E8D5C8] w-fit text-xs font-medium text-[#2D2825]">
                <MapPin className="w-3.5 h-3.5 text-[#A67C52]" />
                <span>Wuse 2, Abuja • Personal Beauty Service</span>
              </div>
            </ScrollPop>

            <ScrollPop delay={0.2} direction="up" scaleStart={0.9}>
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1A1817] leading-[1.08] [text-wrap:balance]">
                Beautiful Nails. <br className="hidden sm:inline" />
                <span className="italic font-normal text-[#A67C52]">Beautifully Done.</span>
              </h1>
            </ScrollPop>

            <ScrollPop delay={0.3} direction="up">
              <p className="text-base sm:text-lg text-[#524B46] max-w-2xl font-sans leading-relaxed">
                Professional nail art, manicures, pedicures and personal beauty care in Wuse 2, Abuja.
              </p>
            </ScrollPop>

            <ScrollPop delay={0.4} direction="up" scaleStart={0.92}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href={getWhatsAppUrl("Hello Owen4Nails, I would like to book an appointment.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white bg-[#1A1817] hover:bg-[#383330] rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4 text-[#E8D5C8]" />
                  <span>Book an Appointment</span>
                </a>

                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-xs font-semibold uppercase tracking-wider text-[#1A1817] bg-[#F3EFE9] hover:bg-[#E8D5C8]/50 border border-[#E8D5C8] rounded-full transition-all duration-300"
                >
                  <span>View Services</span>
                  <ArrowRight className="w-4 h-4 text-[#A67C52]" />
                </a>
              </div>
            </ScrollPop>

            <ScrollPop delay={0.5} direction="up">
              <div className="pt-6 border-t border-[#E8D5C8]/50 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#6B6560]">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#A67C52] shrink-0" />
                  <span>Precision Nail Art</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#A67C52] shrink-0" />
                  <span>Hygienic Care</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <MapPin className="w-4 h-4 text-[#A67C52] shrink-0" />
                  <span>6 Lobito Crescent</span>
                </div>
              </div>
            </ScrollPop>

          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5 relative">
            <ScrollPop delay={0.25} direction="up" scaleStart={0.85}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Decorative Frame */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FAF8F5] ring-1 ring-[#E8D5C8]">
                  <ImageWithFallback
                    src={heroImg}
                    alt="Owen4Nails Professional Nail Art Showcase in Wuse 2 Abuja"
                    aspectRatioClass="aspect-[4/5]"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    fallbackTitle="Owen4Nails Beauty Studio"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1817]/60 via-transparent to-transparent pointer-events-none" />

                  {/* Card Detail */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#FAF8F5]/90 backdrop-blur-md border border-[#E8D5C8]/60 text-[#1A1817] shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-serif font-bold text-lg text-[#1A1817]">Owen4Nails</p>
                        <p className="text-xs text-[#6B6560]">Professional Nail Technician • Abuja</p>
                      </div>
                      <span className="px-3 py-1 text-[10px] font-semibold tracking-wider uppercase bg-[#E8D5C8] text-[#1A1817] rounded-full">
                        Wuse 2
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Tag */}
                <div className="absolute -top-4 -left-4 bg-[#FAF8F5] p-3 rounded-2xl shadow-lg border border-[#E8D5C8] flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#E8D5C8] flex items-center justify-center text-[#1A1817]">
                    <Sparkles className="w-4 h-4 text-[#A67C52]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#1A1817]">Personalized Beauty</p>
                    <p className="text-[10px] text-[#6B6560]">Tailored to you</p>
                  </div>
                </div>

              </div>
            </ScrollPop>
          </div>

        </div>
      </div>
    </section>
  );
};

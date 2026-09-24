import React, { useState } from 'react';
import { MessageSquare, X, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/business';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-4 w-72 bg-[#FAF8F5] p-5 rounded-3xl shadow-2xl border border-[#E8D5C8] text-[#1A1817] animate-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between border-b border-[#E8D5C8]/60 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#1A1817] text-[#E8D5C8] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#E8D5C8]" />
              </div>
              <div>
                <p className="font-serif font-bold text-sm text-[#1A1817]">Owen4Nails</p>
                <p className="text-[10px] text-[#A67C52]">Wuse 2 • Abuja</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#6B6560] hover:text-[#1A1817] p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-[#524B46] mb-4 leading-relaxed">
            Hello! Contact Owen4Nails on WhatsApp to discuss nail art, manicures, pedicures, or booking availability.
          </p>

          <a
            href={getWhatsAppUrl("Hello Owen4Nails, I am interested in booking an appointment.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#1A1817] hover:bg-[#383330] rounded-full shadow-md transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#E8D5C8]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-4 rounded-full bg-[#1A1817] text-white shadow-xl hover:bg-[#383330] transition-all duration-300 transform hover:scale-105 focus:outline-none ring-2 ring-[#E8D5C8]"
        aria-label="Open WhatsApp Chat"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#FAF8F5] animate-pulse" />
        <MessageSquare className="w-6 h-6 text-[#E8D5C8]" />
      </button>

    </div>
  );
};

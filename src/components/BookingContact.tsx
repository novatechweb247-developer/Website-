import React, { useState } from 'react';
import { MessageSquare, Phone, Calendar, Send, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, getWhatsAppUrl } from '../data/business';
import { ScrollPop } from './ScrollPop';

export const BookingContact: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('Professional Nail Art');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [customNote, setCustomNote] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMessage = `Hello Owen4Nails,\n\nI would like to inquire about an appointment:\n- Service: ${selectedService}\n- Preferred Date/Time: ${preferredDate || 'Flexible'}\n- Notes: ${customNote || 'None'}\n\nPlease let me know your availability in Wuse 2, Abuja!`;
    
    // Open WhatsApp with prefilled message
    window.open(getWhatsAppUrl(formattedMessage), '_blank');
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-[#F3EFE9] border-t border-[#E8D5C8]/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Card */}
        <ScrollPop scaleStart={0.92}>
          <div className="bg-[#FAF8F5] rounded-3xl border border-[#E8D5C8] shadow-xl p-8 sm:p-12 text-center space-y-8">
            
            <div className="space-y-4 max-w-2xl mx-auto">
              <p className="text-xs font-bold uppercase tracking-widest text-[#A67C52]">
                Bookings & Enquiries
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1817] [text-wrap:balance]">
                Ready for Your Next Nail Appointment?
              </h2>
              <p className="text-base text-[#524B46]">
                Contact Owen4Nails to discuss your preferred service and appointment.
              </p>
            </div>

            {/* Quick Direct CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={getWhatsAppUrl("Hello Owen4Nails, I would like to book an appointment.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white bg-[#1A1817] hover:bg-[#383330] rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <MessageSquare className="w-4 h-4 text-[#E8D5C8]" />
                <span>Book via WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#1A1817] bg-[#FAF8F5] hover:bg-[#E8D5C8]/40 border border-[#E8D5C8] rounded-full transition-all"
              >
                <Phone className="w-4 h-4 text-[#A67C52]" />
                <span>Call Now: {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Interactive Inquiry Form */}
            <div className="mt-10 pt-10 border-t border-[#E8D5C8]/60 text-left max-w-xl mx-auto">
              <h3 className="font-serif text-xl font-bold text-[#1A1817] text-center mb-6">
                Quick Appointment Inquiry
              </h3>

              {submitted ? (
                <div className="bg-[#F3EFE9] p-6 rounded-2xl border border-[#E8D5C8] text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#1A1817] text-[#E8D5C8] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6 text-[#E8D5C8]" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#1A1817]">Inquiry Redirected to WhatsApp</h4>
                  <p className="text-xs text-[#524B46]">
                    If WhatsApp did not open automatically, click the button below to continue chatting with Owen4Nails.
                  </p>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block pt-2 text-xs font-bold text-[#A67C52] hover:underline"
                  >
                    Open WhatsApp Directly
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmitInquiry} className="space-y-4">
                  
                  {/* Select Service */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1A1817] uppercase tracking-wider mb-1.5">
                      Select Service
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E8D5C8] rounded-xl text-sm text-[#1A1817] focus:outline-none focus:ring-2 focus:ring-[#A67C52]"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Date/Time */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1A1817] uppercase tracking-wider mb-1.5">
                      Preferred Date & Time (Optional)
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="e.g., Saturday afternoon or Tomorrow 2pm"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E8D5C8] rounded-xl text-sm text-[#1A1817] focus:outline-none focus:ring-2 focus:ring-[#A67C52]"
                      />
                      <Calendar className="w-4 h-4 text-[#A67C52] absolute right-3.5 top-3.5 pointer-events-none" />
                    </div>
                  </div>

                  {/* Special Requests or Style Notes */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1A1817] uppercase tracking-wider mb-1.5">
                      Special Notes or Preferred Style
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe your preferred nail design, length, or any questions..."
                      value={customNote}
                      onChange={(e) => setCustomNote(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E8D5C8] rounded-xl text-sm text-[#1A1817] focus:outline-none focus:ring-2 focus:ring-[#A67C52]"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-white bg-[#1A1817] hover:bg-[#383330] rounded-xl shadow-md transition-all"
                  >
                    <Send className="w-4 h-4 text-[#E8D5C8]" />
                    <span>Send Inquiry via WhatsApp</span>
                  </button>

                  <p className="text-[11px] text-center text-[#6B6560] pt-1">
                    Clicking will open WhatsApp with your pre-filled appointment request.
                  </p>

                </form>
              )}
            </div>

          </div>
        </ScrollPop>

      </div>
    </section>
  );
};

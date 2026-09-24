import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Phone } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/business';

interface HeaderProps {
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md py-3 shadow-xs border-b border-[#E8D5C8]/50'
          : 'bg-[#FAF8F5]/80 backdrop-blur-sm py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Brand Title (Single text element wordmark) */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="group flex items-center gap-2"
        >
          <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1817] group-hover:text-[#A67C52] transition-colors">
            {BUSINESS_INFO.name}
          </span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#A67C52]" />
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-sm font-medium text-[#2D2825] hover:text-[#A67C52] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#A67C52] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#1A1817] hover:bg-[#383330] rounded-full shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#E8D5C8]" />
            <span>Book Appointment</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-xs font-semibold text-white bg-[#1A1817] rounded-full"
            aria-label="Book on WhatsApp"
          >
            <MessageSquare className="w-4 h-4 text-[#E8D5C8]" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1A1817] hover:text-[#A67C52] transition-colors rounded-lg focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#FAF8F5] border-b border-[#E8D5C8] shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="px-6 pt-4 pb-6 space-y-4">
            <div className="flex flex-col space-y-3 border-b border-[#E8D5C8]/40 pb-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-base font-medium text-[#1A1817] hover:text-[#A67C52] py-1 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A1817] rounded-full shadow-xs"
              >
                <MessageSquare className="w-4 h-4 text-[#E8D5C8]" />
                <span>Book via WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-medium text-[#1A1817] bg-[#F3EFE9] border border-[#E8D5C8] rounded-full"
              >
                <Phone className="w-3.5 h-3.5 text-[#A67C52]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            <div className="pt-2 text-center text-xs text-[#6B6560]">
              {BUSINESS_INFO.location.shortAddress}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

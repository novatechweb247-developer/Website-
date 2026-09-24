import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'motion/react';
import { MessageSquare, Phone, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/business';

export const Header: React.FC = () => {
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
    { name: 'Home', href: '#home', tag: '01' },
    { name: 'Services', href: '#services', tag: '02' },
    { name: 'Gallery', href: '#gallery', tag: '03' },
    { name: 'About', href: '#about', tag: '04' },
    { name: 'Contact', href: '#contact', tag: '05' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Explicit Variants typing for Motion v12
  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      scaleY: 0.95,
      y: -20,
      transition: {
        duration: 0.35,
        ease: 'easeOut',
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      scaleY: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: 'easeOut',
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const linkVariants: Variants = {
    closed: {
      opacity: 0,
      x: -25,
      y: -10,
      rotateX: -30,
      transition: { duration: 0.25 },
    },
    open: {
      opacity: 1,
      x: 0,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
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
        
        {/* Zone 1: Brand Title */}
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

        {/* Mobile Controls & Morphing Hamburger Icon */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-xs font-semibold text-white bg-[#1A1817] rounded-full shadow-xs"
            aria-label="Book on WhatsApp"
          >
            <MessageSquare className="w-4 h-4 text-[#E8D5C8]" />
          </a>

          {/* Morphing Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative w-10 h-10 flex flex-col items-center justify-center rounded-full bg-[#F3EFE9] border border-[#E8D5C8] focus:outline-none overflow-hidden"
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: -5 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute w-5 h-[2px] bg-[#1A1817] rounded-full"
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute w-5 h-[2px] bg-[#1A1817] rounded-full"
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 5 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute w-5 h-[2px] bg-[#1A1817] rounded-full"
            />
          </button>
        </div>
      </div>

      {/* Animated Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-drawer"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden fixed inset-x-0 top-[64px] bg-[#FAF8F5]/98 backdrop-blur-xl border-b border-[#E8D5C8] shadow-2xl origin-top overflow-hidden"
          >
            <div className="px-6 pt-6 pb-8 space-y-6">
              
              {/* Menu Links with Staggered Fold-In / Out Animation */}
              <div className="flex flex-col space-y-3 border-b border-[#E8D5C8]/60 pb-6">
                {navLinks.map((link) => (
                  <motion.div key={link.name} variants={linkVariants}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className="group flex items-center justify-between py-2 text-2xl font-serif font-bold text-[#1A1817] hover:text-[#A67C52] transition-colors"
                    >
                      <span className="flex items-center gap-3">
                        <Sparkles className="w-4 h-4 text-[#A67C52] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>{link.name}</span>
                      </span>
                      <span className="text-xs font-sans text-[#A67C52] font-semibold tracking-wider">
                        {link.tag}
                      </span>
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons with Motion Entrance */}
              <motion.div
                variants={linkVariants}
                className="space-y-3 pt-1"
              >
                <a
                  href={getWhatsAppUrl("Hello Owen4Nails, I would like to book an appointment.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#1A1817] rounded-full shadow-md"
                >
                  <MessageSquare className="w-4 h-4 text-[#E8D5C8]" />
                  <span>Book via WhatsApp</span>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-[#1A1817] bg-[#F3EFE9] border border-[#E8D5C8] rounded-full"
                >
                  <Phone className="w-3.5 h-3.5 text-[#A67C52]" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </motion.div>

              <motion.div
                variants={linkVariants}
                className="flex items-center justify-center gap-2 text-xs text-[#6B6560] pt-2"
              >
                <MapPin className="w-3.5 h-3.5 text-[#A67C52]" />
                <span>{BUSINESS_INFO.location.shortAddress}</span>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

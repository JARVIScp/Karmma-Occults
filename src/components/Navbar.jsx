import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import logo from '../assets/logo.png';

const cn = (...inputs) => twMerge(clsx(inputs));

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'GRAPHOLOGY', href: '#graphology' },
    { name: 'HEALTH', href: '#health' },
    { name: 'SERVICES', href: '#services' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 pointer-events-none">
      <motion.div
        initial={{ 
          y: -100, 
          opacity: 0,
          width: "100%",
          maxWidth: "1280px",
          paddingLeft: "48px",
          paddingRight: "48px",
          paddingTop: "24px",
          paddingBottom: "24px",
          borderRadius: "0px",
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderWidth: "0px",
          borderBottomWidth: "1px",
          borderColor: "rgba(255, 255, 255, 0.1)",
        }}
        animate={{ 
          y: 0, 
          opacity: 1,
          width: isScrolled ? "auto" : "100%",
          maxWidth: isScrolled ? "1000px" : "1280px",
          paddingLeft: isScrolled ? "40px" : "48px",
          paddingRight: isScrolled ? "40px" : "48px",
          paddingTop: isScrolled ? "12px" : "24px",
          paddingBottom: isScrolled ? "12px" : "24px",
          borderRadius: isScrolled ? "9999px" : "0px",
          backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.85)" : "rgba(0, 0, 0, 0)",
          backdropFilter: isScrolled ? "blur(20px)" : "blur(0px)",
          borderWidth: isScrolled ? "1px" : "0px",
          borderBottomWidth: "1px",
          borderColor: isScrolled ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.1)",
          marginTop: isScrolled ? "12px" : "0px"
        }}
        transition={{ 
          type: "spring", 
          stiffness: 150, 
          damping: 25,
          mass: 1,
          opacity: { duration: 0.3 }
        }}
        className="pointer-events-auto flex items-center justify-between"
      >
        {/* Unified Pill Flow when scrolled / Standard layout when not */}
        <div className={cn(
          "w-full flex items-center",
          isScrolled ? "justify-center gap-12" : "justify-between"
        )}>
          {/* Logo */}
          <div className={isScrolled ? "flex-shrink-0" : "flex-1 flex justify-start"}>
            <a href="#" className="flex items-center gap-2 shrink-0">
              <img src={logo} alt="Karmma Occults" className={cn("w-auto transition-all", isScrolled ? "h-14" : "h-20")} />
            </a>
          </div>
          
          {/* Nav Links */}
          <div className={cn(
            "hidden md:flex items-center",
            isScrolled ? "gap-12" : "justify-center gap-14 flex-[2]"
          )}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-bold tracking-[0.2em] text-white/60 hover:text-white transition-all whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA - Right */}
          <div className={isScrolled ? "flex-shrink-0" : "flex-1 flex justify-end items-center gap-4"}>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-consultation'))}
              className={cn(
                "hidden md:block px-10 py-3 text-[11px] font-bold tracking-[0.2em] uppercase rounded-full transition-all duration-300 whitespace-nowrap border cursor-pointer",
                isScrolled ? "border-white/5" : "border-white/10",
                "text-white hover:bg-white hover:text-black"
              )}
            >
              CONTACT
            </button>

            <button 
              className="md:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-24 left-6 right-6 p-8 rounded-3xl bg-black/90 border border-white/10 backdrop-blur-2xl pointer-events-auto md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold tracking-widest text-foreground"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('open-consultation'));
                  setIsMobileMenuOpen(false);
                }}
                className="w-full py-4 text-center rounded-2xl bg-white text-black font-black tracking-widest uppercase text-xs"
              >
                CONTACT
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>

  );
};

export default Navbar;

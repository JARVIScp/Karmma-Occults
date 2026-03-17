import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Karmma Occults" className="h-6 w-auto invert opacity-50 hover:opacity-100 transition-opacity" />
          <span className="text-sm font-mono text-muted">© 2026 Shailesh Vekariya. All rights reserved.</span>
        </div>
        
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-muted">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>

        <div className="text-xs font-mono text-muted text-center md:text-right">
          Designed for Excellence. Built for Transformation.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

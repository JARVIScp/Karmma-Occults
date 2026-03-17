import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-5xl"
      >
        <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-muted mt-8 mb-6">
          Graphologist & Consultant
        </span>
        
        <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-[1.1] tracking-tight text-foreground">
          Discover What Your Handwriting, Signature and Logo Reveals About Your <span className="italic">Personality</span>, <span className="italic text-muted">Health</span>, and <span className="italic">Success.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-12 leading-relaxed font-sans">
          Handwriting reflects the subconscious mind. Through graphology, signature design, graphotherapy, and scientific logo design, small changes can create powerful transformation in personality, health awareness, and personal branding.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/919687355231"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-foreground text-background font-bold text-sm tracking-wide transition-all shadow-2xl shadow-white/5 cursor-pointer flex items-center justify-center"
          >
            WhatsApp Consultation
          </motion.a>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.dispatchEvent(new CustomEvent('open-consultation'))}
            className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-foreground font-bold text-sm tracking-wide hover:bg-white/10 transition-all cursor-pointer"
          >
            Get Analysis
          </motion.button>
        </div>
      </motion.div>

      {/* Progress Line */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: 100 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 w-px bg-gradient-to-b from-white/20 to-transparent"
      />
    </section>
  );
};

export default Hero;

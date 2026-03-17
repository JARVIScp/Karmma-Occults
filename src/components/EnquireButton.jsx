import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const EnquireButton = () => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => window.dispatchEvent(new CustomEvent('open-consultation'))}
      className="fixed bottom-8 right-8 z-[100] px-10 py-4 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl text-white font-bold text-[11px] tracking-[0.2em] uppercase transition-all duration-300 shadow-2xl shadow-white/5 cursor-pointer hover:bg-white hover:text-black hover:border-white group"
    >
      <span>Enquire Now</span>
      
      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.button>
  );
};

export default EnquireButton;

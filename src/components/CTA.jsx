import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-32 px-6 flex justify-center bg-background overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-7xl font-serif mb-12 leading-[1.1]">
            Your handwriting already reflects your <span className="italic text-muted">inner world.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted mb-16 leading-relaxed max-w-2xl mx-auto">
            Now it’s time to transform it into strength, clarity, and identity.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/919687355231"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-foreground text-background font-bold text-sm tracking-[0.2em] uppercase transition-all shadow-2xl shadow-white/10 hover:shadow-white/20 cursor-pointer text-center"
            >
              WhatsApp Consultation
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.dispatchEvent(new CustomEvent('open-consultation'))}
              className="w-full sm:w-auto px-10 py-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-foreground font-bold text-sm tracking-[0.2em] uppercase hover:bg-white/10 transition-all cursor-pointer"
            >
              Book Consultation
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

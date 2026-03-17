import React from 'react';
import { motion } from 'framer-motion';

const WhoCanBenefit = () => {
  const benefits = [
    'Entrepreneurs & business owners',
    'Students & professionals',
    'Corporate leaders',
    'Individuals seeking personal growth',
    'Brands building identity',
  ];

  return (
    <section id="who" className="py-24 px-6 bg-[#050505] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-muted mb-4 block underline decoration-muted/30 underline-offset-8 decoration-1">
            Audience
          </span>
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
            Who Can <span className="text-muted italic">Benefit?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col gap-6"
            >
              <div className="w-full h-px bg-white/10 group-hover:bg-foreground transition-all duration-700" />
              <div className="flex items-center justify-between">
                <span className="text-xl font-serif">{benefit}</span>
                <span className="text-xs font-mono text-muted group-hover:text-foreground transition-colors">0{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoCanBenefit;

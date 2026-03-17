import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const WhyWorkWith = () => {
  const points = [
    'Scientific handwriting analysis',
    'Personalized signature transformation',
    'Graphotherapy for behavioural improvement',
    'Health awareness insights',
    'Scientific logo design',
  ];

  return (
    <section id="why" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-20 max-w-2xl">
          <span className="text-xs font-semibold tracking-widest uppercase text-muted mb-4 block underline decoration-muted/30 underline-offset-8 decoration-1">
            Differentiation
          </span>
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
            Why Work With <br/><span className="text-muted italic">Shailesh Vekariya.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {points.map((point, index) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-6 p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center shrink-0">
                <Check size={20} />
              </div>
              <span className="text-lg font-serif">{point}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWith;

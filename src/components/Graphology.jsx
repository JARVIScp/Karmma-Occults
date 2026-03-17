import React from 'react';
import { motion } from 'framer-motion';

const Graphology = () => {
  const points = [
    { title: 'Personality traits', desc: 'Identify core characteristics and hidden strengths.' },
    { title: 'Emotional stability', desc: 'Understand emotional patterns and resilience.' },
    { title: 'Confidence', desc: 'Analyze self-esteem and social presence.' },
    { title: 'Leadership ability', desc: 'Detect decision-making and influence potential.' },
    { title: 'Behaviour patterns', desc: 'Uncover habitual responses and tendencies.' },
  ];

  return (
    <section id="graphology" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-muted mb-4 block underline decoration-muted/30 underline-offset-8 decoration-1">
            Core Science
          </span>
          <h2 className="text-4xl md:text-6xl font-serif mb-8 max-w-2xl leading-tight">
            What is Graphology?
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-3xl leading-relaxed">
            Graphology is the scientific study of handwriting used to analyze personality traits, emotional patterns, thinking styles, and behavioural tendencies. 
            Each stroke reflects neurological signals from the brain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="border-l border-white/10 pl-8 group-hover:border-foreground transition-colors duration-500">
                <span className="text-xs font-mono text-muted group-hover:text-foreground transition-colors">0{index + 1}</span>
                <h3 className="text-xl font-serif mt-2 mb-4 group-hover:translate-x-2 transition-transform duration-500">{point.title}</h3>
                <p className="text-sm text-muted leading-relaxed group-hover:text-foreground/80 transition-colors">
                  {point.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Graphology;

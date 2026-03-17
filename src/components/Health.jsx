import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Brain, Shield, Zap, Heart } from 'lucide-react';

const Health = () => {
  const points = [
    { title: 'Stress patterns', icon: Activity },
    { title: 'Anxiety tendencies', icon: Brain },
    { title: 'Emotional imbalance', icon: Heart },
    { title: 'Mental fatigue', icon: Shield },
    { title: 'Early behavioural indicators', icon: Zap },
  ];

  return (
    <section id="health" className="py-24 px-6 bg-[#050505] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-muted mb-4 block underline decoration-muted/30 underline-offset-8 decoration-1">
              Health & Wellbeing
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              Mind, Body, and <br/><span className="italic text-muted">Handwriting.</span>
            </h2>
            <p className="text-lg text-muted mb-12 leading-relaxed">
              Handwriting patterns are connected with brain activity and may indicate stress, emotional imbalance, or mental fatigue. Graphotherapy uses structured writing exercises to improve mental balance, confidence, and focus.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {points.map((point) => (
                <div key={point.title} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                    <point.icon size={18} />
                  </div>
                  <span className="text-sm font-medium text-muted group-hover:text-foreground transition-colors">{point.title}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video sm:aspect-square rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-8 sm:p-12 flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
            <div className="text-center relative z-10">
              <p className="text-4xl sm:text-6xl font-serif italic mb-4 sm:mb-6">Graphotherapy</p>
              <p className="text-xs sm:text-sm text-muted uppercase tracking-[0.2em] max-w-xs mx-auto">
                Structured writing exercises to reshape behavioural patterns and improve focus.
              </p>
            </div>
            {/* Minimalist Grid Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px sm:40px 40px' }} 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Health;

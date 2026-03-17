import React from 'react';
import { motion } from 'framer-motion';

const LogoAnalysis = () => {
  const insights = [
    { title: 'Business mindset & foundation', desc: 'The core values and psychological roots of your brand.' },
    { title: 'Effort vs results pattern', desc: 'Analyzing the efficiency and energy flow of your operations.' },
    { title: 'Financial energy flow', desc: 'Understanding the patterns of wealth attraction and retention.' },
    { title: 'Operational attitude', desc: 'The day-to-day mindset of your business structure.' },
    { title: 'Customer behaviour patterns', desc: 'How your logo influences trust and perception.' },
  ];

  return (
    <section id="logo-analysis" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-muted mb-4 block underline decoration-muted/30 underline-offset-8 decoration-1">
              Deep Analysis
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              What Your Logo Reveals About <span className="italic text-muted">Your Business.</span>
            </h2>
            <div className="space-y-12">
              {insights.map((insight, index) => (
                <div key={insight.title} className="group border-b border-white/5 pb-8 last:border-0">
                  <span className="text-xs font-mono text-muted mb-2 block">INSIGHT 0{index + 1}</span>
                  <h3 className="text-xl font-serif mb-4 group-hover:text-foreground transition-colors">{insight.title}</h3>
                  <p className="text-sm text-muted group-hover:text-foreground/80 transition-colors">{insight.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pl-20">
            <div className="sticky top-32 p-12 rounded-[40px] border border-white/10 bg-white/[0.02] backdrop-blur-3xl">
              <h3 className="text-3xl font-serif mb-8">Why It Matters</h3>
              <p className="text-muted leading-relaxed mb-12">
                A scientific logo is more than just aesthetics; it is a psychological blueprint of your business. Refined logos improve authority, trust, and growth.
              </p>
              
              <ul className="space-y-6">
                {['Brand authority', 'Customer trust', 'Financial growth'].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-foreground font-serif text-lg">
                    <div className="w-2 h-2 rounded-full bg-foreground" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-16 p-8 rounded-3xl bg-foreground text-background">
                <p className="text-sm font-bold uppercase tracking-widest mb-4">Current Analysis</p>
                <p className="text-2xl font-serif italic mb-6">"Your brand is a reflection of your mindset."</p>
                <a href="https://wa.me/919687355231" className="text-xs font-bold uppercase tracking-widest border-b border-background/20 hover:border-background transition-all">Book Analysis</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoAnalysis;

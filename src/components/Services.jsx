import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Signature, BrainCircuit, Layout, Search } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Handwriting Analysis',
      desc: 'Detailed personality insights based on handwriting.',
      icon: PenTool,
    },
    {
      title: 'Signature Design & Correction',
      desc: 'Build a powerful personal identity through a scientifically designed signature.',
      icon: Signature,
    },
    {
      title: 'Graphotherapy',
      desc: 'Structured exercises to reshape behavioural patterns and improve focus.',
      icon: BrainCircuit,
    },
    {
      title: 'Scientific Logo Design',
      desc: 'Design logos aligned with psychology, structure, and brand identity.',
      icon: Layout,
    },
    {
      title: 'Logo Analysis',
      desc: 'Analyze business logos to uncover hidden patterns in mindset, financial flow, customer behaviour, and brand positioning.',
      icon: Search,
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-muted mb-4 block underline decoration-muted/30 underline-offset-8 decoration-1">
            Expert Services
          </span>
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
            Consulting & <br/><span className="text-muted italic">Transformation.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-700"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-foreground group-hover:text-background transition-colors duration-500">
                <service.icon size={24} />
              </div>
              
              <h3 className="text-2xl font-serif mb-4 group-hover:translate-x-2 transition-transform duration-500">
                {service.title}
              </h3>
              
              <p className="text-muted leading-relaxed text-sm group-hover:text-foreground/80 transition-colors">
                {service.desc}
              </p>

              <div className="mt-8 flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-muted opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:translate-y-0 translate-y-2">
                Learn More <span className="text-[10px] ml-1">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from 'react';
import { motion } from 'framer-motion';
import portrait from '../assets/portrait.jpg';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 flex justify-center bg-[#050505]">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative aspect-[4/5] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer border border-white/5"
        >
          <img 
            src={portrait} 
            alt="Shailesh Vekariya" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-10 left-10">
            <h3 className="text-2xl font-serif text-foreground">Shailesh Vekariya</h3>
            <p className="text-sm text-muted uppercase tracking-widest">Expert Graphologist</p>
          </div>
        </motion.div>

        {/* Content Side */}
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-muted mb-4 block underline decoration-muted/30 underline-offset-8 decoration-1">
              About Shailesh Vekariya
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              Transforming <span className="text-muted">identity</span> through science.
            </h2>
            <div className="space-y-6 text-muted leading-relaxed text-lg">
              <p>
                Shailesh Vekariya is a Graphology expert who helps individuals and businesses understand hidden personality patterns through handwriting and transform their identity through signature design, graphotherapy, and scientific logo design.
              </p>
              <p>
                His work integrates handwriting psychology, behavioural science, and brand symbolism to improve confidence, clarity, decision-making, and identity.
              </p>
            </div>
          </motion.div>

          {/* Stats/Quick Info */}
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
            <div>
              <p className="text-3xl font-serif text-foreground mb-2">10+</p>
              <p className="text-xs uppercase tracking-widest text-muted">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-foreground mb-2">500+</p>
              <p className="text-xs uppercase tracking-widest text-muted">Signatures Designed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

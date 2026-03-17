import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <span className="text-xs font-semibold tracking-widest uppercase text-muted mb-4 block underline decoration-muted/30 underline-offset-8 decoration-1">
            Contact
          </span>
          <h2 className="text-4xl md:text-6xl font-serif mb-12 leading-tight">
            Let's Start Your <br/><span className="text-muted italic">Transformation.</span>
          </h2>
          
          <div className="space-y-12">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors duration-500">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs font-mono text-muted uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:smvekariya41@gmail.com" className="text-xl font-serif hover:text-muted transition-colors">smvekariya41@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors duration-500">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs font-mono text-muted uppercase tracking-widest mb-1">Phone</p>
                <a href="tel:+919687355231" className="text-xl font-serif hover:text-muted transition-colors">+91 96873 55231</a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors duration-500">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs font-mono text-muted uppercase tracking-widest mb-1">Location</p>
                <p className="text-xl font-serif">India / Remote</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[40px] shadow-2xl">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted">Full Name</label>
                <input type="text" className="bg-transparent border-b border-white/10 py-3 outline-none focus:border-foreground transition-colors" placeholder="John Doe" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted">Email Address</label>
                <input type="email" className="bg-transparent border-b border-white/10 py-3 outline-none focus:border-foreground transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted">Service Interested In</label>
              <select className="bg-transparent border-b border-white/10 py-3 outline-none focus:border-foreground transition-colors appearance-none text-muted">
                <option className="bg-[#0A0A0A]">Handwriting Analysis</option>
                <option className="bg-[#0A0A0A]">Signature Design</option>
                <option className="bg-[#0A0A0A]">Graphotherapy</option>
                <option className="bg-[#0A0A0A]">Logo Analysis</option>
                <option className="bg-[#0A0A0A]">Scientific Logo Design</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted">Message</label>
              <textarea rows={4} className="bg-transparent border-b border-white/10 py-3 outline-none focus:border-foreground transition-colors resize-none" placeholder="Tell us about your needs..." />
            </div>

            <button type="submit" className="w-full py-5 rounded-2xl bg-foreground text-background font-bold text-sm tracking-widest uppercase hover:bg-muted transition-colors mt-4">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

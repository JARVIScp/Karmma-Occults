import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail } from 'lucide-react';

const ConsultationModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-consultation', handleOpen);
    
    // Also keep the auto-open timer but maybe longer
    const timer = setTimeout(() => {
      // setIsOpen(true); // Uncomment if auto-open is still desired
    }, 15000);

    return () => {
      window.removeEventListener('open-consultation', handleOpen);
      clearTimeout(timer);
    };
  }, []);

  const contactOptions = [
    {
      label: 'WHATSAPP',
      value: '+91 96873 55231',
      href: 'https://wa.me/919687355231',
      icon: (
        <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>
      )
    },
    {
      label: 'CALL US',
      value: '+91 96873 55231',
      href: 'tel:+919687355231',
      icon: (
        <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
          <Phone size={20} />
        </div>
      )
    },
    {
      label: 'EMAIL',
      value: 'smvekariya41@gmail.com',
      href: 'mailto:smvekariya41@gmail.com',
      icon: (
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70">
          <Mail size={20} />
        </div>
      )
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40, x: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 40, x: 40 }}
          className="fixed bottom-8 right-8 z-[101] w-[calc(100%-4rem)] max-w-sm pointer-events-auto"
        >
          <div className="w-full bg-[#0A0A0A]/90 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 shadow-3xl relative">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl font-serif text-white mb-4">Book a Consultation</h2>
            <p className="text-xs text-white/60 mb-8 leading-relaxed font-sans">
              Transform your life through Graphology. Book a personal consultation through any of the following channels:
            </p>

            <div className="flex flex-col gap-3">
              {contactOptions.map((option) => (
                <a
                  key={option.label}
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all group"
                >
                  {option.icon}
                  <div className="flex flex-col">
                    <span className="text-[8px] font-black tracking-[0.2em] text-white/40 uppercase">
                      {option.label}
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-green-500 transition-colors">
                      {option.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConsultationModal;

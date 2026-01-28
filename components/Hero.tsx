
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] bg-sky-600/10 rounded-full blur-[80px] md:blur-[120px]"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[80px] md:blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 px-4 py-1.5 rounded-full mb-6 md:mb-8">
          <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></span>
          <span className="text-[10px] md:text-xs font-medium text-sky-300 uppercase tracking-widest font-orbitron text-center">Hat Pangashi Service Hub</span>
        </div>
        
        <h1 className="text-4xl md:text-7xl font-orbitron font-bold mb-4 md:mb-6 leading-tight break-words">
          Sinthiya <span className="accent-gradient">Telecom</span>
        </h1>
        
        <p className="max-w-xl mx-auto text-slate-400 text-sm md:text-lg mb-8 md:mb-10 leading-relaxed px-2">
          Sinthiya Telecom at Nahid New Market. We provide Mobile Recharge, all types of Digital Banking services, and quality gadgets.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
          <a 
            href="https://api.whatsapp.com/send?phone=8801307085310" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-sky-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2 active:scale-95"
          >
            WhatsApp Contact
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.334l-.669 2.438 2.492-.654c.991.541 1.884.882 2.92.883 3.181 0 5.767-2.586 5.768-5.766 0-3.181-2.587-5.766-5.768-5.766zM12.031 16.924c-1.012 0-2-.271-2.859-.78l-.204-.123-1.488.39.397-1.451-.135-.215c-.56-.893-.855-1.921-.854-2.978 0-3.076 2.502-5.578 5.58-5.578 3.076 0 5.578 2.502 5.578 5.578-.002 3.078-2.504 5.58-5.58 5.58z"/></svg>
          </a>
          <a 
            href="tel:01307085310"
            className="w-full sm:w-auto glass text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

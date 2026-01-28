
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center font-orbitron font-bold text-white text-xl shadow-lg shadow-sky-500/20">
            S
          </div>
          <span className="text-xl font-orbitron font-bold tracking-tighter text-white">
            SINTHIYA <span className="text-sky-400">TELECOM</span>
          </span>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <a href="#services" className="hover:text-sky-400 transition-colors">Services</a>
          <a href="#gadgets" className="hover:text-sky-400 transition-colors">Gadgets</a>
          <a href="#about" className="hover:text-sky-400 transition-colors">Shop Info</a>
          <a href="#location" className="hover:text-sky-400 transition-colors">Location</a>
          <a 
            href="https://api.whatsapp.com/send?phone=8801307085310" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-sky-400 transition-colors"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="https://api.whatsapp.com/send?phone=8801307085310"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-500 hover:bg-sky-400 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-sky-500/20"
          >
            Message Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

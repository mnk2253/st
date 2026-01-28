
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChatBot from './components/ChatBot';
import Services from './components/Services';
import Gadgets from './components/Gadgets';
import About from './components/About';
import LocationMap from './components/LocationMap';

const App: React.FC = () => {
  return (
    <div className="relative bg-slate-950 min-h-screen">
      <Navbar />
      
      <main>
        <Hero />

        {/* Our Services Section */}
        <Services />

        {/* Gadgets Showcase Section */}
        <Gadgets />

        {/* About & Shop Info Section */}
        <About />

        {/* Interactive Map Section */}
        <LocationMap />

        {/* Quick Contact Banner */}
        <section className="py-24 px-4 bg-slate-950">
          <div className="max-w-4xl mx-auto glass p-12 rounded-[3rem] text-center relative overflow-hidden border-sky-500/20">
             <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl"></div>
             <h2 className="text-3xl font-orbitron font-bold mb-4">Visit Our Shop</h2>
             <p className="text-slate-400 mb-8 max-w-md mx-auto">
               Nahid New Market, Raigonj, Sirajganj. We are open every day to serve you with excellence.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <a 
                 href="tel:01307085310" 
                 className="bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2"
               >
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                 Call Support
               </a>
             </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Logo Brand */}
          <div className="flex items-center gap-2 order-1">
            <div className="w-8 h-8 bg-sky-500 rounded flex items-center justify-center font-orbitron font-bold text-white text-sm">
              S
            </div>
            <span className="text-lg font-orbitron font-bold text-white uppercase tracking-tighter">
              SINTHIYA <span className="text-sky-400">TELECOM</span>
            </span>
          </div>

          {/* Links & Socials Container */}
          <div className="flex flex-col items-center gap-6 order-2">
            <div className="flex gap-8 text-slate-400 text-sm font-medium">
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#gadgets" className="hover:text-white transition-colors">Gadgets</a>
              <a href="#about" className="hover:text-white transition-colors">Shop Info</a>
              <a href="#location" className="hover:text-white transition-colors">Location</a>
              <a 
                href="https://api.whatsapp.com/send?phone=8801307085310" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                WhatsApp
              </a>
            </div>
            
            <div className="flex gap-6 items-center">
              <a href="#" className="text-slate-500 hover:text-sky-400 transition-all transform hover:scale-110" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-500 hover:text-sky-400 transition-all transform hover:scale-110" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-500 hover:text-sky-400 transition-all transform hover:scale-110" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44-1.44-.645-1.44-1.44.645-1.44 1.44-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-slate-600 text-xs text-center md:text-right order-3">
            © {new Date().getFullYear()} Sinthiya Telecom.<br />
            Developed for Md. Abdul Momin
          </div>
        </div>
      </footer>

      <ChatBot />
    </div>
  );
};

export default App;

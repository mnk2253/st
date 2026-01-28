
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChatBot from './components/ChatBot';
import Services from './components/Services';
import Gadgets from './components/Gadgets';
import BirthSearch from './components/BirthSearch';
import UsefulLinks from './components/UsefulLinks';
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

        {/* Digital Verification & Search Hub */}
        <BirthSearch />

        {/* Gadgets Showcase Section */}
        <Gadgets />

        {/* Useful Essential Links Section */}
        <UsefulLinks />

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

          {/* Links Container */}
          <div className="flex flex-col items-center gap-6 order-2">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-slate-400 text-sm font-medium">
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#verify" className="hover:text-white transition-colors">Verify Info</a>
              <a href="#gadgets" className="hover:text-white transition-colors">Gadgets</a>
              <a href="#links" className="hover:text-white transition-colors">Useful Links</a>
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

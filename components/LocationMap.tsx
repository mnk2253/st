
import React from 'react';

const LocationMap: React.FC = () => {
  // Updated map URL with the specific Street View/Location data provided
  const mapUrl = "https://www.google.com/maps/embed?pb=!4v1769595982458!6m8!1m7!1s2aZrbX9trefMzxI2uL9QDA!2m2!1d24.48641072472178!2d89.6082805544844!3f210.67892821563868!4f3.2777071604423327!5f0.7820865974627469";

  return (
    <section id="location" className="py-24 relative bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">Find <span className="text-sky-400">Our Shop</span></h2>
          <p className="text-slate-400">Experience our location at Nahid New Market through interactive view.</p>
        </div>

        <div className="relative glass p-4 rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden group">
          <div className="absolute inset-0 bg-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          
          <div className="h-[450px] w-full rounded-[2rem] overflow-hidden grayscale-[0.2] contrast-[1.05] brightness-[0.9] hover:grayscale-0 transition-all duration-700">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sinthiya Telecom Street View Location"
            ></iframe>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-sm px-4">
            <div className="glass bg-slate-900/90 p-6 rounded-2xl border border-sky-500/30 text-center shadow-2xl backdrop-blur-xl">
              <h4 className="font-bold text-white mb-1 uppercase tracking-tight">Sinthiya Telecom</h4>
              <p className="text-slate-400 text-xs mb-4">Nahid New Market, Raigonj, Sirajganj</p>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Nahid+New+Market+Hat+Pangashi+Raigonj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-6 py-2 rounded-xl text-sm font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-sky-500/20"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;

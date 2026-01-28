
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden scroll-mt-24 border-y border-white/5">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">Shop <span className="text-sky-400">Information</span></h2>
          <p className="text-slate-400 text-lg">Detailed information about Sinthiya Telecom and its management.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Owner Info Card */}
          <div className="glass bg-slate-900/60 p-10 rounded-[2.5rem] border border-white/10 shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-sky-500/20 rounded-2xl flex items-center justify-center text-sky-400">
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </div>
              <div>
                 <h3 className="text-2xl font-bold font-orbitron text-white">Owner Details</h3>
                 <p className="text-sky-400 text-xs font-bold uppercase tracking-widest">Management</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-3xl font-bold text-white mb-1">Md. Abdul Momin</p>
                <p className="text-slate-400">Proprietor, Sinthiya Telecom</p>
              </div>

              <div className="grid gap-6">
                <a href="tel:01307085310" className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-sky-500/50 transition-all group">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.334l-.669 2.438 2.492-.654c.991.541 1.884.882 2.92.883 3.181 0 5.767-2.586 5.768-5.766 0-3.181-2.587-5.766-5.768-5.766zM12.031 16.924c-1.012 0-2-.271-2.859-.78l-.204-.123-1.488.39.397-1.451-.135-.215c-.56-.893-.855-1.921-.854-2.978 0-3.076 2.502-5.578 5.58-5.578 3.076 0 5.578 2.502 5.578 5.578-.002 3.078-2.504 5.58-5.58 5.58z"/></svg>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block">WhatsApp & Primary Contact</span>
                    <span className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">01307085310</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block">Location</span>
                    <span className="text-slate-200 font-medium">Hat Pangashi, Nahid New Market, Sirajganj</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Channel Info Card */}
          <div className="flex flex-col gap-6">
            <div className="glass bg-slate-900/60 p-8 rounded-[2rem] border border-white/10 flex-grow">
               <h4 className="text-lg font-bold font-orbitron text-white mb-6 flex items-center gap-2">
                 <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
                 Payment Channels
               </h4>
               <div className="grid gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all flex justify-between items-center">
                    <div>
                       <span className="text-[10px] font-bold bg-pink-600 px-2 py-0.5 rounded mr-2">BKASH</span>
                       <span className="text-[10px] font-bold bg-purple-600 px-2 py-0.5 rounded">ROCKET</span>
                       <p className="text-xl font-bold mt-2 text-white">01892251000</p>
                    </div>
                    <div className="text-slate-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all flex justify-between items-center">
                    <div>
                       <span className="text-[10px] font-bold bg-sky-600 px-2 py-0.5 rounded">ALL OPERATOR AGENT</span>
                       <p className="text-xl font-bold mt-2 text-white">01881015000</p>
                    </div>
                    <div className="text-slate-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                    </div>
                  </div>
               </div>
            </div>

            <div className="glass bg-gradient-to-br from-sky-600 to-indigo-700 p-8 rounded-[2rem] text-white">
              <h4 className="font-bold text-xl mb-2">Need Direct Support?</h4>
              <p className="text-sky-100 text-sm mb-6">Our specialized agents are ready to assist you with all telecom and mobile banking needs.</p>
              <a href="tel:01307085310" className="inline-block bg-white text-indigo-900 px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-sky-50 transition-all">
                Contact Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

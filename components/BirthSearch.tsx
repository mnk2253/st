
import React, { useState } from 'react';

const BirthSearch: React.FC = () => {
  const [birthRegNum, setBirthRegNum] = useState('');
  const [dob, setDob] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showGateway, setShowGateway] = useState(false);

  const handleBirthSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (birthRegNum.length !== 17) {
      alert("দয়া করে সঠিক ১৭ ডিজিটের জন্ম নিবন্ধন নম্বর দিন।");
      return;
    }

    setIsProcessing(true);

    // Copy to clipboard for easy pasting in the gateway
    navigator.clipboard.writeText(birthRegNum).then(() => {
      // Simulate high-tech server handshake
      setTimeout(() => {
        setIsProcessing(false);
        setShowGateway(true);
        // We'll use window.scrollTo to ensure they see the gateway
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 2500);
    });
  };

  const closeGateway = () => {
    setShowGateway(false);
    document.body.style.overflow = 'auto';
  };

  if (showGateway) {
    document.body.style.overflow = 'hidden';
    return (
      <div className="fixed inset-0 z-[100] bg-slate-950 flex flex-col animate-in fade-in duration-500">
        {/* Gateway Header */}
        <div className="bg-slate-900 border-b border-white/10 p-4 flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-sky-500 rounded flex items-center justify-center font-orbitron font-bold text-white text-xs">S</div>
            <div>
              <h4 className="text-white font-bold text-sm font-orbitron tracking-tight">Digital <span className="text-sky-400">Gateway</span></h4>
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Sinthiya Telecom Service Bridge</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] text-emerald-400 font-bold uppercase">Secure Connection</span>
            </div>
            <button 
              onClick={closeGateway}
              className="bg-white/5 hover:bg-red-500/20 text-slate-400 hover:text-red-400 p-2 rounded-xl transition-all border border-white/10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
        </div>

        {/* Info Assistant Bar */}
        <div className="bg-sky-600 p-2 text-center text-white text-[10px] md:text-xs font-bold uppercase tracking-widest">
           নম্বরটি কপি করা হয়েছে। নিচের পোর্টালে শুধু "Paste" করুন এবং ক্যাপচা পূরণ করুন।
        </div>

        {/* The Portal Frame */}
        <div className="flex-grow relative bg-white">
          <iframe 
            src="https://everify.bdris.gov.bd/" 
            className="w-full h-full border-none"
            title="Govt Verification Portal"
          />
          
          {/* Helpful Tooltip */}
          <div className="absolute bottom-10 right-10 max-w-xs glass bg-slate-900/90 border border-sky-500/30 p-5 rounded-2xl shadow-2xl animate-bounce">
            <p className="text-white text-xs leading-relaxed">
              <span className="text-sky-400 font-bold">প্রয়োজনীয় সাহায্য:</span><br />
              নিচের বক্সে রাইট ক্লিক করে <span className="text-sky-400 font-bold">"Paste"</span> করুন। এরপর আপনার জন্ম তারিখ দিন।
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="verify" className="py-16 md:py-24 bg-slate-900/40 relative overflow-hidden scroll-mt-24">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">Live <span className="text-sky-400">Verification</span></h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-sm md:text-base">
            সরাসরি আমাদের সাইটের ভেতরেই জন্ম নিবন্ধন তথ্য যাচাই করুন। কোন বাড়তি ট্যাব ওপেন হবে না।
          </p>
          <div className="w-16 md:w-24 h-1 bg-sky-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Birth Registration Search Card */}
          <div className="lg:col-span-7">
            <div className="glass bg-slate-900 border border-white/10 rounded-[2.5rem] p-6 md:p-10 shadow-2xl relative overflow-hidden group">
              {isProcessing && (
                <div className="absolute inset-0 z-20 bg-slate-950/90 backdrop-blur-xl flex flex-col items-center justify-center text-center p-6 animate-in fade-in duration-300">
                  <div className="relative w-24 h-24 mb-8">
                    <div className="absolute inset-0 border-4 border-sky-500/20 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-10 h-10 text-sky-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-2xl font-orbitron font-bold text-white mb-2 tracking-tighter">Securing Gateway...</h4>
                  <div className="flex gap-1 mb-4">
                    <div className="w-2 h-2 bg-sky-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-sky-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-sky-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  </div>
                  <p className="text-slate-400 text-sm max-w-xs font-medium">
                    আমরা ডিজিটাল গেটওয়ে তৈরি করছি। আপনার নম্বরটি ইতিমধ্যে কপি করা হয়েছে।
                  </p>
                </div>
              )}

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-sky-500 flex items-center justify-center text-white shadow-lg shadow-sky-500/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-orbitron font-bold text-white">Digital Search Hub</h3>
                  <p className="text-sky-400 text-xs font-bold uppercase tracking-widest">জন্ম নিবন্ধন তথ্য অনুসন্ধান</p>
                </div>
              </div>

              <form onSubmit={handleBirthSearch} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2 ml-1">Registration Number (17 Digit)</label>
                    <input 
                      type="text" 
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={17}
                      placeholder="১৭ ডিজিটের নম্বর দিন"
                      value={birthRegNum}
                      autoComplete="off"
                      onChange={(e) => setBirthRegNum(e.target.value.replace(/\D/g, ''))}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-sky-500 transition-all placeholder:text-slate-600 font-mono text-lg tracking-wider"
                      required
                    />
                    <div className="flex justify-between mt-2 px-1">
                       <span className={`text-[10px] ${birthRegNum.length === 17 ? 'text-emerald-400' : 'text-slate-500'}`}>
                         {birthRegNum.length} / 17 digits
                       </span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2 ml-1">Date of Birth</label>
                    <input 
                      type="date" 
                      value={dob}
                      autoComplete="bday"
                      onChange={(e) => setDob(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-sky-500 transition-all [color-scheme:dark]"
                      required
                    />
                  </div>
                </div>

                <div className="bg-sky-500/5 border border-sky-500/20 rounded-2xl p-4 flex gap-4 items-start">
                  <svg className="w-6 h-6 text-sky-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    নিরাপত্তার স্বার্থে আমরা নম্বরটি <span className="text-sky-400 font-bold">Copy</span> করে দিচ্ছি। পরবর্তী স্ক্রিনে গিয়ে সরাসরি <span className="text-sky-400 font-bold">"Paste"</span> করুন।
                  </p>
                </div>

                <button 
                  type="submit"
                  disabled={birthRegNum.length !== 17 || !dob}
                  className="w-full bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 disabled:from-slate-800 disabled:to-slate-800 disabled:text-slate-500 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-sky-500/20 transition-all transform active:scale-[0.98] flex items-center justify-center gap-3 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Launch Digital Gateway</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          {/* Guidelines / Help Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass bg-slate-900 border border-white/10 rounded-[2rem] p-8 flex flex-col h-full">
              <h4 className="text-lg font-orbitron font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></span>
                In-App Tutorial
              </h4>
              
              <div className="space-y-6">
                <div className="flex gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 font-bold shrink-0 group-hover:bg-sky-500 group-hover:text-white transition-all">1</div>
                  <p className="text-slate-300 text-sm leading-relaxed">আপনার তথ্য দিয়ে বাটনটি ক্লিক করুন। একটি নিরাপদ সার্ভিস গেটওয়ে ওপেন হবে।</p>
                </div>
                <div className="flex gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 font-bold shrink-0 group-hover:bg-sky-500 group-hover:text-white transition-all">2</div>
                  <p className="text-slate-300 text-sm leading-relaxed">গেটওয়ে ওপেন হওয়ার পর আপনি সরাসরি সরকারি পোর্টালটি দেখতে পাবেন।</p>
                </div>
                <div className="flex gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 font-bold shrink-0 group-hover:bg-sky-500 group-hover:text-white transition-all">3</div>
                  <p className="text-slate-300 text-sm leading-relaxed">নম্বরটি আগে থেকেই কপি করা আছে, সেখানে গিয়ে শুধু পেস্ট করুন এবং ক্যাপচা পূরণ করুন।</p>
                </div>
              </div>

              <div className="mt-auto pt-8">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-sky-500/10 rounded-full blur-xl"></div>
                  <p className="text-slate-400 text-xs leading-relaxed italic relative z-10">
                    "Sinthiya Telecom provides the bridge between technology and government services."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BirthSearch;

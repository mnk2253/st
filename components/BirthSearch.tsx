
import React, { useState } from 'react';

const BirthSearch: React.FC = () => {
  const [birthRegNum, setBirthRegNum] = useState('');
  const [dob, setDob] = useState('');

  const handleBirthSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to official govt verify portal
    window.open('https://everify.bdris.gov.bd/', '_blank');
  };

  return (
    <section id="verify" className="py-16 md:py-24 bg-slate-900/40 relative overflow-hidden scroll-mt-24">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">Identity <span className="text-sky-400">Verification</span></h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-sm md:text-base">
            জন্ম নিবন্ধন বা এনআইডি তথ্য সরাসরি এখান থেকে যাচাই করুন। আমরা আপনাকে সঠিক সরকারি পোর্টালে পৌঁছে দেব।
          </p>
          <div className="w-16 md:w-24 h-1 bg-sky-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Birth Registration Search Card */}
          <div className="lg:col-span-7">
            <div className="glass bg-slate-900 border border-white/10 rounded-[2.5rem] p-6 md:p-10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-sky-500 flex items-center justify-center text-white shadow-lg shadow-sky-500/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-orbitron font-bold text-white">Birth Registration Search</h3>
                  <p className="text-sky-400 text-xs font-bold uppercase tracking-widest">জন্ম নিবন্ধন তথ্য অনুসন্ধান</p>
                </div>
              </div>

              <form onSubmit={handleBirthSearch} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2 ml-1">Registration Number (17 Digit)</label>
                    <input 
                      type="text" 
                      maxLength={17}
                      placeholder="e.g. 200581175..."
                      value={birthRegNum}
                      onChange={(e) => setBirthRegNum(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-sky-500 transition-all placeholder:text-slate-600"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2 ml-1">Date of Birth</label>
                    <input 
                      type="date" 
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-sky-500 transition-all [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div className="bg-sky-500/5 border border-sky-500/20 rounded-2xl p-4 flex gap-4 items-start">
                  <svg className="w-6 h-6 text-sky-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    আপনার তথ্য প্রবেশের পর "Search Now" বাটনে ক্লিক করলে সরাসরি সরকারি সার্ভারে আপনার তথ্য দেখতে পাবেন। সঠিক তথ্যের জন্য ১৭ ডিজিটের নম্বর ব্যবহার করুন।
                  </p>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-sky-500 hover:bg-sky-400 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-sky-500/20 transition-all transform active:scale-[0.98] flex items-center justify-center gap-3"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Search Now / এখন অনুসন্ধান করুন
                </button>
              </form>
            </div>
          </div>

          {/* Quick Verification Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass bg-slate-900 border border-white/10 rounded-[2rem] p-8 flex flex-col h-full">
              <h4 className="text-lg font-orbitron font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></span>
                Quick Verification
              </h4>
              
              <div className="space-y-4">
                <a href="https://services.nidw.gov.bd/nid-pub/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-sky-500/30 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1" /></svg>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">NID Verification</p>
                      <p className="text-slate-500 text-[10px] uppercase tracking-wider">এনআইডি কার্ড যাচাই</p>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-slate-600 group-hover:text-sky-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>

                <a href="http://www.educationboardresults.gov.bd/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-emerald-500/30 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13" /></svg>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Exam Results</p>
                      <p className="text-slate-500 text-[10px] uppercase tracking-wider">রেজাল্ট অনুসন্ধান</p>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-slate-600 group-hover:text-emerald-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>

                <a href="https://www.epassport.gov.bd/authorization/application-status" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-purple-500/30 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945" /></svg>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Passport Status</p>
                      <p className="text-slate-500 text-[10px] uppercase tracking-wider">পাসপোর্ট চেক</p>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-slate-600 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/5">
                <p className="text-slate-400 text-xs leading-relaxed italic">
                  "Sinthiya Telecom brings government digital services closer to you. Verified, Secure, and Instant."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BirthSearch;


import React from 'react';

interface ExternalLink {
  id: string;
  title: string;
  bnTitle: string;
  url: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const externalLinks: ExternalLink[] = [
  {
    id: 'nid',
    title: 'NID Server',
    bnTitle: 'এনআইডি সার্ভার',
    url: 'https://services.nidw.gov.bd/nid-pub/',
    description: 'জাতীয় পরিচয়পত্র সংক্রান্ত সকল তথ্যের জন্য।',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
      </svg>
    ),
    color: 'from-blue-600 to-indigo-600'
  },
  {
    id: 'results',
    title: 'Education Results',
    bnTitle: 'পরীক্ষার রেজাল্ট',
    url: 'http://www.educationboardresults.gov.bd/',
    description: 'এসএসসি, এইচএসসি ও অন্যান্য বোর্ড পরীক্ষার রেজাল্ট।',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: 'from-emerald-600 to-teal-600'
  },
  {
    id: 'birth',
    title: 'Birth Registration',
    bnTitle: 'জন্ম নিবন্ধন',
    url: 'https://bdris.gov.bd/',
    description: 'নতুন জন্ম নিবন্ধন আবেদন ও তথ্য যাচাইয়ের জন্য।',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    color: 'from-orange-600 to-amber-600'
  },
  {
    id: 'passport',
    title: 'E-Passport',
    bnTitle: 'ই-পাসপোর্ট',
    url: 'https://www.epassport.gov.bd/',
    description: 'অনলাইনে পাসপোর্টের আবেদন ও স্ট্যাটাস চেক।',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-purple-600 to-fuchsia-600'
  },
  {
    id: 'gd',
    title: 'Online GD',
    bnTitle: 'অনলাইন জিডি',
    url: 'https://gd.police.gov.bd/',
    description: 'থানায় না গিয়ে অনলাইনে সাধারণ ডায়েরি করার জন্য।',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: 'from-red-600 to-rose-600'
  },
  {
    id: 'job',
    title: 'Job Portal',
    bnTitle: 'সরকারি চাকুরি',
    url: 'http://alljobs.teletalk.com.bd/',
    description: 'সরকারি সকল চাকুরির আবেদন ও বিজ্ঞপ্তির জন্য।',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'from-sky-600 to-blue-700'
  }
];

const UsefulLinks: React.FC = () => {
  return (
    <section id="links" className="py-16 md:py-24 bg-slate-950 scroll-mt-24 overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">Useful <span className="text-sky-400">Links</span></h2>
          <p className="text-slate-400 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            সরকারি ও শিক্ষা সংক্রান্ত গুরুত্বপূর্ণ সেবাগুলোর লিংক এখানে পাবেন।
          </p>
          <div className="w-16 md:w-24 h-1 bg-sky-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {externalLinks.map((link) => (
            <a 
              key={link.id} 
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block active:scale-[0.98] transition-all duration-300"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${link.color} rounded-[2rem] blur opacity-0 group-hover:opacity-20 transition duration-500`}></div>
              
              <div className="relative bg-slate-900 border border-white/5 p-6 md:p-8 rounded-[2rem] h-full flex flex-col hover:border-white/10 transition-colors">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${link.color} flex items-center justify-center text-white mb-6 shadow-lg shadow-black/20 transform group-hover:-translate-y-1 transition-transform duration-300`}>
                  {link.icon}
                </div>
                
                <h3 className="text-xl font-orbitron font-bold text-white mb-1 group-hover:text-sky-400 transition-colors">
                  {link.bnTitle}
                </h3>
                <p className="text-slate-500 text-xs font-medium uppercase tracking-widest mb-4">
                  {link.title}
                </p>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {link.description}
                </p>
                
                <div className="mt-auto flex items-center justify-between text-sky-400">
                  <span className="text-xs font-bold uppercase tracking-widest">Visit Portal</span>
                  <div className="w-8 h-8 rounded-full border border-sky-400/20 flex items-center justify-center group-hover:bg-sky-400 group-hover:text-white transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsefulLinks;

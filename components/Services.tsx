
import React, { useState } from 'react';

interface Service {
  id: string;
  title: string;
  desc: string;
  detail: string;
  icon: React.ReactNode;
  color: string;
}

const services: Service[] = [
  {
    id: "recharge",
    title: "Mobile Recharge",
    desc: "সকল অপারেটরের ইনস্ট্যান্ট রিচার্জ।",
    detail: "আমাদের এখান থেকে আপনি গ্রামীণফোন, রবি, বাংলালিংক, এয়ারটেল এবং টেলিটক সিমে দ্রুত রিচার্জ করতে পারবেন। যেকোনো অফার বা বান্ডেল প্যাক রিচার্জের সুবিধা এখানে রয়েছে।",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    color: "from-blue-500 to-sky-400"
  },
  {
    id: "opening",
    title: "Account Opening",
    desc: "বিকাশ, নগদ, রকেট এবং উপায় অ্যাকাউন্ট।",
    detail: "আমরা অত্যন্ত বিশ্বস্ততার সাথে বিকাশ (bkash), নগদ (Nagad), রকেট (Rocket) এবং উপায় (Upay) এর নতুন অ্যাকাউন্ট নির্ভুলভাবে খুলে দিই। ভোটার আইডি কার্ড নিয়ে আমাদের দোকানে চলে আসুন।",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
    color: "from-emerald-500 to-teal-400"
  },
  {
    id: "recovery",
    title: "Account Recovery",
    desc: "পিন ভুলে যাওয়া বা অ্যাকাউন্ট ব্লক ঠিক করা।",
    detail: "আপনার যেকোনো মোবাইল ব্যাংকিং অ্যাকাউন্টের পিন (PIN) ভুলে গিয়ে থাকলে কিংবা অ্যাকাউন্ট ব্লক হয়ে থাকলে চিন্তার কারণ নেই। আমরা যথাযথ ভেরিফিকেশনের মাধ্যমে আপনার অ্যাকাউন্ট সচল করে দিই।",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    color: "from-orange-500 to-yellow-400"
  },
  {
    id: "puk",
    title: "SIM PUK Unlock",
    desc: "সিমের পিন বা পাক (PUK) কোড আনলক।",
    detail: "ভুল পিন কোড দেওয়ার কারণে আপনার প্রিয় সিমটি যদি ব্লক হয়ে যায় বা PUK কোড চায়, তবে আমরা তা দ্রুত আনলক করে দেওয়ার ব্যবস্থা করি। সব অপারেটরের সিম সাপোর্ট করি।",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
    color: "from-red-500 to-pink-400"
  },
  {
    id: "banking",
    title: "Digital Banking",
    desc: "ক্যাশ ইন ও ক্যাশ আউট সুবিধা।",
    detail: "বিকাশ, রকেট ও নগদের এজেন্ট পয়েন্ট হিসেবে আমরা আপনাকে সবচেয়ে নিরাপদ লেনদেনের নিশ্চয়তা দিই। বড় অংকের ক্যাশ আউট বা ক্যাশ ইনের জন্য আগে যোগাযোগ করুন।",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    color: "from-pink-500 to-rose-400"
  }
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const openModal = (s: Service) => {
    setSelectedService(s);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="services" className="py-24 bg-slate-950 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">Our <span className="text-sky-400">Services</span></h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">আমরা দিচ্ছি আধুনিক ও দ্রুততম টেলিকম এবং ডিজিটাল ব্যাংকিং সেবা। নিচে ক্লিক করে বিস্তারিত দেখুন।</p>
          <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div 
              key={s.id} 
              onClick={() => openModal(s)}
              className="group relative cursor-pointer"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${s.color} rounded-3xl blur opacity-10 group-hover:opacity-100 transition duration-500`}></div>
              <div className="relative bg-slate-900 border border-white/5 p-8 rounded-3xl h-full flex flex-col hover:translate-y-[-8px] transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:scale-110 transition-transform`}>
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold font-orbitron text-white mb-4 group-hover:text-sky-400 transition-colors">{s.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm mb-6">{s.desc}</p>
                <div className="mt-auto flex items-center gap-2 text-sky-400 text-sm font-bold uppercase tracking-wider">
                  Details
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={closeModal}></div>
          <div className="relative w-full max-w-xl glass bg-slate-900 border border-white/20 p-8 rounded-[2.5rem] shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 text-slate-400 hover:text-white p-2 rounded-full hover:bg-white/5"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${selectedService.color} flex items-center justify-center text-white mb-8 shadow-2xl shadow-sky-500/20 mx-auto`}>
              {selectedService.icon}
            </div>

            <h3 className="text-3xl font-orbitron font-bold text-center text-white mb-4">{selectedService.title}</h3>
            <div className="h-0.5 w-16 bg-sky-500 mx-auto mb-8 rounded-full"></div>
            
            <p className="text-slate-300 text-lg leading-relaxed text-center mb-10">
              {selectedService.detail}
            </p>

            <div className="flex flex-col gap-4">
              <a 
                href={`https://api.whatsapp.com/send?phone=8801307085310&text=I%20am%20interested%20in%20${selectedService.title}%20service`} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-sky-500 hover:bg-sky-400 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-sky-500/20"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.334l-.669 2.438 2.492-.654c.991.541 1.884.882 2.92.883 3.181 0 5.767-2.586 5.768-5.766 0-3.181-2.587-5.766-5.768-5.766zM12.031 16.924c-1.012 0-2-.271-2.859-.78l-.204-.123-1.488.39.397-1.451-.135-.215c-.56-.893-.855-1.921-.854-2.978 0-3.076 2.502-5.578 5.58-5.578 3.076 0 5.578 2.502 5.578 5.578-.002 3.078-2.504 5.58-5.58 5.58z"/></svg>
                Contact for Service
              </a>
              <button 
                onClick={closeModal}
                className="w-full py-4 rounded-2xl font-bold text-slate-400 hover:text-white transition-colors"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;

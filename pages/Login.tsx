
import React, { useState, useRef, useEffect } from 'react';
// Redirected modular imports to local wrappers in firebase.ts
import { signInWithEmailAndPassword, auth } from '../firebase';
import { AlertCircle, Lock, Mail, Sparkles, ShieldCheck, MapPin, User, Phone, Building2 } from 'lucide-react';

const Login: React.FC<{ onLogin: any }> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle Mouse Spotlight Effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      containerRef.current.style.setProperty('--mouse-x', `${x}px`);
      containerRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      console.error("Login error code:", err.code);
      if (
        err.code === 'auth/user-not-found' || 
        err.code === 'auth/wrong-password' || 
        err.code === 'auth/invalid-credential'
      ) {
        setError('Invalid email or password. Please check your credentials.');
      } else if (err.code === 'auth/too-many-requests') {
        setError('Too many failed attempts. Account temporarily disabled.');
      } else {
        setError('Access denied. Please contact system administrator.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 p-6 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
      
      <div className="max-w-md w-full relative z-10 space-y-6">
        {/* Rainbow Border Wrapper */}
        <div className="rainbow-border-container rounded-[3.6rem] shadow-[0_0_50px_rgba(99,102,241,0.2)]">
          <div 
            ref={containerRef}
            className="rainbow-spotlight-container bg-slate-900/80 backdrop-blur-xl rounded-[3.5rem] overflow-hidden group"
          >
            {/* Spotlight Layer */}
            <div className="rainbow-spotlight"></div>

            <div className="p-10 sm:p-14 relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-24 h-24 rainbow-animate rounded-[2.5rem] mb-6 text-white shadow-2xl p-1 relative group-hover:scale-110 transition-transform duration-500">
                  <div className="w-full h-full bg-slate-950 rounded-[2.2rem] flex items-center justify-center">
                    <span className="text-4xl font-black italic tracking-tighter bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent">ST</span>
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rainbow-animate rounded-[2.5rem] blur-xl opacity-40 -z-10"></div>
                </div>
                
                <h1 className="text-3xl font-black text-white tracking-tight">Sinthiya Telecom</h1>
                <div className="flex items-center justify-center space-x-2 mt-2">
                  <span className="h-px w-4 bg-indigo-500/50"></span>
                  <p className="text-slate-400 font-bold tracking-[0.3em] uppercase text-[9px]">Cloud Ledger Pro</p>
                  <span className="h-px w-4 bg-indigo-500/50"></span>
                </div>
              </div>

              {error && (
                <div className="mb-8 p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl flex items-center space-x-3 text-rose-400 animate-in slide-in-from-top-2">
                  <AlertCircle size={20} className="shrink-0" />
                  <p className="text-xs font-bold leading-tight">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Email Terminal</label>
                  <div className="relative group/input">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within/input:text-indigo-400 transition-colors" size={18} />
                    <input 
                      required
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-14 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-bold text-white placeholder:text-slate-600"
                      placeholder="admin@sinthiya.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Security Code</label>
                  <div className="relative group/input">
                    <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within/input:text-rose-400 transition-colors" size={18} />
                    <input 
                      required
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-14 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-rose-500/50 transition-all font-bold text-white placeholder:text-slate-600"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full rainbow-animate text-white py-5 rounded-3xl font-black hover:opacity-90 active:scale-[0.97] transition-all shadow-[0_20px_50px_rgba(99,102,241,0.3)] disabled:opacity-50 flex items-center justify-center space-x-3 overflow-hidden relative"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span className="uppercase tracking-widest text-xs">Authenticating...</span>
                      </>
                    ) : (
                      <>
                        <ShieldCheck size={18} className="animate-pulse" />
                        <span className="uppercase tracking-widest text-xs">Access Secure Dashboard</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Dokan Details Section */}
        <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/10 space-y-6 animate-in slide-in-from-bottom-4 duration-1000">
           <div className="flex items-center space-x-4 pb-4 border-b border-white/5">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                 <Building2 size={24} />
              </div>
              <div>
                 <h3 className="text-white font-black tracking-tight text-lg">Shop Information</h3>
                 <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest leading-none mt-1">Verified Enterprise</p>
              </div>
           </div>

           <div className="grid grid-cols-1 gap-4">
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                 <User className="text-amber-500 shrink-0 mt-0.5" size={16} />
                 <div>
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Proprietor</p>
                    <p className="text-sm font-bold text-slate-200">Md. Abdul Momin</p>
                 </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                 <MapPin className="text-indigo-400 shrink-0 mt-0.5" size={16} />
                 <div>
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Headquarters</p>
                    <p className="text-xs font-bold text-slate-300 leading-relaxed">
                       হাট পাঙ্গাসী নাহিদ নিউ মার্কেট, রায়গঞ্জ, সিরাজগঞ্জ
                    </p>
                 </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                 <Phone className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                 <div>
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Customer Support</p>
                    <p className="text-sm font-bold text-slate-200">01307085310</p>
                 </div>
              </div>
           </div>

           <div className="flex items-center justify-center pt-2">
              <div className="px-4 py-1.5 rounded-full bg-slate-800/50 border border-white/5 flex items-center space-x-2">
                 <Sparkles size={10} className="text-indigo-400" />
                 <span className="text-[8px] font-black text-slate-500 uppercase tracking-[0.2em]">Enterprise Edition v3.0</span>
              </div>
           </div>
        </div>
        
        <div className="mt-8 flex flex-col items-center space-y-2 opacity-40">
           <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.4em]">Sinthiya Telecom © 2025</p>
           <div className="flex space-x-4">
             <div className="w-1 h-1 rounded-full bg-slate-700"></div>
             <div className="w-1 h-1 rounded-full bg-slate-700"></div>
             <div className="w-1 h-1 rounded-full bg-slate-700"></div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

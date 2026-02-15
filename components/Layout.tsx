
import React, { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LogOut, 
  Menu, 
  X, 
  User as UserIcon, 
  Building2,
  ChevronRight,
  ShieldCheck,
  Calendar,
  MapPin,
  Clock,
  Award,
  BadgeCheck,
  Star
} from 'lucide-react';
import { auth } from '../firebase';
import { MENU_ITEMS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  onLogout: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isBusinessInfoOpen, setIsBusinessInfoOpen] = useState(false);
  const location = useLocation();
  const currentUser = auth.currentUser;

  // Custom CEO Initials Logo
  const CEOLogo = () => (
    <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white border-2 border-white shadow-md group-hover:scale-105 transition-transform overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent"></div>
      <span className="text-sm font-black tracking-tighter relative z-10">AM</span>
    </div>
  );

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 w-64 bg-white border-r border-slate-200 z-50 transition-transform lg:static lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-indigo-600 tracking-tight">Sinthiya Telecom</h1>
              <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Cloud Management</p>
            </div>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {MENU_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`
                    flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-colors
                    ${isActive 
                      ? 'bg-indigo-600 text-white font-semibold shadow-md' 
                      : 'text-slate-600 hover:bg-slate-100'}
                  `}
                >
                  <div className="flex items-center space-x-3">
                    <span className={isActive ? 'text-white' : 'text-slate-400'}>{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                  {isActive && <ChevronRight size={14} />}
                </Link>
              );
            })}
          </nav>

          {/* Sidebar Footer Branding */}
          <div className="p-4 border-t border-slate-100 space-y-2">
            <div className="flex items-center px-4 py-2 space-x-3 opacity-60">
              <BadgeCheck size={16} className="text-indigo-500" />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Verified System</span>
            </div>
            <button 
              onClick={onLogout}
              className="flex items-center space-x-3 px-4 py-3 w-full rounded-lg text-rose-600 hover:bg-rose-50 text-sm font-semibold transition-colors group"
            >
              <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span>Logout Terminal</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 z-40">
          <div className="flex items-center">
            <button 
              className="lg:hidden p-2 -ml-2 text-slate-500 mr-2"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            <h2 className="text-lg font-bold text-slate-800">
              {MENU_ITEMS.find(item => item.path === location.pathname)?.name || 'Dashboard'}
            </h2>
          </div>

          {/* Executive Header Profile */}
          <div 
            className="flex items-center space-x-4 cursor-pointer group hover:bg-slate-50 pl-4 pr-2 py-1 rounded-xl transition-all"
            onClick={() => setIsBusinessInfoOpen(true)}
          >
            <div className="text-right hidden sm:block">
              <p className="text-sm font-black text-slate-900 leading-none group-hover:text-indigo-600 transition-colors">Abdul Momin</p>
              <div className="flex items-center justify-end space-x-1 mt-1">
                <span className="text-[9px] text-amber-600 font-black uppercase tracking-tighter">Owner & CEO</span>
                <BadgeCheck size={10} className="text-indigo-500" />
              </div>
            </div>
            <CEOLogo />
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 md:p-10">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>

      {/* Executive Business Info Modal */}
      {isBusinessInfoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-300">
            {/* Modal Header */}
            <div className="p-8 bg-slate-900 text-white relative overflow-hidden">
              <div className="absolute right-0 top-0 p-8 opacity-10 rotate-12 scale-150">
                <Award size={120} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center space-x-2 mb-3">
                  <BadgeCheck size={16} className="text-indigo-400" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-300">Official Profile</span>
                </div>
                <h3 className="text-2xl font-black tracking-tight leading-none">Sinthiya Telecom</h3>
                <p className="text-slate-400 text-xs mt-2 font-bold uppercase tracking-widest">Global Executive Dashboard</p>
              </div>
              <button 
                onClick={() => setIsBusinessInfoOpen(false)}
                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* CEO Profile Section */}
            <div className="p-8 space-y-6">
              <div className="flex items-center space-x-5 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center text-white border-4 border-white shadow-xl">
                  <span className="text-2xl font-black tracking-tighter">AM</span>
                </div>
                <div>
                  <h4 className="text-xl font-black text-slate-900">Abdul Momin</h4>
                  <div className="flex items-center space-x-2">
                    <p className="text-xs font-black text-indigo-600 uppercase tracking-widest">Owner & CEO</p>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 px-2">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-indigo-50 border border-indigo-100 p-2.5 rounded-xl text-indigo-600 shrink-0 flex items-center justify-center">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Enterprise Name</p>
                    <p className="font-black text-slate-800">Sinthiya Telecom</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-amber-50 border border-amber-100 p-2.5 rounded-xl text-amber-600 shrink-0 flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Headquarters</p>
                    <p className="text-sm font-bold text-slate-700 leading-tight">
                      হাট পাঙ্গাসী নাহিদ নিউ মার্কেট, রায়গঞ্জ, সিরাজগঞ্জ
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-50 border border-emerald-100 p-2.5 rounded-xl text-emerald-600 shrink-0 flex items-center justify-center">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Member Since</p>
                    <p className="font-black text-slate-800">06 May, 2019</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button 
                  onClick={() => setIsBusinessInfoOpen(false)}
                  className="w-full py-4 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl font-black uppercase text-xs tracking-widest transition-colors"
                >
                  Close Profile
                </button>
              </div>
            </div>

            {/* Modal Footer Branding */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-center space-x-2">
              <Star size={12} className="text-amber-500 fill-amber-500" />
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">Premium Enterprise Edition v2.8</p>
              <Star size={12} className="text-amber-500 fill-amber-500" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;

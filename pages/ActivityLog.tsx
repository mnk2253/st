
import React, { useState, useEffect } from 'react';
import { 
  ClipboardList, 
  Clock, 
  Trash2, 
  Loader2, 
  Search, 
  Calendar,
  Zap,
  CheckCircle2,
  AlertCircle,
  Plus,
  Edit2,
  RotateCcw
} from 'lucide-react';
import { 
  collection, 
  onSnapshot, 
  query, 
  where, 
  getDocs, 
  writeBatch,
  db 
} from '../firebase';
import { ActivityRecord } from '../types';

const ActivityLog: React.FC = () => {
  const [activities, setActivities] = useState<ActivityRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    // 1. Cleanup old logs (Auto-delete when date changes)
    const cleanupOldLogs = async () => {
      try {
        const q = query(collection(db, 'activities'), where('date', '!=', today));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const batch = writeBatch(db);
          snapshot.docs.forEach(d => batch.delete(d.ref));
          await batch.commit();
          console.debug(`Cleaned up ${snapshot.size} old activity logs.`);
        }
      } catch (error) {
        console.error("Cleanup error:", error);
      }
    };

    cleanupOldLogs();

    // 2. Listen to today's logs
    // NOTE: Removed orderBy('createdAt', 'desc') to prevent "query requires an index" error.
    // We will sort the data locally in the state setter.
    const qToday = query(
      collection(db, 'activities'), 
      where('date', '==', today)
    );
    
    const unsubscribe = onSnapshot(qToday, (snapshot) => {
      const logs = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      })) as ActivityRecord[];
      
      // Sort locally by createdAt desc to avoid requiring a composite index in Firestore
      const sortedLogs = logs.sort((a, b) => 
        (b.createdAt || '').localeCompare(a.createdAt || '')
      );
      
      setActivities(sortedLogs);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [today]);

  const filteredActivities = activities.filter(a => 
    a.module.toLowerCase().includes(searchTerm.toLowerCase()) || 
    a.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.action.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getActionIcon = (action: string) => {
    switch (action) {
      case 'ADD': return <Plus size={14} className="text-emerald-500" />;
      case 'EDIT': return <Edit2 size={14} className="text-indigo-500" />;
      case 'DELETE': return <Trash2 size={14} className="text-rose-500" />;
      case 'SYNC': return <RotateCcw size={14} className="text-amber-500" />;
      default: return <Zap size={14} className="text-slate-400" />;
    }
  };

  const getActionStyles = (action: string) => {
    switch (action) {
      case 'ADD': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'EDIT': return 'bg-indigo-50 text-indigo-600 border-indigo-100';
      case 'DELETE': return 'bg-rose-50 text-rose-600 border-rose-100';
      case 'SYNC': return 'bg-amber-50 text-amber-600 border-amber-100';
      default: return 'bg-slate-50 text-slate-500 border-slate-100';
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-20">
      {/* Header */}
      <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="bg-slate-900 p-4 rounded-2xl text-white shadow-xl shadow-slate-200">
            <ClipboardList size={28} />
          </div>
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Today's Activity</h2>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-[0.2em] flex items-center">
              <Calendar size={12} className="mr-1.5" />
              Real-time Event Feed • {today}
            </p>
          </div>
        </div>

        <div className="relative group min-w-[300px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search activities..." 
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 font-bold text-sm"
          />
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
           <div>
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Events</p>
             <p className="text-xl font-black text-slate-900">{activities.length}</p>
           </div>
           <div className="p-3 bg-slate-50 text-slate-400 rounded-xl"><ClipboardList size={20} /></div>
        </div>
        <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
           <div>
             <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-1">New Entries</p>
             <p className="text-xl font-black text-emerald-600">{activities.filter(a => a.action === 'ADD').length}</p>
           </div>
           <div className="p-3 bg-emerald-50 text-emerald-400 rounded-xl"><Plus size={20} /></div>
        </div>
        <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
           <div>
             <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-1">Updates</p>
             <p className="text-xl font-black text-indigo-600">{activities.filter(a => a.action === 'EDIT').length}</p>
           </div>
           <div className="p-3 bg-indigo-50 text-indigo-400 rounded-xl"><Edit2 size={20} /></div>
        </div>
        <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
           <div>
             <p className="text-[10px] font-black text-rose-500 uppercase tracking-widest mb-1">Deletions</p>
             <p className="text-xl font-black text-rose-600">{activities.filter(a => a.action === 'DELETE').length}</p>
           </div>
           <div className="p-3 bg-rose-50 text-rose-400 rounded-xl"><Trash2 size={20} /></div>
        </div>
      </div>

      {/* Feed List */}
      <div className="space-y-4">
        {loading ? (
          <div className="bg-white p-20 rounded-[2.5rem] text-center border border-slate-100">
             <Loader2 className="animate-spin mx-auto text-indigo-500 mb-4" size={40} />
             <p className="font-black text-slate-400 uppercase tracking-widest text-[10px]">Loading Feed...</p>
          </div>
        ) : filteredActivities.length > 0 ? (
          filteredActivities.map((activity) => (
            <div 
              key={activity.id} 
              className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all group flex items-start gap-5"
            >
              <div className={`p-4 rounded-2xl border ${getActionStyles(activity.action)} transition-transform group-hover:scale-110`}>
                 {getActionIcon(activity.action)}
              </div>
              
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className={`text-[10px] font-black px-2.5 py-1 rounded-lg border uppercase tracking-wider ${getActionStyles(activity.action)}`}>
                      {activity.action}
                    </span>
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">•</span>
                    <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">
                      {activity.module}
                    </span>
                  </div>
                  <div className="flex items-center text-slate-400 space-x-1.5">
                    <Clock size={12} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">{activity.time}</span>
                  </div>
                </div>
                
                <p className="text-sm font-black text-slate-800 tracking-tight leading-relaxed">
                  {activity.details}
                </p>
                
                <div className="pt-2 flex items-center space-x-1.5">
                  <CheckCircle2 size={12} className="text-emerald-500" />
                  <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest italic">Logged by System Core</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white p-20 rounded-[3rem] text-center border-2 border-dashed border-slate-100 text-slate-300">
             <AlertCircle size={64} className="mx-auto mb-4 opacity-10" />
             <h3 className="text-2xl font-black text-slate-400 uppercase tracking-tighter">No Activity Yet</h3>
             <p className="text-sm font-bold text-slate-400">Perform an action (Add, Edit, Delete) to see it here.</p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-center pt-8">
         <div className="bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100 flex items-center space-x-3">
            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Auto-cleanup active: Old logs are purged daily</p>
         </div>
      </div>
    </div>
  );
};

export default ActivityLog;

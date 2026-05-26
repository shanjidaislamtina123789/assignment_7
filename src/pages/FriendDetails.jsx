import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import toast from 'react-hot-toast';
import { Phone, MessageSquare, Video, ArrowLeft, Edit2 } from 'lucide-react';

export default function FriendDetails() {
  const { id } = useParams();
  const { friends, addInteraction } = useContext(AppContext);
  const friend = friends.find(f => f.id === parseInt(id));

  if (!friend) {
    return (
      <div className="text-center py-16 space-y-4">
        <p className="text-gray-500 font-medium">Friend profiles record empty.</p>
        <Link to="/" className="text-xs font-bold text-[#244D3F] inline-flex items-center gap-1"><ArrowLeft className="w-3 h-3"/> Dashboard</Link>
      </div>
    );
  }

  const triggerCheckIn = (type) => {
    addInteraction(friend.name, type);
    toast.success(`Interaction logged with ${friend.name}`, {
      style: { fontSize: '12px', borderRadius: '8px', background: '#244D3F', color: '#fff' }
    });
  };

  return (
    <div className="max-w-5xl mx-auto py-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        <div className="lg:col-span-4 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-6 text-center">
          <div className="space-y-3 flex flex-col items-center">
            <img src={friend.picture} alt={friend.name} className="w-20 h-20 rounded-full object-cover border" />
            <div>
              <h2 className="text-lg font-bold text-slate-800">{friend.name}</h2>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-100 capitalize inline-block mt-1">
                {friend.status}
              </span>
            </div>
            <div className="flex justify-center">
              <span className="bg-emerald-50 text-[#244D3F] text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                {friend.tags[0]}
              </span>
            </div>
            <p className="text-xs text-gray-400 italic font-medium">"{friend.bio}"</p>
            <p className="text-[11px] text-gray-400 font-medium">{friend.email}</p>
          </div>

          <div className="pt-4 border-t border-gray-50 flex flex-col gap-2">
            <button className="w-full text-left text-xs font-semibold py-2 px-3 hover:bg-gray-50 rounded-lg text-gray-600 flex items-center gap-2 border border-gray-100">
              <span>⏰</span> Snooze 2 Weeks
            </button>
            <button className="w-full text-left text-xs font-semibold py-2 px-3 hover:bg-gray-50 rounded-lg text-gray-600 flex items-center gap-2 border border-gray-100">
              <span>📦</span> Archive
            </button>
            <button className="w-full text-left text-xs font-bold py-2 px-3 bg-rose-50 hover:bg-rose-100 rounded-lg text-rose-600 flex items-center gap-2 border border-rose-100/50">
              <span>🗑️</span> Delete
            </button>
          </div>
        </div>


        <div className="lg:col-span-8 space-y-4">
     
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm text-center">
              <p className="text-xl font-black text-slate-800">{friend.days_since_contact}</p>
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mt-0.5">Days Since Contact</p>
            </div>
            <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm text-center">
              <p className="text-xl font-black text-[#244D3F]">{friend.goal}</p>
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mt-0.5">Goal (Days)</p>
            </div>
            <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm text-center">
              <p className="text-xs font-bold text-slate-800 py-1">{friend.next_due_date}</p>
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mt-1">Next Due</p>
            </div>
          </div>

        
          <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm flex justify-between items-center">
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Relationship Goal</h4>
              <p className="text-xs font-bold text-slate-700 mt-1">Connect every <span className="text-[#244D3F] font-black">{friend.goal} days</span></p>
            </div>
            <button className="p-1.5 border border-gray-100 hover:bg-gray-50 rounded-lg text-gray-500">
              <Edit2 className="w-3 h-3" />
            </button>
          </div>

          
          <div className="bg-white border border-gray-100 p-5 rounded-xl shadow-sm space-y-3">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Quick Check-In</h4>
            <div className="grid grid-cols-3 gap-3">
              <button onClick={() => triggerCheckIn('Call')} className="flex flex-col sm:flex-row items-center justify-center gap-1.5 py-3 border border-gray-100 hover:bg-gray-50 rounded-xl text-slate-700 font-bold text-xs">
                <Phone className="w-3.5 h-3.5 text-emerald-600" /> Call
              </button>
              <button onClick={() => triggerCheckIn('Text')} className="flex flex-col sm:flex-row items-center justify-center gap-1.5 py-3 border border-gray-100 hover:bg-gray-50 rounded-xl text-slate-700 font-bold text-xs">
                <MessageSquare className="w-3.5 h-3.5 text-blue-600" /> Text
              </button>
              <button onClick={() => triggerCheckIn('Video')} className="flex flex-col sm:flex-row items-center justify-center gap-1.5 py-3 border border-gray-100 hover:bg-gray-50 rounded-xl text-slate-700 font-bold text-xs">
                <Video className="w-3.5 h-3.5 text-purple-600" /> Video
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
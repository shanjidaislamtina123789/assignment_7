import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { Phone, MessageSquare, Video, ArrowLeft } from 'lucide-react';
import { toast } from 'react-toastify'; 

export default function FriendDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { friends, logInteraction } = useContext(AppContext);
  const friend = friends.find(f => f.id === parseInt(id));

  if (!friend) return <div className="text-center py-20 text-gray-500 font-bold">Friend not found</div>;

  const statusConfig = {
    'on-track': { bg: 'bg-[#244D3F]', text: 'text-white', label: 'On Track' },
    'almost due': {  bg: 'bg-[#DDA83A]', text: 'text-white', label: 'Almost Due' },
    'overdue': { bg: 'bg-[#E05353]', text: 'text-white',  label: 'Overdue' }
  };

  
  const currentStatus = statusConfig[friend.status] || { bg: 'bg-gray-100', text: 'text-gray-700', label: friend.status };

  const handleAction = (type) => {
    logInteraction(friend.name, type);

    toast.success(`${type} with ${friend.name} logged successfully! 🚀`, {
      position: "top-right",
      autoClose: 3000,
      theme: "light",
    });
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
     

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        <div className="lg:col-span-5 bg-white rounded-[40px] p-8 shadow-sm border border-gray-50 flex flex-col items-center text-center">
          <img src={friend.picture} className="w-40 h-40 rounded-full border-8 border-gray-50 mb-6 shadow-md object-cover" alt={friend.name} />
          <h1 className="text-4xl font-black text-[#244D3F] mb-2">{friend.name}</h1>
          
          <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${currentStatus.bg} ${currentStatus.text} mb-4`}>
            {currentStatus.label}
          </span>

          <div className="flex flex-wrap justify-center gap-1 mb-4">
            {friend.tags?.map((tag, idx) => (
              <span key={idx} className="bg-gray-50 text-gray-500 text-[10px] font-bold px-2.5 py-0.5 rounded-md border">#{tag}</span>
            ))}
          </div>

          <p className="text-gray-600 text-sm max-w-sm mb-4 leading-relaxed">{friend.bio}</p>
          <p className="text-xs text-gray-400 font-medium mb-10">{friend.email}</p>

          <div className="w-full space-y-2 pt-4 border-t border-gray-50">
            <button className="w-full py-2.5 bg-gray-50 text-gray-700 font-bold text-xs rounded-xl"> Snooze 2 Weeks</button>
            <button className="w-full py-2.5 bg-gray-50 text-gray-700 font-bold text-xs rounded-xl"> Archive</button>
            <button className="w-full py-2.5 bg-rose-50 text-rose-600 font-bold text-xs rounded-xl"> Delete</button>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">

          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="bg-white p-5 rounded-3xl border border-gray-50 shadow-sm">
              <span className="block text-2xl font-black text-[#244D3F]">{friend.days_since_contact}</span>
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Days Since Contact</p>
            </div>
            <div className="bg-white p-5 rounded-3xl border border-gray-50 shadow-sm">
              <span className="block text-2xl font-black text-[#244D3F]">{friend.goal}</span>
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Goal (Days)</p>
            </div>
            <div className="bg-white p-5 rounded-3xl border border-gray-50 shadow-sm">
              <span className="block text-xs font-black text-[#244D3F] py-2 truncate">{friend.next_due_date}</span>
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Next Due Date</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-50 shadow-sm flex justify-between items-center">
            <div>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Relationship Goal</span>
              <p className="text-gray-700 text-sm font-medium">Keep contact every <span className="font-extrabold text-[#244D3F]">{friend.goal} days</span></p>
            </div>
            <button className="p-2.5 bg-gray-50 text-gray-600 rounded-xl">Edit</button>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-50 shadow-sm space-y-4">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">Quick Check-In</span>
            <div className="grid grid-cols-3 gap-4">
              <button onClick={() => handleAction('Call')} className="flex flex-col items-center justify-center p-4 bg-[#F8FAFC] hover:bg-[#244D3F] hover:text-white rounded-2xl text-[#244D3F] font-bold text-xs gap-2 transition-all">
                <Phone size={18} /> Call
              </button>
              <button onClick={() => handleAction('Text')} className="flex flex-col items-center justify-center p-4 bg-[#F8FAFC] hover:bg-[#244D3F] hover:text-white rounded-2xl text-[#244D3F] font-bold text-xs gap-2 transition-all">
                <MessageSquare size={18} /> Text
              </button>
              <button onClick={() => handleAction('Video')} className="flex flex-col items-center justify-center p-4 bg-[#F8FAFC] hover:bg-[#244D3F] hover:text-white rounded-2xl text-[#244D3F] font-bold text-xs gap-2 transition-all">
                <Video size={18} /> Video
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
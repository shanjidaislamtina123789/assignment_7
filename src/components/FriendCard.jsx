import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function FriendCard({ friend }) {
  const navigate = useNavigate();

  const statusColors = {
    'on-track': 'bg-green-50 text-green-700 border-green-200',
    'almost due': 'bg-amber-50 text-amber-700 border-amber-200',
    'overdue': 'bg-rose-50 text-rose-700 border-rose-200'
  };

  return (
    <div 
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col items-center justify-between"
    >
      <div className="space-y-3 w-full flex flex-col items-center">
        <img 
          src={friend.picture} 
          alt={friend.name} 
          className="w-16 h-16 rounded-full object-cover border border-gray-100 shadow-inner"
        />
        <div>
          <h3 className="font-bold text-slate-800 text-sm">{friend.name}</h3>
          <p className="text-[11px] text-gray-400 font-medium mt-0.5">{friend.days_since_contact}d ago</p>
        </div>
      </div>

      <div className="mt-4 space-y-3 w-full flex flex-col items-center">
        <div className="flex flex-wrap gap-1 justify-center">
          {friend.tags.map((tag, i) => (
            <span key={i} className="bg-emerald-50 text-[#244D3F] text-[10px] px-2 py-0.5 rounded-md font-bold uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
        <span className={`text-[10px] font-bold px-3 py-1 rounded-full border capitalize ${statusColors[friend.status]}`}>
          {friend.status}
        </span>
      </div>
    </div>
  );
}
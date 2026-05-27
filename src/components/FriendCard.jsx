import React from 'react';
import { Link } from 'react-router-dom';
export default function FriendCard({ friend }) {
  const statusConfig = {
    'on-track': { bg: 'bg-[#244D3F]', text: 'text-white', label: 'On Track' },
    'almost due': { bg: 'bg-[#DDA83A]', text: 'text-white', label: 'Almost Due' },
    'overdue': { bg: 'bg-[#E05353]', text: 'text-white', label: 'Overdue' }
  };

  const currentStatus = statusConfig[friend.status] || { bg: 'bg-gray-500', text: 'text-white', label: friend.status };
  return (
    <Link to={`/friend/${friend.id}`} className="block transition-transform hover:-translate-y-1 duration-200">
      <div className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] h-full">
        
        <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
          <img 
            src={friend.picture} 
            alt={friend.name} 
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="font-bold text-[#1E1E1E] text-lg mb-0.5 tracking-tight">{friend.name}</h3>
        
        <p className="text-xs font-medium text-gray-400 mb-3">
          {friend.days_since_contact}d ago
        </p>

        <div className="flex flex-wrap justify-center gap-1.5 mb-4">
          {friend.tags?.map((tag, idx) => (
            <span key={idx} className="bg-[#E6F4EA] text-[#244D3F] text-[10px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto w-full">
          <span className={`inline-block text-[10px] font-bold px-4 py-1 rounded-full ${currentStatus.bg} ${currentStatus.text} shadow-sm`}>
            {currentStatus.label}
          </span>
        </div>

      </div>
    </Link>
  );
}
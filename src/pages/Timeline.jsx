import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

export default function Timeline() {
  const { timeline } = useContext(AppContext);
  const [filter, setFilter] = useState('All');

  const filteredData = timeline.filter(item => 
    filter === 'All' ? true : item.type === filter
  );

  const getEmoji = (type) => {
    if (type === 'Call') return '📞';
    if (type === 'Text') return '💬';
    return '📹';
  };

  return (
    <div className="max-w-2xl mx-auto py-6 space-y-6">
      <div className="flex justify-between items-center border-b border-gray-100 pb-3">
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Timeline</h1>
        
  
        <select 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
          className="text-xs font-bold border border-gray-200 rounded-lg p-1.5 bg-white text-gray-600 outline-none"
        >
          <option value="All">Filter timeline</option>
          <option value="Call">Calls Only</option>
          <option value="Text">Texts Only</option>
          <option value="Video">Videos Only</option>
        </select>
      </div>

      <div className="space-y-2">
        {filteredData.map((item) => (
          <div key={item.id} className="bg-white border border-gray-100 rounded-xl p-3 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <span className="text-base p-1.5 bg-gray-50 rounded-lg border border-gray-100">{getEmoji(item.type)}</span>
              <div>
                <p className="text-xs font-bold text-slate-800">{item.title}</p>
                <p className="text-[10px] text-gray-400 font-medium mt-0.5">{item.date}</p>
              </div>
            </div>
          </div>
        ))}
        {filteredData.length === 0 && (
          <p className="text-center py-12 text-xs text-gray-400 font-medium">No recorded interaction match filters.</p>
        )}
      </div>
    </div>
  );
}
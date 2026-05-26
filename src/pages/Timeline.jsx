import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

import callIcon from '../assets/call.png';
import textIcon from '../assets/text.png';
import videoIcon from '../assets/video.png';

export default function Timeline() {
  const { timeline } = useContext(AppContext);
  const [filter, setFilter] = useState('All');

  const filteredData = timeline.filter(item => 
    filter === 'All' ? true : item.type === filter
  );

  const getIcon = (type) => {
    if (type === 'Call') return callIcon;
    if (type === 'Text') return textIcon;
    return videoIcon; 
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
          <option value="All">Filter Timeline</option>
          <option value="Call">Calls Only</option>
          <option value="Text">Texts Only</option>
          <option value="Video">Videos Only</option>
        </select>
      </div>

  
      <div className="space-y-4">
        {filteredData.length === 0 ? (
          <p className="text-center text-gray-400 py-10">No interactions found.</p>
        ) : (
          filteredData.map((item) => (
            <div key={item.id} className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm border border-gray-50/50">
           
              <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden p-2">
                <img 
                  src={getIcon(item.type)} 
                  alt={item.type} 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-800 text-sm">{item.title}</h3>
                <p className="text-xs text-gray-400">{item.date}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
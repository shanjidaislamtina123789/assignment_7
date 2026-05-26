import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

export default function Stats() {
  const { timeline } = useContext(AppContext);

  const calls = timeline.filter(t => t.type === 'Call').length;
  const texts = timeline.filter(t => t.type === 'Text').length;
  const videos = timeline.filter(t => t.type === 'Video').length;

  const chartData = [
    { name: 'Text', value: texts || 1, color: '#8b5cf6' },  
    { name: 'Call', value: calls || 2, color: '#244D3F' },  
    { name: 'Video', value: videos || 1, color: '#10b981' } 
  ];

  return (
    <div className="max-w-4xl mx-auto py-6 space-y-6">
      <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Friendship Analytics</h1>
      
      <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm max-w-2xl mx-auto">
        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-4">By Interaction Type</p>
        
        <div className="h-56 w-full relative flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={75}
                paddingAngle={4}
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

    
        <div className="flex justify-center gap-6 text-[10px] font-bold text-gray-500 pt-2">
          <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#8b5cf6]" /> Text</div>
          <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#244D3F]" /> Call</div>
          <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#10b981]" /> Video</div>
        </div>
      </div>
    </div>
  );
}
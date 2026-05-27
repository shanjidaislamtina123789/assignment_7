import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export default function Stats() {
  const { timeline } = useContext(AppContext);

  const textCount = timeline.filter(item => item.type === 'Text').length;
  const callCount = timeline.filter(item => item.type === 'Call').length;
  const videoCount = timeline.filter(item => item.type === 'Video').length;

  const data = [
    { name: 'Text', value: textCount || 1 },
    { name: 'Call', value: callCount || 1 },
    { name: 'Video', value: videoCount || 1 }
  ];

  const COLORS = ['#A855F7', '#244D3F', '#34D399'];

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 space-y-6">

      <div>
        <h1 className="text-4xl font-bold text-[#1E1E1E] tracking-tight mb-1">Friendship Analytics</h1>
      
      </div>

      <div className="w-full bg-white p-8 rounded-2xl border border-gray-100 flex flex-col items-center shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
        <span className="text-xs font-bold text-[#1E1E1E] block mb-8 text-left w-full border-b border-gray-50 pb-3">
          By Interaction Type
        </span>
        
        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70} 
                outerRadius={95}
                paddingAngle={4}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend 
                iconType="circle" 
                iconSize={8}
                wrapperStyle={{ fontSize: '12px', fontWeight: '700', color: '#6B7280', paddingTop: '20px' }} 
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
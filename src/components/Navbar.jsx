import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Clock, BarChart3 } from 'lucide-react';

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all ${
      isActive 
        ? 'bg-[#244D3F] text-white shadow-sm' 
        : 'text-gray-600 hover:bg-gray-100'
    }`;

  return (
    <nav className="bg-white border-b border-gray-100 py-3">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="font-extrabold text-xl text-gray-900 tracking-tight">
          KeenKeeper
        </NavLink>
        
        <div className="flex gap-2">
          <NavLink to="/" end className={linkClass}>
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </NavLink>
          <NavLink to="/timeline" className={linkClass}>
            <Clock className="w-3.5 h-3.5" />
            <span>Timeline</span>
          </NavLink>
          <NavLink to="/stats" className={linkClass}>
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Stats</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#244D3F] text-white text-center py-12 mt-auto">
      <div className="max-w-4xl mx-auto px-4 space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">KeenKeeper</h2>
        <p className="text-gray-300 text-xs max-w-sm mx-auto font-light">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <div className="pt-2">
          <p className="text-[10px] text-gray-400 font-semibold tracking-widest uppercase mb-2">Social Links</p>
          <div className="flex justify-center gap-3">
            <span className="w-6 h-6 rounded-full bg-white text-[#244D3F] flex items-center justify-center font-bold text-xs cursor-pointer">f</span>
            <span className="w-6 h-6 rounded-full bg-white text-[#244D3F] flex items-center justify-center font-bold text-xs cursor-pointer">i</span>
            <span className="w-6 h-6 rounded-full bg-white text-[#244D3F] flex items-center justify-center font-bold text-xs cursor-pointer">x</span>
          </div>
        </div>
        <div className="pt-8 border-t border-emerald-800/40 flex flex-col sm:flex-row justify-between items-center text-[11px] text-gray-400 gap-2">
          <p>&copy; 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="cursor-pointer hover:underline">Privacy Policy</span>
            <span className="cursor-pointer hover:underline">Terms of Service</span>
            <span className="cursor-pointer hover:underline">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
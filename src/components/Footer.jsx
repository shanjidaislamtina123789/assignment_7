import React from 'react';
import logoXlImg from '../../assets/logo-xl.png';
import facebookIcon from '../../assets/facebook.png';
import instagramIcon from '../../assets/instagram.png';
import twitterIcon from '../../assets/twitter.png';

export default function Footer() {
  return (
    <footer className="bg-[#244D3F] text-white pt-12 pb-6 px-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6">
        
        <div className="flex flex-col items-center">
          <img 
            src={logoXlImg} 
            alt="KeenKeeper Large Logo" 
            className="h-12 w-auto object-contain mb-3" 
          />
          <p className="text-gray-300 text-sm max-w-md mx-auto">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>
        </div>


        <div className="flex flex-col items-center space-y-3">
          <p className="text-[10px] text-gray-400 font-semibold tracking-widest uppercase">Social Links</p>
          <div className="flex justify-center gap-4">
            
 
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 flex items-center justify-center bg-white rounded-full p-1.5 hover:scale-105 transition-transform shadow-sm">
              <img src={facebookIcon} alt="Facebook" className="w-full h-full object-contain" />
            </a>

  
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 flex items-center justify-center bg-white rounded-full p-1.5 hover:scale-105 transition-transform shadow-sm">
              <img src={instagramIcon} alt="Instagram" className="w-full h-full object-contain" />
            </a>


            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 flex items-center justify-center bg-white rounded-full p-1.5 hover:scale-105 transition-transform shadow-sm">
              <img src={twitterIcon} alt="Twitter" className="w-full h-full object-contain" />
            </a>

          </div>
        </div>

        <div className="w-full pt-6 border-t border-emerald-800/40 flex flex-col sm:flex-row justify-between items-center text-[11px] text-gray-400 gap-2">
          <p>&copy; {new Date().getFullYear()} KeenKeeper. All rights reserved.</p>
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
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-6xl font-black text-[#244D3F] mb-4">404</h1>
      <p className="text-gray-500 font-bold mb-6">Oops! The page you are looking for doesn't exist.</p>
      <Link to="/" className="px-6 py-3 bg-[#244D3F] text-white font-bold text-xs rounded-xl hover:bg-opacity-90 transition-all">
        Go Back Home
      </Link>
    </div>
  );
}
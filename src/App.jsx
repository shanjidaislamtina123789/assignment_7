import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Toaster } from 'react-hot-toast';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FriendDetails from './pages/FriendDetails';
import Timeline from './pages/Timeline';
import Stats from './pages/Stats';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">
          <Navbar />
          <main className="flex-grow px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/friend/:id" element={<FriendDetails />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/stats" element={<Stats />} />
              
              {/* 🎯 Requirement 10.1: 404 Page for unknown routes */}
              <Route path="*" element={
                <div className="text-center py-20 bg-white rounded-xl shadow-sm max-w-md mx-auto my-10 p-8 border border-gray-100">
                  <h1 className="text-6xl font-black text-[#244D3F] mb-4">404</h1>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Page Not Found</h2>
                  <p className="text-gray-500 mb-6">The page you are looking for doesn't exist or has been moved.</p>
                  <Link to="/" className="inline-block bg-[#244D3F] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-opacity-90 transition-all shadow-sm">
                    Back to Home
                  </Link>
                </div>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;

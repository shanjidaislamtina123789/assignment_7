import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; // 🎯 ফিক্সড: কার্লি ব্র্যাকেট { } যুক্ত করা হয়েছে
import 'react-toastify/dist/ReactToastify.css';

import { AppProvider } from './context/AppContext'; // 🎯 ফিক্সড: AppProvider-এ কার্লি ব্র্যাকেট হবে
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FriendDetails from './pages/FriendDetails';
import Timeline from './pages/Timeline';
import Stats from './pages/Stats';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/friend/:id" element={<FriendDetails />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
          
          {/* গ্লোবাল টোস্ট কন্টেইনার */}
          <ToastContainer position="top-right" autoClose={3000} theme="light" />
        </div>
      </Router>
    </AppProvider>
  );
}

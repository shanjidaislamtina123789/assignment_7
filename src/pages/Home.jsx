import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import FriendCard from '../components/FriendCard';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Home() {
  const { friends, timeline } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  const totalFriends = friends.length;
  const onTrack = friends.filter(f => f.status === 'on-track').length;
  const needAttention = friends.filter(f => f.status === 'overdue' || f.status === 'almost due').length;
  const totalInteractions = timeline.length;

  return (
    <div className="space-y-10 max-w-5xl mx-auto py-6">
      <section className="text-center space-y-3 max-w-xl mx-auto">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Friends to keep close in your life
        </h1>
        <p className="text-xs text-gray-400 max-w-sm mx-auto font-medium">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <button className="bg-[#244D3F] hover:bg-emerald-900 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-sm">
          <span>+ Add a friend</span>
        </button>
      </section>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Friends', val: totalFriends },
          { label: 'On Track', val: onTrack },
          { label: 'Need Attention', val: needAttention },
          { label: 'Interactions This Month', val: totalInteractions }
        ].map((card, i) => (
          <div key={i} className="bg-white border border-gray-100 p-5 rounded-xl text-center shadow-sm">
            <p className="text-2xl font-black text-slate-800">{card.val}</p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-1">{card.label}</p>
          </div>
        ))}
      </section>
      <section className="space-y-4">
        <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">Your Friends</h2>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {friends.map(f => (
              <FriendCard key={f.id} friend={f} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
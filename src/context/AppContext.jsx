import React, { createContext, useState, useEffect } from 'react';
import initialFriends from '../data/friends.json';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [timeline, setTimeline] = useState([
    { id: 1, title: "Meetup with Tom Oscar", type: "Video", date: "May 25, 2026" },
    { id: 2, title: "Text with Emma Wilson", type: "Text", date: "May 24, 2026" },
    { id: 3, title: "Call with Lisa Nakamura", type: "Call", date: "May 15, 2026" }
  ]);

  useEffect(() => {
    setFriends(initialFriends);
  }, []);

  const addInteraction = (friendName, type) => {
    const newEvent = {
      id: Date.now(),
      title: `${type} with ${friendName}`,
      type: type,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };
    setTimeline([newEvent, ...timeline]);

    setFriends(prev => prev.map(f => {
      if (f.name === friendName) {
        return { ...f, days_since_contact: 0, status: 'on-track' };
      }
      return f;
    }));
  };

  return (
    <AppContext.Provider value={{ friends, timeline, addInteraction }}>
      {children}
    </AppContext.Provider>
  );
};
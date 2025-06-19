'use client';

import { useEffect, useState } from 'react';

export default function BannerStrip() {
  const [visible, setVisible] = useState(true);
  const [status, setStatus] = useState('checking'); // open | closed | checking
  const [closingTime, setClosingTime] = useState(null);

  const openingHours = {
    0: { open: 8.5, close: 15.5 }, // Sunday
    1: { open: 8.5, close: 15.5 }, // Monday
    2: null,                       // Tuesday (closed)
    3: null,                       // Wednesday (closed)
    4: { open: 8.5, close: 15.5 }, // Thursday
    5: { open: 8.5, close: 15.5 }, // Friday
    6: { open: 8.5, close: 15.5 }, // Saturday
  };

  useEffect(() => {
    const now = new Date();
    const day = now.getDay(); // Sunday = 0
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hour + minutes / 60;

    const today = openingHours[day];

    if (today && currentTime >= today.open && currentTime < today.close) {
      setStatus('open');
      setClosingTime(today.close);
    } else {
      setStatus('closed');
    }
  }, []);

  if (!visible) return null;

  const formatTime = (decimal) => {
    const h = Math.floor(decimal);
    const m = Math.round((decimal - h) * 60);
    const timeStr = `${h}:${m.toString().padStart(2, '0')}`;
    return new Date(`1970-01-01T${timeStr}:00`).toLocaleTimeString([], {
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  return (
    <div className="bg-stone-600 text-white text-sm py-2 px-6 flex justify-between items-center font-medium">
      <div className="max-w-7xl mx-auto flex-1 flex justify-center md:justify-between items-center flex-wrap gap-2">
        <span>
          {status === 'open'
            ? `☕ We’re open now — until ${formatTime(closingTime)} today!`
            : '⚠️ We’re currently closed — click here to see opening hours.'}
        </span>
        <a
          href="/contact"
          className="underline hover:opacity-80 transition"
        >
          View Opening Hours
        </a>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="ml-4 text-lg font-bold hover:opacity-70 transition"
        aria-label="Close"
      >
        ×
      </button>
    </div>
  );
}
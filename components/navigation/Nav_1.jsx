'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#f9f7f4] w-full py-3 px-4 md:px-8 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto bg-white rounded-full shadow-md px-6 py-4 flex items-center justify-between">
        
        {/* Left: Logo + Links */}
        <div className="flex items-center gap-8">
          <a href="/">
          Wheldrakes
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-700">
            <a href="/" className="hover:text-amber-600 transition">Menu</a>
            <a href="/gallery" className="hover:text-amber-600 transition">Gallery</a>
            <a href="/about" className="hover:text-amber-600 transition">About</a>
            <a href="/contact" className="hover:text-amber-600 transition">Contact</a>
          </nav>
        </div>

        {/* Right: CTA or Toggle */}
        <div className="hidden md:block">
          <a
            href="/contact"
            className="text-white hover:text-white hover:bg-slate-600 border border-slate-600 px-5 py-1.5 rounded-full text-sm font-medium transition"
          >
            Find Us
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white rounded-b-xl shadow-md mt-1 mx-4 px-6 py-4 space-y-4 text-sm font-semibold text-gray-700 transition-all">
          <a href="/" onClick={() => setIsOpen(false)} className="block hover:text-amber-600">Menu</a>
          <a href="/gallery" onClick={() => setIsOpen(false)} className="block hover:text-amber-600">Gallery</a>
          <a href="/about" onClick={() => setIsOpen(false)} className="block hover:text-amber-600">About</a>
          <a href="/contact" onClick={() => setIsOpen(false)} className="block hover:text-amber-600">Contact</a>
          <a
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-amber-600 text-white px-4 py-2 rounded-full font-medium shadow hover:bg-amber-700 transition"
          >
            Find Us
          </a>
        </div>
      )}
    </header>
  );
}
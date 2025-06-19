import { Facebook, Instagram } from 'lucide-react';
import { FaTripadvisor } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        
        {/* Copyright */}
        <p className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Wheldrakes Café, York. All rights reserved.
        </p>

        {/* Nav Links */}
        <nav className="flex space-x-6 mb-4 md:mb-0">
          <a href="/" className="hover:text-gray-900 transition">Menu</a>
          <a href="/gallery" className="hover:text-gray-900 transition">Gallery</a>
          <a href="/about" className="hover:text-gray-900 transition">About</a>
          <a href="/contact" className="hover:text-gray-900 transition">Contact</a>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/wheldrakes_cafe/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-gray-900 transition"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com/freshdailybakes/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-gray-900 transition"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://www.tripadvisor.co.uk/Restaurant_Review-g186346-d12452122-Reviews-Wheldrakes-York_North_Yorkshire_England.html"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TripAdvisor"
            className="hover:text-gray-900 transition"
          >
            <FaTripadvisor className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Anchor, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#080D1A] text-white sticky top-0 z-50 font-sans border-b border-amber-500/20">
      {/* Top Banner Bar */}
      <div className="border-b border-white/10 bg-[#060A15] py-2 px-4 md:px-8 text-xs text-gray-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Contact Details */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 md:gap-6 text-[11px] sm:text-xs">
            <a href="tel:+971544130427" className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>+971544130427</span>
            </a>
            <a href="mailto:info@simapetrol.com" className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>info@simapetrol.com</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 text-[11px] sm:text-xs">
            <span className="text-gray-400">Follow us</span>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-[#D4AF37] transition-colors" aria-label="LinkedIn">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
                </svg>
              </a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors" aria-label="Twitter">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors" aria-label="Facebook">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.79c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.89h-2.33v6.99C18.34 21.12 22 16.99 22 12z" />
                </svg>
              </a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors" aria-label="Instagram">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#D4AF37]/50 flex items-center justify-center shadow-lg group-hover:border-[#D4AF37] transition-all">
            <Anchor className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-base sm:text-lg tracking-wider text-white group-hover:text-[#D4AF37] transition-colors">
              SIMA PETROL
            </span>
            <span className="text-[8px] sm:text-[9px] tracking-widest text-amber-400/80 uppercase">
              Bunker &amp; Lubricant Trading
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-200">
          <Link to="/" className="hover:text-[#D4AF37] transition-colors">
            Home
          </Link>
          <Link to="/products-services" className="hover:text-[#D4AF37] transition-colors">
            Products &amp; Services
          </Link>
          <Link to="/real-time-market-data" className="hover:text-[#D4AF37] transition-colors">
            Real Time Market Data
          </Link>
          <Link to="/about-us" className="hover:text-[#D4AF37] transition-colors">
            About us
          </Link>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/contact-us" className="px-5 py-2 text-xs font-semibold text-[#D4AF37] bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/50 hover:border-[#D4AF37] rounded-md transition-all text-center">
            Contact us
          </Link>
          <button className="px-5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 rounded-md shadow-lg hover:shadow-blue-500/25 transition-all">
            Request a quote
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6 text-[#D4AF37]" /> : <Menu className="w-6 h-6 text-[#D4AF37]" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0A101D] border-b border-white/10 px-4 pt-3 pb-6 space-y-4 font-sans animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-gray-200">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#D4AF37] py-1.5 border-b border-white/5 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/products-services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#D4AF37] py-1.5 border-b border-white/5 transition-colors"
            >
              Products &amp; Services
            </Link>
            <Link
              to="/real-time-market-data"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#D4AF37] py-1.5 border-b border-white/5 transition-colors"
            >
              Real Time Market Data
            </Link>
            <Link
              to="/about-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#D4AF37] py-1.5 transition-colors"
            >
              About us
            </Link>
          </nav>

          <div className="flex flex-col gap-2.5 pt-2">
            <Link
              to="/contact-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-2.5 text-xs font-semibold text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/50 rounded-md text-center block"
            >
              Contact us
            </Link>
            <button className="w-full py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-700 to-blue-600 rounded-md shadow-lg">
              Request a quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

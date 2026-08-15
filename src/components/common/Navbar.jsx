import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, Mail, Anchor, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#C2903A] font-semibold transition-colors border-b-2 border-[#C2903A] pb-1"
      : "hover:text-[#C2903A] transition-colors pb-1 border-b-2 border-transparent";

  const mobileNavLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#D4AF37] font-semibold py-1.5 border-b border-white/10 transition-colors"
      : "hover:text-[#D4AF37] py-1.5 border-b border-white/5 transition-colors";

  return (
    <header className="w-full bg-[#0B132B] text-white sticky top-0 z-50 font-sans border-b border-amber-500/20">
      {/* Top Banner Bar */}
      <div className="bg-[#C2903A] text-white py-1.5 px-4 md:px-8 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Contact Details */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 md:gap-6 text-[11px] sm:text-xs">
            <a href="tel:+971544110427" className="flex items-center gap-1.5 hover:text-gray-200 transition-colors">
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>+971544110427</span>
            </a>
            <a href="mailto:info@simapetrol.com" className="flex items-center gap-1.5 hover:text-gray-200 transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>info@simapetrol.com</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 text-[11px] sm:text-xs">
            <span className="text-white/90">Follow us</span>
            <div className="flex items-center gap-2.5">
              <a href="#" className="hover:text-gray-200 transition-colors" aria-label="LinkedIn">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors" aria-label="Twitter">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors" aria-label="Facebook">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.79c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.89h-2.33v6.99C18.34 21.12 22 16.99 22 12z" />
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
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-[#0F1A36] border border-white/20 flex items-center justify-center shadow-lg group-hover:border-[#C2903A] transition-all">
            <Anchor className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-base sm:text-lg tracking-wider text-white group-hover:text-[#C2903A] transition-colors">
              SIMA PETROL
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-200">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/products-services" className={navLinkClass}>
            Products &amp; Services
          </NavLink>
          <NavLink to="/real-time-market-data" className={navLinkClass}>
            Real Time Market Data
          </NavLink>
          <NavLink to="/about-us" className={navLinkClass}>
            About us
          </NavLink>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive
                ? "px-5 py-2 text-xs font-semibold text-white bg-[#0B132B] border border-[#C2903A] rounded transition-all text-center"
                : "px-5 py-2 text-xs font-semibold text-gray-900 bg-[#C2903A] hover:bg-[#b08130] rounded transition-all text-center"
            }
          >
            Contact us
          </NavLink>
          <button className="px-5 py-2 text-xs font-semibold text-white bg-transparent hover:bg-white/10 border border-white/60 hover:border-white rounded transition-all">
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
            <NavLink
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={mobileNavLinkClass}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/products-services"
              onClick={() => setIsMobileMenuOpen(false)}
              className={mobileNavLinkClass}
            >
              Products &amp; Services
            </NavLink>
            <NavLink
              to="/real-time-market-data"
              onClick={() => setIsMobileMenuOpen(false)}
              className={mobileNavLinkClass}
            >
              Real Time Market Data
            </NavLink>
            <NavLink
              to="/about-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className={mobileNavLinkClass}
            >
              About us
            </NavLink>
          </nav>

          <div className="flex flex-col gap-2.5 pt-2">
            <NavLink
              to="/contact-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-2.5 text-xs font-semibold text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/50 rounded-md text-center block"
            >
              Contact us
            </NavLink>
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

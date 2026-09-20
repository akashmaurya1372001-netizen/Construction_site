import React, { useState } from 'react';
import { HardHat, Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import logo from "../assets/Bccwhite.png"
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export const Navbar = ({ activeSection, onNavigate, onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
   // { id: 'projects', label: 'Projects' },
   
    { id: 'why-us', label: 'Why Choose Us' },
    
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="site-header"
       className="sticky top-1 z-40 w-full bg-stone-900 backdrop-blur-md border-b border-stone-800 text-stone-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <a
            id="brand-logo-link"
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('hero');
            }}
            className="flex items-center space-x-3 group"
          >
            <div className="flex items-center justify-center transition-colors">
             <img src={logo} alt="bcc_logo" className='w-50 h-25 rounded-2xl' />
            </div>
            
          </a>

          {/* Desktop Nav Links */}
          <nav id="desktop-nav-menu" className="hidden lg:flex items-center space-x-1 font-medium text-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-2 rounded-md transition-colors text-xl ${
                    isActive
                      ? 'text-amber-400 bg-stone-800 font-semibold'
                      : 'text-stone-300 hover:text-white hover:bg-stone-800/60'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>


          

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-5 ml-auto">
            
                {/* WhatsApp */}
                <a
                  href="https://wa.me/916306661981"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    text-2xl
                    sm:text-3xl
                    text-green-500
                    hover:text-green-400
                    hover:-translate-y-0.5
                    transition-all
                 
                  "
                >
                  <FaWhatsapp className=''/>
                </a>
            <a
              id="header-phone-cta"
              href="Mob:8756327246"
              className="flex items-center space-x-2 text-stone-300 hover:text-amber-400 text-sm font-mono transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-amber-400">
                <Phone className="w-4 h-4" />
              </div>
              <span className="hidden xl:inline">+91 6306661981</span>
            </a>

            <button
              id="header-quote-btn"
              onClick={onOpenQuote}
              className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-stone-950 font-bold px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all text-sm uppercase tracking-wider"
            >
              <span>BOOK appoitment</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>


          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center space-x-2 gap-2">
           
            
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      

      {/* Mobile Menu dropdown */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="lg:hidden bg-stone-900 border-b border-stone-800 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              id={`mobile-nav-link-${link.id}`}
              onClick={() => handleLinkClick(link.id)}
              className="block w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-stone-200 hover:bg-stone-800 hover:text-amber-400 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 border-t border-stone-800 flex flex-col space-y-3">
            <a
              id="mobile-drawer-phone"
              href="tel:6306661981"
              className="flex items-center space-x-2 text-stone-300 px-3 py-2 font-mono text-sm"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>+91 6306661981</span>
            </a>
            <button
              id="mobile-drawer-quote-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-black py-3 rounded-lg text-center uppercase tracking-wider"
            >
      Construction inquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

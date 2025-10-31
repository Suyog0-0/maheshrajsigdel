"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/#portfolio-section", label: "Portfolio" },
    { href: "/#about-me-section", label: "About Me" },
    { href: "/#publications-section", label: "Publications" },
    { href: "/#contact-me-section", label: "Contact Me" }
  ];

  return (
    <>
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-2 bg-gray-950/90 backdrop-blur-xl shadow-2xl shadow-black/40' : 'py-4 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-gray-900/95 via-gray-950/95 to-black/95 backdrop-blur-2xl border border-gray-800/50 rounded-2xl shadow-2xl shadow-black/30 overflow-hidden">
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-full blur-xl"></div>
            </div>

            <nav className="relative flex items-center justify-between h-16 lg:h-20 px-4 lg:px-6">
              {/* Hamburger Menu - Mobile */}
              <div 
                className="lg:hidden cursor-pointer transition-all duration-300 hover:scale-110 p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 z-50 relative"
                onClick={toggleMenu}
              >
                {/* CSS-only Hamburger Icon */}
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`block w-4 h-0.5 bg-gray-300 rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-0.5'}`}></span>
                  <span className={`block w-4 h-0.5 bg-gray-300 rounded-full transition-all duration-300 my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`block w-4 h-0.5 bg-gray-300 rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-0.5'}`}></span>
                </div>
              </div>
              
              {/* Navigation Links - Desktop */}
              <ul className="hidden lg:flex items-center gap-8">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href}
                      className="group relative inline-block py-2 text-gray-300 hover:text-orange-400 text-base font-medium transition-all duration-300"
                    >
                      <span className="relative z-10">{item.label}</span>
                      
                      <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 group-hover:w-4/5 group-hover:left-1/10 -translate-x-1/2 group-hover:translate-x-0 rounded-full"></div>
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Search Icon */}
              <div className="flex items-center gap-4 relative z-50">
                <Link 
                  href="#" 
                  className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 hover:brightness-125 group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-300 transition-transform duration-300 group-hover:scale-110">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu Backdrop - Separate layer for blur */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 backdrop-blur-sm transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Navigation Menu Content - Above backdrop, no blur */}
      <div className={`lg:hidden fixed left-4 right-4 z-50 transition-all duration-300 transform ${
        isMenuOpen ? 'top-24 translate-y-0 opacity-100 pointer-events-auto' : 'top-20 -translate-y-4 opacity-0 pointer-events-none'
      }`}>
        <div 
          className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl shadow-2xl border border-gray-800/50 py-4"
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col items-center gap-1">
            {navItems.map((item, index) => (
              <li key={item.href} className="w-full text-center">
                <Link 
                  href={item.href}
                  className="group relative inline-block py-3 px-6 text-gray-300 hover:text-orange-400 text-base font-medium transition-all duration-300 w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  <div className="absolute bottom-2 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 group-hover:w-4/5 group-hover:left-1/10 -translate-x-1/2 group-hover:translate-x-0 rounded-full"></div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
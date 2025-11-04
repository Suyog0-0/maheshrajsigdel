"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const searchContainerRef = useRef<HTMLDivElement | null>(null);
  const mobileSearchRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  // ===========================================================================
  // EFFECTS & EVENT HANDLERS
  // ===========================================================================
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleClickOutside = (event: MouseEvent) => {
      // Check if click is outside desktop search container
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        // Also check if it's not the mobile search toggle button or mobile search bar
        const mobileSearchToggle = document.getElementById('mobile-search-toggle');
        if (
          mobileSearchToggle &&
          !mobileSearchToggle.contains(event.target as Node) &&
          mobileSearchRef.current &&
          !mobileSearchRef.current.contains(event.target as Node)
        ) {
          setIsSearchOpen(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close search when opening menu
    if (!isMenuOpen) {
      setIsSearchOpen(false);
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setSearchQuery('');
      // Close menu when opening search on mobile
      setIsMenuOpen(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Add your search logic here
    }
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const clearSearch = () => {
    setSearchQuery('');
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  // ===========================================================================
  // NAVIGATION DATA
  // ===========================================================================
  
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About Me" },
    { href: "/publications", label: "Publications" },
    { href: "/contact", label: "Contact Me" }
  ];

  return (
    <>
      {/* ===================================================================== */}
      {/* BACKDROP BLUR FOR SEARCH */}
      {/* ===================================================================== */}
      
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300 pointer-events-none ${
          isSearchOpen ? 'opacity-100 z-30' : 'opacity-0 -z-10'
        }`}
        style={{ top: isScrolled ? '88px' : '104px' }}
      ></div>

      {/* ===================================================================== */}
      {/* MAIN NAVBAR */}
      {/* ===================================================================== */}
      
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-2 bg-gray-950/90 backdrop-blur-xl shadow-2xl shadow-black/40' : 'py-4 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-gray-900/95 via-gray-950/95 to-black/95 backdrop-blur-2xl border border-gray-800/50 rounded-2xl shadow-2xl shadow-black/30 overflow-hidden">
            
            {/* ================================================================= */}
            {/* ANIMATED BACKGROUND ELEMENTS */}
            {/* ================================================================= */}
            
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-full blur-xl animate-pulse"></div>
            </div>

            <nav className="relative flex items-center justify-between h-16 lg:h-20 px-4 lg:px-6">
              
              {/* =============================================================== */}
              {/* HAMBURGER MENU - MOBILE */}
              {/* =============================================================== */}
              
              <div 
                className="lg:hidden cursor-pointer transition-all duration-300 hover:scale-110 p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/30 hover:border-gray-600/50 z-50 relative"
                onClick={toggleMenu}
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`block w-4 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-0.5'}`}></span>
                  <span className={`block w-4 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 rounded-full transition-all duration-300 my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`block w-4 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-0.5'}`}></span>
                </div>
              </div>
              
              {/* =============================================================== */}
              {/* NAVIGATION LINKS - DESKTOP */}
              {/* =============================================================== */}
              
              <ul className="hidden lg:flex items-center gap-8">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link 
                        href={item.href}
                        className={`group relative inline-block py-2 text-base font-medium transition-all duration-300 ${
                          isActive 
                            ? 'text-orange-400' 
                            : 'text-gray-300 hover:text-orange-400'
                        }`}
                      >
                        <span className="relative z-10">{item.label}</span>
                        
                        {/* Active indicator */}
                        {isActive ? (
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg shadow-orange-500/50"></div>
                        ) : (
                          <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 group-hover:w-4/5 -translate-x-1/2 rounded-full"></div>
                        )}
                        
                        {/* Glow effect on hover */}
                        {!isActive && (
                          <div className="absolute inset-0 rounded-lg bg-orange-500/0 group-hover:bg-orange-500/5 transition-all duration-300 -z-10"></div>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              
              {/* =============================================================== */}
              {/* SEARCH COMPONENT - DESKTOP */}
              {/* =============================================================== */}
              
              <div 
                ref={searchContainerRef}
                className={`hidden lg:flex items-center transition-all duration-500 ${
                  isSearchOpen 
                    ? 'bg-gray-800/80 backdrop-blur-xl border border-orange-500/30 rounded-xl shadow-lg shadow-orange-500/10' 
                    : ''
                }`}
              >
                {/* Search Input - Desktop */}
                <div className={`relative overflow-hidden transition-all duration-500 ${
                  isSearchOpen 
                    ? 'w-80 opacity-100' 
                    : 'w-0 opacity-0'
                }`}>
                  <form onSubmit={handleSearchSubmit} className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-orange-400 ml-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Type to search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-3 pr-10 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm"
                    />
                    
                    {/* Clear Button */}
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={clearSearch}
                        className="absolute right-2 p-1.5 rounded-lg bg-gray-700/30 hover:bg-red-500/20 border border-gray-600/30 hover:border-red-500/40 transition-all duration-300 group hover:scale-110"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 text-gray-400 group-hover:text-red-400 transition-colors duration-300">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </form>
                </div>

                {/* Search Toggle Button - Desktop */}
                <button
                  onClick={toggleSearch}
                  className={`p-2.5 rounded-lg transition-all duration-300 group relative ${
                    isSearchOpen 
                      ? 'bg-gradient-to-br from-red-500/30 to-orange-500/20 border-2 border-red-500/50 ml-2 hover:from-red-500/40 hover:to-orange-500/30 shadow-lg shadow-red-500/20' 
                      : 'bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/30 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/10 hover:scale-105'
                  }`}
                >
                  {/* Search Icon */}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2} 
                    stroke="currentColor" 
                    className={`w-5 h-5 transition-all duration-300 ${
                      isSearchOpen ? 'text-red-400 rotate-90 scale-110' : 'text-gray-300 group-hover:text-orange-400 group-hover:scale-110'
                    }`}
                  >
                    {isSearchOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    )}
                  </svg>
                </button>
              </div>

              {/* =============================================================== */}
              {/* SEARCH TOGGLE BUTTON - MOBILE ONLY */}
              {/* =============================================================== */}
              
              <button
                id="mobile-search-toggle"
                onClick={toggleSearch}
                className={`lg:hidden p-2.5 rounded-lg transition-all duration-300 relative z-50 border ${
                  isSearchOpen 
                    ? 'bg-gradient-to-br from-red-500/30 to-orange-500/20 border-2 border-red-500/50 shadow-lg shadow-red-500/20 scale-105' 
                    : 'bg-gray-800/50 hover:bg-gray-700/50 border-gray-700/30 hover:border-orange-500/30 hover:scale-105'
                }`}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2} 
                  stroke="currentColor" 
                  className={`w-5 h-5 transition-all duration-300 ${
                    isSearchOpen ? 'text-red-400 rotate-90 scale-110' : 'text-gray-300'
                  }`}
                >
                  {isSearchOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  )}
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* MOBILE SEARCH BAR - BELOW NAVBAR */}
      {/* ===================================================================== */}
      
      <div 
        ref={mobileSearchRef}
        className={`lg:hidden fixed left-4 right-4 z-40 transition-all duration-300 ${
          isSearchOpen ? 'top-24 opacity-100 pointer-events-auto' : 'top-20 opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-gradient-to-br from-gray-900/95 via-gray-950/95 to-black/95 backdrop-blur-2xl border border-orange-500/30 rounded-xl shadow-2xl shadow-orange-500/10 p-3">
          <form onSubmit={handleSearchSubmit} className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-orange-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Type to search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-3 bg-gray-800/50 border border-gray-700/50 focus:border-orange-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-300 text-sm"
            />
            
            {/* Clear Button */}
            {searchQuery && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-gray-700/30 hover:bg-red-500/20 border border-gray-600/30 hover:border-red-500/40 transition-all duration-300 group hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-gray-400 group-hover:text-red-400 transition-colors duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </form>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* MOBILE NAVIGATION MENU BACKDROP */}
      {/* ===================================================================== */}
      
      <div 
        className={`lg:hidden fixed inset-0 z-40 backdrop-blur-sm bg-black/30 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* ===================================================================== */}
      {/* MOBILE NAVIGATION MENU CONTENT */}
      {/* ===================================================================== */}
      
      <div className={`lg:hidden fixed left-4 right-4 z-50 transition-all duration-300 transform ${
        isMenuOpen ? 'top-24 translate-y-0 opacity-100 pointer-events-auto' : 'top-20 -translate-y-4 opacity-0 pointer-events-none'
      }`}>
        <div 
          className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl shadow-2xl border border-gray-800/50 py-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Navigation Links */}
          <ul className="flex flex-col items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href} className="w-full text-center">
                  <Link 
                    href={item.href}
                    className={`group relative inline-block py-3 px-6 text-base font-medium transition-all duration-300 w-full ${
                      isActive 
                        ? 'text-orange-400' 
                        : 'text-gray-300 hover:text-orange-400'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="relative z-10">{item.label}</span>
                    
                    {/* Active indicator for mobile */}
                    {isActive ? (
                      <>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg shadow-orange-500/50"></div>
                        <div className="absolute inset-0 bg-orange-500/5 rounded-lg"></div>
                      </>
                    ) : (
                      <>
                        <div className="absolute bottom-2 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 group-hover:w-4/5 -translate-x-1/2 rounded-full"></div>
                        <div className="absolute inset-0 rounded-lg bg-orange-500/0 group-hover:bg-orange-500/5 transition-all duration-300"></div>
                      </>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="header" className="fixed top-0 left-0 w-full z-50 flex justify-center">
      <div id="container" className="w-full max-w-6xl px-4 py-2.5">
        <div className="nav-box fixed top-2.5 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-[calc(100%-2rem)] max-w-3xl h-15 bg-gradient-to-r from-black to-gray-700 backdrop-blur-md rounded-xl z-50 shadow-lg shadow-black/30 transition-all duration-300">
          <nav className="flex items-center justify-between w-full px-4">
            <div 
              className="hamburger md:hidden cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={toggleMenu}
            >
              <Image 
                className="w-5 h-5" 
                src="/images/menubar_white.png" 
                alt="Menu" 
                width={20}
                height={20}
              />
            </div>
            
            <ul 
              className={`nav-links absolute top-15 left-0 mt-1.25 w-full bg-black/90 backdrop-blur backdrop-blur-md rounded-xl shadow-lg shadow-black/30 py-3.75 px-0 flex-col items-center justify-center gap-3 md:flex md:flex-row md:static md:bg-transparent md:backdrop-blur-none md:shadow-none md:py-0 md:px-0 md:gap-6 ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}
            >
              <li>
                <a 
                  href="/index.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="nav-link block text-white text-base py-1.25 px-2.5 relative transition-all duration-300 hover:transform hover:-translate-y-0.5 hover:text-orange-500"
                >
                  Home
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-600 to-yellow-200 transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="/index.html#portfolio-section" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="nav-link block text-white text-base py-1.25 px-2.5 relative transition-all duration-300 hover:transform hover:-translate-y-0.5 hover:text-orange-500"
                >
                  Portfolio
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-600 to-yellow-200 transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="/index.html#about-me-section" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="nav-link block text-white text-base py-1.25 px-2.5 relative transition-all duration-300 hover:transform hover:-translate-y-0.5 hover:text-orange-500"
                >
                  About Me
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-600 to-yellow-200 transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="/index.html#publications-section" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="nav-link block text-white text-base py-1.25 px-2.5 relative transition-all duration-300 hover:transform hover:-translate-y-0.5 hover:text-orange-500"
                >
                  Publications
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-600 to-yellow-200 transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="/index.html#contact-me-section" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="nav-link block text-white text-base py-1.25 px-2.5 relative transition-all duration-300 hover:transform hover:-translate-y-0.5 hover:text-orange-500"
                >
                  Contact Me
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-600 to-yellow-200 transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
            
            <div className="nav-icons-container flex items-center gap-3.75 ml-auto md:ml-7.5">
              <a 
                href="#" 
                className="search-link transition-transform duration-300 hover:scale-105 hover:brightness-125"
              >
                <Image 
                  className="w-5 h-5" 
                  src="/images/White_Search.png" 
                  alt="Search" 
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const [openDropdowns, setOpenDropdowns] = useState<number[]>([]);

  const toggleDropdown = (index: number) => {
    if (openDropdowns.includes(index)) {
      setOpenDropdowns(openDropdowns.filter(i => i !== index));
    } else {
      setOpenDropdowns([...openDropdowns, index]);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const dropdownData = [
    {
      title: "Quick Links",
      content: (
        <ul className="space-y-3">
          {[
            { href: "/", label: "Home" },
            { href: "/#portfolio-section", label: "Portfolio" },
            { href: "/#about-me-section", label: "About Me" },
            { href: "/#publications-section", label: "Publications" },
            { href: "/#contact-me-section", label: "Contact Me" }
          ].map((item, index) => (
            <li key={index}>
              <Link 
                href={item.href}
                className="group flex items-center text-gray-300 hover:text-orange-400 text-base transition-all duration-300 hover:translate-x-2"
              >
                <span className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3 transition-transform duration-300 group-hover:scale-125"></span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )
    },
    {
      title: "Contact Me",
      content: (
        <div className="space-y-4">
          <p className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent font-semibold text-lg">Emails:</p>
          <div className="space-y-3">
            {[
              "mahesh.sigdel@mmc.tu.edu.np",
              "maheshsigdel@iom.edu.np"
            ].map((email, index) => (
              <a 
                key={index}
                href={`mailto:${email}`}
                className="group flex items-center text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-2 break-all text-sm lg:text-base"
              >
                <span className="mr-3 text-orange-500 transition-transform duration-300 group-hover:scale-110">✉</span>
                {email}
              </a>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Follow Me",
      content: (
        <div className="flex gap-4 justify-center lg:justify-start">
          {[
            { href: "https://linkedin.com/in/mahesh-raj-sigdel-27643b166", src: "/images/linkedin.png", alt: "LinkedIn" },
            { href: "https://www.instagram.com/maheshrajsigdel/", src: "/images/instagram.png", alt: "Instagram" },
            { href: "https://x.com/maheshsigdel2", src: "/images/twitter.png", alt: "Twitter" }
          ].map((social, index) => (
            <a 
              key={index}
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative p-3 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 transition-all duration-300 hover:scale-110 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/20"
            >
              <Image 
                src={social.src} 
                alt={social.alt} 
                width={24} 
                height={24} 
                className="transition-all duration-300 group-hover:brightness-125"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 to-red-500/0 group-hover:from-orange-500/10 group-hover:to-red-500/10 transition-all duration-300"></div>
            </a>
          ))}
        </div>
      )
    },
    {
      title: "Let's Work Together!",
      content: (
        <Link 
          href="/#contact-me-section"
          className="group relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25 overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            Get in Touch 
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
          
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </Link>
      )
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-gray-950 via-black to-gray-950 pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-orange-500/3 to-red-500/3 rounded-full blur-3xl"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-red-500/3 to-orange-500/3 rounded-full blur-3xl"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,140,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,140,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {dropdownData.map((dropdown, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-3xl border border-gray-700/30 p-6 transition-all duration-500 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10"
            >
              
              {/* Header */}
              <div 
                className="cursor-pointer transition-all duration-300"
                onClick={() => toggleDropdown(index)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent font-semibold text-lg">
                    {dropdown.title}
                  </h3>
                  <span 
                    className={`lg:hidden text-2xl text-gray-400 transition-transform duration-300 ${
                      openDropdowns.includes(index) ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </div>
              </div>

              {/* Content */}
              <div 
                className={`transition-all duration-500 overflow-hidden ${
                  openDropdowns.includes(index) 
                    ? 'max-h-96 opacity-100 translate-y-0' 
                    : 'max-h-0 lg:max-h-96 opacity-0 lg:opacity-100 translate-y-4 lg:translate-y-0'
                }`}
              >
                <div className="pt-2 transform transition-all duration-500 delay-100">
                  {dropdown.content}
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/0 to-red-500/0 group-hover:from-orange-500/5 group-hover:to-red-500/5 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800/50 text-center">
          <p className="text-gray-400 text-sm mb-4 font-[Poppins]">
            &copy; 2025 Dr. Mahesh Raj Sigdel. All Rights Reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-all duration-300 font-medium hover:-translate-y-0.5 font-[Poppins]"
          >
            <span>Back to Top</span>
            <span className="transition-transform duration-300 group-hover:-translate-y-0.5">↑</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
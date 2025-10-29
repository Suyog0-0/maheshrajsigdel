"use client";

import React, { useState } from 'react';
import Image from 'next/image';

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
        <ul className="list-none p-0">
          <li className="mb-2.5 ml-2.5"><a href="/main.html" className="text-white text-base no-underline hover:text-[#88d8f0] hover:underline transition-colors duration-300">Home</a></li>
          <li className="mb-2.5 ml-2.5"><a href="/portfolio.html" className="text-white text-base no-underline hover:text-[#88d8f0] hover:underline transition-colors duration-300">Portfolio</a></li>
          <li className="mb-2.5 ml-2.5"><a href="/aboutme.html" className="text-white text-base no-underline hover:text-[#88d8f0] hover:underline transition-colors duration-300">About Me</a></li>
          <li className="mb-2.5 ml-2.5"><a href="/publications.html" className="text-white text-base no-underline hover:text-[#88d8f0] hover:underline transition-colors duration-300">Publications</a></li>
          <li className="mb-2.5 ml-2.5"><a href="/contactme.html" className="text-white text-base no-underline hover:text-[#88d8f0] hover:underline transition-colors duration-300">Contact Me</a></li>
        </ul>
      )
    },
    {
      title: "Contact Me",
      content: (
        <div className="email-list">
          <p className="email-label text-[#88d8f0] font-bold mb-2">Emails:</p>
          <ul className="list-none p-0">
            <li className="mb-1.5 break-all">
              <a 
                href="mailto:mahesh.sigdel@mmc.tu.edu.np" 
                className="text-white no-underline flex items-center gap-1.5 hover:text-[#88d8f0] hover:underline transition-colors duration-300 break-all"
              >
                <span className="text-sm">✉️</span>
                mahesh.sigdel@mmc.tu.edu.np
              </a>
            </li>
            <li className="mb-1.5 break-all">
              <a 
                href="mailto:maheshsigdel@iom.edu.np" 
                className="text-white no-underline flex items-center gap-1.5 hover:text-[#88d8f0] hover:underline transition-colors duration-300 break-all"
              >
                <span className="text-sm">✉️</span>
                maheshsigdel@iom.edu.np
              </a>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Follow Me",
      content: (
        <div className="social-icons flex gap-3">
          <a href="https://linkedin.com/in/mahesh-raj-sigdel-27643b166    " target="_blank" rel="noopener noreferrer">
            <Image 
              src="/images/linkedin.png" 
              alt="LinkedIn" 
              width={22} 
              height={22} 
              className="transition-transform duration-300 hover:scale-110"
            />
          </a>
          <a href="https://www.instagram.com/maheshrajsigdel/    " target="_blank" rel="noopener noreferrer">
            <Image 
              src="/images/instagram.png" 
              alt="Instagram" 
              width={22} 
              height={22} 
              className="transition-transform duration-300 hover:scale-110"
            />
          </a>
          <a href="https://x.com/maheshsigdel2    " target="_blank" rel="noopener noreferrer">
            <Image 
              src="/images/twitter.png" 
              alt="Twitter" 
              width={22} 
              height={22} 
              className="transition-transform duration-300 hover:scale-110"
            />
          </a>
        </div>
      )
    },
    {
      title: "Let's Work Together!",
      content: (
        <a 
          href="/contactme.html" 
          className="cta-link inline-block text-white font-bold no-underline hover:text-[#57b8ff] transition-colors duration-300"
        >
          Get in Touch →
        </a>
      )
    }
  ];

  return (
    <div className="footer bg-gradient-to-b from-[#222] to-[#1a1a1a] pt-7.5 pb-7.5 pl-5 pr-5 mt-7.5 w-full">
      {/* The grid container - gap changed for mobile */}
      <div className="footer-content max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5"> {/* Smaller gap (gap-3) on mobile, larger (md:gap-5) on medium screens and up */}
        {dropdownData.map((dropdown, index) => (
          <div 
            key={index} 
            className="dropdown bg-transparent rounded-xl p-3 transition-transform duration-300" // Padding remains
          >
            {/* Toggle and Content */}
            <div 
              className={`dropdown-toggle flex justify-between items-center w-full p-3 bg-gradient-to-br from-[#333] to-[#444] rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.2)] cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-0.5 hover:shadow-[0_6px_10px_rgba(0,0,0,0.3)] ${openDropdowns.includes(index) ? 'active' : ''}`}
              onClick={() => toggleDropdown(index)}
            >
              <h3 className="text-[#88d8f0] text-base m-0">{dropdown.title}</h3>
              <span 
                className={`toggle-icon text-lg transition-transform duration-300 ${openDropdowns.includes(index) ? 'rotate-45' : ''}`}
              >
                ×
              </span>
            </div>
            <div 
              className={`dropdown-content block mt-2 bg-gradient-to-br from-[#444] to-[#555] rounded-xl p-3 shadow-[0_4px_6px_rgba(0,0,0,0.2)] transition-opacity duration-300 overflow-hidden ${openDropdowns.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5 pointer-events-none'} md:opacity-100 md:translate-y-0 md:pointer-events-auto`} // mt-2 remains for desktop
            >
              {dropdown.content}
            </div>
          </div>
        ))}
      </div>

      <div className="footer-bottom mt-5 md:mt-7.5 pt-3.75 border-t border-[#333] text-center"> {/* Reduced margin-top (mt-5) on mobile, larger (md:mt-7.5) on medium screens and up */}
        <p className="m-0 text-sm text-[#aaa]">&copy; 2025 Mahesh Raj Sigdel. All Rights Reserved.</p>
        <button 
          onClick={scrollToTop}
          className="back-to-top inline-block mt-2 text-[#88d8f0] no-underline font-bold hover:text-[#57b8ff] transition-colors duration-300 cursor-pointer bg-transparent border-none p-0"
        >
          Back to Top ↑
        </button>
      </div>
    </div>
  );
};

export default Footer;
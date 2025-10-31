"use client";

import React from 'react';

const AboutMeSection = () => {
  return (
    <section 
      id="about-me-section" 
      className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-gray-900 via-black to-gray-900 relative overflow-visible py-32 px-4 pb-44"
    >
      <h1
        className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x drop-shadow-[0_0_10px_rgba(255,69,0,0.7)] text-center leading-tight md:leading-[1.09] pb-8"
        style={{
          WebkitTextStroke: '0.5px rgba(0,0,0,0.15)',
          paddingBottom: '2.5rem',
          lineHeight: 1.12,
        }}
      >
        About Page
      </h1>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
        #about-me-section h1 {
          /* Prevent text cutoff for descenders */
          padding-bottom: 2.5rem;
        }
      `}</style>
    </section>
  );
};

export default AboutMeSection;
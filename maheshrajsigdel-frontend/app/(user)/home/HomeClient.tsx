'use client';

import { useEffect, useState } from 'react';
import HomeHeroSection from './HomeHeroSection';
import HomeContactSection from './HomeContactSection';
import HomeAboutSection from './HomeAboutSection';

export default function HomeClient() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animations after mount
    setTimeout(() => setIsLoaded(true), 100);
  }, []);
  

  return (
    <>
      <HomeHeroSection isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
      <HomeAboutSection />
      <HomeContactSection />
      
      {/* Global Styles */}
      <style jsx global>{`
        :root {
          --color-orange: #F97316;
          --color-red: #EF4444;
          --color-gray-900: #111827;
          --color-gray-950: #030712;
          --color-white: #fff;
          --color-gray-300: #D1D5DB;
          --color-gray-400: #9CA3AF;
          --transition-ease: cubic-bezier(0.4, 0, 0.2, 1);
        }

        body {
          padding-top: 0;
          overflow-x: hidden;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
          background: var(--color-gray-950);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Smooth scrolling for anchor links */
        html {
          scroll-behavior: smooth;
        }

        /* Custom Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.6; }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 4s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        .letter-spacing-wide {
          letter-spacing: 0.2em;
        }

        /* Enhanced Animations */
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Button Styles */
        .btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 140px;
          height: 50px;
          border-radius: 16px;
          font-family: system-ui, sans-serif;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.5px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s var(--transition-ease);
          text-decoration: none;
          z-index: 1;
          backdrop-filter: blur(10px);
        }

        /* Responsive Refinements */
        @media (max-width: 768px) {
          body {
            padding-top: 80px; /* Add padding to account for fixed navbar */
          }
        }

        @media (max-width: 480px) {
          .btn {
            width: 120px;
            height: 46px;
            font-size: 14px;
          }
        }

        @media (max-width: 360px) {
          .btn {
            width: 110px;
            height: 44px;
            font-size: 13px;
          }
        }
      `}</style>
    </>
  );
}

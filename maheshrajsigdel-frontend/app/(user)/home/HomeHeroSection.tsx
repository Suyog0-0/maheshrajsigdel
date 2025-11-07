'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface HomeHeroSectionProps {
  isLoaded: boolean;
  setIsLoaded: (loaded: boolean) => void;
}

export default function HomeHeroSection({ isLoaded, setIsLoaded }: HomeHeroSectionProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={`hero-section bg-gradient-to-br from-gray-950 via-black to-gray-950 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-500/5 to-transparent rounded-full blur-2xl"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,140,0,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,140,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="hero-content-wrapper max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* --- Professional Text Content --- */}
        <div className="hero-text text-center lg:text-left space-y-8 lg:space-y-10">
          {/* Name with refined typography */}
          <div className="space-y-3 transform transition-all duration-700 delay-100">
            <h1 className="text-xl sm:text-2xl font-sans tracking-widest text-gray-400 font-light uppercase letter-spacing-wide">
              Dr. Mahesh Raj Sigdel
            </h1>
            <div className="w-20 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 mx-auto lg:mx-0 rounded-full"></div>
          </div>

          {/* Enhanced Title Section */}
          <div className="space-y-6 transform transition-all duration-700 delay-200">
            <p className="hero-title font-sans text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight lg:leading-tighter">
              <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-red-400 bg-clip-text text-transparent">
                Professor of Medicine<br className="hidden sm:block" />& Nephrology
              </span>
            </p>
          </div>

          {/* Professional Image Container - Only visible on mobile */}
          <div className="hero-image-container-mobile lg:hidden flex justify-center transform transition-all duration-1000 delay-400">
            <div className="relative group">
              {/* Subtle Glow Effects */}
              <div className="absolute -inset-6 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-[42%_58%_63%_37%_/_41%_44%_56%_59%] blur-xl group-hover:blur-2xl transition-all duration-700 opacity-40 group-hover:opacity-60 animate-glow"></div>
              
              {/* Main Image Container - Mobile view */}
              <div className="hero-image-wrapper-mobile relative w-48 h-60 sm:w-56 sm:h-72 rounded-[40%_60%_55%_45%_/_42%_48%_52%_58%] overflow-hidden shadow-2xl transition-all duration-700 ease-out group-hover:scale-[1.02] border border-gray-700/50">
                <Image
                  src="/images/Homepage_Face_2.jpg"
                  alt="Dr. Mahesh Raj Sigdel – Professor of Medicine & Nephrology"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-110"
                  priority
                  onLoad={() => setIsLoaded(true)}
                />
                
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-50"></div>
              </div>
            </div>
          </div>

          {/* Professional Description */}
          <p className="hero-description font-sans text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light tracking-wide opacity-90 transform transition-all duration-700 delay-300">
            Dedicated to mentoring medical students, providing empathetic patient care, 
            and conducting/guiding biomedical research at TU Teaching Hospital / 
            Maharajgunj Medical Campus, Institute of Medicine, Kathmandu.
          </p>

          {/* Professional Button Group - Side by side on mobile */}
          <div className="hero-buttons flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 pt-6 transform transition-all duration-700 delay-500">
            <Link href="/about" className="group relative inline-block">
              <div className="btn btn--about transform transition-all duration-300 hover:scale-105 active:scale-95 bg-gradient-to-r from-gray-300 to-gray-400 text-gray-950 shadow-lg border border-white/20 hover:from-gray-400 hover:to-gray-300 hover:shadow-xl">
                <span className="relative z-10">About Me</span>
              </div>
            </Link>
            
            <Link href="/contact" className="group relative inline-block">
              <div className="btn btn--contact transform transition-all duration-300 hover:scale-105 active:scale-95 bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg border border-white/10 hover:from-red-500 hover:to-orange-500 hover:shadow-xl">
                <span className="relative z-10">Contact Me</span>
              </div>
            </Link>
          </div>
        </div>

        {/* --- Professional Image Container - Only visible on desktop --- */}
        <div className="hero-image-container-desktop hidden lg:flex justify-center lg:justify-end transform transition-all duration-1000 delay-300">
          <div className="relative group">
            {/* Subtle Glow Effects */}
            <div className="absolute -inset-6 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-[45%_55%_60%_40%_/_40%_45%_55%_60%] blur-xl group-hover:blur-2xl transition-all duration-700 opacity-40 group-hover:opacity-60 animate-glow"></div>
            
            {/* Main Image Container - Desktop view with premium aesthetic shape */}
            <div className="hero-image-wrapper-desktop relative w-[32rem] h-[42rem] rounded-[40%_60%_55%_45%_/_42%_48%_52%_58%] overflow-hidden shadow-2xl transition-all duration-700 ease-out group-hover:scale-[1.02] border border-gray-700/50">
              <Image
                src="/images/Homepage_Face_2.jpg"
                alt="Dr. Mahesh Raj Sigdel – Professor of Medicine & Nephrology"
                width={600}
                height={800}
                className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-110"
                priority
                onLoad={() => setIsLoaded(true)}
              />
              
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section Specific Styles */}
      <style jsx>{`
        .hero-section {
          padding-top: 2rem;
          padding-bottom: 4rem;
        }

        .hero-text > * {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s var(--transition-ease) forwards;
        }

        .hero-text > *:nth-child(1) {
          animation-delay: 0.1s;
        }

        .hero-text > *:nth-child(2) {
          animation-delay: 0.3s;
        }

        .hero-text > *:nth-child(3) {
          animation-delay: 0.4s;
        }

        .hero-text > *:nth-child(4) {
          animation-delay: 0.5s;
        }

        .hero-text > *:nth-child(5) {
          animation-delay: 0.7s;
        }

        /* Responsive Refinements */
        @media (min-width: 1024px) {
          .hero-section {
            min-height: 100vh;
            padding: 0 2rem;
          }
          
          .hero-content-wrapper {
            margin-top: -2rem;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 3rem 1rem;
            min-height: auto;
          }

          .hero-text {
            text-align: center;
            padding: 0 0.5rem;
          }

          .hero-title {
            font-size: 2rem;
          }

          .hero-description {
            font-size: 1.1rem;
            line-height: 1.7;
            padding: 0 1rem;
          }

          .hero-buttons {
            justify-content: center;
            gap: 1rem;
          }

          .btn {
            width: 130px;
            height: 48px;
            font-size: 15px;
          }

          .hero-image-wrapper-mobile {
            width: 200px;
            height: 260px;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            padding: 2rem 1rem;
          }

          .hero-title {
            font-size: 1.75rem;
          }

          .hero-description {
            font-size: 1rem;
            line-height: 1.6;
            padding: 0;
          }

          .hero-buttons {
            flex-direction: row;
            justify-content: center;
            gap: 0.75rem;
          }

          .btn {
            width: 120px;
            height: 46px;
            font-size: 14px;
          }

          .hero-image-wrapper-mobile {
            width: 180px;
            height: 240px;
          }
        }

        @media (max-width: 360px) {
          .hero-section {
            padding: 1.5rem 0.5rem;
          }

          .hero-title {
            font-size: 1.5rem;
          }

          .hero-description {
            fontSize: 0.95rem;
          }

          .btn {
            width: 110px;
            height: 44px;
            font-size: 13px;
          }

          .hero-image-wrapper-mobile {
            width: 160px;
            height: 220px;
          }
        }
      `}</style>
    </div>
  );
}
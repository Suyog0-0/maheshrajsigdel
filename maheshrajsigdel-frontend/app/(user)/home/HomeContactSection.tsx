'use client';

import { useState, useEffect, useRef } from 'react';

// NOTE: Moved global animations to globals.css to prevent Next.js preload CSS warnings

/**
 * ===== CONTACT SECTION COMPONENT =====
 * Professionally designed contact section with subtle animations,
 * responsive layout, and accessible interactions. Implements:
 * - Intersection Observer for scroll-triggered animations
 * - Glass-morphism cards with depth cues
 * - Harmonious color system with reduced motion support
 * - Mobile-first responsive architecture
 */
export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="contact"
      aria-labelledby="contact-heading"
      className={`
        relative py-20 px-4 overflow-hidden
        bg-gradient-to-b from-slate-900/90 to-slate-950/95
        before:content[''] before:absolute before:inset-0
        before:bg-[radial-gradient(60%_50%_at_50%_-10%,rgba(255,165,0,0.08),transparent_60%)]
      `}
    >
      {/* ===== SUBTLE BACKGROUND GRADIENTS ===== */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 z-0"
      >
        <div className="
          absolute top-1/4 -left-16 w-72 h-72 
          bg-gradient-to-br from-amber-400/5 to-orange-500/5 
          rounded-full blur-3xl opacity-70
          animate-float-slow
        " />
        <div className="
          absolute bottom-1/4 -right-16 w-72 h-72 
          bg-gradient-to-tl from-red-400/5 to-rose-500/5 
          rounded-full blur-3xl opacity-70
          animate-float-slow
          motion-reduce:animate-none
        " style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* ===== SECTION HEADER ===== */}
        <header className={`
          text-center mb-16
          transition-opacity duration-700
          ${isVisible ? 'opacity-100' : 'opacity-0'} 
          ${isVisible ? 'animate-fade-up' : ''}
        `}>
          <h2 
            id="contact-heading"
            className="
              text-3xl md:text-4xl font-bold bg-clip-text text-transparent
              bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400
              tracking-tight mb-4
              animate-gradient-shift
            "
          >
            Connect With Me
          </h2>
          <div className="
            w-24 h-1 mx-auto mb-6 
            bg-gradient-to-r from-amber-400/70 to-rose-500/70
            rounded-full
          " />
          <p className="
            text-lg text-slate-300 max-w-2xl mx-auto
            leading-relaxed
          ">
            I&apos;m open to discussing new opportunities, collaborations, 
            and interesting projects. Let&apos;s build something meaningful together.
          </p>
        </header>

        {/* ===== CONTACT CARDS GRID ===== */}
        <div className="
          grid md:grid-cols-4 gap-6 max-w-[1600px] mx-auto
          transition-opacity duration-700 delay-150
          ${isVisible ? 'opacity-100' : 'opacity-0'}
          ${isVisible ? 'animate-fade-up' : ''}
        ">
          {/* Email Contact Card */}
          <ContactCard
            icon={<EnvelopeIcon />}
            title="Email"
            content="mahesh.sigdel@iom.edu.np"
            hoverColor="from-amber-400 to-orange-500"
          />

          {/* Location Contact Card */}
          <ContactCard
            icon={<LocationIcon />}
            title="Location"
            content={
              <>
                TU Teaching Hospital<br />
                Maharajgunj Medical Campus<br />
                Institute of Medicine, Kathmandu
              </>
            }
            hoverColor="from-rose-400 to-red-500"
          />

          {/* Availability Contact Card */}
          <ContactCard
            icon={<ClockIcon />}
            title="Availability"
            content={
              <>
                Monday - Friday: 9AM - 5PM<br />
                <span className="text-amber-300 font-medium">
                  Emergency consultations available
                </span>
              </>
            }
            hoverColor="from-cyan-400 to-sky-500"
          />

          {/* Direct Contact Card */}
          <ContactCard
            icon={<PhoneIcon />}
            title="Direct Contact"
            content="+977 1-443 5999"
            hoverColor="from-emerald-400 to-teal-500"
          />
        </div>

      </div>
    </section>
  );
}

/**
 * ===== REUSABLE CONTACT CARD COMPONENT =====
 * Encapsulates card design pattern with:
 * - Consistent spacing and typography
 * - Depth cues through layered shadows
 * - Smooth interactive states
 * - Accessible focus states
 */
function ContactCard({
  icon,
  title,
  content,
  hoverColor
}: {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  hoverColor: string;
}) {
  return (
    <article 
      className={`
        group relative overflow-hidden
        bg-slate-900/40 backdrop-blur-sm
        rounded-2xl border border-slate-800/60
        p-6 transition-all duration-500
        hover:border-slate-700/80 hover:shadow-lg
        hover:-translate-y-1
        focus-within:ring-2 focus-within:ring-amber-400/50
        focus-within:border-amber-400/30
      `}
    >
      {/* Decorative gradient overlay on hover */}
      <div 
        className={`
          absolute inset-0 opacity-0 group-hover:opacity-10
          bg-gradient-to-br ${hoverColor}
          transition-opacity duration-500
          rounded-2xl
        `} 
        aria-hidden="true"
      />
      
      <div className="relative z-10 flex items-start space-x-4">
        <div className="
          mt-1 flex-shrink-0 p-3
          bg-gradient-to-br from-slate-800 to-slate-900
          rounded-xl shadow-md border border-slate-700/40
          group-hover:scale-110 transition-transform duration-300
        ">
          {icon}
        </div>
        
        <div>
          <h3 className="
            text-xl font-semibold bg-clip-text text-transparent
            bg-gradient-to-r from-white to-slate-300
            mb-2
          ">
            {title}
          </h3>
          <div className="
            text-slate-300 leading-relaxed
            group-hover:text-slate-100 transition-colors
          ">
            {content}
          </div>
        </div>
      </div>
    </article>
  );
}

// SVG Icon Components (Optimized for Performance)
const EnvelopeIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.8"
    className="text-amber-300"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.34 0L2.44 8.893a2.25 2.25 0 0 1-1.069-1.916V6.75"
    />
  </svg>
);

const LocationIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.8"
    className="text-rose-300"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" 
    />
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" 
    />
  </svg>
);

const ClockIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.8"
    className="text-cyan-300"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
    />
  </svg>
);

const PhoneIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.8"
    className="text-emerald-300"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 4.5a1.5 1.5 0 0 1 1.5-1.5h2.25a1.5 1.5 0 0 1 1.5 1.28l.38 2.28a1.5 1.5 0 0 1-.39 1.24l-1.32 1.32a12 12 0 0 0 5.58 5.58l1.32-1.32a1.5 1.5 0 0 1 1.24-.39l2.28.38a1.5 1.5 0 0 1 1.28 1.5V20.25a1.5 1.5 0 0 1-1.5 1.5h-.75c-8.008 0-14.25-6.242-14.25-14.25v-.75Z"
    />
  </svg>
);
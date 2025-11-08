"use client";

import React from "react";

const HomeAboutSection = () => {
return (
    <section
    id="about"
    className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-gray-900 via-black to-gray-900 text-white py-24 px-6 md:px-16 overflow-hidden"
    >
      {/* Heading */}
    <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x drop-shadow-[0_0_10px_rgba(255,69,0,0.7)] text-center leading-tight mb-8 opacity-0 animate-fade-up">
        About Me
    </h2>

      {/* Description */}
    <p className="max-w-3xl text-center text-lg md:text-xl leading-relaxed text-gray-300 opacity-0 animate-fade-up animation-delay-200">
        I&apos;m a <span className="text-orange-400 font-semibold">kidney specialist</span> 
        dedicated to delivering compassionate and evidence-based care for people with 
        kidney-related conditions. I focus on accurate diagnosis, effective treatment, 
        and long-term wellness through trust, respect, and open communication. My goal 
        is to guide every patient toward better kidney health and a more fulfilling life.
    </p>

    <a
        href="/about"
        className="mt-10 inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(255,69,0,0.7)] transition duration-300 opacity-0 animate-fade-up animation-delay-400"
    >
        Learn More
    </a>

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

        @keyframes fade-up {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
        }

        .animate-fade-up {
        animation: fade-up 0.8s ease forwards;
        }

        .animation-delay-200 {
        animation-delay: 0.2s;
        }

        .animation-delay-400 {
        animation-delay: 0.4s;
        }
    `}</style>
    </section>
);
};

export default HomeAboutSection;

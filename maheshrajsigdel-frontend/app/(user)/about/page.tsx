"use client";
import React, { useEffect, useState } from "react";

const AboutMe = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
      <section
        id="about"
        className={`min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-200 py-28 px-6 md:px-16 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="text-center mb-16">
          <h1
            className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 bg-clip-text text-transparent animate-gradient-x drop-shadow-[0_0_10px_rgba(255,69,0,0.7)]"
            style={{ WebkitTextStroke: "0.5px rgba(0,0,0,0.15)" }}
          >
            About Me
          </h1>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 animate-gradient-x"></div>
          <p className="mt-4 text-gray-400 text-xl">
            Dedicated kidney specialist providing compassionate care and comprehensive treatment
          </p>
        </div>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 bg-gray-800/40 rounded-2xl p-8 md:p-10 shadow-lg leading-relaxed text-lg">
          <p className="mb-6">
            I am a dedicated <span className="text-yellow-400 font-semibold">kidney specialist </span> committed to providing compassionate and comprehensive care for patients 
            with kidney-related conditions. My goal is to ensure every individual receives accurate diagnosis, effective treatment, and continuous support throughout their journey toward better health.
          </p>

          <p className="mb-6">
            With years of clinical experience and a deep interest in <span className="text-yellow-400 font-semibold">chronic kidney disease, dialysis management</span>, and
            <span className="text-yellow-400 font-semibold"> transplant medicine</span>, 
            I believe in a personalized approach that focuses on both medical excellence 
            and patient well-being.
          </p>

          <p className="mb-6">
            Beyond my clinical practice, I stay actively involved in <span className="text-pink-400 font-semibold">medical research and patient education</span>, advocating for early detection and prevention of kidney diseases. 
            I am passionate about empowering people to take charge of their kidney health through awareness, lifestyle guidance, and compassionate care.
          </p>

          <p>
            My philosophy of care revolves around trust, respect, and long-term partnership with patients. I believe medicine is not only about treating illnesses but also 
            about guiding people toward <span className="text-yellow-400 font-semibold">healthier, more fulfilling lives</span>. My goal is to listen, support, and provide the highest standard of care possible.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/30 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">
              Clinical Experience
            </h3>
            <p className="text-gray-300 text-base">
              Years of specialized practice in nephology with focus on personalized patient care
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/30 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-pink-400 mb-2">
              Research & Education
            </h3>
            <p className="text-gray-300 text-base">
              Active involvement in medical research and patient education initiatives
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-900/40 to-sky-900/30 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-sky-400 mb-2">
              Care Philosophy
            </h3>
            <p className="text-gray-300 text-base">
              Trust, respect, and long-term partnership focused on holistic well-being
            </p>
          </div>
        </div>
      </div>

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
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutMe;

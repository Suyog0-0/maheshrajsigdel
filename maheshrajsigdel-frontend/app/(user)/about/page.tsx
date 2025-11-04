"use client";

import React from "react";

const AboutMeSection = () => {
  return (
    <section
      id="about-me-section"
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-gray-900 via-black to-gray-900 text-white relative overflow-visible py-24 px-6 md:px-20"
    >
      {/* Heading */}
      <h1
        className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x drop-shadow-[0_0_10px_rgba(255,69,0,0.7)] text-center leading-tight pb-10"
        style={{
          WebkitTextStroke: "0.5px rgba(0,0,0,0.15)",
        }}
      >
        About Me
      </h1>

      {/* Description */}
      <div className="max-w-5xl text-lg md:text-xl leading-relaxed space-y-8 text-justify">
        <p>
          I am a dedicated <span className="text-orange-400 font-semibold"> kidney specialist
          </span> committed to providing compassionate, comprehensive, and evidence-based
          care for individuals with kidney-related conditions. My focus is to ensure
          every patient receives accurate diagnosis, effective treatment, and
          ongoing support toward better health and well-being.
        </p>

        <p>
          With years of experience in managing <span className="text-pink-400 font-medium"> chronic kidney disease, dialysis, and transplant medicine, </span>{" "}
          I believe in a personalized approach that combines medical excellence
          with empathy. My practice emphasizes open communication, helping patients
          understand their conditions and make informed decisions about their care.
        </p>

        <p>
          Beyond clinical work, I am actively involved in <span className="text-pink-400 font-medium">medical research and patient education, </span>{" "}
          promoting early detection and prevention of kidney diseases. I’m passionate
          about empowering people to take charge of their kidney health through
          awareness, lifestyle guidance, and proactive medical support.
        </p>

        <p>
          My philosophy of care centers on <span className="text-orange-400 font-semibold">trust, respect, and lifelong partnership </span>
          with patients. I view medicine not just as treatment, but as guidance toward
          healthier, more fulfilling lives. Outside of work, I enjoy reading medical
          journals, exploring innovations in digital health, and <span className="text-pink-400 font-medium">spending time with family </span>
          and nature — experiences that keep me grounded and inspired to serve
          better every day.
        </p>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
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
      `}</style>
    </section>
  );
};

export default AboutMeSection;

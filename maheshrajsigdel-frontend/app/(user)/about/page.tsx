"use client";

import React from 'react';

const AboutMeSection = () => {
  return (
    <section 
      id="about-me-section" 
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-gray-900 via-black to-gray-900 relative overflow-visible py-32 px-4 pb-44"
    >
      <h1
        className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x drop-shadow-[0_0_10px_rgba(255,69,0,0.7)] text-center leading-tight md:leading-[1.09] pb-8"
        style={{
          WebkitTextStroke: '0.5px rgba(0,0,0,0.15)',
          paddingBottom: '2.5rem',
          lineHeight: 1.12,
        }}
      >
        About Me Page
      </h1>

      <div className='description' style={{padding: '20px', margin: '20px'}}>
        <p className='text' style={{textAlign: 'justify', fontSize: '25px'}}>
          I am a dedicated <span className="text-orange-400 font-semibold"> kidney specialist </span> 
          committed to providing compassionate and comprehensive care for patients 
          with kidney-related conditions. My goal is to ensure every individual 
          receives the most accurate diagnosis, effective treatment, and continuous 
          support throughout their journey toward better health. With years of clinical experience and a deep interest in chronic kidney disease, 
          dialysis management, and transplant medicine, I believe in a personalized approach 
          that focuses on both medical excellence and patient well-being. I work closely 
          with patients to help them understand their condition and make informed decisions 
          about their care. Beyond my clinical practice, I stay actively involved in 
          <span className="text-pink-400 font-medium"> medical research and patient education</span>, 
          advocating for early detection and prevention of kidney diseases. 
          I am passionate about empowering people to take charge of their kidney health 
          through awareness, lifestyle guidance, and compassionate care.
        </p>
        <p className='text' style={{textAlign: 'justify', fontSize: '25px'}}>
          My philosophy of care revolves around trust, respect, and long-term partnership with patients. 
          I believe that medicine is not only about treating illnesses but also about guiding people toward 
          <span className="text-orange-400 font-semibold"> healthier, more fulfilling lives. </span> Each patient’s story matters, and my goal is to listen, support, 
          and provide the highest standard of care possible. Outside of medicine, I enjoy reading medical journals, exploring advancements in digital health, 
          and <span className="text-pink-400 font-medium"> spending time with family </span> and nature — which helps me stay grounded and continually inspired 
          to serve my patients better.
        </p>
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
        #about-me-section h1 {
          /* Prevent text cutoff for descenders */
          padding-bottom: 2.5rem;
        }
      `}</style>
    </section>
  );
};

export default AboutMeSection;
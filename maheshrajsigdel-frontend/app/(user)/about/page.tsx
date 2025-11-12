"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  FaStethoscope,
  FaBook,
  FaHeart,
  FaUserFriends,
  FaCalendarAlt,
} from "react-icons/fa";

const AboutMe = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLDivElement;
          const sectionId = target.dataset.section;
          if (entry.isIntersecting && sectionId) {
            setVisibleSections((prev) => ({
              ...prev,
              [sectionId]: true,
            }));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (sectionRefs.current.length <= index) {
      while (sectionRefs.current.length <= index) {
        sectionRefs.current.push(null);
      }
    }
    if (el && sectionRefs.current[index] !== el) {
      el.dataset.section = `section-${index}`;
      sectionRefs.current[index] = el;
    }
  };

  return (
    <section
      id="about"
      className={`min-h-screen bg-gradient-to-br from-slate-900 via-gray-950 to-slate-900 text-slate-200 pt-42 pb-28 px-6 md:px-16 transition-all duration-500 ease-out ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* ===== HEADER SECTION ===== */}
        <div
          ref={(el) => addToRefs(el, 0)}
          className={`text-center mb-16 transition-all duration-500 delay-100 ${
            visibleSections["section-0"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-gradient-x hover:scale-105 transition-transform duration-200 cursor-default">
              About Me
            </h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full animate-pulse"></div>
          </div>
          <p className="mt-8 text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Dedicated kidney specialist providing compassionate care and comprehensive treatment
          </p>
        </div>

        {/* ===== CONTENT GRID ===== */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* ===== MAIN CONTENT CARD ===== */}
          <div className="lg:col-span-2">
            <div
              ref={(el) => addToRefs(el, 1)}
              className={`bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-2xl border border-slate-700/50 hover:border-amber-500/20 transition-all duration-300 group hover:shadow-2xl hover:shadow-amber-500/5 ${
                visibleSections["section-1"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative space-y-8 text-slate-300 leading-relaxed">
                {/* First Paragraph */}
                <div
                  className={`transition-all duration-300 delay-150 ${
                    visibleSections["section-1"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <p className="text-lg">
                    I am a dedicated{" "}
                    <span className="text-amber-400 font-medium bg-amber-400/10 px-2 py-1 rounded-md transition-all duration-200 hover:bg-amber-400/20 hover:scale-105 cursor-default">
                      kidney specialist
                    </span>{" "}
                    committed to providing compassionate and comprehensive care for patients with kidney-related conditions. My goal is to ensure every individual receives accurate diagnosis, effective treatment, and continuous support throughout their journey toward better health.
                  </p>
                </div>

                {/* Second Paragraph */}
                <div
                  className={`transition-all duration-300 delay-250 ${
                    visibleSections["section-1"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <p className="text-lg">
                    With years of clinical experience and a deep interest in{" "}
                    <span className="text-orange-400 font-medium bg-orange-400/10 px-2 py-1 rounded-md transition-all duration-200 hover:bg-orange-400/20 hover:scale-105 cursor-default">
                      chronic kidney disease, dialysis management
                    </span>
                    , and{" "}
                    <span className="text-orange-400 font-medium bg-orange-400/10 px-2 py-1 rounded-md transition-all duration-200 hover:bg-orange-400/20 hover:scale-105 cursor-default">
                      transplant medicine
                    </span>
                    , I believe in a personalized approach that focuses on both medical excellence and patient well-being.
                  </p>
                </div>

                {/* Third Paragraph */}
                <div
                  className={`transition-all duration-300 delay-350 ${
                    visibleSections["section-1"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <p className="text-lg">
                    Beyond my clinical practice, I stay actively involved in{" "}
                    <span className="text-red-400 font-medium bg-red-400/10 px-2 py-1 rounded-md transition-all duration-200 hover:bg-red-400/20 hover:scale-105 cursor-default">
                      medical research and patient education
                    </span>
                    , advocating for early detection and prevention of kidney diseases. I am passionate about empowering people to take charge of their kidney health through awareness, lifestyle guidance, and compassionate care.
                  </p>
                </div>

                {/* Fourth Paragraph */}
                <div
                  className={`transition-all duration-300 delay-450 ${
                    visibleSections["section-1"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <p className="text-lg">
                    My philosophy of care revolves around trust, respect, and long-term partnership with patients. I believe medicine is not only about treating illnesses but also about guiding people toward{" "}
                    <span className="text-amber-400 font-medium bg-amber-400/10 px-2 py-1 rounded-md transition-all duration-200 hover:bg-amber-400/20 hover:scale-105 cursor-default">
                      healthier, more fulfilling lives
                    </span>
                    . My goal is to listen, support, and provide the highest standard of care possible.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== FEATURE CARDS ===== */}
          <div className="flex flex-col gap-6">
            {/* Clinical Experience Card */}
            <div
              ref={(el) => addToRefs(el, 2)}
              className={`bg-gradient-to-br from-amber-900/20 to-orange-900/10 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-amber-800/30 hover:border-amber-600/50 transition-all duration-300 group hover:transform hover:-translate-y-1 hover:shadow-2xl ${
                visibleSections["section-2"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center group-hover:bg-amber-500/30 transition-all duration-200 group-hover:scale-110">
                  <FaStethoscope className="w-6 h-6 text-amber-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-amber-400 mb-3">
                    Clinical Experience
                  </h3>
                  <p className="text-slate-400 text-base leading-relaxed">
                    Years of specialized practice in nephrology with focus on personalized patient care
                  </p>
                </div>
              </div>
            </div>

            {/* Research & Education Card */}
            <div
              ref={(el) => addToRefs(el, 3)}
              className={`bg-gradient-to-br from-cyan-900/20 to-blue-900/10 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-cyan-800/30 hover:border-cyan-600/50 transition-all duration-300 group hover:transform hover:-translate-y-1 hover:shadow-2xl ${
                visibleSections["section-3"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center group-hover:bg-cyan-500/30 transition-all duration-200 group-hover:scale-110">
                  <FaBook className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                    Research & Education
                  </h3>
                  <p className="text-slate-400 text-base leading-relaxed">
                    Active involvement in medical research and patient education initiatives
                  </p>
                </div>
              </div>
            </div>

            {/* Care Philosophy Card */}
            <div
              ref={(el) => addToRefs(el, 4)}
              className={`bg-gradient-to-br from-red-900/20 to-rose-900/10 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-red-800/30 hover:border-red-600/50 transition-all duration-300 group hover:transform hover:-translate-y-1 hover:shadow-2xl ${
                visibleSections["section-4"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center group-hover:bg-red-500/30 transition-all duration-200 group-hover:scale-110">
                  <FaHeart className="w-6 h-6 text-red-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-red-400 mb-3">
                    Care Philosophy
                  </h3>
                  <p className="text-slate-400 text-base leading-relaxed">
                    Trust, respect, and long-term partnership focused on holistic well-being
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Card — FIXED ALIGNMENT */}
            <div
              ref={(el) => addToRefs(el, 5)}
              className={`bg-black/40 backdrop-blur-xl rounded-xl p-6 shadow-2xl border border-white/5 hover:border-amber-500/30 hover:shadow-amber-500/10 transition-all duration-300 ease-out group hover:transform hover:-translate-y-1 relative overflow-hidden ${
                visibleSections["section-5"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 relative z-10">
                {/* YEARS EXPERIENCE */}
                <div className="flex flex-col items-center text-center group/item min-h-[72px]">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center group-hover/item:bg-amber-500/30 transition-all duration-200 group-hover/item:scale-110">
                      <FaCalendarAlt className="w-5 h-5 text-amber-400" />
                    </div>
                    <span className="text-4xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-gradient-x">
                      10+
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-medium group-hover/item:text-amber-300 transition-colors duration-200">
                    Years Experience
                  </span>
                </div>

                {/* VERTICAL DIVIDER */}
                <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

                {/* PATIENTS HELPED */}
                <div className="flex flex-col items-center text-center group/item min-h-[72px]">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover/item:bg-orange-500/30 transition-all duration-200 group-hover/item:scale-110">
                      <FaUserFriends className="w-5 h-5 text-orange-400" />
                    </div>
                    <span className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-rose-400 bg-clip-text text-transparent animate-gradient-x">
                      500+
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-medium group-hover/item:text-orange-300 transition-colors duration-200">
                    Patients Helped
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% center;
          }
          50% {
            background-position: 200% center;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
        html {
          scroll-behavior: smooth;
        }
        ::selection {
          background: rgba(251, 191, 36, 0.3);
          color: white;
        }
      `}</style>
    </section>
  );
};

export default AboutMe;
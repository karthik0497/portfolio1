import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import "prism-themes/themes/prism-one-light.css";
import Meteors from "@/components/ui/meteors";

import SparklesText from "@/components/ui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";
import { greet, intro, bio, role, titles, skills, highlight_words_1, highlight_words_2, highlight_words_3, linkedin_profile, python_resume, robotics_resume, skills1 } from "@/pages/variables/varibles.js";

// Grid Background - Replacing the HexagonBackground
const GridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className="absolute inset-0"
        >
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <rect
              width="40"
              height="40"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              className="opacity-40 animate-gridPulse"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

export default function Hero() {
  const [code] = useState(skills);
  const [code1] = useState(skills1);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex items-center relative overflow-hidden pt-20 lg:pt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center justify-between relative z-10">

        {/* Left column - Text content */}
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-blue-700 text-sm font-medium">Welcome to my Portfolio</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold leading-tight mb-6 text-slate-900">
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              {intro}
            </span>
          </h1>

          <div className="text-xl sm:text-2xl text-slate-600 mb-8 font-light">
            <FlipWords words={titles} className="text-slate-800 font-medium" />
          </div>

          <p className="text-slate-600 text-lg leading-relaxed max-w-xl mb-10">
            {bio}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={linkedin_profile}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              LinkedIn
            </a>

            <a
              href={python_resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-medium transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2"
            >
              <span>Python Resume</span>
            </a>

            <a
              href={robotics_resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-medium transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2"
            >
              <span>Robotics Resume</span>
            </a>
          </div>
        </div>

        {/* Right column - Code Code */}
        <div className="w-full lg:w-1/2 lg:pl-10">
          <div className="rounded-xl overflow-hidden bg-white border border-slate-200 shadow-2xl relative">
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-200">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span className="ml-2 text-xs text-slate-500 font-medium">about.py</span>
            </div>

            <div className="p-0 overflow-x-auto">
              {/* Desktop View */}
              <pre className="language-python !bg-transparent !m-0 !p-4 hidden lg:block text-sm !text-slate-800">
                <code className="language-python !text-slate-800">{code}</code>
              </pre>
              {/* Mobile View */}
              <pre className="language-python !bg-transparent !m-0 !p-4 lg:hidden text-xs !text-slate-800">
                <code className="language-python !text-slate-800">{code1}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Absolute simplified decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -z-10"></div>
    </main>
  );
}


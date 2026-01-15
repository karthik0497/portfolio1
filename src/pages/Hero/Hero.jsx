import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import "prism-themes/themes/prism-one-light.css";
import Meteors from "@/components/ui/meteors";

import SparklesText from "@/components/ui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";
import { greet, intro, bio, role, titles, skills, skillsMobile, highlight_words_1, highlight_words_2, highlight_words_3, linkedin_profile, github_profile, python_resume, robotics_resume } from "@/pages/variables/varibles.js";

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
  const [codeMobile] = useState(skillsMobile);

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
              href={github_profile}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-slate-500/25 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
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
              {/* Desktop View - Full Code */}
              <pre className="language-python !bg-transparent !m-0 !p-4 hidden lg:block text-sm !text-slate-800">
                <code className="language-python !text-slate-800">{code}</code>
              </pre>

              {/* Mobile View - Optimized Code */}
              <pre className="language-python !bg-transparent !m-0 !p-4 lg:hidden text-xs !text-slate-800 whitespace-pre-wrap">
                <code className="language-python !text-slate-800">{codeMobile}</code>
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


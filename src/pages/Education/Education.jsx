import React, { useState } from "react";
import { education, sentence_3 } from "@/pages/variables/varibles.js";
import {
  Calendar,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const educationData = education;

  return (
    <section className="relative overflow-hidden">
      {/* Container matched to Experience max-w-4xl */}
      <div className="max-w-4xl mx-auto px-0 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Education
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            {sentence_3}
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="w-full bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-teal-50 rounded-xl flex items-center justify-center w-16 h-16">
                    <span className="text-3xl">{edu.mascot}</span>
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-teal-600 flex items-center gap-2 font-medium">
                        <BookOpen className="w-5 h-5" />
                        {edu.school}
                      </p>
                    </div>
                    <span className="inline-block bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap flex items-center gap-2 h-fit">
                      <Calendar className="w-4 h-4" />
                      {edu.year}
                    </span>
                  </div>

                  <p className="text-gray-600 leading-relaxed border-l-2 border-teal-500 pl-4 mt-4">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

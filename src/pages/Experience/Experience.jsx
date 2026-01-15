import React from "react";
import { experience, sentence_2, sentence_1 } from "@/pages/variables/varibles.js";
import EducationSection from "@/pages/Education/Education.jsx";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
}) => (
  // Changed to white background, light border, and dark text
  <div className="w-full bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex-shrink-0">
        <div className="p-4 bg-blue-50 rounded-xl">
          <Icon className="w-8 h-8 text-blue-600" />
        </div>
      </div>

      <div className="flex-grow">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {title}
            </h3>
            <p className="text-blue-600 font-medium text-lg">{company}</p>
          </div>
          <span className="inline-block bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap">
            {period}
          </span>
        </div>

        <ul className="space-y-3">
          {description.map((point, idx) => (
            <li key={idx} className="flex gap-3 text-gray-600 leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = experience;

  return (
    <div className="py-32 bg-slate-50" id="experience">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
          {sentence_2}
        </h2>

        {/* Consistent max-width container */}
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>

        <div className="mt-32">
          <EducationSection />
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
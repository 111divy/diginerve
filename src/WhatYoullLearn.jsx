import React, { useState } from "react";
import compImg from "./assets/Images/comp.png";
const topicsData = [
  {
    name: "Anatomy",
    details: [
      "Your Path to Medical Excellence Starts Here!",
      "Your Path to Medical Excellence Starts Here!",
      "Your Path to Medical Excellence Starts Here!",
      "Your Path to Medical Excellence Starts Here!",
    ],
  },
  {
    name: "Physiology",
    details: [
      "Your Path to Medical Excellence Starts Here!",
      "Your Path to Medical Excellence Starts Here!",
    ],
  },
  {
    name: "Biochemistry",
    details: [
      "Your Path to Medical Excellence Starts Here!",
      "Your Path to Medical Excellence Starts Here!",
    ],
  },
];

const WhatYoullLearn = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white px-6 py-12 flex justify-center">
      <div className="max-w-[990px] w-full flex flex-col lg:flex-row items-start gap-6">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={compImg}
            alt="Learning illustration"
            className="max-w-full h-auto"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">
            What You’ll Learn
          </h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Dive into the topics covered in each subject—organized,
            comprehensive, and exam-focused.
          </p>

          <div className="border-t border-gray-300">
            {topicsData.map((topic, index) => (
              <div key={index} className="border-b border-gray-300 py-4">
                {/* Accordion header */}
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => handleToggle(index)}
                >
                  <span className="text-blue-900 font-semibold text-lg">
                    {topic.name}
                  </span>
                  <span className="text-blue-900 text-2xl">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </div>

                {activeIndex === index && (
                  <div className="mt-4 ml-2 space-y-2 text-gray-700 text-sm sm:text-base">
                    {topic.details.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-right mt-4">
            <a href="#" className="text-blue-700 text-sm font-medium">
              View More...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatYoullLearn;

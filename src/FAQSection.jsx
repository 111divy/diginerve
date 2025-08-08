import React, { useState } from "react";

const faqs = [
  {
    question: "How many times can I attempt the MCQs / Question Banks?",
    answer:
      "You can attempt the MCQs as many times as you like unless stated otherwise in the course details.",
  },
  {
    question: "Are the Videos available in Hinglish?",
    answer:
      "Yes, many of our videos are available in Hinglish. Please check the course language before subscribing.",
  },
  {
    question: "How do I give my feedback on a Video?",
    answer:
      "You can leave your feedback in the comment section below each video or through the feedback form in your dashboard.",
  },
  {
    question: "Can I change speed during the video playback?",
    answer:
      "Absolutely! Use the speed control on the video player to adjust playback speed.",
  },
  {
    question: "Why can’t I see subtitles in the videos?",
    answer:
      "If subtitles aren’t showing, try enabling them in the video settings. If the issue persists, contact support.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-2">
          Frequently Asked Questions (FAQ)
        </h2>
        <p className="text-gray-600 mb-10">
          Find answers to your most common questions about our platform,
          <br />
          courses, and subscription plans.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-blue-900 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center text-blue-900 font-medium focus:outline-none"
              >
                {faq.question}
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

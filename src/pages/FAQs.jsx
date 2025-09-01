import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import SplashCursor from "../components/SplashCursor";

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Legendary all about?",
      answer:
        "Legendary is a platform built to inspire, share projects, blogs, and connect with like-minded individuals while keeping everything visually stunning and functional.",
    },
    {
      question: "How can I contribute?",
      answer:
        "You can contribute by sharing your projects, writing blogs, engaging with the community, or supporting us through donations and partnerships.",
    },
    {
      question: "Do you have a mobile version?",
      answer:
        "Yes, our site is fully responsive, and we’re working on a mobile app for an even smoother experience.",
    },
    {
      question: "How can I reach you?",
      answer:
        "You can head over to the Contact Us page, where you’ll find email, WhatsApp, and other ways to connect with us.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white py-16 px-6">
      <SplashCursor />
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-cyan-400 mb-4 py-4 tracking-wide">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Got questions? We’ve got answers. Here’s everything you need to know
          about Legendary.
        </p>
      </div>

      {/* FAQs */}
      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/20 transition"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <div className="flex items-center gap-3">
                <HelpCircle className="text-cyan-400 w-6 h-6" />
                <span className="text-xl font-semibold">{faq.question}</span>
              </div>
              {openIndex === index ? (
                <ChevronUp className="text-cyan-400 w-6 h-6" />
              ) : (
                <ChevronDown className="text-cyan-400 w-6 h-6" />
              )}
            </button>
            {openIndex === index && (
              <div className="mt-4 text-gray-300 text-lg animate-fadeIn">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs;

import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import SplashCursor from "../components/SplashCursor";

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is this portfolio all about?",
      answer:
        "This portfolio is a showcase of my web development journey, featuring projects, insights, and tools I use to build scalable applications.",
    },
    {
      question: "Are you available for freelance work?",
      answer:
        "Yes! I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
    },
    {
      question: "What tech stack do you specialize in?",
      answer:
        "I primarily specialize in the MERN stack (MongoDB, Express, React, Node.js), but I also work heavily with MySQL, Python, and Tailwind CSS for robust solutions.",
    },
    {
      question: "How can I get in touch with you?",
      answer:
        "You can reach out to me via the Contact page, drop me an email, or send a message directly on WhatsApp.",
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
          about my work and process.
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

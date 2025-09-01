import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import SplashCursor from "../components/SplashCursor";

function ContactUs() {
  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col items-center justify-center px-6 py-12">
      <SplashCursor />
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-cyan-400 drop-shadow-lg mb-10 py-6">
          Get in Touch ✨
        </h1>
        <p className="text-gray-300 mt-3 text-lg">
          We’d love to hear from you! Reach out via form, email, or WhatsApp.
        </p>
      </div>

      {/* Contact Grid */}
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl">
        {/* Left: Form */}
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-cyan-500/30">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-6">
            Send Us a Message 💌
          </h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-gray-900 text-white border border-cyan-400/40 focus:ring-2 focus:ring-cyan-400 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl bg-gray-900 text-white border border-cyan-400/40 focus:ring-2 focus:ring-cyan-400 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 rounded-xl bg-gray-900 text-white border border-cyan-400/40 focus:ring-2 focus:ring-cyan-400 outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 transition text-white font-semibold px-6 py-3 rounded-xl shadow-md"
            >
              <Send size={20} /> Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-cyan-500/30">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-6">
            Contact Info 📞
          </h2>
          <ul className="space-y-5">
            <li className="flex items-center gap-4">
              <Mail className="text-cyan-400" />
              <span>legendary@site.com</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="text-cyan-400" />
              <span>+254 700 123 456</span>
            </li>
            <li className="flex items-center gap-4">
              <MapPin className="text-cyan-400" />
              <span>Nairobi, Kenya</span>
            </li>
          </ul>

          {/* WhatsApp Floating Button */}
          {/* <a
            href="https://wa.me/254700123456"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg animate-bounce hover:scale-110 transition z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.52 3.48A11.93 11.93 0 0 0 12.06 0C5.45 0 .02 5.43.02 12.04c0 2.12.55 4.2 1.59 6.03L0 24l6.1-1.6a11.96 11.96 0 0 0 5.96 1.54h.01c6.61 0 12-5.43 12-12.04 0-3.21-1.25-6.22-3.55-8.42ZM12.07 21c-1.9 0-3.74-.5-5.35-1.44l-.38-.22-3.62.95.97-3.53-.25-.37a9.92 9.92 0 0 1-1.54-5.35c0-5.5 4.48-9.96 9.98-9.96a9.93 9.93 0 0 1 7.06 2.92 9.93 9.93 0 0 1 2.92 7.06c0 5.5-4.48 9.94-9.99 9.94Zm5.48-7.45c-.3-.15-1.77-.87-2.05-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.27-.47-2.42-1.5a9.04 9.04 0 0 1-1.67-2.06c-.17-.3-.02-.46.13-.61.14-.14.3-.37.45-.55.15-.2.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.67-1.6-.92-2.2-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.53.08-.8.38-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.22 3.1c.15.2 2.12 3.24 5.14 4.55.72.3 1.28.48 1.72.62.72.23 1.38.2 1.9.12.58-.1 1.77-.72 2.02-1.4.25-.7.25-1.3.18-1.43-.07-.15-.27-.23-.57-.38Z" />
            </svg>
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

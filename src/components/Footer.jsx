import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
} from "lucide-react";

function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-950 text-gray-300 py-12 rounded-t-3xl shadow-[0_-4px_30px_rgba(0,255,255,0.15)] border-t border-cyan-500/30">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Legendary
          </h2>
          <p className="mt-3 text-gray-400 leading-relaxed">
            Crafting legendary experiences with creativity, passion, and
            innovation. 🌟
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-cyan-300">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {["Home", "About", "Projects", "Blogs", "FAQs", "Contact"].map((link, i) => (
              <li key={i}>
                <a
                  href={`/${link.toLowerCase()}`}
                  className="hover:text-cyan-400 transition duration-300 hover:pl-2 block"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-cyan-300">Contact</h3>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center gap-2 hover:text-cyan-400 transition">
              <Mail size={18} className="text-cyan-400" />
              <span>info@legendary.com</span>
            </li>
            <li className="flex items-center gap-2 hover:text-cyan-400 transition">
              <Phone size={18} className="text-cyan-400" />
              <span>+254 700 123 456</span>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl font-semibold text-cyan-300">Follow Us</h3>
          <div className="flex gap-5 mt-4">
            {[Facebook, Twitter, Instagram, Linkedin, Youtube].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="p-2 rounded-full bg-white/5 hover:bg-cyan-500/20 transition transform hover:scale-125"
                >
                  <Icon className="text-cyan-400 hover:text-cyan-300" />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-cyan-400 font-semibold">Legendary</span>. All
          rights reserved. 🚀
        </p>
      </div>

      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/254700123456"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg animate-bounce hover:scale-110 transition transform z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.93 11.93 0 0 0 12.06 0C5.45 0 .02 5.43.02 12.04c0 2.12.55 4.2 1.59 6.03L0 24l6.1-1.6a11.96 11.96 0 0 0 5.96 1.54h.01c6.61 0 12-5.43 12-12.04 0-3.21-1.25-6.22-3.55-8.42ZM12.07 21c-1.9 0-3.74-.5-5.35-1.44l-.38-.22-3.62.95.97-3.53-.25-.37a9.92 9.92 0 0 1-1.54-5.35c0-5.5 4.48-9.96 9.98-9.96a9.93 9.93 0 0 1 7.06 2.92 9.93 9.93 0 0 1 2.92 7.06c0 5.5-4.48 9.94-9.99 9.94Zm5.48-7.45c-.3-.15-1.77-.87-2.05-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.27-.47-2.42-1.5a9.04 9.04 0 0 1-1.67-2.06c-.17-.3-.02-.46.13-.61.14-.14.3-.37.45-.55.15-.2.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.67-1.6-.92-2.2-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.53.08-.8.38-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.22 3.1c.15.2 2.12 3.24 5.14 4.55.72.3 1.28.48 1.72.62.72.23 1.38.2 1.9.12.58-.1 1.77-.72 2.02-1.4.25-.7.25-1.3.18-1.43-.07-.15-.27-.23-.57-.38Z" />
        </svg>
      </a>
    </footer>
  );
}

export default Footer;

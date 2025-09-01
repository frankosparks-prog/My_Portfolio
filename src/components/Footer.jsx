import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";
import axios from "axios";  
import { toast } from "react-hot-toast";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

 const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${SERVER_URL}/api/subscribe`, { email });
      toast.success("Thanks for subscribing!");
      setEmail("");
    } catch (err) {
      toast.error("Subscription failed. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white pt-12 px-6 rounded-t-3xl shadow-inner relative ">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-5">
        {/* Brand / About */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">
            Frank Maina
          </h2>
          <p className="text-sm leading-relaxed opacity-80">
            Empowering youth through opportunity, mentorship, and innovation.
            Join us in building a brighter Laikipia.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: "About Us", href: "/about" },
              { name: "Events", href: "/events" },
              { name: "Gallery", href: "/gallery" },
              { name: "Testimonials", href: "/testimonials" },
              {name: "FAQs", href: "/FAQs"},
              { name: "Contact", href: "/contact" },
            ].map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="hover:underline hover:text-yellow-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +254 712 345 678
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> info@laikipiayouth.go.ke
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} />
              Laikipia HQ, Nanyuki, Kenya
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="text-sm mb-3 opacity-90">
            Stay informed about our latest events & programs.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-3 py-2 rounded bg-white text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded font-semibold transition"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Subscribe"}
            </button>
          </form>
        </div>
      </div>

      {/* Social & Quote */}
      <div className="max-w-7xl mx-auto mt-10 border-t border-gray-500 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-yellow-300"
          >
            <Facebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-yellow-300"
          >
            <Twitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-yellow-300"
          >
            <Instagram />
          </a>
          <a
            href="mailto:info@laikipiayouth.go.ke"
            aria-label="Email"
            className="hover:text-yellow-300"
          >
            <Mail />
          </a>
        </div>

        <p className="text-xs italic text-yellow-200 text-center md:text-left flex gap-2"><img src="./MyLogo.jpg" alt="" className="h-4 w-4 rounded-full"/>
          <span>
          “Get Opportunities, safeguard your future.” — Mr Frank Dev</span> 
        </p>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="absolute right-4 bottom-4 bg-yellow-400 text-black rounded-full p-2 hover:bg-yellow-500 shadow-lg transition"
      >
        <ArrowUp size={18} />
      </button>

      {/* Copyright */}
      <div className="text-center text-xs mt-6 opacity-70">
        © {new Date().getFullYear()} Frank Maina. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

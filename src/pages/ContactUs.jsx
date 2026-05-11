import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, Facebook } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SplashCursor from "../components/SplashCursor";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch(`${SERVER_URL}/api/contact/send-mail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ type: "success", text: "Message sent successfully! 🚀" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", text: "Failed to send message. Please try again." });
      }
    } catch (error) {
      setStatus({ type: "error", text: "Network error. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-950 via-black to-gray-900 min-h-screen text-white flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      <SplashCursor />
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Title Section */}
      <motion.div 
        className="text-center mb-16 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg mb-4 py-2">
          Let's Work Together ✨
        </h1>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          Have a project in mind, looking for a freelancer, or just want to say hi? Drop a message below and I'll get back to you shortly.
        </p>
      </motion.div>

      {/* Contact Grid */}
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl z-10">
        {/* Left: Form */}
        <motion.div 
          className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-white/10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Send Me a Message 💌
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full px-5 py-4 rounded-xl bg-black/40 text-white border border-gray-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all placeholder-gray-500"
              />
            </div>
            <div className="relative group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="w-full px-5 py-4 rounded-xl bg-black/40 text-white border border-gray-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all placeholder-gray-500"
              />
            </div>
            <div className="relative group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
                rows="5"
                className="w-full px-5 py-4 rounded-xl bg-black/40 text-white border border-gray-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all placeholder-gray-500 resize-none custom-scrollbar"
              ></textarea>
            </div>
            
            <AnimatePresence>
              {status && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`p-4 rounded-xl text-sm font-medium ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/30' : 'bg-red-500/10 text-red-400 border border-red-500/30'}`}
                >
                  {status.text}
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-[0.98] text-white font-bold text-lg px-6 py-4 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
            >
              {loading ? (
                <span className="animate-pulse flex items-center gap-2">Sending <span className="flex space-x-1"><span className="animate-bounce">.</span><span className="animate-bounce delay-100">.</span><span className="animate-bounce delay-200">.</span></span></span>
              ) : (
                <>
                  <Send size={22} /> Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Right: Contact Info & Map */}
        <motion.div 
          className="flex flex-col gap-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <div className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-white/10 flex-grow">
            <h2 className="text-3xl font-bold text-white mb-8">
              Contact Info 🌍
            </h2>
            <ul className="space-y-8">
              <li className="flex items-center gap-5 group cursor-pointer">
                <div className="p-4 bg-cyan-500/10 rounded-2xl group-hover:bg-cyan-500/20 transition-colors border border-cyan-500/20">
                  <Mail className="text-cyan-400 w-7 h-7" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1 font-semibold uppercase tracking-wider">Email</p>
                  <a href="mailto:mainafrank400@gmail.com" className="text-lg text-gray-200 group-hover:text-cyan-300 transition-colors block">mainafrank400@gmail.com</a>
                </div>
              </li>
              <li className="flex items-center gap-5 group cursor-pointer">
                <div className="p-4 bg-purple-500/10 rounded-2xl group-hover:bg-purple-500/20 transition-colors border border-purple-500/20">
                  <Phone className="text-purple-400 w-7 h-7" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1 font-semibold uppercase tracking-wider">Phone</p>
                  <a href="tel:+254111949314" className="text-lg text-gray-200 group-hover:text-purple-300 transition-colors block">+254 111949314</a>
                </div>
              </li>
              <li className="flex items-center gap-5 group cursor-pointer">
                <div className="p-4 bg-pink-500/10 rounded-2xl group-hover:bg-pink-500/20 transition-colors border border-pink-500/20">
                  <MapPin className="text-pink-400 w-7 h-7" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1 font-semibold uppercase tracking-wider">Location</p>
                  <span className="text-lg text-gray-200 group-hover:text-pink-300 transition-colors">Nakuru, Kenya</span>
                </div>
              </li>
            </ul>

            {/* Social Links inside Contact Card */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-5">Connect with me</h3>
              <div className="flex gap-4">
                {[
                  { icon: Github, link: "https://github.com/frankosparks-prog" },
                  { icon: Linkedin, link: "https://www.linkedin.com/in/frank-maina-362323343" },
                  { icon: Instagram, link: "https://www.instagram.com/frankmaina90/?hl=en" },
                  { icon: Facebook, link: "https://web.facebook.com/profile.php?id=100082668694004" }
                ].map(({ icon: Icon, link }, idx) => (
                  <a
                    key={idx}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 hover:bg-cyan-500 hover:text-black rounded-xl border border-gray-700 hover:border-cyan-400 transition-all shadow-md active:scale-95"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactUs;

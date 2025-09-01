import React from "react";
import { motion } from "framer-motion";
import { User, Award, Code, Rocket } from "lucide-react";
import SplashCursor from "../components/SplashCursor";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6 py-20">
      <SplashCursor />
      {/* ---------- HEADER ---------- */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent"
      >
        About Me
      </motion.h1>

      {/* ---------- INTRO ---------- */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto text-center"
      >
        I’m{" "}
        <span className="text-teal-400 font-bold font-orbitron">
          Frank Ndiritu Maina
        </span>
        , a passionate full-stack developer driven by creativity and innovation.
        I love crafting modern web applications, systems and mobile applications
        that blend <span className="text-blue-400">design</span> with{" "}
        <span className="text-teal-300">functionality</span>.
      </motion.p>

      {/* ---------- AVATAR CARD ---------- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-12 flex justify-center"
      >
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 blur-2xl opacity-70 group-hover:opacity-100 transition duration-500"></div>

          {/* Avatar Image */}
          <img
            src="./me.jpg" // <-- replace with your profile image
            alt="Frank Ndiritu Maina"
            className="relative w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-gray-800 shadow-xl object-cover"
          />
        </div>
      </motion.div>

      {/* ---------- ABOUT SECTIONS ---------- */}
      <div className="mt-16 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* LEFT SIDE (Profile & Skills) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/10"
        >
          <h2 className="text-2xl font-bold text-teal-400 mb-6 flex items-center gap-2">
            <User className="w-6 h-6 text-teal-400" /> Who I Am
          </h2>
          <p className="text-gray-300 leading-relaxed">
            A curious learner and builder with a deep love for technology. I
            specialize in building beautiful, scalable applications using the{" "}
            <span className="text-blue-400 font-semibold">MERN stack</span> and
            bringing ideas to life with
            <span className="text-teal-300 font-semibold"> Tailwind CSS</span>.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-teal-500/20 text-teal-300 rounded-full text-sm">
              React
            </span>
            <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm">
              Node.js
            </span>
            <span className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">
              MongoDB
            </span>
            <span className="px-4 py-2 bg-pink-500/20 text-pink-300 rounded-full text-sm">
              Tailwind CSS
            </span>
          </div>
        </motion.div>

        {/* RIGHT SIDE (Experience & Goals) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/10"
        >
          <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
            <Rocket className="w-6 h-6 text-blue-400" /> My Journey
          </h2>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <Award className="w-5 h-5 text-teal-400 mt-1" />
              <p>
                <span className="text-white font-semibold">Problem-Solver:</span>{" "}
                Always eager to tackle challenges and explore new tech.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <Code className="w-5 h-5 text-blue-400 mt-1" />
              <p>
                <span className="text-white font-semibold">Full-Stack Dev:</span>{" "}
                Skilled in frontend & backend, crafting smooth digital
                experiences.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <Rocket className="w-5 h-5 text-pink-400 mt-1" />
              <p>
                <span className="text-white font-semibold">Visionary:</span> On
                a mission to build impactful and legendary projects.
              </p>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

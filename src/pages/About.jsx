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
        , a motivated final-year Computer Science student at Egerton University with a strong foundation in <span className="text-blue-400">software development</span>, <span className="text-teal-300">database management</span>, and basic cybersecurity practices.
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
            I am a builder and a learner, experienced in developing practical applications using modern technologies and collaborating in team-based software projects. I specialize in building full-stack applications using the{" "}
            <span className="text-blue-400 font-semibold">MERN stack</span> and <span className="text-cyan-400 font-semibold">MySQL</span>.
            I also possess robust ICT support capabilities, from computer hardware troubleshooting and software configuration to network basics and user technical support.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-teal-500/20 text-teal-300 rounded-full text-sm">
              JavaScript / Python
            </span>
            <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm">
              Java / C# / C
            </span>
            <span className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">
              React.js & Node.js
            </span>
            <span className="px-4 py-2 bg-pink-500/20 text-pink-300 rounded-full text-sm">
              MySQL & MongoDB
            </span>
            <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
              Git & REST APIs
            </span>
            <span className="px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">
              ICT Support
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
            <Rocket className="w-6 h-6 text-blue-400" /> Education & Goals
          </h2>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <Award className="w-5 h-5 text-teal-400 mt-1" />
              <p>
                <span className="text-white font-semibold">BSc Computer Science:</span>{" "}
                Egerton University, Nakuru (2022 – Expected Nov 2026).
              </p>
            </li>
            <li className="flex items-start gap-3">
              <Code className="w-5 h-5 text-blue-400 mt-1" />
              <p>
                <span className="text-white font-semibold">Secondary Education:</span>{" "}
                St Mary’s Boys Secondary School, Nyeri (2018 – 2021) - B+ Aggregate.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <Rocket className="w-5 h-5 text-pink-400 mt-1" />
              <p>
                <span className="text-white font-semibold">Objective:</span>{" "}
                Seeking an internship or entry-level ICT opportunity to apply my technical skills, gain hands-on industry experience, and contribute to technology-driven solutions.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <User className="w-5 h-5 text-yellow-400 mt-1" />
              <p>
                <span className="text-white font-semibold">Competencies:</span> Software debugging & testing, system troubleshooting, team collaboration, and basic cybersecurity practices.
              </p>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

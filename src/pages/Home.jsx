// src/pages/Home.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import { FolderKanban, Mail, Code2, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SplashCursor from "../components/SplashCursor";
import CircularGallery from "../components/CircularGallery";

const Home = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  // Initialize Vanta.js
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x00ffff,
          backgroundColor: 0x0a0a0a,
          points: 12.0,
          maxDistance: 20.0,
          spacing: 18.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section
      ref={vantaRef}
      className="relative min-h-screen flex flex-col items-center text-center px-6 pt-20 pb-20 overflow-hidden text-white"
    >
      <SplashCursor />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* ---------------- Hero Section ---------------- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-12"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          <div style={{ height: "400px", width: "600px", position: "relative" }}>
            <CircularGallery
              bend={3}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollEase={0.02}
            />
          </div>
          {/* <Tilt
            glareEnable={true}
            glareMaxOpacity={0.45}
            glareColor="#00ffff"
            glarePosition="all"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            className="rounded-3xl"
          >
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-3xl border-4 border-cyan-400 shadow-lg overflow-hidden group">
              <img
                src="./me.jpg"
                alt="Profile"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          </Tilt> */}

          {/* Glowing ring */}
          <div className="absolute inset-0 rounded-3xl border-2 border-cyan-400/40 animate-pulse blur-md"></div>
        </motion.div>

        {/* Text Content */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
            Hi, I’m{" "}
            <span className="text-cyan-400">
              <Typewriter
                words={[
                  "Frank",
                  "a Developer",
                  "a Creator",
                  "a Problem Solver",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>

          <motion.p
            className="mt-4 text-lg md:text-2xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Full-Stack Developer | MERN Enthusiast | Creative Builder
          </motion.p>

          <motion.p
            className="mt-6 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            I design and build modern web apps with stunning user experiences,
            blending creativity with performance. Passionate about
            problem-solving and turning ideas into reality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-8 flex flex-col md:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <Link
              to="/projects"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 text-black rounded-full font-semibold shadow-lg hover:bg-cyan-400 transition"
            >
              <FolderKanban size={20} />
              View Projects
            </Link>

            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-black text-cyan-400 border border-cyan-400 rounded-full font-semibold shadow-lg hover:bg-cyan-900 transition"
            >
              <Mail size={20} />
              Contact Me
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* ---------------- About Preview ---------------- */}
      <section className="relative z-10 mt-32 max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-cyan-400">About Me</h2>
        <p className="mt-4 text-gray-300">
          I’m a passionate developer who loves blending creativity with code to
          build digital products that make an impact.
        </p>
        <Link
          to="/about"
          className="mt-6 inline-block px-5 py-2 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition"
        >
          Learn More
        </Link>
      </section>

      {/* ---------------- Featured Projects ---------------- */}
      <section className="relative z-10 mt-32 max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-cyan-400 text-center">
          Featured Projects
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/60 border border-cyan-400/40 shadow-lg rounded-2xl p-6 hover:scale-105 transition">
            <Code2 className="w-10 h-10 mx-auto text-cyan-400" />
            <h3 className="mt-4 text-xl font-semibold">Online Store</h3>
            <p className="text-gray-400 mt-2">Full-stack E-Commerce platform built with the MERN stack and robust API integrations.</p>
          </div>
          <div className="bg-black/60 border border-cyan-400/40 shadow-lg rounded-2xl p-6 hover:scale-105 transition">
            <Sparkles className="w-10 h-10 mx-auto text-cyan-400" />
            <h3 className="mt-4 text-xl font-semibold">ERP System</h3>
            <p className="text-gray-400 mt-2">Multi-user Enterprise Resource Planning system for water services with role-based access.</p>
          </div>
          <div className="bg-black/60 border border-cyan-400/40 shadow-lg rounded-2xl p-6 hover:scale-105 transition">
            <ArrowRight className="w-10 h-10 mx-auto text-cyan-400" />
            <h3 className="mt-4 text-xl font-semibold">Team Projects</h3>
            <p className="text-gray-400 mt-2">Lead and contributed to collaborative software projects using agile methodologies.</p>
          </div>
        </div>
      </section>

      {/* ---------------- Skills Snapshot ---------------- */}
      <section className="relative z-10 mt-32 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-cyan-400">Tech I Use</h2>
        <div className="mt-8 flex justify-center gap-6 flex-wrap">
          {["React ⚛️", "Node.js 🌿", "MongoDB 🍃", "Tailwind 🎨", "MySQL 🐬", "Python 🐍"].map(
            (skill, i) => (
              <span
                key={i}
                className="px-6 py-3 bg-black/50 border border-cyan-400/30 rounded-xl font-semibold shadow hover:scale-110 transition"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </section>

      {/* ---------------- Call to Action ---------------- */}
      <section className="relative z-10 mt-32 text-center">
        <h2 className="text-3xl font-bold text-cyan-400">
          Let’s Build Something Legendary 🚀
        </h2>
        <p className="mt-4 text-gray-300">
          Have an idea or project in mind? Let’s connect.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block px-6 py-3 bg-cyan-500 text-black font-semibold rounded-full hover:scale-110 transition"
        >
          Contact Me
        </Link>
      </section>

      {/* ---------------- Scroll Down Indicator ---------------- 
      <motion.div
        className="absolute bottom-10 text-cyan-400 text-sm opacity-75 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        ↓ Scroll Down
      </motion.div> */}
    </section>
  );
};

export default Home;

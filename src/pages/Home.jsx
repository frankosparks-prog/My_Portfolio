// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FolderKanban, Mail, Code2, Palette, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  // tsParticles config
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    background: { color: "transparent" },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    particles: {
      color: { value: "#ffffff" },
      links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.3, width: 1 },
      move: { enable: true, speed: 2, outModes: { default: "out" } },
      number: { value: 60, density: { enable: true, area: 800 } },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 4 } },
    },
    detectRetina: true,
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      {/* Floating Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_70%)] animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.25),transparent_70%)] animate-pulse"></div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl"
      >
        {/* Profile Image */}
        <motion.img
          src="./me.jpg" // replace with your image path
          alt="Profile"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-white shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        {/* Animated Text */}
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Hi, I’m{" "}
          <span className="text-yellow-300">
            <Typewriter
              words={["Frank", "a Developer", "a Creator", "a Problem Solver"]}
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
          className="mt-4 text-lg md:text-2xl text-gray-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Full-Stack Developer | MERN Enthusiast | Creative Builder
        </motion.p>

        <motion.p
          className="mt-6 text-gray-200 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          I design and build modern web apps with stunning user experiences,
          blending creativity with performance. Passionate about problem-solving
          and turning ideas into reality.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-8 flex flex-col md:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <Link
            to="/projects"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-indigo-600 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition"
          >
            <FolderKanban size={20} />
            View Projects
          </Link>

          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold shadow-lg hover:bg-indigo-700 transition"
          >
            <Mail size={20} />
            Contact Me
          </Link>
        </motion.div>
      </motion.div>

      {/* What I Do Section */}
      <motion.div
        className="relative z-10 mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
      >
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg text-white hover:scale-105 transition">
          <Code2 className="mx-auto mb-4" size={32} />
          <h3 className="font-bold text-lg">Web Development</h3>
          <p className="text-sm mt-2">Building scalable MERN stack apps with clean code & great UX.</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg text-white hover:scale-105 transition">
          <Palette className="mx-auto mb-4" size={32} />
          <h3 className="font-bold text-lg">UI/UX Design</h3>
          <p className="text-sm mt-2">Crafting sleek, user-friendly interfaces powered by TailwindCSS.</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg text-white hover:scale-105 transition">
          <Rocket className="mx-auto mb-4" size={32} />
          <h3 className="font-bold text-lg">Performance & Deploy</h3>
          <p className="text-sm mt-2">Optimizing apps for speed, SEO & seamless deployment.</p>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 text-white text-sm opacity-75 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        ↓ Scroll Down
      </motion.div>
    </section>
  );
};

export default Home;

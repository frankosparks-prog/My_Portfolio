// src/pages/Home.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import { FolderKanban, Mail, Code2, Sparkles, ArrowRight, Lightbulb, PenTool, Terminal, Rocket, Users, Award, Star } from "lucide-react";
import { Link } from "react-router-dom";
import SplashCursor from "../components/SplashCursor";
import CircularGallery from "../components/CircularGallery";

const AnimatedCounter = ({ from = 0, to, suffix = "", duration = 2 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.round(value) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, from, to, duration, suffix]);

  return <span ref={ref}>{from}{suffix}</span>;
};

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
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
        >
          Tech Arsenal
        </motion.h2>
        <div className="mt-10 flex justify-center gap-6 flex-wrap">
          {["React ⚛️", "Node.js 🌿", "MongoDB 🍃", "Tailwind 🎨", "MySQL 🐬", "Python 🐍", "Next.js 🚀", "TypeScript 🛡️"].map(
            (skill, i) => (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                key={i}
                className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-cyan-400/30 rounded-xl font-semibold shadow-[0_0_15px_rgba(0,255,255,0.05)] hover:shadow-[0_0_25px_rgba(0,255,255,0.4)] hover:border-cyan-400 transition-all cursor-default"
              >
                {skill}
              </motion.span>
            )
          )}
        </div>
      </section>

      {/* ---------------- Milestones / Stats ---------------- */}
      <section className="relative z-10 mt-32 max-w-6xl w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Users, count: 15, suffix: "+", label: "Happy Clients" },
            { icon: FolderKanban, count: 25, suffix: "+", label: "Projects Done" },
            { icon: Award, count: 4, suffix: "+", label: "Years Experience" },
            { icon: Star, count: 100, suffix: "%", label: "Satisfaction" },
          ].map((stat, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              key={i}
              className="bg-black/40 border border-white/5 p-8 rounded-3xl text-center flex flex-col items-center hover:border-cyan-500/50 hover:bg-black/60 shadow-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] transition-all group"
            >
              <stat.icon className="w-12 h-12 text-cyan-500 mb-5 group-hover:scale-110 group-hover:text-cyan-300 transition-transform duration-300" />
              <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                <AnimatedCounter from={0} to={stat.count} suffix={stat.suffix} duration={2} />
              </h3>
              <p className="text-gray-400 font-medium tracking-widest uppercase text-xs md:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- Work Process ---------------- */}
      <section className="relative z-10 mt-32 max-w-6xl w-full text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-cyan-400 mb-16"
        >
          My Creative Process
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-[10%] w-[80%] h-0.5 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent -translate-y-1/2 z-0"></div>
          
          {[
            { icon: Lightbulb, title: "1. Concept", desc: "Understanding the core requirements and brainstorming innovative ideas." },
            { icon: PenTool, title: "2. Design", desc: "Crafting wireframes and designing stunning, intuitive user interfaces." },
            { icon: Terminal, title: "3. Code", desc: "Building the application using robust, scalable, and modern technologies." },
            { icon: Rocket, title: "4. Launch", desc: "Deploying the finished project and delivering it to the world seamlessly." }
          ].map((step, i) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, type: "spring", stiffness: 100 }}
              key={i}
              className="relative z-10 flex flex-col items-center group"
            >
              <div className="w-24 h-24 rounded-full bg-black/80 border-2 border-gray-800 flex items-center justify-center mb-6 group-hover:border-cyan-400 group-hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] transition-all duration-500 backdrop-blur-md">
                <step.icon className="w-10 h-10 text-gray-500 group-hover:text-cyan-400 transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{step.title}</h3>
              <p className="text-gray-400 text-sm max-w-[220px] leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
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

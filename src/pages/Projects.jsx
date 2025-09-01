import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SplashCursor from "../components/SplashCursor";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A full-stack MERN e-commerce platform with authentication, payments, and admin dashboard.",
    image: "./frank-developers.png",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    live: "https://your-ecommerce.com",
    github: "https://github.com/yourusername/ecommerce",
    category: "Full-Stack",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal legendary portfolio built with MERN + Tailwind + Framer Motion.",
    image: "./frank-Logo-only.png",
    tech: ["React", "Express", "MongoDB", "Tailwind"],
    live: "#",
    github: "#",
    category: "Frontend",
  },
  {
    title: "AI Chatbot",
    description:
      "A chatbot using Node.js and OpenAI API, styled with Tailwind and deployed on Vercel.",
    image: "./MyLogo.jpg",
    tech: ["React", "Node.js", "OpenAI", "Tailwind"],
    live: "https://your-chatbot.com",
    github: "https://github.com/yourusername/chatbot",
    category: "AI",
  },
  {
    title: "Task Manager",
    description:
      "A sleek productivity app with drag-and-drop task boards and real-time syncing.",
    image: "./frank-developers.png",
    tech: ["React", "Redux", "Firebase", "Tailwind"],
    live: "#",
    github: "#",
    category: "Full-Stack",
  },
  {
    title: "Blog Platform",
    description:
      "A dynamic blogging platform with Markdown editor, authentication, and comments system.",
    image: "./MyLogo.jpg",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    live: "#",
    github: "#",
    category: "Full-Stack",
  },
  {
    title: "Weather App",
    description:
      "A weather app with animated backgrounds, geolocation, and OpenWeather API integration.",
    image: "./frank-developers.png",
    tech: ["React", "API", "Tailwind"],
    live: "#",
    github: "#",
    category: "Utilities",
  },
];

const categories = ["All", "Full-Stack", "Frontend", "AI", "Utilities"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6 py-16 relative overflow-hidden">
      <SplashCursor />

      {/* Background glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-center mb-10 py-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🚀 My Projects
        </motion.h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 
                ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/30"
                    : "bg-white/5 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-300"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden border border-white/10 hover:border-cyan-400/50 hover:shadow-cyan-500/20 transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-cyan-300 border border-cyan-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-6">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-pink-400 hover:text-pink-600 transition"
                  >
                    <ExternalLink className="w-5 h-5" /> Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-400 hover:text-white transition"
                  >
                    <Github className="w-5 h-5" /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

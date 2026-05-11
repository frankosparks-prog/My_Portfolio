import React from "react";
import { motion } from "framer-motion";
import { User, Award, Code, Rocket, Briefcase, GraduationCap, Gamepad2, BookOpen, Music, Heart } from "lucide-react";
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
            src="./Frank.png"
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

          <div className="mt-6 flex flex-col gap-3 text-sm bg-black/30 p-4 rounded-xl border border-white/5">
            <p><span className="text-teal-400 font-bold tracking-wider uppercase text-xs">Languages:</span> <span className="text-gray-300 ml-2">JavaScript, C#, C, Python, Java</span></p>
            <p><span className="text-blue-400 font-bold tracking-wider uppercase text-xs">Web Dev:</span> <span className="text-gray-300 ml-2">HTML, CSS, React.js, Express.js, Node.js</span></p>
            <p><span className="text-indigo-400 font-bold tracking-wider uppercase text-xs">Databases:</span> <span className="text-gray-300 ml-2">MySQL, MongoDB</span></p>
            <p><span className="text-pink-400 font-bold tracking-wider uppercase text-xs">Tools:</span> <span className="text-gray-300 ml-2">Git, VS Code, REST APIs, Windows, Linux</span></p>
            <p><span className="text-yellow-400 font-bold tracking-wider uppercase text-xs">Other:</span> <span className="text-gray-300 ml-2">Software Debugging & Testing, System Troubleshooting, Cybersecurity, Project Management</span></p>
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
            <Rocket className="w-6 h-6 text-blue-400" /> Projects & Goals
          </h2>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <Code className="w-5 h-5 text-teal-400 mt-1" />
              <p>
                <span className="text-white font-semibold">Online Store App:</span>{" "}
                Developed a full-stack e-commerce site with React, Node.js, Express & MongoDB. Handled frontend design, APIs, and DB operations.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <Briefcase className="w-5 h-5 text-blue-400 mt-1" />
              <p>
                <span className="text-white font-semibold">ERP System:</span>{" "}
                Built an Enterprise Resource Planning system for a water service company with role-based permissions and departmental interfaces using React & MySQL.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <User className="w-5 h-5 text-yellow-400 mt-1" />
              <p>
                <span className="text-white font-semibold">Team Projects:</span>{" "}
                Served as Project Manager during third-year software development projects. Contributed to system design, coding, testing, and coordination.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <Rocket className="w-5 h-5 text-pink-400 mt-1" />
              <p>
                <span className="text-white font-semibold">Focus:</span>{" "}
                Dedicated to engineering robust, scalable software solutions and applying exceptional problem-solving expertise to tackle complex technical challenges and drive continuous innovation.
              </p>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* ---------- MY JOURNEY TIMELINE ---------- */}
      <div className="mt-24 max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-teal-400 mb-12"
        >
          My Journey
        </motion.h2>
        
        <div className="relative border-l-4 border-gray-700 ml-6 md:ml-12 space-y-12 pb-8">
          {[
            { year: "2022 - Present", title: "BSc Computer Science", org: "Egerton University", desc: "Motivated final-year student. Expected to graduate in November 2026 with a strong foundation in software development and database management.", icon: GraduationCap, color: "text-blue-400", bg: "bg-blue-500/20" },
            { year: "2018 - 2021", title: "Kenya Certificate of Secondary Education", org: "St Mary's Boys Secondary School, Nyeri", desc: "Graduated with a B+ (70 points) aggregate.", icon: Award, color: "text-teal-400", bg: "bg-teal-500/20" },
            { year: "Upto 2017", title: "Kenya Certificate of Primary Education", org: "Gacio Junior Academy", desc: "Obtained 400 marks out of 500.", icon: BookOpen, color: "text-purple-400", bg: "bg-purple-500/20" },
          ].map((item, i) => (
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              key={i} 
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Dot */}
              <div className={`absolute -left-[26px] top-1 w-12 h-12 rounded-full ${item.bg} border-4 border-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,255,255,0.2)]`}>
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-lg hover:border-teal-400/50 transition-colors">
                <span className={`text-sm font-bold uppercase tracking-wider ${item.color} mb-2 block`}>{item.year}</span>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <h4 className="text-md text-gray-400 font-medium mb-3">{item.org}</h4>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ---------- BEYOND THE CODE ---------- */}
      <div className="mt-24 max-w-6xl mx-auto pb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-blue-400 mb-12"
        >
          Beyond The Code
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: BookOpen, title: "Continuous Learning", desc: "Always exploring new docs and tech articles." },
            { icon: Gamepad2, title: "Gaming", desc: "Relaxing with strategic and story-rich games." },
            { icon: Music, title: "Music", desc: "Listening to chill beats while debugging." },
            { icon: Heart, title: "Community", desc: "Helping peers debug and sharing knowledge." },
          ].map((hobby, i) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              key={i}
              className="bg-black/40 border border-white/5 p-6 rounded-3xl text-center flex flex-col items-center hover:bg-white/5 hover:border-blue-400/50 transition-all group"
            >
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                <hobby.icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{hobby.title}</h3>
              <p className="text-gray-400 text-sm">{hobby.desc}</p>
            </motion.div>
          ))}
        </div>
        </div>
    </div>
  );
};

export default About;

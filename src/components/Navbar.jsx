// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import {
//   Menu,
//   X,
//   Home,
//   User,
//   FolderKanban,
//   BookOpen,
//   Mail,
//   Search,
// } from "lucide-react";

// const Navbar = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [showSearch, setShowSearch] = useState(false);

//   const navLinks = [
//     { name: "Home", path: "/", icon: <Home size={18} /> },
//     { name: "About", path: "/about", icon: <User size={18} /> },
//     { name: "Projects", path: "/projects", icon: <FolderKanban size={18} /> },
//     { name: "Blog", path: "/blog", icon: <BookOpen size={18} /> },
//     { name: "Contact", path: "/contact", icon: <Mail size={18} /> },
//   ];

//   return (
//     <>
//       {/* -------- NAVBAR -------- */}
//       {/* white/95 dark:bg-gray-900/95 backdrop-blur-md*/}
//       <nav
//         className="fixed w-full z-50 top-0 left-0 rounded-b-2xl"
//       >
//         {/* shadow-md border-b border-gray-200/20 dark:border-gray-700/20 */}
//         <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
//           {/* Logo / Name */}
//           <NavLink to="/" className="flex items-center space-x-3 rounded-full border border-gray-200/20 dark:border-gray-500/20 px-3 py-1 hover:shadow-lg transition backdrop-blur-md">
//             <img
//               src="./MyLogo.jpg" // replace with your logo
//               alt="logo"
//               className="w-10 h-10 rounded-full shadow-md border border-indigo-500/40"
//             />
//             <span className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-indigo-600 to-purple-500 text-transparent bg-clip-text font-orbitron">
//               Frank Maina
//             </span>
//           </NavLink>

//           {/* Centered Navigation */}
//           <div className="hidden md:flex items-center space-x-8 rounded-full border border-gray-200/20 dark:border-gray-500/20 px-4 py-4 hover:shadow-lg transition backdrop-blur-md">
//             {navLinks.map((link, idx) => (
//               <NavLink
//                 key={idx}
//                 to={link.path}
//                 className={({ isActive }) =>
//                   `relative flex items-center space-x-2 text-sm font-medium transition group ${
//                     isActive
//                       ? "text-indigo-600 dark:text-indigo-400"
//                       : "text-gray-700 dark:text-gray-300 hover:text-indigo-500"
//                   }`
//                 }
//               >
//                 {link.icon}
//                 <span>{link.name}</span>
//                 {/* Underline Hover Effect */}
//                 <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
//               </NavLink>
//             ))}
//           </div>

//           {/* Right Side → Search + Mobile Button */}
//           <div className="flex items-center space-x-4">
//             {/* Search Icon (Desktop) */}
//             <button
//               className="hidden md:flex text-gray-700 dark:text-gray-300 hover:text-indigo-500 transition  border border-gray-200/20 dark:border-gray-500/20 px-4 py-4 hover:shadow-lg transition backdrop-blur-md rounded-full"
//               onClick={() => setShowSearch(!showSearch)}
//             >
//               <Search size={22} />
//             </button>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden text-gray-700 dark:text-gray-300"
//               onClick={() => setSidebarOpen(true)}
//             >
//               <Menu size={28} />
//             </button>
//           </div>
//         </div>

//         {/* Search Bar (Desktop Dropdown) */}
//         {showSearch && (
//           <div className="absolute top-full inset-x-0 bg-white dark:bg-gray-900 shadow-md p-4 animate-fadeIn">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>
//         )}
//       </nav>

//       {/* -------- SIDEBAR (MOBILE) -------- */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 z-50 ${
//           sidebarOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* Header Section */}
//         <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
//           <h2 className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
//             Portfolio
//           </h2>
//           <button
//             className="text-gray-700 dark:text-gray-300"
//             onClick={() => setSidebarOpen(false)}
//           >
//             <X size={28} />
//           </button>
//         </div>

//         {/* Search Bar (Mobile) */}
//         <div className="p-4">
//           <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2">
//             <Search size={20} className="text-gray-500" />
//             <input
//               type="text"
//               placeholder="Search..."
//               className="ml-2 flex-1 bg-transparent outline-none text-gray-700 dark:text-gray-200"
//             />
//           </div>
//         </div>

//         {/* Sidebar Links */}
//         <div className="flex flex-col space-y-6 px-6 mt-4">
//           {navLinks.map((link, idx) => (
//             <NavLink
//               key={idx}
//               to={link.path}
//               className={({ isActive }) =>
//                 `flex items-center space-x-3 text-lg font-medium transition ${
//                   isActive
//                     ? "text-indigo-600 dark:text-indigo-400"
//                     : "text-gray-700 dark:text-gray-300 hover:text-indigo-500"
//                 }`
//               }
//               onClick={() => setSidebarOpen(false)}
//             >
//               {link.icon}
//               <span>{link.name}</span>
//             </NavLink>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Search, Home, User, FolderKanban, FileText, Mail, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    
    const delayDebounceFn = setTimeout(async () => {
      setIsSearching(true);
      try {
        const res = await fetch(`${SERVER_URL}/api/search?q=${encodeURIComponent(searchQuery)}`);
        const data = await res.json();
        setSearchResults(data);
      } catch (err) {
        console.error("Search failed", err);
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    }, 400);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const handleResultClick = (url) => {
    setShowSearch(false);
    setSearchQuery("");
    navigate(url);
  };

  const navLinks = [
    {
      label: "Home",
      path: "/",
      color: "bg-blue-500",
      icon: <Home size={18} />,
    },
    {
      label: "About",
      path: "/about",
      color: "bg-green-500",
      icon: <User size={18} />,
    },
    {
      label: "Projects",
      path: "/projects",
      color: "bg-yellow-500",
      icon: <FolderKanban size={18} />,
    },
    {
      label: "Blog",
      path: "/blog",
      color: "bg-red-500",
      icon: <FileText size={18} />,
    },
    {
      label: "Contact",
      path: "/contact",
      color: "bg-purple-500",
      icon: <Mail size={18} />,
    },
  ];



  return (
    <>
      {/* -------- NAVBAR -------- */}
      <nav className="fixed w-full z-50 top-0 left-0 rounded-b-2xl">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center space-x-3 rounded-full border border-gray-200/20 dark:border-gray-500/20 px-3 py-1 hover:shadow-lg transition backdrop-blur-md"
          >
            <img
              src="./MyLogo.jpg"
              alt="logo"
              className="w-10 h-10 rounded-full shadow-md border border-indigo-500/40"
            />
            <span className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-indigo-600 to-purple-500 text-transparent bg-clip-text font-orbitron">
              Frank Maina
            </span>
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 rounded-full border border-gray-200/20 dark:border-gray-500/20 px-4 py-4 hover:shadow-lg transition backdrop-blur-md">
            {navLinks.map((link, idx) => (
              <NavLink
                key={idx}
                to={link.path}
                className={({ isActive }) =>
                  `relative flex items-center space-x-2 text-sm font-medium transition group ${
                    isActive
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-indigo-500"
                  }`
                }
              >
                {link.icon}
                <span>{link.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button
              className="hidden md:flex text-gray-700 dark:text-gray-300 hover:text-indigo-500 transition border border-gray-200/20 dark:border-gray-500/20 px-4 py-4 hover:shadow-lg backdrop-blur-md rounded-full"
              onClick={() => setShowSearch(!showSearch)}
            >
              <Search size={22} />
            </button>

            {/* Mobile Menu Button (2 pulsing dots) */}
            <div
              className="md:hidden flex flex-col space-y-2 cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            >
              <motion.span
                className="w-3 h-3 rounded-full bg-indigo-500"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
              <motion.span
                className="w-3 h-3 rounded-full bg-purple-500"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
              />
            </div>
          </div>
        </div>

      {/* -------- SEARCH MODAL -------- */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex flex-col items-center pt-32 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSearch(false)}
          >
            {/* Modal Container */}
            <motion.div
              className="w-full max-w-2xl bg-gray-900 border border-cyan-500/40 shadow-2xl rounded-3xl p-6 relative"
              initial={{ y: -50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-4 bg-black/40 px-5 py-4 rounded-2xl border border-gray-700/50 focus-within:border-cyan-500/80 transition-colors">
                <Search className="text-cyan-400" size={24} />
                <input
                  type="text"
                  placeholder="Search projects, blogs, or info..."
                  className="w-full bg-transparent border-none outline-none text-white text-lg placeholder-gray-500"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {isSearching && (
                  <div className="w-5 h-5 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
                )}
                <button
                  onClick={() => setShowSearch(false)}
                  className="p-1.5 bg-white/5 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Dynamic Search Results */}
              <div className="mt-8 px-2 max-h-64 overflow-y-auto custom-scrollbar">
                {!searchQuery.trim() ? (
                  <>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Quick Links</h3>
                    <div className="flex flex-wrap gap-3">
                      {['React Projects', 'Tailwind Tricks', 'About Frank', 'Contact Info'].map((tag, i) => (
                        <span 
                          key={i} 
                          onClick={() => setSearchQuery(tag)}
                          className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-300 hover:border-cyan-500/50 cursor-pointer transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </>
                ) : searchResults.length > 0 ? (
                  <div className="flex flex-col gap-3 pb-4">
                    {searchResults.map((result, i) => (
                      <div 
                        key={i}
                        onClick={() => handleResultClick(result.url)}
                        className="p-4 bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 rounded-xl cursor-pointer transition-all group flex justify-between items-center"
                      >
                        <div>
                          <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">{result.title}</h4>
                          <p className="text-sm text-gray-400 mt-1 line-clamp-1">{result.description}</p>
                        </div>
                        <span className="text-xs px-2 py-1 bg-black/50 text-gray-300 rounded uppercase tracking-wider border border-gray-700">
                          {result.type}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : !isSearching ? (
                  <div className="text-center py-8">
                    <p className="text-gray-400 mb-4">No exact matches found for "{searchQuery}".</p>
                    <p className="text-sm text-gray-500 mb-6">Try exploring these sections instead:</p>
                    <div className="flex justify-center gap-4">
                      <button onClick={() => handleResultClick('/projects')} className="px-5 py-2 bg-indigo-500/20 text-indigo-300 rounded-full hover:bg-indigo-500/40 transition">Projects</button>
                      <button onClick={() => handleResultClick('/blog')} className="px-5 py-2 bg-pink-500/20 text-pink-300 rounded-full hover:bg-pink-500/40 transition">Blogs</button>
                    </div>
                  </div>
                ) : null}
              </div>
              
              <div className="absolute -bottom-10 left-0 right-0 text-center text-sm text-gray-500">
                Press <span className="px-2 py-1 bg-white/10 rounded text-gray-300">Esc</span> or click outside to close
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>

      {/* -------- MOBILE RANDOM BUBBLES MENU -------- */}
      {/* -------- MOBILE SIDEBAR MENU -------- */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowMenu(false)}
          >
            {/* Sidebar itself */}
            <motion.div
              className="absolute top-0 left-0 h-full w-72 bg-gray-900 border-r border-gray-700 shadow-xl p-6 flex flex-col"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="./MyLogo.jpg"
                  alt="logo"
                  className="w-10 h-10 rounded-full shadow-md border border-indigo-500/40"
                />
                <span className="text-xl font-extrabold bg-gradient-to-r from-cyan-400 to-indigo-500 text-transparent bg-clip-text font-orbitron">
                  Frank Maina
                </span>
              </div>

              {/* Search */}
              <div className="mb-6">
                <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2">
                  <Search className="text-gray-400 mr-2" size={18} />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => (
                  <NavLink
                    key={idx}
                    to={link.path}
                    onClick={() => setShowMenu(false)}
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                        isActive
                          ? "bg-indigo-600 text-white"
                          : "text-gray-300 hover:bg-gray-800 hover:text-cyan-400"
                      }`
                    }
                  >
                    {link.icon}
                    <span className="font-medium">{link.label}</span>
                  </NavLink>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-auto pt-6 text-sm text-gray-500">
                © {new Date().getFullYear()} Frank Maina. All rights reserved.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

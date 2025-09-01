import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  User,
  FolderKanban,
  BookOpen,
  Mail,
  Search,
} from "lucide-react";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "About", path: "/about", icon: <User size={18} /> },
    { name: "Projects", path: "/projects", icon: <FolderKanban size={18} /> },
    { name: "Blog", path: "/blog", icon: <BookOpen size={18} /> },
    { name: "Contact", path: "/contact", icon: <Mail size={18} /> },
  ];

  return (
    <>
      {/* -------- NAVBAR -------- */}
      <nav
        className="fixed w-full z-50 top-0 left-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md border-b border-gray-200/20 dark:border-gray-700/20 rounded-b-2xl"
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo / Name */}
          <NavLink to="/" className="flex items-center space-x-3">
            <img
              src="./MyLogo.jpg" // replace with your logo
              alt="logo"
              className="w-10 h-10 rounded-full shadow-md border border-indigo-500/40"
            />
            <span className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-indigo-600 to-purple-500 text-transparent bg-clip-text">
              Frank Maina
            </span>
          </NavLink>

          {/* Centered Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
                <span>{link.name}</span>
                {/* Underline Hover Effect */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
          </div>

          {/* Right Side → Search + Mobile Button */}
          <div className="flex items-center space-x-4">
            {/* Search Icon (Desktop) */}
            <button
              className="hidden md:flex text-gray-700 dark:text-gray-300 hover:text-indigo-500 transition"
              onClick={() => setShowSearch(!showSearch)}
            >
              <Search size={22} />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 dark:text-gray-300"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>

        {/* Search Bar (Desktop Dropdown) */}
        {showSearch && (
          <div className="absolute top-full inset-x-0 bg-white dark:bg-gray-900 shadow-md p-4 animate-fadeIn">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        )}
      </nav>

      {/* -------- SIDEBAR (MOBILE) -------- */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 z-50 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header Section */}
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <h2 className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
            Portfolio
          </h2>
          <button
            className="text-gray-700 dark:text-gray-300"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={28} />
          </button>
        </div>

        {/* Search Bar (Mobile) */}
        <div className="p-4">
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2">
            <Search size={20} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 flex-1 bg-transparent outline-none text-gray-700 dark:text-gray-200"
            />
          </div>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col space-y-6 px-6 mt-4">
          {navLinks.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 text-lg font-medium transition ${
                  isActive
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-indigo-500"
                }`
              }
              onClick={() => setSidebarOpen(false)}
            >
              {link.icon}
              <span>{link.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;

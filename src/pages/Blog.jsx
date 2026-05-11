import React, { useState, useEffect } from "react";
import { Heart, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SplashCursor from "../components/SplashCursor";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const blogPosts = [
  {
    id: 1,
    title: "Optimizing React Applications: Beyond the Basics",
    category: "Performance",
    excerpt: "Discover advanced techniques for reducing re-renders and improving frontend performance in large-scale React apps.",
    date: "May 10, 2026",
    content: "When building complex React applications, performance can quickly degrade if you aren't careful with state management and component rendering.\n\nOne of the most common pitfalls is unnecessary re-renders. By strategically utilizing useMemo, useCallback, and React.memo, you can prevent expensive calculations and deep component trees from updating when their inputs haven't changed.\n\nHowever, the real game-changer often lies in architectural decisions—like moving state down closer to where it's actually used, or utilizing context and atomic state management libraries like Zustand or Jotai to avoid prop drilling and widespread render cycles."
  },
  {
    id: 2,
    title: "Why MERN & MySQL is a Powerful Full-Stack Combination",
    category: "Architecture",
    excerpt: "Exploring the hybrid approach of using React, Node.js, and relational databases for scalable applications.",
    date: "April 22, 2026",
    content: "The MERN stack (MongoDB, Express, React, Node.js) has been a staple for rapid development. But what happens when your data is highly structured and requires complex transactions?\n\nIntegrating a relational database like MySQL into a Node.js/Express backend provides the best of both worlds. You get the vast ecosystem and non-blocking I/O of Node.js, paired with the ACID compliance, strict schemas, and powerful JOIN operations of SQL.\n\nTools like Prisma or Sequelize make interacting with MySQL in a Node environment seamless, allowing you to build highly reliable fintech, e-commerce, and enterprise applications without sacrificing developer velocity."
  },
  {
    id: 3,
    title: "Crafting Dynamic UIs with Tailwind CSS and Framer Motion",
    category: "Design",
    excerpt: "How to combine utility-first CSS with spring physics for fluid, delightful user experiences.",
    date: "March 15, 2026",
    content: "In modern web design, static pages are no longer enough. Users expect interfaces that feel alive and responsive to their actions.\n\nTailwind CSS makes it incredibly easy to build responsive, beautiful layouts rapidly. But when you pair it with Framer Motion, you unlock the ability to orchestrate complex, physics-based animations with just a few lines of code.\n\nFrom subtle hover states to staggered list entries and seamless page transitions, this combination empowers developers to build premium user experiences that rival native applications—all while maintaining clean, maintainable code."
  },
];

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState({});
  const [activeBlog, setActiveBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${SERVER_URL}/api/blog`);
        const data = await res.json();
        
        if (data && data.length > 0) {
          setBlogs(data);
          const initLikes = {};
          const initComments = {};
          data.forEach(b => {
            initLikes[b.id] = b.likes || 0;
            initComments[b.id] = b.comments ? b.comments.map(c => c.text) : [];
          });
          setLikes(initLikes);
          setComments(initComments);
        } else {
          // Fallback to static if empty DB
          setBlogs(blogPosts);
        }
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
        // Fallback to static if network error
        setBlogs(blogPosts);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const toggleLike = async (id) => {
    // Optimistic UI Update
    setLikes((prev) => ({
      ...prev,
      [id]: prev[id] ? prev[id] + 1 : 1,
    }));

    // If ID is a DB ID (string), update backend
    if (typeof id === "string") {
      try {
        await fetch(`http://localhost:5000/api/blog/${id}/like`, { method: "PUT" });
      } catch (err) {
        console.error("Error liking post:", err);
      }
    }
  };

  const handleCommentChange = (id, text) => {
    setNewComment((prev) => ({
      ...prev,
      [id]: text,
    }));
  };

  const addComment = async (id) => {
    if (!newComment[id]) return;
    const text = newComment[id];

    // Optimistic UI Update
    setComments((prev) => ({
      ...prev,
      [id]: [...(prev[id] || []), text],
    }));
    setNewComment((prev) => ({ ...prev, [id]: "" }));

    // If ID is a DB ID (string), update backend
    if (typeof id === "string") {
      try {
        await fetch(`http://localhost:5000/api/blog/${id}/comment`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user: "Anonymous", text })
        });
      } catch (err) {
        console.error("Error posting comment:", err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white px-6 py-12 relative">
      <SplashCursor />
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-10 py-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        📝 Insights & Articles
      </h1>

      {/* Blog Grid */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              className="flex flex-col h-full p-6 rounded-2xl bg-white/5 backdrop-blur-lg shadow-lg border border-cyan-500/30 hover:border-cyan-400/60 hover:-translate-y-2 transition-all cursor-pointer group"
              onClick={() => setActiveBlog(blog)}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">{blog.title}</h2>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-semibold rounded-full uppercase tracking-wider">{blog.category}</span>
                <p className="text-sm opacity-70">{blog.date}</p>
              </div>
              <p className="mb-6 text-gray-300 flex-grow">{blog.excerpt}</p>
              <span className="text-cyan-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">Read More <span className="text-lg">→</span></span>
            </motion.div>
          ))}
        </div>
      )}

      {/* Blog Modal */}
      <AnimatePresence>
        {activeBlog && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4 py-8 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 border border-cyan-500/40 rounded-3xl shadow-2xl max-w-3xl w-full p-8 md:p-10 relative my-auto"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 text-gray-400 hover:text-cyan-400 transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
                onClick={() => setActiveBlog(null)}
              >
                <X size={24} />
              </button>

              {/* Blog Content */}
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white pr-10">
                {activeBlog.title}
              </h2>
              <div className="flex items-center gap-3 mb-8 border-b border-gray-800 pb-6">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm font-semibold rounded-full uppercase tracking-wider">{activeBlog.category}</span>
                <p className="text-sm text-gray-400">{activeBlog.date}</p>
              </div>
              <div className="mb-10 text-gray-300 text-lg space-y-5 leading-relaxed">
                {activeBlog.content.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* Interactive Section */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                {/* Like Section */}
                <motion.div
                  className="flex items-center gap-3 cursor-pointer mb-6 w-fit"
                  onClick={() => toggleLike(activeBlog.id)}
                  whileTap={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className={`p-3 rounded-full transition-colors duration-300 ${likes[activeBlog.id] ? 'bg-red-500/20' : 'bg-gray-800 hover:bg-gray-700'}`}>
                    <Heart
                      className={`w-6 h-6 transition-transform duration-300 ${
                        likes[activeBlog.id]
                          ? "text-red-500 scale-110 fill-red-500"
                          : "text-gray-400"
                      }`}
                    />
                  </div>
                  <span className="text-lg font-medium text-gray-200">{likes[activeBlog.id] || 0} Likes</span>
                </motion.div>

                {/* Comments */}
                <div>
                  <h3 className="font-semibold text-lg mb-4 text-cyan-100 border-b border-gray-700 pb-2">Discussion</h3>
                  <div className="space-y-3 max-h-60 overflow-y-auto pr-2 mb-4 custom-scrollbar">
                    {(comments[activeBlog.id] || []).length === 0 ? (
                      <p className="text-gray-500 italic text-sm">No comments yet. Be the first to start the discussion!</p>
                    ) : (
                      (comments[activeBlog.id] || []).map((comment, idx) => (
                        <div key={idx} className="bg-black/40 px-4 py-3 rounded-xl border border-white/5">
                          <p className="text-gray-200">{comment}</p>
                        </div>
                      ))
                    )}
                  </div>

                  <div className="flex mt-4 gap-3">
                    <input
                      type="text"
                      placeholder="Share your thoughts..."
                      className="flex-1 px-4 py-3 rounded-xl bg-black/60 border border-gray-700 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      value={newComment[activeBlog.id] || ""}
                      onChange={(e) =>
                        handleCommentChange(activeBlog.id, e.target.value)
                      }
                      onKeyDown={(e) => e.key === 'Enter' && addComment(activeBlog.id)}
                    />
                    <button
                      className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 rounded-xl text-white font-bold shadow-lg transition-all active:scale-95"
                      onClick={() => addComment(activeBlog.id)}
                    >
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blogs;

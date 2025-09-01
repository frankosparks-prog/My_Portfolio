import React, { useState } from "react";
import { Heart, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SplashCursor from "../components/SplashCursor";

const blogPosts = [
  {
    id: 1,
    title: "Building a Legendary Portfolio with MERN",
    excerpt: "A deep dive into how I built this stunning portfolio with MERN & Tailwind.",
    date: "Aug 28, 2025",
    content:
      "This is where you can expand the blog content. Talk about MERN stack architecture, challenges, and how you made it legendary.",
  },
  {
    id: 2,
    title: "Why Tailwind CSS Makes You a Design magic",
    excerpt: "Tailwind isn’t just utility classes, it’s an art tool for developers.",
    date: "Aug 15, 2025",
    content:
      "Expand into Tailwind CSS benefits, how utility-first helps design, and your favorite tips.",
  },
  {
    id: 3,
    title: "MERN Stack: The Real Fullstack Power",
    excerpt: "MongoDB, Express, React, and Node — the dream team of modern dev.",
    date: "July 30, 2025",
    content:
      "Here’s why the MERN stack stands out compared to others. Scalable, fast, and developer-friendly.",
  },
];

const Blogs = () => {
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState({});
  const [activeBlog, setActiveBlog] = useState(null);

  const toggleLike = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: prev[id] ? prev[id] + 1 : 1,
    }));
  };

  const handleCommentChange = (id, text) => {
    setNewComment((prev) => ({
      ...prev,
      [id]: text,
    }));
  };

  const addComment = (id) => {
    if (!newComment[id]) return;
    setComments((prev) => ({
      ...prev,
      [id]: [...(prev[id] || []), newComment[id]],
    }));
    setNewComment((prev) => ({ ...prev, [id]: "" }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white px-6 py-12 relative">
      <SplashCursor />
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-10 py-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        📝 My Legendary Blogs
      </h1>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((blog, index) => (
          <motion.div
            key={blog.id}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg shadow-lg border border-cyan-500/30 hover:border-cyan-400/60 transition cursor-pointer"
            onClick={() => setActiveBlog(blog)}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
            <p className="text-sm opacity-70 mb-3">{blog.date}</p>
            <p className="mb-4">{blog.excerpt}</p>
            <span className="text-cyan-400 font-semibold">Read More →</span>
          </motion.div>
        ))}
      </div>

      {/* Blog Modal */}
      <AnimatePresence>
        {activeBlog && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-xl border border-cyan-500/40 rounded-2xl shadow-lg max-w-2xl w-full p-8 relative"
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-white hover:text-cyan-400"
                onClick={() => setActiveBlog(null)}
              >
                <X size={24} />
              </button>

              {/* Blog Content */}
              <h2 className="text-3xl font-bold mb-2 text-cyan-300">
                {activeBlog.title}
              </h2>
              <p className="text-sm opacity-70 mb-4">{activeBlog.date}</p>
              <p className="mb-6 text-gray-200">{activeBlog.content}</p>

              {/* Like Section */}
              <motion.div
                className="flex items-center gap-2 cursor-pointer mb-6"
                onClick={() => toggleLike(activeBlog.id)}
                whileTap={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Heart
                  className={`w-7 h-7 transition-transform duration-300 ${
                    likes[activeBlog.id]
                      ? "text-red-500 scale-125 fill-red-500"
                      : ""
                  }`}
                />
                <span>{likes[activeBlog.id] || 0}</span>
              </motion.div>

              {/* Comments */}
              <div>
                <h3 className="font-semibold text-lg mb-2">Comments</h3>
                <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
                  {(comments[activeBlog.id] || []).map((comment, idx) => (
                    <p
                      key={idx}
                      className="bg-black/40 px-3 py-2 rounded-lg text-sm"
                    >
                      {comment}
                    </p>
                  ))}
                </div>

                <div className="flex mt-3 gap-2">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    className="flex-1 px-3 py-2 rounded-lg bg-black/40 text-white focus:outline-none"
                    value={newComment[activeBlog.id] || ""}
                    onChange={(e) =>
                      handleCommentChange(activeBlog.id, e.target.value)
                    }
                  />
                  <button
                    className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-sm font-semibold"
                    onClick={() => addComment(activeBlog.id)}
                  >
                    Post
                  </button>
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

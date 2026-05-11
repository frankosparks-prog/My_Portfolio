const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
const parser = require("../middleware/cloudinaryUpload");

// POST: Create a new blog
router.post("/", parser.single("image"), async (req, res) => {
  try {
    const { title, category, excerpt, content } = req.body;
    
    const blog = new Blog({
      title,
      category,
      excerpt,
      content,
      image: req.file ? req.file.path : undefined,
    });

    const saved = await blog.save();
    res.status(201).json({ message: "Blog created successfully!", blog: saved });
  } catch (err) {
    console.error("Blog creation error:", err.message);
    res.status(400).json({ error: err.message });
  }
});

// GET: Fetch all blogs
router.get("/", async (req, res) => {
  try {
    // Fetch and format to match frontend expectation (id instead of _id)
    const blogs = await Blog.find().sort({ createdAt: -1 });
    
    const formattedBlogs = blogs.map(blog => ({
      id: blog._id,
      title: blog.title,
      category: blog.category,
      excerpt: blog.excerpt,
      content: blog.content,
      date: blog.createdAt ? blog.createdAt.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }) : "",
      likes: blog.likes,
      comments: blog.comments
    }));

    res.status(200).json(formattedBlogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET: Single Blog
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: "Not found" });
    
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE: Edit a blog post
router.put("/:id", parser.single("image"), async (req, res) => {
  try {
    const { title, category, excerpt, content } = req.body;
    const imageUrl = req.file?.path;

    const updatedFields = { title, category, excerpt, content };
    if (imageUrl) updatedFields.image = imageUrl;

    const updated = await Blog.findByIdAndUpdate(
      req.params.id,
      updatedFields,
      { new: true }
    );

    res.status(200).json(updated);
  } catch (err) {
    console.error("Update error:", err.message);
    res.status(400).json({ error: err.message });
  }
});

// DELETE: Remove a blog post
router.delete("/:id", async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT: Like a blog post
router.put("/:id/like", async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } }, 
      { new: true }
    );
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST: Add a comment to a blog post
router.post("/:id/comment", async (req, res) => {
  try {
    const { user, text } = req.body;
    
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $push: { comments: { user: user || "Anonymous", text } } },
      { new: true }
    );
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
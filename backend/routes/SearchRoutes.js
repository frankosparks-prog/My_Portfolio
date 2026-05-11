const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

// Static representation of projects for global search
const projects = [
  { title: "ERP System", category: "Full-Stack", url: "/projects", description: "Enterprise Resource Planning system for a water service company" },
  { title: "Portfolio Website", category: "Frontend", url: "/projects", description: "My personal professional portfolio" },
  { title: "Church Website", category: "Full-Stack", url: "/projects", description: "A church's informative website" },
  { title: "Smart Visitor Management System", category: "Full-Stack", url: "/projects", description: "A visitor management system" },
  { title: "Collaborative Projects", category: "Management", url: "/projects", description: "Team-based software development" },
  { title: "Stock and Sales Management System", category: "Management", url: "/projects", description: "Manage stock and sales for retail businesses" },
  { title: "Complaints Management System", category: "Management", url: "/projects", description: "Manages complaints for public institutions" },
  { title: "Online Store Application", category: "Full-Stack", url: "/projects", description: "E-Commerce platform" },
  { title: "NutriPay", category: "Full-Stack", url: "/projects", description: "Food ordering and delivery system" },
  { title: "Jadi Craft", category: "Full-Stack", url: "/projects", description: "AI Powered platform reconnecting communities" }
];

const pages = [
  { title: "Home", url: "/", type: "page", description: "Go to the homepage" },
  { title: "About Frank", url: "/about", type: "page", description: "Learn more about Frank Maina" },
  { title: "Contact", url: "/contact", type: "page", description: "Get in touch with me" },
  { title: "All Projects", url: "/projects", type: "page", description: "View all my work and projects" },
  { title: "Blog & Insights", url: "/blogs", type: "page", description: "Read my latest articles" },
  { title: "FAQs", url: "/faqs", type: "page", description: "Frequently asked questions" }
];

router.get("/", async (req, res) => {
  try {
    const query = req.query.q || "";
    if (!query.trim()) {
      return res.status(200).json([]);
    }

    const regex = new RegExp(query, "i");
    const results = [];

    // 1. Search Blogs
    try {
      const blogs = await Blog.find({
        $or: [{ title: regex }, { category: regex }, { excerpt: regex }]
      }).limit(5);

      blogs.forEach(b => {
        results.push({
          id: b._id.toString(),
          title: b.title,
          type: "blog",
          url: "/blogs", 
          description: b.excerpt || "Read more about this topic"
        });
      });
    } catch(dbErr) {
      console.log("DB Blog search skipped (maybe db offline)");
    }

    // 2. Search Projects
    projects.forEach(p => {
      if (regex.test(p.title) || regex.test(p.category) || regex.test(p.description)) {
        results.push({
          id: p.title,
          title: p.title,
          type: "project",
          url: p.url,
          description: p.description
        });
      }
    });

    // 3. Search Pages
    pages.forEach(p => {
      if (regex.test(p.title) || regex.test(p.description)) {
        results.push({
          id: p.title,
          title: p.title,
          type: "page",
          url: p.url,
          description: p.description
        });
      }
    });

    res.status(200).json(results);
  } catch (err) {
    console.error("Search Error:", err.message);
    res.status(500).json({ error: "Failed to perform search" });
  }
});

module.exports = router;

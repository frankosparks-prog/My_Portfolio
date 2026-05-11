const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  user: { type: String, default: "Anonymous" },
  text: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String },
  likes: { type: Number, default: 0 },
  comments: [CommentSchema]
}, { timestamps: true });

// Virtual for formatted date to match frontend expectation e.g. "May 10, 2026"
BlogSchema.virtual('date').get(function() {
  if (!this.createdAt) return "";
  return this.createdAt.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
});
BlogSchema.set('toJSON', { virtuals: true });
BlogSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model("Blog", BlogSchema);

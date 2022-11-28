const Blog = require("../models/blogModel");

const asyncHandler = require("express-async-handler");
const { default: mongoose } = require("mongoose");

const createBlog = asyncHandler(async (req, res) => {
  const { category, title, description, image, date, author } = req.body;
  const data = mongoose.Types.ObjectId();
  if (!title || !category || !description || !image || !author || !date) {
    res.status(400).json({ message: "Please fill the form carefully" });

    return;
  }
  console.log(req.body);
  const blog = await Blog.create({
    category,
    title,
    description,
    image,
    date,
    author,
  });

  if (blog) {
    const eventsData = await blog.save();
    res.status(201).json(eventsData);
  } else {
    res.status(400).json({ message: "Error in creating blog" });
  }
});

const getBlog = asyncHandler(async (req, res) => {
  const list = await Blog.find({})
    .sort({ createdAt: -1 })
    .populate("date")
    .exec();

  if (list) {
    res.status(200).json({ list });
  } else {
    res.status(400).json({ message: "Unable to fetch the data" });
  }
});

const deleteBlog = asyncHandler(async (req, res) => {
  const list = await Blog.findOneAndDelete({ _id: req.params.id });
  if (list) {
    res.status(200).json({ message: "Blog is deleted" });
  } else {
    res.status(400).json({ message: "Error in deleteing" });
  }
});

module.exports = {
  createBlog,
  getBlog,
  deleteBlog,
};

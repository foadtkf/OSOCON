const Category = require("../models/categoryModel");

const asyncHandler = require("express-async-handler");

const createCategory = asyncHandler(async (req, res) => {
  const { category } = req.body;
  const data = req.body;
  console.log(category);

  if (!category) {
    res.status(400).json({ message: "Please enter the category" });
    return;
  }

  const categoryCreate = await Category.create({ category: req.body.category });

  if (categoryCreate) {
    res.status(201).json(categoryCreate);
  } else {
    res.status(400).json({ message: "Error in creating Event Category" });
  }
});

const getCategory = asyncHandler(async (req, res) => {
  const allCategory = await Category.find({}).sort({ createdAt: -1 }).exec();

  if (allCategory) {
    res.status(200).json({ allCategory });
  } else {
    res.status(400).json({ message: "Error in fetching Event category" });
  }
});

const deleteCategory = asyncHandler(async (req, res) => {
  const list = await Category.findOneAndDelete({ _id: req.params.id });
  if (list) {
    res.status(200).json({ message: "Category is deleted" });
  } else {
    res.status(400).json({ message: "Error in deleting" });
  }
});

module.exports = {
  createCategory,
  getCategory,
  deleteCategory,
};

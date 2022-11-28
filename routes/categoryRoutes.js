const express = require("express");
const router = express.Router();
const {
  createCategory,
  getCategory,
  deleteCategory,
} = require("../controllers/categoryController");

router.post("/", createCategory);
router.get("/category-list", getCategory);
router.delete("/category-list/:id", deleteCategory);
module.exports = router;

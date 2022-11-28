const express = require("express");
const router = express.Router();
const {
  createBlog,
  getBlog,
  deleteBlog,
} = require("../controllers/blogController");

router.post("/", createBlog);
router.get("/blog-list", getBlog);
router.delete("/blog-list/:id", deleteBlog);
module.exports = router;

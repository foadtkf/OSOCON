const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
connectDB();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cors());
app.use("/api/category", require("./routes/categoryRoutes"));
app.use("/api/blog", require("./routes/blogRoutes"));
// app.get("/api/category", (req, res) => {
//   res.send("hello");
// });
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
app.get("/", (req, res) => {
  res.send("server is running successfully");
});

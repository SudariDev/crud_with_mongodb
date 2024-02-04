const express = require("express");
const mongoose = require("mongoose");
const app = express();
const blogRoutes = require("./routes/BlogRoutes");

// middleware
app.use(express.json());

// configure mongoose
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/blog")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error(err);
  });

// use the blog routes
app.use("/blogs", blogRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

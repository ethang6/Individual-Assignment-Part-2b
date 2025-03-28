const express = require("express");
const app = express();
const path = require("path");

// Set view engine to EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));

// Home Route
app.get("/", (req, res) => {
  res.render("home");
});

// Recipe Routes
app.get("/recipe1", (req, res) => {
  res.render("recipe1");
});

app.get("/recipe2", (req, res) => {
  res.render("recipe2");
});

app.get("/recipe3", (req, res) => {
  res.render("recipe3");
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

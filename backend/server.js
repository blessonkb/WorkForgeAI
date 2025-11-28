const express = require("express");
const hbs = require('hbs');
const path = require("path");

const app = express();
const PORT = 3000;

// Set Handlebars as view engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
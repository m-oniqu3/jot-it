const path = require("path");
const express = require("express");
const { engine } = require("express-handlebars");
const router = require("./routes/jotRoutes");

const app = express();

app.engine("handlebars", engine());
app.engine(
  "handlebars",
  engine({
    partialsDir: path.join(__dirname, "views/partials"),
    // Other handlebars configuration options...
  })
);
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.static("public"));

app.use(router);

module.exports = app;

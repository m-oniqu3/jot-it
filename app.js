const path = require("path");
const express = require("express");
const { engine } = require("express-handlebars");
const router = require("./routes/jotRoutes");

const app = express();

app.engine("handlebars", engine());
app.engine(
  "hbs",
  engine({ partialsDir: path.join(__dirname, "views/partials") })
);
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.json());
app.use(express.static("public"));

app.use(router);

module.exports = app;

const express = require("express");
const path = require("path");
//phai them {engine}
const { engine } = require("express-handlebars");
var morgan = require("morgan");

// const { extname } = require("path/posix");

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("combined"));
//đổi file .handlebars thành .hbs

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(3000);

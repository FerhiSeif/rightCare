const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const compression = require("compression");

const app = express();

const routes = require("./server/routes");
const port = process.env.PORT || 9000;

app.use(express.static(path.join(__dirname, "build"), { index: false }));
app.use(express.static("server/public", { index: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(compression());
app.set("views", "server/views");
app.set("view engine", "ejs");

// app routes
app.use(routes);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

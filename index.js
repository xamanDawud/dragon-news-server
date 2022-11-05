const express = require("express");
const app = express();
const cors = require("cors");
const port = 5001;

app.use(cors());

const categories = require("./data/categories.json");

app.get("/", (req, res) => {
  res.send("News api is Runninggggg");
});

app.get("/news-category", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log("Port is running on ", port);
});

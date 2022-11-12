const express = require("express");
const app = express();
const cors = require("cors");
const port = 5001;

app.use(cors());

const categories = require("./data/categories.json");
const news = require("./data/news.json");

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/", (req, res) => {
  res.send("News api is Runninggggg");
});
app.get("/news/:id", (req, res) => {
  let id = req.params.id;
  let selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});

app.get("/category/:id", (req, res) => {
  let id = req.params.id;
  if (id === "08") {
    res.send(news);
  } else {
    let catagoryNews = news.filter((n) => n.category_id === id);
    res.send(catagoryNews);
  }
});

app.get("/news-category", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log("Port is running on ", port);
});

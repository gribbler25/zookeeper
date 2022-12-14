const fs = require("fs");
const path = require("path");
const express = require("express");
const { animals } = require("./data/animals");

const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use("/api", apiRoutes); // .use is middleware
app.use("/", htmlRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/api/animals", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/animals.html"));
});

app.get("/zookeepers", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/zookeepers.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

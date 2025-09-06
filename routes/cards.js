const fs = require("fs");
const path = require("path");
const express = require("express");

const router = express.router();

router.get("/", (req, res) => {
  const filePath = path.join(__dirname, "./data/cards.json");
  const data = fs.readFileSync(filePath, "utf8");
  const cards = JSON.parse(data);
  res.json(cards);
});

module.exports = router;

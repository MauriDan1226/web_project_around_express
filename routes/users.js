const fs = require("fs");
const path = require("path");
const express = require("express");

const router = express.router();

router.get("/", (req, res) => {
  const filePath = path.join(__dirname, "./data/users.json");
  const data = fs.readFileSync(filePath, "utf8");
  const users = JSON.parse(data);
  res.json(users);
});

//  RUTA: Usuario por ID --------

router.get("/:id", (req, res) => {
  const filePath = path.join(__dirname, "./data/users.json");
  const data = fs.readFileSync(filePath, "utf8");
  const users = JSON.parse(data);

  const user = users.find((u) => u.id === req.params.id);

  if (!user) {
    return res.status(404).json({ message: "ID de usuario no encontrado" });
  }

  res.json(user);
});

module.exports = router;

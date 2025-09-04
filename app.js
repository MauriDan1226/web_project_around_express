const express = require("express");
const app = express();
const { PORT = 3000 } = process.env;

const fs = require("fs");
const path = require("path");

// RUTA: Lista de cartas --------

app.use(express.json());
app.get("/cards", (req, res) => {
  const filePath = path.join(__dirname, "./data/cards.json");
  const data = fs.readFileSync(filePath, "utf8");
  const cards = JSON.parse(data);
  res.json(cards);
});

// RUTA: Lista de usuarios --------

app.get("/users", (req, res) => {
  const filePath = path.join(__dirname, "./data/users.json");
  const data = fs.readFileSync(filePath, "utf8");
  const users = JSON.parse(data);
  res.json(users);
});

//  RUTA: Usuario por ID --------

app.get("/users/:id", (req, res) => {
  const filePath = path.join(__dirname, "./data/users.json");
  const data = fs.readFileSync(filePath, "utf8");
  const users = JSON.parse(data);

  const user = users.find((u) => u.id === req.params.id);

  if (!user) {
    return res.status(404).json({ message: "ID de usuario no encontrado" });
  }

  res.json(user);
});

//  MANEJO DE RUTAS NO EXISTENTES --------

app.use((req, res) => {
  res.status(404).json({ message: "Recurso solicitado no encontrado" });
});

app.get("/", (req, res) => {
  res.send("Servidor Express funcionando en el puerto 3000");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});

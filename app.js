const express = require("express");
const app = express();
const { PORT = 3000 } = process.env;
const fs = require("fs");
const path = require("path");
const users = require("./routers/users.js");
const cards = require("./routers/cards.js");
const { use } = require("react");

app.get("/", (req, res) => {
  res.send("Servidor Express funcionando en el puerto 3000");
});

// RUTA: Lista de cartas --------

app.use(express.json());
app.use("/cards", cards);

// RUTA: Lista de usuarios --------

app.use("/users", users);

//  MANEJO DE RUTAS NO EXISTENTES --------

app.use((req, res) => {
  res.status(404).json({ message: "Recurso solicitado no encontrado" });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});

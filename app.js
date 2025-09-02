const express = require("express");
const app = express();
const { PORT = 3000 } = process.env;

app.get("/", (req, res) => {
  res.send("Servidor Express funcionando en el puerto 3000");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}...`);
});

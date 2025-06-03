const express = require("express");
const mongoose = require("mongoose");
const usersRouter = require("./routes/users");
const cardsRouter = require("./routes/cards");
const handleError = require("./middlewares/errorHandler");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: "68391d458ba2bce39b032299",
  };
  next();
});

app.use("/users", usersRouter);
app.use("/cards", cardsRouter);

app.use((req, res) => {
  res.status(404).send({ message: "Recurso solicitado no encontrado" });
});

app.use(handleError);

mongoose
  .connect("mongodb://127.0.0.1:27017/aroundb")
  .then(() => {
    console.log("✅ Conectado a MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Error al conectar a MongoDB:", err);
  });

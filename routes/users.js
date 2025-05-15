const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();

router.get("/", (req, res) => {
  const filePath = path.join(__dirname, "../data/users.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err)
      return res.status(500).send({ message: "Error al leer los usuarios" });
    return res.send(JSON.parse(data));
  });
});

router.get("/:id", (req, res) => {
  const userId = req.params.id;
  const filePath = path.join(__dirname, "../data/users.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err)
      return res.status(500).send({ message: "Error al leer los usuarios" });

    const users = JSON.parse(data);
    const user = users.find(
      (u) => String(u._id).trim() === String(userId).trim()
    );

    if (!user)
      return res.status(404).send({ message: "ID de usuario no encontrado" });

    return res.send(user);
  });
});

module.exports = router;

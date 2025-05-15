const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();

router.get("/", (req, res) => {
  const filePath = path.join(__dirname, "../data/cards.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err)
      return res.status(500).send({ message: "Error al leer las tarjetas" });
    return res.send(JSON.parse(data));
  });
});

module.exports = router;

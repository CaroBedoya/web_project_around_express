const express = require("express");
const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require("../controllers/cards");

const router = express.Router();

// Obtener todas las tarjetas
router.get("/", getCards);

// Crear una tarjeta nueva
router.post("/", createCard);

// Eliminar una tarjeta por ID
router.delete("/:cardId", deleteCard);

// Dar like a una tarjeta
router.put("/:cardId/likes", likeCard);

// Quitar like de una tarjeta
router.delete("/:cardId/likes", dislikeCard);

module.exports = router;

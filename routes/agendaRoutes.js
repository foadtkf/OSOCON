const express = require("express");
const router = express.Router();
const {
  createAgenda,
  getAgenda,
  deleteAgenda,
} = require("../controllers/agendaController");

router.post("/", createAgenda);
router.get("/agenda-list", getAgenda);
router.delete("/agenda-list/:id", deleteAgenda);
module.exports = router;

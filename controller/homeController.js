const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home/index");
});

router.get("/confirmacao", (req, res) => {
  res.render("home/contato", { listas: [] });
});

router.get("/login", (req, res) => {
  res.render("home/login");
});

router.post("/logar", (req, res) => {
  res.redirect("/");
});

module.exports = router;

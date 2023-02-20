const express = require("express");
const router = express.Router();
const Lista = require("../model/Lista");
const User = require("../model/User");

router.get("/", (req, res) => {
  res.render("home/index");
});
router.get("/confirmacao", (req, res) => {
  Lista.findAll().then((listas) => {
    res.render("home/contato", { listas: listas });
  });
});
router.get("/login", (req, res) => {
  res.render("home/login");
});
router.post("/logar", (req, res) => {
  var usuario = req.body.usuario;
  var senha = req.body.senha;
  if (usuario != undefined && senha != undefined) {
    User.findOne({ 
      where: { usuario: usuario, senha: senha } 
                }).then((user) => {
                  res.redirect("/admin/listas");
                }).catch((error) => {console.log(`Erro ao logar: ${error}`);
              });
            } else {res.redirect("/login");
  };
  
});

module.exports = router;

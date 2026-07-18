const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

/*Static*/
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/*Routers*/
const homeController = require("./controller/homeController");
app.use("/", homeController);

app.listen(port, () => {
  console.log(`Servidor WEB rodando na porta: ${port}`);
});

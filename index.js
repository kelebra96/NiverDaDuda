const express = require("express");
const app = express();
const port = 80;



/*DataBase*/
const connection = require("./database/mysql")
connection.authenticate().then(()=>{
  console.log("Conectado ao MySQL")
}).catch((error)=>{
  console.log("Erro ao conectar ao MySQL")
})
/*APIs*/
const minhaAPI = require("./public/js/api")
minhaAPI()
/*Routers */
const homeController = require("./controller/homeController");
const userController = require("./controller/userController")
/*Models */
const Lista = require("./model/Lista")
const User = require("./model/User")
/*Static*/
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/*Routers*/
app.use("/", homeController)
app.use("/", userController)

app.listen(port, () => {
  console.log(`Servidor WEB rodando na port:${port}`);
});

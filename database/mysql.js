'use strict'
const Sequelize = require("sequelize")
const  connection = new Sequelize('duda','root','Ro04041932..',{
    host: 'localhost',
    dialect: 'mysql'
})
module.exports= connection
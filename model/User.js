const Sequelize = require('sequelize')
const connection = require("../database/mysql")


const User = connection.define('users',{
    usuario:{
        type: Sequelize.STRING,
        allowNull: false
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

User.sync({force: false}).then(()=>{
    console.log('Tabela users criada com sucesso!')
}).catch((err)=>{
    console.log('Erro ao criar tabela users!')
})
module.exports = User;
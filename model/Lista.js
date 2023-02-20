const Sequelize = require('sequelize')
const connection = require("../database/mysql")


const Lista = connection.define('lista',{
    data:{
        type: Sequelize.STRING,
        allowNull: false
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone:{
        type: Sequelize.STRING,
        allowNull: false
    },
    mensagem:{
        type: Sequelize.TEXT,
        allowNull: true
    }
})

Lista.sync({force: false}).then(()=>{
    console.log('Tabela lista criada com sucesso!')
}).catch((err)=>{
    console.log('Erro ao criar tabela aprovações!')
})
module.exports = Lista;
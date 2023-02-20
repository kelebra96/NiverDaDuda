const express = require("express")
const router = express.Router()
const User = require("../model/User")

router.get('/admin/users',(req,res)=>{
    User.findAll().then((users)=>{
        res.render("admin/users/index",{users: users})
    }).catch((error)=>{
        console.log(`Erro ao listar usuários: ${error}`)
    })
})
router.get('/admin/users/create',(req,res)=>{
    res.render("admin/users/create")
})
router.post('/admin/users/save',(req,res)=>{
    var name = req.body.usuario
    var email = req.body.email
    var senha = req.body.senha  

    if(name != undefined && email != undefined && senha != undefined){
        User.create({
            usuario: name,
            email: email,
            senha: senha
        }).then(()=>{
            res.redirect("/admin/users")
        }).catch((error)=>{
            console.log(`Erro ao criar usuário: ${error}`)
        })
    }else{
        res.redirect("/admin/users/create")
    }

        
})


module.exports = router
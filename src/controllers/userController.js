const path = require('path');
const db = require('../database/models')
const bcryptjs = require('bcryptjs');

const userController = {

    formRegister: (req, res) => {
        db.gerencias.findAll()
        .then(function(gerencias){
            res.render("register", {gerencias})
            console.log(gerencias);
        })
    },
    register: (req, res) => {
        try {
            db.usuarios.create({
                ...req.body,
                contrasenia: bcryptjs.hashSync(req.body.password, 10),
                rolUsuario: 2
            })
            res.status(200).redirect('/users/login')
        } catch (error) {
            res.status(400).send('Usuario no creado')
        }
    },
    formLogin: (req, res) => {
        res.render("login");
    }

};

module.exports = userController;
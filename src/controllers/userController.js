const path = require('path');
const db = require('../database/models')

const userController = {

    formRegister: (req, res) => {
        db.Gerencia.findAll()
        .then((Gerencia) => {
            res.render("register", {Gerencia})
        })
    },
    register: (req, res) => {
       
        return console.log(hola);
    },
    formLogin: (req, res) => {
        res.render("login");
    }

};

module.exports = userController;
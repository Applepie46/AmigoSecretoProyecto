const path = require('path');
const db = require('../database/models')

const userController = {

    formRegister: (req, res) => {
        db.gerencias.findAll()
        .then(function(gerencias){
            res.render("register", {gerencias})
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
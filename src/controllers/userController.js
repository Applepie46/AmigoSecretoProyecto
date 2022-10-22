const path = require('path');

const userController = {

    formRegister: (req, res) => {
        res.render("register");
    },
    register: (req, res) => {
        return console.log(hola);
    },
    formLogin: (req, res) => {
        res.render("login");
    }

};

module.exports = userController;
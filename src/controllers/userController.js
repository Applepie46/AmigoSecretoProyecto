const path = require('path');
const db = require('../database/models');
const bcryptjs = require('bcryptjs');

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
    },
    login: (req, res) => {

        console.log(req.body);

        db.Usuario.findOne({
            where : { 
                email : req.body.email
            }
        })
        .then(function (userLog){
            
            if (userLog) {
                let contraseñaCorrecta = bcryptjs.compareSync(req.body.password, userLog.password)
                if (contraseñaCorrecta) {
                    req.session.usuarioLogueado = userLog;

                    return res.redirect('/user/perfil');
                }
            }
            return res.render('login', {
                errors: {
                    email: {
                        msg: 'Usuario no valido'
                    }
                }
            })
        } )
    }

};

module.exports = userController;
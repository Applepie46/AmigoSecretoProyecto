const path = require('path');
const db = require('../database/models');

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
                   
                    if (req.body.remember_user) {
                        res.cookie("userEmail", req.body.email, { maxAge: (1000 * 60) * 60 });
                    }
    
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
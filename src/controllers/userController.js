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
        
            console.log(req.body);
            console.log();
            db.usuarios.create({
                ...req.body,
                contrasnia: req.body.contrasenia,
                rolUsuario: 2
            })
            res.status(200).redirect('/users/login')
        
    },
    formLogin: (req, res) => {
        res.render("login");
    },
    login: (req, res) => {
<<<<<<< HEAD

        console.log(req.body);

=======
        console.log(req.body);
>>>>>>> ad72df1b4e524ceab428be4b63d70f9bbda92571
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
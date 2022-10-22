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
                contrasnia: bcryptjs.compareSync(req.body.password, 10), 
                // MODIFICAR: eliminar usuarios en db para registrar un usuario admin y otro de cliente
                rolUsuario: 2
            })
            res.status(200).redirect('/users/login')
        
    },
    formLogin: (req, res) => {
        res.render("login");
    },
    login: (req, res) => {
        db.usuarios.findOne({ // ERROR: No se estaba llamando bien el modelo es "usuarios" y decia "Usuario"
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
        })
    }

};

module.exports = userController;
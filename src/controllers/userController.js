const path = require('path');
const db = require('../database/models')
const bcryptjs = require('bcryptjs');

const userController = {

    formRegister: (req, res) => {
        db.gerencias.findAll()
        .then(function(gerencias){
            res.render("register", {gerencias})
        })
    },
    register: (req, res) => {
        console.log(req.body);  
        try {
             db.usuarios.create({
                ...req.body,
                contrasenia: bcryptjs.hashSync(req.body.contrasenia, 10), 
                // MODIFICAR: eliminar usuarios en db para registrar un usuario admin y otro de cliente
                rolUsuario: 2
            })
            res.status(200).redirect('/users/login')
        } catch (error) {
            console.log(error);
        }
           
        
    },
    formLogin: (req, res) => {
        res.render("login");
    },
    login: (req, res) => {
        try {
            db.usuarios.findOne({ // ERROR: No se estaba llamando bien el modelo es "usuarios" y decia "Usuario"
                where : { 
                    email : req.body.email
                }
            })
            .then(function (userLog){
                
                if (userLog) {
                    let contraseñaCorrecta = bcryptjs.compareSync(req.body.contrasenia, userLog.contrasenia)
                    if (contraseñaCorrecta) {
                        // req.session.usuarioLogueado = userLog;
    
                        return res.redirect('/users/perfil');
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
        } catch (error) {
            console.log(error);
        }
    }

};

module.exports = userController;
const path = require('path');
const db = require('../database/models')
const bcryptjs = require('bcryptjs');

const userController = {

    formRegister: (req, res) => {
        db.gerencias.findAll()
            .then(function (gerencias) {
                res.render("register", { gerencias })
            })
    },
    register: (req, res) => {
        console.log(req.body);
        db.usuarios.findAll()
            .then(function (usuarios) {
                console.log(usuarios);
                if (usuarios.length > 0) {
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
                } else {
                    try {
                        db.usuarios.create({
                            ...req.body,
                            contrasenia: bcryptjs.hashSync(req.body.contrasenia, 10),
                            // MODIFICAR: eliminar usuarios en db para registrar un usuario admin y otro de cliente
                            rolUsuario: 1
                        })
                        res.status(200).redirect('/users/login')
                    } catch (error) {
                        console.log(error);
                    }
                }
            })



    },
    formLogin: (req, res) => {
        res.render("login");
    },
    login: (req, res) => {
        try {
            db.usuarios.findOne({ // ERROR: No se estaba llamando bien el modelo es "usuarios" y decia "Usuario"
                where: {
                    email: req.body.email
                }
            })
                .then(function (userLog) {

                    if (userLog) {
                        let contraseñaCorrecta = bcryptjs.compareSync(req.body.contrasenia, userLog.contrasenia)
                        if (contraseñaCorrecta) {
                            // req.session.usuarioLogueado = userLog;
                            return res.render('prueba', { userLog });
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
    },
    perfil: (req, res) => {
        let listaUsuarios = db.usuarios.findAll()
        let usuarioEncontrado = db.usuarios.findOne({ where: { id: req.params.id } })
        Promise.all([listaUsuarios, usuarioEncontrado])
            .then(function ([usuarios, usuario]) {
                const aleatorio1 = usuarios[Math.floor(Math.random() * usuarios.length)];
                console.log(aleatorio1);
                return res.render('perfil', { usuario, aleatorio1 });
            })
    }
};

module.exports = userController;
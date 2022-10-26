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
                            req.session.usuarioLogueado = userLog;
                            //return res.render('prueba', { userLog });
                            return res.redirect("/users/perfil")
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
<<<<<<< HEAD
        console.log(req.session);
        console.log("hola");
        let anyEmail = req.session.usuarioLogueado.email
        db.usuarios.findOne({
            where: { email: anyEmail },
        })
        .then(function (usuarios) {
            
            res.render("perfil", {
                usuarios
            })
        })
        /*let listaUsuarios = db.usuarios.findAll()
        let usuarioEncontrado = db.usuarios.findOne({ where: { id: req.params.id } })
        Promise.all([listaUsuarios, usuarioEncontrado])
            .then(function ([usuarios, usuario]) {
                return res.render('perfil', { usuarios, usuario });
            })*/
    },
    logout: (req, res) => {
        req.session.destroy();
        return res.redirect("/");
=======
        let listaUsuarios = db.usuarios.findAll()
        let listaFechas = db.fechas.findAll()
        let usuarioEncontrado = db.usuarios.findOne({ where: { id: req.params.id } })
        Promise.all([listaUsuarios, usuarioEncontrado, listaFechas])
            .then(function ([usuarios, usuario, fechas]) {
                return res.render('perfil', { usuarios, usuario, fechas });
            })
    },
    fecha: (req, res) => {
        console.log(req.body)
        db.fechas.create({
            ...req.body
        })
        res.send('ok')
>>>>>>> 89c4abdd68830d22dc8cb58602fa391c2538c230
    }
};

module.exports = userController;
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authtMiddleware = require("../middlewares/authMiddleware");
const apicache = require('apicache')


const cache = apicache.middleware;



/*------   AQUI RENDERISAMOS LAS VISTAS   ------*/

router.get("/register", guestMiddleware, userController.formRegister);

router.get("/login", guestMiddleware, userController.formLogin);

router.get("/admin", authtMiddleware, userController.admin);

router.get("/perfil", authtMiddleware, userController.perfil);

/*------  RUTA PARA REOMOVER USUARIO DE SESSION  ------*/

router.get("/logout", userController.logout);


/*------ RUTAS DE GUARDADO DE DATOS ------*/

router.post("/register", userController.register)

router.post("/login", userController.login);

router.post("/admin", userController.fecha);

router.post("/perfil", cache('2 minutes'), userController.amigoSecreto);

module.exports = router;
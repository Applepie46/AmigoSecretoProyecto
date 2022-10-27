const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authtMiddleware = require("../middlewares/authMiddleware");


/*------AQUI RENDERISAMOS LAS VISTAS------*/

router.get("/register", guestMiddleware, userController.formRegister);
router.get("/login", guestMiddleware, userController.formLogin);
router.get("/perfil", authtMiddleware, userController.perfil);

/*------RUTA PARA REOMOVER USUARIO DE SESSION------*/

router.get("/logout", userController.logout);


/*------RUTAS DE GUARDADO DE DATOS------*/

router.post("/register", userController.register)

router.post("/login", userController.login);

router.post("/perfil", userController.fecha);

module.exports = router;
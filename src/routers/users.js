const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");


/*------AQUI RENDERISAMOS LAS VISTAS------*/

router.get("/register", userController.formRegister);
router.get("/login", userController.formLogin);
router.get("/perfil/:id", userController.perfil);

/*------PARA ENVIAR A LA DB------*/

router.post("/register", userController.register)

router.post("/login", userController.login);

module.exports = router;
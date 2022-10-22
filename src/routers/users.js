const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/register", userController.formRegister);
router.get("/login", userController.formLogin);

router.get("perfil", (req, res) => {
    res.send("hola");
})

router.post("/login", userController.login);

/*------PARA ENVIAR A LA DB------*/

router.post("/register", userController.register)


module.exports = router;
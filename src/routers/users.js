const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/register", userController.formRegister);
router.get("/login", userController.formLogin);



module.exports = router;
const express = require('express');
const indexController = require('../controllers/indexController');
const router= express.Router();
const userLoggedMiddleware = require("../middlewares/userLoggedMiddleware");

router.get("/", userLoggedMiddleware, indexController.index);

module.exports = router;
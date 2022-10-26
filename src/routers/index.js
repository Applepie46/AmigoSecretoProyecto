const express = require('express');
const indexController = require('../controllers/indexController');
const router= express.Router();
const userIndexMiddleware = require("../middlewares/userIndexMiddleware");

router.get("/", userIndexMiddleware, indexController.index)

module.exports = router;
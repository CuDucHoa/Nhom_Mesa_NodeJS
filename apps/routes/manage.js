const express = require('express');
const router = express.Router();
const managePageController = require('../controllers/managePageController');

router.get('/', managePageController.index);

module.exports = router;
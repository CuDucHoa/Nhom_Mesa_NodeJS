const express = require('express');
const router = express.Router();
const homePageController = require('../controllers/homePageController');
router.get('/home', homePageController.index);
router.get('/', homePageController.index);

module.exports = router;
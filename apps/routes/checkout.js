const express = require('express');
const router = express.Router();
const checkoutPageController = require('../controllers/checkoutPageController');

router.get('/', checkoutPageController.index);

module.exports = router;
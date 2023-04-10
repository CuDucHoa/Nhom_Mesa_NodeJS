const express = require('express');
const router = express.Router();
const cartPageController = require('../controllers/cartPageController');

router.get('/', cartPageController.index);
router.get('/add-to-cart/:slug', cartPageController.addCart);
router.get('/delete-cart/:slug', cartPageController.deleteCart);

module.exports = router;
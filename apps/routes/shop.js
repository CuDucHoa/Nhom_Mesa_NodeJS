const express = require('express');
const router = express.Router();
const shopPageController = require('../controllers/shopPageController');

router.get('/:slug', shopPageController.show);
router.get('/', shopPageController.index);

module.exports = router;
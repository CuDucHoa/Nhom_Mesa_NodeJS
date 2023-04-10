const express = require('express');
const router = express.Router();
const detailPageController = require('../controllers/detailPageController');

router.get('/:slug', detailPageController.show);

module.exports = router;
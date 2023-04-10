const express = require('express');
const router = express.Router();
const contactPageController = require('../controllers/contactPageController');

router.get('/', contactPageController.index);

module.exports = router;
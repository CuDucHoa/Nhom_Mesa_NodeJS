const express = require('express');
const router = express.Router();
const informationPageController = require('../controllers/informationPageController');

router.get('/', informationPageController.index);
router.post('/', informationPageController.update);

module.exports = router;
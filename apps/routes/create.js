const express = require('express');
const router = express.Router();
const createPageController = require('../controllers/createPageController');

router.get('/', createPageController.index);
router.post('/', createPageController.create);

module.exports = router;
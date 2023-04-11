const express = require('express');
const router = express.Router();
const updatePageController = require('../controllers/updatePageController');

router.get('/:slug', updatePageController.index);
router.post('/', updatePageController.update);

module.exports = router;
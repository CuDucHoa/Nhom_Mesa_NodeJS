const express = require('express');
const router = express.Router();
const homePageController = require('../controllers/homePageController');
const AuthPageController = require('../controllers/AuthPageController');

router.get('/home', homePageController.index);
router.get('/', homePageController.index);
router.get('/login', AuthPageController.indexLogin);
router.get('/register', AuthPageController.indexRegister);
router.get('/logout', AuthPageController.logout);
router.post('/login', AuthPageController.login);
router.post('/register', AuthPageController.register);

module.exports = router;
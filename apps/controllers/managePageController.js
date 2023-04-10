const User = require('../models/User');
const Product = require('../models/Product');
const Category = require('../models/Category');
const Cart = require('../models/Cart');

class managePageController {
    async show(req, res, next) {
        try {
            let user = null;
            if (req.session.token) {
                user = req.session.username;
            }
            res.render('manage');
        } catch (error) {
            next(error);
        }
    }
};

module.exports = new managePageController();
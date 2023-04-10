const User = require('../models/User');
const Product = require('../models/Product');
const Category = require('../models/Category');
const Cart = require('../models/Cart');

class managePageController {
    async index(req, res, next) {
        try {
            let user = null;
            if (req.session.token) {
                user = req.session.username;
            }
            const products = await Product.find({});
            const categories = await Category.find({});
            const cart = Cart.getCart();
            res.render('index', { user, cart, products, categories });
        } catch (error) {
            next(error);
        }
    }
};

module.exports = new managePageController();
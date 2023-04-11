const User = require('../models/User');
const Product = require('../models/Product');
const Category = require('../models/Category');
const Cart = require('../models/Cart');

class shopPageController {
    async index(req, res, next) {
        try {
            let user = null;
            let role = null;
            if (req.session.token) {
                user = req.session.username;
                role = req.session.role;

            }
            const products = await Product.find({});
            const categories = await Category.find({});
            const cart = Cart.getCart();
            res.render('shop', { role, user, cart, products, categories });
        } catch (error) {
            next(error);
        }
    }
    async show(req, res, next) {
        try {
            let user = null;
            let role = null;
            if (req.session.token) {
                user = req.session.username;
                role = req.session.role;
            }
            const category = await Category.findOne({ slug: req.params.slug });
            const products = await Product.find({ categoryName: category.categoryName });
            const categories = await Category.find({});
            const cart = Cart.getCart();
            res.render('shop', { role, user, cart, products, categories });
        } catch (error) {
            next(error);
        }
    }
};

module.exports = new shopPageController();
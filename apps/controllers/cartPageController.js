const User = require('../models/User');
const Product = require('../models/Product');
const Category = require('../models/Category');
const Cart = require('../models/Cart');

class cartPageController {
    async index(req, res, next) {
        try {
            let user = null;
            if (req.session.token) {
                user = req.session.username;
            }
            const products = await Product.find({});
            const categories = await Category.find({});
            const cart = Cart.getCart();
            res.render('cart', { user, cart, products, categories });
        } catch (error) {
            next(error);
        }
    }

    async addCart(req, res, next) {
        try {
            const addProduct = await Product.findOne({ slug: req.params.slug });
            Cart.save(addProduct);
            res.redirect('/cart');
        } catch (error) {
            next(error);
        }
    }

    async deleteCart(req, res, next) {
        try {
            Cart.delete(req.params.slug);
            res.redirect('/cart');
        } catch (error) {
            next(error);
        }
    }
};

module.exports = new cartPageController();
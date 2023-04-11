const User = require('../models/User');
const Product = require('../models/Product');
const Category = require('../models/Category');
const Cart = require('../models/Cart');

class updatePageController {
    async index(req, res, next) {
        try {
            let user = null;
            let role = null;
            if (req.session.token) {
                user = req.session.username;
                role = req.session.role;
            }
            const product = await Product.findOne({ slug: req.params.slug });
            const categories = await Category.find({});
            const cart = Cart.getCart();
            res.render('update', { role, user, cart, product, categories });
        } catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            let existProduct = await Product.findOne({ productName: req.body.productName });

            if (existProduct) {
                product = await existProduct.updateOne({ productName: req.body.productName }, { categoryName: req.body.categoryName }, { decription: req.body.decription }, { price: req.body.price }, { quantity: req.body.quantity }, { slug: req.body.slug }, { picture1: req.body.picture1 });
                res.redirect('/detail/' + existProduct.slug);
            } else {
                res.redirect('/')
            };
        } catch (error) {
            next(error);
        }
    }
};

module.exports = new updatePageController();
const User = require('../models/User');
const Product = require('../models/Product');
const Category = require('../models/Category');
const Cart = require('../models/Cart');

class createPageController {
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
            res.render('create', { role, user, cart, products, categories });
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            const existProduct = await Product.findOne({ productName: req.body.productName });
            if (existProduct) {
                res.redirect('/create');
            }
            const product = await Product.create([{ productName: req.body.productName },
                { categoryName: req.body.categoryName },
                { decription: req.body.decription },
                { price: req.body.price },
                { quantity: req.body.quantity },
                { slug: req.body.slug },
                { picture1: req.body.picture1 }
            ]);
            res.redirect('/');
        } catch (error) {
            next(error);
        }
    }
};

module.exports = new createPageController();
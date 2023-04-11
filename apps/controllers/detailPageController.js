const User = require('../models/User');
const Product = require('../models/Product');
const Category = require('../models/Category');
const Cart = require('../models/Cart');

class detailPageController {
    async show(req, res, next) {
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
            res.render('detail', { role, user, cart, product, categories });
        } catch (error) {
            next(error);
        }
    }
};

module.exports = new detailPageController();
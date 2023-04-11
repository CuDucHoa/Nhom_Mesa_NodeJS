const User = require('../models/User');
const Product = require('../models/Product');
const Category = require('../models/Category');
const Cart = require('../models/Cart');

class informationPageController {
    async index(req, res, next) {
        try {
            let user = null;
            let role = null;
            if (req.session.token) {
                user = req.session.username;
                role = req.session.role;
            }
            const infor = await User.findOne({ userName: user });
            const products = await Product.find({});
            const categories = await Category.find({});
            const cart = Cart.getCart();
            res.render('information', { role, infor, user, cart, products, categories });
        } catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            const infor = await User.findOneAndUpdate({ userName: user }, { password: req.body.password, fullName: req.body.fullname });
            res.redirect('/information');
        } catch (error) {
            next(error);
        }
    }
};

module.exports = new informationPageController();
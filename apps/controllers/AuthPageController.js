const User = require('../models/User');
const { registerValidator } = require('../validations/auth');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Product = require('../models/Product');
const Category = require('../models/Category');
const Cart = require('../models/Cart');

class AuthPageController {
    async indexLogin(req, res, next) {
        try {
            if (req.session.token) {
                return res.redirect('/');
            }
            const products = await Product.find({});
            const categories = await Category.find({});
            const cart = Cart.getCart();
            res.render('login', { cart, products, categories });
        } catch (error) {
            next(error);
        }
    }
    async indexRegister(req, res, next) {
        try {
            if (req.session.token) {
                return res.redirect('/');
            }
            const products = await Product.find({});
            const categories = await Category.find({});
            const cart = Cart.getCart();
            res.render('register', { cart, products, categories });
        } catch (error) {
            next(error);
        }
    }
    async register(req, res, next) {
        const { error } = registerValidator(req.body);
        if (error) {
            return res.status(422).send(error.details[0].message);
        }
        const checkUserNameExist = await User.findOne({ userName: req.body.username });
        const checkEmailExist = await User.findOne({ userEmail: req.body.useremail });
        if (checkUserNameExist || checkEmailExist) {
            return res.redirect('/register');
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        const user = new User({
            userName: req.body.username,
            userEmail: req.body.useremail,
            password: hashPassword,
            fullName: req.body.fullname,
            role: 'admin',
        });
        try {
            const newUser = await user.save();
            await res.redirect('/');;
        } catch (err) {
            next(err);
        }
    }
    async login(req, res, next) {
        const user = await User.findOne({ userName: req.body.username });
        if (!user) {
            return res.redirect('/login');
        }
        const checkPassword = await bcrypt.compare(req.body.password, user.password);
        if (!checkPassword) {
            return res.redirect('/login');
        }
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, { expiresIn: 60 * 60 * 24 });
        let session = req.session;
        session.token = token;
        session.username = user.userName;
        session.role = user.role;
        if (user.role == 'user') {
            return res.redirect('/');
        } else if (user.role !== 'user') {
            return res.redirect('/');
        }
    }
    async logout(req, res, next) {
        try {
            if (!req.session.token) {
                return res.redirect('/');
            }
            req.session.destroy();
            res.redirect('/');
        } catch (error) {
            next(error);
        }
    }
};

module.exports = new AuthPageController();
const home = require('./home');
const shop = require('./shop');
const detail = require('./detail');
const contact = require('./contact');
const cart = require('./cart');
const checkout = require('./checkout');
const manage = require('./manage');

function route(app) {

    app.use('/shop', shop);
    app.use('/detail', detail);
    app.use('/contact', contact);
    app.use('/cart', cart);
    app.use('/checkout', checkout);
    app.use('/manage', manage);
    app.use('/', home);
}

module.exports = route;
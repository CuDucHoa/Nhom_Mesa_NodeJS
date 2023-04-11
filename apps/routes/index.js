const home = require('./home');
const shop = require('./shop');
const detail = require('./detail');
const contact = require('./contact');
const cart = require('./cart');
const checkout = require('./checkout');
const manage = require('./manage');
const information = require('./information');
const create = require('./create');
const update = require('./update');

function route(app) {

    app.use('/shop', shop);
    app.use('/detail', detail);
    app.use('/contact', contact);
    app.use('/cart', cart);
    app.use('/checkout', checkout);
    app.use('/manage', manage);
    app.use('/information', information);
    app.use('/create', create);
    app.use('/update', update);
    app.use('/', home);
}

module.exports = route;
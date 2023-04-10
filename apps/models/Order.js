const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Order = new Schema({
    oderID: { type: String, maxLength: 30 },
    userName: { type: String, maxLength: 30 },
    userPhoneNumber: { type: String, maxLength: 15 },
    address: { type: String, maxLength: 100 },
    product: Object,
    priceTotal: { type: Number, maxLength: 20 },
    note: { type: String, maxLength: 100 },
    state: { type: String, maxLength: 20 },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', Order);
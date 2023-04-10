const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OderDetail = new Schema({
    oderID: { type: String, maxLength: 30 },
    userName: { type: String, maxLength: 30 },
    productName: { type: String, maxLength: 100 },
    quantity: { type: Number, maxLength: 2 },
    unit: { type: String, maxLength: 30 },
    image: { type: String, maxLength: 100 }
});

module.exports = mongoose.model('OderDetail', OderDetail);
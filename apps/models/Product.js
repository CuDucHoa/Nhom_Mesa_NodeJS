const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    productName: { type: String, maxLength: 30 },
    categoryName: { type: String, maxLength: 30 },
    decription: { type: String, maxLength: 100 },
    price: { type: Number, maxLength: 20 },
    quantity: { type: Number, maxLength: 4 },
    slug: { type: String, maxLength: 100 },
    picture1: { type: String, maxLength: 50 },
    picture2: { type: String, maxLength: 50 },
    picture3: { type: String, maxLength: 50 },
    picture4: { type: String, maxLength: 50 },
    picture5: { type: String, maxLength: 50 },
    picture6: { type: String, maxLength: 50 },
    picture7: { type: String, maxLength: 50 },
    picture8: { type: String, maxLength: 50 },
    picture9: { type: String, maxLength: 50 },
    picture10: { type: String, maxLength: 50 }
});

module.exports = mongoose.model('Product', Product);
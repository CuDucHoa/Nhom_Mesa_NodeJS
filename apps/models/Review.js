const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Review = new Schema({
    productName: { type: String, maxLength: 30 },
    userName: { type: String, maxLength: 15 },
    detail: { type: String, maxLength: 255 }
});

module.exports = mongoose.model('Review', Review);
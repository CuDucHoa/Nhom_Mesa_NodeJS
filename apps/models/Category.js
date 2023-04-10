const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = new Schema({
    categoryName: { type: String, maxLength: 30 },
    slug: { type: String, maxLength: 30 },
    decription: { type: String, maxLength: 255 }
});

module.exports = mongoose.model('Category', Category);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    userName: { type: String, maxLength: 30, min: 3, required: true },
    password: { type: String, maxLength: 255, required: true },
    userEmail: { type: String, maxLength: 50, min: 3, required: true },
    fullName: { type: String, maxLength: 50 },
    role: { type: String, maxLength: 30 }
});

module.exports = mongoose.model('User', User);
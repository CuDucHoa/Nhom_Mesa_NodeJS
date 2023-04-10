const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(process.env.DB_CONNECT, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect to MongoDB successfully!!!');
    } catch (error) {
        console.log('Connect to MongoDB failure!!!');
    }
}

module.exports = { connect };
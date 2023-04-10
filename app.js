const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const sessions = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;
const route = require('./apps/routes');
const db = require('./config/db');
const time = 60 * 60 * 24;

dotenv.config();

app.use(cookieParser());
app.use(sessions({
    secret: "nhom_Messa",
    saveUninitialized: true,
    cookie: { maxAge: time },
    resave: false
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'apps/views'));
app.set('view engine', 'ejs');

route(app);

//Connect to DB
db.connect();

app.listen(port, () => {
    console.log('App listening at http://localhost:' + port);
});
module.exports = app;
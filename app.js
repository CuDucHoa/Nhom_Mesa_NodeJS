const express = require('express');
const path = require('path');
//const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;
const route = require('./apps/routes');

//app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'apps/views'));
app.set('view engine', 'ejs');

route(app);

app.listen(port, () => {
    console.log('App listening on port ' + port);
});
module.exports = app;
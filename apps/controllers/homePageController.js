class homePageController {
    index(req, res, next) {
        res.render('home');
    }
};

module.exports = new homePageController();
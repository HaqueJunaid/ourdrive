const m1 = (req, res, next) => {
    if (!req.session.user) {
        return res.redirect("/drive/user/login")
    }
    next();
};

module.exports = m1;
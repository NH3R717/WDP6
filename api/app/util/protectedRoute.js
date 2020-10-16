// creating a middleware
const protectedRoute = (req, res, next) => {

    const loggedIn = "false";

    if (!loggedIn) return res.redirect("/");

    return next();
};

module.exports = protectedRoute;
module.exports = function (req, res, next) {
    // 401 Unauthorized - Does not supply valid json web token
    // 403 Forbidden
    if (!req.user.isAdmin) return res.status(403).send("Access Denied");
    next();
}
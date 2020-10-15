const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { users } = require("../models");

exports.auth = async(req, res) => {
    const { username, password } = req.body;

    const [user] = await users.findAll({ where: { username } });

    if (!user) {
        res.status(403).json({ loggedIn: false });
        return;
    }

    bcrypt.compare(password, user.password).then((response) => {
        if (!response) {
            res.status(403).json({ loggedIn: false });
        }
    });
    const token = jwt.sign({ id: user.id }, process.env.SECRET);
    res.json({ token, loggedIn: true });
};
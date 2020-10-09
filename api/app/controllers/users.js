const { Users, Sequelize } = require("../models");
const { throwError, throwIf } = require('../uti/errorHandeling');

// ToDo
// – [] fetchUser(userId)

exports.getAll = async (req, res, next) => {
    try {
        const { name } = req.query;
        const users = await Users.findAll({ where: { name } }).catch(
            throwError(500, "A database error has ocurred, try again.")
        )
        res.json(users);
    } catch (e) {
        next(e)
    }
};

exports.getOneById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await Users.findByPk(id)
            .then(
                throwIf(row => !row, 404, 'User not found.'),
                throwError(500, "A database error has ocurred, try again."))
        res.json(user)
    } catch (e) {
        next(e)
    }
};

exports.createUser = async (req, res, next) => {
    try {
        const { name } = req.body;
        const user = await Users.create({ name })
            .catch(Sequelize.ValidationError, throwError(201, 'Validation Errors'))
            .catch(Sequelize.BaseError, throwError(500, '"A database error has ocurred, try again."'))
        // Sequelize.BaseError, throwError(201, '"A database error has ocurred, try again."')
        res.status(201).json(user);
        // res.json(user);
    } catch (e) {
        next(e)
    }
};
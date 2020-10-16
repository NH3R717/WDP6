const { users, Sequelize } = require("../models");
const { throwError, throwIf } = require('../util/errorHandeling');

// ToDo
// – [] fetchUser(userId) √

exports.getAllUser = async (req, res, next) => {
    try {
        const { name } = req.query;
        const users = await users.findAll({ where: { name } }).catch(
            throwError(500, "A database error has ocurred, try again.")
        )
        res.json(users);
    } catch (e) {
        next(e)
    }
};

// ! fetchUser(userId)
exports.getOneByIdUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await users.findByPk(id)
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
        const user = await users.create({ name })
            .catch(Sequelize.ValidationError, throwError(201, 'Validation Errors'))
            .catch(Sequelize.BaseError, throwError(500, '"A database error has ocurred, try again."'))
        // Sequelize.BaseError, throwError(201, '"A database error has ocurred, try again."')
        res.status(201).json(user);
        // res.json(user);
    } catch (e) {
        next(e)
    }
};

exports.updateUser = async (req, res, next) => {
    console.log("updateUser")
    // try {
    //     const { name, type } = req.body;
    //     const user = await users.create({ name, type })
    //         .catch(Sequelize.ValidationError, throwError(201, 'Validation Errors'))
    //         .catch(Sequelize.BaseError, throwError(500, '"A database error has ocurred, try again."'))
    //     // Sequelize.BaseError, throwError(201, '"A database error has ocurred, try again."')
    //     res.status(201).json(user);
    //     // res.json(user);
    // } catch (e) {
    //     next(e)
    // }
};

exports.deleteUser = async (req, res, next) => {
    try {
        const { id } = req.body;
        const user = await users.destroy({ where: { id } })
            .catch(Sequelize.ValidationError, throwError(201, 'Validation Errors'))
            .catch(Sequelize.BaseError, throwError(500, 'A database error has ocurred, try again.'))
        res.status(200).json(user);
    } catch (e) {
        next(e)
    }
};
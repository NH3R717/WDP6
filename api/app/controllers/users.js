const { users, Sequelize } = require("../models");
const { throwError, throwIf } = require('../util/errorHandeling');

// ToDo
// – [] fetchUser(userId) √

// ! route Ok
// ! getAllUsers Ok
exports.getAllUsers = async (req, res, next) => {
    console.log("® controller users.js getAllUsers ")
    try {
        // const { username } = req.query;
        // console.log("® controller users.js " + username)
         const usersAll = await users.findAll().catch(
            throwError(500, "A database error has ocurred, try again.")
            );
            res.json(usersAll);
            console.log("® controller users.js getAllUsers " + usersAll)
    } catch (e) {
        next(e)
    }
};

// ! Same as getAllUsers 
// ! not sure about id
exports.getOneByIdUser = async (req, res, next) => {
    console.log("® controller users.js getOneByIdUser ")
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

// ! post null data to db (has worked before, not sure why the null)
exports.createUser = async (req, res, next) => {
    console.log("® controller users.js createUser ")
    try {
        const { name } = req.body;
        console.log('® controller users.js', name);
        const user = await users.create({ name })
            .catch(Sequelize.ValidationError, throwError(201, 'Validation Errors'))
            .catch(Sequelize.BaseError, throwError(500, '"A database error has ocurred, try again."'))
        // Sequelize.BaseError, throwError(201, '"A database error has ocurred, try again."')
        console.log('® controller users.js', user);
        res.status(201).json(user);
        // res.json(user);
    } catch (e) {
        next(e)
    }
};

// ! console log works (but not with id)
// ! not sure about id
exports.updateUser = async (req, res, next) => {
    console.log("® controller users.js updateUser ")
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

// ! console log works (but not with id)
// ! not sure about id
// ! 404 
exports.deleteUser = async (req, res, next) => {
    console.log("® controller users.js deleteUser ")
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
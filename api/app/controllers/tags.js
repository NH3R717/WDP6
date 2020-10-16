const { tags, Sequelize } = require("../models");
const { throwError, throwIf } = require('../util/errorHandeling');

// ToDo
// – [] addToWatched(tagId) // ! Don't know about "watching"
// – [] removeFromWatched(tagId) // ! Don't know about "watching"

exports.getAllTag = async (req, res, next) => {
    console.log("® controller tags.js getAllTag ")
    try {
const tagsAll = await tags.findAll().catch(
            throwError(500, "A database error has ocurred, try again.")
            );
        res.json(tagsAll);
        console.log("® controller users.js getAllTag " + tagsAll)
    } catch (e) {
        next(e)
    }
};

exports.getOneByIdTag = async (req, res, next) => {
    console.log("® controller tags.js getOneByIdTag ")
    try {
        const { id } = req.params;
        const tagOne = await tags.findByPk(id)
            .then(
                throwIf(row => !row, 404, 'Tag not found.'),
                throwError(500, "A database error has ocurred, try again."))
        res.json(tagOne)
    } catch (e) {
        next(e)
    }
};

// ! console log works
// ! console log # 2 works
exports.createTag = async (req, res, next) => {
    console.log("® controller tags.js createTag ")
    try {
        const { name } = req.body;
        console.log('® controller tags.js createTag ', name);
        const tagNew = await tags.create({ name })
            .catch(Sequelize.ValidationError, throwError(201, 'Validation Errors'))
            .catch(Sequelize.BaseError, throwError(500, '"A database error has ocurred, try again."'))
        Sequelize.BaseError, throwError(201, '"A database error has ocurred, try again."')
        res.status(201).json(tagNew);
        console.log('® controller users.js res.status', tagNew);
        // res.json(tag);
    } catch (e) {
        next(e)
    }
};

exports.updateTag = async (req, res, next) => {
    console.log("® controller tags.js updateTag ")
    // try {
    //     const { name, type } = req.body;
    //     const tags = await tags.create({ name, type })
    //         .catch(Sequelize.ValidationError, throwError(201, 'Validation Errors'))
    //         .catch(Sequelize.BaseError, throwError(500, '"A database error has ocurred, try again."'))
    //     // Sequelize.BaseError, throwError(201, '"A database error has ocurred, try again."')
    //     res.status(201).json(tag);
    //     // res.json(tag);
    // } catch (e) {
    //     next(e)
    // }
};

exports.deleteTag = async (req, res, next) => {
    console.log("® controller tags.js deleteTag ")
    try {
        const { id } = req.body;
        const tag = await tags.destroy({ where: { id } })
            .catch(Sequelize.ValidationError, throwError(201, 'Validation Errors'))
            .catch(Sequelize.BaseError, throwError(500, 'A database error has ocurred, try again.'))
        res.status(200).json(tag);
    } catch (e) {
        next(e)
    }
};
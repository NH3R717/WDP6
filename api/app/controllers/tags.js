const { Tags, Sequelize } = require("../models");
const { throwError, throwIf } = require('../uti/errorHandeling');

exports.getAll = async (req, res, next) => {
    try {
        const { name } = req.query;
        const tags = await Tags.findAll({ where: { name } }).catch(
            throwError(500, "A database error has ocurred, try again.")
        )
        res.json(tags);
    } catch (e) {
        next(e)
    }
};

exports.getOneById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const tag = await Tags.findByPk(id)
            .then(
                throwIf(row => !row, 404, 'Tag not found.'),
                throwError(500, "A database error has ocurred, try again."))
        res.json(tag)
    } catch (e) {
        next(e)
    }
};

exports.createTag = async (req, res, next) => {
    try {
        const { name } = req.body;
        const tag = await Tags.create({ name })
            .catch(Sequelize.ValidationError, throwError(201, 'Validation Errors'))
            .catch(Sequelize.BaseError, throwError(500, '"A database error has ocurred, try again."'))
        // Sequelize.BaseError, throwError(201, '"A database error has ocurred, try again."')
        res.status(201).json(tag);
        // res.json(tag);
    } catch (e) {
        next(e)
    }
};
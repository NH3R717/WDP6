const { Posts, Sequelize } = require("../models");
const { throwError, throwIf } = require('../uti/errorHandeling');

// ! focus on controllers that coincide with the assignment

// ToDo
// – [] addComment( { postId, text } ) √
// – [] addVote( { postId, direction } ) √
// – [] deletePost(postId) √
// – [] fetchPost(postId) √
// – [] fetchPosts( { type } || { tag } ) √
// – [] fetchUserPosts() √
// – [] fetchWatching() – // ! Don't know about "watching"

// good luck :)


// ! fetchPost(postId)
// ! fetchPosts( { type } || { tag } )
// ! fetchUserPosts()
// ! fetchWatching()
exports.getAllPost = async (req, res, next) => {
    console.log("getAllPost")
    try {
        const { type } = req.query;
        const post = await Posts.findAll({ where: { type } }).catch(
            throwError(500, "A database error has ocurred, try again.")
        )
        res.json(post);
    } catch (e) {
        next(e)
    }
};

// !
exports.getOneByIdPost = async (req, res, next) => {
    console.log("getOneByIdPost")
    try {
        const { id } = req.params;
        const posts = await Posts.findByPk(id)
            .then(
                throwIf(row => !row, 404, 'Post not found.'),
                throwError(500, "A database error has ocurred, try again."))
        res.json(posts)
    } catch (e) {
        next(e)
    }
};

exports.createPost = async (req, res, next) => {
    console.log("createPost")
    // try {
    //         const { name, type } = req.body;
    //         const post = await Posts.create({ name, type })
    //             .catch(Sequelize.ValidationError, throwError(201, 'Validation Errors'))
    //             .catch(Sequelize.BaseError, throwError(500, '"A database error has ocurred, try again."'))
    //         // Sequelize.BaseError, throwError(201, '"A database error has ocurred, try again."')
    //         res.status(201).json(post);
    //         // res.json(post);
    //     } catch (e) {
    //         next(e)
    //     }
};

// ! addVote( { postId, direction } )
// ! addComment( { postId, text } )
exports.updatePost = async (req, res, next) => {
    console.log("updatePost")
    // try {
    //     const { name, type } = req.body;
    //     const post = await Posts.create({ name, type })
    //         .catch(Sequelize.ValidationError, throwError(201, 'Validation Errors'))
    //         .catch(Sequelize.BaseError, throwError(500, '"A database error has ocurred, try again."'))
    //     // Sequelize.BaseError, throwError(201, '"A database error has ocurred, try again."')
    //     res.status(201).json(post);
    //     // res.json(post);
    // } catch (e) {
    //     next(e)
    // }
};

// ! deletePost(postId)
exports.deletePost = async (req, res, next) => {
    console.log(deletePost)
    try {
        const { id } = req.body;
        const post = await Posts.destroy({ where: { id } })
            .catch(Sequelize.ValidationError, throwError(201, 'Validation Errors'))
            .catch(Sequelize.BaseError, throwError(500, 'A database error has ocurred, try again.'))
        res.status(200).json(post);
    } catch (e) {
        next(e)
    }
};
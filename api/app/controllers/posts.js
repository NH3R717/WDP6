const { posts, Sequelize } = require("../models");
const { throwError, throwIf } = require('../util/errorHandeling');

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
// ! fetchposts( { type } || { tag } )
// ! fetchUserposts()
// ! fetchWatching()
exports.getAllPost = async (req, res, next) => {
    console.log("® controller posts.js getAllPost ")
    try {
        const { type } = req.query;
        const post = await posts.findAll({ where: { type } }).catch(
            throwError(500, "A database error has ocurred, try again.")
        )
        res.json(post);
    } catch (e) {
        next(e)
    }
};

// ! returns post
exports.getOneByIdPost = async (req, res, next) => {
    console.log("® controller posts.js getOneByIdPost")
    try {
        const { id } = req.params;
        const postsOne = await posts.findByPk(id)
            .then(
                throwIf(row => !row, 404, 'Post not found.'),
                throwError(500, "A database error has ocurred, try again."))
        res.json(postsOne)
    } catch (e) {
        next(e)
    }
};

// ! creates a new post
exports.createPost = async (req, res, next) => {
    try {
            const { title, content } = req.body;
            console.log("® controller posts.js createPost ", req.user, title, content)
            const post = await posts.create({ user:req.user, title, content })
                .catch(Sequelize.ValidationError, throwError(201, 'Validation Errors'))
                .catch(Sequelize.BaseError, throwError(500, '"A database error has ocurred, try again."'))
            Sequelize.BaseError, throwError(201, '"A database error has ocurred, try again."')
            console.log("new post ", post)
            res.status(201).json(post);
            // res.json(post);
        } catch (e) {
            next(e)
        }
};

// ! addVote( { postId, direction } )
// ! addComment( { postId, text } )
exports.updatePost = async (req, res, next) => {
    console.log("® controller posts.js updatePost ")
    try {
        const { name, type } = req.body;
        const post = await posts.create({ name, type })
            .catch(Sequelize.ValidationError, throwError(201, 'Validation Errors'))
            .catch(Sequelize.BaseError, throwError(500, '"A database error has ocurred, try again."'))
        // Sequelize.BaseError, throwError(201, '"A database error has ocurred, try again."')
        res.status(201).json(post);
        // res.json(post);
    } catch (e) {
        next(e)
    }
};

// ! deletePost(postId)
exports.deletePost = async (req, res, next) => {
    console.log("® controller posts.js deletePost ")
    try {
        const { id } = req.body;
        const post = await posts.destroy({ where: { id } })
            .catch(Sequelize.ValidationError, throwError(201, 'Validation Errors'))
            .catch(Sequelize.BaseError, throwError(500, 'A database error has ocurred, try again.'))
        res.status(200).json(post);
    } catch (e) {
        next(e)
    }
};
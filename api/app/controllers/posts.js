const { Posts, Sequelize } = require("../models");
const { throwError, throwIf } = require('../uti/errorHandeling');

// ! focus on controllers that coincide with the assignment

// ToDo
// – [] addComment( { postId, text } )
// – [] deletePost(postId)
// – [] fetchPost(postId)
// – [] fetchPosts( { type } || { tag } ) // example type: 'popular'
// – [] fetchUserPosts()
// – [] fetchWatching()

// good luck :)

exports.getAll = async (req, res, next) => {
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

exports.getOneById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await Posts.findByPk(id)
            .then(
                throwIf(row => !row, 404, 'Post not found.'),
                throwError(500, "A database error has ocurred, try again."))
        res.json(post)
    } catch (e) {
        next(e)
    }
};

exports.createPost = async (req, res, next) => {
    try {
        const { name, type } = req.body;
        const post = await Posts.create({ name, type })
            .catch(Sequelize.ValidationError, throwError(201, 'Validation Errors'))
            .catch(Sequelize.BaseError, throwError(500, '"A database error has ocurred, try again."'))
        // Sequelize.BaseError, throwError(201, '"A database error has ocurred, try again."')
        res.status(201).json(post);
        // res.json(post);
    } catch (e) {
        next(e)
    }
};

// exports.createPost = async (req, res) => {
//     console.log("/controllers/Post.js creatPost()");
//     const {
//         name,
//         type,
//     } = req.body;
//     try {
//         const newPost = await Post.create({
//             name,
//             type,
//             userId: req.userId
//         });
//         console.log("/controllers/Post.js creatPost()" + newPost.id);
//         res.json({ id: newPost.id });
//     } catch (e) {
//         const errors = e.errors.map(err => err.message);
//         res.status(400).json({ errors });
//     }
// };

const { Post } = require("../models");

exports.getAll = async (req, res, next) => {
    try {
        const { type } = req.query;
        const posts = await Posts.findAll({ where: { type } })
        res.json(posts);
    } catch (e) {

    }

};

exports.getOneById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await Posts.findByPk(id)
        res.json(post)
    } catch (e) {

    }

};

exports.createPost = async (req, res, next) => {
    try {
        const { name, type } = req.body;
        const post = await Posts.create({ name, type })
        res.json(post);
    } catch (e) {

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

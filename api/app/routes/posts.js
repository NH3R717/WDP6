// import the express router
const router = require('express').Router();
const postCtrl = require('../controllers/posts')

// ToDo import middleware

// import middleware
// *

// all post
//!ttd will follow controllers working (focus on assignment requirements)
router.get('/posts', postCtrl.getAllPost);

// post by
router.get('/posts/:postId', postCtrl.getOneByIdPost);
router.put('/posts/', postCtrl.createPost);
router.put('/posts/:postId', postCtrl.updatePost);
router.delete('/posts/:postId', postCtrl.deletePost);

// export the route from this file
module.exports = router;
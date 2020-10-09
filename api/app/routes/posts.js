// import the express router
const router = require('express').Router();
const postCtrl = require('../controllers/posts')

// ToDo import middleware

// import middleware
// *

// Edit post
router.put('/posts/edit/:postId', postCtrl.updatePost);

// All post (post feed)
//!ttd will follow controllers working (focus on assignment requirements)
router.get('/posts', postCtrl.getAll);

// postId
router.get('/posts/:postId', postCtrl.getOneById);
router.put('/posts/:postId', postCtrl.updatePost);
router.delete('/posts/:postId', postCtrl.deletePost);

// export the route from this file
module.exports = router;
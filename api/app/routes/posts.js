// import the express router
const router = require('express').Router();
const postCtrl = require('../controllers/posts')

const protectedRoute = require('../util/protectedRoute')

// ToDo import middleware

// import middleware
// *

// all post
//!ttd will follow controllers working (focus on assignment requirements)
router.get('/', protectedRoute, postCtrl.getAllPost);

// post by
router.get('/:id', protectedRoute, postCtrl.getOneByIdPost);
router.post('/', protectedRoute, postCtrl.createPost);
router.put('/:id', protectedRoute, postCtrl.updatePost);
router.delete('/:id', protectedRoute, postCtrl.deletePost);

// export the route from this file
module.exports = router;
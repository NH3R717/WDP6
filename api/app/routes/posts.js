// import the express router
const router = require('express').Router();

// import middleware
// *

// Edit post
// <Route exact path="/posts/edit/:postId" component={PostForm} />
router.put("/posts/edit/:postId", postCtrl.updatePost);

// All post (post feed)
// <Route exact path="/posts" component={PostAdmin} />
router.get("/posts", postCtrl.getAllPost);


// postId
// <Route exact path="/posts/:postId" component={Post} />
router.get('/posts/:postId"', postCtrl.getOneById);
router.put('/posts/:postId"', postCtrl.updatePost);
router.delete('/posts/:postId"', postCtrl.deletePost);

// export the route from this file
module.exports = router;
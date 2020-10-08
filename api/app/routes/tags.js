// import the express router
const router = require('express').Router();

// import middleware
// *

// All tag (tags list)
// <Route exact path="/tags" component={TagAdmin} />
router.get("/tags", tagCtrl.getAllTag);


// tagId
// <Route exact path="/tags/:tagId" component={tag} />
router.get('/tags/:tagId"', tagCtrl.getOneById);
router.put('/tags/:tagId"', tagCtrl.updateTag);
router.delete('/tags/:tagId"', tagCtrl.deleteTag);

// export the route from this file
module.exports = router;
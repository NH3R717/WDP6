// import the express router
const router = require('express').Router();

// import middleware
// *

{/* <Route exact path="/tags" component={Tags} />
<Route exact path="/tags/:tagId" component={Tag} / */}

// Edit tag – no edit tags route
// <Route exact path="/tags/edit/:tagId" component={tagForm} />
// router.put("/tags/edit/:tagId", tagCtrl.updateTag);

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
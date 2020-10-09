// import the express router
const router = require('express').Router();

const tagsCtrl = require('../controllers/tags')

// import middleware
// *

// All tag (tags list)
// <Route exact path="/tags" component={TagAdmin} />
router.get('/tags', tagsCtrl.getAllTag);


// tagId
// <Route exact path="/tags/:tagId" component={tag} />
router.get('/tags/:tagId', tagsCtrl.getOneById);
router.put('/tags/:tagId', tagsCtrl.updateTag);
router.delete('/tags/:tagId', tagsCtrl.deleteTag);

// export the route from this file
module.exports = router;


// import the express router
const router = require('express').Router();
const tagsCtrl = require('../controllers/tags')

// ToDo import middleware
// *

// All tag (tags list)
router.get('/tags', tagsCtrl.getAllTag);

// tagId
router.get('/tags/:tagId', tagsCtrl.getOneByIdTag);
// ! below not assigned
router.put('/tags/', tagsCtrl.createTag);
router.put('/tags/:tagId', tagsCtrl.updateTag);
// ! below not assigned
router.delete('/tags/:tagId', tagsCtrl.deleteTag);

// export the route from this file
module.exports = router;


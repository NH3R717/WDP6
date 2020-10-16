// import the express router
const router = require('express').Router();
const tagsCtrl = require('../controllers/tags')

// ToDo import middleware
// *

// All tag (tags list)
router.get('/', tagsCtrl.getAllTag);

// tagId
router.get('/:id', tagsCtrl.getOneByIdTag);

router.post('/', tagsCtrl.createTag);
router.put('/:id', tagsCtrl.updateTag);

router.delete('/:id', tagsCtrl.deleteTag);

// export the route from this file
module.exports = router;


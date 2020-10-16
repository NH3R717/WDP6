// import the express router
const router = require('express').Router();
const userCtrl = require('../controllers/users')

// ToDo check controller functions

// import middleware
// *

// All user (users list)
router.get('/', userCtrl.getAllUsers);

// userId
router.get('/:id', userCtrl.getOneByIdUser);
// ! below not assigned

// ! problem with Bearer Token
router.post('/', userCtrl.createUser);
router.put('/:id', userCtrl.updateUser);
router.delete('/:id', userCtrl.deleteUser);

// export the route from this file
module.exports = router;
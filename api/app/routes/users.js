// import the express router
const router = require('express').Router();
const userCtrl = require('../controllers/users')

// ToDo import controllers
// ToDo check controller functions

// import middleware
// *

// All user (users list)
router.get('/users', userCtrl.getAllUser);

// userId
router.get('/users/:userId', userCtrl.getOneByIdUser);
// router.put('/users/', userCtrl.createUser);
router.put('/users/:userId', userCtrl.updateUser);
router.delete('/users/:userId', userCtrl.deleteUser);

// export the route from this file
module.exports = router;
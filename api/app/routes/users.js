// import the express router
const router = require('express').Router();

// ! import controllers
// check controller functions

// import middleware
// *

// All user (users list)
// <Route exact path="/users" component={UserAdmin} />
router.get('/users', userCtrl.getAllUser);

// userId
// <Route exact path="/users/:userId" component={user} />
router.get('/users/:userId', userCtrl.getOneById);
router.put('/users/:userId', userCtrl.updateUser);
router.delete('/users/:userId', userCtrl.deleteUser);

// export the route from this file
module.exports = router;
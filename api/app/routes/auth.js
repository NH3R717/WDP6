const router = require('express').Router();

router.post('/signup', authCtrl.signUp);

router.post('/login', authCtrl.login);

module.exports = router;

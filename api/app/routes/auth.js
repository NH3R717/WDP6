const router = require('express').Router();

const authCtrl = require("../controllers/auth");

router.get('/', async (req, res) => {
  console.log("testing api...")
});

router.post('/signup', authCtrl.signUp);

router.post('/login', authCtrl.login);

module.exports = router;

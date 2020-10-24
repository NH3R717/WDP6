
const router = require('express').Router();

const authCtrl = require("../controllers/auth");

// router.get('/', async (req, res) => {
//   console.log("testing api...")
//   res.json({test:true})
// });

router.post('/signup', authCtrl.signUp);
// router.post('/signup', async (req, res) => {
//   console.log("testing api...")
//   res.json({test:true})
// });

router.post('/login', authCtrl.login);

module.exports = router;

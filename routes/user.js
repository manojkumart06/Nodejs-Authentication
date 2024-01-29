const express = require('express');
const router = express.Router();
const homecontroller = require('../controllers/homecontroller');

// Routes under the /users path
router.get('/profile',homecontroller.profile);
router.get('/sign-up',homecontroller.signUp);
router.get('/sign-in',homecontroller.signIn);
router.post('/create', homecontroller.create);



module.exports = router;
const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/checkauthorization')

//------------ home Route ------------//
router.get('/', (req, res) => {
    res.render('home');
});

//------------ Dashboard Route ------------//
router.get('/dashboard', ensureAuthenticated, (req, res) => res.render('dash', {
    name: req.user.name
}));

module.exports = router;
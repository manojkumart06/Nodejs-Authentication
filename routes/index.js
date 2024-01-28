const express = require('express');
const router = express.Router();

// Route for home page

router.get('/', (req, res) => {
    res.send('Hello, your server is running!');
});


module.exports = router;
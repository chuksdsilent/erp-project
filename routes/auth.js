const express = require('express');
const router = express.Router();

// @router  GET api/auth
// @desc    Get loggedin user
// @access  Private
router.get('/', (req, res) => {
    res.send("Get loggedin user");
});
 

// @router  POST api/auth
// @desc    Auth user & get token
// @access  Public
router.post('/', (req, res) => {
    res.send("login user");
});

module.exports = router;
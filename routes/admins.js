const express = require('express');
const router = express.Router();

// @router  GET api/admin
// @desc    Get all admin
// @access  Public
router.get('/', (req, res) => {
    res.send("Get all admin");
});

// @router  POST api/admin
// @desc    Register an admin
// @access  Public
router.post('/', (req, res) => {
    res.send("Register");
});

// @router  PUT api/admin
// @desc    Update an admin
// @access  Public
router.put('/', (req, res) => {
    res.send("Register");
});

// @router  DELETE api/admin
// @desc    Delete an admin
// @access  Public
router.delete('/', (req, res) => {
    res.send("Register");
});

module.exports = router;
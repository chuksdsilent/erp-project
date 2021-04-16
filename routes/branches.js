const express = require('express');
const router = express.Router();

// @router  GET api/branches
// @desc    Get all branches
// @access  Public
router.get('/', (req, res) => {
    res.send("Get all admin");
});

// @router  POST api/branches
// @desc    Register an branches
// @access  Public
router.post('/', (req, res) => {
    res.send("Register");
});

// @router  PUT api/branches
// @desc    Update an branches
// @access  Public
router.put('/', (req, res) => {
    res.send("Register");
});

// @router  DELETE api/branches
// @desc    Delete an branches
// @access  Public
router.delete('/', (req, res) => {
    res.send("Register");
});

module.exports = router;
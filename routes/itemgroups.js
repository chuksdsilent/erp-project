const express = require('express');
const router = express.Router();

// @router  GET api/itemgroup
// @desc    Get all itemgroup
// @access  Public
router.get('/', (req, res) => {
    res.send("Get all admin");
});

// @router  POST api/itemgroup
// @desc    Register an itemgroup
// @access  Public
router.post('/', (req, res) => {
    res.send("Register");
});

// @router  PUT api/itemgroup
// @desc    Update an itemgroup
// @access  Public
router.put('/', (req, res) => {
    res.send("Register");
});

// @router  DELETE api/itemgroup
// @desc    Delete an itemgroup
// @access  Public
router.delete('/', (req, res) => {
    res.send("Register");
});

module.exports = router;
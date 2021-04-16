const express = require('express');
const router = express.Router();

// @router  GET api/items
// @desc    Get all items
// @access  Public
router.get('/', (req, res) => {
    res.send("Get all admin");
});

// @router  POST api/items
// @desc    Register an items
// @access  Public
router.post('/', (req, res) => {
    res.send("Register");
});

// @router  PUT api/items
// @desc    Update an items
// @access  Public
router.put('/', (req, res) => {
    res.send("Register");
});

// @router  DELETE api/items
// @desc    Delete an items
// @access  Public
router.delete('/', (req, res) => {
    res.send("Register");
});

module.exports = router;
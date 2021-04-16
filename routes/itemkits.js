const express = require('express');
const router = express.Router();

// @router  GET api/item-kits
// @desc    Get all item-kits
// @access  Public
router.get('/', (req, res) => {
    res.send("Get all admin");
});

// @router  POST api/item-kits
// @desc    Register an item-kits
// @access  Public
router.post('/', (req, res) => {
    res.send("Register");
});

// @router  PUT api/item-kits
// @desc    Update an item-kits
// @access  Public
router.put('/', (req, res) => {
    res.send("Register");
});

// @router  DELETE api/item-kits
// @desc    Delete an item-kits
// @access  Public
router.delete('/', (req, res) => {
    res.send("Register");
});

module.exports = router;
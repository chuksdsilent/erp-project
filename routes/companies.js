const express = require('express');
const router = express.Router();

// @router  GET api/companies
// @desc    Get all companies
// @access  Public
router.get('/', (req, res) => {
    res.send("Get all admin");
});

// @router  POST api/companies
// @desc    Register an companies
// @access  Public
router.post('/', (req, res) => {
    res.send("Register");
});

// @router  PUT api/companies
// @desc    Update an companies
// @access  Public
router.put('/', (req, res) => {
    res.send("Register");
});

// @router  DELETE api/companies
// @desc    Delete an companies
// @access  Public
router.delete('/', (req, res) => {
    res.send("Register");
});

module.exports = router;
const express = require('express');
const router = express.Router();

// @router  GET api/employees
// @desc    Get all employee
// @access  Public
router.get('/', (req, res) => {
    res.send("Get all admin");
});

// @router  POST api/employees
// @desc    Register an employee
// @access  Public
router.post('/', (req, res) => {
    res.send("Register");
});

// @router  PUT api/employees
// @desc    Update an employee
// @access  Public
router.put('/', (req, res) => {
    res.send("Register");
});

// @router  DELETE api/employees
// @desc    Delete an employee
// @access  Public
router.delete('/', (req, res) => {
    res.send("Register");
});

module.exports = router;
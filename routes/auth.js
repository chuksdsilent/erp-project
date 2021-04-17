const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const config = require("config");
const Manager = require('../models/Manager');

const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

// @router  GET api/auth
// @desc    Get loggedin user
// @access  Private
router.get('/', auth, async (req, res) => {

    try {
        const manager = await Manager.findById(req.manager.id).select('-password');
        res.json(manager);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }
});


// @router  POST api/auth
// @desc    Auth user & get token
// @access  Public
router.post('/', [
    check(
        "username", "Username is Required"
    )
        .not()
        .isEmpty(),

    check(
        "password", "Password is Required"
    )
        .not()
        .isEmpty()

], async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { username, password, } = req.body;

    try {
        let manager = await Manager.findOne({ username });

        if (!manager) {
            return res.status(400).json({ msg: "Invalid Credentials" });
        }

        const isMatch = await bcrypt.compare(password, manager.password);

        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid Credentials" });
        }


        const payload = {
            manager: {
                id: manager.id
            }
        }

        jwt.sign(payload, config.get("jwtSecret"), {
            expiresIn: 3600000
        }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        })

    } catch (error) {
        console.error(error.message);
        res.status(400).send("Server error");
    }
});

module.exports = router;
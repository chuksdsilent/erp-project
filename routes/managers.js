const express = require('express');
const router = express.Router();
const Manager = require("../models/Manager");
const { check, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const config = require("config");

// @router  GET api/admin
// @desc    Get all admin
// @access  Public
router.get('/', (req, res) => {
    res.send("Get all admin");
});

// @router  POST api/admin
// @desc    Register an admin
// @access  Public
router.post('/', [
    check(
        "accMgrName", "Name is required"
    )
        .not()
        .isEmpty(),
    check(
        "username", "Username is required"
    )
        .not()
        .isEmpty(),
    check(
        "password", "Enter password greater than 8 Characters"
    )
        .not()
        .isEmpty()
        .isLength({ min: 8 })

], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { accMgrName, username, password, } = req.body;

    try {
        let manager = await Manager.findOne({ username });

        if (manager) {
            return res.status(400).json({ msg: "Manager already exists" });
        }

        manager = new Manager({
            accMgrName, username, password
        });

        const salt = await bcrypt.genSalt(10);
        manager.password = await bcrypt.hash(password, salt);

        await manager.save()

        const payload = {
            user: {
                id: manager.id
            }
        }

        jwt.sign(payload, config.get("jwtSecret"), {
            expiresIn: 3600
        }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        })

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Server error" });
    }
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
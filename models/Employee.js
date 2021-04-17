const mongoose = require("mongoose");
const { check, validationResult } = require('express-validator');


const EmployeeSchema = mongoose.Schema({
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'managers'
    },
    employeeName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    created_at: {

        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('employee', EmployeeSchema);
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    mobile: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        require: true
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
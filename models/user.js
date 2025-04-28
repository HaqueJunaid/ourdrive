const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: [true, "Email already exists"],
        trim: true,
        required: true
    },
    password: {
        type: String,
        min: 3,
        trim: true,
        required: true
    }
})

module.exports = mongoose.model("driveUser", userSchema);
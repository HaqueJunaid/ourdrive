const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    filename: {
        type: String,
    },
    path: {
        type: String,
        required: true,
    },
    size: {
        type: Number,
        required: true
    },
    owner: {
        type: mongoose.Schema.ObjectId,
        required: true,
    }
})

module.exports = mongoose.model("file", fileSchema);
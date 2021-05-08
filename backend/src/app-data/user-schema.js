const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    displayPicture: {
        type: String,
    },

    canUpdatePrice: {
        type: Boolean,
        required: true
    },

    petrolStations: {
        type: [String]
    }
});

module.exports = mongoose.model("users", userSchema);

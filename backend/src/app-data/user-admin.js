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
    name: {
        type: String,
        required: true,
    },
    profilePic: {
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

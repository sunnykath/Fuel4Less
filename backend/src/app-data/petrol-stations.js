const mongoose = require("mongoose");

const petrolStationSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true,
    },
    address: {
        street: String,
        city: String,
        latitude: Number,
        longitude: Number,
        postCode: Number,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
        required: true
    },

    discount: {
        type: Number,
    },

    amenities: {
        barista: Boolean,
        toilet: Boolean,
        carwash: Boolean,
    }

});

module.exports = mongoose.model("petrolStations", petrolStationSchema);

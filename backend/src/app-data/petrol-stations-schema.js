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
    },

    name: {
        type: String,
        required: true,
    },
    displayPicture: {
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

const petrolStations = mongoose.model('PetrolStations', petrolStationSchema);

export { petrolStations };

// module.exports = mongoose.model("PetrolStations", petrolStationSchema);

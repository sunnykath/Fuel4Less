import { petrolStations } from './petrol-stations-schema';

async function createPetrolStation(petrolStation) {

    const dbPetrolStation = new petrolStations(petrolStation);
    await dbPetrolStation.save();
    return dbPetrolStation;

}

async function retrievePetrolStationList() {
    return await petrolStations.find();
}

async function retrievePetrolStationById(id) {
    return await petrolStations.findById(id);
}

async function updatePetrolStation(petrolStation) {

    const dbPetrolStation = await petrolStations.findById(petrolStation._id);
    if (dbPetrolStation) {

        dbPetrolStation.price = petrolStations.price;
        dbPetrolStation.address = petrolStations.address;
        dbPetrolStation.name = petrolStations.name;
        dbPetrolStation.displayPicture = petrolStations.displayPicture;
        dbPetrolStation.amenities = petrolStations.amenities;

        await dbPetrolStation.save();
        return true;
    }

    return false;
}
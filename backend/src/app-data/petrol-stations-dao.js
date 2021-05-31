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

        dbPetrolStation.price = petrolStation.price;
        dbPetrolStation.address[0] = petrolStation.address[0];
        dbPetrolStation.name = petrolStation.name;
        dbPetrolStation.displayPicture = petrolStation.displayPicture;
        dbPetrolStation.amenities[0] = petrolStation.amenities[0];

        await dbPetrolStation.save();
        return true;
    }

    return false;
}

async function deletePetrolStation(id) {
    await petrolStations.deleteOne({ _id: id });
}

export {
    createPetrolStation,
    retrievePetrolStationList,
    retrievePetrolStationById,
    updatePetrolStation,
    deletePetrolStation
}
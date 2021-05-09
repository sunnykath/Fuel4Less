/**
 * A RESTful API for dealing with petrol-stations.
 */

import express from 'express';

 
//  Import the DAO from app-data
import {
    createPetrolStation,
    retrievePetrolStationById,
    retrievePetrolStationList,
    updatePetrolStation,
    deletePetrolStation
 } from '../../app-data/petrol-stations-dao';
 

 // const HTTP_OK = 200; // Not needed as this is the default
 const HTTP_CREATED = 201;
 const HTTP_NOT_FOUND = 404;
 const HTTP_NO_CONTENT = 204;
 
 const router = express.Router();


// Add a new petrol station
router.post('/', async (req, res) => {
    const newPetrolStation = await createPetrolStation({
        name: req.body.name,
        price: req.body.price,
        address: req.body.address,
        displayPicture: req.body.displayPicture,
        discount: req.body.discount,
        amenities: req.body.amenities
    });

    res.status(HTTP_CREATED)
        .header('Location', `/api/stations/${newPetrolStation._id}`)
        .json(newPetrolStation);
})

// Retrieve all petrol stations
router.get('/', async (req, res) => {
    res.json(await retrievePetrolStationList());

});

// Retrieve single station
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    const petrolStation = await retrievePetrolStationById(id);

    if (petrolStation) {
        res.json(petrolStation);
    }
    else {
        res.sendStatus(HTTP_NOT_FOUND);
    }
});

// Update station
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const petrolStation = req.body;
    petrolStation._id = id;
    const success = await updatePetrolStation(petrolStation);
    res.sendStatus(success ? HTTP_NO_CONTENT : HTTP_NOT_FOUND);
});

// Delete station
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await deletePetrolStation(id);
    res.sendStatus(HTTP_NO_CONTENT);
});

export default router;

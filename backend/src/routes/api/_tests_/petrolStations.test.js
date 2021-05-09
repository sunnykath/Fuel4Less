import connectToDatabase from '../../../app-data/dbConnect';
import mongoose from 'mongoose';
import routes from '../petrol-stations';
import { MongoMemoryServer } from 'mongodb-memory-server';
import express from 'express';
import axios from 'axios';
import { petrolStations } from '../../../app-data/petrol-stations-schema';

let mongod, app, server;
let petrolStation1, petrolStation2, petrolStation3;

beforeAll(async done => {

    mongod = new MongoMemoryServer();

    const connectionString = await mongod.getUri();
    await mongoose.connect(connectionString, { useNewUrlParser: true });

    app = express();
    app.use('/', routes);
    server = app.listen(3001, () => done());

});


beforeEach(async () => {
    petrolStation1 = {
        price: 10,
        address: ['address1', 'Auckland', 1, 2, 1000],
        name: 'PetrolStaion1',
        displayPicture: 'logo1.jpg',
        discount: 1,
        amenities: [true, false, true]

    };

    petrolStation2 = {
        price: 20,
        address: ['address2', 'Auckland', 2, 3, 2000],
        name: 'PetrolStaion2',
        displayPicture: 'logo2.jpg',
        discount: 2,
        amenities: [false, true, false]
    };

    petrolStation3 = {
        price: 30,
        address: ['address2', 'Auckland', 3, 4, 3000],
        name: 'PetrolStaion3',
        displayPicture: 'logo3.jpg',
        discount: 3
    };

    const dbPetrolStation = new petrolStations(petrolStation1);
    petrolStation1._id = dbPetrolStation._id;
    dbPetrolStation.save();

    const dbPetrolStation2 = new petrolStations(petrolStation2);
    petrolStation2._id = dbPetrolStation2._id;
    dbPetrolStation2.save();

    const dbPetrolStation3 = new petrolStations(petrolStation3);
    petrolStation3._id = dbPetrolStation3._id;
    dbPetrolStation3.save();
});

/**
 * After each test, clear the database entirely
 */
 afterEach(async () => {
    await petrolStations.deleteMany({});
});

afterAll(done => {
    server.close(async () => {
        await mongoose.disconnect();
        await mongod.stop();

        done();
    });
});

it('gets all petrolstations', async () => {
   
    const response = await axios.get('http://localhost:3001/api/stations');
    const petrolstation = response.data;
    
    expect(petrolstation).toBeTruthy();
    expect(petrolstation.length).toBe(3);

    expect(petrolstation[0].price).toBe(10);
    expect(petrolstation[0].address[0]).toBe('address1');
    expect(petrolstation[0].address[1]).toBe('Auckland');
    expect(petrolstation[0].address[2]).toBe(1);
    expect(petrolstation[0].address[3]).toBe(2);
    expect(petrolstation[0].address[4]).toBe(1000);
    expect(petrolstation[0].name).toBe('PetrolStaion2');
    expect(petrolstation[0].displayPicture).toBe('logo2.jpg');
    expect(petrolstation[0].discount).toBe(1);
    expect(petrolstation[0].amenities[0]).toBe(true);
    expect(petrolstation[0].amenities[1]).toBe(false);
    expect(petrolstation[0].amenities[2]).toBe(true);

    expect(petrolstation[1].price).toBe(20);
    expect(petrolstation[1].address[0]).toBe('address2');
    expect(petrolstation[1].address[1]).toBe('Auckland');
    expect(petrolstation[1].address[2]).toBe(2);
    expect(petrolstation[1].address[3]).toBe(3);
    expect(petrolstation[1].address[4]).toBe(2000);
    expect(petrolstation[1].name).toBe('PetrolStaion2');
    expect(petrolstation[1].displayPicture).toBe('logo2.jpg');
    expect(petrolstation[1].discount).toBe(2);
    expect(petrolstation[1].amenities[0]).toBe(false);
    expect(petrolstation[1].amenities[1]).toBe(true);
    expect(petrolstation[1].amenities[2]).toBe(false);

    expect(petrolstation[2].price).toBe(30);
    expect(petrolstation[2].address[0]).toBe('address2');
    expect(petrolstation[2].address[1]).toBe('Auckland');
    expect(petrolstation[2].address[2]).toBe(3);
    expect(petrolstation[2].address[3]).toBe(4);
    expect(petrolstation[2].address[4]).toBe(3000);
    expect(petrolstation[2].name).toBe('PetrolStaion3');
    expect(petrolstation[2].displayPicture).toBe('logo3.jpg');
    expect(petrolstation[2].discount).toBe(3);
    expect(petrolstation[2].amenities).toBeUndefined();
});

it('gets a single petrolstation', async () => {

    const response = await axios.get(`http://localhost:3000/breakfasts/${petrolStation2._id}`);
    const petrolstation = response.data;

    expect(petrolstation.price).toBe(20);
    expect(petrolstation.address[0]).toBe('address2');
    expect(petrolstation.address[1]).toBe('Auckland');
    expect(petrolstation.address[2]).toBe(2);
    expect(petrolstation.address[3]).toBe(3);
    expect(petrolstation.address[4]).toBe(2000);
    expect(petrolstation.name).toBe('PetrolStaion2');
    expect(petrolstation.displayPicture).toBe('logo2.jpg');
    expect(petrolstation.discount).toBe(2);
    expect(petrolstation.amenities[0]).toBe(false);
    expect(petrolstation.amenities[1]).toBe(true);
    expect(petrolstation.amenities[2]).toBe(false);
});

it('adds a petrolstation without crashing', async () => {
    const petrolstaion = new petrolStations({
        price: 10,
        address: ['address1', 'Auckland', 1, 2, 1000],
        name: 'PetrolStaion1',
        displayPicture: 'logo1.jpg',
        discount: 1,
        amenities: [true, false, true]
    });

    const response = await axios.post("http://localhost:3001/create/", petrolstaion);
    expect(response.status).toBe(201);
});
